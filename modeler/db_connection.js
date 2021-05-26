var mysql = require('mysql');

// connecting to the db
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "userregistration"
  });

con.connect((err)=>{
    if(err) {
      console.log('Please check your db connection...');
      throw err;
    }
});

module.exports = con; 