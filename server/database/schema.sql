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
  FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE offer (
  id int primary key auto_increment not null,
  title varchar(255) not null,
  description longtext not null,
  city varchar(255) not null,
  salary int,
  created_at timestamp not null,
  is_favorite BOOLEAN,
  is_cadre BOOLEAN,
  consultant_id int,
  company_id int,
  contract_id int not null,
  work_time_id int not null,
  work_format_id int not null,
  category_id int not null,
  FOREIGN KEY (consultant_id) REFERENCES user(id),
  FOREIGN KEY (company_id) REFERENCES company(id),
  FOREIGN KEY (contract_id) REFERENCES contract(id),
  FOREIGN KEY (work_time_id) REFERENCES work_time(id),
  FOREIGN KEY (work_format_id) REFERENCES work_format(id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);
CREATE TABLE candidacy (
  id int  primary key auto_increment not null,
  candidate_id int not null,
  offer_id int not null,
  created_at timestamp not null,
  status_id int not null,
  FOREIGN KEY (candidate_id) REFERENCES user(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  FOREIGN KEY (status_id) REFERENCES status(id)
);
CREATE TABLE technology_candidate (
  technology_id int not null,
  candidate_id int not null,
  FOREIGN KEY (technology_id) REFERENCES technology(id),
  FOREIGN KEY (candidate_id) REFERENCES profil(user_id)
);
CREATE TABLE technology_offer (
  technology_id int not null,
  offer_id int not null,
  FOREIGN KEY (technology_id) REFERENCES technology(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id)
);
CREATE TABLE consultant_company (
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
(1, 'Jean', 'Dupuis', 'Développeur backend expérimenté.', '0654321987', 'Paris', NULL, NULL, 'https://github.com/jeandupuis', 'https://linkedin.com/in/jeandupuis', TRUE),
(2, 'Marie', 'Legrand', 'Spécialiste en UI/UX.', '0654321988', 'Lyon', NULL, NULL, 'https://github.com/marielegrand', 'https://linkedin.com/in/marielegrand', TRUE),
(3, 'Pierre', 'Dubois', 'Expert en cybersécurité.', '0654321989', 'Marseille', NULL, NULL, 'https://github.com/pierredubois', 'https://linkedin.com/in/pierredubois', TRUE),
(4, 'Lucie', 'Martin', "Data analyst avec 5 ans d'expérience.", '0654321990', 'Toulouse', NULL, NULL, 'https://github.com/luciemartin', 'https://linkedin.com/in/luciemartin', TRUE),
(5, 'Sophie', 'Bernard', "Développeur frontend passionnée.", '0654321991', 'Nice', NULL, NULL, 'https://github.com/sophiebernard', 'https://linkedin.com/in/sophiebernard', TRUE);

INSERT INTO company (name, head_office, description, sales_figure, size, company_values, contact_name, contact_phone, contact_mail, activity_area_id) VALUES
('Tech Solutions', 'Paris', 'Entreprise spécialisée dans le développement de solutions logicielles.', 1000000, 50, 'Innovation, Qualité, Satisfaction Client', 'Alice Durand', '0123456789', 'alice.durand@techsolutions.com', 1),
('CloudNet', 'Lyon', 'Fournisseur de solutions de cloud computing.', 2000000, 100, 'Fiabilité, Sécurité, Performance', 'Bob Martin', '0987654321', 'bob.martin@cloudnet.com', 7),
('DataStream', 'Marseille', 'Experts en big data et analytics.', 1500000, 75, 'Analyse, Précision, Expertise', 'Caroline Dupont', '0123498765', 'caroline.dupont@datastream.com', 9),
('SecureSoft', 'Toulouse', 'Leader en sécurité informatique.', 2500000, 120, 'Protection, Confiance, Innovation', 'David Leroy', '0678901234', 'david.leroy@securesoft.com', 8),
('FinTech Innovations', 'Nice', 'Société spécialisée dans les technologies financières.', 3000000, 90, 'Transparence, Efficacité, Confiance', 'Eve Laurent', '0678905678', 'eve.laurent@fintech.com', 18);

INSERT INTO offer (title, description, city, salary, created_at, is_favorite, is_cadre, consultant_id, company_id, contract_id, work_time_id, work_format_id, category_id) VALUES
('Développeur Java Backend', 'Nous recherchons un développeur Java Backend expérimenté.', 'Paris', 50000, NOW(), FALSE, FALSE, 6, 1, 2, 1, 2, 1),
('Ingénieur DevOps', 'Un poste pour un ingénieur DevOps avec expérience en Kubernetes.', 'Lyon', 55000, NOW(), TRUE, TRUE, 7, 2, 2, 1, 1, 5),
('Data Analyst Junior', 'Un poste pour un data analyst junior.', 'Marseille', 40000, NOW(), FALSE, FALSE, 8, 3, 1, 1, 3, 4),
("Consultant Sécurité", "Consultant en sécurité informatique avec 5 ans d'expérience.", 'Toulouse', 60000, NOW(), TRUE, TRUE, 6, 4, 2, 1, 2, 7),
('Développeur Frontend React', 'Développeur frontend spécialisé en React.', 'Nice', 45000, NOW(), FALSE, FALSE, 7, 5, 1, 1, 3, 2),
('Chef de projet IT', 'Nous cherchons un chef de projet IT avec des compétences en gestion.', 'Paris', 70000, NOW(), TRUE, TRUE, 8, 1, 2, 1, 2, 6),
('Développeur Fullstack', 'Développeur fullstack avec des compétences en JavaScript et Node.js.', 'Lyon', 48000, NOW(), FALSE, FALSE, 6, 2, 2, 1, 3, 1),
('Architecte Cloud', 'Architecte cloud avec expérience en AWS.', 'Marseille', 65000, NOW(), TRUE, TRUE, 7, 3, 2, 1, 1, 7),
('Spécialiste en Cybersécurité', 'Spécialiste en cybersécurité avec des compétences en Pentesting.', 'Toulouse', 55000, NOW(), FALSE, FALSE, 8, 4, 1, 1, 2, 7),
('UI/UX Designer', 'Nous recherchons un designer UI/UX créatif.', 'Nice', 42000, NOW(), FALSE, FALSE, 6, 5, 1, 1, 3, 3);
-- SQLBook: Markup
