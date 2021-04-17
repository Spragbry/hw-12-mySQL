const mysql = require('mysql')
const inquirer = require("inquirer")
import Deparment from "./lib/department"
import Employee from "./lib/employee"
import Role from "./lib/role"

inquirer.prompt([
    {
        type: "list",
        name: "question_1",
        message: "would you like to add more info for the department, employee, or role position?",
        choices: ["department", "role", "employee"]
    },
  ])
  .then(answers => {
    let questions = []
    const choice = answers["question_1"]
    if(choice === "department") {
        questions = [{
            type: "input",
            name: "question_2",
            message: "What is your ID?",
            default: "1"
        },
        {
            type: "input",
            name: "question_3",
            message: "What is your name?",
            default: ""
        }]
    } else if(choice === "employee") {
        questions = [{
            type: "input",
            name: "question_4",
            message: "What is your ID?",
            default: "1"
        },
        {
            type: "input",
            name: "question_5",
            message: "What is your first name?",
            default: ""
        },
        {
            type: "input",
            name: "question_6",
            message: "What is your last name?",
            default: ""
        },
        {
            type: "input",
            name: "question_7",
            message: "What is your role ID?",
            default: "1"
        },
        {
            type: "input",
            name: "question_8",
            message: "What is your manager ID?",
            default: "1"
        }]
        
    } else {
        questions = [{
            type: "input",
            name: "question_9",
            message: "What is your manager ID?",
            default: "1"
        },
        {
            type: "input",
            name: "question_10",
            message: "What is your Title?",
            default: ""
        },
        {
            type: "input",
            name: "question_11",
            message: "What is your salary?",
            default: "0"
        },
        {
            type: "input",
            name: "question_12",
            message: "What is your department ID",
            default: "1"
        }]
    }
    inquirer.prompt(questions)
        .then(answers2 => {
           if(answers2["question_2"]) {
               const id = answers2["question_2"]
               const name = answers2["question_3"]
           }else if(answers2["question_4"]) {
                const id = answers2["question_4"]
                const first_name = answers2["quesiton_5"]
                const last_name = answers2["question_6"]
                const role_id = answers2["question_7"]
                const manager_id = answers2["question_8"]
           }else (answers2["question_9"]) {
               const id = answers2["question_9"]
               const title = answers2["question_10"]
               const salary = answers2["question_11"]
               const departmentId = answers2["question_12"]
           }
        }).catch(err => {

        })
}).catch(err => {

})
const connection = mysql.createConnection({
  host     : 'localhost', 
  user     : 'Spragbry', //Spragbry@localhost
  password : 'RicoKatochaz123',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();