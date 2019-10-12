// /*	
// 	Write the function that will create this output:
import functions from './daily'

test('testing function', () => {
    expect(functions.assertEquals(1,1)).toBe(true);
    expect(functions.assertEquals(2,3)).toBe(false);
    expect(functions.assertEquals("2",2)).toBe(false);
});


// *** the two values are not the same:
//     p1--> a
//     p2--> b
//     a!==b
// *** the two
//  values are not the same:
//     p1--> 1
//     p2--> 2

// *** the two values are not the same:
//     p1--> 2
//     p2--> 2
// */

// Write the function after this comment ---

// import functions from './daily'

// test('testing add function', () => {
//     expect(functions.add(1,1)).toBe(2);
//     expect( function.) 
// });


test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});


test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

