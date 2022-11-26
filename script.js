var a;
a = {
  name: "Ajay",
  age: 22,
};
console.log(a);

// TO PRINT PERTICULAR VALUE:

var a = {
  name: "Ajay",
  age: 22,
};
console.log(a.name);

// TO ADD NEW OBJECT:
var a = {
  name: "Ajay",
  age: 22,
};
a.gender = "Male";
console.log(a);

// ARRAY INSIDE THE OBJECT:
var a = {
  name: "Ajay",
  age: 22,
  colors: ["red", "black", "green"],
};
a.gender = "Male";
console.log(a);

// TO PRINT THE VALUE OF ARRAY:
var a = {
  name: "Ajay",
  age: 22,
  colors: ["red", "black", "green"],
};
for (var i = 0; i < a.colors.length; i++) {
  console.log(a.colors[i]);
}

//OR

var a = {
  name: "Ajay",
  age: 22,
  colors: ["red", "black", "green"],
};
for (var i in a.colors) {
  console.log(a.colors[i]);
}

//TO PRINT THE ARRAY KEY WITH VALUE

var a = {
  name: "Ajay",
  age: 22,
  colors: ["red", "black", "green"],
};
for (var i in a.colors) {
  console.log(i, a.colors[i]);
}

//JSON: JavaScript Object Notation

var a = {
  name: " Ajay",
  age: "22",
  colors: ["red", "black", "green"],
};
console.log(a);

// OBJECT INSIDE OF ARRAY;

var a = [
  {
    name: "Ajay",
    age: "22",
  },
  {
    name: "jhon",
    age: "32",
  },
  {
    name: "Vijay",
    age: "25",
  },
  {
    name: "Akash",
    age: "20",
  },
];
for(var i=0;i<a.length;i++){
    console.log(a[i].name, + ": " + a[i].age)
}


// HOISTING: THIS IS MISTAKE DEVELOPERS
console.log(a);
var a = (10);
var b = (5);
console.log(b);

// COPY BY VALUE;

var a = 10;
var b = a;
a = 15;
console.log(a);

// COPY BY REFERENCE;
var a = [5,6,7,8];
var b = a;
b[0] = 12;
console.log(a)