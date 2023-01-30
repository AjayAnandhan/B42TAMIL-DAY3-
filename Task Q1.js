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
