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

INSERT INTO profil (user_id, firstname, lastname) VALUES
  (6, 'Thomas', 'Lefevre'),
  (7, 'Camille', 'Roux'),
  (8, 'Antoine', 'Moreau');

INSERT INTO profil (user_id, firstname, lastname) VALUES
  (9, 'Captain', 'Control');

INSERT INTO profil (user_id, firstname, lastname, description, phone, city, photo, cv, github, linkedin, is_active) VALUES
  (1, 'Jean', 'Dupuis', "Développeur backend expérimenté avec plus de 10 ans dans le domaine. J'ai travaillé sur divers projets complexes, utilisant des technologies comme Java, Python et SQL. Passionné par l'optimisation des bases de données et l'amélioration des performances des applications. Toujours à l'affût des nouvelles technologies pour intégrer les meilleures pratiques dans mes projets.", '0654321987', 'Paris', NULL, NULL, 'https://github.com/jeandupuis', 'https://linkedin.com/in/jeandupuis', TRUE),
  (2, 'Marie', 'Legrand', "Spécialiste en UI/UX avec une expertise approfondie dans la création d'interfaces utilisateur intuitives et esthétiques. J'ai collaboré avec des équipes internationales pour développer des produits numériques engageants. Ma passion réside dans l'amélioration de l'expérience utilisateur par des designs innovants et centrés sur l'utilisateur. Je suis également formatrice en design UX.", '0654321988', 'Lyon', NULL, NULL, 'https://github.com/marielegrand', 'https://linkedin.com/in/marielegrand', TRUE),
  (3, 'Pierre', 'Dubois', "Expert en cybersécurité, je protège les entreprises contre les cybermenaces depuis plus de 8 ans. Ma spécialité inclut l'évaluation des vulnérabilités, la gestion des incidents de sécurité et la mise en place de solutions de sécurité robustes. Je suis certifié CEH et CISSP, et j'aime partager mes connaissances à travers des conférences et des ateliers. Ma mission est de rendre le cyberespace plus sûr.", '0654321989', 'Marseille', NULL, NULL, 'https://github.com/pierredubois', 'https://linkedin.com/in/pierredubois', TRUE),
  (4, 'Lucie', 'Martin', "Data analyst avec 5 ans d'expérience dans l'analyse de données complexes pour fournir des insights précieux aux entreprises. J'utilise des outils comme Python, R et SQL pour transformer les données brutes en informations exploitables. Mon expertise inclut la visualisation des données et le développement de modèles prédictifs. Passionnée par le big data et l'intelligence artificielle, je suis toujours en quête de nouvelles méthodes pour améliorer l'analyse des données.", '0654321990', 'Toulouse', NULL, NULL, 'https://github.com/luciemartin', 'https://linkedin.com/in/luciemartin', TRUE),
  (5, 'Sophie', 'Bernard', "Développeur frontend passionnée avec une forte expérience en JavaScript, React et CSS. J'ai un œil pour le design et une passion pour créer des interfaces utilisateur fluides et réactives. J'aime travailler en étroite collaboration avec les équipes de design pour transformer les maquettes en sites web fonctionnels. Toujours curieuse des nouvelles tendances en développement web, je m'efforce de rester à jour avec les technologies émergentes.", '0654321991', 'Nice', NULL, NULL, 'https://github.com/sophiebernard', 'https://linkedin.com/in/sophiebernard', TRUE);

