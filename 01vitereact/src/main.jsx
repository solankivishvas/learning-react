import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import One from "./first.jsx";

function MyApp() {
    return (
        <div>
            <h2>Inside Main!</h2>
        </div>
    );
}

const anotherElem = (
    <a href="https://google.com" target="_blank">
        Go to Google
    </a>
);

const anotherUser = "Vishvas Solanki";

const reactElement = React.createElement(
    "a",
    { href: "https://google.com", target: "_blank" },
    "Went to Google for search",
    anotherUser
);

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    //     <App />
    //     <One />
    //     <MyApp />
    // </StrictMode>
    reactElement
);
