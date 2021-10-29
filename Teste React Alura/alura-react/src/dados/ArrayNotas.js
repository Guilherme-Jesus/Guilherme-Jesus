export default class ArrayNotas {
  constructor() {
    this.notas = [];
    this.inscritos = [];
  }
  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
  }
  apagarNotas(i) {
    this.notas.splice(i, 1);
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.categorias));
  }
}
class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
