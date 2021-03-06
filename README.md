## Tech Stack

### This is a backend project created with Express.js, PostgreSQL with Sequelize ORM

### Started with React in the hope of creating at least a simple front end

## Main Features

### Following 3 tables are defined:

#### Product

#### Review

#### Description

#### Product needs to be created first before creating a review or description for that product

### Associations:

#### Product(1) <--> Review(n) (One to Many association)

#### Product(1) <--> Description(1) (One to One association)

## Technical considerations

### Foreign keys reside in review table and description table for a given product because a review or description is dependent on a product

### Also, deleting a review or description becomes possible without touching the product table

### Eager loading of reviews and description when calling getAllProducts.

### Implemented sequelize ttransactions for auto-committing & auto roll-back based on the result of a promise chain and, (if enabled) pass the transaction to all calls within the callback

## Pre-Requisites

Please ensure you have the following softwares installed & setup before proceeding further:

1. Node.js
2. Prettier (VS Code extension)
3. Postgres & pgAdmin (for viewing tables using GUI)

## Available Scripts

In the project directory, please set the following environment variables correctly for your postgres accounts:

For example:

#### `DB="mydB"`

#### `DB_USERNAME= "username"`

#### `DB_PASSWORD= "password"`

#### `PORT=9000`

Please run the following commands in the given order:

### `cd src`

### `yarn run dev`

Starts the express server at port# 9000.

Once the server starts successfully, routes can be setup on Postman and tested. Results will be visible in pgAdmin once seed data is populated.
