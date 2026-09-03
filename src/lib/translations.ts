
export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      stack: 'Stack',
      contact: 'Contact',
    },
    common: {
      available: 'Available for Work',
      connect: "Let's Connect!",
      backHome: 'Back Home',
      backProjects: 'Back to Projects',
      backToTop: 'Back to top',
      viewAllProjects: 'View all projects',
      viewAllStack: 'View All Stack',
      viewResume: 'View Resume',
      copyright: '© 2026 ADIOUMANI JEAN. ALL RIGHTS RESERVED.',
      madeBy: 'DESIGNED AND DEVELOPED BY ADIOUMANI JEAN',
      share: 'Share',
      visitWebsite: 'Visit Website',
    },
    hero: {
      greeting: "Hello! I'm Adioumani Jean.",
      description: 'A Networks & DevSecOps Specialist and Front-End Developer, using AI to extend into Backend Development and Data Engineering. I hold a CAMES-accredited Bachelor’s Degree in Networks & Telecommunications (with Distinction, GPA 16/20) and currently work at AROPARTNERS, where I build automated data pipelines and secure infrastructure.',
      roles: [
        'Front-End Developer',
        'Networks & DevSecOps Specialist',
        'AI-Assisted Backend Developer',
        'Data Engineer',
        'AI / LLM Integration',
      ],
    },
    about: {
      intro: {
        tagline: 'Networks & DevSecOps Specialist and Front-End Developer — extending into Backend & Data with AI.',
        paragraphs: [
          "More than just a builder, I design digital solutions that are robust, innovative and data-centric. Graduated with a CAMES-accredited Bachelor's Degree in Networks & Telecommunications, I combine strong academic rigor with hands-on expertise built through real projects.",
          "My day-to-day at AROPARTNERS revolves around backend development (Django/Python), database architecture (PostgreSQL), system virtualization (Ubuntu Server) and data pipeline automation (ETL). Driven by the Cloud ecosystem and AI model integration, I strive to design highly secure, high-performing infrastructure alongside smooth, engaging interfaces (React).",
          "My goal is to merge mastery of network infrastructure with the power of software engineering to build tomorrow's digital solutions.",
        ],
      },
      title: 'Get to Know Me',
      videoTitle: 'Video Introduction',
      location: "Abidjan, Côte d'Ivoire",
      education: 'Education',
      educationList: [
        {
          degree: "High School Diploma – Scientific Series (Bac D)",
          institution: "Lycée de Garçons de Bingerville",
          year: 2023
        },
        {
          degree: "Bachelor's Degree in Networks & Telecommunications — with Distinction (GPA 16/20, CAMES-Accredited)",
          institution: "Institut CERCO, Abidjan",
          year: "2026"
        }
      ],
      certificationTitle: 'Certifications',
      certificationInstitutions: 'Institutions',
      certificationCredentials: 'Credentials',
      certificationFeatured: 'Featured Credentials',
      certificationCoursework: 'Additional Coursework',
      // `type: 'professional'` = Professional Certificate, `'specialization'` = Specialization —
      // both bundle several courses behind one credential/link (list them in `courses`).
      // `type: 'course'` = a single standalone course certificate. `link` is the real Coursera
      // verification URL; `date` is the completion date shown on the certificate.
      certificationGroups: [
        {
          issuer: 'Google',
          via: 'Coursera',
          credentials: [
            {
              name: 'Google IT Support',
              link: 'https://coursera.org/verify/professional-cert/D1M9RN3SI4JN',
              type: 'professional',
              date: 'Apr 2025',
              courses: [
                'Technical Support Fundamentals',
                'The Bits and Bytes of Computer Networking',
                'Operating Systems and You: Becoming a Power User',
                'System Administration and IT Infrastructure Services',
                'IT Security: Defense Against the Digital Dark Arts',
              ],
            },
            {
              name: 'Google UX Design',
              link: 'https://coursera.org/verify/professional-cert/RG4XU0BCLTSF',
              type: 'professional',
              date: 'Feb 2025',
              courses: [
                'Foundations of User Experience (UX) Design',
                'Start the UX Design Process: Empathize, Define, and Ideate',
                'Build Wireframes and Low-Fidelity Prototypes',
                'Conduct UX Research and Test Early Concepts',
                'Create High-Fidelity Designs and Prototypes in Figma',
                'Build Dynamic User Interfaces (UI) for Websites',
                'Design a User Experience for Social Good & Prepare for Jobs',
              ],
            },
          ],
        },
        {
          issuer: 'Meta',
          via: 'Coursera',
          credentials: [
            { name: 'Introduction to Front-End Development', link: 'https://coursera.org/verify/7NIBBDPOKF1C', type: 'course', date: 'Feb 2025', courses: [] as string[] },
            { name: 'Programming with JavaScript', link: 'https://coursera.org/verify/PE5ZUPFX0PDY', type: 'course', date: 'Apr 2025', courses: [] as string[] },
            { name: 'React Basics', link: 'https://coursera.org/verify/HJO8NRLGABNX', type: 'course', date: 'Jul 2025', courses: [] as string[] },
            { name: 'Version Control', link: 'https://coursera.org/verify/GMAOG9MY15I3', type: 'course', date: 'Jan 2026', courses: [] as string[] },
          ],
        },
        {
          issuer: 'IBM',
          via: 'Coursera',
          credentials: [
            { name: 'Python for Data Science, AI & Development', link: 'https://coursera.org/verify/2SSFCQTRMTQ2', type: 'course', date: 'May 2024', courses: [] as string[] },
            { name: 'Introduction to Data Engineering', link: 'https://coursera.org/verify/KYREZYMJU2EP', type: 'course', date: 'May 2024', courses: [] as string[] },
            { name: 'Python Project for Data Engineering', link: 'https://coursera.org/verify/K9DFE5WQ8V4Y', type: 'course', date: 'Jun 2024', courses: [] as string[] },
            { name: 'Introduction to NoSQL Databases', link: 'https://coursera.org/verify/RENX7TWUU8ZA', type: 'course', date: 'Jul 2024', courses: [] as string[] },
            { name: 'Building AI Powered Chatbots Without Programming', link: 'https://coursera.org/verify/JQLNDW7X2FEB', type: 'course', date: 'Apr 2024', courses: [] as string[] },
          ],
        },
        {
          issuer: 'DeepLearning.AI',
          via: 'Coursera',
          credentials: [
            { name: 'Generative AI for Everyone', link: 'https://coursera.org/verify/9A26CKSRHD9N', type: 'course', date: 'Feb 2025', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of Toronto',
          via: 'Coursera',
          credentials: [
            { name: 'Communication Strategies for a Virtual Age', link: 'https://coursera.org/verify/WLG2W9RV9NGJ', type: 'course', date: 'Aug 2024', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of Michigan',
          via: 'Coursera',
          credentials: [
            {
              name: 'Web Design for Everybody: Basics of Web Development & Coding',
              link: 'https://coursera.org/verify/specialization/ZP2LYDN8EST6',
              type: 'specialization',
              date: 'Sep 2024',
              courses: [
                'Introduction to HTML5',
                'Introduction to CSS3',
                'Interactivity with JavaScript',
                'Advanced Styling with Responsive Design',
                'Web Design for Everybody Capstone',
              ],
            },
          ],
        },
        {
          issuer: 'University of Illinois Urbana-Champaign',
          via: 'Coursera',
          credentials: [
            { name: 'IoT Devices', link: 'https://coursera.org/verify/N46TDQXC4CPX', type: 'course', date: 'Mar 2025', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of Maryland, College Park',
          via: 'Coursera',
          credentials: [
            { name: 'Cybersecurity for Everyone', link: 'https://coursera.org/verify/KN1RRVOFII1P', type: 'course', date: 'Feb 2026', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of Colorado Boulder',
          via: 'Coursera',
          credentials: [
            { name: 'The Structured Query Language (SQL)', link: 'https://coursera.org/verify/E4SUQLFT90CO', type: 'course', date: 'Aug 2024', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of California, Irvine',
          via: 'Coursera',
          credentials: [
            { name: 'Effective Problem-Solving and Decision-Making', link: 'https://coursera.org/verify/KG1IIHMOG4CH', type: 'course', date: 'Aug 2024', courses: [] as string[] },
          ],
        },
        {
          issuer: 'UC San Diego',
          via: 'Coursera',
          credentials: [
            { name: 'Introduction to Big Data', link: 'https://coursera.org/verify/J34Q94Z3KT7Y', type: 'course', date: 'Jul 2024', courses: [] as string[] },
          ],
        },
      ],
      stackTitle: 'Stack',
      stackDesc: "My core toolkit starts with React, HTML5 and CSS3 for building fast, polished front-end interfaces. From there, I extend into Python, Django and PostgreSQL for backend and data engineering — with AI accelerating that reach, from generating boilerplate to integrating LLM APIs (Claude) for natural-language features. I'm equally comfortable with Linux, network administration and Zabbix for infrastructure supervision, and I write automation scripts that turn raw logs and spreadsheets into structured data.",
      experienceTitle: 'Experience',
      experienceList: [
        {
          role: 'DevSecOps, Systems & Data Specialist',
          company: 'AROPARTNERS',
          date: 'Apr 27, 2025 - Present',
          description: 'Designed and deployed SmartNet Guard, a centralized network supervision system on virtualized Ubuntu servers with Zabbix and Python ETL pipelines for real-time security alerting. Went on to deploy and integrate the Carbonio CE collaborative platform, model a PostgreSQL relational database, and build Python automation scripts that turn raw Excel data into real-time KPI tracking.'
        }
      ],
      interestsTitle: 'Interests',
      interestsList: [
        'Backend Development',
        'Data Engineering & Automation',
        'Applied AI & LLM Integration',
        'DevSecOps & Network Security',
        'Cloud & Systems Administration'
      ],
      languagesTitle: 'Languages',
      languagesList: [
        { language: 'French', level: 'Native' },
        { language: 'English', level: 'Fluent' }
      ]
    },
    homeProjects: {
      recent: 'Recent Projects',
    },
    projectsGrid: {
      title: 'Selected Projects',
    },
    stack: {
      title: 'My Tech Toolbox',
      python: 'Backend Scripting & Automation',
      django: 'Backend Web Framework',
      postgresql: 'Relational Database Design',
      zabbix: 'Infrastructure Monitoring',
      windowsServer: 'Windows Server Administration',
      activeDirectory: 'Directory & Access Management',
      ciscoPacketTracer: 'Network Design & Simulation',
      automation: 'ETL & Workflow Automation',
      llm: 'LLM-Powered Features',
      framer: 'Web Design',
      figma: 'Collaborative Design',
      notion: 'Project Management',
      chatgpt: 'Content Generation',
      html: 'Structure and Content',
      css: 'Visual Styling',
      photoshop: 'Image Manipulation',
      illustrator: 'Vector Graphics',
      react: 'Dynamic Development',
      linux: 'System Administration',
      networking: 'Network Design & Security',
      mongodb: 'Database Management',
      cybersecurity: 'Security Fundamentals',
      git: 'Version Control',
      levels: {
        advanced: 'Advanced',
        comfortable: 'Comfortable',
        learning: 'Learning',
      },
    },
    services: {
      title: 'Services',
      subtitle: "A multidisciplinary skill set spanning front-end interfaces, network infrastructure and AI-accelerated backend systems — from raw data to a decision-ready dashboard.",
      items: [
        { title: 'Frontend Development', description: 'Building responsive, polished React interfaces that make complex data easy to read and act on.' },
        { title: 'Network Supervision', description: 'Deploying centralized monitoring (Zabbix) on virtualized Linux servers for real-time infrastructure visibility.' },
        { title: 'DevSecOps & Automation', description: 'Building secure, automated Python pipelines that process logs and operational data end to end.' },
        { title: 'AI-Assisted Backend Development', description: 'Extending into backend systems and APIs with Django and Python, using AI to accelerate delivery.' },
        { title: 'Data Engineering', description: 'Modeling PostgreSQL databases and ETL pipelines that turn raw spreadsheets into reliable KPIs.' },
        { title: 'Applied AI / LLM Integration', description: 'Integrating LLM APIs (Claude) to add natural-language querying and decision support to applications.' },
        { title: 'Cloud & Virtualization', description: 'Deploying and administering services on virtualized Linux server environments.' },
        { title: 'Cybersecurity Fundamentals', description: 'Applying network security best practices to protect systems, data and infrastructure.' },
      ],
    },
    contact: {
      title: "Let's Connect!",
      messageMe: 'Message Me',
      name: 'Name',
      email: 'Email',
      message: 'Write a message...',
      send: 'Send Message',
      sending: 'Sending...',
      contactTitle: 'Contact',
      socialTitle: 'Social Media',
      nameRequired: 'Please enter at least 2 characters.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Your message should be at least 10 characters long.',
      successTitle: 'Message sent!',
      successDesc: "Thanks for reaching out — I'll get back to you as soon as possible.",
      errorTitle: 'Something went wrong',
      errorDesc: 'Your message could not be sent. Please try again or email me directly.',
    },
    notFound: {
      oops: 'OOPS!',
      text: "The page you are looking for wasn't found!",
    },
    projectDetail: {
      approach: 'Approach & Engineering',
      vision: 'Vision and Impact',
      challenges: 'Key Technical Challenges',
      problems: 'Solving Complex Problems',
      userCentric: 'User-Centric Design',
      userNeeds: 'Meeting Stakeholder Needs',
      otherProjects: 'Other Projects',
      client: 'Context',
      tools: 'Tools & Technologies',
      category: 'Category',
      year: 'Year',
      role: 'Role',
      gallery: 'Gallery',
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      stack: 'Compétences',
      contact: 'Contact',
    },
    common: {
      available: 'Disponible pour travailler',
      connect: 'Contactez-moi !',
      backHome: 'Retour à l\'accueil',
      backProjects: 'Retour aux projets',
      backToTop: 'Retour en haut',
      viewAllProjects: 'Voir tous les projets',
      viewAllStack: 'Voir toutes mes compétences',
      viewResume: 'Voir mon CV',
      copyright: '© 2026 ADIOUMANI JEAN. TOUS DROITS RÉSERVÉS.',
      madeBy: 'CRÉÉ PAR ADIOUMANI JEAN',
      share: 'Partager',
      visitWebsite: 'Visiter le site',
    },
    hero: {
      greeting: 'Bonjour ! Je suis Adioumani Jean.',
      description: "Spécialiste Réseaux & DevSecOps et Développeur Front-End, j'utilise l'IA pour étendre mes compétences au Backend et à la Data Engineering. Titulaire d'une Licence en Réseaux & Télécommunications accréditée CAMES (Mention Très Bien, 16/20), je travaille actuellement chez AROPARTNERS où je conçois des pipelines de données automatisés et des infrastructures sécurisées.",
      roles: [
        'Développeur Front-End',
        'Spécialiste Réseaux & DevSecOps',
        'Développeur Backend Assisté par IA',
        'Spécialiste Data',
        'Intégration IA / LLM',
      ],
    },
    about: {
      intro: {
        tagline: "Spécialiste Réseaux & DevSecOps et Développeur Front-End — étendu au Backend & à la Data grâce à l'IA.",
        paragraphs: [
          "Plus qu'un simple créateur, je conçois des solutions numériques robustes, innovantes et centrées sur la donnée. Diplômé d'une Licence en Réseaux & Télécommunications accréditée par le CAMES, j'allie une solide rigueur académique à une expertise terrain acquise par projets.",
          "Mon quotidien chez AROPARTNERS s'articule autour du développement backend (Django/Python), de l'architecture de bases de données (PostgreSQL), de la virtualisation système (Ubuntu Server) et de l'automatisation de pipelines de données (ETL). Passionné par l'écosystème Cloud et l'intégration de modèles d'IA, je m'efforce de concevoir des infrastructures hautement sécurisées, performantes et des interfaces (React) fluides et attrayantes.",
          "Mon objectif est de fusionner la maîtrise des infrastructures réseaux et la puissance de la programmation pour bâtir les solutions numériques de demain.",
        ],
      },
      title: 'Apprenez à me connaître',
      videoTitle: 'Présentation Vidéo',
      location: 'Abidjan, Côte d\'Ivoire',
      education: 'Éducation',
      educationList: [
        {
          degree: 'Baccalauréat Série D – Sciences et Technologies',
          institution: 'Lycée de Garçons de Bingerville',
          year: 2023
        },
        {
          degree: 'Licence en Réseaux & Télécommunications — Mention Très Bien (16/20, accréditée CAMES)',
          institution: 'Institut CERCO, Abidjan',
          year: '2026'
        }
      ],
      certificationTitle: 'Certifications',
      certificationInstitutions: 'Établissements',
      certificationCredentials: 'Certificats',
      certificationFeatured: 'Certifications Phares',
      certificationCoursework: 'Formations Complémentaires',
      certificationGroups: [
        {
          issuer: 'Google',
          via: 'Coursera',
          credentials: [
            {
              name: 'Google IT Support',
              link: 'https://coursera.org/verify/professional-cert/D1M9RN3SI4JN',
              type: 'professional',
              date: 'Avr. 2025',
              courses: [
                'Fondamentaux du Support Technique',
                'Les Bases des Réseaux Informatiques',
                'Systèmes d\'Exploitation : Devenir un Utilisateur Avancé',
                'Administration Système & Services d\'Infrastructure IT',
                'Sécurité Informatique : Défense contre les Arts Numériques Obscurs',
              ],
            },
            {
              name: 'Google UX Design',
              link: 'https://coursera.org/verify/professional-cert/RG4XU0BCLTSF',
              type: 'professional',
              date: 'Fév. 2025',
              courses: [
                'Fondamentaux du Design d\'Expérience Utilisateur (UX)',
                'Démarrer le Processus UX : Empathie, Définition et Idéation',
                'Créer des Wireframes et Prototypes Basse-Fidélité',
                'Mener des Recherches UX et Tester des Concepts',
                'Créer des Designs et Prototypes Haute-Fidélité sur Figma',
                'Construire des Interfaces Utilisateur (UI) Dynamiques',
                'Concevoir une Expérience Utilisateur pour le Bien Social',
              ],
            },
          ],
        },
        {
          issuer: 'Meta',
          via: 'Coursera',
          credentials: [
            { name: 'Introduction au Développement Front-End', link: 'https://coursera.org/verify/7NIBBDPOKF1C', type: 'course', date: 'Fév. 2025', courses: [] as string[] },
            { name: 'Programmation avec JavaScript', link: 'https://coursera.org/verify/PE5ZUPFX0PDY', type: 'course', date: 'Avr. 2025', courses: [] as string[] },
            { name: 'Bases de React', link: 'https://coursera.org/verify/HJO8NRLGABNX', type: 'course', date: 'Juil. 2025', courses: [] as string[] },
            { name: 'Contrôle de Version', link: 'https://coursera.org/verify/GMAOG9MY15I3', type: 'course', date: 'Janv. 2026', courses: [] as string[] },
          ],
        },
        {
          issuer: 'IBM',
          via: 'Coursera',
          credentials: [
            { name: 'Python pour la Data Science, l\'IA & le Développement', link: 'https://coursera.org/verify/2SSFCQTRMTQ2', type: 'course', date: 'Mai 2024', courses: [] as string[] },
            { name: 'Introduction à la Data Engineering', link: 'https://coursera.org/verify/KYREZYMJU2EP', type: 'course', date: 'Mai 2024', courses: [] as string[] },
            { name: 'Projet Python pour la Data Engineering', link: 'https://coursera.org/verify/K9DFE5WQ8V4Y', type: 'course', date: 'Juin 2024', courses: [] as string[] },
            { name: 'Introduction aux Bases de Données NoSQL', link: 'https://coursera.org/verify/RENX7TWUU8ZA', type: 'course', date: 'Juil. 2024', courses: [] as string[] },
            { name: 'Créer des Chatbots IA Sans Programmation', link: 'https://coursera.org/verify/JQLNDW7X2FEB', type: 'course', date: 'Avr. 2024', courses: [] as string[] },
          ],
        },
        {
          issuer: 'DeepLearning.AI',
          via: 'Coursera',
          credentials: [
            { name: 'L\'IA Générative pour Tous', link: 'https://coursera.org/verify/9A26CKSRHD9N', type: 'course', date: 'Fév. 2025', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of Toronto',
          via: 'Coursera',
          credentials: [
            { name: 'Stratégies de Communication à l\'Ère Virtuelle', link: 'https://coursera.org/verify/WLG2W9RV9NGJ', type: 'course', date: 'Août 2024', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of Michigan',
          via: 'Coursera',
          credentials: [
            {
              name: 'Conception Web pour Tous : Bases du Développement Web et du Codage',
              link: 'https://coursera.org/verify/specialization/ZP2LYDN8EST6',
              type: 'specialization',
              date: 'Sep. 2024',
              courses: [
                'Introduction à HTML5',
                'Introduction à CSS3',
                'Interactivité avec JavaScript',
                'Style Avancé avec le Design Responsive',
                'Projet de Fin de Spécialisation',
              ],
            },
          ],
        },
        {
          issuer: 'University of Illinois Urbana-Champaign',
          via: 'Coursera',
          credentials: [
            { name: 'Les Objets Connectés (IoT)', link: 'https://coursera.org/verify/N46TDQXC4CPX', type: 'course', date: 'Mars 2025', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of Maryland, College Park',
          via: 'Coursera',
          credentials: [
            { name: 'La Cybersécurité pour Tous', link: 'https://coursera.org/verify/KN1RRVOFII1P', type: 'course', date: 'Fév. 2026', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of Colorado Boulder',
          via: 'Coursera',
          credentials: [
            { name: 'Le Langage SQL (Structured Query Language)', link: 'https://coursera.org/verify/E4SUQLFT90CO', type: 'course', date: 'Août 2024', courses: [] as string[] },
          ],
        },
        {
          issuer: 'University of California, Irvine',
          via: 'Coursera',
          credentials: [
            { name: 'Résolution de Problèmes et Prise de Décision Efficaces', link: 'https://coursera.org/verify/KG1IIHMOG4CH', type: 'course', date: 'Août 2024', courses: [] as string[] },
          ],
        },
        {
          issuer: 'UC San Diego',
          via: 'Coursera',
          credentials: [
            { name: 'Introduction au Big Data', link: 'https://coursera.org/verify/J34Q94Z3KT7Y', type: 'course', date: 'Juil. 2024', courses: [] as string[] },
          ],
        },
      ],
      stackTitle: 'Stack Technique',
      stackDesc: "Ma boîte à outils commence par React, HTML5 et CSS3 pour construire des interfaces front-end rapides et soignées. À partir de là, je m'étends vers Python, Django et PostgreSQL pour le backend et la data engineering — avec l'IA comme accélérateur, de la génération de code à l'intégration d'API LLM (Claude) pour des fonctionnalités en langage naturel. Je suis tout aussi à l'aise avec Linux, l'administration réseau et Zabbix pour la supervision d'infrastructure, et j'écris des scripts d'automatisation qui transforment logs et fichiers Excel bruts en données structurées.",
      experienceTitle: 'Expérience',
      experienceList: [
        {
          role: 'Spécialiste DevSecOps, Systèmes & Data',
          company: 'AROPARTNERS',
          date: '27 avril 2025 - Aujourd\'hui',
          description: 'Conception et déploiement de SmartNet Guard, un système de supervision réseau centralisé sur serveurs Ubuntu virtualisés avec Zabbix et des pipelines ETL Python pour l\'alerting de sécurité en temps réel. Puis déploiement et intégration de la plateforme collaborative Carbonio CE, modélisation d\'une base de données relationnelle PostgreSQL, et développement de scripts Python d\'automatisation transformant des données Excel brutes en suivi de KPI en temps réel.'
        }
      ],
      interestsTitle: 'Centres d\'Intérêt',
      interestsList: [
        'Développement Backend',
        'Data Engineering & Automatisation',
        'IA Appliquée & Intégration de LLM',
        'DevSecOps & Sécurité Réseau',
        'Cloud & Administration Systèmes'
      ],
      languagesTitle: 'Langues',
      languagesList: [
        { language: 'Français', level: 'Natif' },
        { language: 'Anglais', level: 'Courant' }
      ]
    },
    homeProjects: {
      recent: 'Projets Récents',
    },
    projectsGrid: {
      title: 'Projets Sélectionnés',
    },
    stack: {
      title: 'Ma Boîte à Outils',
      python: 'Scripting Backend & Automatisation',
      django: 'Framework Web Backend',
      postgresql: 'Conception de Bases Relationnelles',
      zabbix: 'Supervision d\'Infrastructure',
      windowsServer: 'Administration Windows Server',
      activeDirectory: 'Gestion des Annuaires & Accès',
      ciscoPacketTracer: 'Conception & Simulation Réseau',
      automation: 'Automatisation ETL & Workflows',
      llm: 'Fonctionnalités Propulsées par LLM',
      framer: 'Design Web',
      figma: 'Design Collaboratif',
      notion: 'Gestion de Projet',
      chatgpt: 'Génération de Contenu',
      html: 'Structure et Contenu',
      css: 'Style Visuel',
      photoshop: 'Manipulation d\'Images',
      illustrator: 'Graphismes Vectoriels',
      react: 'Développement Dynamique',
      linux: 'Administration Système',
      networking: 'Conception & Sécurité Réseau',
      mongodb: 'Gestion de Bases de Données',
      cybersecurity: 'Fondamentaux de Sécurité',
      git: 'Contrôle de Version',
      levels: {
        advanced: 'Avancé',
        comfortable: 'À l\'aise',
        learning: 'En apprentissage',
      },
    },
    services: {
      title: 'Services',
      subtitle: "Un ensemble de compétences pluridisciplinaires couvrant les interfaces front-end, l'infrastructure réseau et les systèmes backend accélérés par l'IA — de la donnée brute au tableau de bord décisionnel.",
      items: [
        { title: 'Développement Frontend', description: 'Construction d\'interfaces React responsives et soignées rendant des données complexes lisibles et exploitables.' },
        { title: 'Supervision Réseau', description: 'Déploiement d\'une supervision centralisée (Zabbix) sur serveurs Linux virtualisés pour une visibilité infrastructure en temps réel.' },
        { title: 'DevSecOps & Automatisation', description: 'Construction de pipelines Python sécurisés et automatisés traitant logs et données opérationnelles de bout en bout.' },
        { title: 'Développement Backend Assisté par IA', description: 'Extension vers les systèmes backend et API avec Django et Python, en utilisant l\'IA pour accélérer la livraison.' },
        { title: 'Data Engineering', description: 'Modélisation de bases PostgreSQL et de pipelines ETL transformant des fichiers Excel bruts en KPI fiables.' },
        { title: 'IA Appliquée / Intégration LLM', description: 'Intégration d\'API LLM (Claude) pour ajouter requêtes en langage naturel et aide à la décision aux applications.' },
        { title: 'Cloud & Virtualisation', description: 'Déploiement et administration de services sur environnements de serveurs Linux virtualisés.' },
        { title: 'Fondamentaux Cybersécurité', description: 'Application des bonnes pratiques de sécurité réseau pour protéger systèmes, données et infrastructure.' },
      ],
    },
    contact: {
      title: 'Contactez-moi !',
      messageMe: 'Écrivez-moi',
      name: 'Nom',
      email: 'Email',
      message: 'Écrivez votre message...',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      contactTitle: 'Contact',
      socialTitle: 'Réseaux Sociaux',
      nameRequired: 'Merci de saisir au moins 2 caractères.',
      emailInvalid: 'Merci de saisir une adresse email valide.',
      messageRequired: 'Votre message doit contenir au moins 10 caractères.',
      successTitle: 'Message envoyé !',
      successDesc: 'Merci de votre message, je vous répondrai dès que possible.',
      errorTitle: 'Une erreur est survenue',
      errorDesc: 'Votre message n\'a pas pu être envoyé. Réessayez ou écrivez-moi directement par email.',
    },
    notFound: {
      oops: 'OUPS !',
      text: "La page que vous recherchez n'a pas été trouvée !",
    },
    projectDetail: {
      approach: 'Approche & Ingénierie',
      vision: 'Vision et Impact',
      challenges: 'Défis Techniques Clés',
      problems: 'Résoudre des Problèmes Complexes',
      userCentric: 'Design Centré Utilisateur',
      userNeeds: 'Répondre aux Besoins des Parties Prenantes',
      otherProjects: 'Autres Projets',
      client: 'Contexte',
      tools: 'Outils & Technologies',
      category: 'Catégorie',
      year: 'Année',
      role: 'Rôle',
      gallery: 'Galerie',
    }
  }
};