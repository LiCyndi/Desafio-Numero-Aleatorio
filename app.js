let minhaLista = ["Numero 1", "Numero 2", "Numero3"];
let arr2 = ["Numero 4", "Numero 5", "Numero 6"];
let arr3 = ["Espero que isso entre", "E Se entrou", "Deu tudo certo"];
let numeros = [1,10,100,50,500,1000,140,20,15];
let juntandoTudo = minhaLista.concat(arr2, arr3);
document.getElementById("demo"). innerHTML = juntandoTudo

function desafio4() {
    for (let i = juntandoTudo.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = juntandoTudo[i]
        juntandoTudo[i] = juntandoTudo[j];
        juntandoTudo[j] = k;
    }
    document.getElementById("demo").innerHTML = juntandoTudo;
}

//Desafio 5 - Removendo duplicatas
console.log (desafio4);

function removendoDuplicatas(array) {
    return [juntandoTudo, new Set(array)];
}

let novaListaSemDuplas = removendoDuplicatas(juntandoTudo);
console.log("Removendo Duplas", novaListaSemDuplas);

// Desafio 1/2 outros desafios //

function validacaoNumero() {
    let numero = document.getElementById('numeroInput').value;
    //aqui seria a mesma coisa se fosse para verificar se a pessoa é maior ou menor de idade
    if (numero === 0) {
        document.getElementById('numero').innerText = `O Numero ${numero} é: Zero`;
    } else if (numero >= 1) {
        document.getElementById('numero').innerText = `O Numero ${numero} é: Positivo`;
    } else if (numero < 0) {
        document.getElementById('numero').innerText = `O Numero ${numero} é: Negativo`;
    } else {
        document.getElementById('numero').innerText = "Por favor, insira um número válido.";
    }
}
///desafio 3
let arrayVazia = [];
if (arrayVazia == 0) {
    console.log('Essa array esta vazia');
} else {
    console.log(arrayVazia)
}

//função de verificar o Ano Bissexto

function verificarAno() {
    let ano = document.getElementById('anoInput').value;

    if (ano%400 == 0) {
        document.getElementById('ano').innerText = `O ano é: bissexto`;
    } else if (ano%4==0 && ano%100!=0) {
        document.getElementById('ano').innerText = `O ano é: bissexto`;
    } else {
        document.getElementById('ano').innerText = `O ano não é bissexto`;
    }
}

// desafio 5 Eu não entendi :C //

// Desafio 6: Receba o array e retorne o tamanho dela//

let arrayTamanho = ['A', 'B', 'C', 'D'];
console.log(arrayTamanho.length);

// desafio 7: Crie um array e utilize a função includes para verificar se um elemento específico está presente
let arrayTrue = ['A', 'AB', 'O+'];
console.log("Tem a Letra A?", arrayTrue.includes('A'));

// Desafio 8: a mesma coisa dos anteriores
let arrayElemento = ['A', 30, 'AB', 25, 29, 'O+'];
console.log("Tem o numero 30?", arrayElemento.includes(30));

// Desafio 9: A mesma coisa dos anteriores
let arrayIncluso = ['Maça', 'Jesus', 8, 'Skate', 7];
console.log("A String Jesus ta presente?", arrayIncluso.includes('Jesus'));

// Desafio 10: A mesma dos anteriores só que com nomes dos alunos e objetos
let objetoAluno = ['Caderno', 'Lapis', 'Borracha'];
let nomeAlunos = ['Gabriel', 'Jonathan'];
console.log('O Gabriel esta presente?', nomeAlunos.includes('Gabriel'), "O meu caderno esta presente?", objetoAluno.includes('Caderno'));
 // eles fizeram isso como resultado. loucura ta..
 // Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// Exibindo o resultado
if (objetoEstaPresente) {
    console.log('O aluno está presente no array.');
} else {
    console.log('O aluno não está presente no array.');
}



// Desafio 11: Criar um array e retore a soma dos elementos

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }
    return {
        somaPares,
        produtoImpares
    }
}

let numerosWoW = [1,2,3,4,5];
let resultado = calcularSomaProduto(numerosWoW);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);