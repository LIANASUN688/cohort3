// define attributes / variables
// number
// string 
// boolean 
// array = [ a,b,c,d,2,4,6,8]
// dictionary / objects
// undefined:
const functions = {
    jsTypesOfinput: (prompt)=> {
    if ( prompt =[])
       return 'array';
    else if (prompt= {})
       return 'object';
    else  ( prompt === 1 )
        return (typeof prompt);
    },// sample if / else

    // functions( parameters returns)
    Sum: (para1,para1) =>{
        return para1+para2;
    },
    // arrays (add to the front, add to the end, update values)
    addTotheFrontofMyarray: ()=> {
        var  myArray = [["John", 23], ["dog", 3]];
        console.log(myArray.unshift(['paul',35]));
    },
    addTotheEndofMyarray: () =>{
        var myArray = [["John", 23], ["dog", 3]];
        console.log(myArray.push(['paul',35]));
    },

// loops (for, for/in, while, do while, forEach (with array and function)
    forLooptodos: (todos) =>{
        var todos =[ 'clean room','brush teeth', 'exercise', 'study javascript','eat healthy'];
        var todoslength = todos.length;
        For (i=0, i< todoslength, i++) 
             todos.pop();}, //clear all tasks in the array when finish and return an empty array[]
    }

    forwhileloop: () =>{
        var count1 =10;
        While (count1<10)
        console.log(count1);
        counter1++;
    }
    doWhileloop: () =>{
        var count2=10;
        do{console.log(count2);
        count2--;}
     while (count2>0);
    
    forEachfuntion:() => {
        todos.forEach(function(todos){
            console.log(todos,i);
        })
    }
     
 // Objects / Dictionaries and lookup key to retrieve value
    declareObject: () =>{
        var car = {
            "wheels":4,
            "engines":1,
            "seats":5
          }
          console.log (car.wheels)
        }
        
    }
    


// --------------- Copy ends here --------

export default functions;