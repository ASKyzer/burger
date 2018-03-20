CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  devoured BOOLEAN default false,
  PRIMARY KEY (id)
);
