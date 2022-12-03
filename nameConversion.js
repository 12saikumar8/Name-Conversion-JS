
let text = document.querySelector("#text")
let cameldisp = document.querySelector("#camel-case");
let pascaldisp = document.querySelector("#pascal-case");
let snakedisp = document.querySelector("#snake-case");
let screamsnakedisp = document.querySelector("#screaming-snake-case");
let kebabdisp = document.querySelector("#kebab-case");
let screamkebabdisp = document.querySelector("#screaming-kebab-case");


function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function PascalCase(str){
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()});
}

function snakeCase(str) {
    return str && str.match(
/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(s => s.toLowerCase())
        .join('_');
}

function screamingsnakeCase(str) {
    return str && str.match(
/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(s => s.toUpperCase())
        .join('_');
}

function kebabCase(str){
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr).trim();
}

function screamingkebabCase(str){
    return str.toUpperCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr).trim();
}


function convertText(){
    const changeText = text.value
   var camelOutput = camelCase(changeText);// assinging camel case fun o/p to camel o/p variable
   cameldisp.innerHTML=camelOutput;
   
   var pascalOutput = PascalCase(changeText);//assinging pascal case fun o/p to pascal o/p variable
   pascaldisp.innerHTML=pascalOutput;

   var snakeOutput = snakeCase(changeText);//assinging pascal case fun o/p to pascal o/p variable
   snakedisp.innerHTML=snakeOutput;

   var kebabOutput = kebabCase(changeText);//assinging pascal case fun o/p to pascal o/p variable
   kebabdisp.innerHTML=kebabOutput;

   var screamsnakeOutput = screamingsnakeCase(changeText);//assinging pascal case fun o/p to pascal o/p variable
   screamsnakedisp.innerHTML=screamsnakeOutput;

   var screamkebabOutput = screamingkebabCase(changeText);//assinging pascal case fun o/p to pascal o/p variable
   screamkebabdisp.innerHTML=screamkebabOutput;

}