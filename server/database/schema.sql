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