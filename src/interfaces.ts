// Usar interface para definir a estrutura do objeto
interface Usuario {
  nome: string;
  idade: number;
}

// Criar a função para receber uma variavel do tipo User (objeto) e não retornar valor
function mostrarDados(usuario: Usuario): void {
  console.log(`Nome do usuário: ${usuario.nome}, Idade: ${usuario.idade}`);
}

// Criar o objeto de dados
let usuario1: Usuario = {
  nome: 'Gabriel',
  idade: 13,
};

// Chamar a função e enviar o paramentro
mostrarDados(usuario1);

//Mais exemplo de interface
interface Pessoa {
  nome: string;
  idade: number;
}

const p1: Pessoa = {
  nome: 'Fábio',
  idade: 45,
};

mostrarDados(p1);

// Exemplo de interface - 3
interface Produto {
  nome: string;
  preco: number;
  descricao?: string; // opcional
}

const item: Produto = {
  nome: 'Mouse',
  preco: 50,
  descricao: 'Periferico de computador',
};

console.log(item);

interface curso {
  titulo: string;
  descricao: string;
  quantidadeAulas: number;
  quantidadeAlunos: number;
}

let curso1: curso;
curso1 = {
  titulo: 'Java',
  descricao: 'Curso de backend em java',
  quantidadeAulas: 100,
  quantidadeAlunos: 30,
};
console.log(curso1);
