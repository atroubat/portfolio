import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Alexandre Troubat",
  EMAIL: "contact@atroubat.fr",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Accueil",
  DESCRIPTION: "Portfolio d'Alexandre Troubat — Site Reliability Engineer basé à Limoges, France.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Articles sur le SRE, l'infrastructure et les technologies.",
};

export const WORK: Metadata = {
  TITLE: "Expérience",
  DESCRIPTION: "Mon parcours professionnel et mes réalisations.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projets",
  DESCRIPTION: "Une sélection de mes projets, avec liens vers les dépôts et démos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/atroubat"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/alexandre-troubat",
  }
];
