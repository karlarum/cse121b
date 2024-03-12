let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

//create an array named namesB with only those names from the name array that start with the character 'B'
// use array.filter()
let namesB = names.filter(name => name.charAt(0) === "B");

//create a new array named namesLength that contains the length of each name in the names array. Expected output is [5, 8, 5, 8, 3].
//use array.map
let nameLength = names.map((name) => name.length);

//create an expression that returns the average string length of the names in the names array. Expected output is 5.8.
//use array.reduce
names.reduce((total, name) => total + name.length, 0) / names.length;

