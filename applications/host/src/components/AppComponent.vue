<script lang="ts">

import { defineComponent, onMounted } from "vue";
import * as calculadoraLib from "calculadoraLib/ui";
import * as angularApp from "angularApp/ui";

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

        return {
            onCalculadora,
            onAngular,
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
        </div>

        <div id="id-calculadora"></div>
        <div id="id-angular-app"></div>

    </div>

</template>
