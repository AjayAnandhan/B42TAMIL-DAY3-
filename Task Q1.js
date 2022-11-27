var aj = {
    "name" : "Ajay",
    "age" : ["30","111","550"],
    "gender" : "male",
    "colors" : ["black", "red", "green"]
}

// // FOR LOOP:

for (var i = 0; i < aj.colors.length; i++) {
    console.log(aj.name, "at the age of", aj.age[i], "liked",aj.colors[i],"color");
}
console.log("----------------------------------------------");

// // FOR IN LOOP:
for(var b in aj){
    console.log(b,":", aj[b])
}
console.log("----------------------------------------------");

// //FOR OF LOOP:

for(let obj of aj){
    console.log(obj.colors)
}
console.log("----------------------------------------------");