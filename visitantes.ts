export class Visitante {
    nombre: string;
    atraccionElegida: Atraccion;
    zonaElegida: Area;
    asiento: string;
    productosConsumidos: string[];
  
    constructor(nombre: string, atraccionElegida: Atraccion, zonaElegida: Area, asiento: string) {
      this.nombre = nombre;
      this.atraccionElegida = atraccionElegida;
      this.zonaElegida = zonaElegida;
      this.asiento = asiento;
      this.productosConsumidos = [];
    }
  
    agregarProductoConsumido(producto: string) {
      this.productosConsumidos.push(producto);
    }
  
    mostrarResumen() {
      console.log("Resumen del visitante:");
      console.log("Nombre del visitante: " + this.nombre);
      console.log("Atracción elegida: " + this.atraccionElegida.nombre);
      console.log("Zona de la atracción: " + this.zonaElegida.nombre);
      console.log("Asiento o lugar: " + this.asiento);
      console.log("Aperitivos o accesorios gratuitos en la zona: " + this.zonaElegida.aperitivos.join(", "));
      console.log("Productos consumidos: " + this.productosConsumidos.join(", "));
    }
  }