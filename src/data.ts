import { 
  LocalizedString, 
  ThemeTrack, 
  CommitteeGroup, 
  RegistrationTier, 
  PracticalInfoItem, 
  AgendaItem, 
  FaqItem, 
  SubmissionStep,
  KeynoteSpeaker
} from './types';

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSed_6-m-3ihmFCoolqDZQiKg28FW5HsCIKsLlX9b5MpF7OTFw/viewform";
export const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSed_6-m-3ihmFCoolqDZQiKg28FW5HsCIKsLlX9b5MpF7OTFw/viewform?embedded=true";

export const CONFERENCE_INFO = {
  shortTitle: {
    fr: "Deuxième Journée Doctorale 2026",
    en: "The Second Doctoral Day 2026",
  },
  edition: {
    fr: "DEUXIÈME JOURNÉE DOCTORALE 2026",
    en: "THE SECOND DOCTORAL DAY 2026",
  },
  number: "02",
  tagline: {
    fr: "RECHERCHE / INNOVATION / ÉCHANGE SCIENTIFIQUE",
    en: "RESEARCH / INNOVATION / SCIENTIFIC EXCHANGE",
  },
  subtitle: {
    fr: "Laboratoire des Matériaux Avancés et de Génie des Procédés (LAMPE)",
    en: "The Laboratory of Advanced Materials and Process Engineering (LAMPE)",
  },
  date: {
    fr: "3 Décembre 2026",
    en: "December 3, 2026",
  },
  dateShort: {
    fr: "3 Décembre 2026",
    en: "December 3, 2026",
  },
  abstractDeadline: {
    fr: "30 Octobre 2026",
    en: "October 30, 2026",
  },
  registrationDeadline: {
    fr: "30 Octobre 2026",
    en: "October 30, 2026",
  },
  registrationStatus: {
    fr: "Inscriptions ouvertes • Clôture le 30 Octobre 2026",
    en: "Registration open • Deadline October 30, 2026",
  },
  venue: {
    fr: "Amphi Rouge, Faculté des Sciences, Kénitra",
    en: "Amphi Rouge, Faculty of Sciences, Kenitra",
  },
  campus: "Kénitra",
  country: "Maroc",
  university: {
    name: "Université Ibn Tofaïl",
    nameArabic: "جامعة ابن طفيل",
    faculty: {
      fr: "Faculté des Sciences",
      en: "Faculty of Sciences",
    },
    facultyArabic: "كلية العلوم",
    city: "Kénitra",
    country: {
      fr: "Maroc",
      en: "Morocco",
    },
    website: "www.uit.ac.ma",
  },
  lab: {
    name: {
      fr: "Laboratoire des Matériaux Avancés et de Génie des Procédés",
      en: "The Laboratory of Advanced Materials and Process Engineering",
    },
    sigle: "LAMPE",
    director: "Pr M. Taky",
    coDirector: "Pr S. Bouzakraoui",
    accreditationDate: "14 Janvier 2020",
    researchersCount: 51,
  },
  contact: {
    email: "jd2.lampe@uit.ac.ma",
    phone: "+212 6 32 89 03 73",
    website: "www.uit.ac.ma",
  },
  googleFormUrl: GOOGLE_FORM_URL,
};

export const MAIN_THEMES: ThemeTrack[] = [
  {
    id: "theme-01",
    badge: "01",
    title: {
      fr: "Environnement, Eau, Énergie",
      en: "Environment, Water, Energy",
    },
    description: {
      fr: "Technologies membranaires avancées, dépollution des eaux, valorisation des biomasses et nouvelles solutions de stockage énergétique durable.",
      en: "Advanced membrane technologies, water remediation, biomass valorization, and novel sustainable energy storage solutions.",
    },
    subtopics: [
      {
        fr: "Technologies membranaires avancées pour le traitement des eaux",
        en: "Advanced membrane technologies for water treatment",
      },
      {
        fr: "Traitement des eaux naturelles et des eaux usées industrielles",
        en: "Natural water and industrial wastewater treatment",
      },
      {
        fr: "Production et stockage de l'énergie thermique",
        en: "Production and thermal energy storage",
      },
      {
        fr: "Valorisation énergétique de la biomasse et des déchets",
        en: "Energetic valorization of biomass and wastes",
      },
    ],
    color: "#00a3ff",
  },
  {
    id: "theme-02",
    badge: "02",
    title: {
      fr: "Chimie Verte & Génie des Procédés",
      en: "Green Chemistry & Process Engineering",
    },
    description: {
      fr: "Procédés écologiques innovants, biométhanisation, valorisation des extraits végétaux et génie des séparations industrielles.",
      en: "Innovative eco-friendly processes, biomethanation, plant extracts valorization, and industrial separation engineering.",
    },
    subtopics: [
      {
        fr: "Valorisation des déchets organiques et production de biogaz",
        en: "Organic waste valorization and biogas production",
      },
      {
        fr: "Valorisation des extraits végétaux : activités biologiques",
        en: "Valorization of plant extracts: biological activities",
      },
      {
        fr: "Extraction liquide-liquide et procédés de séparation écologiques",
        en: "Liquid-liquid extraction and eco-friendly separation processes",
      },
      {
        fr: "Développement de procédés chimiques éco-responsables",
        en: "Development of eco-responsible chemical processes",
      },
    ],
    color: "#00bf72",
  },
  {
    id: "theme-03",
    badge: "03",
    title: {
      fr: "Matériaux & Nanomatériaux",
      en: "Materials & Nanomaterials",
    },
    description: {
      fr: "Synthèse et caractérisation de nanomatériaux hybrides, biomatériaux, revêtements anti-corrosion et composants optoélectroniques.",
      en: "Synthesis and characterization of hybrid nanomaterials, biomaterials, anti-corrosion coatings, and optoelectronic components.",
    },
    subtopics: [
      {
        fr: "Matériaux hybrides organiques-inorganiques & Biomatériaux",
        en: "Hybrid organic-inorganic materials & Biomaterials",
      },
      {
        fr: "Traitement de surfaces et inhibition de la corrosion",
        en: "Surface treatment and corrosion inhibition",
      },
      {
        fr: "Inhibition de la corrosion par extraits végétaux naturels",
        en: "Corrosion inhibition using natural plant extracts",
      },
      {
        fr: "Optoélectronique des systèmes organiques & nanomatériaux",
        en: "Optoelectronics of organic systems & nanomaterials",
      },
    ],
    color: "#f5a623",
  },
];

