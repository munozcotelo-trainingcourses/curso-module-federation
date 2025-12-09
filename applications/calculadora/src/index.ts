const name: string = "calculadora";

const sumar: ((a: number, b: number) => number) = (a: number, b: number): number => {

    const resultado = a + b;

    console.info(`sumar ${a} y ${b} da ${resultado}`);

    return resultado;
};

const restar: ((a: number, b: number) => number) = (a: number, b: number): number => {

    const resultado = a - b;

    console.info(`restar ${a} y ${b} da ${resultado}`);

    return resultado;
};

export { name, sumar, restar };
