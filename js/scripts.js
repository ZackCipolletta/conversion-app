window.onload = function() {

function ozToPound(orignal) {
    converted = orignal * 0.0625;
    let originalMeasure = orignal;
    return originalMeasure + " ounces is " + converted + " pounds of rice.";
}

function poundToOz(orignal) {
  converted = orignal * 16;
    let originalMeasure = orignal;
    return originalMeasure + " pounds is " + converted + " ounces of rice.";
}

function ozToGram(orignal) {
  converted = orignal * 28.3495;
  let originalMeasure = orignal;
  return originalMeasure + " ounces is " + converted + " grams of rice.";
}

function poundToGram(orignal) {
  converted = orignal * 453.592;
  let originalMeasure = orignal;
  return originalMeasure + " pounds is " + converted + " grams of rice.";
}

function tspToTbsp(orignal) {
  converted = orignal * 0.333333;
  let originalMeasure = orignal;
  return originalMeasure + " teaspons is " + converted + " tablespoons of water.";
}

function tspToMls(orignal) {
  converted = orignal * 4.92892;
  let originalMeasure = orignal;
  return originalMeasure + " teaspons is " + converted + " milliliters of water.";
}

function tbsToMls(orignal) {
  converted = orignal * 14.7868;
  let originalMeasure = orignal;
  return originalMeasure + " tabllespoons is " + converted + " milliliters of water.";
}

let body= document.body;
//.style.background;

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let h1 = document.querySelector(".class1");

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


}
