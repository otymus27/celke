//Callback - é uma função que você passa como argumento para outra função, para ser chamada depois de algo acontecer.

function dizerOla(nome: string): void {
  console.log(`Olá, ${nome}`);
}

// Função que recebe outra função como parâmetro
function processarUsuario(callback: (nome: string) => void) {
  const nome = 'João';
  callback(nome); // chama a função passada com o nome
}

processarUsuario(dizerOla); // saída: Olá, João

function calculadora(a: number, b: number, operacao: (x: number, y: number) => number): number {
  return operacao(a, b); // chama o callback passando os números
}

const res1 = calculadora(5, 3, (x, y) => x * y); // multiplicação
console.log(res1); // saída: 15

//  Exemplo com tempo: setTimeout usa callback
setTimeout(() => {
  console.log('Essa mensagem aparece depois de 2 segundos');
}, 2000);
