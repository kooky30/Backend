const mysql = require('mysql2');
//offline
// const db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'prelim',
// });
//online
const db = mysql.createConnection({
	host: 'sql6.freemysqlhosting.net',
	user: 'sql6686676',
	password: 'g9XuwEtJBl',
	database: 'sql6686676',
});


db.connect((err) => {

        if (err) {
            console.error('Error connecting to MySQL:', err)
        } else {
            console.log('Connected to MySQL');
        }
});

module.exports = db;