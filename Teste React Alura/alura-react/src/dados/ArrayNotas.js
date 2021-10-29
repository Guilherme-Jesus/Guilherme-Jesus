export default class ArrayNotas{
    constructor(){
        this.notas = []

    }
    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota)

    }
    apagarNotas(i){
        this.notas.splice(i,1)
    }

}
class Nota {
    constructor(titulo, texto, categoria){
     this.titulo = titulo
     this.texto = texto
     this.categoria= categoria   
    }
}