DROP DATABASE IF EXISTS seed_db;
CREATE DATABASE seed_db;

USE seed_db;

CREATE TABLE employee (
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    role_id INT,
    manager_id INT,
);

CREATE TABLE employee_role(
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(15) NULL,
    department_id INT(15) NOT NULL,
);

CREATE TABLE department(
    person_name VARCHAR(30) NOT NULL,
);


