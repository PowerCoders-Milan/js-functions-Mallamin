// define a function that will check if I can vote or not
const canIVote = age => {
    // define a variable legalAge
     const legalAge=18
 
    // create if else statement that console.log() if you can vote or not
    if (myAge>=legalAge) {
         console.log("You can vote")
        
    } else {
        console.log("You can't vote for now.")
        
    }
}

// define a variable for your age
   let myAge=12

// call the function and see if you can vote
  canIVote()
