const fs = require('fs');
const mysql = require('mysql');
const inquirer = require('inquirer');



const connection = mysql.createConnection({
    host: 'localhost',
  
    port: 3306,
  
    user: 'root',
  
    password: 'Sheba1492!',
    database: 'seed_db',
  });
  


connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  startProgram ();
  
});




const startProgram = () => {
  inquirer
    .prompt({
      name: 'start',
      type: 'list',
      message: 'What would you like to do?',
      choices: ["Add department","Add employee", "Update employee", "Add role","view department", "view role", "view employee"],
      
    })
    .then((answer) => {
      console.log(answer.start);
      if(answer.start === "view employee"){
        connection.query(
            'SELECT * FROM employee',
           (err,res)=> {
             for (let i = 0; i < res.length; i++){
              console.log(`${res[i].first_name} ${res[i].last_name}`);
             }
           }
            // { song: answer.song },
            // (err, res) => {
            //   if (res[0]) {
            //     console.log(
            //       `Position: ${res[0].position} || Song: ${res[0].song} || Artist: ${res[0].artist} || Year: ${res[0].year}`
            //     );
            //   } else {
            //     console.error(`No results for ${answer.song}`);
            //   }
            //   runSearch();
            // }
          );
      } if(answer.start === "view role"){
        connection.query(
          'SELECT * FROM '
        )
      }
      
    });
};

