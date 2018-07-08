DROP DATABASE IF EXISTS share_gratitude;

CREATE DATABASE share_gratitude;

USE share_gratitude;

CREATE TABLE users (
  user_id int NOT NULL AUTO_INCREMENT,
  user_name varchar(20) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE (user_name)
);

CREATE TABLE entries (
  entry_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  entry_text varchar(40) NOT NULL,
  entry_public boolean NOT NULL,
  entry_date date NOT NULL,
  PRIMARY KEY (entry_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/
