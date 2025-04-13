/*--Create Database --*/
CREATE DATABASE PackPalDB;
USE PackPalDB;

-- Users Table (Roles: Owner, Admin, Member, Viewer)
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    role ENUM('Owner', 'Admin', 'Member', 'Viewer') NOT NULL
);
-- add password column ro users table
ALTER TABLE Users ADD COLUMN password VARCHAR(255) NOT NULL;
-- Categories Table (Predefined & Custom Categories)
CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

-- Items Table (Packing Checklist Linked to Users & Categories)
CREATE TABLE Items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    category_id INT,
    assigned_user INT,
    status ENUM('To Pack', 'Packed', 'Delivered') DEFAULT 'To Pack',
    FOREIGN KEY (category_id) REFERENCES Categories(category_id) ON DELETE SET NULL,
    FOREIGN KEY (assigned_user) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Alerts Table (Real-Time Updates & Notifications)
CREATE TABLE Alerts (
    alert_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Shared Lists Table (Export & Share Packing List)
CREATE TABLE SharedLists (
    list_id INT AUTO_INCREMENT PRIMARY KEY,
    owner_id INT,
    list_name VARCHAR(255) NOT NULL,
    exported_pdf VARCHAR(255),
    FOREIGN KEY (owner_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

INSERT INTO Users (username, role) VALUES 
('Alice', 'Owner'), 
('Bob', 'Admin'), 
('Charlie', 'Member'), 
('David', 'Viewer');

INSERT INTO Categories (category_name) VALUES 
('Hygiene'), 
('Tech'), 
('Food'), 
('Documents'), 
('Clothing');

INSERT INTO Items (item_name, category_id, assigned_user, status) VALUES 
('Toothpaste', 1, 3, 'To Pack'),
('Smartphone', 2, 3, 'Packed'),
('Protein Bar', 3, 3, 'Delivered'),
('Passport', 4, 3, 'Packed'),
('Jacket', 5, 3, 'To Pack');

INSERT INTO Alerts (user_id, message) VALUES 
(3, 'Your item "Smartphone" is now packed.'),
(3, 'Your item "Passport" is ready for travel.');


INSERT INTO SharedLists (owner_id, list_name, exported_pdf) VALUES 
(1, 'Europe Trip Packing', 'europe_trip.pdf'),
(1, 'Camping Essentials', 'camping_list.pdf');

SELECT * FROM Users;
SELECT * FROM Categories;
SELECT * FROM Items;
SELECT * FROM Alerts;
SELECT * FROM SharedLists;


