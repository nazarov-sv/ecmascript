let str = "String";

console.log("|"+str.padStart(10)+"|");
console.log("|"+str.padStart(15)+"|"); 
console.log("|"+str.padStart(13,'0')+"|"); 
console.log("|"+str.padEnd(12)+"|"); 
console.log("|"+str.padEnd(15)+"|"); 
console.log("|"+str.padEnd(13,'0')+"|"); 
// |    String|
// |         String|
// |0000000String|
// |String      |
// |String         |
// |String0000000|