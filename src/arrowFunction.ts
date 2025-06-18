// Arrow function ou função anônima - forma mais curta e moderna de declarar funções
const teste = (): void => {
  console.log('Testando arroFunction sem retorno e sem parametros');
};

teste();

const msg = (nome: string): string => {
  return `Olá, ${nome}`;
};

let texto = msg('Fábio');
console.log(texto);

const dobro = (x: number): number => {
  return x * 2;
};

let res = dobro(4);
console.log(res);

// Função para somar números indeterminados usando parametros REST com SPREAD
function fsomar(...n: number[]) {
  let s: number = 0;
  n.forEach((item) => {
    s += item;
  });
  return s;
}

console.log(fsomar(10, 30, 50));
