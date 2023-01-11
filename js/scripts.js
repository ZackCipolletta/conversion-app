//window.onload = function() {



function poundToOz(orignal) {
  converted = orignal * 16;
    let originalMeasure = orignal;
    return originalMeasure + " pounds is " + converted + " ounces.";
}

function ozToGram(orignal) {
  converted = orignal * 28.3495;
  let originalMeasure = orignal;
  return originalMeasure + " ounces is " + converted + " grams.";
}

function poundToGram(orignal) {
  converted = orignal * 453.592;
  let originalMeasure = orignal;
  return originalMeasure + " pounds is " + converted + " grams.";
}

function tspToTbsp(orignal) {
  converted = orignal * 0.333333;
  let originalMeasure = orignal;
  return originalMeasure + " teaspons is " + converted + " tablespoons.";
}

function tspToMls(orignal) {
  converted = orignal * 4.92892;
  let originalMeasure = orignal;
  return originalMeasure + " teaspons is " + converted + " milliliters.";
}

function tbsToMls(orignal) {
  converted = orignal * 14.7868;
  let originalMeasure = orignal;
  return originalMeasure + " tabllespoons is " + converted + ".";
}

let body= document.body;
//.style.background;

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
let h1 = document.querySelector(".class1");
const normal = document.querySelector(".normal");
const xLarge = document.querySelector(".xLarge");


const ounceToLb = document.querySelector(".ozToPound");

const ozToPound = function (orignal) {
  //converted = orignal * 0.0625;
  //let originalMeasure = orignal;
  console.log('hello');
  //return originalMeasure + " ounces is " + converted + " pounds.";
}

ounceToLb.onclick = ozToPound();


h1.onclick = function() {
  console.log("Hello");
};


button1.onclick = function() {
  console.log("hello Hernan!")
  body.style.background="black";
  body.style.color = "white";
};

button2.onclick = function() {
  console.log("hello Hernan!")
  body.style.background="white";
  body.style.color = "black";
};

normal.onclick = function() {
  console.log("Normal size text")
  body.style.fontSize="medium";
};

xLarge.onclick = function() {
  console.log("X-Large text")
  body.style.fontSize="x-large";
};



//}
