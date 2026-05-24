const EVENTS = [
  {
    id: 1,
    title: "Conférence Internationale sur l'Intelligence Artificielle",
    type: "Conférence",
    domaine: "Informatique",
    pays: "France",
    ville: "Paris",
    date: "2026-06-15",
    daysLeft: 5,
    desc: "Découvrez les dernières innovations en intelligence artificielle et systèmes intelligents.",
    organisateur: "INRIA"
  },
  {
    id: 2,
    title: "Séminaire sur la Cybersécurité et les Réseaux",
    type: "Séminaire",
    domaine: "Informatique",
    pays: "Allemagne",
    ville: "Berlin",
    date: "2026-07-03",
    daysLeft: null,
    desc: "Analyse des nouvelles menaces numériques et solutions modernes de sécurité.",
    organisateur: "TU Berlin"
  },
  {
    id: 3,
    title: "Colloque International de Recherche Médicale",
    type: "Colloque",
    domaine: "Médecine",
    pays: "Canada",
    ville: "Montréal",
    date: "2026-08-28",
    daysLeft: 20,
    desc: "Présentation des avancées scientifiques dans le domaine médical et pharmaceutique.",
    organisateur: "Université de Montréal"
  },
  {
    id: 4,
    title: "Atelier sur le Traitement du Langage Naturel",
    type: "Atelier",
    domaine: "Informatique",
    pays: "Japon",
    ville: "Tokyo",
    date: "2026-09-10",
    daysLeft: 45,
    desc: "Formation pratique sur les modèles de langage et leurs applications industrielles.",
    organisateur: "University of Tokyo"
  },
  {
    id: 5,
    title: "Congrès Mondial de Physique Quantique",
    type: "Conférence",
    domaine: "Physique",
    pays: "Suisse",
    ville: "Genève",
    date: "2026-10-22",
    daysLeft: null,
    desc: "Réunion des plus grands spécialistes de la physique quantique et des matériaux avancés.",
    organisateur: "CERN"
  },
  {
    id: 6,
    title: "Séminaire International de Bioinformatique",
    type: "Séminaire",
    domaine: "Biologie",
    pays: "Tunisie",
    ville: "Tunis",
    date: "2026-07-05",
    daysLeft: 2,
    desc: "Exploration des méthodes computationnelles appliquées à la biologie moléculaire.",
    organisateur: "Université de Tunis"
  },
  {
    id: 7,
    title: "Colloque sur les Énergies Renouvelables",
    type: "Colloque",
    domaine: "Sciences de l'Environnement",
    pays: "France",
    ville: "Lyon",
    date: "2026-11-18",
    daysLeft: null,
    desc: "Débats et présentations sur les défis de la transition énergétique mondiale.",
    organisateur: "CNRS"
  },
  {
    id: 8,
    title: "Atelier de Modélisation Mathématique",
    type: "Atelier",
    domaine: "Mathématiques",
    pays: "Maroc",
    ville: "Rabat",
    date: "2026-06-30",
    daysLeft: 10,
    desc: "Ateliers pratiques sur la modélisation et la simulation des systèmes complexes.",
    organisateur: "Université Mohammed V"
  },
  {
    id: 9,
    title: "Conférence sur la Robotique et l'Automatisation",
    type: "Conférence",
    domaine: "Informatique",
    pays: "Allemagne",
    ville: "Munich",
    date: "2026-12-14",
    daysLeft: null,
    desc: "Présentation des dernières avancées en robotique industrielle et collaborative.",
    organisateur: "TU München"
  },
  {
    id: 10,
    title: "Forum International sur les Mathématiques Appliquées",
    type: "Conférence",
    domaine: "Mathématiques",
    pays: "France",
    ville: "Bordeaux",
    date: "2026-09-05",
    daysLeft: 30,
    desc: "Échanges scientifiques sur les applications des mathématiques dans l'industrie.",
    organisateur: "Université de Bordeaux"
  },
  {
    id: 11,
    title: "Colloque sur la Génomique et la Médecine Personnalisée",
    type: "Colloque",
    domaine: "Médecine",
    pays: "Canada",
    ville: "Toronto",
    date: "2026-10-08",
    daysLeft: 60,
    desc: "Exploration des avancées en génomique et leurs implications pour la médecine de demain.",
    organisateur: "University of Toronto"
  },
  {
    id: 12,
    title: "Atelier International sur les Systèmes Embarqués",
    type: "Atelier",
    domaine: "Informatique",
    pays: "Tunisie",
    ville: "Sfax",
    date: "2026-07-20",
    daysLeft: 15,
    desc: "Travaux pratiques sur la conception et le développement des systèmes embarqués.",
    organisateur: "ENIS Sfax"
  }
];

const ARCHIVES = [
  {
    id: 101,
    title: "Conférence Internationale sur le Cloud Computing",
    type: "Conférence",
    domaine: "Informatique",
    pays: "Pays-Bas",
    ville: "Amsterdam",
    date: "2025-11-12",
    year: 2025,
    organisateur: "Vrije Universiteit"
  },
  {
    id: 102,
    title: "Colloque sur les Neurosciences Computationnelles",
    type: "Colloque",
    domaine: "Médecine",
    pays: "France",
    ville: "Paris",
    date: "2025-09-24",
    year: 2025,
    organisateur: "ENS Paris"
  },
  {
    id: 103,
    title: "Séminaire National sur la Santé Numérique",
    type: "Séminaire",
    domaine: "Médecine",
    pays: "Tunisie",
    ville: "Tunis",
    date: "2025-07-08",
    year: 2025,
    organisateur: "Ministère de la Santé"
  },
  {
    id: 104,
    title: "Atelier de Recherche en Optimisation Combinatoire",
    type: "Atelier",
    domaine: "Mathématiques",
    pays: "France",
    ville: "Lyon",
    date: "2025-03-03",
    year: 2025,
    organisateur: "INSA Lyon"
  },
  {
    id: 105,
    title: "Conférence Mondiale sur la Biodiversité et les Écosystèmes",
    type: "Conférence",
    domaine: "Biologie",
    pays: "Kenya",
    ville: "Nairobi",
    date: "2024-10-15",
    year: 2024,
    organisateur: "UNEP"
  },
  {
    id: 106,
    title: "Colloque Méditerranéen sur les Énergies Solaires",
    type: "Colloque",
    domaine: "Sciences de l'Environnement",
    pays: "Algérie",
    ville: "Alger",
    date: "2024-06-20",
    year: 2024,
    organisateur: "USTHB"
  },
  {
    id: 107,
    title: "Forum International sur la Sécurité des Données",
    type: "Conférence",
    domaine: "Informatique",
    pays: "Suisse",
    ville: "Genève",
    date: "2024-02-14",
    year: 2024,
    organisateur: "ITU"
  },
  {
    id: 108,
    title: "Séminaire sur les Systèmes Embarqués et l'IoT",
    type: "Séminaire",
    domaine: "Informatique",
    pays: "Allemagne",
    ville: "Berlin",
    date: "2023-11-28",
    year: 2023,
    organisateur: "Fraunhofer Institute"
  },
  {
    id: 109,
    title: "Colloque International de Chimie des Matériaux",
    type: "Colloque",
    domaine: "Chimie",
    pays: "Canada",
    ville: "Montréal",
    date: "2023-08-05",
    year: 2023,
    organisateur: "McGill University"
  }
];