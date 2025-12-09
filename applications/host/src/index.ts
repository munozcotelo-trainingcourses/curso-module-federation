import * as calculadora from "calculadoraLib";

console.info(`El nombre de la calculadora remota es: ${calculadora.name}`);
const name: string = "host";

calculadora.sumar(4, 5);
calculadora.restar(100, 1);

export { name };
