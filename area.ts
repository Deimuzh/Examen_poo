export class Area {
    nombre: string;
    disponibilidad: Map<string, boolean>; // Hora del día -> Disponibilidad
    aperitivos: string[];
    constructor(nombre: string) {
      this.nombre = nombre;
      this.disponibilidad = new Map();
      this.aperitivos = [];
    }
  
    agregarDisponibilidad(hora: string, disponible: boolean) {
      this.disponibilidad.set(hora, disponible);
    }
  
    agregarAperitivo(aperitivo: string) {
      this.aperitivos.push(aperitivo);
    }
  }