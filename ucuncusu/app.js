A = [12, 114, 16, 9]; 
B = [11, 13, 17];


var c = A.concat(B);
console.log(c.sort((a, b) => b - a));