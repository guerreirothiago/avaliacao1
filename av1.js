/* Operador Ternário */
// Crie um código que receba dois números e verifique se a soma deles é maior que 20
let num1 = 15;
let num2 = 10;
let soma = num1 + num2;

if (soma > 20) {
    console.log("A soma dos números é maior que 20.");
} else {
    console.log("A soma dos números não é maior que 20.");
}

// Desenvolva um programa que calcule a média de três notas e verifique se o aluno foi aprovado (média maior ou igual a 7).
let nota1 = 8;
let nota2 = 6;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("O aluno foi aprovado.");
} else {
    console.log("O aluno não foi aprovado.");
}

// Escreva um código que verifique se um número é par e maior que 10 ao mesmo tempo.
let numero = 12;

console.log(numero % 2 === 0 && numero > 10 ? "O número é par e maior que 10." : "O número não é par ou não é maior que 10.");

// Crie uma lógica que receba um número e verifique se ele está entre 50 e 100.
let valor = 75;
console.log(valor >= 50 && valor <= 100 ? "O número está entre 50 e 100." : "O número não está entre 50 e 100.");

// Faça um programa que calcule o dobro de um número e verifique se o resultado é menor que 30.
let numero3 = 10;
let dobro = numero3 * 2;
console.log(dobro < 30 ? "O dobro do número é menor que 30." : "O dobro do número não é menor que 30.");

// Desenvolva um código que compare dois números e informe se eles são exatamente iguais (valor e tipo).
let num4 = 5;
let num5 = 5;
console.log(num4 === num5 ? "Os números são exatamente iguais." : "Os números não são exatamente iguais.");

// Crie um programa que verifique se uma pessoa pode votar (idade maior ou igual a 16).
let idade = 18;
console.log(idade >= 16 ? "A pessoa pode votar." : "A pessoa não pode votar.");

// Escreva uma lógica que calcule o resto da divisão de dois números e verifique se o resultado é zero.
let dividendo = 10;
let divisor = 5;
let resto = dividendo % divisor;
console.log(resto === 0 ? "O resto da divisão é zero." : "O resto da divisão não é zero.");

// Faça um código que receba dois valores e verifique se pelo menos um deles é maior que 100.
let valor1 = 50;
let valor2 = 150;
console.log(valor1 > 100 || valor2 > 100 ? "Pelo menos um dos valores é maior que 100." : "Nenhum dos valores é maior que 100.");

// Crie um programa que calcule a potência de um número elevado a outro e verifique se o resultado é maior que 1000.
let base = 5;
let expoente = 4;
let potencia = Math.pow(base, expoente);
console.log(potencia > 1000 ? "O resultado da potência é maior que 1000." : "O resultado da potência não é maior que 1000.");

// Desenvolva uma lógica que verifique se um número é negativo ou positivo.
let numero2 = -3;
console.log(numero2 >= 0 ? "O número é positivo." : "O número é negativo.");

// Escreva um programa que calcule a soma de dois números e verifique se o resultado é par.
let num6 = 7;
let num7 = 3;
let soma2 = num6 + num7;
console.log(soma2 % 2 === 0 ? "A soma dos números é par." : "A soma dos números é ímpar.");

// Crie um código que verifique se um número não é igual a 0.
let numero4 = 5;
console.log(numero4 !== 0 ? "O número não é igual a 0." : "O número é igual a 0.");

// Faça um programa que receba a idade de uma pessoa e verifique se ela é maior de idade e possui mais de 60 anos (idoso).
let idade2 = 65;
console.log(idade2 >= 18 && idade2 > 60 ? "A pessoa é maior de idade e idosa." : "A pessoa não é maior de idade ou não é idosa.");

// Desenvolva uma lógica que calcule o valor total de uma compra (quantidade × preço) e verifique se ultrapassa 500.
let quantidade = 10;
let preco = 60;
let totalCompra = quantidade * preco;
console.log(totalCompra > 500 ? "O valor total da compra ultrapassa 500." : "O valor total da compra não ultrapassa 500.");

// Crie um código que verifique se um número está fora do intervalo entre 10 e 20.
let numero5 = 25;
console.log(numero5 < 10 || numero5 > 20 ? "O número está fora do intervalo entre 10 e 20." : "O número está dentro do intervalo entre 10 e 20.");

