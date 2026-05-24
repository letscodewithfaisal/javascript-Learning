// Loops

// For loops -> if you know how many times you want to loop through something

// for (let i = 1; i<=10; i++) {
//     console.log('faisal' + i)
// }

/*
while -> if you don't know how many times you want to loop through something

*/

// let ip = 0
// let house = 50

// while (ip != house) {
   
//    ip = ip + 1;
//     console.log('step Taken' + ip)

// }

//DO WHile Loops -> it will run out at Least once , IT RUN CODE FIRST THEN CHECK CODE

// for example Guess the input

 let number = 40;
 let guess = 0;

 do {
    guess = parseInt(prompt('Guess the number'))
    if (guess == number) {
        
        alert('winner')
        break;
    }
 } while (guess !=0)