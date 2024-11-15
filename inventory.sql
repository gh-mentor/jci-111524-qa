/*
This file contains a script of Transact SQL (T-SQL) command to interact with a database named 'Inventory'.
Requirements:
- SQL Server 2022 is installed and running
- referential integrity is enforced
Details:
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

