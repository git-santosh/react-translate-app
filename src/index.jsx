// 1) Import React and ReactDOM
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles.css';
import App from "./App";
// 2) get the reference to the root element
const el = document.getElementById("root");
if (!el) {
    throw new Error("Root element not found");
}

// 3) tell react to take control of the root element

const root = createRoot(el);

// 4) Show the component on the screen
root.render(
    <StrictMode>
        <div className="wrapper">
            <App />
        </div>
    </StrictMode>
);