// Aqui criamos a classe e já definimos valores padrão
class Carro {
  modelo: string = '';
  marca: string = '';
  ano: number = 2000;
  km: number = 0;
}

// Criando ou instanciando um objeto do tipo Carro baseado na classe Carro
const c1 = new Carro();
c1.marca = 'honda';
c1.modelo = 'FIT';

console.log(c1);

// Agora vamos criar uma classe com construtor personalizado
class Computador {
  nome: string = '';
  memoria: number = 4;
  cpu: number = 0;
  ligado: boolean = false;

  constructor(nome: string, memoria: number, cpu: number, ligado: boolean) {
    this.nome = nome;
    this.memoria = memoria;
    this.cpu = cpu;
    this.ligado = true;
  }

  //Aqui vamos criar um método para a classe
  exibir(): void {
    console.log('--- Informações do Computador -----');
    console.log(`Nome: ${this.nome}`);
    console.log(`Memoria Ram: ${this.memoria}`);
    console.log(`CPU: ${this.cpu}`);
    //condicional terciario
    console.log(`Ligado: ${this.ligado ? 'Sim' : 'Não'}`);
  }

  ligar(): void {
    this.ligado = true;
    //this.exibir();
  }

  desligar(): void {
    this.ligado = false;
    //this.exibir();
  }
}

const computador1 = new Computador('Gamer', 128, 3.7, true);
const computador2 = new Computador('Pessoal', 128, 3.7, false);

console.log(computador1);
console.log(computador2);

//Aqui chamamos o método da classe
computador1.exibir();
computador1.desligar();
computador1.ligar();

computador2.exibir();
computador2.desligar();
computador2.ligar();
