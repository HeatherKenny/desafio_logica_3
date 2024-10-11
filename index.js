class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque
   = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque padrão";
      }
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criando um objeto Heroi
  const meuHeroi = new Heroi("Aragorn", 30, "guerreiro");
  
  // Chamando o método atacar
  meuHeroi.atacar(); // Saída: O guerreiro Aragorn atacou usando espada