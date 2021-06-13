const message = "Hello World";

//retorna um sub array com as letras depois do número que é passado.
console.log(message.slice(2)); //llo World
console.log(message.slice(6)); // World

//números negativos vão retornar as letras contanto do final.
console.log(message.slice(-2)); // ld
console.log(message.slice(-4)); // orld