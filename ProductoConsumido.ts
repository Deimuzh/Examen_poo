export class ProductoConsumido {
    producto: Comida;
    cantidad: number;
  
    constructor(producto: Comida, cantidad: number) {
      this.producto = producto;
      this.cantidad = cantidad;
    }
  
    calcularCostoTotal(): number {
      return this.producto.precio * this.cantidad;
    }
  }