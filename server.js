import mysql from 'mysql'
import inquirer from "inquirer"
import Department from "./lib/department.js"
import Employee from "./lib/employee.js"
import Role from "./lib/role.js"


let isOver = false
while(!isOver) {

    const connection = mysql.createConnection({
        host     : 'localhost', 
        user     : 'Spragbry', //Spragbry@localhost
        password : 'RicoKatochaz123',
        database : 'my_db'
      });
       
      connection.connect();

      let answers = await inquirer.prompt([
    {
        type: "list",
        name: "question_1",
        message: "would you like to add more info for the department, employee, or role position?",
        choices: ["department", "role", "employee"]
    },
  ])
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
    let answers2 = await inquirer.prompt(questions)
           if(answers2["question_2"]) {
               const id = answers2["question_2"]
               const name = answers2["question_3"]
               const depo = new Department(id, name)
               console.log("department",name)
               console.log("department", id)
               connection.query(`INSERT INTO department (${depo.getId()},${depo.getName()});`, function (error, results, fields) {
                if (error) throw error;
                console.log('The resulting table is: ', results);
              });
           } else if(answers2["question_4"]) {
                const id = answers2["question_4"]
                const first_name = answers2["quesiton_5"]
                const last_name = answers2["question_6"]
                const role_id = answers2["question_7"]
                const manager_id = answers2["question_8"]
                const employee = new Employee(id, first_name, last_name, role_id, manager_id)
                connection.query(`INSERT INTO employee (${employee.getId()},${employee.getFirstName()},${employee.getlastName()},${employee.getRoleId()},${employee.getManagerId()});`, function (error, results, fields) {})
           } else {
               const id = answers2["question_9"]
               const title = answers2["question_10"]
               const salary = answers2["question_11"]
               const departmentId = answers2["question_12"]
               const role = new Role(id, title, salary, department_id)
                connection.query(`INSERT INTO role (${role.getId()},${role.getTitle()},${role.getSalary()},${employee.getDepartmentId()});`, function (error, results, fields) {
                    if (error) throw error;
                    console.log('The resulting table is: ', results);
               })
           }
                    
    }
