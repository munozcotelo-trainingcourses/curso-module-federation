const name: string = "host";

import * as calculadora from "calculadoraLib";
import * as normal from "calculadoraLib/normal";
import * as financiera from "calculadoraLib/financiera";

console.info(`El nombre de la calculadora remota es: ${calculadora.name}`);

console.group("Importando toda la calculadora");
calculadora.normal.sumar(4, 5);
calculadora.normal.restar(100, 1);
console.groupEnd()

console.group("Importando normal de la calculadora");
normal.sumar(4, 5);
normal.restar(100, 1);
console.groupEnd()

console.group("Importando financiera de la calculadora");
financiera.porcentaje(4, 1000);
console.groupEnd()

export { name };
