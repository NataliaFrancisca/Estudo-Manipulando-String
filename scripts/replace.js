
// quando encontra a palavra que passou no primeiro parametro,
// retorna ua frase com ela escondida.
const data = "This is my password";
console.log(data.replace("password", "********"));

//G é global
//com o regex e colocando o g, ele vai procurar na frase toda, e esconde todas as passwords
const secondData = 'This is my password, but I have another password';
console.log(secondData.replace(/password/g, "********"));

const CPF = "12345678910";
const CPFFormatado = CPF.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");

const RG = "123456789";
const RGFormatado = RG.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{1})/, "$1.$2.$3-$4");

console.log(CPFFormatado);
console.log(RGFormatado);

