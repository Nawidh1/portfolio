export type Locale = "en" | "nl";

export interface ProjectTranslation {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    menuLabel: string;
  };
  hero: {
    role: string;
    bio: string;
    viewProjects: string;
    getInTouch: string;
    scroll: string;
  };
  about: {
    label: string;
    role: string;
    headingWords: string[];
    headingHighlights: number[];
    paragraphs: string[];
    stats: { value: string; label: string }[];
    whatIBuild: { title: string; subtitle: string; items: { icon: string; title: string; desc: string }[] };
    projectExperience: { title: string; subtitle: string; items: { title: string; desc: string; tech: string }[] };
    background: { title: string; subtitle: string; items: { icon: string; title: string; desc: string }[] };
    beyondCode: { title: string; subtitle: string; items: { icon: string; title: string; desc: string }[] };
    goals: { title: string; text: string; viewProjects: string; getInTouch: string };
  };
  skills: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    technologies: string;
    categories: string;
    skillsCount: string;
    footer: string;
    groups: { label: string; description: string }[];
  };
  projects: {
    label: string;
    title: string;
    titleBold: string;
    subtitle: string;
    schoolSection: { title: string; subtitle: string };
    clientSection: { title: string; subtitle: string };
    schoolBadge: string;
    clientBadge: string;
    photoCount: string;
    emptyTitle: string;
    emptySubtitle: string;
    viewDetails: string;
    viewCode: string;
    liveDemo: string;
    footerNote: string;
    screenshot: string;
    scrollLeft: string;
    scrollRight: string;
    notFound: string;
    backToProjects: string;
    back: string;
    projectDetails: string;
    aboutProject: string;
    features: string;
    links: string;
    viewOnGitHub: string;
    thumbnail: string;
    projects: Record<string, ProjectTranslation>;
  };
  experience: {
    label: string;
    title: string;
    titleHighlight: string;
    journey: { year: string; title: string; desc: string; icon: string }[];
    stats: { label: string; value: string }[];
    technicalFocus: string;
    skillNames: { frontend: string; backend: string; database: string; uiux: string };
    keepLearning: { title: string; text: string };
  };
  contact: {
    label: string;
    title: string;
    titleBold: string;
    subtitle: string;
    details: string;
    email: string;
    location: string;
    locationValue: string;
    socialMedia: string;
    sendMessage: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sending: string;
    sent: string;
    send: string;
    error: string;
    success: string;
  };
  footer: {
    github: string;
  };
  language: {
    switchTo: string;
    current: string;
  };
}
