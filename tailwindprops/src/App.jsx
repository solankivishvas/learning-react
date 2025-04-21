import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="bg-green-500 text-black p-5 rounded-xl mb-5">
                Tailwind CSS Test
            </h1>

            <Card name="Vishvas Solanki" btnText="Visit Me" />
            <Card name="Farmer" />
            <Card name="Farming" />
        </>
    );
}

export default App;
