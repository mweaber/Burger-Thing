DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id integer AUTO_INCREMENT NOT NULL,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN,
    createdAT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);