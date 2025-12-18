import { App, createApp, h } from "vue";

import AppComponentVue from "./components/AppComponentVue.vue";

const inicio: (id: string) => void = (id: string): void => {

    console.info("soy vue-app", id);

    const vueApp: App = createApp({

        name: "VueComponent",
        render: () =>

            h(AppComponentVue),

        components: { AppComponentVue },

    });

    vueApp
        .mount(id);

};

const name: string = "vue-app";

export { inicio, name };
