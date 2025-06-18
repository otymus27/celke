// Criar a função definida com um parâmetro array do tipo T[], onde T é um tipo genérico.
// Generics é a função que pode trabalhar com qualquer tipo de array.
function imprimirLista<T>(frutas: T[]): void {
    // Percorrer o array de dados
    for (let fruta of frutas) {
        // Imprimir os dados do item do array
        console.log(fruta);
    }
}

// Criar o array com valores do tipo string
let listaFrutas: string[] = ["Maça", "Laranja", "Mimosa", "Açaí"];
// Criar o array com valores do tipo number
let listaQuantidades: number[] = [10, 3, 4, 7];

// Chamar a função e enviar o array de string como parâmetro
imprimirLista(listaFrutas);
// Chamar a função e enviar o array de número como parâmetro
imprimirLista(listaQuantidades);

function primeiroElemento<T>(lista: T[]): T {
    return lista[0];
}

const primeiro = primeiroElemento([1, 2, 3]); // T = number
const primeiroNome = primeiroElemento(["Ana", "Beto"]); // T = string

console.log(primeiroNome);
console.log(primeiro);

// Criar uma interface genérica
interface Caixa<T> {
    valor: T;
}

const numeroCaixa: Caixa<number> = { valor: 100 };
const textoCaixa: Caixa<string> = { valor: "teste" };
console.log(numeroCaixa);
console.log(textoCaixa);

// Criar uma função com vários argumentos genericos
function combinar<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}

const resultado = combinar<string, number>("idade", 30); // ['idade', 30]
console.log(resultado);

// Criar generics em classes
class Lista<T> {
    private itens: T[] = [];

    adicionar(item: T) {
        this.itens.push(item);
    }

    getTodos(): T[] {
        return this.itens;
    }
}

const listaDeNumeros = new Lista<number>();
listaDeNumeros.adicionar(5);
listaDeNumeros.adicionar(10);
console.log(listaDeNumeros);

const listaDeTextos = new Lista<string>();
listaDeTextos.adicionar("Olá");
listaDeTextos.adicionar("Mundo");
console.log(listaDeTextos);
