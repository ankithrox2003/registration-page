# registration-page

You need HTML,CSS,Node.js, SQL
for SQL you can use xAMPP
just start the mysql database server, thats it..!

# STEPS TO CREATE THE FILES:-

Create a folder named placementregistration.

This is your root folder for the project.
Inside placementregistration, create a folder named public.

This is where you'll store public assets like CSS, JavaScript, and images.
Inside public, create another folder named css.

This is where you'll store all the CSS files for styling your website.
Inside css, create a file named style.css.

This will be your stylesheet where you'll write your CSS code.
Follow similar steps for the other folders and files. Here's the full breakdown:

<img width="310" alt="Screenshot 2024-09-24 at 8 34 45 PM" src="https://github.com/user-attachments/assets/c5f9296b-7c19-4db3-b18d-62402d994511">

# Step-by-Step Instructions:(VS CODE)

1. Set up the project environment
Install Node.js and npm if you don't have them already.

Create a directory for your project:
```
mkdir placement-registration
cd placement-registration
```
Initialize a Node.js project:
```
npm init -y
```
Run this aswell in terminal:
```
npm install mysql2
```
Also need to create a database in mysql:
```
CREATE DATABASE placementregistration;
USE placementregistration;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    degree VARCHAR(100),
    year VARCHAR(100),
    university VARCHAR(100),
    skills VARCHAR(255),
    projects VARCHAR(255)
);
```
Running the Project:-

Start the MySQL server and ensure your database is up and running.
Run your Node.js server:
Run in terminal:
```
node server.js
```
After you run you will get this in terminal open it:

Open your browser and go to http://localhost:3000 to see the registration page.

After this extract the students data in Database using:
```
select * from students;
```
And ya thats it 👍


