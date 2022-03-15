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
function task1() {
    connection.execute("SELECT COUNT(IdPerson) as countResidents FROM person",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task1:');
                console.log(results);
            }
        });
}


// 2) average age
function task2() {
    connection.execute("SELECT AVG(Age) as averageAge FROM person",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task2:');
                console.log(results);
            }
        });
}


// 3) list of surnames without repetitions alphabetically
function task3() {
    connection.execute("SELECT DISTINCT LastName FROM person ORDER BY LastName",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task3:');
                console.log(results);
            }
        });
}


// 4) list of surnames, indicating the number of repetitions of these surnames
function task4() {
    connection.execute("SELECT DISTINCT LastName, COUNT(LastName) AS count FROM person GROUP BY LastName ORDER BY LastName",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task4:');
                console.log(results);
            }
        });
}


//5) last names that contain the letter "b" in the middle
function task5() {
    connection.execute("SELECT LastName FROM person WHERE LastName LIKE '%b%' ",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task5:');
                console.log(results);
            }
        });
}


//6) list of "homeless"
function task6() {
    connection.execute("SELECT LastName, FirstName FROM person WHERE IdStreet IS NUll ",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task6:');
                console.log(results);
            }
        });
}


//7)list of minors living on Pravda Avenue
function task7() {
    connection.execute("SELECT LastName, FirstName, Age FROM person WHERE IdStreet = 1 AND Age < 18",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task7:');
                console.log(results);
            }
        });
}

//8)an alphabetically ordered list of all streets, indicating how many residents live on the street
function task8() {
    connection.execute("SELECT street.name , (SELECT COUNT(*) FROM person WHERE IdStreet IS NOT NULL AND person.IdStreet=street.Id)AS residents FROM street ORDER BY street.name",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task8:');
                console.log(results);
            }
        });
}

    //SELECT Name FROM street ORDER BY Name,

//9) list of streets whose name consists of 6 letters
function task9() {
    connection.execute("SELECT Name FROM street WHERE CHAR_LENGTH(Name) = 6",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task9:');
                console.log(results);
            }
        });
}


//10) list of streets with less than 3 residents.
function task10() {
    connection.execute("SELECT street.name, (SELECT COUNT(*) FROM person WHERE person.IdStreet=street.id ) AS residents FROM street HAVING residents >= 3 ORDER BY street.name",
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('task10:');
                console.log(results);
            }
        });
}


//task1();
//task2();
//task3(); 
//task4();
//task5(); 
//task6();
//task7(); 
//task8();
//task9(); 
//task10();

  connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});