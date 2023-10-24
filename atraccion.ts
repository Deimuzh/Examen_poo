export class Atraccion {
    nombre: string;
    areas: Area[];
    constructor(nombre: string) {
      this.nombre = nombre;
      this.areas = [];
    }
  }