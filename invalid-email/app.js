let email = "bilgepanter@gmail.com";

// console.log(email.length);
// console.log(indexOf(email);
// console.log(email.search(".com"));
// console.log(email.slice(-4));

// let sonUc = email.slice(-4)

// console.log(sonUc); //!.com

// console.log(
//     sonUc.startsWith(".")
// );

// let son = email.slice(-5)

// console.log(email.includes(".com"));

const validator = function (email) {
  let emailArr = email.split("").reverse();

  if (emailArr[3] === "." || emailArr[2] === ".") {
    console.log("valid");
  } else {
    console.log("invalid");
  }
  // console.log(emailArr);
  // console.log(emailArr[3]);
  // console.log(emailArr[2]);
};

console.log(validator("a.sevket@clarusway.comando"));
console.log(validator("a.sevket@clarusway.com"));
console.log(validator("a.sevket@clarusway.co"));
console.log(validator("a.sevket@clarus.way.om"));
console.log(validator("a.sevk@clarus"));
