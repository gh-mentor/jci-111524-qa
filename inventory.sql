/*
This file contains a script of Transact SQL (T-SQL) command to interact with a database named 'Inventory'.
Requirements:
- SQL Server 2022 is installed and running
- referential integrity is enforced
Steps:
- Check if the database 'Inventory' exists, if it does exist, drop it and create a new one.
- Set the default database to 'Inventory'.
- Create a 'suppliers' table. Use the following columns:
-- id: integer, primary key
-- name: 50 characters, not null
-- address: 255 characters, nullable
-- city: 50 characters, not null
-- state: 2 characters, not null
- Create the 'categories' table with a one-to-many relation to the 'suppliers'. Use the following columns:
-- id:  integer, primary key
-- name: 50 characters, not null
-- description:  255 characters, nullable
-- supplier_id: int, foreign key references suppliers(id)
- Create the 'products' table with a one-to-many relation to the 'categories' table. Use the following columns:
-- id: integer, primary key
-- name: 50 characters, not null
-- price: decimal (10, 2), not null
-- category_id: int, foreign key references categories(id)
- Populate the 'suppliers' table with sample data.
- Populate the 'categories' table with sample data.
- Populate the 'products' table with sample data.
- Create a view named 'product_list' that displays the following columns:
-- product_id
-- product_name
-- category_name
-- supplier_name
- Create a stored procedure named 'get_product_list' that returns the product list view.
- Create a trigger that updates the 'products' table when a 'categories' record is deleted.
- Create a function that returns the total number of products in a category.
- Create a function that returns the total number of products supplied by a supplier.
*/

-- Check if the database 'Inventory' exists, if it does exist, drop it and create a new one.
IF DB_ID('Inventory') IS NOT NULL       
    DROP DATABASE Inventory;
GO

CREATE DATABASE Inventory;
GO

-- Set the default database to 'Inventory'.
USE Inventory;
GO

-- Create a 'suppliers' table.
CREATE TABLE suppliers (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(50) NOT NULL,
    state CHAR(2) NOT NULL,
    -- Add a unique constraint on the name column
    CONSTRAINT UQ_SupplierName UNIQUE (name),
    -- Add a check constraint on the state column
    CONSTRAINT CHK_State CHECK (state IN ('AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY')),
    -- add a description column with a default value
    description VARCHAR(255) DEFAULT 'No description available'
);

-- Create the 'categories' table with a one-to-many relation to the 'suppliers'.
CREATE TABLE categories (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    supplier_id INT,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

-- Create the 'products' table with a one-to-many relation to the 'categories' table.
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    -- Add a created_at column with a default value of the current timestamp
    created_at DATETIME DEFAULT GETDATE(),
    -- Add an updated_at column with a default value of the current timestamp
    updated_at DATETIME DEFAULT GETDATE()
);

-- Populate the 'suppliers' table with sample data.
INSERT INTO suppliers (id, name, address, city, state)
VALUES (1, 'Supplier 1', '123 Main St', 'City 1', 'CA'),
       (2, 'Supplier 2', '456 Elm St', 'City 2', 'NY'),
       (3, 'Supplier 3', '789 Oak St', 'City 3', 'TX');

-- Populate the 'categories' table with sample data.
INSERT INTO categories (id, name, description, supplier_id)
VALUES (1, 'Category 1', 'Description 1', 1),
       (2, 'Category 2', 'Description 2', 2),
       (3, 'Category 3', 'Description 3', 3);

-- Populate the 'products' table with sample data.
INSERT INTO products (id, name, price, category_id)
VALUES (1, 'Product 1', 10.00, 1),
       (2, 'Product 2', 20.00, 2),
       (3, 'Product 3', 30.00, 3);

-- Create a view named 'product_list' that displays the following columns:
CREATE VIEW product_list AS
SELECT p.id AS product_id, p.name AS product_name, c.name AS category_name, s.name AS supplier_name
FROM products p
JOIN categories c ON p.category_id = c.id
JOIN suppliers s ON c.supplier_id = s.id;

-- Create a stored procedure named 'get_product_list' that returns the product list view.
CREATE PROCEDURE get_product_list
AS
BEGIN
    SELECT * FROM product_list;
END;

-- Create a trigger that updates the 'products' table when a 'categories' record is deleted.
CREATE TRIGGER update_products_on_category_delete
ON categories
AFTER DELETE
AS
BEGIN
    DELETE FROM products WHERE category_id IN (SELECT id FROM deleted);
END;

-- Create a function that returns the total number of products in a category.
CREATE FUNCTION get_total_products_in_category (@category_id INT)
RETURNS INT
AS
BEGIN
    DECLARE @total_products INT;
    SELECT @total_products = COUNT(*) FROM products WHERE category_id = @category_id;
    RETURN @total_products;
END;

-- Create a function that returns the total number of products supplied by a supplier.
CREATE FUNCTION get_total_products_supplied_by_supplier (@supplier_id INT)
RETURNS INT
AS
BEGIN
    DECLARE @total_products INT;
    SELECT @total_products = COUNT(*) FROM products p JOIN categories c ON p.category_id = c.id WHERE c.supplier_id = @supplier_id;
    RETURN @total_products;
END;





