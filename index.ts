  import { Atraccion } from "./atraccion";
  import { Area } from "../../area";
  import { Visitante } from "../../visitantes";
  import { Comida } from "./Comida";
  import { ProductoConsumido } from "../../ProductoConsumido";
  // Crear instancias de las clases
  const montanaRusa = new Atraccion("Montaña Rusa");
  const ruedaFortuna = new Atraccion("Rueda de la Fortuna");
  const areaMontanaRusa = new Area("Área de Montaña Rusa");
  const areaRuedaFortuna = new Area("Área de Rueda de la Fortuna");
  const visitante1 = new Visitante("Juan", montanaRusa, areaMontanaRusa, "Asiento 1");
  const visitante2 = new Visitante("Maria", ruedaFortuna, areaRuedaFortuna, "Asiento 2");
  
  // Asignar datos
  areaMontanaRusa.agregarDisponibilidad("Mañana", true);
  areaMontanaRusa.agregarAperitivo("Globos");
  areaMontanaRusa.agregarAperitivo("Mapas del parque");
  visitante1.agregarProductoConsumido("Palomitas de maíz");
  visitante2.agregarProductoConsumido("Refrescos");
  
  // Mostrar resumen de visitantes
  visitante1.mostrarResumen();
  visitante2.mostrarResumen();
  
// Crear instancias de comidas
  const palomitas = new Comida("Palomitas de maíz", 5);
  const refresco = new Comida("Refresco", 3);
  
  // Asignar productos a visitantes
  visitante1.agregarProductoConsumido("palomitas");
  visitante1.agregarProductoConsumido("refresco");
  visitante2.agregarProductoConsumido("palomitas");
  
  // Mostrar resumen de visitantes con comida y bebida
  visitante1.mostrarResumen();
  visitante2.mostrarResumen();
  