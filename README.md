# Tech Stack

### This is a backend project created with Express.js, PostgreSQL with Sequelize ORM

## Main Features

### There are 3 tables. Product needs to be created first before creating a review or description for that product

#### Product

#### Review

#### Description

### Associations:

#### Product(1) <--> Review(n) (One to Many association)

#### Product(1) <--> Description(1) (One to One association)

## Technical considerations

### Foreign keys reside in review table and description table for a given product because a review or description is dependent on a product

### Also, deleting a review or description becomes possible without touching the product table

## Pre-Requisites

Please ensure you have the following softwares installed & setup before proceeding further:

1. Node.js
2. Prettier (VS Code extension)
3. Postgres & pgAdmin (for viewing tables using GUI)

## Available Scripts

In the project directory, you can run:

### `cd src`

### `yarn run dev`

Starts the server at port# 9000 in the development mode.

Once the server starts successfully, routes can be setup on Postman and tested. Results will be visible in pgAdmin once seed data is populated.

### Product has to be created first as all other tables are dependent upon it

### Review | Description can be created in any order after Product has been created

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see lint errors in the console.
