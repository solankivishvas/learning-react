import { useState } from "react";

function App() {
    let [color, setColor] = useState("bg-purple-400");

    function bgChange(newColor) {
        setColor(newColor);
    }

    return (
        <>
            <div className={`w-full bg-purple-400 h-screen ${color} `}>
                <div className="flex gap-4 justify-center pt-5 ">
                    <button
                        onClick={() => bgChange("bg-red-600")}
                        className="border-2 pl-5 pr-5 pt-3 pb-3 rounded-sm bg-red-600"
                    >
                        Red
                    </button>
                    <button
                        onClick={() => bgChange("bg-green-600")}
                        className="border-2 pl-5 pr-5 pt-3 pb-3 rounded-sm bg-green-600"
                    >
                        Green
                    </button>
                    <button
                        onClick={() => bgChange("bg-blue-600")}
                        className="border-2 pl-5 pr-5 pt-3 pb-3 rounded-sm bg-blue-600"
                    >
                        Blue
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
