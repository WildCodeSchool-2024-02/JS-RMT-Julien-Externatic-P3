-- SQLBook: Code
CREATE TABLE contract (
  id int primary key auto_increment not null,
  name varchar(255) not null
);
CREATE TABLE work_time (
  id int primary key auto_increment not null,
  time varchar(255) not null
);
CREATE TABLE work_format (
  id int primary key auto_increment not null,
  format varchar(255) not null
);
CREATE TABLE technology (
  id int primary key auto_increment not null,
  tech varchar(255) not null
);
CREATE TABLE category (
  id int primary key auto_increment not null,
  category varchar(255) not null
);
CREATE TABLE activity_area (
  id int primary key auto_increment not null,
  name varchar(255) not null
);
CREATE TABLE status (
  id int  primary key auto_increment not null,
  label varchar(255) not null
);
CREATE TABLE role (
  id int primary key auto_increment not null,
  role varchar(255) not null
);
CREATE TABLE company (
    id int primary key auto_increment not null,
    name varchar(255) not null,
    head_office varchar(255) not null,
    description longtext not null,
    sales_figure int not null,
    size int not null,
    company_values varchar(255) not null,
    contact_name varchar(255) not null,
    contact_phone varchar(255) not null,
    contact_mail varchar(255) not null,
    activity_area_id int not null,
    FOREIGN KEY (activity_area_id) REFERENCES activity_area(id)
);
CREATE TABLE user (
  id int primary key auto_increment not null,
  mail varchar(255) not null,
  password varchar(255) not null,
  role_id int not null default 1,
  FOREIGN KEY (role_id) REFERENCES role(id)
);
CREATE TABLE profil (
  user_id int primary key not null,
  firstname varchar(255) not null,
  lastname varchar(255) not null,
  description longtext,
  phone varchar(255),
  city varchar(255),
  photo varchar(255),
  cv varchar(255),
  github VARCHAR(255),
  linkedin VARCHAR(255),
  is_active BOOLEAN,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  on_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE study_level (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  level VARCHAR(255) not null
);
CREATE TABLE offer (
  id int primary key auto_increment not null,
  title varchar(255) not null,
  missions longtext not null,
  profil_desc longtext not null,
  benefits longtext not null,
  city varchar(255) not null,
  salary int,
  start_date VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  on_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_cadre BOOLEAN,
  consultant_id int,
  company_id int not null,
  study_level_id int not null,
  contract_id int not null,
  work_time_id int not null,
  work_format_id int not null,
  category_id int not null,
  FOREIGN KEY (study_level_id) REFERENCES study_level(id),
  FOREIGN KEY (consultant_id) REFERENCES user(id),
  FOREIGN KEY (company_id) REFERENCES company(id),
  FOREIGN KEY (contract_id) REFERENCES contract(id),
  FOREIGN KEY (work_time_id) REFERENCES work_time(id),
  FOREIGN KEY (work_format_id) REFERENCES work_format(id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE favorite (
  PRIMARY KEY (candidate_id, offer_id),
  candidate_id INT NOT NULL,
  offer_id INT NOT NULL,
  FOREIGN KEY (candidate_id) REFERENCES user(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id)
);

CREATE TABLE candidacy (
  PRIMARY key (candidate_id, offer_id),
  candidate_id int not null,
  offer_id int not null,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP,
  status_id int not null,
  FOREIGN KEY (candidate_id) REFERENCES user(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  FOREIGN KEY (status_id) REFERENCES status(id)
);
CREATE TABLE technology_candidate (
  PRIMARY KEY (technology_id, candidate_id),
  technology_id int not null,
  candidate_id int not null,
  FOREIGN KEY (technology_id) REFERENCES technology(id),
  FOREIGN KEY (candidate_id) REFERENCES profil(user_id)
);
CREATE TABLE technology_offer (
  PRIMARY KEY (technology_id, offer_id),
  technology_id int not null,
  offer_id int not null,
  FOREIGN KEY (technology_id) REFERENCES technology(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id)
);
CREATE TABLE consultant_company (
  PRIMARY KEY (consultant_id, company_id),
  consultant_id int not null,
  company_id int not null,
  FOREIGN KEY (consultant_id) REFERENCES user(id),
  FOREIGN KEY (company_id) REFERENCES company(id)
);

INSERT INTO contract (name) VALUES ('CDD');
INSERT INTO contract (name) VALUES ('CDI');
INSERT INTO contract (name) VALUES ('Freelance');
INSERT INTO contract (name) VALUES ('Alternance');
INSERT INTO contract (name) VALUES ('RQTH');
INSERT INTO contract (name) VALUES ('Interim');

INSERT INTO work_time (time) VALUES ('Temps plein');
INSERT INTO work_time (time) VALUES ('Temps partiel');
INSERT INTO work_time (time) VALUES ('Mi-temps');
INSERT INTO work_time (time) VALUES ('A la demande');
INSERT INTO work_time (time) VALUES ('Temps partagé');

INSERT INTO work_format (format) VALUES ('Remote');
INSERT INTO work_format (format) VALUES ('Présentiel');
INSERT INTO work_format (format) VALUES ('Hybride: présentiel 2 jours');
INSERT INTO work_format (format) VALUES ('Hybride: présentiel 3 jours');

INSERT INTO technology (tech) VALUES ('JavaScript');
INSERT INTO technology (tech) VALUES ('Python');
INSERT INTO technology (tech) VALUES ('Java');
INSERT INTO technology (tech) VALUES ('C#');
INSERT INTO technology (tech) VALUES ('PHP');
INSERT INTO technology (tech) VALUES ('C++');
INSERT INTO technology (tech) VALUES ('TypeScript');
INSERT INTO technology (tech) VALUES ('Ruby');
INSERT INTO technology (tech) VALUES ('React');
INSERT INTO technology (tech) VALUES ('Angular');
INSERT INTO technology (tech) VALUES ('Vue.js');
INSERT INTO technology (tech) VALUES ('Node.js');
INSERT INTO technology (tech) VALUES ('Ruby on Rails');
INSERT INTO technology (tech) VALUES ('Laravel');
INSERT INTO technology (tech) VALUES ('Express.js');
INSERT INTO technology (tech) VALUES ('Symfony');
INSERT INTO technology (tech) VALUES ('Oracle Database');
INSERT INTO technology (tech) VALUES ('MariaDB');
INSERT INTO technology (tech) VALUES ('MySQL');
INSERT INTO technology (tech) VALUES ('PostgreSQL');
INSERT INTO technology (tech) VALUES ('SQLite');
INSERT INTO technology (tech) VALUES ('HTML');
INSERT INTO technology (tech) VALUES ('CSS');
INSERT INTO technology (tech) VALUES ('Sass');
INSERT INTO technology (tech) VALUES ('SCSS');
INSERT INTO technology (tech) VALUES
  ('Sketch'),
  ('Adobe XD'),
  ('Figma'),
  ('InVision'),
  ('Zeplin');
INSERT INTO technology (tech) VALUES
  ('Git'),
  ('Puppet'),
  ('Chef'),
  ('Prometheus'),
  ('ELK Stack');
INSERT INTO technology (tech) VALUES
  ('Docker'),
  ('Kubernetes'),
  ('Jenkins'),
  ('Ansible'),
  ('Terraform');

INSERT INTO category (category) VALUES
  ('Développeur Backend'),
  ('Développeur Frontend'),
  ('UI/UX'),
  ('Data Analyst'),
  ('DevOps'),
  ('Chef de projet'),
  ('Cybersécurité');

INSERT INTO study_level (level) VALUES
('Baccalauréat'),
('BTS/DUT'),
('Licence'),
('Master'),
('Doctorat');

INSERT INTO activity_area (name) VALUES
  ('Services informatiques'),
  ('Télécommunications'),
  ('Systèmes embarqués'),
  ('Intelligence artificielle'),
  ('Blockchain et cryptomonnaies'),
  ('Internet des objets (IoT)'),
  ('Cloud computing'),
  ('Sécurité informatique'),
  ('Big data et analytics'),
  ('E-commerce'),
  ('Éducation et e-learning'),
  ('Santé numérique (e-santé)'),
  ('Automatisation et robotique'),
  ('Jeux vidéo et divertissement numérique'),
  ('Ingénierie logicielle'),
  ('Consulting en technologie'),
  ('Développement durable et environnement'),
  ('Fintech (technologies financières)'),
  ('Transport et logistique'),
  ('Agriculture numérique'),
  ('Industrie 4.0 et manufacturier intelligent'),
  ('Médias et communication'),
  ('Tourisme et voyages'),
  ('Biotechnologies et sciences de la vie');

INSERT INTO status (label) VALUES
  ('En cours'),
  ('Entretien programmé'),
  ('Candidature non retenue'),
  ('Candidature acceptée'),
  ('Offre clôturée');

INSERT INTO role (role) VALUES
  ('Candidat'),
  ('Consultant'),
  ('Administrateur');

INSERT INTO user (mail, password, role_id) VALUES
  ('candidate1@example.com', 'password1', 1),
  ('candidate2@example.com', 'password2', 1),
  ('candidate3@example.com', 'password3', 1),
  ('candidate4@example.com', 'password4', 1),
  ('candidate5@example.com', 'password5', 1);

INSERT INTO user (mail, password, role_id) VALUES
  ('consultant1@example.com', 'password6', 2),
  ('consultant2@example.com', 'password7', 2),
  ('consultant3@example.com', 'password8', 2);

INSERT INTO user (mail, password, role_id) VALUES
  ('admin@example.com', 'adminpassword', 3);

INSERT INTO profil (user_id, firstname, lastname, description) VALUES
  (6, 'Thomas', 'Lefevre', "Consultant IT expert, optimisant vos solutions technologiques pour une transformation digitale efficace."),
  (7, 'Camille', 'Roux', "Consultante IT, expert en solutions sur mesure pour maximiser votre efficacité numérique."),
  (8, 'Antoine', 'Moreau', "Spécialiste IT, transformant vos défis technologiques en opportunités de croissance.");

INSERT INTO profil (user_id, firstname, lastname) VALUES
  (9, 'Captain', 'Control');

INSERT INTO profil (user_id, firstname, lastname, description, phone, city, photo, cv, github, linkedin, is_active) VALUES
  (1, 'Jean', 'Dupuis', "Développeur backend expérimenté avec plus de 10 ans dans le domaine. J'ai travaillé sur divers projets complexes, utilisant des technologies comme Java, Python et SQL. Passionné par l'optimisation des bases de données et l'amélioration des performances des applications. Toujours à l'affût des nouvelles technologies pour intégrer les meilleures pratiques dans mes projets.", '0654321987', 'Paris', NULL, NULL, 'https://github.com/jeandupuis', 'https://linkedin.com/in/jeandupuis', TRUE),
  (2, 'Marie', 'Legrand', "Spécialiste en UI/UX avec une expertise approfondie dans la création d'interfaces utilisateur intuitives et esthétiques. J'ai collaboré avec des équipes internationales pour développer des produits numériques engageants. Ma passion réside dans l'amélioration de l'expérience utilisateur par des designs innovants et centrés sur l'utilisateur. Je suis également formatrice en design UX.", '0654321988', 'Lyon', NULL, NULL, 'https://github.com/marielegrand', 'https://linkedin.com/in/marielegrand', TRUE),
  (3, 'Pierre', 'Dubois', "Expert en cybersécurité, je protège les entreprises contre les cybermenaces depuis plus de 8 ans. Ma spécialité inclut l'évaluation des vulnérabilités, la gestion des incidents de sécurité et la mise en place de solutions de sécurité robustes. Je suis certifié CEH et CISSP, et j'aime partager mes connaissances à travers des conférences et des ateliers. Ma mission est de rendre le cyberespace plus sûr.", '0654321989', 'Marseille', NULL, NULL, 'https://github.com/pierredubois', 'https://linkedin.com/in/pierredubois', TRUE),
  (4, 'Lucie', 'Martin', "Data analyst avec 5 ans d'expérience dans l'analyse de données complexes pour fournir des insights précieux aux entreprises. J'utilise des outils comme Python, R et SQL pour transformer les données brutes en informations exploitables. Mon expertise inclut la visualisation des données et le développement de modèles prédictifs. Passionnée par le big data et l'intelligence artificielle, je suis toujours en quête de nouvelles méthodes pour améliorer l'analyse des données.", '0654321990', 'Toulouse', NULL, NULL, 'https://github.com/luciemartin', 'https://linkedin.com/in/luciemartin', TRUE),
  (5, 'Sophie', 'Bernard', "Développeur frontend passionnée avec une forte expérience en JavaScript, React et CSS. J'ai un œil pour le design et une passion pour créer des interfaces utilisateur fluides et réactives. J'aime travailler en étroite collaboration avec les équipes de design pour transformer les maquettes en sites web fonctionnels. Toujours curieuse des nouvelles tendances en développement web, je m'efforce de rester à jour avec les technologies émergentes.", '0654321991', 'Nice', NULL, NULL, 'https://github.com/sophiebernard', 'https://linkedin.com/in/sophiebernard', TRUE);

INSERT INTO company (name, head_office, description, sales_figure, size, company_values, contact_name, contact_phone, contact_mail, activity_area_id) VALUES
  ('Tech Solutions', 'Paris', 'Entreprise spécialisée dans le développement de solutions logicielles. Nous offrons des produits innovants qui améliorent la productivité et l\'efficacité des entreprises. Nos équipes travaillent constamment sur des technologies de pointe pour garantir des solutions performantes et sécurisées. Notre mission est d\'aider les entreprises à atteindre leurs objectifs grâce à des outils numériques de qualité. Nous proposons également des services de conseil pour accompagner nos clients dans la transformation digitale. Forts d\'une expérience solide dans le secteur, nous sommes reconnus pour notre expertise et notre engagement envers la satisfaction client. En investissant continuellement dans la recherche et le développement, nous restons à la pointe de l\'innovation pour offrir des solutions adaptées aux besoins évolutifs du marché.', 1000000, 50, 'Innovation, Qualité, Satisfaction Client', 'Alice Durand', '0123456789', 'alice.durand@techsolutions.com', 1),
  ('CloudNet', 'Lyon', 'Fournisseur de solutions de cloud computing. Nous proposons une gamme complète de services cloud pour répondre aux besoins de toutes les entreprises. Notre infrastructure sécurisée et fiable permet à nos clients de se concentrer sur leur cœur de métier. Avec des datacenters de dernière génération, nous assurons une disponibilité maximale et des performances optimales. Nous offrons également des services de migration cloud, de gestion et de support technique, garantissant une transition en douceur vers des environnements cloud. Nos solutions sont conçues pour être flexibles et évolutives, permettant aux entreprises de s\'adapter rapidement aux changements du marché. L\'engagement envers la satisfaction de nos clients et la sécurité de leurs données est au cœur de notre stratégie.', 2000000, 100, 'Fiabilité, Sécurité, Performance', 'Bob Martin', '0987654321', 'bob.martin@cloudnet.com', 7),
  ('DataStream', 'Marseille', 'Experts en big data et analytics. Nous aidons les entreprises à tirer parti de leurs données pour prendre des décisions éclairées. Nos solutions d\'analyse avancées permettent de transformer les données en informations exploitables. Nous offrons des services de consulting en data science pour aider nos clients à développer des stratégies basées sur les données. Nos outils de visualisation de données et nos plateformes d\'intelligence artificielle facilitent l\'extraction de connaissances approfondies. En travaillant avec des entreprises de divers secteurs, nous avons acquis une expérience précieuse qui nous permet de fournir des solutions personnalisées et efficaces. Nous croyons fermement que l\'analyse de données est la clé pour une croissance durable et un avantage concurrentiel.', 1500000, 75, 'Analyse, Précision, Expertise', 'Caroline Dupont', '0123498765', 'caroline.dupont@datastream.com', 9),
  ('SecureSoft', 'Toulouse', 'Leader en sécurité informatique. Nous protégeons les entreprises contre les menaces numériques grâce à nos solutions de sécurité avancées. Notre équipe d\'experts est dédiée à fournir des services de sécurité de premier ordre pour assurer la protection des données. Nous proposons une gamme complète de produits, allant des antivirus aux pare-feu, en passant par les systèmes de détection d\'intrusion et les solutions de sauvegarde. Notre centre de recherche en cybersécurité travaille en permanence pour anticiper et contrer les nouvelles menaces. En outre, nous offrons des formations en sécurité informatique pour sensibiliser et former les employés de nos clients aux meilleures pratiques. Notre objectif est de garantir la tranquillité d\'esprit à nos clients en assurant une protection continue et proactive de leurs systèmes.', 2500000, 120, 'Protection, Confiance, Innovation', 'David Leroy', '0678901234', 'david.leroy@securesoft.com', 8),
  ('FinTech Innovations', 'Nice', 'Société spécialisée dans les technologies financières. Nous développons des solutions innovantes pour le secteur financier, en mettant l\'accent sur la transparence et l\'efficacité. Nos produits aident les institutions financières à optimiser leurs opérations et à mieux servir leurs clients. Nous offrons des plateformes de paiement sécurisées, des outils de gestion des risques et des solutions de conformité réglementaire. Nos équipes travaillent en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et créer des solutions sur mesure. En intégrant les dernières avancées technologiques, nous permettons à nos clients de rester compétitifs dans un marché en constante évolution. Nous nous engageons à promouvoir une culture de confiance et de transparence dans toutes nos interactions professionnelles, en plaçant l\'intérêt de nos clients au cœur de notre démarche.', 3000000, 90, 'Transparence, Efficacité, Confiance', 'Eve Laurent', '0678905678', 'eve.laurent@fintech.com', 18);


INSERT INTO offer (title, missions, profil_desc, benefits, city, salary, start_date, is_cadre, consultant_id, company_id, study_level_id, contract_id, work_time_id, work_format_id, category_id) VALUES
  ('Développeur Java Backend', 
  'Développement et maintenance des applications backend en Java. Participer à la conception et à l\'architecture des nouveaux projets. Collaborer avec les équipes frontend pour assurer l\'intégration optimale. Effectuer des revues de code et garantir la qualité du code. Résoudre les problèmes techniques et les bogues rencontrés par les utilisateurs. Assurer la documentation des fonctionnalités et des processus de développement. Contribuer à l\'amélioration continue des pratiques de développement en adoptant les meilleures méthodologies et outils. Participer aux réunions d\'équipe et proposer des solutions innovantes pour les défis techniques. Former et encadrer les développeurs juniors.', 
  'Expérience confirmée en développement Java. Bonne connaissance des bases de données relationnelles et non relationnelles. Capacité à travailler en équipe et à communiquer efficacement. Maîtrise des frameworks Java tels que Spring ou Hibernate. Connaissance des outils de gestion de version comme Git. Aptitude à résoudre des problèmes complexes et à proposer des solutions innovantes. Esprit analytique et rigoureux. Excellentes compétences en résolution de problèmes et en optimisation de performances. Capacité à adapter rapidement aux nouvelles technologies et aux environnements de travail dynamiques. Bonnes compétences interpersonnelles et capacité à travailler sous pression.', 
  'Salaire compétitif avec primes de performance. Opportunités de formation continue et de développement professionnel. Environnement de travail stimulant et innovant. Assurance santé complète et avantages sociaux. Possibilité de télétravail et horaires flexibles. Participation à des projets innovants et à la pointe de la technologie. Ambiance de travail conviviale et propice à l\'épanouissement professionnel. Équilibre vie professionnelle et personnelle respecté avec des congés payés et des événements d\'entreprise réguliers. Équipement informatique de pointe fourni. Reconnaissance et valorisation des contributions individuelles.', 
  'Paris', 50000, '2024-08-01', FALSE, 6, 1, 3, 2, 1, 2, 1),
  ('Ingénieur DevOps', 
  'Gestion et optimisation des pipelines CI/CD. Automatisation des déploiements et gestion de l\'infrastructure cloud. Surveillance et amélioration des performances des systèmes. Collaboration avec les équipes de développement pour intégrer les pratiques DevOps. Mise en place de solutions de monitoring et d\'alerte. Participation à la conception de l\'architecture technique des projets. Réalisation de scripts d\'automatisation pour les tâches répétitives. Contribution à la documentation des processus DevOps. Assistance technique aux équipes de développement. Implémentation des meilleures pratiques de sécurité et de conformité. Participation aux réunions stratégiques pour l\'amélioration continue des processus.', 
  'Expérience solide en DevOps avec une connaissance approfondie de Kubernetes et Docker. Familiarité avec les outils de gestion de configuration comme Ansible ou Terraform. Bonnes compétences en scripting (Python, Bash). Connaissance des pratiques de sécurité dans les environnements DevOps. Aptitude à résoudre les problèmes techniques rapidement et efficacement. Expérience avec les services cloud tels que AWS, Azure ou GCP. Capacité à travailler en équipe et à communiquer clairement. Expérience en intégration continue et déploiement continu (CI/CD). Connaissance des systèmes d\'exploitation Linux et Windows. Excellente gestion du temps et capacité à gérer plusieurs projets simultanément.', 
  'Environnement de travail flexible avec télétravail possible. Avantages sociaux complets, y compris l\'assurance santé et les congés payés. Équipe dynamique et projets innovants. Opportunités de formation et de certification DevOps. Possibilité de participation à des conférences et ateliers. Prime de performance basée sur les résultats des projets. Équilibre vie professionnelle et vie privée favorisé. Accès à des technologies de pointe et à un équipement informatique de haute qualité. Culture d\'entreprise collaborative et soutenante. Programmes de bien-être et événements d\'entreprise réguliers.', 
  'Lyon', 55000, '2024-09-01', TRUE, 7, 2, 4, 2, 1, 1, 5),
  ('Data Analyst Junior', 
  'Analyse et interprétation des données pour fournir des insights aux équipes. Création de rapports et de tableaux de bord pour suivre les indicateurs de performance. Assistance à la mise en place de solutions d\'analyse avancée. Collecte et préparation des données à partir de diverses sources. Participation à des projets d\'amélioration des processus de données. Collaboration avec les équipes techniques pour optimiser les flux de données. Identification des tendances et des anomalies dans les jeux de données. Participation à la documentation et à la présentation des résultats d\'analyse. Développement et maintenance des outils de visualisation de données. Participation à des projets transversaux pour apporter une valeur ajoutée analytique.', 
  'Diplôme en statistiques, informatique ou domaine connexe. Connaissance de base des outils de visualisation de données comme Tableau ou PowerBI. Capacité à travailler avec des équipes multidisciplinaires. Compétences en analyse de données et en SQL. Connaissance des principes de la modélisation de données. Esprit critique et souci du détail. Bonne communication pour présenter les résultats d\'analyse. Capacité à apprendre rapidement de nouveaux outils et technologies. Expérience en manipulation de grandes bases de données. Capacité à travailler sous pression et à respecter les délais. Esprit d\'initiative et capacité à proposer des améliorations des processus analytiques.', 
  'Programme de mentorat et de développement de carrière. Horaires flexibles et possibilité de télétravail. Participation à des projets innovants et variés. Avantages sociaux complets, y compris assurance santé. Accès à des formations et des ateliers en data science. Possibilités de progression rapide au sein de l\'entreprise. Environnement de travail collaboratif et stimulant. Activités sociales et culturelles organisées par l\'entreprise. Accès à des ressources et outils analytiques de pointe. Opportunités de participer à des conférences et séminaires en analyse de données.', 
  'Marseille', 40000, '2024-10-01', FALSE, 8, 3, 2, 1, 1, 3, 4),
  ('Consultant Sécurité', 
  'Audit et analyse des systèmes de sécurité des clients. Recommandation et mise en œuvre de solutions de sécurité. Formation des équipes clients sur les meilleures pratiques en sécurité. Surveillance continue des infrastructures pour détecter les failles. Participation à la gestion des incidents de sécurité et à la réponse aux attaques. Développement de politiques et procédures de sécurité. Collaboration avec les équipes internes et les clients pour améliorer la posture de sécurité. Rédaction de rapports de sécurité détaillés et recommandations. Participation à des projets de recherche en sécurité. Conduite de tests de pénétration et d\'évaluations de vulnérabilité. Participation à la formation continue en sécurité et à la veille technologique.', 
  'Expérience de 5 ans en sécurité informatique, avec des certifications comme CISSP ou CEH. Bonne connaissance des normes et des réglementations en matière de sécurité. Capacité à travailler en autonomie et à gérer plusieurs projets simultanément. Compétences en évaluation des risques et en gestion des incidents. Connaissance des outils de sécurité comme SIEM, IDS/IPS. Excellentes compétences en communication et en présentation. Esprit analytique et proactif. Capacité à rester à jour avec les dernières menaces de sécurité et les solutions de défense. Expérience en cryptographie et en protection des données. Capacité à former et à encadrer les équipes juniors. Forte orientation vers les résultats et la satisfaction des clients.', 
  'Salaire attractif avec primes de performance. Formation continue et certification payées par l\'entreprise. Opportunités de carrière internationale. Avantages sociaux complets, y compris assurance santé et congés payés. Participation à des conférences et événements de sécurité. Environnement de travail collaboratif et dynamique. Possibilité de télétravail et horaires flexibles. Programmes de bien-être et initiatives de santé. Reconnaissance des performances individuelles et d\'équipe. Accès à des technologies et outils de sécurité de pointe. Opportunités de progression rapide et de développement de carrière.', 
  'Toulouse', 60000, '2024-11-01', TRUE, 6, 4, 4, 2, 1, 2, 7),
  ('Développeur Frontend React', 
  'Développement d\'interfaces utilisateur en utilisant React. Collaboration avec les designers pour créer des expériences utilisateur intuitives. Optimisation des performances des applications web. Participation aux revues de code et aux tests unitaires. Intégration des API et services backend. Suivi des tendances et des nouvelles technologies frontend. Contribuer à l\'amélioration des pratiques de développement frontend. Résolution des problèmes techniques et support aux utilisateurs. Participation à des sprints agiles et à des réunions de planification. Développement de composants réutilisables pour les applications. Participation à la rédaction de documentation technique.', 
  'Expérience confirmée en développement frontend avec React. Bonnes compétences en HTML, CSS et JavaScript. Connaissance des outils de gestion de version comme Git. Expérience avec les frameworks et bibliothèques JavaScript modernes. Capacité à résoudre des problèmes de performance et à optimiser le code. Esprit d\'équipe et bonnes compétences en communication. Connaissance des pratiques de test et des outils de test frontend. Capacité à créer des interfaces réactives et adaptées aux mobiles. Esprit créatif et souci du détail. Capacité à travailler dans un environnement agile. Motivation pour apprendre et s\'adapter aux nouvelles technologies et outils.', 
  'Salaire compétitif avec bonus de performance. Environnement de travail collaboratif et dynamique. Possibilité de travail à distance et horaires flexibles. Assurance santé et avantages sociaux complets. Opportunités de formation et de développement professionnel. Accès à des outils et technologies de pointe. Équilibre vie professionnelle et personnelle favorisé. Participation à des hackathons et à des ateliers de design. Culture d\'entreprise inclusive et bienveillante. Reconnaissance des contributions individuelles et collectives. Événements d\'entreprise et activités sociales régulières.', 
  'Nice', 45000, '2024-08-15', FALSE, 7, 5, 3, 1, 1, 3, 2),
  ('Chef de projet IT', 
  'Gestion de projets IT de la conception à la réalisation. Coordination des équipes techniques et fonctionnelles. Suivi des budgets et des délais. Définition des cahiers des charges et des spécifications techniques. Gestion des risques et des problèmes de projet. Communication régulière avec les parties prenantes. Suivi de l\'avancement des travaux et reporting. Organisation des réunions de projet et des revues de qualité. Mise en place des meilleures pratiques de gestion de projet. Formation et encadrement des équipes de projet. Participation à l\'amélioration continue des processus de gestion de projet.', 
  'Expérience en gestion de projets IT, avec une certification PMP ou Prince2. Compétences en communication et en leadership. Capacité à gérer plusieurs projets en parallèle. Connaissance des méthodologies de gestion de projet Agile et Scrum. Esprit analytique et capacité à résoudre les problèmes. Capacité à travailler sous pression et à respecter les délais. Excellentes compétences organisationnelles et de planification. Aptitude à motiver et à encadrer les équipes. Bonne compréhension des technologies IT et des infrastructures. Esprit d\'équipe et capacité à travailler avec des parties prenantes diverses. Volonté d\'apprendre et de s\'adapter aux nouvelles tendances et technologies.', 
  'Salaire compétitif avec primes de performance. Opportunités de formation et de développement professionnel. Environnement de travail stimulant et dynamique. Assurance santé et avantages sociaux complets. Télétravail et horaires flexibles possibles. Reconnaissance des performances individuelles et d\'équipe. Participation à des projets innovants et à fort impact. Culture d\'entreprise inclusive et collaborative. Accès à des ressources et outils de gestion de projet avancés. Programmes de bien-être et d\'équilibre vie professionnelle et personnelle. Opportunités de progression rapide au sein de l\'entreprise.', 
  'Paris', 70000, '2024-12-01', TRUE, 8, 1, 5, 2, 1, 2, 6),
  ('Développeur Fullstack', 
  'Développement de fonctionnalités backend et frontend. Collaboration avec les équipes de design et de produit. Maintenance et optimisation des applications existantes. Participation aux revues de code et aux tests. Intégration des API et services tiers. Suivi des tendances et des innovations technologiques. Contribuer à l\'amélioration des pratiques de développement. Résolution des problèmes techniques et support aux utilisateurs. Participation à des sprints agiles et à des réunions de planification. Développement de composants réutilisables pour les applications. Documentation des fonctionnalités et des processus de développement.', 
  'Compétences en JavaScript, Node.js et frameworks frontend comme React ou Angular. Expérience en développement backend avec des langages comme Python ou Java. Bonne connaissance des bases de données relationnelles et non relationnelles. Capacité à travailler en équipe et à communiquer efficacement. Expérience avec les outils de gestion de version comme Git. Capacité à résoudre des problèmes complexes et à proposer des solutions innovantes. Connaissance des pratiques de test et des outils de test. Esprit d\'équipe et bonne gestion du temps. Motivation pour apprendre et s\'adapter aux nouvelles technologies. Esprit créatif et souci du détail. Capacité à travailler dans un environnement agile.', 
  'Salaire compétitif avec bonus de performance. Possibilité de travail à distance et horaires flexibles. Opportunités de formation continue. Assurance santé et avantages sociaux complets. Environnement de travail collaboratif et dynamique. Accès à des technologies de pointe et à un équipement informatique de haute qualité. Équilibre vie professionnelle et vie privée favorisé. Participation à des hackathons et à des ateliers de design. Culture d\'entreprise inclusive et bienveillante. Reconnaissance des contributions individuelles et collectives. Événements d\'entreprise et activités sociales régulières.', 
  'Lyon', 48000, '2024-09-15', FALSE, 6, 2, 3, 2, 1, 3, 1),
  ('Architecte Cloud', 
  'Conception et mise en œuvre d\'architectures cloud sécurisées et évolutives. Optimisation des coûts et des performances des infrastructures cloud. Support et formation des équipes techniques sur les meilleures pratiques cloud. Gestion des migrations vers le cloud et des intégrations hybrides. Surveillance et maintenance des environnements cloud. Collaboration avec les équipes de développement pour assurer la compatibilité cloud. Participation à la définition des standards et des politiques cloud. Conception et mise en œuvre des solutions de haute disponibilité. Réalisation de revues d\'architecture et de sécurité cloud. Documentation des architectures et des procédures. Participation à des projets de transformation digitale et cloud.', 
  'Expérience en architecture cloud avec des certifications comme AWS Solutions Architect ou Azure Architect. Connaissance approfondie des outils de gestion d\'infrastructure comme Terraform ou CloudFormation. Capacité à travailler en équipe et à communiquer efficacement. Compétences en automatisation et en scripting. Connaissance des pratiques de sécurité cloud et de conformité. Aptitude à concevoir des solutions scalables et performantes. Sens de l\'analyse et esprit critique. Expérience en gestion de projets cloud et en migration d\'infrastructures. Connaissance des services cloud comme AWS, Azure ou GCP. Capacité à rester à jour avec les tendances et les technologies cloud. Esprit d\'initiative et capacité à proposer des solutions innovantes.', 
  'Salaire compétitif avec primes de performance. Avantages sociaux complets, y compris l\'assurance santé et les congés payés. Possibilités de formation et de certification continues. Environnement de travail stimulant avec des projets variés. Opportunités de carrière internationale. Télétravail et horaires flexibles possibles. Participation à des conférences et événements cloud. Reconnaissance des contributions individuelles et d\'équipe. Accès à des technologies et outils cloud de pointe. Équilibre vie professionnelle et personnelle respecté. Programmes de bien-être et initiatives de santé. Activités sociales et culturelles organisées par l\'entreprise.', 
  'Marseille', 65000, '2024-10-15', TRUE, 7, 3, 5, 2, 1, 1, 7),
  ('Spécialiste en Cybersécurité', 
  'Analyse et évaluation des risques de sécurité. Mise en œuvre de mesures de protection et de plans de réponse aux incidents. Formation et sensibilisation des employés à la sécurité informatique. Surveillance des systèmes pour détecter les intrusions et les vulnérabilités. Collaboration avec les équipes IT pour renforcer les défenses. Conduite d\'audits de sécurité réguliers. Développement et mise à jour des politiques de sécurité. Participation à la gestion des incidents de sécurité et à la réponse aux attaques. Développement de stratégies de protection des données. Participation à des projets de recherche en cybersécurité. Rédaction de rapports de sécurité détaillés et recommandations.', 
  'Expérience en cybersécurité avec des compétences en gestion de base de données. Connaissance des normes de sécurité et des outils de surveillance. Capacité à travailler sous pression et à gérer des incidents de sécurité. Compétences en cryptographie et en protection des données. Excellentes compétences en communication et en formation. Aptitude à développer des stratégies de sécurité efficaces. Esprit d\'analyse et réactivité. Expérience avec des outils de sécurité comme SIEM, IDS/IPS. Connaissance des dernières menaces de sécurité et solutions de défense. Capacité à rester à jour avec les tendances et les technologies de cybersécurité. Motivation pour apprendre et s\'adapter aux nouvelles pratiques et outils.', 
  'Salaire compétitif avec primes de performance. Environnement de travail stimulant avec des projets variés. Possibilité de formation continue et d\'évolution professionnelle. Assurance santé et avantages sociaux complets. Possibilité de télétravail et horaires flexibles. Participation à des conférences de cybersécurité. Opportunités de carrière internationale. Reconnaissance des performances individuelles et d\'équipe. Accès à des technologies et outils de sécurité de pointe. Équilibre vie professionnelle et personnelle respecté. Programmes de bien-être et initiatives de santé. Activités sociales et culturelles organisées par l\'entreprise.', 
  'Toulouse', 55000, '2024-11-15', FALSE, 8, 4, 4, 1, 1, 2, 7),
  ('UI/UX Designer', 
  'Conception d\'interfaces utilisateur intuitives et attrayantes. Collaboration avec les développeurs pour garantir la faisabilité des designs. Test et validation des prototypes avec les utilisateurs. Création de wireframes, maquettes et prototypes interactifs. Suivi des tendances et des meilleures pratiques en design. Amélioration continue des expériences utilisateur basées sur les retours. Participation aux réunions de planification et de révision de projet. Documentation des processus et des décisions de design. Conception de parcours utilisateur fluides et cohérents. Formation et encadrement des designers juniors. Contribution à l\'élaboration des chartes graphiques et des guidelines.', 
  'Expérience en design UI/UX avec un portfolio solide. Connaissance des outils de design comme Sketch, Figma ou Adobe XD. Capacité à comprendre et à analyser les besoins des utilisateurs. Compétences en création de wireframes, maquettes et prototypes. Connaissance des principes de l\'accessibilité et du responsive design. Esprit créatif et souci du détail. Bonne communication et capacité à travailler en équipe. Expérience avec les tests utilisateurs et l\'analyse des retours. Aptitude à rester à jour avec les tendances et les technologies de design. Capacité à travailler dans un environnement agile. Motivation pour apprendre et s\'adapter aux nouvelles pratiques et outils.', 
  'Salaire compétitif avec primes de performance. Environnement de travail créatif et dynamique. Possibilités de formation continue et de développement professionnel. Assurance santé et avantages sociaux complets. Télétravail et horaires flexibles possibles. Participation à des conférences et ateliers de design. Opportunités de progression rapide au sein de l\'entreprise. Équilibre vie professionnelle et personnelle respecté. Accès à des technologies et outils de design de pointe. Reconnaissance des contributions individuelles et collectives. Événements d\'entreprise et activités sociales régulières.', 
  'Nice', 45000, '2024-08-15', FALSE, 7, 5, 3, 1, 1, 3, 2);


INSERT INTO candidacy (candidate_id, offer_id, status_id) VALUES
(1, 7, 1),
(1, 5, 2),
(1, 1, 1),
(2, 10, 4),
(3, 4, 3),
(3, 9, 1),
(4, 6, 1),
(4, 8, 2),
(4, 3, 3),
(4, 7, 1),
(5, 7, 1),
(5, 5, 4),
(5, 10, 2);

INSERT INTO technology_candidate (technology_id, candidate_id) VALUES
(1, 1),
(3, 1),
(4, 1),
(5, 1),
(12, 1),
(7, 1),
(16, 1),
(20, 1),
(22, 1),
(23, 1),
(31, 1),
(34, 1),
(36, 1),
(40, 1),
(15, 1),
(1, 2),
(9, 2),
(23, 2),
(22, 2),
(24, 2),
(25, 2),
(28, 2),
(27, 2),
(31, 2),
(29, 2),
(2, 3),
(1, 3),
(6, 3),
(8, 3),
(7, 3),
(13, 3),
(12, 3),
(19, 3),
(31, 3),
(5, 3),
(17, 4),
(18, 4),
(19, 4),
(20, 4),
(21, 4),
(2, 4),
(3, 4),
(31, 4),
(22, 4),
(23, 4),
(7, 4),
(1, 4),
(10, 4),
(1, 5),
(9, 5),
(10, 5),
(19, 5),
(12, 5),
(15, 5),
(22, 5),
(23, 5),
(24, 5),
(25, 5),
(28, 5),
(27, 5),
(31, 5);

INSERT INTO technology_offer (offer_id, technology_id) VALUES
(1,3),
(1,6),
(1,10),
(1,18),
(1,31),
(2,37),
(2,2),
(2,31),
(2,40),
(2,34),
(3,19),
(3,20),
(3,5),
(3,16),
(3,31),
(4,3),
(4,2),
(4,6),
(4,1),
(4,10),
(4,17),
(4,20),
(4,18),
(4,36),
(4,32),
(4,15),
(5,1),
(5,9),
(5,15),
(5,12),
(5,23),
(5,25),
(5,28),
(5,31),
(5,22),
(6,1),
(6,3),
(6,10),
(6,8),
(6,13),
(6,15),
(6,12),
(6,20),
(6,31),
(6,36),
(6,28),
(7,1),
(7,9),
(7,12),
(7,15),
(7,7),
(7,19),
(7,21),
(7,22),
(7,23),
(7,28),
(7,31),
(8,31),
(8,2),
(8,3),
(8,20),
(8,17),
(8,18),
(8,34),
(8,36),
(8,40),
(9,17),
(9,18),
(9,20),
(9,2),
(9,3),
(9,1),
(9,12),
(9,15),
(9,31),
(9,9),
(9,10),
(9,36),
(10,10),
(10,1),
(10,9),
(10,22),
(10,23),
(10,24),
(10,25),
(10,28),
(10,27),
(10,31);

INSERT INTO consultant_company (consultant_id, company_id) VALUES
(6,1),
(6,2),
(7,3),
(7,5),
(8,4),
(8,1),
(7,1),
(6,5);

INSERT INTO favorite (candidate_id, offer_id) VALUES
  (1, 1),
  (1, 4),
  (2, 3),
  (2, 5),
  (3, 2),
  (3, 6),
  (4, 1),
  (4, 7),
  (5, 8),
  (5, 9);
