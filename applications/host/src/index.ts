import * as lodash from "lodash";

console.info(`version de lodash en host ${lodash.VERSION}`);

const name: string = "host";

(async () => {


    const calculadora = await import("calculadoraLib");

    console.info(`El nombre de la calculadora remota es: ${calculadora.name}`);

    console.group("Importando toda la calculadora");
    calculadora.normal.sumar(4, 5);
    calculadora.normal.restar(100, 1);
    console.groupEnd()

    const normal = await import("calculadoraLib/normal");

    console.group("Importando normal de la calculadora");
    normal.sumar(4, 5);
    normal.restar(100, 1);
    console.groupEnd()

    const financiera = await import("calculadoraLib/financiera");

    console.group("Importando financiera de la calculadora");
    financiera.porcentaje(4, 1000);
    console.groupEnd()

})();

export { name };
