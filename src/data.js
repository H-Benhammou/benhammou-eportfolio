const profileData = {
    name: "Hamza Benhammou",
    title: "Ingénieur logiciel junior",
    location: "Rabat, Maroc",
    phone: "+2126-98656530",
    email: "ham.benhammou@gmail.com",
    about: "Étudiant en ingénierie logicielle, avec une expertise en développement web et mobile, en cloud computing et en machine learning. Passionné par l'automatisation, la scalabilité et l'IA, il s'efforce d'optimiser les performances des systèmes. Actuellement à la recherche d'un stage pour développer ses compétences pratiques en DevOps, en Cloud Computing et en développement web."
};

const experienceData = [
    {
        id: 1,
        title: "Ingénieur Logiciel",
        company: "NARSA",
        period: "Juillet 2024 - Août 2024",
        description: [
            "Développement d'une plateforme web pour la planification et la gestion des audits afin d'automatiser les processus et de réduire la paperasse, améliorant ainsi l'efficacité et les délais de traitement.",
            "Gestion des rôles utilisateurs pour rationaliser l'accès aux données et améliorer la sécurité, optimisant ainsi les flux de travail et la responsabilité."
        ]
    }
];

const educationData = [
    {
        id: 1,
        degree: "Ingénieur en Génie Logiciel",
        institution: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes - ENSIAS",
        period: "2023 - 2026"
    },
    {
        id: 2,
        degree: "Spécialité Mathématiques-Physique",
        institution: "CPGE Moulay Youssef",
        period: "2021 - 2023"
    }
];

const projectsData = [
    {
        id: 1,
        title: "Plateforme collaborative d'exploration spatiale",
        period: "Depuis Février 2025",
        description: "Développement d'une plateforme web collaborative avec Spring Boot pour la diffusion de contenus sur l'exploration spatiale, incluant la publication d'articles, un chatbot IA, des cours en ligne et un système de recommandations."
    },
    {
        id: 2,
        title: "Modèle de Deep Learning pour l'analyse des images ultrasonores des tumeurs cérébrales",
        period: "Depuis Février 2025",
        description: "Développement d'un modèle de deep learning pour l'analyse des images ultrasonores, en mettant l'accent sur l'exploitation des espaces géométriques et fréquentiels pour améliorer la détection et la classification des tumeurs."
    },
    {
        id: 3,
        title: "Modèle de Deep Learning pour la détection des émotions à partir d'images",
        period: "Février 2025 – Mars 2025",
        description: "Réalisation d'un modèle utilisant des CNN et TensorFlow pour obtenir une détection des émotions avec une grande précision à partir d'images."
    },
    {
        id: 4,
        title: "Modèle de Deep Learning pour la reconnaissance faciale en temps réel",
        period: "Janvier 2025 – Février 2025",
        description: "Développement d'un système de reconnaissance faciale en temps réel en utilisant des réseaux de neurones convolutifs (CNN) et OpenCV, afin d'améliorer la sécurité et la vérification d'identité."
    },
    {
        id: 5,
        title: "Application web pour la gestion des stages",
        period: "Novembre 2024 – Janvier 2025",
        description: "Développement d'une application web full-stack en utilisant Oracle APEX pour simplifier les demandes et les approbations de stages."
    },
    {
        id: 6,
        title: "Application web sécurisée pour la gestion des salles de classe de l'ENSIAS",
        period: "Février 2024 - Juin 2024",
        description: "Développement une plateforme web sécurisée en utilisant Laravel pour gérer les emplois du temps des salles de classe, les réservations et l'accès des utilisateurs."
    }
];

const skillsData = {
    programming: [
        { name: "Java", level: 100 },
        { name: "Python", level: 100 },
        { name: "C", level: 100 },
        { name: "PHP", level: 100 },
        { name: "JavaScript", level: 100 }
    ],
    webMobile: [
        { name: "Spring Boot", level: 100 },
        { name: "Laravel", level: 100 },
        { name: "React.js", level: 100 },
        { name: "Oracle APEX", level: 100 }
    ],
    cloudDevOps: [
        { name: "Agile", level: 100 },
        { name: "Docker / Kubernetes", level: 100 },
        { name: "OCI / IBM Cloud / AWS", level: 100 },
        { name: "Git / Github", level: 100 }
    ],
    machineLearning: [
        { name: "ML & DL algorithms", level: 100 },
        { name: "Sickit-learn / Tensorflow", level: 100 },
        { name: "Keras / OpenCV", level: 100 }
    ],
    databases: [
        { name: "MySQL / SQL Server", level: 100 },
        { name: "PostgreSQL / Oracle DB", level: 100 },
        { name: "Data Warehouse / ETL", level: 100 }
    ]
};

export { profileData, experienceData, educationData, projectsData, skillsData };
