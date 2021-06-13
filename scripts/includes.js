const message = "Hello World";

//retorna true, se a string conter a palavra que se passa por parametro.
// é case sensitive, então a secunda opção não vai funcionar.
console.log(message.includes("Hello")); //true
console.log(message.includes("hello")); //false
