let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
let newArry = [];
//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
newArry = holdCabinet1.concat(holdCabinet2);
// holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet1);
console.log(newArry);

console.log(holdCabinet2);
//b) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(1,3));
console.log(holdCabinet1);
console.log(holdCabinet2.slice(2,4));
console.log(holdCabinet2);

//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

console.log("reverse me: "+holdCabinet1.reverse());

console.log(holdCabinet1);

console.log("sort me: "+holdCabinet2.sort());
console.log(holdCabinet2);
//Yes orignal orignal arrays have been altered