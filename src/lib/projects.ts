export type ProjectContent = {
  title: string;
  category: string;
  shortDesc: string;
  client: string;
  approach: string;
  vision: string;
  challenges: string;
  problems: string;
  userCentric: string;
  userNeeds: string;
};

export type Project = {
  id: string;
  year: string;
  /** First entry is the cover image shown in listings; the rest form the detail-page gallery. */
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
  tools: string[];
  content: {
    en: ProjectContent;
    fr: ProjectContent;
  };
};

/**
 * Single source of truth for project data, consumed by the home teaser
 * (Projects.tsx), the full gallery (ProjectsGrid.tsx) and the detail page
 * (ProjectDetail.tsx). Add new projects here as they become available —
 * `images` accepts any number of screenshots.
 */
export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    year: '2024',
    images: ['/projet1.jpg'],
    tools: [
      'Cisco Packet Tracer',
      'VLAN Configuration',
      'IP Addressing & Subnetting',
      'Routing & Switching',
      'Network Security Basics',
      'Troubleshooting & Diagnostics',
    ],
    content: {
      en: {
        title: 'Network Infrastructure & Security Setup',
        category: 'Network Engineering',
        shortDesc: 'Designing and securing a reliable local network infrastructure that mirrors a real enterprise environment.',
        client: 'Academic project — Institut CERCO, Network Engineering training',
        approach: 'In this project, I followed a structured approach to design and implement a reliable local network infrastructure. My focus was on building a stable, secure, and efficient system that reflects real-world networking environments.',
        vision: 'My goal was to develop a practical understanding of how modern networks operate, including communication between devices, network organization, and basic security practices. I aimed to simulate a real enterprise network environment.',
        challenges: 'One of the main challenges was managing IP addressing and ensuring proper communication between multiple devices without conflicts. Additionally, implementing basic network security and maintaining a clear network structure required careful planning.',
        problems: 'This project was not only about connecting devices, but also about solving communication and configuration issues. I had to troubleshoot network errors, ensure connectivity, and optimize the overall network performance.',
        userCentric: 'I focused on creating a network that ensures reliable and efficient communication between users and devices. The goal was to guarantee stability, accessibility, and secure data flow across the network.',
        userNeeds: 'The network was designed to meet essential user needs such as stable connectivity, efficient data exchange, and basic security. This ensures a smooth and functional experience in a simulated real-world environment.',
      },
      fr: {
        title: 'Infrastructure Réseau & Sécurité',
        category: 'Ingénierie Réseau',
        shortDesc: 'Conception et sécurisation d’une infrastructure réseau locale fiable, à l’image d’un environnement d’entreprise réel.',
        client: 'Projet académique — Institut CERCO, formation en ingénierie réseau',
        approach: 'Pour ce projet, j’ai suivi une démarche structurée pour concevoir et mettre en place une infrastructure réseau locale fiable. J’ai cherché à construire un système stable, sécurisé et efficace, représentatif d’un environnement réseau réel.',
        vision: 'Mon objectif était de développer une compréhension pratique du fonctionnement des réseaux modernes : communication entre les appareils, organisation du réseau et bonnes pratiques de sécurité de base, en simulant un environnement réseau d’entreprise.',
        challenges: 'L’un des principaux défis a été la gestion de l’adressage IP et le maintien d’une communication correcte entre plusieurs appareils sans conflits. La mise en place d’une sécurité réseau de base et d’une structure claire a demandé une planification rigoureuse.',
        problems: 'Ce projet ne consistait pas seulement à connecter des appareils, mais aussi à résoudre des problèmes de communication et de configuration. J’ai dû diagnostiquer des erreurs réseau, garantir la connectivité et optimiser les performances globales.',
        userCentric: 'Je me suis concentré sur la création d’un réseau garantissant une communication fiable et efficace entre les utilisateurs et les appareils, avec pour objectif la stabilité, l’accessibilité et la sécurité des échanges de données.',
        userNeeds: 'Le réseau a été conçu pour répondre aux besoins essentiels des utilisateurs : connectivité stable, échange de données efficace et sécurité de base, assurant une expérience fluide dans un environnement simulé proche du réel.',
      },
    },
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function getOtherProjects(id: string, limit = 2): Project[] {
  return PROJECTS.filter((p) => p.id !== id).slice(0, limit);
}
