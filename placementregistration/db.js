const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Your MySQL username
    password: "", // Your MySQL password
    database: "placementregistration"
});

db.connect(err => {
    if (err) {
        console.error("Database connection error:", err);
        return;
    }
    console.log("Connected to MySQL database.");
});

module.exports = db;
