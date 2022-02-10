const mysql = require('mysql');
const util = require("util");

const connection = mysql.createConnection({
    host: "104.197.129.199",
    user: "root",
    database: "wave_payroll",
    password: "Rapidpass123*"
});

let db = util.promisify(connection.query).bind(connection);

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = db;
