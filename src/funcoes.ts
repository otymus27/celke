console.log('Como criar função!');

// Função do tipo void - não retorna nada - sem passagem de parametros
function imprimirMensagem(): void {
  console.log('Testando a função que não retorna nada do tipo VOID');
}

imprimirMensagem();

// Função do tipo void - não retorna nada - com passagem de parametros
function logar(usuario: string, senha: string): void {
  if (usuario == 'admin' && senha == 'admin') {
    console.log('Usuario logado com sucesso!');
  } else {
    console.log('Acesso negado, usuario ou senha invalidos!');
  }
}

logar('admin', 'addmin');

// Criar a função para receber uma variável do tipo string e retornar a string
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

const mensagem = saudacao('Fabio');
console.log(mensagem); // "Olá, Fabio!"

//Criar a função para receber duas variaveis do tipo number e retornar um number
function adicionar(a: number, b: number): number {
  return a + b;
}

const calcularSoma = adicionar(5, 10);
console.log('Resultado da função somar: ' + calcularSoma);

// Criar a função para receber duas variaveis do tipo string e retornar a string
function getUser(nome: string, ultimoNome: string): string {
  return `${nome} ${ultimoNome}`;
}
// Chamar a função e imprimir o valor
console.log(getUser('Fábio', 'Rocha'));

// Criar a função para receber duas variaveis do tipo numero e retornar um numero
function getSpeed(current: number, add: number): number {
  return current + add;
}
// Chamar a função e imprimir o valor
console.log(getSpeed(9, 3));

// Criar a função para receber uma variavel do tipo numero e retornar boolean
function getSituation(current: number): boolean {
  return current >= 7 ? true : false;
}
// Chamar a função e imprimir o valor
console.log(getSituation(9));

// Criar a função para receber uma variavel do tipo any e retornar string
function getValue(value: any): string {
  if (typeof value === 'string') {
    return 'Valor do tipo string';
  } else {
    return 'Valor diferente de string';
  }
}
// Chamar a função e imprimir o valor
console.log(getValue('Cesar'));

// Criar a função para receber uma variavel do tipo string ou numero e retornar string
function getType(valueType: string | number): string {
  if (typeof valueType === 'string') {
    return 'Valor do tipo string';
  } else {
    return 'Valor do tipo número';
  }
}
// Chamar a função e imprimir o valor
console.log(getType(7));
console.log(getType('Fábio'));
