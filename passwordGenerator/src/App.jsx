import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="bg-green-500 ">Hello World</div>
            <div className="bg-red-500 ">Hello World</div>
        </>
    );
}

export default App;
