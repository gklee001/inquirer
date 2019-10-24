// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");
inquirer
    .prompt([
        {
            //basic input
            type: "input",
            message: "What is your favorite color?",
            name: "color"
        },
        // Password
        {
            type: "password",
            message: "Setup your password",
            name: "password"
        },
        //list
        {
            type: "list",
            message: "which animal best represents you",
            choices: ["stray cat", "dog of war", "snake",],
            name: "animal",
        },
        //checkbox
        {
            type: "checkbox",
            message: "how old are you",
            choices: ["10-18", "19-24", "25-30", "31-55"],
            name: "age"
        },
        //and confirm
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        }

    ])
    .then(function (inquirerResponse) {
        if (inquirerResponse.confirm) {
            console.log("\nWelcome " + inquirerResponse.color);
            console.log("Your spirit animal is " + inquirerResponse.animal);
            console.log("Your age is between" + inquirerResponse.age);
        }
    });

