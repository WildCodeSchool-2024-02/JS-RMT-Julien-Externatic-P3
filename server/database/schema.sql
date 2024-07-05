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
