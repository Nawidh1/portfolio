import type { Translations } from "./types";

export const nl: Translations = {
  nav: {
    home: "Home",
    about: "Over mij",
    skills: "Skills",
    projects: "Projecten",
    experience: "Ervaring",
    contact: "Contact",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    menuLabel: "Navigatiemenu",
  },
  hero: {
    role: "Software Development Student",
    bio: "MBO Software Development student met een passie voor het bouwen van webapplicaties. Elke dag leer ik om een betere developer te worden.",
    viewProjects: "Bekijk projecten",
    getInTouch: "Neem contact op",
    scroll: "Scroll",
  },
  about: {
    label: "Over mij",
    role: "Software Development Student",
    headingWords: ["Gepassioneerd", "over", "het", "bouwen", "van", "digitale", "ervaringen."],
    headingHighlights: [3, 5],
    paragraphs: [
      "Ik ben Nawid Haidari, een Software Development student (MBO 4) in het derde jaar met een passie voor software die goed werkt en prettig aanvoelt voor de gebruiker.",
      "Ik hou van het oplossen van technische uitdagingen en groei met elk project dat ik aanneem. Lees hieronder meer over wat ik bouw, mijn projecten, achtergrond en interesses.",
    ],
    stats: [
      { value: "MBO 4", label: "Niveau" },
      { value: "Jaar 3", label: "Huidig" },
      { value: "2026", label: "Afstuderen" },
      { value: "8 jr", label: "In Nederland" },
    ],
    whatIBuild: {
      title: "Wat ik bouw",
      subtitle: "Tijdens mijn studie en projecten werk ik aan verschillende soorten software — altijd met de gebruiker in gedachten.",
      items: [
        { icon: "🌐", title: "Websites", desc: "Responsive websites voor bedrijven en organisaties, met duidelijke structuur, menu's, contactformulieren en een professionele uitstraling." },
        { icon: "⚙️", title: "Webapplicaties", desc: "Systemen met gebruikersaccounts, admin dashboards, boekingen, contentbeheer en database-integraties." },
        { icon: "🗄️", title: "Databases & Backend", desc: "Data opslaan en beheren met SQL, MySQL, Supabase en PostgreSQL — veilig, gestructureerd en productie-klaar." },
      ],
    },
    projectExperience: {
      title: "Projectervaring",
      subtitle: "Enkele projecten die ik heb gebouwd tijdens mijn studie en daarna.",
      items: [
        { title: "Sadat Victorian Association", desc: "Tweetalige communitywebsite met nieuws, evenementen en admin dashboard.", tech: "PHP · CSS · JavaScript" },
        { title: "Kapper Omid", desc: "Kapperswebsite met online boekingen, gebruikersaccounts en e-mailnotificaties.", tech: "PHP · CSS · PHPMailer" },
        { title: "Brasserie Pizzeria Hama", desc: "Restaurantwebsite met volledig menu, bestellen en reserveringen.", tech: "Astro · TypeScript · PL/pgSQL" },
      ],
    },
    background: {
      title: "Mijn achtergrond",
      subtitle: "Een korte blik op mijn familie, waar ik woon en wat ik plan na mijn afstuderen.",
      items: [
        { icon: "👨‍👩‍👦‍👦", title: "Familie", desc: "Ik heb vier broers. Eén broer is getrouwd en woont in Australië; de rest van mijn familie woont in Nederland." },
        { icon: "🇳🇱", title: "Nederland", desc: "We wonen al bijna 8 jaar in Nederland. Hier studeer ik Software Development en bouw ik aan mijn carrière als developer." },
        { icon: "🇦🇺", title: "Plannen voor Australië", desc: "Na mijn studie plan ik te verhuizen naar Australië — ook om dichter bij familie te zijn." },
      ],
    },
    beyondCode: {
      title: "Naast code",
      subtitle: "Naast software development heb ik andere interesses die me scherp en nieuwsgierig houden.",
      items: [
        { icon: "⚽", title: "Voetbal", desc: "Ik hou van voetbal — kijken, spelen en de sport volgen houdt me actief en competitief." },
        { icon: "🎮", title: "Gaming", desc: "In mijn vrije tijd game ik graag. Het helpt me ook sneller te denken en problemen op te lossen." },
        { icon: "🚀", title: "Toekomsttechnologie", desc: "Ik volg nieuwe tech en innovaties — AI, cloud, moderne frameworks en wat de toekomst brengt." },
        { icon: "📈", title: "Crypto & Trading", desc: "In mijn vrije tijd leer ik over crypto en aandelenhandel om markten en technologie beter te begrijpen." },
      ],
    },
    goals: {
      title: "Waar ik naartoe ga",
      text: "Na mijn studie wil ik doorgroeien als full-stack developer en verhuizen naar Australië. Daar hoop ik werk te vinden in de techsector, te blijven leren van ervaren developers en bij te dragen aan betekenisvolle projecten — in Nederland of internationaal, zolang ik kan blijven bouwen en groeien.",
      viewProjects: "Bekijk mijn projecten",
      getInTouch: "Neem contact op",
    },
  },
  skills: {
    label: "Skills",
    titleLine1: "Technologieën",
    titleLine2: "waarmee ik werk",
    technologies: "Technologieën",
    categories: "Categorieën",
    skillsCount: "skills",
    footer: "Elke technologie bewust gekozen. Mijn toolkit blijft groeien.",
    groups: [
      { label: "Frontend", description: "Mooie, responsive gebruikersinterfaces bouwen" },
      { label: "Backend", description: "Serverlogica en databasebeheer" },
      { label: "Tools", description: "Ontwikkelworkflow en samenwerking" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Mijn",
    titleBold: "projecten",
    subtitle: "Een overzicht van wat ik heb gebouwd — tijdens mijn studie en voor klanten.",
    schoolSection: {
      title: "Schoolprojecten",
      subtitle: "Projecten die ik tijdens mijn MBO Software Development opleiding heb gemaakt.",
    },
    clientSection: {
      title: "Klantprojecten",
      subtitle: "Websites en applicaties die ik voor opdrachtgevers heb gebouwd.",
    },
    schoolBadge: "School",
    clientBadge: "Klant",
    photoCount: "screenshots",
    emptyTitle: "Nog geen projecten",
    emptySubtitle: "Projecten verschijnen hier zodra ze zijn toegevoegd",
    viewDetails: "Bekijk details",
    viewCode: "Bekijk code",
    liveDemo: "Live demo",
    footerNote: "Meer projecten volgen terwijl ik blijf leren en bouwen",
    screenshot: "screenshot",
    scrollLeft: "Naar links scrollen",
    scrollRight: "Naar rechts scrollen",
    notFound: "Project niet gevonden",
    backToProjects: "← Terug naar projecten",
    back: "← Terug",
    projectDetails: "Projectdetails",
    aboutProject: "Over dit project",
    features: "Functies",
    links: "Links",
    viewOnGitHub: "Bekijk op GitHub",
    thumbnail: "Miniatuur",
    projects: {
      "1": {
        title: "Sadat Victorian Association",
        description: "Tweetalige communitywebsite voor een islamitische vereniging met nieuws, evenementen, bronnen en een volledig admin dashboard. Engels en Farsi met dynamisch contentbeheer.",
        longDescription: `Dit project is een uitgebreide communitywebsite voor de Sadat Victorian Association.

De website dient als centraal punt voor de community en biedt informatie over evenementen, nieuws, bronnen en manieren om betrokken te raken.

Een belangrijk kenmerk is tweetalige ondersteuning — gebruikers kunnen wisselen tussen Engels en Farsi, waardoor content toegankelijk is voor een breder publiek.

Het admin dashboard stelt geautoriseerde gebruikers in staat alle content te beheren, inclusief nieuwsartikelen, evenementen, bronnen en homepage-secties, zonder code te bewerken.`,
        features: [
          "Tweetalige ondersteuning (Engels & Farsi)",
          "Dynamisch contentbeheer",
          "Admin dashboard met authenticatie",
          "Nieuws- en evenementenbeheer",
          "Bronnenbibliotheek",
          "Contactformulier",
          "Responsive design",
        ],
      },
      "2": {
        title: "Gear2Go",
        description: "Peer-to-peer marketplace om sportmateriaal te huren — browse, kaart, advertenties plaatsen en gebruikersprofielen. Schoolproject met PHP en PostgreSQL.",
        longDescription: `Gear2Go is een community marketplace waar gebruikers sportmateriaal van elkaar kunnen huren — van surfboards en fietsen tot wintersport en balsport.

Het platform biedt een homepage met categorieën, een browse-pagina met filters, een interactieve kaart met locaties in Nederland, en een meerstapsformulier om eigen materiaal te verhuren. Gebruikers hebben profielen met verificaties, een inbox voor berichten, en admins kunnen advertenties modereren.

Het project is gebouwd tijdens mijn opleiding Software Development met PHP, PostgreSQL (Supabase), JavaScript en een donker, modern UI-design. De site ondersteunt Engels en Nederlands.`,
        features: [
          "Homepage met categorieën en top gear",
          "Browse & zoeken met filters",
          "Interactieve kaart met locaties",
          "Advertentie plaatsen (foto's, details, locatie)",
          "Gebruikersprofielen en verificaties",
          "Inbox & berichten",
          "Admin moderatie van advertenties",
          "Tweetalig (EN / NL)",
        ],
      },
      "3": {
        title: "Kapper Omid",
        description: "Kapperswebsite met online boekingssysteem, gebruikersaccounts, dienstenbeheer en admin dashboard. Gebouwd met PHP en MySQL.",
        longDescription: `Kapper Omid is een complete kapperswebsite gebouwd met PHP en MySQL. De website biedt een volledige oplossing voor het beheren van afspraken, diensten en klantcontact.

Het systeem bevat gebruikersregistratie en authenticatie, zodat klanten accounts kunnen aanmaken, boekingen kunnen maken, hun boekingsgeschiedenis kunnen bekijken en hun profielen kunnen beheren. Het admin dashboard biedt volledige controle over diensten, boekingen, gebruikers en websitecontent.

Belangrijke functies zijn een online boekingssysteem met beschikbaarheidscontrole, een dienstencatalogus, contactformulier met e-mailnotificaties, gebruikersprofielen en een volledig admin panel.`,
        features: [
          "Online boekingssysteem",
          "Gebruikersauthenticatie en profielen",
          "Admin dashboard",
          "Dienstenbeheer",
          "Contactformulier met e-mailnotificaties",
          "Boekingsgeschiedenis",
          "Responsive design",
          "Meertalige ondersteuning",
        ],
      },
      "4": {
        title: "Brasserie Pizzeria Hama",
        description: "Restaurantwebsite voor Brasserie Pizzeria Hama in Terneuzen — volledig menu met categorieën, online bestellen, tafelreserveringen en halal gerechten.",
        longDescription: `Brasserie Pizzeria Hama is een restaurantwebsite voor een brasserie en pizzeria in Terneuzen. De site presenteert het merk met een donker, goud-accent design en helpt gasten online te bestellen, een tafel te reserveren of het volledige menu te bekijken.

Het menu is georganiseerd per categorie — voorgerechten, pizza's, pasta, vlees, vis, desserts, dranken en meer — met prijzen en beschrijvingen per gerecht. Een uitgelichte sectie toont populaire gerechten en het gerecht van de dag.

Bezoekers kunnen direct bellen, online bestellen en openingstijden en bezorgtijden bekijken. Alle vleesgerechten zijn 100% halal.`,
        features: [
          "Volledig menu met categoriefilters",
          "Online bestellen",
          "Tafelreserveringen",
          "Halal menu sectie",
          "Openingstijden & bezorgtijden",
          "Responsive design",
        ],
      },
    },
  },
  experience: {
    label: "Mijn achtergrond",
    title: "Opleiding &",
    titleHighlight: "ervaring",
    journey: [
      { year: "2022", title: "Gestart MBO 4", desc: "Begonnen met Software Development. Leerde programmeerfundamenten, logica en webdevelopment.", icon: "🎓" },
      { year: "2023", title: "Eerste webprojecten", desc: "Bouwde applicaties met HTML, CSS, JavaScript en PHP. Leerde ook databasedesign met MySQL.", icon: "💻" },
      { year: "2024", title: "Moderne tech stack", desc: "Overgestapt naar React, Next.js en Tailwind CSS. Ook Node.js verkend.", icon: "⚡" },
      { year: "2025", title: "Full-stack focus", desc: "Derdejaars student. Bouw complexe full-stack apps en breid mijn skills continu uit.", icon: "🚀" },
      { year: "2026", title: "Portfolio & klantprojecten", desc: "Mijn eigen portfolio gelanceerd en meerdere real-world projecten opgeleverd, waaronder Brasserie Hama met Astro, TypeScript en Supabase.", icon: "🌐" },
    ],
    stats: [
      { label: "School", value: "MBO 4" },
      { label: "Opleiding", value: "Software Dev" },
      { label: "Status", value: "Jaar 3 · 2026" },
    ],
    technicalFocus: "Technische focus",
    skillNames: { frontend: "Frontend", backend: "Backend", database: "Database", uiux: "UI/UX" },
    keepLearning: {
      title: "Blijven leren",
      text: "In 2026 breid ik mijn kennis uit in cloud deployment, Supabase en moderne frameworks om productie-klaar en onderhoudbare applicaties te bouwen.",
    },
  },
  contact: {
    label: "Neem contact op",
    title: "Laten we",
    titleBold: "praten",
    subtitle: "Interesse in samenwerken of heb je een vraag? Stuur gerust een bericht — ik hoor graag van je.",
    details: "Contactgegevens",
    email: "E-mail",
    location: "Locatie",
    locationValue: "Nederland",
    socialMedia: "Social media",
    sendMessage: "Stuur een bericht",
    formName: "Naam",
    formEmail: "E-mail",
    formMessage: "Bericht",
    namePlaceholder: "Je naam",
    emailPlaceholder: "jij@email.com",
    messagePlaceholder: "Vertel me over je project of zeg gewoon hallo...",
    sending: "Versturen...",
    sent: "Bericht verstuurd!",
    send: "Verstuur bericht",
    error: "Er ging iets mis bij het versturen. Probeer het opnieuw.",
    success: "Bedankt! Je bericht is succesvol verstuurd.",
  },
  footer: { github: "GitHub" },
  language: { switchTo: "Switch to English", current: "NL" },
};
