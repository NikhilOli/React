import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  const [length, setLength] = useState(6);

  return (
    <>
      <div
        className="container min-w-full min-h-full h-screen"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-black text-4xl">BG Changer</h1>
        <input
          type="range"
          name="Range"
          id=""
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label htmlFor="">Length: {length}</label>
        <div className="buttons flex justify-center gap-3 fixed inset-x-0 bottom-3 ">
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 text-white rounded px-4 py-2 font-bold text-base outline-none"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 text-white rounded px-4 py-2 font-bold text-base outline-none"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-500 text-white rounded px-4 py-2 font-bold text-base outline-none"
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-500 text-white rounded px-4 py-2 font-bold text-base outline-none"
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
