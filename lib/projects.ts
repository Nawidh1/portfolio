export interface PortfolioProjectBase {
  id: string;
  images: string[];
  technologies: string[];
  github_url: string | null;
  live_url: string | null;
  created_at: string;
}

export const portfolioProjectsBase: PortfolioProjectBase[] = [
  {
    id: "1",
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
];

// Backwards-compatible export for any server usage
export const portfolioProjects = portfolioProjectsBase;

export function getProjectById(id: string) {
  return portfolioProjectsBase.find((project) => project.id === id);
}
