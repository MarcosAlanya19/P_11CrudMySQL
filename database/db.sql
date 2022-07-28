/* create the database */
CREATE DATABASE crud;

/* using the database */
use crud;

/* create a table */
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT ,
    name  VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    PRIMARY KEY(id)
);

/* tp show all tables */
SHOW TABLES;

/* to describe the table */
describe customer;