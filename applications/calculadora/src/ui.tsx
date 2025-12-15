import * as React from "react";
import { createRoot } from "react-dom/client";

import { AppComponent } from "./components/AppComponent";

const inicio: (id: string) => void = (id: string): void => {
    const root = createRoot(document.getElementById(id));
    root.render(<AppComponent></AppComponent>)
};

export { inicio };