INSERT INTO company (name, head_office, description, sales_figure, size, company_values, contact_name, contact_phone, contact_mail, activity_area_id) VALUES
  ('Tech Solutions', 'Paris', 'Entreprise spécialisée dans le développement de solutions logicielles. Nous offrons des produits innovants qui améliorent la productivité et l\'efficacité des entreprises. Nos équipes travaillent constamment sur des technologies de pointe pour garantir des solutions performantes et sécurisées.', 1000000, 50, 'Innovation, Qualité, Satisfaction Client', 'Alice Durand', '0123456789', 'alice.durand@techsolutions.com', 1),
  ('CloudNet', 'Lyon', 'Fournisseur de solutions de cloud computing. Nous proposons une gamme complète de services cloud pour répondre aux besoins de toutes les entreprises. Notre infrastructure sécurisée et fiable permet à nos clients de se concentrer sur leur cœur de métier.', 2000000, 100, 'Fiabilité, Sécurité, Performance', 'Bob Martin', '0987654321', 'bob.martin@cloudnet.com', 7),
  ('DataStream', 'Marseille', 'Experts en big data et analytics. Nous aidons les entreprises à tirer parti de leurs données pour prendre des décisions éclairées. Nos solutions d\'analyse avancées permettent de transformer les données en informations exploitables.', 1500000, 75, 'Analyse, Précision, Expertise', 'Caroline Dupont', '0123498765', 'caroline.dupont@datastream.com', 9),
  ('SecureSoft', 'Toulouse', 'Leader en sécurité informatique. Nous protégeons les entreprises contre les menaces numériques grâce à nos solutions de sécurité avancées. Notre équipe d\'experts est dédiée à fournir des services de sécurité de premier ordre pour assurer la protection des données.', 2500000, 120, 'Protection, Confiance, Innovation', 'David Leroy', '0678901234', 'david.leroy@securesoft.com', 8),
  ('FinTech Innovations', 'Nice', 'Société spécialisée dans les technologies financières. Nous développons des solutions innovantes pour le secteur financier, en mettant l\'accent sur la transparence et l\'efficacité. Nos produits aident les institutions financières à optimiser leurs opérations et à mieux servir leurs clients.', 3000000, 90, 'Transparence, Efficacité, Confiance', 'Eve Laurent', '0678905678', 'eve.laurent@fintech.com', 18);

