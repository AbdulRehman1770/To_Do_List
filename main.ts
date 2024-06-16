import inquirer from "inquirer"

let ToDo_List : string[] = [];
let condition = true;

while(condition){
let Activity = await inquirer.prompt({
    name : "Task",
    message : "Enter You Task",
    type : "input"
})

ToDo_List.push(Activity.Task);
console.log(`${Activity.Task} Task SuccessFully Added In Your List1`);

let confirm = await inquirer.prompt({
    name : "cfrm",
    type : "confirm",
    message : "Do You Want To Add More Task",
    default : "False"
})

condition = confirm.cfrm; }

console.log(`Your Task in To Do List is ${ToDo_List.join(" , ")}`);

