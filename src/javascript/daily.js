
const functions = {
    
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
// export default functions;
  
