import "zone.js";
import "@angular/compiler";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideZoneChangeDetection } from "@angular/core";

import { AppComponent } from "./components/AppComponent";

const inicio: (id: string) => void = (id: string): void => {
    console.info("id:", id);

    const mountApp = () => {
        // Buscar el contenedor por ID
        const container = document.getElementById(id);
        if (!container) {
            console.error(`No se encontró el elemento con id: ${id}`);
            return;
        }

        // Crear el elemento app-root dentro del contenedor
        const appRoot = document.createElement("app-root");
        container.appendChild(appRoot);

        // Bootstrap de la aplicación
        bootstrapApplication(AppComponent, {
            providers: [
                provideZoneChangeDetection({ eventCoalescing: true })
            ]
        }).catch((err) => console.error(err));
    };

    // Esperar a que el DOM esté listo
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mountApp);
    } else {
        mountApp();
    }
};

export { inicio };
