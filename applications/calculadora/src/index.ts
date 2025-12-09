const name: string = "calculadora";

setTimeout(() => {

    (async () => {

        const lodash = await import("lodash");
        console.info(`version de lodash en calculadora ${lodash.VERSION}`);

    })();

}, 5000);

export * as normal from "./normal";
export * as financiera from "./financiera";
export { name };
