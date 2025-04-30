export const tag: string = "@ceccuentos";
export const author: string = "Cristián E. Contreras Cabrera";
export const github: string = "https://github.com/ceccuentos";

export const title: string = "Cristián E. Contreras Cabrera - Software Developer";
export const description: string =
  //"I am a self-taught developer who loves to build things for the web. With 5+ years of coding experience, I'm passionate about creating elegant solutions and exploring new technologies. Currently working on exciting projects while remaining open to new opportunities.";
  "Desde la mirada personal como Ingeniero Civil Industrial, PMP®, desarrollador de software y líder de proyectos, este sitio reúne experiencias construidas a lo largo de años trabajando con equipos, diseñando soluciones y explorando el mundo de la tecnología. Aquí encontrarás proyectos, ideas, aprendizajes y también un rincón para los hobbies e intereses que inspiran cada paso del camino.";
export const country: string = "Chile";

export const FooterSocials = [
  {
    name: "GitHub",
    url: github,
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cec/",
    icon: "mdi:linkedin",
  },
  {
    name: "Email",
    url: "mailto:cristian.contreras@codevsys.cl",
    icon: "mdi:email",
  },
];

interface Meta {
  title: string;
  description: string;
  keywords: string[];
  ogImage: {
    src: string;
    alt: string;
  };
}

export const defaultMeta: Meta = {
  title: "Cristián E. Contreras Cabrera - Home",
  description:
    "Descubre el portafolio y blog de Cristián Contreras, Ingeniero Civil Industrial, PMP, desarrollador de software, líder de proyectos y entusiasta de la ciberseguridad. Explora su experiencia en desarrollo web, gestión de proyectos, lenguajes de programación y más, junto con contenidos sobre sus hobbies e intereses personales.",
  keywords: [
    "Cristián Contreras",
    "software developer",
    "Ingeniero Civil Industrial",
    "cybersecurity enthusiast",
    "web development",
    "PMP Project Manager",
    "portfolio",
    "blog",
    "Chile",
    "Gestión de Proyectos",
    "Líder de Proyectos de Tecnología",
  ],
  ogImage: {
    src: "/banner.png",
    alt: "Cristián Contreras - Home",
  },
};

export interface Category {
  text: string;
  logo: string;
}

export type Technologies = {
  "Web Development": Category[];
  "Development Tools": Category[];
  "Hosting and Cloud Services": Category[];
  "Operating Systems": Category[];
  "Other Programming Languages and Technologies": Category[];
  "Web Servers": Category[];
  Databases: Category[];
  "Other Software": Category[];
};

export const technologies: Technologies = {
  "Web Development": [
    { text: "HTML", logo: "mdi:language-html5" },
    { text: "JavaScript", logo: "mdi:language-javascript" },
    { text: "CSS", logo: "mdi:language-css3" },
    // { text: "PHP", logo: "mdi:language-php" },
    { text: "Astro", logo: "simple-icons:astro" },
    { text: "Tailwind CSS", logo: "mdi:tailwind" },
  ],
  "Development Tools": [
    { text: "Visual Studio Code", logo: "mdi:visual-studio-code" },
    { text: "Git", logo: "mdi:git" },
  ],
  "Hosting and Cloud Services": [
    { text: "Aws", logo: "mdi:SiAmazonwebservices" },
    { text: "DigitalOcean", logo: "mdi:digital-ocean" },
    // { text: "Cloudflare", logo: "cib:cloudflare" },
    { text: "Render", logo: "cib:Render" },
    { text: "Netlify", logo: "cib:netlify" },
  ],
  "Operating Systems": [
    { text: "Windows", logo: "mdi:windows" },
    { text: "Ubuntu", logo: "mdi:ubuntu" },
    { text: "Kali", logo: "mdi:SiKalilinux" },
  ],
  "Other Programming Languages and Technologies": [
    { text: "React", logo: "mdi:React" },
    // { text: "Golang", logo: "mdi:language-go" },
    { text: "Node.js", logo: "mdi:nodejs" },
    { text: ".NET", logo: "mdi:SiDotnet" },
    { text: "Python", logo: "mdi:SiPython" },
    { text: "Flutter", logo: "mdi:SiFlutter" },
  ],
  "Web Servers": [
    { text: "Apache", logo: "cib:apache" },
    { text: "Nginx", logo: "cib:nginx" },
  ],
  Databases: [
    { text: "MySQL", logo: "cib:mysql" },
    { text: "MongoDB", logo: "cib:mongodb" },
    { text: "Postgresql", logo: "cib:SiPostgresql" },
  ],
  "Other Software": [
    // { text: "Discord", logo: "mdi:discord" },
    // { text: "Spotify", logo: "mdi:spotify" },
    { text: "Visual Studio", logo: "mdi:visual-studio" },
    { text: "Docker", logo: "mdi:SiDocker" },
    { text: "Kubernetes", logo: "mdi:SiKubernetes" },
    { text: "OpenAi", logo: "mdi:SiOpenai" },
    { text: "Owasp", logo: "mdi:SiOwasp" },

  ],
};
