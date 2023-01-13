/* 

    PRACTICE: FILLING THE TANK 

    You have some starter code provided. It's a blank function that 
    defines the task of filling your car up with gas. You can see that 
    the minion will let you know that it filled up the car with gas, 
    but you need to tell it how much gas you want put into the tank.

const fillGasTank = () => {
    console.log(`I filled the tank with ${gallons} of gas`)
}

fillGasTank(15)

*/ 

/* 

Since the minion needs information from you to do its job, you need 
to define the parameter of gallons inside the parenthesis. When you 
do that successfully, run the code and the minion will let you know 
when it completes the task.

*/ 

// const fillGasTank = (gallons) => {
//     console.log(`I filled the tank with ${gallons} of gas`)
// }

// fillGasTank(15)

/* 

Now change the argument value. It is currently 15. Change it to any 
other number and see how the behavior of the function changes when the 
argument does.

*/ 

// fillGasTank(20)

/* 

    PRACTICE: AVOID SPILLAGE 

    Now modify the instructions for the task. Use an if..else block of 
    code to prevent the function from filling up the gas tank if the value 
    of the parameter is greater than 15. If it is greater, log the following 
    message to the console. 
    
    "You cannot add this much gas to the tank"

*/ 

// const fillGas = (gallons) => {
//     if (gallons > 15) {
//         console.log("You cannot add this much gas to the tank")
//     } 

// }

/*

    Nothing is console logged when we call the function with an argument of 15 
    because we only want the function to console.log something if too much gas is filled. 
    
*/ 

// fillGas(15) 

/* 

    When the argument is changed to 16, or anything above 15, we will see 
    "You cannot add this much gas to the tank" logged to the console. 

*/ 

// fillGas(16)


/* 

    If we want the function to say something to us when we've filled the 
    tank with less than 15 gallons, we can can add another considtion to the if... 
    statement inside the function body. If it is less than 15, log the following 
    message to the console. 
    
    "I filled the tank with ${gallons} of gas" 

*/ 


const fillGas = (gallons) => {
    if (gallons > 15) {
        console.log("You cannot add this much gas to the tank")
    } else if (gallons < 15) {
        console.log(`I filled the tank with ${gallons} of gas`)
    }

}

fillGas(11) // Should console log "I filled the tahnk with 11 of gas"
fillGas(29) // Should console log "You cannot add this much gas to the tank"