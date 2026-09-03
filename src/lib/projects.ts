export type ProjectContent = {
  title: string;
  category: string;
  role: string;
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
    id: 'smartnet-guard',
    year: '2025',
    images: ['/projects/smartnet-guard-dashboard.svg', '/projects/smartnet-guard-architecture.svg'],
    tools: ['React', 'Python', 'PostgreSQL', 'Zabbix', 'Linux Ubuntu Server', 'ETL Automation'],
    content: {
      en: {
        title: 'SmartNet Guard — Network Supervision & DevSecOps',
        category: 'Network Supervision & DevSecOps',
        role: 'DevSecOps & Automation Specialist — AROPARTNERS',
        shortDesc: 'A centralized network supervision system with automated security-log pipelines and a real-time React alert dashboard.',
        client: 'AROPARTNERS — internal infrastructure supervision system',
        approach: 'I designed and deployed a centralized network supervision system on virtualized Ubuntu servers, using Zabbix as the monitoring core. On top of it, I built automated Python ETL pipelines that continuously ingest and normalize security logs from across the infrastructure, and a secure, responsive React dashboard so operators can visualize alerts and host health in real time rather than digging through raw logs.',
        vision: 'Infrastructure incidents are only actionable if they are visible before they become outages. My goal was to give the operations team a single, real-time source of truth for network and host health — closing the gap between "something happened" and "someone can act on it" from hours down to seconds.',
        challenges: 'Zabbix produces high-volume, semi-structured event data that is not directly consumable by a dashboard or by an analyst under time pressure. The core challenge was designing a Python ETL layer that could reliably parse, deduplicate and classify security logs at scale, persist them into PostgreSQL with a schema that supports fast queries, and keep the pipeline resilient to malformed or delayed data without losing alerts.',
        problems: 'Beyond the pipeline itself, I had to harden the whole stack: securing communication between the Zabbix agents, the ETL layer and the dashboard; managing service accounts and access scopes on the Ubuntu servers; and making sure the React dashboard authenticated safely and stayed responsive even under a burst of simultaneous alerts.',
        userCentric: 'The dashboard was built for network operators under pressure, not for a general audience. Severity is color-coded, the most critical alerts surface first, and every view is responsive so the system stays usable whether an operator is at a workstation or checking status from a phone during an on-call incident.',
        userNeeds: 'The operations team needed three things above all: real-time visibility, alert triage that does not require reading raw logs, and confidence that the monitoring layer itself would not become a blind spot. SmartNet Guard delivers a live host inventory, an alert feed prioritized by severity, and audit-friendly logging of every automated ETL run.',
      },
      fr: {
        title: 'SmartNet Guard — Supervision Réseau & DevSecOps',
        category: 'Supervision Réseau & DevSecOps',
        role: 'Spécialiste DevSecOps & Automatisation — AROPARTNERS',
        shortDesc: 'Un système de supervision réseau centralisé avec des pipelines de logs de sécurité automatisés et un tableau de bord React en temps réel.',
        client: 'AROPARTNERS — système interne de supervision d\'infrastructure',
        approach: 'J\'ai conçu et déployé un système de supervision réseau centralisé sur des serveurs Ubuntu virtualisés, avec Zabbix comme moteur de monitoring. Au-dessus, j\'ai développé des pipelines ETL Python automatisés qui ingèrent et normalisent en continu les logs de sécurité de toute l\'infrastructure, ainsi qu\'un tableau de bord React sécurisé et responsive permettant aux opérateurs de visualiser alertes et santé des hôtes en temps réel plutôt que de fouiller des logs bruts.',
        vision: 'Un incident d\'infrastructure n\'est exploitable que s\'il est visible avant de devenir une panne. Mon objectif était de donner à l\'équipe opérationnelle une source unique et en temps réel de vérité sur la santé du réseau et des hôtes — réduisant le délai entre « un événement s\'est produit » et « quelqu\'un peut agir » de plusieurs heures à quelques secondes.',
        challenges: 'Zabbix génère un volume important de données d\'événements semi-structurées, difficilement exploitables telles quelles par un tableau de bord ou un analyste sous pression. Le défi principal était de concevoir une couche ETL Python capable de parser, dédupliquer et classifier les logs de sécurité à grande échelle, de les persister dans PostgreSQL avec un schéma optimisé pour des requêtes rapides, et de rester résiliente face à des données malformées ou en retard sans perdre d\'alertes.',
        problems: 'Au-delà du pipeline, j\'ai dû sécuriser l\'ensemble de la chaîne : communication entre les agents Zabbix, la couche ETL et le tableau de bord ; gestion des comptes de service et des périmètres d\'accès sur les serveurs Ubuntu ; et authentification sûre du tableau de bord React, tout en gardant l\'interface réactive même lors d\'un pic simultané d\'alertes.',
        userCentric: 'Le tableau de bord a été conçu pour des opérateurs réseau sous pression, pas pour un public généraliste. La sévérité est codée par couleur, les alertes les plus critiques remontent en premier, et chaque vue est responsive pour rester utilisable que l\'opérateur soit sur un poste de travail ou consulte le statut depuis un téléphone en astreinte.',
        userNeeds: 'L\'équipe opérationnelle avait besoin avant tout de trois choses : une visibilité en temps réel, un triage des alertes ne nécessitant pas de lire des logs bruts, et la certitude que la couche de supervision elle-même ne deviendrait pas un angle mort. SmartNet Guard fournit un inventaire d\'hôtes en direct, un flux d\'alertes priorisé par sévérité, et une journalisation auditable de chaque exécution ETL automatisée.',
      },
    },
  },
  {
    id: 'enterprise-data-pipeline',
    year: '2025',
    images: ['/projects/data-pipeline-dashboard.svg', '/projects/data-pipeline-architecture.svg'],
    tools: ['Django', 'Python', 'PostgreSQL', 'Carbonio CE', 'Virtualization (VM)', 'ETL Automation'],
    content: {
      en: {
        title: 'Enterprise Data Pipeline & KPI Automation',
        category: 'Data Engineering',
        role: 'Systems & Data Specialist — AROPARTNERS',
        shortDesc: 'A deployed collaborative platform backed by a modeled PostgreSQL database and Python ETL scripts that automate KPI reporting.',
        client: 'AROPARTNERS — internal collaboration platform & KPI reporting',
        approach: 'I deployed and integrated the Carbonio CE collaborative enterprise platform on a virtualized environment, then modeled and structured a PostgreSQL relational database to support it. On top of that foundation, I wrote Python automation scripts that extract raw Excel data from operational teams, transform it into a consistent schema, and load it into the database — replacing manual spreadsheet consolidation with a repeatable ETL process for real-time KPI tracking.',
        vision: 'Teams were making decisions from spreadsheets that were manually updated, easy to break, and slow to consolidate. My goal was to give the organization a single collaborative platform and a reliable data layer underneath it, so KPIs reflect current reality instead of last week\'s manual export.',
        challenges: 'The main challenge was data quality at the source: incoming Excel files had inconsistent formats, missing fields and human-entry errors. I had to design a relational schema flexible enough to absorb that variability while staying normalized, and build transform logic that validates and cleans data before it ever reaches the database — so a single bad file could not silently corrupt a KPI.',
        problems: 'Deploying Carbonio CE on a virtualized environment surfaced its own integration issues — service configuration, storage sizing and access control had to be solved before the platform was usable by the wider team. On the data side, I had to handle schema evolution (new KPI fields requested mid-project) without breaking already-loaded historical data.',
        userCentric: 'The platform serves non-technical operational teams, so the priority was making Carbonio CE feel like a natural collaboration tool rather than an IT project, and making sure the KPI outputs were readable by managers without needing to understand the underlying database.',
        userNeeds: 'Stakeholders needed accurate, up-to-date KPIs without manual spreadsheet work, a collaborative space that didn\'t require retraining, and confidence that the numbers they were reporting upward were correct. The ETL pipeline now runs the extract-transform-load cycle automatically, turning raw exports into trustworthy, real-time metrics.',
      },
      fr: {
        title: 'Pipeline de Données d\'Entreprise & Automatisation des KPI',
        category: 'Data Engineering',
        role: 'Spécialiste Systèmes & Data — AROPARTNERS',
        shortDesc: 'Une plateforme collaborative déployée, adossée à une base PostgreSQL modélisée et des scripts ETL Python automatisant le reporting des KPI.',
        client: 'AROPARTNERS — plateforme de collaboration interne & reporting KPI',
        approach: 'J\'ai déployé et intégré la plateforme collaborative d\'entreprise Carbonio CE sur un environnement virtualisé, puis modélisé et structuré une base de données relationnelle PostgreSQL pour la soutenir. Sur cette base, j\'ai écrit des scripts d\'automatisation Python qui extraient les données Excel brutes des équipes opérationnelles, les transforment selon un schéma cohérent, et les chargent dans la base — remplaçant la consolidation manuelle de tableurs par un processus ETL reproductible pour un suivi des KPI en temps réel.',
        vision: 'Les équipes prenaient des décisions à partir de tableurs mis à jour manuellement, fragiles et lents à consolider. Mon objectif était de donner à l\'organisation une plateforme collaborative unique et une couche de données fiable en dessous, pour que les KPI reflètent la réalité du moment plutôt qu\'un export manuel de la semaine précédente.',
        challenges: 'Le principal défi était la qualité des données à la source : les fichiers Excel reçus avaient des formats incohérents, des champs manquants et des erreurs de saisie. J\'ai dû concevoir un schéma relationnel assez flexible pour absorber cette variabilité tout en restant normalisé, et construire une logique de transformation qui valide et nettoie les données avant qu\'elles n\'atteignent la base — pour qu\'un seul fichier défectueux ne puisse pas corrompre un KPI silencieusement.',
        problems: 'Le déploiement de Carbonio CE sur un environnement virtualisé a fait apparaître ses propres problèmes d\'intégration — configuration des services, dimensionnement du stockage et contrôle d\'accès ont dû être résolus avant que la plateforme soit utilisable par l\'ensemble de l\'équipe. Côté données, j\'ai dû gérer l\'évolution du schéma (nouveaux champs de KPI demandés en cours de projet) sans casser les données historiques déjà chargées.',
        userCentric: 'La plateforme sert des équipes opérationnelles non techniques : la priorité était de faire de Carbonio CE un outil de collaboration naturel plutôt qu\'un projet IT, et de rendre les résultats des KPI lisibles par les managers sans qu\'ils aient besoin de comprendre la base de données sous-jacente.',
        userNeeds: 'Les parties prenantes avaient besoin de KPI précis et à jour sans travail manuel sur tableur, d\'un espace collaboratif ne nécessitant pas de reformation, et de la certitude que les chiffres remontés étaient corrects. Le pipeline ETL exécute désormais automatiquement le cycle extraction-transformation-chargement, transformant des exports bruts en métriques fiables et en temps réel.',
      },
    },
  },
  {
    id: 'smart-queue-management',
    year: '2025',
    images: ['/projects/smart-queue-app.svg', '/projects/smart-queue-architecture.svg'],
    tools: ['Django', 'React', 'PostgreSQL', 'Claude API (LLM Integration)', 'REST APIs'],
    content: {
      en: {
        title: 'Smart Queue Management System',
        category: 'Applied AI / Full-Stack',
        role: 'Personal Project — Applied AI',
        shortDesc: 'A full-stack queue management system where an LLM (Claude) answers natural-language questions and helps optimize waiting-line flow.',
        client: 'Personal project — applied AI exploration',
        approach: 'I built a full-stack queue management system with a Django REST backend, a PostgreSQL database modeling queues, counters and visitor flow, and a React front end for both staff and visitors. On top of the core system, I integrated the Claude API so staff can ask natural-language questions about the state of the queue ("which counter is falling behind?", "what\'s our average wait time this hour?") and get direct, data-grounded answers instead of manually filtering dashboards.',
        vision: 'Most queue systems show raw numbers — tickets waiting, counters open — but leave the interpretation to the human. I wanted to build a system where the data and an LLM work together: the backend owns the ground truth, and the LLM turns that truth into plain-language insight and concrete recommendations for rebalancing flow.',
        challenges: 'The central challenge was grounding: making sure the LLM only reasons over real, current data from PostgreSQL rather than hallucinating queue statistics. I designed a query layer that fetches precise, scoped data (per counter, per time window) and passes it to the Claude API as structured context, so natural-language answers stay accurate even as the queue state changes in real time.',
        problems: 'I had to solve real-time synchronization between the Django backend and the React front end so queue status stays current for both visitors and staff, design a data model that generalizes across different queue types (single-line, multi-counter), and keep LLM calls fast and cost-effective by only sending the minimal relevant context rather than the entire dataset.',
        userCentric: 'Two very different users share this system: visitors, who need a simple, low-friction way to see their position and estimated wait time, and staff, who need fast operational insight. The interface is deliberately split — a minimal visitor view and a richer staff view with the natural-language assistant.',
        userNeeds: 'Visitors needed transparency about wait times without asking staff. Staff needed a way to spot bottlenecks and rebalance counters without manually cross-referencing numbers. The Claude integration closes that gap: staff can ask a direct question and get a decision-ready answer grounded in the live queue data.',
      },
      fr: {
        title: 'Système de Gestion Intelligente de Files d\'Attente',
        category: 'IA Appliquée / Full-Stack',
        role: 'Projet Personnel — IA Appliquée',
        shortDesc: 'Un système full-stack de gestion de files d\'attente où un LLM (Claude) répond à des questions en langage naturel et aide à optimiser les flux.',
        client: 'Projet personnel — exploration de l\'IA appliquée',
        approach: 'J\'ai construit un système full-stack de gestion de files d\'attente avec un backend Django REST, une base PostgreSQL modélisant files, guichets et flux de visiteurs, et un front-end React pour le personnel comme pour les visiteurs. Au-dessus de ce socle, j\'ai intégré l\'API Claude pour que le personnel puisse poser des questions en langage naturel sur l\'état de la file (« quel guichet prend du retard ? », « quel est le temps d\'attente moyen cette heure ? ») et obtenir des réponses directes, ancrées dans les données, plutôt que de filtrer manuellement des tableaux de bord.',
        vision: 'La plupart des systèmes de file d\'attente affichent des chiffres bruts — tickets en attente, guichets ouverts — mais laissent l\'interprétation à l\'humain. Je voulais construire un système où la donnée et un LLM travaillent ensemble : le backend détient la vérité de base, et le LLM la transforme en insight en langage clair et en recommandations concrètes pour rééquilibrer les flux.',
        challenges: 'Le défi central était l\'ancrage des réponses : s\'assurer que le LLM ne raisonne que sur des données réelles et actuelles issues de PostgreSQL, sans halluciner de statistiques de file. J\'ai conçu une couche de requêtage qui récupère des données précises et ciblées (par guichet, par fenêtre temporelle) et les transmet à l\'API Claude comme contexte structuré, pour que les réponses en langage naturel restent exactes même quand l\'état de la file change en temps réel.',
        problems: 'J\'ai dû résoudre la synchronisation en temps réel entre le backend Django et le front-end React pour que le statut de la file reste à jour pour les visiteurs comme pour le personnel, concevoir un modèle de données généralisable à différents types de files (ligne unique, multi-guichets), et garder les appels au LLM rapides et économiques en n\'envoyant que le contexte pertinent minimal plutôt que l\'intégralité des données.',
        userCentric: 'Deux profils très différents partagent ce système : les visiteurs, qui ont besoin d\'un moyen simple et sans friction de voir leur position et le temps d\'attente estimé, et le personnel, qui a besoin d\'un insight opérationnel rapide. L\'interface est volontairement scindée — une vue visiteur minimaliste et une vue personnel plus riche avec l\'assistant en langage naturel.',
        userNeeds: 'Les visiteurs avaient besoin de transparence sur les temps d\'attente sans solliciter le personnel. Le personnel avait besoin de repérer les goulots d\'étranglement et de rééquilibrer les guichets sans croiser les chiffres manuellement. L\'intégration de Claude comble cet écart : le personnel pose une question directe et obtient une réponse exploitable, ancrée dans les données de file en direct.',
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
