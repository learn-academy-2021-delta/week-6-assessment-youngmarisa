// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// declare a test function called job that takes in an array
describe ("job", () => {
  // write a test method that describes what the test will do
  // this test will eturns an array with a sentence about each person with their name capitalized.
  it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    // write an expect method
    // the function should output an array with a sentence about each person with their name capitalized
    expect (job(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})



// b) Create the function that makes the test pass.

// create a function called job that takes in an array parameter
//use .map to iterate through the array
// declare a new variable called captName that takes the name string and turns it into an array using .split(" ")
// iterate through the captName array to capitalize the zero index of each element in the array
// use .charAt(0).toUpperCase to capitalize the first character in the array and add the rest of the substring back to the new capitalized letter
// use .join to convert the captName array back to a string
// string interpolate to return a new array with a sentence about each person

const job = (array) => {
  return array.map(value => {
    let captName = value.name.split(" ")
    for (let i=0; i<captName.length; i++){
      captName[i] = captName[i].charAt(0).toUpperCase() + captName[i].substring(1)
    }
    value.name = captName.join(" ")
    return `${value.name} is ${value.occupation}.`
    })
}
job(people)






// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// declare a test function called threeArray that takes in an array
describe ("threeArray", () =>{
  // write a test method that describes what the function is testing
  // test should take in an array and return an array of only the REMAINDERS of the numbers when divided by 3.
  it ("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    // write an expect method for each input
    // expect the output to be a new array of only numbers
    expect(threeArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(threeArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

// create a function called threeArray that takes in an array parameter
// create a new variable called numArray that filter array to return only values that have a number data type
// iterate over the numArray to return each value's remainder when divided by 3

const threeArray = (array) => {
  let numArray = array.filter(value => {
    return typeof value === "number"
  })
  return numArray.map(value => value % 3)
}

threeArray(hodgepodge1)
threeArray(hodgepodge2)


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// declare a function called math that takes in an array parameter
describe ("math", () => {
  // write a test method that describes what the function is testing
  // this is will add the numbers of the array and cube the sum
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    // write an expect method for each input
    // the output should be the sum of the numbers cubed
    expect(math(cubeAndSum1)).toEqual(99)
    expect(math(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

// create a function called math that takes in array
// declare a variable called sum that maps over the array and returns a new array with each index value cubed
// use the .reduce() function on the new array to return the sum of all the elements
// reduce ((a = previous value, b = current value) => previous value + current value), 0 (starting value is 0)


const math = (array) => {
  let sum = array.map(value => value**3)
  return sum.reduce(function(a,b){
    return a+b
  }, 0)
}