INSERT INTO offer (title, missions, profil_desc, benefits, city, salary, start_date, is_cadre, consultant_id, company_id, study_level_id, contract_id, work_time_id, work_format_id, category_id) VALUES
  ('Développeur Java Backend', 'Développement et maintenance des applications backend en Java. Participer à la conception et à l\'architecture des nouveaux projets. Collaborer avec les équipes frontend pour assurer l\'intégration optimale.', 'Expérience confirmée en développement Java. Bonne connaissance des bases de données relationnelles et non relationnelles. Capacité à travailler en équipe et à communiquer efficacement.', 'Salaire compétitif avec primes de performance. Opportunités de formation continue et de développement professionnel. Environnement de travail stimulant et innovant.', 'Paris', 50000, '2024-08-01', FALSE, 6, 1, 3, 2, 1, 2, 1),
  ('Ingénieur DevOps', 'Gestion et optimisation des pipelines CI/CD. Automatisation des déploiements et gestion de l\'infrastructure cloud. Surveillance et amélioration des performances des systèmes.', 'Expérience solide en DevOps avec une connaissance approfondie de Kubernetes et Docker. Familiarité avec les outils de gestion de configuration comme Ansible ou Terraform. Bonnes compétences en scripting (Python, Bash).', 'Environnement de travail flexible avec télétravail possible. Avantages sociaux complets, y compris l\'assurance santé et les congés payés. Équipe dynamique et projets innovants.', 'Lyon', 55000, '2024-09-01', TRUE, 7, 2, 4, 2, 1, 1, 5),
  ('Data Analyst Junior', 'Analyse et interprétation des données pour fournir des insights aux équipes. Création de rapports et de tableaux de bord pour suivre les indicateurs de performance. Assistance à la mise en place de solutions d\'analyse avancée.', 'Diplôme en statistiques, informatique ou domaine connexe. Connaissance de base des outils de visualisation de données comme Tableau ou PowerBI. Capacité à travailler avec des équipes multidisciplinaires.', 'Programme de mentorat et de développement de carrière. Horaires flexibles et possibilité de télétravail. Participation à des projets innovants et variés.', 'Marseille', 40000, '2024-10-01', FALSE, 8, 3, 2, 1, 1, 3, 4),
  ('Consultant Sécurité', 'Audit et analyse des systèmes de sécurité des clients. Recommandation et mise en œuvre de solutions de sécurité. Formation des équipes clients sur les meilleures pratiques en sécurité.', 'Expérience de 5 ans en sécurité informatique, avec des certifications comme CISSP ou CEH. Bonne connaissance des normes et des réglementations en matière de sécurité. Capacité à travailler en autonomie et à gérer plusieurs projets simultanément.', 'Salaire attractif avec primes de performance. Formation continue et certification payées par l\'entreprise. Opportunités de carrière internationale.', 'Toulouse', 60000, '2024-11-01', TRUE, 6, 4, 4, 2, 1, 2, 7),
  ('Développeur Frontend React', 'Développement d\'interfaces utilisateur en utilisant React. Collaboration avec les designers pour créer des expériences utilisateur intuitives. Optimisation des performances des applications web.', 'Expérience confirmée en développement frontend avec React. Bonnes compétences en HTML, CSS et JavaScript. Connaissance des outils de gestion de version comme Git.', 'Salaire compétitif avec bonus de performance. Environnement de travail collaboratif et dynamique. Possibilité de travail à distance et horaires flexibles.', 'Nice', 45000, '2024-08-15', FALSE, 7, 5, 3, 1, 1, 3, 2),
  ('Chef de projet IT', 'Gestion de projets IT de la conception à la réalisation. Coordination des équipes techniques et fonctionnelles. Suivi des budgets et des délais.', 'Expérience en gestion de projets IT, avec une certification PMP ou Prince2. Compétences en communication et en leadership. Capacité à gérer plusieurs projets en parallèle.', 'Salaire compétitif avec primes de performance. Opportunités de formation et de développement professionnel. Environnement de travail stimulant et dynamique.', 'Paris', 70000, '2024-12-01', TRUE, 8, 1, 5, 2, 1, 2, 6),
  ('Développeur Fullstack', 'Développement de fonctionnalités backend et frontend. Collaboration avec les équipes de design et de produit. Maintenance et optimisation des applications existantes.', 'Compétences en JavaScript, Node.js et frameworks frontend comme React ou Angular. Expérience en développement backend avec des langages comme Python ou Java. Bonne connaissance des bases de données relationnelles et non relationnelles.', 'Salaire compétitif avec bonus de performance. Possibilité de travail à distance et horaires flexibles. Opportunités de formation continue.', 'Lyon', 48000, '2024-09-15', FALSE, 6, 2, 3, 2, 1, 3, 1),
  ('Architecte Cloud', 'Conception et mise en œuvre d\'architectures cloud sécurisées et évolutives. Optimisation des coûts et des performances des infrastructures cloud. Support et formation des équipes techniques sur les meilleures pratiques cloud.', 'Expérience en architecture cloud avec des certifications comme AWS Solutions Architect ou Azure Architect. Connaissance approfondie des outils de gestion d\'infrastructure comme Terraform ou CloudFormation. Capacité à travailler en équipe et à communiquer efficacement.', 'Salaire compétitif avec primes de performance. Avantages sociaux complets, y compris l\'assurance santé et les congés payés. Possibilités de formation et de certification continues.', 'Marseille', 65000, '2024-10-15', TRUE, 7, 3, 5, 2, 1, 1, 7),
  ('Spécialiste en Cybersécurité', 'Analyse et évaluation des risques de sécurité. Mise en œuvre de mesures de protection et de plans de réponse aux incidents. Formation et sensibilisation des employés à la sécurité informatique.', 'Expérience en cybersécurité avec des compétences en gestion de base de données. Connaissance des normes de sécurité et des outils de surveillance. Capacité à travailler sous pression et à gérer des incidents de sécurité.', 'Salaire compétitif avec primes de performance. Environnement de travail stimulant avec des projets variés. Possibilité de formation continue et d\'évolution professionnelle.', 'Toulouse', 55000, '2024-11-15', FALSE, 8, 4, 4, 1, 1, 2, 7),
  ('UI/UX Designer', 'Conception d\'interfaces utilisateur intuitives et attrayantes. Collaboration avec les développeurs pour garantir la faisabilité des designs. Test et itération des prototypes en fonction des retours utilisateurs.', 'Expérience en design UI/UX avec un portfolio solide. Compétences en outils de design comme Figma, Sketch ou Adobe XD. Bonne compréhension des principes de l\'ergonomie et de l\'expérience utilisateur.', 'Salaire compétitif avec bonus de performance. Environnement de travail collaboratif et créatif. Possibilité de télétravail et horaires flexibles.', 'Nice', 42000, '2024-08-30', FALSE, 6, 5, 3, 1, 1, 3, 3);

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