export const THEME_TRACKS = MAIN_THEMES;

export const KEYNOTE_SPEAKERS: KeynoteSpeaker[] = [
  {
    id: "youssef-belmabkhout",
    name: "Pr. Youssef Belmabkhout",
    title: {
      fr: "Professor / Director of the Applied Chemistry and Engineering Research Centre of Excellence (ACER CoE)",
      en: "Professor / Director of the Applied Chemistry and Engineering Research Centre of Excellence (ACER CoE)",
    },
    institution: {
      fr: "Université Mohammed VI Polytechnique (UM6P)",
      en: "Mohammed VI Polytechnic University (UM6P)",
    },
    location: {
      fr: "Benguerir, Maroc",
      en: "Benguerir, Morocco",
    },
    photoUrl: "/speakers/belmabkhout.jpg",
    scholarUrl: "https://scholar.google.com/citations?user=DdpAcWIAAAAJ&hl=fr",
    citations: "27 600+",
    hIndex: "81",
    i10Index: "135",
    topicTitle: {
      fr: "Capture du Carbone (CCUS), Matériaux Poreux Avancés & Transition Énergétique Durable (Power-to-X & Hydrogène)",
      en: "Carbon Capture (CCUS), Advanced Porous Materials & Sustainable Energy Transition (Power-to-X & Hydrogen)",
    },
    bio: {
      fr: "Chercheur de renommée mondiale classé parmi les scientifiques les plus cités au niveau mondial dans le domaine du génie des procédés et des matériaux avancés (+27 600 citations, h-index 81). Ses travaux novateurs à l'UM6P et à l'international sont axés sur le développement de matériaux adsorbants de nouvelle génération (MOFs) pour la capture et valorisation du CO₂, la production d'hydrogène vert et les technologies Power-to-X.",
      en: "Globally acclaimed researcher ranked among the world's most cited scientists in chemical process engineering and advanced materials (+27,600 citations, h-index 81). His pioneering work at UM6P and internationally focuses on next-generation porous adsorbent materials (MOFs) for CO₂ capture and valorization, green hydrogen production, and Power-to-X technologies.",
    },
    expertise: [
      { fr: "Capture & Séquestration du CO₂ (CCUS)", en: "Carbon Capture & Sequestration (CCUS)" },
      { fr: "Power-to-X & Hydrogène Vert", en: "Power-to-X & Green Hydrogen" },
      { fr: "Matériaux Poreux & Adsorption (MOFs)", en: "Porous Materials & Adsorption (MOFs)" },
      { fr: "Génie des Procédés Durables", en: "Sustainable Process Engineering" },
    ],
    featuredBadge: {
      fr: "Conférence Plénière d'Ouverture",
      en: "Opening Keynote Lecture",
    },
  },
  {
    id: "abdelkrim-el-kadib",
    name: "Pr. Abdelkrim El Kadib",
    title: {
      fr: "Professeur de l'Enseignement Supérieur",
      en: "Full Professor",
    },
    institution: {
      fr: "Université Euromed de Fès (UEMF)",
      en: "Euro-Mediterranean University of Fes (UEMF)",
    },
    location: {
      fr: "Fès, Maroc",
      en: "Fes, Morocco",
    },
    photoUrl: "/speakers/elkadib.jpg",
    scholarUrl: "https://scholar.google.com/citations?user=8ZnyYBAAAAAJ&hl=fr",
    citations: "4 790+",
    hIndex: "40",
    i10Index: "99",
    topicTitle: {
      fr: "Chimie Verte, Nanomatériaux Hybrides Mésoporeux & Biopolymères Fonctionnels",
      en: "Green Chemistry, Mesoporous Hybrid Nanomaterials & Functional Biopolymers",
    },
    bio: {
      fr: "Spécialiste émérite en chimie verte et ingénierie des nanomatériaux hybrides à l'Université Euromed de Fès (+4 790 citations, h-index 40). Ses recherches de pointe portent sur l'assemblage de nanomatériaux hybrides organiques-inorganiques, les matériaux mésoporeux, la catalyse hétérogène éco-compatible et la valorisation durable des biopolymères naturels.",
      en: "Distinguished specialist in green chemistry and hybrid nanomaterials engineering at Euro-Mediterranean University of Fes (+4,790 citations, h-index 40). His cutting-edge research addresses the assembly of organic-inorganic hybrid nanomaterials, mesoporous materials, eco-friendly heterogeneous catalysis, and sustainable valorization of natural biopolymers.",
    },
    expertise: [
      { fr: "Chimie Verte & Catalyse Éco-responsable", en: "Green Chemistry & Eco-friendly Catalysis" },
      { fr: "Nanomatériaux Hybrides Mésoporeux", en: "Mesoporous Hybrid Nanomaterials" },
      { fr: "Biomatériaux & Biopolymères Biodégradables", en: "Biomaterials & Biodegradable Biopolymers" },
      { fr: "Valorisation de la Biomasse", en: "Biomass Valorization" },
    ],
    featuredBadge: {
      fr: "Conférence Plénière Spéciale",
      en: "Special Keynote Lecture",
    },
  },
];

