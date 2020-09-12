-- Create Database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create Burgers Table
CREATE TABLE burgers (
  id int NOT NULL primary key AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured boolean NOT NULL
);