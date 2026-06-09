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
      "Bilingual community website for an Islamic association with news, events, resources, and a full admin dashboard. English and Farsi with dynamic content management.",
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
      "Barber shop website with online booking system, user accounts, service management, and admin dashboard. Built with PHP and MySQL.",
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
    technologies: ["PHP", "CSS", "PHPMailer"],
    github_url: "https://github.com/Nawidh1/omid",
    live_url: null,
    created_at: "2024-06-01T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Brasserie Pizzeria Hama",
    description:
      "Restaurant website for Brasserie Pizzeria Hama in Terneuzen — full menu with categories, online ordering, table reservations, and halal dishes.",
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
