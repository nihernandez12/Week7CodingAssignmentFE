

/*  1. Create an array called ages that contains the following values:
         3, 9, 23, 64, 2, 8, 28, 93.

    a. Programmatically subtract the value of the first element in 
        the array from the value in the last element of the array.
        Do not use numbers to reference the last element, find it 
        programmatically.
        ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to
     ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the
     average age. */

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Now we will print the array.
console.log("Number 1. Ages array: " + ages);

//1.a. Subtraction of last element and first element.
console.log("Number 1a. Subtracting the last element and the first element in the ages array equals: " + (ages[ages.length - 1] - ages[0]));

//1.b Adding a new age to the array and then subtracting from first element
ages.push(75);
console.log("Number 1b. The new number added to the ages array is: " + ages);

console.log("Number 1b. Subtracting the new number and the first element of the array equals: " + (ages[ages.length - 1] - ages[0]));

//1.c Using a loop to iterate through the array and calculate the average age
let sum = 0;
for(let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("Number 1c. The average of all the ages is " + averageAge);


/* 2. Create an array called names that contains the following
     values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

    a. Use a loop to iterate through the array and calculate the 
    average number of letters per name.
     b. Use a loop to iterate through the array again and concatenate
      all the names together, separated by spaces. */

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log("Number 2. New array of names is " + names);

//2.a Use a loop to iterate through and calculate average # of letters per name

let add = 0;
for(let i = 0; i < names.length; i++) {
    add += names[i].length;
}
let averageLetters = add / names.length;
console.log("Number 2a. The average number of letters in the names array is: " + averageLetters);

//2.b Use a loop to iterate through and concatenate all names together with spaces
for(let i = 0; i < names.length; i++) {
console.log("Number 2b. The names array with spaces between each name: " + names.join(' '));
}

// 3. How do you access the last element of any array?

/* You can access the last element of any array by putting the name of 
the array and then [] with .length at the end of the array name 
and then subtracting by 1.  See example below*/

console.log("Number 3. The last element in the names array is: " + names [names.length - 1]);

// 4. How do you access the first element of any array?

/* You can access the first element of any array by putting the array name
and then [0] after it. See the example below*/

console.log("Number 4. The first element in the names array is: " + names[0]);

/* 5. Create a new array called nameLengths. Write a loop to iterate
 over the previously created names array and add the length of each
  name to the nameLengths array.

For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array */

// New array called nameLengths
let nameLengths = [];

// Loop to add number of letters per name to new array
for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}

console.log("Number 5. New Array with numbers of letters per name from names array: " + nameLengths);


// 6. Write a loop to iterate over the nameLengths array and 
//  calculate the sum of all the elements in the array.

plus = 0;
for( let i = 0; i < nameLengths.length; i++) {
    plus += nameLengths[i];
}
console.log("Number 6. The total sum of all the elements in the nameLengths array is: " + plus);

// 7. Write a function that takes two parameters, word and n, as arguments
// and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 
//'HelloHelloHello').

function together (word, n) {
    let together = word.repeat(n);
    console.log("Number 7. Saying Hey 5 times: " + together);
}
    together("Hey", 5);

// 8. Write a function that takes two parameters, firstName and lastName,
// and returns a full name. The full name should be the first and the 
// last name separated by a space.

function fullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}
    console.log("Number 8. The full name is: " + fullName("Cesar", "Hernandez"));

// 9. Write a function that takes an array of numbers and returns true 
// if the sum of all the numbers in the array is greater than 100.

function addition (array) {
    if(sum > 100) {
        return true;
    }
    return false;
}
console.log("Number 9. The ages array sum is greater than 100: " + addition(ages));

// 10. Write a function that takes an array of numbers and returns the
// average of all the elements in the array.

let newArray = [23, 45, 11, 82];


function average (array) {
   let num = 0;
    for(let i = 0; i < newArray.length; i++) {
      num += newArray[i];  //This gets the sum of the numbers in the array added together.
    }
      let avg = num / newArray.length; //This gets the average by taking the sum and dividing by the total number of elements in the array.
    return avg;
    
}
console.log("Number 10. The average of the new array numbers is: " + average(newArray));

// 11. Write a function that takes two arrays of numbers and returns true
// if the average of the elements in the first array is greater than the
// average of the elements in the second array.

function whichArrayIsGreater (array1, array2) {
    let total = 0;
    for(let i = 0; i < array1.length; i++) {
        total += array1[i]; //This gets the total sum of the numbers in the frist array
    }
    let total2 = 0;
    for(let i = 0; i < array2.length; i++) {
        total2 += array2[i]; // This gets the total sum of the numbers in the second array
    }
    if (total / array1.length > total2 / array2.length) { // This gets the averages of both arrays and compares if array 1 is greater than array 2.
        return true; //If array 1 average is greater than the average of array 2, it will return true.
    }
    return false;
}
console.log("Number 11. The average of the first array is greater than the second array: " + whichArrayIsGreater(newArray, ages));


// 12. Write a function called willBuyDrink that takes a boolean isHotOutside,
// and a number moneyInPocket, and returns true if it is hot outside and 
// if moneyInPocket is greater than 10.50.


function willBuyDrink (isHotOutside, moneyInPocket) {
    if(isHotOutside = true && moneyInPocket > 10.50) {
        return true;
    }
    return false;
}

console.log("Number 12. The fucntion willBuyDrink comes back as: " + willBuyDrink(true, 12.18));

// 13. Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.

function canIBuy (checkOutPrice, moneyIHave){

    if(checkOutPrice < moneyIHave) {
        return "I will buy it!";
    }
        return "I do not have enough money right now. I will save some more and come back soon.";
    }
    console.log("Number 13. I went to the store and at the checkout, I decided that " + canIBuy(32.50, 52.75));
/* I created a function that will look at how much the total cost of the 
checkout price is and compare it to the client's total amount of money they have 
with them. If the total amount of money that they have with them is more than
what the total amount is at checkout, they will continue with buying the item(s). 
If the total amount of money in the pocket is less than the total amount at the checkout,
then they will not buy the items.*/