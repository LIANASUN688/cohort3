// What’s my coverage - October 18 , 2019
// Run your coverage report and send the output to Larry as a pdf file. Follow these steps:

// run your coverage report: npm test -- --coverage
// look at the html file created: code/<<your repository>>/coverage/lcov-report/index.html
// view in the browser. A double click on the file should do it
// right click and select the “Print” option
// print to pdf
// email Larry the pdf (we will be doing this a few more times in the following weeks)




// More Array Work - October 16-17 



const functions = {

    // slice

    function1(){
        var greeting=" Hello World";
        return extraction.slice(0,5);
    }
// expected output: Hello: extract from str[0]-str[5] not including str[5]

    function2(){
        var greeting="Hello World";
        return extraction.slice(5);
    }
    // expected output: World: select str with no the first 5 letters = str.splice (0,5)

// splice
    function returnCutPart(){
    var str ="Hello World";
    return returnCutPart.splice(0,5)
    } 
// expected output: World.

// forEach:
function sum(){
    var sum = 0;
    var obj = {prop1: 5, prop2: 13, prop3: 8};
    foreach (var value in obj){sum += value;
    console.log(sum)}; 
    }
    // logs "26", which is 5+13+8

// map

// reduce: to sum the value of each element in string
    function sum(){
    var arr = [1,2,3,4,5];
    arr.reduce((a,b)=> a+b );
}
// expected output:15

// filter: 
    function checkAdultAge(){
    var ages =[ 19,23,45,15,16,18];
    return age >=18
}

// sort:
    function fruitOrder(){
    var fruit =[ banana, apple, mango, kiwi];
    return fruit.sort;
}
// expected output: [apple, banana, kiwi, mango]



// Prepare for Array Work - October 15, 2019
// Basics( for, while, do while)

// loops through a block of code a number of times
    function A(){
       var str = "";
       for (var i = 0; i < 9; i++) {
       str = str + i;
       console.log(str);
    }

function a(){
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var i = 0;
    var len = cars.length;
    var text = "";
    for (; i < len; i++) {
    text += cars[i] + "<br>";
    }
    }


//  loops through a block of code while a specified condition is true
    function b(){
    var str = '';
    var i = 0;
    while (i < 10 ){
      text += "<br>The number is " + i;
      i++;
    }
// loops through a block of code once, and then repeats the loop while a specified condition is true
    function c(){                                 
    var result = "";
    var i = 0;
    do {
    i = i + 1;
    result = result + i;
    }
    while (i < 5); 


// Next Level (for in, for of)
// for in: loops through the properties of an object
    function d(){
    var string1 = "";
    var object1 = {a: 1, b: 2, c: 3};
    for (var property1 in object1) {
    string1 += object1[property1];
    }
    console.log(string1);
// expected output: "123"
    }



// for/of - loops through the values of an iterable object
    function e(){
    const array1 = ['a', 'b', 'c'];

    for (const element of array1) {
    console.log(element);
    }

// expected output: "a"
// expected output: "b"
// expected output: "c"


    
    assertEquals: (p1,p2) => {
        if (p1===p2) return true;
        else if (p1!==p2) {
//         console.log(`p1--> ${p1} 
// p2--> ${p2}`);

        console.log ("p1-->" + p1 + "\n" + "\n" +
         "p2-->" + p2);
        // console.log ("p2-->" + p2);
        return false;
        }
    },

    makeEmailArr: (name) => { 
        let firstName = name[0].toLowerCase();
        let lastName = name[1].toLowerCase();
        return `${firstName}.${lastName}@evolveu.ca`;

    },
        // return firstName +"." + lastName +"@evolveu.ca" ; 
    makeEmailObj: (name) => {
        let first = name.fname.toLowerCase();
        let last = name.lname.toLowerCase();
        return `${first}.${last}@evolveu.ca`;
    }
    };



// const arr1 = ["JOHn", "pETer"];
// console.log(functions.makeEmailArr(arr1));
// const num1 = 20;
// const num2 = 25;
// console.log(functions.assertEquals(num1, num2));
// 2
export default functions;

