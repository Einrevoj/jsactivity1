let result;
let title = "What is your name?";
let defaultValue = "input";
let isYourName = confirm("Is that your name?")

result = prompt(title, [defaultValue])
alert(`Hello ${result}`)
alert(isYourName)
result = confirm(question)