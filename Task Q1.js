// Q1
var aj = {
    "name" : "Ajay",
    "age" : ["30","111","550"],
    "gender" : "male",
    "colors" : ["black", "red", "green"]
}

// FOR LOOP:

for (var i = 0; i < aj.colors.length; i++) {
    console.log(aj.name, "at the age of", aj.age[i], "liked",aj.colors[i],"color");
}
console.log("----------------------------------------------");

// FOR IN LOOP:
for(var b in aj){
    console.log(b,":", aj[b])
}
console.log("----------------------------------------------");

//FOR OF LOOP:

var a = ["Pirates","of","the","carriebian"]
let text = "";
for (let x of a) {
  text += x;
}
console.log(text)
console.log("----------------------------------------------");

// FOR EACH:

var b = a.forEach((arr)=>console.log(arr));


console.log("-----------------------------------------_____Q2_____----------------------------------------------------");
 // Q2
 
 
var a = {
    "Name": "Ajay",
    "Age" : "22",
    "DOB" : "02/02/2000",
    "Email" : "a@email.com",
    "Phone" : "555",
    "Qualification" : ["10th - 75%","12th - 76%","Degree - 7.5%"],
    "LanguagesKnown" : ["Tamil", "English"],
    "Skills" : ["JavaScript" ,"HTML","CSS","Python"]
}
for(var b in a){
    console.log(b,":" +a[b]);
}

// console.log(a)
