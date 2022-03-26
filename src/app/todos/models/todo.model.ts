export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.texto = texto;
    this.id = Math.trunc(Math.random()*10000);
    this.completado = false;
  }
}
