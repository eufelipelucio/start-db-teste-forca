class Forca {
  letrasChutadas = [];
  vidas = 6;
  palavra = [];
  palavraCerta = [];

  constructor(palavra) {
    this.palavra = palavra.split("");
    this.palavraCerta = Array(this.palavra.length).fill("_");
  }

  chutar(letra) {
    if (this.verificaLetraCerta(letra)) {
      this.adicionaLetrasChutadas(letra);
      this.adicionaLetrasCertas(letra);
    }
    if (this.verificaLetraErrada(letra)) {
      this.adicionaLetrasChutadas(letra);
      this.vidas--;
    }
  }

  buscarEstado() {
    return this.vidas === 0
      ? "perdeu"
      : this.palavraCerta.includes("_")
      ? "aguardando chute"
      : "ganhou";
  } 

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas,
      vidas: this.vidas, 
      palavra: this.palavraCerta, 
    };
  }

  adicionaLetrasChutadas(letra) {
    this.letrasChutadas.push(letra);
  }

  adicionaLetrasCertas(letra) {
    for (let i = 0; i < this.palavra.length; i++) {
      if (this.palavra[i] === letra) {
        this.palavraCerta[i] = letra;
      }
    }
  }

  verificaLetraCerta(letra) {
    if (
      this.palavra.includes(letra) &&
      !this.letrasChutadas.includes(letra) &&
      letra.length === 1
    )
      return true;
  }

  verificaLetraErrada(letra) {
    if (
      !this.palavra.includes(letra) &&
      !this.letrasChutadas.includes(letra) &&
      letra.length === 1
    ) {
      return true;
    }
  }
}

module.exports = Forca;