export const LAB_PRESENTATION = {
  history: {
    fr: "Le Laboratoire de Matériaux Avancés et de Génie des Procédés (LAMPE) a été créé à la suite de l'accréditation par le Conseil d'Université du 14 Janvier 2020 sous l'impulsion d'un groupe de chercheurs dans les domaines du développement des matériaux avancés et de génie des procédés. Il siège à la Faculté des Sciences de Kénitra et rassemble 51 chercheurs.",
    en: "The Laboratory of Advanced Materials and Process Engineering (LAMPE) was established following accreditation by the University Council on January 14, 2020, through the initiative of a group of researchers in advanced materials and process engineering. Based at the Faculty of Sciences of Kenitra, it brings together 51 researchers.",
  },
  objectives: [
    {
      title: {
        fr: "Procédés Écologiques & Synergie",
        en: "Ecological Processes & Synergy",
      },
      desc: {
        fr: "Réunir l'ensemble des experts en développement des procédés écologiques (enseignants-chercheurs, chercheurs, ingénieurs, industriels...) au sein d'une famille professionnelle.",
        en: "Bring together experts in ecological process engineering (professors, researchers, engineers, industry partners) within a collaborative professional community.",
      },
    },
    {
      title: {
        fr: "Chimie Appliquée & Environnement",
        en: "Applied Chemistry & Environment",
      },
      desc: {
        fr: "Participer activement au développement de la chimie appliquée, de la préservation de l'environnement et du développement durable.",
        en: "Actively participate in the advancement of applied chemistry, environmental preservation, and sustainable development.",
      },
    },
    {
      title: {
        fr: "Formation Continue & Congrès",
        en: "Continuous Training & Congresses",
      },
      desc: {
        fr: "Assurer une formation continue de haut niveau par l'organisation de cours scientifiques, d'ateliers de travail et de congrès nationaux et internationaux.",
        en: "Deliver high-level continuous education through scientific workshops, doctoral symposia, and national and international congresses.",
      },
    },
    {
      title: {
        fr: "Nouveaux Horizons Scientifiques",
        en: "New Scientific Horizons",
      },
      desc: {
        fr: "Ouvrir de nouveaux horizons concernant les activités scientifiques et sociales pour les jeunes chercheurs et doctorants.",
        en: "Open new horizons for scientific, technical, and social innovation for doctoral candidates and early-career researchers.",
      },
    },
    {
      title: {
        fr: "Coopération Maghreb & Europe",
        en: "Maghreb & Europe Cooperation",
      },
      desc: {
        fr: "Établir des relations d'échange solides et durables avec les organismes et institutions partenaires à l'échelle nationale, maghrébine et européenne.",
        en: "Establish solid, long-term research partnerships with partner institutions across Morocco, the Maghreb, and Europe.",
      },
    },
  ],
};

