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

INSERT INTO users (user_name) VALUES ("libby");
INSERT INTO users (user_name) VALUES ("jesse");
INSERT INTO users (user_name) VALUES ("emily");
INSERT INTO users (user_name) VALUES ("mac");
INSERT INTO users (user_name) VALUES ("fred");
INSERT INTO users (user_name) VALUES ("hrsf95");
INSERT INTO users (user_name) VALUES ("");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (1, "cats purring", 1, "2018-07-07");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (1, "sushi", 1, "2018-07-07");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (1, "hot cocoa on a cold day", 1, "2018-07-08");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (1, "warm blankets", 1, "2018-07-08");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (1, "alpacas", 1, "2018-07-09");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (2, "boulders", 1, "2018-07-09");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (3, "cute dogs", 1, "2018-07-09");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (4, "backbone", 1, "2018-07-09");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (5, "black clothes", 1, "2018-07-09");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (6, "support animals", 1, "2018-07-09");
INSERT INTO entries (user_id, entry_text, entry_public, entry_date) VALUES (6, "staff", 1, "2018-07-09");

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/