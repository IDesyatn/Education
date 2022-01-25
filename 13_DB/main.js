const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "city",
  password: "1234"
});


connection.connect(function(err){
    if (err) {
      return console.error("Error: " + err.message);
    }
    else{
      console.log("Connection established");
    }
 });


// 1) count of residents
connection.execute("SELECT COUNT(IdPerson) as countResidents FROM person",
    function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
        }
    });


// 2) average age
connection.execute("SELECT AVG(Age) as averageAge FROM person",
    function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
        }
    });


// 3) list of surnames without repetitions alphabetically
connection.execute("SELECT DISTINCT LastName FROM person ORDER BY LastName",
    function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
        }
    });

// 4) list of surnames, indicating the number of repetitions of these surnames
connection.execute("SELECT DISTINCT LastName, COUNT(LastName) AS count FROM person GROUP BY LastName ORDER BY LastName",
    function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
        }
    });

//5) last names that contain the letter "b" in the middle
connection.execute("SELECT LastName FROM person WHERE LastName LIKE '%b%' ",
    function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
        }
    });

//6) list of "homeless"
connection.execute("SELECT LastName, FirstName FROM person WHERE IdStreet IS 'null' ",
    function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
        }
    });


  connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});