// Escreva um programa que receba dois números e verifique se o primeiro é múltiplo do segundo.
let num8 = 12;
let num9 = 4;
console.log(num8 % num9 === 0 ? "O primeiro número é múltiplo do segundo." : "O primeiro número não é múltiplo do segundo.");

// Desenvolva uma lógica que calcule a diferença entre dois números e verifique se ela é maior que 10.
let num10 = 20;
let num11 = 5;
let diferenca = Math.abs(num10 - num11);
console.log(diferenca > 10 ? "A diferença entre os números é maior que 10." : "A diferença entre os números não é maior que 10.");

// Crie um programa que verifique se uma pessoa pode dirigir (idade maior ou igual a 18 e possuir habilitação).
let idade3 = 20;
let possuiHabilitacao = true;
console.log(idade3 >= 18 && possuiHabilitacao ? "A pessoa pode dirigir." : "A pessoa não pode dirigir.");

// Faça um código que receba três números e verifique se pelo menos dois deles são iguais.
let num12 = 5;
let num13 = 5;
let num14 = 10;
console.log(num12 === num13 || num12 === num14 || num13 === num14 ? "Pelo menos dois números são iguais." : "Nenhum dos números é igual.");

// Crie um programa com atribuição de dois números, calcule a divisão e verifique se o resultado é maior que 1.
let num15 = 10;
let num16 = 5;
let divisao = num15 / num16;
console.log(divisao > 1 ? "O resultado da divisão é maior que 1." : "O resultado da divisão não é maior que 1.");

// Desenvolva uma lógica com atribuição de um número e verifique se ele é ímpar ou múltiplo de 5.
let numero6 = 15;
console.log(numero6 % 2 !== 0 || numero6 % 5 === 0 ? "O número é ímpar ou múltiplo de 5." : "O número não é ímpar nem múltiplo de 5.");

// Escreva um código com atribuição de um número e verifique se está entre 0–10 ou entre 20–30.
let numero7 = 25;
console.log((numero7 >= 0 && numero7 <= 10) || (numero7 >= 20 && numero7 <= 30) ? "O número está entre 0–10 ou entre 20–30." : "O número não está entre 0–10 nem entre 20–30.");

// Crie um programa com atribuição de um número, calcule o quadrado e verifique se é maior que 50.
let numero8 = 8;
let quadrado = Math.pow(numero8, 2);
console.log(quadrado > 50 ? "O quadrado do número é maior que 50." : "O quadrado do número não é maior que 50.");

// Desenvolva uma lógica com atribuição de dois números e verifique se são diferentes e ambos maiores que 0.
let num17 = 5;
let num18 = 10;
console.log(num17 !== num18 && num17 > 0 && num18 > 0 ? "Os números são diferentes e ambos maiores que 0." : "Os números não são diferentes ou um deles não é maior que 0.");

// Escreva um código com atribuição de um número e verifique se ele é divisível por 3 e por 4.
let numero9 = 12;
console.log(numero9 % 3 === 0 && numero9 % 4 === 0 ? "O número é divisível por 3 e por 4." : "O número não é divisível por 3 e por 4.");

// Crie um programa com atribuição de um número, calcule o triplo e verifique se é menor que 100.
let numero10 = 20;
let triplo = numero10 * 3;
console.log(triplo < 100 ? "O triplo do número é menor que 100." : "O triplo do número não é menor que 100.");

// Desenvolva uma lógica com atribuição de dois números e verifique se a soma é igual à multiplicação.
let num19 = 5;
let num20 = 10;
console.log(num19 + num20 === num19 * num20 ? "A soma dos números é igual à multiplicação." : "A soma dos números não é igual à multiplicação.");

// Escreva um código com atribuição de um número e verifique se está entre 1 e 100 e não é múltiplo de 2.
let numero11 = 25;
console.log(numero11 >= 1 && numero11 <= 100 && numero11 % 2 !== 0 ? "O número está entre 1 e 100 e não é múltiplo de 2." : "O número não está entre 1 e 100 ou é múltiplo de 2.");

// Crie um programa com atribuição de três números e verifique se todos são maiores que 10.
let num21 = 15;
let num22 = 20;
let num23 = 25;
console.log(num21 > 10 && num22 > 10 && num23 > 10 ? "Todos os números são maiores que 10." : "Nem todos os números são maiores que 10.");

