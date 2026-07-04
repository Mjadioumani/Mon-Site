
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
      greeting: "Hello Everyone! I'm Adioumani Jean.",
      description: 'A motivated Network Engineering student passionate about web development, AI, design, and computer systems, creating innovative, user-friendly, and visually appealing digital experiences.',
      roles: [
        'Web Designer',
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'Network Engineer',
        'Data Engineer',
        'UI/UX Designer',
      ],
    },
    about: {
      intro: "Hello, I'm Adioumani Jean, a Network Engineering student and passionate developer. More than just a designer, I am a digital creator driven by innovation and creativity. I have a strong interest in web development, artificial intelligence, and design, and I enjoy building modern, efficient, and visually engaging digital experiences. I am also passionate about computers and IT support, with experience in troubleshooting, system maintenance, and hardware. I hold a professional certification in IT support, which strengthens my ability to solve technical problems effectively. My goal is to create solutions that are not only visually appealing but also functional, reliable, and user-friendly.",
      title: 'Get to Know Me',
      location: "Abidjan, Côte d'Ivoire",
      education: 'Education',
      educationList: [
        {
          degree: "High School Diploma – Scientific Series (Bac D)",
          institution: "Lycée de Garçons de Bingerville",
          year: 2023
        },
        {
          degree: "Bachelor’s Level (L3) in Network Engineering",
          institution: "Institut CERCO, Abidjan",
          year: "2023 - Present"
        }
      ],
      certificationTitle: 'Certifications',
      certificationList: [
        {
          name: 'Certificats Professionnels Google IT Support Google',
          institution: 'Coursera / Google',
          year: 2025,
          link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/D1M9RN3SI4JN'
        },
        {
          name: 'Certificats Professionnels Google UX Design Google',
          institution: 'Coursera / Google',
          year: 2025,
          link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/RG4XU0BCLTSF'
        },
        {
          name: 'Spécialisation Web Design for Everybody: Basics of Web Development & Coding (University of Michigan)',
          institution: 'Coursera / University of Michigan',
          year: 2024,
          link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ZP2LYDN8EST6'
        }
      ],
      stackTitle: 'Stack',
      stackDesc: "My technical toolkit includes proficiency in Figma, HTML, CSS, JavaScript, React, and other design tools. I also have strong skills in networking and system administration, including Linux, troubleshooting hardware, managing computer systems, and providing IT support. Additionally, I am experienced in responsive web design, ensuring that the websites I create look modern and function flawlessly across all devices.",
      experienceTitle: 'Experience',
      experienceList: [
        {
          role: 'IT Support & Network Assistant',
          company: 'Institut CERCO / Personal Projects',
          date: '2024 - Present',
          description: 'Administering networks and systems, troubleshooting hardware and software, managing Linux and Windows servers, and configuring databases like MongoDB. Basic cybersecurity and network best practices experience.'
        },
        {
          role: 'Web & Network Project Developer',
          company: 'Academic / Personal Projects',
          date: '2025 - Present',
          description: 'Executing academic and personal projects combining web development and network engineering. Building web prototypes and configuring local networks for practical training.'
        }
      ],
      interestsTitle: 'Interests',
      interestsList: [
        'Web Development',
        'Artificial Intelligence',
        'Computer Systems & IT Support',
        'Creative Design',
        'Hardware Troubleshooting'
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
      title: 'My Remarkable Projects',
    },
    stack: {
      title: 'My Tech Toolbox',
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
      subtitle: "A multidisciplinary skill set covering the full lifecycle of a digital product, from interface to infrastructure.",
      items: [
        { title: 'Web Design', description: 'Clean, modern interfaces designed in Figma with a strong focus on usability and visual hierarchy.' },
        { title: 'Web Development', description: 'Responsive, performant websites built with HTML, CSS, JavaScript and React.' },
        { title: 'Application Development', description: 'Full stack web applications, from database design to a polished user interface.' },
        { title: 'Network Administration', description: 'Designing, configuring and troubleshooting local network infrastructure and connected devices.' },
        { title: 'Cybersecurity', description: 'Applying network security fundamentals and best practices to protect systems and data.' },
        { title: 'Automation', description: 'Streamlining repetitive workflows and system tasks to save time and reduce errors.' },
        { title: 'Cloud & Infrastructure', description: 'Deploying and managing applications and services on modern cloud platforms.' },
        { title: 'Data Engineering', description: 'Structuring, storing and managing data with databases like MongoDB for reliable access.' },
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
      approach: 'My Approach: Crafting Digital Excellence',
      vision: 'Vision and Innovation',
      challenges: 'Identifying Unique Challenges',
      problems: 'Resolving Complex Problems',
      userCentric: 'User-Centric Design',
      userNeeds: 'Meeting User Needs',
      otherProjects: 'Other Projects',
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
      greeting: 'Bonjour à tous ! Je suis Adioumani Jean.',
      description: "Étudiant motivé en ingénierie des réseaux, passionné par le développement web, l'IA, le design et les systèmes informatiques, créant des expériences numériques innovantes, conviviales et visuellement attrayantes.",
      roles: [
        'Web Designer',
        'Développeur Frontend',
        'Développeur Backend',
        'Développeur Full Stack',
        'Ingénieur Réseaux',
        'Data Engineer',
        'UI/UX Designer',
      ],
    },
    about: {
      intro: "Bonjour, je suis Adioumani Jean, étudiant en ingénierie des réseaux et développeur passionné. Plus qu'un simple designer, je suis un créateur numérique animé par l'innovation et la créativité. Je m'intéresse particulièrement au développement web, à l'intelligence artificielle et au design, et j'aime concevoir des expériences numériques modernes, performantes et visuellement attrayantes. Je suis également passionné d'informatique et de support technique, avec une expérience en dépannage, maintenance système et matériel. Je possède une certification professionnelle en support informatique, ce qui renforce ma capacité à résoudre efficacement les problèmes techniques. Mon objectif est de créer des solutions non seulement esthétiques, mais aussi fonctionnelles, fiables et conviviales.",
      title: 'Apprenez à me connaître',
      location: 'Abidjan, Côte d\'Ivoire',
      education: 'Éducation',
      educationList: [
        {
          degree: 'Baccalauréat Série D – Sciences et Technologies',
          institution: 'Lycée de Garçons de Bingerville',
          year: 2023
        },
        {
          degree: 'Licence (L3) en Réseaux Informatiques',
          institution: 'Institut CERCO, Abidjan',
          year: '2023 - Présent'
        }
      ],
      certificationTitle: 'Certifications',
      certificationList: [
        {
          name: 'Certificats Professionnels Google IT Support Google',
          institution: 'Coursera / Google',
          year: 2025,
          link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/D1M9RN3SI4JN'
        },
        {
          name: 'Certificats Professionnels Google UX Design Google',
          institution: 'Coursera / Google',
          year: 2025,
          link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/RG4XU0BCLTSF'
        },
        {
          name: 'Spécialisation Conception Web pour Tous : Bases du Développement Web et du Codage (Université du Michigan)',
          institution: 'Coursera / University of Michigan',
          year: 2024,
          link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ZP2LYDN8EST6'
        }
      ],
      stackTitle: 'Stack Technique',
      stackDesc: "Ma boîte à outils technique comprend la maîtrise de Figma, HTML, CSS, JavaScript, React et d’autres outils de design. Je possède également de solides compétences en réseaux et administration système, notamment Linux, dépannage matériel, gestion de systèmes informatiques et support technique. De plus, j’ai de l’expérience en design web réactif, garantissant que les sites que je crée sont modernes et fonctionnent parfaitement sur tous les appareils.",
      experienceTitle: 'Expérience',
      experienceList: [
        {
          role: 'Assistant de support informatique et réseau',
          company: 'Institut CERCO / Projets personnels',
          date: '2024 - Présent',
          description: 'Administration de réseaux et systèmes, dépannage matériel et logiciel, gestion de serveurs Linux et Windows, et configuration de bases de données comme MongoDB. Expérience en cybersécurité de base et bonnes pratiques réseau.'
        },
        {
          role: 'Développeur de projets Web et réseau',
          company: 'Projets académiques / personnels',
          date: '2025 - Present',
          description: 'Réalisation de projets académiques et personnels combinant développement web et réseaux informatiques. Mise en place de prototypes web et configuration de réseaux locaux pour la formation.'
        },
      ],
      interestsTitle: 'Centres d\'Intérêt',
      interestsList: [
        'Développement Web',
        'Intelligence Artificielle',
        'Systèmes Informatiques & Support Technique',
        'Design Créatif',
        'Dépannage Matériel'
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
      title: 'Mes Projets Remarquables',
    },
    stack: {
      title: 'Ma Boîte à Outils',
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
      subtitle: "Un ensemble de compétences pluridisciplinaires couvrant tout le cycle de vie d'un produit numérique, de l'interface à l'infrastructure.",
      items: [
        { title: 'Web Design', description: 'Interfaces modernes et épurées conçues sur Figma, avec une attention particulière à l\'ergonomie et à la hiérarchie visuelle.' },
        { title: 'Développement Web', description: 'Sites web responsives et performants réalisés avec HTML, CSS, JavaScript et React.' },
        { title: 'Développement d\'Applications', description: 'Applications web full stack, de la conception de la base de données à une interface utilisateur soignée.' },
        { title: 'Administration Réseaux', description: 'Conception, configuration et dépannage d\'infrastructures réseau locales et des appareils connectés.' },
        { title: 'Cybersécurité', description: 'Application des fondamentaux et bonnes pratiques de sécurité réseau pour protéger systèmes et données.' },
        { title: 'Automatisation', description: 'Optimisation des tâches répétitives et des workflows système pour gagner du temps et réduire les erreurs.' },
        { title: 'Cloud & Infrastructure', description: 'Déploiement et gestion d\'applications et de services sur des plateformes cloud modernes.' },
        { title: 'Data Engineering', description: 'Structuration, stockage et gestion des données avec des bases comme MongoDB pour un accès fiable.' },
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
      approach: 'Mon Approche : Créer l\'Excellence Numérique',
      vision: 'Vision et Innovation',
      challenges: 'Identifier des Défis Uniques',
      problems: 'Résoudre des Problèmes Complexes',
      userCentric: 'Design Centré Utilisateur',
      userNeeds: 'Répondre aux Besoins des Utilisateurs',
      otherProjects: 'Autres Projets',
    }
  }
};