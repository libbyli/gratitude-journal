DROP DATABASE IF EXISTS gratitude_journal;

CREATE DATABASE gratitude_journal;

USE gratitude_journal;

CREATE TABLE users (
  user_id int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE (username)
);

CREATE TABLE entries (
  entry_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  text varchar(40) NOT NULL,
  PRIMARY KEY (entry_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