export const COMMITTEE_DATA: CommitteeGroup[] = [
  {
    id: "comite-honneur",
    title: {
      fr: "Comité d'Honneur",
      en: "Honorary Committee",
    },
    subtitle: {
      fr: "Sous le haut patronage institutionnel",
      en: "Under high institutional patronage",
    },
    description: {
      fr: "Placé sous la bienveillance et le patronage des plus hautes autorités académiques de l'Université Ibn Tofaïl et de ses établissements affiliés.",
      en: "Placed under the guidance and patronage of the highest academic authorities of Ibn Tofail University and its affiliated institutions.",
    },
    members: [
      {
        name: "Prof. EBN TOUHAMI Mohamed",
        role: {
          fr: "Président de l'Université Ibn Tofaïl",
          en: "President of Ibn Tofail University",
        },
        affiliation: {
          fr: "Université Ibn Tofaïl, Kénitra",
          en: "Ibn Tofail University, Kenitra",
        },
      },
      {
        name: "Prof. HABSAOUI Amar",
        role: {
          fr: "Vice-Doyen chargé de la Recherche Scientifique",
          en: "Vice-Dean for Scientific Research",
        },
        affiliation: {
          fr: "Faculté des Sciences de Kénitra",
          en: "Faculty of Sciences of Kenitra",
        },
      },
    ],
  },
  {
    id: "comite-organisation",
    title: {
      fr: "Comité d'Organisation",
      en: "Organizing Committee",
    },
    subtitle: {
      fr: "Direction & Équipe de coordination doctorale",
      en: "Leadership & Doctoral Coordination Team",
    },
    description: {
      fr: "Assure la préparation logistique, l'accueil des participants et la coordination générale de la journée.",
      en: "Ensures logistic preparation, participant reception, and general conference coordination.",
    },
    members: [
      {
        name: "Pr TAKY Mohamed",
        role: { fr: "Directeur du Laboratoire LAMPE", en: "Director of LAMPE" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Pr BOUZAKRAOUI Said",
        role: { fr: "Enseignant-Chercheur", en: "Professor" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Pr DKHIRECHE Nadia",
        role: { fr: "Enseignante-Chercheuse", en: "Professor" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Pr HABSAOUI Amar",
        role: { fr: "Enseignant-Chercheur", en: "Professor" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Pr TANJI Karim",
        role: { fr: "Enseignant-Chercheur", en: "Professor" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Prof. SHAIM Abdelillah",
        role: { fr: "Enseignant-Chercheur", en: "Professor" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Dr ARIBOU Zakia",
        role: { fr: "Docteure FSK", en: "PhD Graduate-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Dr MZIOUD Khaoula",
        role: { fr: "Docteure FSK", en: "PhD Graduate-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Dr SABER Issam",
        role: { fr: "Docteur FSK", en: "PhD Graduate-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Dr FERRAA Nouhaila",
        role: { fr: "Docteure FSK", en: "PhD Graduate-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Dr EL FARHANI Fatine",
        role: { fr: "Docteure FSK", en: "PhD Graduate-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "Dr IDRISSI Abdennacer",
        role: { fr: "Docteur FSK", en: "PhD Graduate-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "AJLANE Khaoula",
        role: { fr: "Doctorante FSK", en: "PhD Student-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "IAZZOUZEN Souhayla",
        role: { fr: "Doctorante FSK", en: "PhD Student-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "ABBAD Yousra",
        role: { fr: "Doctorante FSK", en: "PhD Student-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "ET-THAMRY Majda",
        role: { fr: "Doctorante FSK", en: "PhD Student-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "AIT WAKRIM Jamal",
        role: { fr: "Doctorant FSK", en: "PhD Student-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
      {
        name: "EL OMARI Ayoub",
        role: { fr: "Doctorant FSK", en: "PhD Student-FSK" },
        affiliation: { fr: "FSK - Université Ibn Tofaïl", en: "FSK - Ibn Tofail University" },
      },
    ],
  },
  {
    id: "comite-scientifique",
    title: {
      fr: "Comité Scientifique",
      en: "Scientific Committee",
    },
    subtitle: {
      fr: "Évaluation par les pairs & arbitrage",
      en: "Peer Review & Scientific Arbitration",
    },
    description: {
      fr: "Garantit la rigueur méthodologique, l'évaluation des résumés et l'attribution des distinctions scientifiques.",
      en: "Guarantees methodological rigor, abstract evaluation, and scientific distinction awards.",
    },
    members: [
      { name: "Pr BELAKHMIMA Rida Allah", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "ENSK - Kénitra", en: "ENSK - Kenitra" } },
      { name: "Pr BELHAMIDI Sakina", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "ESTK - Kénitra", en: "ESTK - Kenitra" } },
      { name: "Pr BOUZAKRAOUI Said", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr DKHIRECHE Nadia", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr CHAHINE Abdelkrim", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr TAKY Mohamed", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr CHAFIK EL IDRISSI Brahim", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr EL AZHAR Fatima", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "ENSCK - Kénitra", en: "ENSCK - Kenitra" } },
      { name: "Pr EL AMRANI Mahacine", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr EL HEZZAT Mounir", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr HABSAOUI Amar", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr HARCHARRAS Mohamed", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr JERMOUNI Touriya", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr BEN JADI Sana", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr BOUICH Amal", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr EL MERSLY Lekbira", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr SALLEK Brahim", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr SHAIM Abdelillah", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr TAHAIKT Mustapha", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr EL MRABET Imane", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr ZARROK Hassan", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr GALAI Mouhcine", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr HBAIZ El Mahdi", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr OUASS Abdelkarim", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "ENSC - Kénitra", en: "ENSC - Kenitra" } },
      { name: "Pr KITANOU Sarra", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "ENSC - Kénitra", en: "ENSC - Kenitra" } },
      { name: "Pr EL MAADI Aicha", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr CHAOUKI Iman", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "ENSCK - Kénitra", en: "ENSCK - Kenitra" } },
      { name: "Pr EL HAMZI Sara", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr EL MARZOUKI Abderrahim", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr AMOR Zakia", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr KADIRI Lamya", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "ESEF - Kénitra", en: "ESEF - Kenitra" } },
      { name: "Pr MAHJOUBI Fatima Zahra", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr RAIR Driss", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "ENSC - Kénitra", en: "ENSC - Kenitra" } },
      { name: "Pr KRIBII Abderahim", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
      { name: "Pr TANJI Karim", role: { fr: "Membre du Comité", en: "Committee Member" }, affiliation: { fr: "FSK - Kénitra", en: "FSK - Kenitra" } },
    ],
  },
];

export const COMMITTEES_DATA = COMMITTEE_DATA;

export const SUBMISSION_TIMELINE: SubmissionStep[] = [
  {
    step: "01",
    title: {
      fr: "Téléchargement du Modèle",
      en: "Download Abstract Template",
    },
    date: {
      fr: "Disponible en ligne",
      en: "Available online",
    },
    description: {
      fr: "Téléchargez le canevas officiel de l'abstract (LaTeX ou Word). Seul l'Abstract (1 page max) est requis pour la soumission, il n'est plus nécessaire d'envoyer un résumé long.",
      en: "Download the official abstract template (LaTeX or Word). Only the 1-page Abstract is required for submission; a long summary is no longer needed.",
    },
  },
  {
    step: "02",
    title: {
      fr: "Inscription & Dépôt via Google Form",
      en: "Registration & Submission via Google Form",
    },
    date: {
      fr: "Clôture : 30 Octobre 2026",
      en: "Deadline: October 30, 2026",
    },
    description: {
      fr: "Remplissez le formulaire officiel Google Form, choisissez votre axe thématique et déposez votre fichier d'abstract compilé avant la date limite du 30 Octobre 2026.",
      en: "Fill out the official Google Form, select your research track, and upload your compiled abstract file before the deadline of October 30, 2026.",
    },
  },
  {
    step: "03",
    title: {
      fr: "Évaluation Scientifique & Notification",
      en: "Scientific Review & Notification",
    },
    date: {
      fr: "Mi-Novembre 2026",
      en: "Mid-November 2026",
    },
    description: {
      fr: "Chaque proposition est évaluée par les experts du Comité Scientifique pour sélection des communications orales retenues.",
      en: "Each proposal is reviewed by the Scientific Committee for selection of accepted oral presentations.",
    },
  },
  {
    step: "04",
    title: {
      fr: "Deuxième Journée Doctorale 2026",
      en: "The Second Doctoral Day 2026",
    },
    date: {
      fr: "3 Décembre 2026",
      en: "December 3, 2026",
    },
    description: {
      fr: "Présentation des travaux de recherche, sessions d'échanges avec les professeurs et remise des Prix d'Excellence scientifique.",
      en: "Presentation of doctoral research, discussion sessions with faculty, and awarding of Scientific Excellence Prizes.",
    },
  },
];

export const AGENDA_DATA: AgendaItem[] = [
  {
    time: "08:30 - 09:00",
    title: {
      fr: "Accueil & Enregistrement des participants",
      en: "Welcome & Participant Registration",
    },
    description: {
      fr: "Émargement, remise des badges officiels et des dossiers du colloque.",
      en: "Sign-in, official badge distribution, and conference folders.",
    },
    category: "ceremony",
    location: "Hall Amphi Rouge",
  },
  {
    time: "09:00 - 09:30",
    title: {
      fr: "Cérémonie d'Ouverture & Allocutions Officielles",
      en: "Opening Ceremony & Official Addresses",
    },
    description: {
      fr: "Mots de bienvenue de M. le Président de l'Université, M. le Doyen de la FSK et M. le Directeur du LAMPE.",
      en: "Welcome addresses by the University President, FSK Dean, and LAMPE Director.",
    },
    category: "ceremony",
    location: "Amphi Rouge",
  },
  {
    time: "09:30 - 11:00",
    title: {
      fr: "Session 1 : Environnement, Eau & Énergie",
      en: "Session 1: Environment, Water & Energy",
    },
    description: {
      fr: "Communications orales des doctorants (10 min de présentation + 5 min de discussion par exposé).",
      en: "Oral presentations by doctoral candidates (10 min talk + 5 min Q&A per paper).",
    },
    category: "session",
    location: "Amphi Rouge",
  },
  {
    time: "11:00 - 11:30",
    title: {
      fr: "Pause-Café & Échanges Scientifiques",
      en: "Coffee Break & Scientific Discussions",
    },
    description: {
      fr: "Pause-café conviviale et échanges scientifiques entre doctorants et enseignants-chercheurs.",
      en: "Friendly coffee break and scientific discussions between doctoral researchers and faculty.",
    },
    category: "break",
    location: "Hall Amphi Rouge",
  },
  {
    time: "11:30 - 13:00",
    title: {
      fr: "Session 2 : Chimie Verte & Génie des Procédés",
      en: "Session 2: Green Chemistry & Process Engineering",
    },
    description: {
      fr: "Exposés sur la biomasse, la biométhanisation, les biopolymères et les procédés industriels durables.",
      en: "Presentations on biomass, biomethanation, biopolymers, and sustainable processes.",
    },
    category: "session",
    location: "Amphi Rouge",
  },
  {
    time: "13:00 - 14:30",
    title: {
      fr: "Déjeuner & Networking",
      en: "Lunch & Networking",
    },
    description: {
      fr: "Déjeuner convivial offert aux participants et intervenants inscrits.",
      en: "Lunch offered to registered participants and speakers.",
    },
    category: "break",
    location: "Espace Réception",
  },
  {
    time: "14:30 - 16:00",
    title: {
      fr: "Session 3 : Matériaux & Nanomatériaux",
      en: "Session 3: Materials & Nanomaterials",
    },
    description: {
      fr: "Recherches sur les nanomatériaux hybrides, l'inhibition de la corrosion et l'optoélectronique.",
      en: "Research on hybrid nanomaterials, corrosion inhibition, and optoelectronics.",
    },
    category: "session",
    location: "Amphi Rouge",
  },
  {
    time: "16:00 - 16:30",
    title: {
      fr: "Pause-Café & Délibération du Jury",
      en: "Coffee Break & Jury Deliberation",
    },
    description: {
      fr: "Pause-café et délibération du jury d'évaluation pour l'attribution des prix des meilleures présentations orales.",
      en: "Coffee break and evaluation jury deliberation for the best oral presentation awards.",
    },
    category: "break",
    location: "Hall Amphi Rouge",
  },
  {
    time: "16:30 - 17:15",
    title: {
      fr: "Table Ronde : Doctorat & Perspectives Professionnelles",
      en: "Roundtable: PhD & Career Perspectives",
    },
    description: {
      fr: "Débat interactif entre universitaires et docteurs insérés dans l'industrie.",
      en: "Interactive discussion between faculty and alumni in industry.",
    },
    category: "roundtable",
    location: "Amphi Rouge",
  },
  {
    time: "17:15 - 17:45",
    title: {
      fr: "Remise des Prix d'Excellence & Clôture de la Journée",
      en: "Award Ceremony for Excellence & Closing",
    },
    description: {
      fr: "Attribution des Prix des Meilleures Présentations Orales, suivie du mot de clôture officiel.",
      en: "Awards for Best Oral Presentations, followed by official closing remarks.",
    },
    category: "closing",
    location: "Amphi Rouge",
  },
];

export const REGISTRATION_TIERS: RegistrationTier[] = [
  {
    id: "doctorant-communicant",
    badge: {
      fr: "Communication Orale",
      en: "Oral Presentation",
    },
    title: {
      fr: "Doctorant(e) Communicant",
      en: "Presenting PhD Candidate",
    },
    price: {
      fr: "Gratuit (Prise en charge LAMPE)",
      en: "Free (Sponsored by LAMPE)",
    },
    description: {
      fr: "Pour tout doctorant inscrit présentant ses travaux de recherche sous forme d'exposé oral (10 min de présentation + 5 min d'échange).",
      en: "For enrolled PhD candidates presenting their research as an oral communication (10 min presentation + 5 min Q&A).",
    },
    features: [
      {
        fr: "Présentation orale (10 min d'exposé + 5 min de discussion)",
        en: "Oral presentation (10 min talk + 5 min discussion)",
      },
      {
        fr: "Publication du résumé dans le recueil officiel LAMPE",
        en: "Abstract publication in official conference proceedings",
      },
      {
        fr: "Attestation officielle pour la formation doctorale",
        en: "Official certificate for doctoral training credit",
      },
      {
        fr: "Badge officiel, pauses-café & déjeuner networking inclus",
        en: "Official badge, coffee breaks & networking lunch included",
      },
      {
        fr: "Éligibilité au Prix d'Excellence de la Meilleure Présentation Orale",
        en: "Eligibility for the Best Oral Presentation Excellence Award",
      },
    ],
    recommended: true,
  },
  {
    id: "doctorant-auditeur",
    badge: {
      fr: "Participation Simple",
      en: "Auditor Participation",
    },
    title: {
      fr: "Doctorant(e) Auditeur Libre",
      en: "PhD Candidate Auditor",
    },
    price: {
      fr: "Gratuit",
      en: "Free",
    },
    description: {
      fr: "Pour les doctorants de 1ère année ou auditeurs souhaitant assister aux sessions scientifiques et enrichir leur culture de recherche.",
      en: "For 1st year PhD candidates and auditors wishing to attend sessions and expand their research knowledge.",
    },
    features: [
      {
        fr: "Accès intégral à toutes les sessions orales et plénières",
        en: "Full access to all oral and plenary sessions",
      },
      {
        fr: "Accès à la table ronde Insertion professionnelle",
        en: "Access to the Career Perspectives Roundtable",
      },
      {
        fr: "Attestation de présence pour le cursus doctoral",
        en: "Attendance certificate for doctoral program",
      },
      {
        fr: "Badges & pauses-café inclus",
        en: "Badges & coffee breaks included",
      },
    ],
  },
  {
    id: "chercheur-invite",
    badge: {
      fr: "Universitaire / Industriel",
      en: "Academic / Industry",
    },
    title: {
      fr: "Enseignant-Chercheur / Invité",
      en: "Faculty Member / Guest",
    },
    price: {
      fr: "Sur Invitation / Libre",
      en: "By Invitation / Free",
    },
    description: {
      fr: "Pour les professeurs, chercheurs permanents et partenaires institutionnels souhaitant participer aux échanges et aux jurys.",
      en: "For faculty professors, permanent researchers, and institutional partners participating in sessions and juries.",
    },
    features: [
      {
        fr: "Participation aux jurys d'évaluation des communications",
        en: "Participation in communication evaluation juries",
      },
      {
        fr: "Animation de sessions et interventions aux tables rondes",
        en: "Session chairing and roundtable discussion panel",
      },
      {
        fr: "Dossier scientifique complet de la journée",
        en: "Full scientific conference package",
      },
      {
        fr: "Déjeuner officiel avec la direction du laboratoire",
        en: "Official luncheon with laboratory leadership",
      },
    ],
  },
];

export const PRACTICAL_INFOS: PracticalInfoItem[] = [
  {
    id: "dates-horaires",
    title: {
      fr: "Date & Horaires",
      en: "Date & Schedule",
    },
    subtitle: {
      fr: "3 Décembre 2026 • 08h30 - 17h45",
      en: "December 3, 2026 • 08:30 AM - 05:45 PM",
    },
    description: {
      fr: "Une journée complète rythmée par 3 grandes sessions orales thématiques, des échanges scientifiques avec délibérations et une table ronde professionnelle.",
      en: "A comprehensive day featuring 3 main thematic oral sessions, scientific exchanges with jury evaluations, and a career roundtable.",
    },
    highlight: {
      fr: "Ouverture des portes dès 08h00",
      en: "Doors open at 08:00 AM",
    },
  },
  {
    id: "lieu-acces",
    title: {
      fr: "Lieu de l'Événement",
      en: "Conference Venue",
    },
    subtitle: {
      fr: "Amphi Rouge, Faculté des Sciences",
      en: "Amphi Rouge, Faculty of Sciences",
    },
    description: {
      fr: "Campus universitaire Ibn Tofaïl, Kénitra. À 10 minutes de la gare ferroviaire Kénitra-Ville (liaisons directes TGV / TNR depuis Rabat et Casablanca).",
      en: "Ibn Tofail University campus, Kenitra. 10 minutes from Kenitra-Ville train station (direct high-speed rail from Rabat & Casablanca).",
    },
    highlight: {
      fr: "Parking gratuit sur le campus",
      en: "Free on-campus parking",
    },
  },
  {
    id: "format-soumission",
    title: {
      fr: "Soumission de l'Abstract",
      en: "Abstract Submission",
    },
    subtitle: {
      fr: "Format Arial 12 • 1 page max (LaTeX ou Word)",
      en: "Font Arial 12 • 1 page max (LaTeX or Word)",
    },
    description: {
      fr: "Seul l'Abstract (1 page max, modèles officiels) est requis pour la soumission. Il n'est plus nécessaire d'envoyer un résumé long. Dépôt obligatoire via Google Form.",
      en: "Only the 1-page Abstract (official templates) is required for submission. A long summary is no longer needed. Mandatory upload via Google Form.",
    },
    highlight: {
      fr: "Date limite : 30 Octobre 2026",
      en: "Deadline: October 30, 2026",
    },
  },
  {
    id: "restauration",
    title: {
      fr: "Pause-Café & Convivialité",
      en: "Coffee Break & Networking",
    },
    subtitle: {
      fr: "Pause-café offerte aux participants",
      en: "Complimentary coffee break",
    },
    description: {
      fr: "Une pause-café conviviale est offerte à l'ensemble des participants inscrits pour encourager les échanges scientifiques et le réseautage académique.",
      en: "A complimentary coffee break is provided to all registered participants to encourage scientific discussions and academic networking.",
    },
    highlight: {
      fr: "Pause-café offerte",
      en: "Complimentary coffee break",
    },
  },
  {
    id: "attestations",
    title: {
      fr: "Attestations & Crédits",
      en: "Certificates & Credits",
    },
    subtitle: {
      fr: "Validation formation doctorale",
      en: "Doctoral training validation",
    },
    description: {
      fr: "Une attestation officielle signée par le Doyen de la Faculté des Sciences et le Directeur du LAMPE sera remise en fin de journée.",
      en: "An official certificate signed by the Dean of the Faculty of Sciences and the LAMPE Director will be delivered at the closing.",
    },
    highlight: {
      fr: "Attestation remise sur place",
      en: "Certificates delivered on site",
    },
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "Inscription",
    question: {
      fr: "Comment s'inscrire à la Deuxième Journée Doctorale 2026 ?",
      en: "How do I register for the Second Doctoral Day 2026?",
    },
    answer: {
      fr: "L'inscription s'effectue directement en ligne via le formulaire officiel Google Form fourni sur ce site. Cliquez sur le bouton « S'inscrire » ou « Accéder au formulaire Google Forms » pour renseigner vos coordonnées et soumettre votre proposition.",
      en: "Registration is completed directly online using the official Google Form provided on this site. Click on the 'Register' or 'Access Google Form' button to enter your details and submit your abstract.",
    },
  },
  {
    id: "faq-2",
    category: "Soumission",
    question: {
      fr: "Quels sont les formats autorisés pour le résumé (abstract) ?",
      en: "What formats are accepted for abstract submission?",
    },
    answer: {
      fr: "Le résumé doit être rédigé en français ou en anglais en utilisant le modèle officiel (.tex ou .docx). La longueur maximale recommandée est de 300 mots, complétée par 3 à 5 mots-clés et les affiliations académiques complètes.",
      en: "Abstracts must be written in French or English using the official template (.tex or .docx). The recommended maximum length is 300 words, accompanied by 3 to 5 keywords and complete academic affiliations.",
    },
  },
  {
    id: "faq-3",
    category: "Présentation",
    question: {
      fr: "Quel est le format et la durée des communications orales ?",
      en: "What is the format and duration of oral presentations?",
    },
    answer: {
      fr: "Chaque communication orale dispose d'un créneau de 15 minutes (10 minutes de présentation sur diaporama PowerPoint ou PDF + 5 minutes de questions/réponses avec le jury et l'assemblée). Seules les communications orales sont programmées pour cette édition.",
      en: "Each oral presentation has a 15-minute slot (10 minutes presentation using PowerPoint or PDF slides + 5 minutes of Q&A with the jury and audience). Only oral communications are scheduled for this edition.",
    },
  },
  {
    id: "faq-4",
    category: "Attestation",
    question: {
      fr: "Les participants recevront-ils une attestation de communication ?",
      en: "Will participants receive a certificate of presentation?",
    },
    answer: {
      fr: "Oui, une attestation officielle signée par la direction du Laboratoire LAMPE et le doyen de la Faculté des Sciences sera remise à chaque doctorant communicant (communication orale) pour validation des crédits de formation doctorale.",
      en: "Yes, an official certificate signed by the LAMPE Laboratory direction and the Dean of the Faculty of Sciences will be issued to each presenting doctoral candidate (oral communication) for credit validation.",
    },
  },
  {
    id: "faq-5",
    category: "Inscription",
    question: {
      fr: "Y a-t-il des frais d'inscription pour participer ?",
      en: "Are there any registration fees to participate?",
    },
    answer: {
      fr: "La participation est gratuite et entièrement prise en charge par le Laboratoire LAMPE et la Faculté des Sciences de Kénitra pour les doctorants et chercheurs affiliés aux établissements de l'Université Ibn Tofaïl.",
      en: "Participation is free of charge and fully supported by the LAMPE Laboratory and the Faculty of Sciences of Kenitra for doctoral students and researchers affiliated with Ibn Tofail University institutions.",
    },
  },
  {
    id: "faq-6",
    category: "Logistique",
    question: {
      fr: "Comment se rendre à la Faculté des Sciences de Kénitra ?",
      en: "How to get to the Faculty of Sciences of Kenitra?",
    },
    answer: {
      fr: "Le campus universitaire Ibn Tofaïl est situé à Kénitra. Des taxis et navettes relient directement la gare ferroviaire Kénitra-Ville (desservie par Al Boraq et TNR) au campus en moins de 10 minutes. Un parking gratuit est accessible aux participants véhiculés.",
      en: "The Ibn Tofail University campus is located in Kenitra. Taxis and shuttles connect the Kenitra-Ville train station (served by Al Boraq high-speed train and TNR) to the campus in under 10 minutes. Free parking is available for drivers.",
    },
  },
];
