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
  mail varchar(255) not null UNIQUE,
  hashed_password varchar(255) not null,
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
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
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
  FOREIGN KEY (consultant_id) REFERENCES user(id) ON DELETE SET NULL,
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
  FOREIGN KEY (candidate_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (offer_id) REFERENCES offer(id) ON DELETE CASCADE
);

CREATE TABLE candidacy (
  PRIMARY key (candidate_id, offer_id),
  candidate_id int not null,
  offer_id int not null,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP,
  status_id int not null,
  motivation longtext ,
  FOREIGN KEY (candidate_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (offer_id) REFERENCES offer(id) ON DELETE CASCADE,
  FOREIGN KEY (status_id) REFERENCES status(id)
);
CREATE TABLE technology_candidate (
  PRIMARY KEY (technology_id, candidate_id),
  technology_id int not null,
  candidate_id int not null,
  FOREIGN KEY (technology_id) REFERENCES technology(id),
  FOREIGN KEY (candidate_id) REFERENCES profil(user_id) ON DELETE CASCADE
);
CREATE TABLE technology_offer (
  PRIMARY KEY (technology_id, offer_id),
  technology_id int not null,
  offer_id int not null,
  FOREIGN KEY (technology_id) REFERENCES technology(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id) ON DELETE CASCADE
);
CREATE TABLE consultant_company (
  PRIMARY KEY (consultant_id, company_id),
  consultant_id int not null,
  company_id int not null,
  FOREIGN KEY (consultant_id) REFERENCES user(id) ON DELETE CASCADE,
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

INSERT INTO user (mail, hashed_password, role_id) VALUES
  ('candidate1@example.com', '$argon2id$v=19$m=19456,t=2,p=1$IJmFzYqJmmkkJP2FaKwKRw$PKh00nB9Si9vaZ2I/xgzsRqtb4skuPLChhJNCWeizNc', 1),
  ('candidate2@example.com', '$argon2id$v=19$m=19456,t=2,p=1$IJmFzYqJmmkkJP2FaKwKRw$PKh00nB9Si9vaZ2I/xgzsRqtb4skuPLChhJNCWeizNc', 1),
  ('candidate3@example.com', '$argon2id$v=19$m=19456,t=2,p=1$IJmFzYqJmmkkJP2FaKwKRw$PKh00nB9Si9vaZ2I/xgzsRqtb4skuPLChhJNCWeizNc', 1),
  ('candidate4@example.com', '$argon2id$v=19$m=19456,t=2,p=1$IJmFzYqJmmkkJP2FaKwKRw$PKh00nB9Si9vaZ2I/xgzsRqtb4skuPLChhJNCWeizNc', 1),
  ('candidate5@example.com', '$argon2id$v=19$m=19456,t=2,p=1$IJmFzYqJmmkkJP2FaKwKRw$PKh00nB9Si9vaZ2I/xgzsRqtb4skuPLChhJNCWeizNc', 1);

INSERT INTO user (mail, hashed_password, role_id) VALUES
  ('consultant1@example.com', '$argon2id$v=19$m=19456,t=2,p=1$IJmFzYqJmmkkJP2FaKwKRw$PKh00nB9Si9vaZ2I/xgzsRqtb4skuPLChhJNCWeizNc', 2),
  ('consultant2@example.com', '$argon2id$v=19$m=19456,t=2,p=1$IJmFzYqJmmkkJP2FaKwKRw$PKh00nB9Si9vaZ2I/xgzsRqtb4skuPLChhJNCWeizNc', 2),
  ('consultant3@example.com', '$argon2id$v=19$m=19456,t=2,p=1$IJmFzYqJmmkkJP2FaKwKRw$PKh00nB9Si9vaZ2I/xgzsRqtb4skuPLChhJNCWeizNc', 2);

INSERT INTO user (mail, hashed_password, role_id) VALUES
  ('admin@example.com', '$argon2id$v=19$m=19456,t=2,p=1$IJmFzYqJmmkkJP2FaKwKRw$PKh00nB9Si9vaZ2I/xgzsRqtb4skuPLChhJNCWeizNc', 3);

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
  ('FinTech Innovations', 'Nice', 'Société spécialisée dans les technologies financières. Nous développons des solutions innovantes pour le secteur financier, en mettant l\'accent sur la transparence et l\'efficacité. Nos produits aident les institutions financières à optimiser leurs opérations et à mieux servir leurs clients. Nous offrons des plateformes de paiement sécurisées, des outils de gestion des risques et des solutions de conformité réglementaire. Nos équipes travaillent en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et créer des solutions sur mesure. En intégrant les dernières avancées technologiques, nous permettons à nos clients de rester compétitifs dans un marché en constante évolution. Nous nous engageons à promouvoir une culture de confiance et de transparence dans toutes nos interactions professionnelles, en plaçant l\'intérêt de nos clients au cœur de notre démarche.', 3000000, 90, 'Transparence, Efficacité, Confiance', 'Eve Laurent', '0678905678', 'eve.laurent@fintech.com', 18),
  ('MedTech Solutions', 'Bordeaux', 'MedTech Solutions se consacre à l\'innovation dans le domaine des technologies médicales. Nous développons des dispositifs médicaux avancés pour améliorer la qualité des soins et sauver des vies. Nos solutions couvrent une gamme de spécialités médicales, y compris la cardiologie, l\'orthopédie, et la neurochirurgie. En collaborant avec des professionnels de la santé, nous veillons à ce que nos produits répondent aux plus hauts standards de sécurité et d\'efficacité. Notre équipe de recherche et développement travaille sans relâche pour introduire de nouvelles technologies sur le marché. MedTech Solutions s\'engage à fournir des produits de qualité supérieure et à contribuer de manière significative à la santé publique.', 5000000, 200, 'Innovation, Qualité, Impact Social', 'Jean Moreau', '0678904321', 'jean.moreau@medtechsolutions.com', 24),
  ('GreenEnergy Co.', 'Nantes', 'GreenEnergy Co. est un pionnier dans le secteur des énergies renouvelables. Nous fournissons des solutions durables pour réduire l\'empreinte carbone et promouvoir un avenir plus vert. Nos produits incluent des panneaux solaires, des éoliennes, et des systèmes de stockage d\'énergie. Nous travaillons avec des entreprises et des collectivités locales pour mettre en œuvre des projets d\'énergie propre à grande échelle. En mettant l\'accent sur l\'innovation et la durabilité, GreenEnergy Co. s\'efforce de transformer le paysage énergétique mondial. Notre engagement envers l\'environnement et la communauté guide toutes nos actions, et nous aspirons à un avenir où l\'énergie propre est accessible à tous.', 8000000, 300, 'Durabilité, Innovation, Engagement Communautaire', 'Paul Lefevre', '0612345678', 'paul.lefevre@greenenergy.com', 17),
  ('EduTech Innovations', 'Grenoble', 'EduTech Innovations transforme l\'éducation avec des technologies de pointe. Nous développons des plateformes d\'apprentissage numérique et des outils pédagogiques pour améliorer l\'expérience éducative. Nos solutions sont utilisées par des écoles, des universités et des entreprises pour offrir des programmes de formation interactifs et engageants. En intégrant l\'intelligence artificielle et l\'analyse des données, nous créons des environnements d\'apprentissage personnalisés qui répondent aux besoins individuels des étudiants. EduTech Innovations est déterminé à rendre l\'éducation accessible et efficace pour tous, et à préparer les étudiants pour le monde de demain.', 4000000, 150, 'Innovation, Accessibilité, Excellence', 'Sophie Martin', '0645671234', 'sophie.martin@edutech.com', 11),
  ('AgriTech Solutions', 'Rennes', 'AgriTech Solutions est un leader dans le domaine de l\'agriculture intelligente. Nous fournissons des technologies avancées pour améliorer l\'efficacité et la durabilité des pratiques agricoles. Nos produits incluent des capteurs de sol, des drones d\'inspection, et des systèmes de gestion de ferme. En combinant l\'agronomie avec l\'intelligence artificielle, nous aidons les agriculteurs à optimiser leurs rendements et à réduire leur impact environnemental. Notre mission est de révolutionner l\'agriculture en rendant les technologies de pointe accessibles à tous les agriculteurs. AgriTech Solutions s\'engage à soutenir une agriculture durable et résiliente pour les générations futures.', 6000000, 250, 'Innovation, Durabilité, Support Agricole', 'Claire Dubois', '0654321789', 'claire.dubois@agritech.com', 20),
  ('UrbanDesign Co.', 'Strasbourg', 'UrbanDesign Co. est spécialisé dans la conception architecturale et le développement urbain. Nous créons des espaces qui améliorent la qualité de vie tout en respectant les principes de durabilité. Nos projets incluent des complexes résidentiels, des espaces commerciaux, et des infrastructures publiques. Nous travaillons en étroite collaboration avec les autorités locales et les communautés pour concevoir des environnements urbains fonctionnels et esthétiques. UrbanDesign Co. s\'efforce de combiner innovation, fonctionnalité et esthétique dans chaque projet. Notre objectif est de façonner les villes de demain tout en préservant leur patrimoine culturel et environnemental.', 7000000, 180, 'Innovation, Esthétique, Durabilité', 'Marc Lefort', '0698765432', 'marc.lefort@urbandesign.com', 15),
  ('FoodTech Innovations', 'Lille', 'FoodTech Innovations se consacre à la transformation de l\'industrie alimentaire avec des solutions technologiques. Nous développons des systèmes de production alimentaire automatisés et des applications de gestion pour les entreprises de restauration. Nos solutions permettent d\'optimiser les chaînes d\'approvisionnement, de réduire les déchets alimentaires et d\'améliorer la traçabilité des produits. En collaborant avec des chefs et des restaurateurs, nous proposons des outils qui répondent aux besoins du secteur. FoodTech Innovations vise à moderniser l\'industrie alimentaire en mettant l\'accent sur la durabilité, l\'efficacité et la qualité. Nous croyons en l\'avenir de l\'alimentation durable et travaillons à créer des innovations qui profitent à tous.', 4500000, 160, 'Innovation, Durabilité, Qualité', 'Nicolas Petit', '0601234567', 'nicolas.petit@foodtech.com', 24),
  ('SmartHome Systems', 'Toulon', 'SmartHome Systems révolutionne le confort domestique avec des solutions de domotique avancées. Nous concevons et installons des systèmes intelligents pour automatiser les maisons, incluant l\'éclairage, la sécurité, le chauffage, et la gestion de l\'énergie. Nos produits sont conçus pour être faciles à utiliser et à intégrer dans les habitations existantes. Avec un focus sur l\'innovation et la simplicité, nous transformons la façon dont les gens interagissent avec leur environnement domestique. SmartHome Systems s\'engage à améliorer le confort et la sécurité des foyers tout en réduisant leur impact énergétique. Notre mission est de rendre la vie quotidienne plus facile et plus agréable grâce à la technologie.', 3500000, 140, 'Confort, Innovation, Simplicité', 'Laura Martin', '0612349876', 'laura.martin@smarthome.com', 13),
  ('BioTech Innovations', 'Nancy', 'BioTech Innovations est à la pointe de la biotechnologie, développant des solutions pour les industries pharmaceutiques et agroalimentaires. Nous nous spécialisons dans la recherche et le développement de produits biologiques, y compris des vaccins, des thérapies géniques, et des biopesticides. Nos laboratoires sont équipés des dernières technologies pour assurer des recherches précises et des résultats fiables. En collaboration avec des partenaires académiques et industriels, nous visons à faire avancer la science pour le bien-être de la société. BioTech Innovations s\'engage à améliorer la santé et l\'environnement à travers des innovations biotechnologiques de pointe. Notre vision est de contribuer à un avenir où les solutions biologiques sont la norme pour les défis de la santé et de l\'environnement.', 9000000, 250, 'Innovation, Santé, Durabilité', 'Pierre Renault', '0623456789', 'pierre.renault@biotech.com', 12),
  ('AeroSpace Dynamics', 'Brest', 'AeroSpace Dynamics est un acteur majeur dans l\'industrie aérospatiale, spécialisé dans la conception et la fabrication de composants aéronautiques. Nous fournissons des solutions innovantes pour les avions commerciaux et militaires, avec un accent sur la légèreté, la résistance, et l\'efficacité énergétique. Nos équipes de R&D travaillent en étroite collaboration avec les principaux fabricants d\'avions pour développer des technologies de pointe. AeroSpace Dynamics est reconnu pour son expertise technique et sa capacité à livrer des produits de haute qualité conformes aux normes strictes de l\'industrie aérospatiale. Notre mission est de contribuer à l\'évolution de l\'industrie aéronautique avec des innovations qui améliorent la sécurité, la performance et la durabilité des aéronefs.', 15000000, 400, 'Excellence, Innovation, Sécurité', 'Isabelle Lefebvre', '0634567890', 'isabelle.lefebvre@aerospace.com', 3),
  ('HealthCare Plus', 'Nice', 'HealthCare Plus se spécialise dans la fourniture de services de santé à domicile. Nous proposons des soins infirmiers, des services de réhabilitation, et des soins palliatifs pour les patients nécessitant une assistance médicale continue. Nos équipes de professionnels de la santé sont dédiées à fournir des soins de qualité avec compassion et respect. HealthCare Plus s\'engage à améliorer la qualité de vie des patients en offrant des soins personnalisés adaptés à leurs besoins spécifiques. Notre objectif est de rendre les soins de santé accessibles et pratiques, tout en maintenant les plus hauts standards de qualité et de sécurité. Nous croyons que chaque patient mérite des soins attentionnés et professionnels, dans le confort de son domicile.', 2000000, 100, 'Compassion, Qualité, Accessibilité', 'Julien Dubois', '0645678901', 'julien.dubois@healthcareplus.com', 24);


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
  'Nice', 45000, '2024-08-15', FALSE, 7, 5, 3, 1, 1, 3, 2),
  ('Data Scientist',
  'Analyser des grandes quantités de données pour découvrir des tendances et des modèles. Développer des algorithmes de machine learning pour résoudre des problèmes complexes. Collaborer avec les équipes produit pour définir des indicateurs clés de performance. Préparer des rapports et des visualisations pour communiquer les résultats aux parties prenantes. Assurer la qualité des données et la validation des modèles. Participer à l\'amélioration continue des processus de traitement de données. Concevoir des solutions innovantes pour optimiser les flux de travail. Encadrer les analystes de données juniors et partager les meilleures pratiques.',
  'Diplôme en science des données, statistiques ou domaine connexe. Expérience confirmée en analyse de données et en développement de modèles prédictifs. Maîtrise des langages de programmation tels que Python ou R. Connaissance des bases de données et des outils de visualisation de données. Capacité à interpréter des résultats complexes et à les expliquer clairement. Expérience en gestion de projets de données et en collaboration interfonctionnelle. Forte aptitude à résoudre des problèmes et à travailler de manière autonome. Compétences en communication et capacité à présenter des résultats techniques à des non-spécialistes.',
  'Salaire compétitif avec bonus basé sur les résultats. Environnement de travail collaboratif et dynamique. Accès à des formations spécialisées en science des données. Assurance santé et plan de retraite attractif. Possibilité de travailler à distance. Congés payés généreux et horaires de travail flexibles. Participation à des conférences et événements de l\'industrie. Espaces de travail modernes et ergonomiques. Programme de reconnaissance des employés. Opportunités d\'évolution de carrière dans un secteur en pleine croissance.',
  'Lyon', 60000, '2024-09-15', TRUE, 6, 2, 4, 2, 2, 1, 4),
  ('Ingénieur DevOps',
  'Automatiser et optimiser les processus de déploiement. Gérer les infrastructures cloud et les environnements de développement. Collaborer avec les équipes de développement pour assurer des déploiements continus. Mettre en place des outils de surveillance et d\'alerte pour les applications. Garantir la sécurité et la conformité des systèmes. Participer à la conception et à l\'amélioration des architectures systèmes. Diagnostiquer et résoudre les incidents de production. Documenter les procédures et les meilleures pratiques. Former les équipes aux nouveaux outils et processus. Contribuer à l\'amélioration continue des pipelines CI/CD.',
  'Expérience solide en administration système et en développement d\'infrastructure. Connaissance approfondie des environnements Linux/Unix. Maîtrise des outils d\'automatisation tels que Ansible, Puppet ou Terraform. Expérience avec les services cloud comme AWS, Azure ou GCP. Capacité à coder en Python, Shell ou un langage similaire. Connaissance des outils de conteneurisation comme Docker et Kubernetes. Excellentes compétences en résolution de problèmes et en gestion de projets techniques. Capacité à travailler en équipe et à collaborer efficacement avec d\'autres services. Passion pour l\'automatisation et la simplification des processus.',
  'Rémunération attractive avec bonus de performance. Ambiance de travail stimulante et esprit d\'équipe. Assurance maladie complète et autres avantages sociaux. Accès à des ressources de formation continue. Possibilité de télétravail partiel. Espaces de détente et de socialisation au sein des locaux. Participation à des hackathons et autres événements techniques. Programme de mobilité interne pour favoriser l\'évolution de carrière. Remboursement des frais de transport et participation aux frais de restauration. Environnement de travail moderne avec les dernières technologies.',
  'Marseille', 55000, '2024-10-01', TRUE, 8, 3, 4, 2, 2, 2, 5),
  ('Chef de Projet IT',
  'Coordonner et piloter des projets informatiques de bout en bout. Gérer les ressources, les délais et le budget du projet. Analyser les besoins des clients et proposer des solutions adaptées. Superviser les phases de conception, de développement et de déploiement. Assurer la communication entre les équipes techniques et les parties prenantes. Suivre l\'avancement des projets et assurer le respect des échéances. Gérer les risques et les imprévus. Rédiger des rapports de progression et des comptes rendus de réunion. Assurer la satisfaction des clients et des utilisateurs finaux. Contribuer à l\'amélioration continue des processus de gestion de projet.',
  'Diplôme en informatique, gestion de projet ou domaine connexe. Expérience en gestion de projets IT de grande envergure. Compétences en gestion des ressources et planification. Bonne connaissance des méthodologies de gestion de projet (Agile, Scrum, Waterfall). Excellentes compétences organisationnelles et de communication. Capacité à gérer plusieurs projets simultanément. Esprit analytique et capacité à résoudre des problèmes complexes. Capacité à travailler sous pression et à respecter les délais. Bonnes compétences en leadership et en gestion d\'équipe. Connaissance des outils de gestion de projet comme MS Project ou JIRA.',
  'Salaire compétitif avec prime de performance. Participation à des projets stimulants et variés. Assurance santé et autres avantages sociaux attractifs. Accès à des formations en gestion de projet et certifications. Ambiance de travail conviviale et collaborative. Horaires de travail flexibles et possibilité de télétravail. Congés payés généreux et possibilité de RTT. Participation aux événements d\'entreprise et activités de team building. Programme de reconnaissance des employés et d\'évolution de carrière. Accès à des ressources et technologies de pointe.',
  'Toulouse', 70000, '2024-11-01', TRUE, 7, 4, 5, 2, 2, 2, 6),
  ('Responsable Sécurité Informatique',
  'Développer et mettre en œuvre des stratégies de sécurité informatique. Superviser les audits de sécurité et les tests de pénétration. Identifier et analyser les risques de sécurité potentiels. Mettre en place des protocoles de réponse aux incidents de sécurité. Former les employés sur les bonnes pratiques de sécurité. Collaborer avec les équipes de développement pour intégrer la sécurité dans les processus. Gérer les systèmes de détection et de prévention des intrusions. Assurer la conformité avec les réglementations en vigueur. Rédiger des rapports de sécurité pour la direction. Contribuer à la création d\'une culture de sécurité au sein de l\'entreprise.',
  'Diplôme en sécurité informatique, ingénierie ou domaine connexe. Expérience avérée en gestion de la sécurité des systèmes d\'information. Connaissance approfondie des standards de sécurité tels que ISO 27001. Compétence dans l\'utilisation des outils de sécurité comme SIEM. Capacité à gérer des projets de sécurité complexes. Excellentes compétences analytiques et en résolution de problèmes. Connaissance des cybermenaces actuelles et des techniques de protection. Forte capacité de communication et de sensibilisation. Certification en sécurité (CISSP, CISM) est un plus. Capacité à travailler en équipe et à gérer des situations de crise.',
  'Salaire attractif avec participation aux bénéfices. Programme de formation continue en sécurité informatique. Assurance santé complète et plan de retraite. Horaires flexibles avec possibilité de télétravail. Ambiance de travail dynamique et innovante. Accès à des technologies de pointe. Événements d\'entreprise réguliers et activités de team building. Reconnaissance des performances individuelles. Opportunités d\'évolution de carrière. Environnement de travail stimulant avec des défis techniques.',
  'Nantes', 75000, '2024-09-01', TRUE, 6, 7, 4, 1, 2, 2, 7),
  ('Développeur Full-Stack',
  'Concevoir et développer des applications web frontend et backend. Travailler avec les équipes produit pour définir les fonctionnalités. Intégrer les services API et gérer les bases de données. Effectuer des tests unitaires et des tests d\'intégration. Assurer la maintenance et les mises à jour des applications existantes. Collaborer avec les designers pour créer des interfaces utilisateur attrayantes. Participer à des revues de code et à des sessions de pair programming. Optimiser les performances des applications pour une meilleure expérience utilisateur. Documenter le code et les fonctionnalités. Encadrer et mentor les développeurs juniors.',
  'Expérience en développement frontend (HTML, CSS, JavaScript) et backend (Node.js, Python). Connaissance des frameworks JavaScript modernes comme React ou Angular. Expérience avec les bases de données SQL et NoSQL. Capacité à travailler avec des outils de gestion de version tels que Git. Bonnes compétences en résolution de problèmes et en optimisation de code. Esprit créatif et souci du détail. Capacité à travailler de manière autonome et en équipe. Connaissance des pratiques de sécurité web. Passion pour l\'innovation et les nouvelles technologies. Bonnes compétences de communication et de collaboration.',
  'Salaire compétitif avec participation aux bénéfices. Environnement de travail stimulant et flexible. Accès à des formations et des conférences techniques. Assurance santé et avantages sociaux complets. Télétravail possible plusieurs jours par semaine. Espaces de travail modernes et équipés. Activités de team building et événements d\'entreprise réguliers. Reconnaissance des performances et opportunités de carrière. Projets innovants avec les dernières technologies. Équilibre vie professionnelle et personnelle respecté.',
  'Lille', 55000, '2024-10-15', FALSE, 8, 11, 3, 1, 2, 1, 2),
  ('Analyste en Cybersécurité',
  'Surveiller les systèmes pour détecter des activités suspectes. Analyser les incidents de sécurité et proposer des solutions. Mettre en œuvre des mesures de protection contre les cyberattaques. Effectuer des tests de vulnérabilité et des audits de sécurité. Assurer la conformité aux normes de sécurité et aux réglementations. Collaborer avec les équipes IT pour sécuriser les infrastructures. Préparer des rapports d\'analyse des risques et de sécurité. Former les employés sur les menaces et les meilleures pratiques de cybersécurité. Développer et mettre à jour les politiques de sécurité. Participer aux enquêtes sur les incidents de sécurité.',
  'Diplôme en cybersécurité, informatique ou domaine connexe. Expérience en surveillance de sécurité et analyse des menaces. Connaissance des outils de sécurité comme SIEM, IDS/IPS. Capacité à identifier et analyser les vulnérabilités de sécurité. Bonnes compétences en communication et en rédaction de rapports. Capacité à travailler sous pression et à réagir rapidement aux incidents. Esprit analytique et souci du détail. Connaissance des réglementations en matière de sécurité (RGPD, ISO 27001). Expérience avec les protocoles de sécurité réseau. Certificats en cybersécurité (CEH, CompTIA Security+) sont un plus.',
  'Salaire compétitif et primes de performance. Environnement de travail sécurisé et innovant. Assurance santé et couverture complète. Opportunités de formation continue en cybersécurité. Télétravail et horaires flexibles possibles. Participation à des projets de sécurité de grande envergure. Ambiance de travail collaborative et professionnelle. Équipement informatique de pointe fourni. Accès à des ressources et à des technologies avancées. Reconnaissance des performances individuelles et de l\'équipe.',
  'Rennes', 65000, '2024-11-01', TRUE, 7, 9, 4, 2, 2, 2, 7),
  ('Architecte Cloud',
  'Concevoir et déployer des solutions cloud sécurisées et évolutives. Analyser les besoins des clients et proposer des architectures adaptées. Gérer les environnements cloud et optimiser leur utilisation. Mettre en œuvre des solutions de sauvegarde et de récupération. Assurer la sécurité et la conformité des infrastructures cloud. Collaborer avec les équipes de développement pour intégrer les solutions cloud. Diagnostiquer et résoudre les problèmes de performance et de fiabilité. Rédiger des documentations techniques et des guides de déploiement. Former les équipes internes sur l\'utilisation des services cloud. Participer aux projets de migration vers le cloud.',
  'Expérience en architecture cloud (AWS, Azure, Google Cloud). Bonne connaissance des technologies de virtualisation et de conteneurisation. Compétences en automatisation et gestion d\'infrastructure (Terraform, Ansible). Connaissance des concepts de sécurité et de conformité cloud. Capacité à gérer des projets complexes et à travailler en équipe. Compétences en analyse et résolution de problèmes techniques. Certification cloud (AWS Certified Solutions Architect, Azure Solutions Architect) est un plus. Esprit innovant et aptitude à proposer des solutions techniques avancées. Bonnes compétences en communication et en gestion de projet.',
  'Rémunération attractive avec bonus de performance. Environnement de travail innovant et dynamique. Assurance santé et autres avantages sociaux complets. Accès à des formations spécialisées et à des certifications. Possibilité de télétravail et horaires flexibles. Participation à des projets stratégiques et à forte visibilité. Ambiance de travail collaborative et motivante. Reconnaissance des performances et opportunités de carrière. Accès à des outils et ressources technologiques de pointe. Participation à des conférences et événements professionnels.',
  'Bordeaux', 85000, '2024-12-01', TRUE, 6, 6, 5, 1, 2, 2, 5),
  ('Consultant en Transformation Digitale',
  'Accompagner les entreprises dans leur transformation digitale. Analyser les processus existants et identifier les opportunités d\'amélioration. Proposer des solutions technologiques adaptées aux besoins des clients. Gérer les projets de transformation de bout en bout. Assurer la formation et le soutien des utilisateurs. Collaborer avec les équipes IT pour assurer une mise en œuvre efficace. Suivre les tendances technologiques et proposer des innovations. Préparer des rapports d\'analyse et des recommandations stratégiques. Assurer la satisfaction des clients et le respect des objectifs. Participer à des réunions et des présentations auprès des clients.',
  'Diplôme en informatique, management ou domaine connexe. Expérience en gestion de projets de transformation digitale. Connaissance des outils et technologies de transformation (ERP, CRM, etc.). Compétences en analyse de données et en gestion du changement. Capacité à travailler en équipe et à communiquer efficacement. Esprit stratégique et orientation client. Capacité à gérer plusieurs projets simultanément. Compétences en résolution de problèmes et en prise de décision. Expérience en consulting ou conseil est un plus. Aptitude à s\'adapter à des environnements en constante évolution.',
  'Salaire compétitif avec primes basées sur les résultats. Environnement de travail stimulant et collaboratif. Assurance santé et avantages sociaux attractifs. Accès à des formations continues et certifications. Télétravail possible selon les besoins des projets. Participation à des événements et conférences de l\'industrie. Reconnaissance des performances individuelles. Opportunités d\'évolution de carrière et de mobilité interne. Ambiance de travail dynamique avec des équipes multiculturelles. Projets variés avec des clients prestigieux.',
  'Strasbourg', 80000, '2025-01-01', TRUE, 8, 10, 5, 1, 2, 2, 6),
  ('Product Owner',
  'Définir et gérer la roadmap produit en fonction des besoins clients. Prioriser les fonctionnalités et maintenir le backlog produit. Collaborer étroitement avec les équipes de développement pour garantir une bonne compréhension des besoins. Analyser les retours utilisateurs pour améliorer les produits. Assurer la liaison entre les équipes techniques et les parties prenantes. Conduire les réunions de planification et les revues de sprint. Assurer la qualité des livrables et respecter les délais. Élaborer des stratégies de lancement de produit. Participer à la définition des KPIs et suivre la performance du produit.',
  'Expérience en gestion de produits ou de projets Agile. Excellentes compétences en communication et en gestion des priorités. Connaissance des méthodologies Agile et Scrum. Capacité à comprendre les besoins des utilisateurs et à proposer des solutions. Bonne capacité d\'analyse et de prise de décision. Connaissance des outils de gestion de produit comme JIRA ou Trello. Capacité à travailler en équipe et à collaborer avec des équipes pluridisciplinaires. Esprit créatif et orientation client. Expérience en développement de logiciels est un atout. Diplôme en informatique, business ou domaine connexe.',
  'Salaire attractif avec primes basées sur les objectifs. Environnement de travail dynamique et innovant. Assurance santé et plan de retraite avantageux. Formation continue et opportunités de développement professionnel. Télétravail et horaires flexibles possibles. Ambiance de travail collaborative et stimulant. Accès à des ressources technologiques de pointe. Reconnaissance des performances et des contributions. Événements d\'entreprise et activités de team building réguliers. Opportunités de mobilité interne et d\'évolution de carrière.',
  'Nice', 70000, '2024-09-15', TRUE, 7, 15, 5, 1, 2, 2, 3),
  ('Ingénieur Réseau',
  'Concevoir, déployer et gérer des infrastructures réseau. Surveiller les performances réseau et résoudre les problèmes. Mettre en place des solutions de sécurité pour protéger les données. Configurer et maintenir les équipements réseau (routeurs, switches). Collaborer avec les équipes IT pour assurer la continuité des services. Documenter les configurations et procédures réseau. Participer à la planification de la capacité réseau et à l\'évolution de l\'infrastructure. Gérer les relations avec les fournisseurs et partenaires. Effectuer des tests de performance et optimiser les réseaux. Assurer la conformité avec les normes et politiques de sécurité.',
  'Diplôme en informatique, réseaux ou domaine connexe. Expérience en administration réseau et sécurité informatique. Connaissance des protocoles réseau (TCP/IP, BGP, OSPF). Compétence avec les équipements Cisco, Juniper ou similaires. Capacité à diagnostiquer et résoudre des problèmes complexes. Connaissance des outils de monitoring réseau (Nagios, SolarWinds). Certification CCNA, CCNP est un plus. Bonnes compétences en communication et en documentation. Capacité à travailler sous pression et à gérer des priorités multiples. Esprit d\'équipe et capacité à collaborer avec des équipes techniques.',
  'Salaire compétitif avec bonus de performance. Environnement de travail moderne et stimulant. Assurance santé complète et autres avantages sociaux. Formation continue en nouvelles technologies réseau. Télétravail possible selon les besoins. Participation à des projets internationaux et innovants. Espaces de travail équipés et ergonomiques. Activités sociales et événements d\'entreprise réguliers. Opportunités d\'évolution de carrière. Reconnaissance des performances et contributions.',
  'Lyon', 60000, '2024-10-01', TRUE, 6, 2, 3, 2, 2, 2, 5),
  ('Analyste Business Intelligence',
  'Collecter et analyser les données pour fournir des insights stratégiques. Concevoir des tableaux de bord et des rapports pour les dirigeants. Collaborer avec les équipes métier pour comprendre leurs besoins en données. Utiliser des outils de BI pour extraire et transformer les données. Participer à l\'amélioration continue des processus de reporting. Identifier les tendances et les opportunités d\'optimisation. Assurer la qualité et l\'intégrité des données. Former les utilisateurs aux outils BI et aux bonnes pratiques. Développer des modèles prédictifs pour anticiper les besoins futurs. Participer aux projets de transformation digitale de l\'entreprise.',
  'Expérience en analyse de données et en business intelligence. Maîtrise des outils BI (Tableau, Power BI, QlikView). Compétence en SQL et manipulation de bases de données. Capacité à interpréter des données complexes et à les présenter clairement. Connaissance des langages de programmation comme Python ou R est un plus. Forte capacité analytique et souci du détail. Bonnes compétences de communication et de présentation. Expérience avec les ERP et CRM est un avantage. Diplôme en informatique, statistiques ou domaine connexe. Capacité à travailler en équipe et à gérer plusieurs projets.',
  'Salaire compétitif avec primes basées sur les performances. Environnement de travail innovant et stimulant. Assurance santé et plan de retraite avantageux. Formation continue et opportunités de développement. Télétravail possible plusieurs jours par semaine. Espaces de travail modernes et collaboratifs. Participation à des projets stratégiques et à forte visibilité. Événements d\'entreprise et activités de team building réguliers. Reconnaissance des performances et opportunités de carrière. Accès à des technologies de pointe et à des outils BI avancés.',
  'Toulouse', 55000, '2024-11-01', TRUE, 8, 4, 4, 2, 2, 2, 4),
  ('Chef de Projet ERP',
  'Piloter les projets de mise en œuvre d\'ERP de bout en bout. Gérer les ressources, les délais et le budget du projet. Analyser les besoins des clients et proposer des solutions adaptées. Collaborer avec les équipes techniques et fonctionnelles pour assurer une intégration réussie. Assurer la formation des utilisateurs et le support post-déploiement. Gérer les risques et les imprévus tout au long du projet. Rédiger des rapports de progression et des comptes rendus de réunion. Assurer la satisfaction des clients et la qualité des livrables. Contribuer à l\'amélioration continue des processus de gestion de projet. Encadrer et coacher les membres de l\'équipe projet.',
  'Diplôme en informatique, gestion de projet ou domaine connexe. Expérience en gestion de projets ERP (SAP, Oracle, Microsoft Dynamics). Bonne connaissance des processus métier et des systèmes ERP. Compétences en gestion de projet (planning, budgétisation, gestion des risques). Excellentes compétences organisationnelles et de communication. Capacité à gérer plusieurs projets simultanément. Esprit analytique et capacité à résoudre des problèmes complexes. Connaissance des méthodologies de gestion de projet (Agile, Scrum, Waterfall). Expérience en consulting ou en gestion de projet est un plus. Aptitude à travailler en équipe et à motiver les équipes.',
  'Salaire attractif avec bonus de performance. Participation à des projets stratégiques et internationaux. Assurance santé complète et plan de retraite avantageux. Formation continue et opportunités de développement professionnel. Télétravail et horaires flexibles possibles. Ambiance de travail collaborative et motivante. Espaces de travail modernes et ergonomiques. Reconnaissance des performances et contributions individuelles. Opportunités de mobilité interne et d\'évolution de carrière. Accès à des outils et ressources de gestion de projet de pointe.',
  'Paris', 75000, '2024-10-15', TRUE, 7, 1, 5, 1, 2, 2, 6),
  ('Développeur Mobile iOS/Android',
  'Concevoir et développer des applications mobiles pour iOS et Android. Collaborer avec les équipes de conception pour créer des interfaces utilisateur intuitives. Optimiser les performances des applications pour une meilleure expérience utilisateur. Tester et déboguer les applications pour garantir leur stabilité. Assurer la maintenance et les mises à jour des applications existantes. Intégrer des API et des services tiers dans les applications. Participer à l\'amélioration continue des processus de développement. Documenter les fonctionnalités et les flux de travail des applications. Assurer la conformité avec les directives de l\'App Store et de Google Play. Suivre les tendances du développement mobile et proposer des innovations.',
  'Expérience en développement mobile pour iOS et/ou Android. Maîtrise des langages de programmation Swift, Kotlin, ou Java. Connaissance des frameworks mobiles (React Native, Flutter) est un plus. Capacité à créer des interfaces utilisateur modernes et réactives. Connaissance des principes de conception UX/UI. Expérience avec les API RESTful et les services Web. Capacité à tester et à déboguer des applications mobiles. Esprit créatif et orienté solution. Bonnes compétences en communication et capacité à travailler en équipe. Diplôme en informatique, développement logiciel ou domaine connexe.',
  'Salaire compétitif avec bonus de performance. Environnement de travail innovant et stimulant. Assurance santé et autres avantages sociaux. Formation continue et opportunités de développement. Télétravail possible selon les besoins du projet. Participation à des hackathons et événements de développement. Accès à des technologies de pointe et à des équipements modernes. Ambiance de travail dynamique et collaborative. Reconnaissance des performances et opportunités de carrière. Projets variés et innovants avec des clients de renommée.',
  'Bordeaux', 55000, '2024-11-01', FALSE, 6, 6, 3, 2, 2, 2, 1),
  ('Architecte Cloud',
  'Concevoir des architectures cloud évolutives et sécurisées. Analyser les besoins des clients et proposer des solutions adaptées. Collaborer avec les équipes de développement pour intégrer les services cloud. Assurer la migration des applications vers le cloud. Optimiser les performances et les coûts des solutions cloud. Mettre en place des solutions de sécurité pour protéger les données. Documenter les architectures et les procédures cloud. Former les équipes aux bonnes pratiques du cloud computing. Assurer le support et la maintenance des infrastructures cloud. Participer à l\'innovation et à l\'amélioration continue des solutions cloud.',
  'Expérience en architecture cloud (AWS, Azure, Google Cloud). Connaissance des services cloud et des outils de gestion (Kubernetes, Docker). Compétence en sécurité cloud et gestion des identités. Capacité à concevoir des solutions résilientes et évolutives. Bonnes compétences en communication et en gestion de projets. Connaissance des méthodologies DevOps et des outils CI/CD. Expérience en migration de systèmes vers le cloud. Diplôme en informatique, ingénierie ou domaine connexe. Certification cloud (AWS Certified Solutions Architect, Azure Solutions Architect) est un plus. Capacité à travailler en équipe et à gérer des priorités multiples.',
  'Salaire compétitif avec primes basées sur les résultats. Environnement de travail innovant et dynamique. Assurance santé complète et plan de retraite avantageux. Formation continue en technologies cloud. Télétravail et horaires flexibles possibles. Participation à des projets stratégiques et internationaux. Accès à des ressources et technologies de pointe. Ambiance de travail collaborative et motivante. Reconnaissance des performances et opportunités de carrière. Projets variés avec des clients de renom.',
  'Lille', 80000, '2024-12-01', TRUE, 8, 11, 5, 1, 2, 2, 5),
  ('Consultant en Cybersécurité',
  'Effectuer des audits de sécurité et des évaluations de risques. Proposer des solutions pour améliorer la sécurité des systèmes et des données. Assurer la conformité avec les normes de sécurité (ISO 27001, GDPR). Mettre en place des politiques et des procédures de sécurité. Collaborer avec les équipes IT pour implémenter des solutions de sécurité. Surveiller les systèmes pour détecter et répondre aux incidents de sécurité. Former les employés aux bonnes pratiques de sécurité. Assurer la veille technologique en matière de cybersécurité. Participer à la rédaction de rapports de sécurité et de recommandations. Assister les clients dans la gestion des incidents de sécurité.',
  'Expérience en cybersécurité et en gestion des risques. Connaissance des normes et des cadres de sécurité (ISO 27001, NIST). Compétence en sécurité réseau et protection des données. Capacité à analyser et à évaluer les vulnérabilités des systèmes. Bonnes compétences en communication et en formation. Connaissance des outils de sécurité (firewalls, IDS/IPS, SIEM). Diplôme en informatique, cybersécurité ou domaine connexe. Certification CISSP, CISM ou équivalent est un plus. Capacité à travailler en équipe et à gérer des situations de crise. Esprit analytique et rigoureux.',
  'Salaire attractif avec primes basées sur les performances. Environnement de travail dynamique et innovant. Assurance santé complète et autres avantages sociaux. Formation continue en cybersécurité et certifications. Télétravail possible selon les besoins des projets. Participation à des projets stratégiques et internationaux. Reconnaissance des performances et contributions. Espaces de travail modernes et équipés. Opportunités de mobilité interne et d\'évolution de carrière. Accès à des technologies de pointe et à des outils de sécurité avancés.',
  'Marseille', 75000, '2025-01-01', TRUE, 7, 3, 4, 2, 2, 2, 7),
  ('Data Scientist',
  'Analyser les données pour extraire des insights et des tendances. Développer des modèles prédictifs pour anticiper les comportements des utilisateurs. Collaborer avec les équipes métiers pour comprendre leurs besoins en données. Utiliser des techniques de machine learning pour résoudre des problèmes complexes. Assurer la qualité et l\'intégrité des données analysées. Préparer des rapports et des visualisations pour les dirigeants. Participer à l\'amélioration continue des processus de traitement de données. Contribuer à l\'innovation et à l\'amélioration des produits et services. Documenter les méthodes et les modèles utilisés. Former les équipes aux bonnes pratiques en data science.',
  'Expérience en data science et en analyse de données. Maîtrise des langages de programmation Python ou R. Connaissance des outils de machine learning (scikit-learn, TensorFlow). Capacité à manipuler et analyser de grandes quantités de données. Bonnes compétences en statistiques et en modélisation. Connaissance des bases de données et du SQL. Capacité à communiquer clairement les résultats et les insights. Diplôme en informatique, statistiques, mathématiques ou domaine connexe. Expérience avec les outils de visualisation de données (Tableau, Power BI). Esprit analytique et créatif.',
  'Salaire compétitif avec bonus de performance. Environnement de travail stimulant et innovant. Assurance santé complète et plan de retraite avantageux. Formation continue et opportunités de développement. Télétravail possible plusieurs jours par semaine. Accès à des technologies de pointe et à des ressources en data science. Participation à des projets stratégiques et à forte visibilité. Ambiance de travail collaborative et motivante. Reconnaissance des performances et opportunités de carrière. Événements d\'entreprise et activités de team building réguliers.',
  'Lyon', 70000, '2024-09-01', TRUE, 8, 2, 5, 1, 2, 2, 4),
   ('Responsable Marketing Digital',
  'Développer et mettre en œuvre des stratégies de marketing digital. Gérer les campagnes publicitaires en ligne (SEO, SEM, display). Analyser les performances des campagnes et optimiser les résultats. Collaborer avec les équipes de contenu pour produire des supports engageants. Utiliser les outils d\'analyse web pour suivre le comportement des utilisateurs. Assurer la gestion des réseaux sociaux et de la présence en ligne. Élaborer des rapports de performance pour les dirigeants. Suivre les tendances du marché et proposer des innovations. Gérer le budget marketing et optimiser les dépenses. Assurer la veille concurrentielle et technologique.',
  'Expérience en marketing digital et gestion de campagnes en ligne. Maîtrise des outils d\'analyse web (Google Analytics, SEMrush). Connaissance des techniques SEO et SEM. Capacité à analyser les données et à optimiser les performances. Bonnes compétences en communication et en rédaction. Capacité à travailler en équipe et à collaborer avec des créatifs. Connaissance des réseaux sociaux et des plateformes publicitaires. Diplôme en marketing, communication ou domaine connexe. Capacité à gérer plusieurs projets simultanément et à respecter les délais. Esprit créatif et orienté résultat.',
  'Salaire attractif avec primes basées sur les performances. Environnement de travail dynamique et innovant. Assurance santé complète et autres avantages sociaux. Formation continue en marketing digital. Télétravail possible selon les besoins des projets. Participation à des projets stratégiques et à forte visibilité. Accès à des outils de marketing digital de pointe. Ambiance de travail collaborative et motivante. Reconnaissance des performances et contributions. Opportunités de mobilité interne et d\'évolution de carrière.',
  'Montpellier', 65000, '2024-12-01', TRUE, 6, 12, 4, 2, 2, 2, 3),
  ('Chargé de Projet',
  'Gérer l\'ensemble du processus de recrutement pour les postes vacants. Rédiger et publier des offres d\'emploi attractives. Rechercher et présélectionner les candidats potentiels. Conduire des entretiens d\'embauche et évaluer les compétences des candidats. Collaborer avec les responsables de département pour comprendre leurs besoins en recrutement. Assurer la gestion des bases de données de candidats. Participer aux salons de l\'emploi et événements de recrutement. Suivre les indicateurs de performance du recrutement. Assurer la communication avec les candidats tout au long du processus. Contribuer à l\'amélioration continue des pratiques de recrutement.',
  'Expérience en recrutement ou en ressources humaines. Excellentes compétences en communication et en évaluation. Capacité à identifier et à attirer les meilleurs talents. Connaissance des outils de recrutement et des plateformes en ligne. Bonnes compétences en gestion de bases de données et en suivi administratif. Capacité à travailler en équipe et à gérer des priorités multiples. Esprit analytique et rigoureux. Connaissance des pratiques et des législations en matière de recrutement. Diplôme en ressources humaines, psychologie ou domaine connexe. Capacité à gérer des projets de recrutement de bout en bout.',
  'Salaire compétitif avec primes basées sur les objectifs. Environnement de travail dynamique et collaboratif. Assurance santé complète et autres avantages sociaux. Formation continue en ressources humaines. Télétravail possible selon les besoins. Participation à des projets stratégiques et à forte visibilité. Ambiance de travail conviviale et motivante. Reconnaissance des performances et contributions. Opportunités de mobilité interne et d\'évolution de carrière. Accès à des outils de recrutement de pointe.',
  'Brest', 45000, '2024-11-15', FALSE, 7, 14, 4, 2, 2, 2, 6),
  ('Responsable des Opérations',
  'Superviser et coordonner les opérations quotidiennes de l\'entreprise. Assurer l\'optimisation des processus et l\'efficacité opérationnelle. Gérer les équipes opérationnelles et assurer leur formation. Collaborer avec les autres départements pour améliorer la performance globale. Suivre les indicateurs de performance et proposer des améliorations. Assurer la gestion des ressources et des budgets. Participer à la planification stratégique de l\'entreprise. Assurer la conformité avec les normes et les régulations. Gérer les relations avec les fournisseurs et les partenaires. Contribuer à l\'amélioration continue des pratiques opérationnelles.',
  'Expérience en gestion des opérations et en management. Compétence en optimisation des processus et en gestion de projets. Excellentes compétences en communication et en leadership. Capacité à analyser les données et à proposer des solutions. Connaissance des systèmes de gestion et des outils ERP. Esprit analytique et orienté résultat. Capacité à gérer plusieurs projets simultanément. Diplôme en management, ingénierie ou domaine connexe. Expérience en gestion de budgets et de ressources. Capacité à travailler en équipe et à motiver les équipes.',
  'Salaire attractif avec primes basées sur les résultats. Environnement de travail dynamique et stimulant. Assurance santé complète et autres avantages sociaux. Formation continue et opportunités de développement professionnel. Télétravail possible selon les besoins. Participation à des projets stratégiques et internationaux. Reconnaissance des performances et contributions. Accès à des ressources et technologies de pointe. Opportunités de mobilité interne et d\'évolution de carrière. Événements d\'entreprise et activités de team building réguliers.',
  'Nancy', 80000, '2024-09-01', TRUE, 8, 13, 5, 1, 2, 2, 6),
  ('Architecte Logiciel',
  'Concevoir et définir l\'architecture des logiciels de l\'entreprise. Collaborer avec les équipes de développement pour implémenter les solutions. Assurer la qualité, la performance et la sécurité des logiciels. Réaliser des revues de code et garantir les bonnes pratiques de développement. Participer à la sélection des technologies et des outils de développement. Assurer la documentation des architectures et des processus. Former les développeurs aux bonnes pratiques de conception logicielle. Contribuer à l\'innovation et à l\'amélioration continue des produits. Assurer la veille technologique et proposer des innovations. Participer à la gestion des projets de développement logiciel.',
  'Expérience en architecture logicielle et en développement logiciel. Maîtrise des langages de programmation (Java, C#, Python). Connaissance des frameworks et des outils de développement. Capacité à concevoir des architectures robustes et évolutives. Bonnes compétences en communication et en gestion de projets. Capacité à travailler en équipe et à collaborer avec des développeurs. Esprit analytique et orienté solution. Diplôme en informatique, ingénierie logicielle ou domaine connexe. Connaissance des méthodologies Agile et DevOps. Capacité à gérer des projets de développement de bout en bout.',
  'Salaire compétitif avec primes basées sur les résultats. Environnement de travail innovant et stimulant. Assurance santé complète et plan de retraite avantageux. Formation continue et opportunités de développement professionnel. Télétravail possible plusieurs jours par semaine. Participation à des projets stratégiques et internationaux. Accès à des ressources technologiques de pointe. Ambiance de travail collaborative et motivante. Reconnaissance des performances et opportunités de carrière. Événements d\'entreprise et activités de team building réguliers.',
  'grenoble', 85000, '2024-10-01', TRUE, 7, 8, 5, 1, 2, 2, 5);


INSERT INTO candidacy (candidate_id, offer_id, status_id , motivation) VALUES
(1, 7, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(1, 5, 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(1, 1, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(2, 10, 4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(3, 4, 3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(3, 9, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(4, 6, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(4, 8, 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(4, 3, 3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(4, 7, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(5, 7, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(5, 5, 4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
(5, 10, 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");

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
