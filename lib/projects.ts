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
      "A bilingual community website for an Islamic association featuring news, events, resources, and a full admin dashboard. Supports English and Farsi with dynamic content management.",
    longDescription: `This project is a full-featured community website built for the Sadat Victorian Association.

The website serves as a central hub for the community, providing information about events, news, resources, and ways to get involved.

One of the key features is the bilingual support - users can switch between English and Farsi, making the content accessible to a wider audience.

The admin dashboard allows authorized users to manage all content including news articles, events, resources, and homepage sections without needing to edit code.`,
    features: [
      "Bilingual support (English & Farsi)",
      "Dynamic content management",
      "Admin dashboard with authentication",
      "News and events management",
      "Resources library",
      "Contact form",
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
    technologies: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    github_url: "https://github.com/Nawidh1/information",
    live_url: null,
    created_at: "2024-01-01T00:00:00.000Z",
  },
  {
    id: "3",
    title: "Kapper Omid",
    description:
      "A barbershop website with online reservation system, user accounts, services management, and admin dashboard. Built with PHP and MySQL.",
    longDescription: `Kapper Omid is a comprehensive barbershop website built with PHP and MySQL. The website provides a complete solution for managing appointments, services, and customer interactions.

The system includes user registration and authentication, allowing customers to create accounts, make reservations, view their booking history, and manage their profile. The admin dashboard provides full control over services, reservations, users, and website content.

Key features include an online reservation system with time slot availability checking, a services catalog, contact form with email notifications, user profiles, and a complete admin panel for managing all aspects of the business.`,
    features: [
      "Online reservation system",
      "User authentication and profiles",
      "Admin dashboard",
      "Services management",
      "Contact form with email notifications",
      "Reservation history",
      "Responsive design",
      "Multi-language support",
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
    technologies: ["PHP", "MySQL", "JavaScript", "CSS", "HTML", "PHPMailer"],
    github_url: null,
    live_url: null,
    created_at: "2024-06-01T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Brasserie Pizzeria Hama",
    description:
      "A Dutch restaurant website for Brasserie Pizzeria Hama in Terneuzen — full menukaart with categories, online bestellen, table reservations, and halal dishes.",
    longDescription: `Brasserie Pizzeria Hama is a restaurant website built for a brasserie and pizzeria in Terneuzen. The site presents the brand with a dark, gold-accented design and guides guests to order online, reserve a table, or browse the full menu.

The menukaart is organized by category — voorgerechten, pizza's, pasta's, vlees, vis, desserts, dranken, and more — with prices and descriptions for each dish. A featured section highlights popular items and the daily recommendation.

Visitors can call directly, place orders online, and see opening hours and delivery times. All meat dishes are marked as 100% halal.`,
    features: [
      "Full menukaart with category filters",
      "Online bestellen (ordering)",
      "Table reservations",
      "Halal menu section",
      "Opening hours & delivery times",
      "Responsive design",
    ],
    images: [
      "/projects/hama/1.png",
      "/projects/hama/2.png",
      "/projects/hama/3.png",
      "/projects/hama/4.png",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    github_url: null,
    live_url: null,
    created_at: "2025-01-01T00:00:00.000Z",
  },
]

export function getProjectById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id)
}
