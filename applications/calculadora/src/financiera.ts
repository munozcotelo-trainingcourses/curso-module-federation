const porcentaje: ((parte: number, total: number) => number) = (parte: number, total: number): number => {

    const resultado = (parte * total) / 100;

    console.info(`el ${parte}% de ${total} da ${resultado}`);

    return resultado;
};

export { porcentaje };
