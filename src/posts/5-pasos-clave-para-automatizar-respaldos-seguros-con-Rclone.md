---
title: "5 pasos clave para automatizar respaldos seguros con Rclone"
slug: "5-pasos-clave-para-automatizar-respaldos-seguros-con-Rclone"

heroAlt: "Automatiza respaldos en la nube con seguridad y control usando Rclone"
description: "Descubre cómo crear un control de seguridad que automatiza respaldos periódicos desde Google Drive a Dropbox con rclone, minimizando errores humanos y evitando límites de la API. Incluye script Bash listo para producción."
pubDate: 2025-05-08
updatedDate: 2025-05-08
tags:
  - "rclone"
  - "bash"
  - "automatización"
  - "respaldo"
  - "seguridad de la información"
  - "Google Drive"
  - "Dropbox"
  - "cuotas de API"
  - "linux scripting"
---


# 🔐 5 pasos clave para automatizar respaldos seguros con Rclone (con código incluido)

En todo sistema crítico, los respaldos no son una opción: son una obligación. Y cuando se trata de plataformas cloud como Google Drive y Dropbox, necesitamos algo más que copiar y pegar archivos. Por eso, te presento cómo implementamos un **control de seguridad automatizado** con `rclone`, para respaldos periódicos, auditables y eficientes.

---

## ✅ Paso 1: ¿Por qué `rclone`?

[`rclone`](https://rclone.org/) es una herramienta de línea de comandos que actúa como un "rsync para la nube". Soporta más de 50 servicios como Google Drive, Dropbox, S3, Azure, entre otros. Permite:

- Sincronización y copiado de archivos
- Cifrado opcional
- Control por filtros
- Automatización por cron o sistema

---

## 🧰 Paso 2: Configuración de remotos

Con `rclone config` conectamos con Google Drive y Dropbox. Para evitar errores de cuota (`Quota exceeded`), **creamos un `client_id` y `client_secret` personalizados desde Google Cloud Console**, y los aplicamos a nuestro `remote`.

```ini
[google-drive_australis_Compliance]
type = drive
client_id = TU_CLIENT_ID.apps.googleusercontent.com
client_secret = TU_CLIENT_SECRET
scope = drive
```

Para carpetas compartidas, usamos el flag especial:

```bash
--drive-shared-with-me
```

---

## 🧩 Paso 3: Script automatizado en Bash

Aquí el script base, que admite opciones inteligentes como:

- Directorios de origen y destino
- Soporte para carpetas compartidas (`shared`)
- Modo solo verificación (`check`)
- Filtros para copiar solo archivos específicos (por nombre)

```bash
#!/bin/bash

if [ $# -lt 1 ] || [ $# -gt 4 ]; then
    echo "Uso: $0 <origen> [destino] [shared] [check]"
    exit 1
fi

origen="$1"
destino="${2:-$1}"
usar_shared="$3"
modo_check="$4"

dir_origen="google-drive_australis_Compliance:$origen"
dir_destino="dropbox_australis:Backup/2025/$destino"
fecha_hora=$(date +"%Y%m%d_%H%M%S")
log_file="/home/cec/backup_log/log_${destino}_$fecha_hora.txt"

writeLog() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1: $2" | tee -a "$log_file"
}

shared_flag=""
[ "$usar_shared" == "shared" ] && shared_flag="--drive-shared-with-me"

rclone lsd "$dir_origen" $shared_flag &>> "$log_file" || {
    writeLog "ERROR" "Origen no accesible: $dir_origen"
    exit 1
}

rclone lsd "$dir_destino" &>> "$log_file" || {
    rclone mkdir "$dir_destino" && writeLog "INFO" "Destino creado: $dir_destino"
}

if [ "$modo_check" == "check" ]; then
    rclone check "$dir_origen" "$dir_destino" $shared_flag --one-way --log-file "$log_file"
    exit 0
fi

writeLog "INFO" "Inicia respaldo de archivos log_australis*"
rclone copy "$dir_origen" "$dir_destino"     --include "log_australis*"     --tpslimit 5     --transfers 2     --checkers 4     -P -vv $shared_flag     --log-file "$log_file"

writeLog "INFO" "Fin del respaldo"
```

---

## 🔄 Paso 4: Prevención de errores y validación

Para evitar ejecutar el respaldo equivocado, se agregó una **confirmación interactiva**:

```bash
read -p "¿Estás seguro de ejecutar el respaldo $origen → $destino? [s/N] " confirm
[[ "$confirm" != [sS] ]] && echo "Cancelado." && exit 1
```

---

## 📊 Paso 5: Trazabilidad y monitoreo

Cada ejecución:

- Crea un log con marca de tiempo
- Verifica origen y destino
- Informa errores como cuotas excedidas
- Puede integrarse con `cron` o `systemd` para ejecutar periódicamente

Ejemplo para crontab:

```bash
0 2 * * * /home/cec/scripts/sync.sh Compliance Compliance shared >> /var/log/respaldo.log
```

---

## 🎯 Resultado

Hemos implementado un **control de seguridad robusto y automatizado** que permite:

- Resguardar datos clave de forma periódica
- Minimizar errores humanos
- Operar dentro de los límites de la API de Google Drive
- Auditar cada paso del proceso

---

¿Te gustaría extender este control con cifrado de archivos o respaldo incremental con versionado? ¡Ese podría ser tu siguiente nivel!
