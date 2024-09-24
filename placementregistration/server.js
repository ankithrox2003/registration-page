const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');
const querystring = require('querystring');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ankithrox123$', // Use your MySQL password here
    database: 'placementregistration' // Replace with your database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Create the server
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Serve the HTML registration form
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'views', 'index.html'), (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf8');
            });
        } else if (req.url.startsWith('/css/style.css')) {
            fs.readFile(path.join(__dirname, 'public', 'css', 'style.css'), (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(content, 'utf8');
            });
        }
    }

    // Handle form submission (POST request)
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            // Parse the form data
            const postData = querystring.parse(body);
            const { name, age, degree, year, university, skills, projects } = postData;

            // Insert form data into MySQL database
            const query = "INSERT INTO students (name, age, degree, year, university, skills, projects) VALUES (?, ?, ?, ?, ?, ?, ?)";
            connection.query(query, [name, age, degree, year, university, skills, projects], (err, result) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Registration successful!');
            });
        });
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
