import { inicio } from "./ui";

const name: string = "calculadora";

setTimeout(() => {

    (async () => {

        const lodash = await import("lodash");
        console.info(`version de lodash en calculadora ${lodash.VERSION}`);

    })();

    /*
     * comentar para federar 
     * descomentar para trabajo local
     */
    // inicio("calculadora");

}, 5000);

export * as normal from "./normal";
export * as financiera from "./financiera";
export { name };
