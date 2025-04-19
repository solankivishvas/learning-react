import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    // const [count, setCount] = useState(0);

    let [counter, setCounter] = useState(0);

    // let counter = 10;

    const addValue = () => {
        console.log("Value added", counter);
        if (counter == 100) {
            console.log("You can't go up above 100");
        } else {
            counter = counter + 1;
            setCounter(counter);
        }
    };

    const removeValue = () => {
        console.log("Value removed", counter);
        if (counter == 0) {
            console.log("Value cannot go down below 0");
        } else {
            counter = counter - 1;
            setCounter(counter);
        }
    };

    return (
        <>
            <h1>Counter Project</h1>
            <h2>Counter value: {counter}</h2>
            <button onClick={addValue}>Increase Value</button>
            <button onClick={removeValue}>Decrease Value</button>
            <p>The counter can work only within 0 to 100.</p>
        </>
    );
}

export default App;
