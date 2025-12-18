<script lang="ts">

import { defineComponent, onMounted } from "vue";
import * as calculadoraLib from "calculadoraLib/ui";
import * as angularApp from "angularApp/ui";
import * as vueApp from "vueApp/ui";

export default defineComponent({

    name: "AppComponent",

    props: {
    },
    components: {
    },
    directives: {
    },
    setup() {

        // onMounted(() => {
        //
        // });

        const onCalculadora = () => {
            calculadoraLib.inicio("id-calculadora");
        };

        const onAngular = () => {
            angularApp.inicio("id-angular-app");
        };

        const onVue = () => {
            vueApp.inicio("#id-vue-app");
        };

        return {
            onCalculadora,
            onAngular,
            onVue,
        };

    },

});

</script>

<template>

    <div class="host-vue">

        <div>
            <h3>Host Vue App</h3>
        </div>

        <div>
            <button v-on:click="onCalculadora">Calculadora</button>
            <button v-on:click="onAngular">Angular App</button>
            <button v-on:click="onVue">Vue App</button>
        </div>

        <div id="id-calculadora"></div>
        <div id="id-angular-app"></div>
        <div id="id-vue-app"></div>

    </div>

</template>
