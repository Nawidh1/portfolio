export interface PortfolioProject {
  id: string
  title: string
  description: string
  longDescription: string
  features: string[]
  images: string[]
  technologies: string[]
  github_url: string | null
  live_url: string | null
  created_at: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Sadat Victorian Association",
    description:
      "Tweetalige communitywebsite voor een islamitische vereniging met nieuws, evenementen, bronnen en een volledig admin-dashboard. Engels en Farsi met dynamisch contentbeheer.",
    longDescription: `Dit project is een uitgebreide communitywebsite voor de Sadat Victorian Association.

De website fungeert als centraal punt voor de gemeenschap, met informatie over evenementen, nieuws, bronnen en manieren om betrokken te raken.

Een belangrijk onderdeel is de tweetalige ondersteuning — gebruikers kunnen wisselen tussen Engels en Farsi, zodat de content voor een breder publiek toegankelijk is.

Het admin-dashboard laat bevoegde gebruikers alle content beheren, inclusief nieuwsartikelen, evenementen, bronnen en homepage-secties, zonder code aan te passen.`,
    features: [
      "Tweetalige ondersteuning (Engels & Farsi)",
      "Dynamisch contentbeheer",
      "Admin-dashboard met authenticatie",
      "Nieuws- en evenementenbeheer",
      "Bronnenbibliotheek",
      "Contactformulier",
      "Responsive design",
    ],
    images: [
      "/projects/sadat/1.png",
      "/projects/sadat/2.png",
      "/projects/sadat/3.png",
      "/projects/sadat/4.png",
      "/projects/sadat/5.png",
      "/projects/sadat/6.png",
      "/projects/sadat/7.png",
    ],
    technologies: ["PHP", "CSS", "JavaScript"],
    github_url: "https://github.com/Nawidh1/sadat-victorian-association",
    live_url: null,
    created_at: "2024-01-01T00:00:00.000Z",
  },
  {
    id: "3",
    title: "Kapper Omid",
    description:
      "Kapperswebsite met online reserveringssysteem, gebruikersaccounts, dienstenbeheer en admin-dashboard. Gebouwd met PHP en MySQL.",
    longDescription: `Kapper Omid is een complete kapperswebsite gebouwd met PHP en MySQL. De website biedt een volledige oplossing voor het beheren van afspraken, diensten en klantcontact.

Het systeem bevat gebruikersregistratie en authenticatie, zodat klanten accounts kunnen aanmaken, reserveringen kunnen maken, hun boekingsgeschiedenis kunnen bekijken en hun profiel kunnen beheren. Het admin-dashboard geeft volledige controle over diensten, reserveringen, gebruikers en websitecontent.

Belangrijke functies zijn een online reserveringssysteem met beschikbaarheidscontrole, een dienstencatalogus, contactformulier met e-mailnotificaties, gebruikersprofielen en een volledig adminpaneel.`,
    features: [
      "Online reserveringssysteem",
      "Gebruikersauthenticatie en profielen",
      "Admin-dashboard",
      "Dienstenbeheer",
      "Contactformulier met e-mailnotificaties",
      "Reserveringsgeschiedenis",
      "Responsive design",
      "Meertalige ondersteuning",
    ],
    images: [
      "/projects/omidtje/preview.png",
      "/projects/omidtje/1.png",
      "/projects/omidtje/2.png",
      "/projects/omidtje/3.png",
      "/projects/omidtje/4.png",
      "/projects/omidtje/5.png",
      "/projects/omidtje/6.png",
      "/projects/omidtje/7.png",
    ],
    technologies: ["PHP", "CSS"],
    github_url: "https://github.com/Nawidh1/omid",
    live_url: null,
    created_at: "2024-06-01T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Brasserie Pizzeria Hama",
    description:
      "Restaurantwebsite voor Brasserie Pizzeria Hama in Terneuzen — volledige menukaart met categorieën, online bestellen, tafelreserveringen en halal gerechten.",
    longDescription: `Brasserie Pizzeria Hama is een restaurantwebsite voor een brasserie en pizzeria in Terneuzen. De site presenteert het merk met een donker, goud-accent design en helpt gasten online te bestellen, een tafel te reserveren of de volledige menukaart te bekijken.

De menukaart is ingedeeld per categorie — voorgerechten, pizza's, pasta's, vlees, vis, desserts, dranken en meer — met prijzen en beschrijvingen per gerecht. Een uitgelichte sectie toont populaire gerechten en de aanrader van de dag.

Bezoekers kunnen direct bellen, online bestellen en openingstijden en bezorgtijden bekijken. Alle vleesgerechten zijn 100% halal.`,
    features: [
      "Volledige menukaart met categoriefilters",
      "Online bestellen",
      "Tafelreserveringen",
      "Halal-menu sectie",
      "Openingstijden & bezorgtijden",
      "Responsive design",
    ],
    images: [
      "/projects/hama/1.png",
      "/projects/hama/2.png",
      "/projects/hama/3.png",
      "/projects/hama/4.png",
    ],
    technologies: ["Astro", "TypeScript", "PL/pgSQL", "CSS", "JavaScript"],
    github_url: null,
    live_url: null,
    created_at: "2025-01-01T00:00:00.000Z",
  },
]

export function getProjectById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id)
}
