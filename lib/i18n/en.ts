import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuLabel: "Navigation menu",
  },
  hero: {
    role: "Software Development Student",
    bio: "MBO Software Development student passionate about building web applications. Learning every day to become a better developer.",
    viewProjects: "View Projects",
    getInTouch: "Get in Touch",
    scroll: "Scroll",
  },
  about: {
    label: "About Me",
    role: "Software Development Student",
    headingWords: ["Passionate", "about", "building", "digital", "experiences."],
    headingHighlights: [2, 3],
    paragraphs: [
      "I'm Nawid Haidari, a third-year Software Development student (MBO 4) with a passion for building software that works well and feels great for the user.",
      "I love solving technical challenges and I grow with every project I take on. Read more about what I build, my projects, background, and interests below.",
    ],
    stats: [
      { value: "MBO 4", label: "Level" },
      { value: "Year 3", label: "Current" },
      { value: "2026", label: "Graduating" },
      { value: "8 yrs", label: "In Netherlands" },
    ],
    whatIBuild: {
      title: "What I Build",
      subtitle: "During my studies and projects I work on different types of software — always with the user in mind.",
      items: [
        { icon: "🌐", title: "Websites", desc: "Responsive websites for businesses and organizations, with clear structure, menus, contact forms, and a professional look." },
        { icon: "⚙️", title: "Web Applications", desc: "Systems with user accounts, admin dashboards, bookings, content management, and database integrations." },
        { icon: "🗄️", title: "Databases & Backend", desc: "Storing and managing data with SQL, MySQL, Supabase, and PostgreSQL — secure, structured, and production-ready." },
      ],
    },
    projectExperience: {
      title: "Project Experience",
      subtitle: "Some projects I've built during my studies and beyond.",
      items: [
        { title: "Sadat Victorian Association", desc: "Bilingual community website with news, events, and admin dashboard.", tech: "PHP · CSS · JavaScript" },
        { title: "Kapper Omid", desc: "Barber shop website with online bookings, user accounts, and email notifications.", tech: "PHP · CSS · PHPMailer" },
        { title: "Brasserie Pizzeria Hama", desc: "Restaurant website with full menu, ordering, and reservations.", tech: "Astro · TypeScript · PL/pgSQL" },
      ],
    },
    background: {
      title: "My Background",
      subtitle: "A brief look at my family, where I live, and what I plan after graduation.",
      items: [
        { icon: "👨‍👩‍👦‍👦", title: "Family", desc: "I have four brothers. One brother is married and lives in Australia; the rest of my family lives in the Netherlands." },
        { icon: "🇳🇱", title: "Netherlands", desc: "We've been living in the Netherlands for almost 8 years. Here I study Software Development and build my career as a developer." },
        { icon: "🇦🇺", title: "Plans for Australia", desc: "After completing my studies, I plan to move to Australia — also to be closer to family." },
      ],
    },
    beyondCode: {
      title: "Beyond Code",
      subtitle: "Besides software development, I have other interests that keep me sharp and curious.",
      items: [
        { icon: "⚽", title: "Football", desc: "I love football — watching, playing, and following the sport keeps me active and competitive." },
        { icon: "🎮", title: "Gaming", desc: "I enjoy gaming in my free time. It also helps me think faster and solve problems." },
        { icon: "🚀", title: "Future Technology", desc: "I follow new tech and innovations — AI, cloud, modern frameworks, and what the future brings." },
        { icon: "📈", title: "Crypto & Trading", desc: "In my free time I learn about crypto and stock trading to better understand markets and technology." },
      ],
    },
    goals: {
      title: "Where I'm Headed",
      text: "After my studies I want to grow as a full-stack developer and move to Australia. There I hope to find work in the tech sector, keep learning from experienced developers, and contribute to meaningful projects — in the Netherlands or internationally, as long as I can keep building and growing.",
      viewProjects: "View My Projects",
      getInTouch: "Get in Touch",
    },
  },
  skills: {
    label: "Skills",
    titleLine1: "Technologies",
    titleLine2: "I work with",
    technologies: "Technologies",
    categories: "Categories",
    skillsCount: "skills",
    footer: "Every technology chosen with purpose. My toolkit keeps growing.",
    groups: [
      { label: "Frontend", description: "Building beautiful, responsive user interfaces" },
      { label: "Backend", description: "Server logic and database management" },
      { label: "Tools", description: "Development workflow and collaboration" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "My",
    titleBold: "projects",
    subtitle: "Projects I've built during my studies. Each one helped me grow as a developer.",
    emptyTitle: "No projects yet",
    emptySubtitle: "Projects will appear here once added",
    viewDetails: "View Details",
    viewCode: "View Code",
    liveDemo: "Live demo",
    footerNote: "More projects coming as I keep learning and building",
    screenshot: "screenshot",
    scrollLeft: "Scroll left",
    scrollRight: "Scroll right",
    notFound: "Project not found",
    backToProjects: "← Back to projects",
    back: "← Back",
    projectDetails: "Project Details",
    aboutProject: "About This Project",
    features: "Features",
    links: "Links",
    viewOnGitHub: "View on GitHub",
    thumbnail: "Thumbnail",
    projects: {
      "1": {
        title: "Sadat Victorian Association",
        description: "Bilingual community website for an Islamic association with news, events, resources, and a full admin dashboard. English and Farsi with dynamic content management.",
        longDescription: `This project is a comprehensive community website for the Sadat Victorian Association.

The website serves as a central hub for the community, providing information about events, news, resources, and ways to get involved.

A key feature is bilingual support — users can switch between English and Farsi, making content accessible to a wider audience.

The admin dashboard allows authorized users to manage all content, including news articles, events, resources, and homepage sections, without editing code.`,
        features: [
          "Bilingual support (English & Farsi)",
          "Dynamic content management",
          "Admin dashboard with authentication",
          "News and event management",
          "Resource library",
          "Contact form",
          "Responsive design",
        ],
      },
      "3": {
        title: "Kapper Omid",
        description: "Barber shop website with online booking system, user accounts, service management, and admin dashboard. Built with PHP and MySQL.",
        longDescription: `Kapper Omid is a complete barber shop website built with PHP and MySQL. The website provides a full solution for managing appointments, services, and customer contact.

The system includes user registration and authentication, so customers can create accounts, make bookings, view their booking history, and manage their profiles. The admin dashboard provides full control over services, bookings, users, and website content.

Key features include an online booking system with availability checks, a service catalog, contact form with email notifications, user profiles, and a full admin panel.`,
        features: [
          "Online booking system",
          "User authentication and profiles",
          "Admin dashboard",
          "Service management",
          "Contact form with email notifications",
          "Booking history",
          "Responsive design",
          "Multilingual support",
        ],
      },
      "4": {
        title: "Brasserie Pizzeria Hama",
        description: "Restaurant website for Brasserie Pizzeria Hama in Terneuzen — full menu with categories, online ordering, table reservations, and halal dishes.",
        longDescription: `Brasserie Pizzeria Hama is a restaurant website for a brasserie and pizzeria in Terneuzen. The site presents the brand with a dark, gold-accent design and helps guests order online, reserve a table, or browse the full menu.

The menu is organized by category — starters, pizzas, pasta, meat, fish, desserts, drinks, and more — with prices and descriptions for each dish. A featured section highlights popular dishes and the dish of the day.

Visitors can call directly, order online, and view opening hours and delivery times. All meat dishes are 100% halal.`,
        features: [
          "Full menu with category filters",
          "Online ordering",
          "Table reservations",
          "Halal menu section",
          "Opening hours & delivery times",
          "Responsive design",
        ],
      },
    },
  },
  experience: {
    label: "My Background",
    title: "Education &",
    titleHighlight: "experience",
    journey: [
      { year: "2022", title: "Started MBO 4", desc: "Began Software Development. Learned programming fundamentals, logic, and web development.", icon: "🎓" },
      { year: "2023", title: "First web projects", desc: "Built applications with HTML, CSS, JavaScript, and PHP. Also learned database design with MySQL.", icon: "💻" },
      { year: "2024", title: "Modern tech stack", desc: "Moved to React, Next.js, and Tailwind CSS. Also explored Node.js.", icon: "⚡" },
      { year: "2025", title: "Full-stack focus", desc: "Third-year student. Building complex full-stack apps and continuously expanding my skills.", icon: "🚀" },
      { year: "2026", title: "Portfolio & client projects", desc: "Launched my own portfolio and delivered multiple real-world projects, including Brasserie Hama with Astro, TypeScript, and Supabase.", icon: "🌐" },
    ],
    stats: [
      { label: "School", value: "MBO 4" },
      { label: "Program", value: "Software Dev" },
      { label: "Status", value: "Year 3 · 2026" },
    ],
    technicalFocus: "Technical Focus",
    skillNames: { frontend: "Frontend", backend: "Backend", database: "Database", uiux: "UI/UX" },
    keepLearning: {
      title: "Keep Learning",
      text: "In 2026 I'm expanding my knowledge in cloud deployment, Supabase, and modern frameworks to build production-ready and maintainable applications.",
    },
  },
  contact: {
    label: "Get in Touch",
    title: "Let's",
    titleBold: "talk",
    subtitle: "Interested in working together or have a question? Feel free to send a message — I'd love to hear from you.",
    details: "Contact Details",
    email: "Email",
    location: "Location",
    locationValue: "Netherlands",
    socialMedia: "Social Media",
    sendMessage: "Send a Message",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Tell me about your project or just say hello...",
    sending: "Sending...",
    sent: "Message sent!",
    send: "Send Message",
    error: "Something went wrong while sending. Please try again.",
    success: "Thank you! Your message was sent successfully.",
  },
  footer: { github: "GitHub" },
  language: { switchTo: "Switch to Dutch", current: "EN" },
};
