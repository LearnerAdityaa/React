// import "./ColorBox.css";
// import { useState } from "react";

// export default function ColorBox() {
//   let [color, setColor] = useState("rgb(0,0,0)");
//   function random() {
//     console.log("hello");
//     const a = Math.floor(Math.random() * 10);
//     const b = Math.floor(Math.random() * 10);
//     const c = Math.floor(Math.random() * 10);
//     let color = `rgb(${a}, ${b}, ${c})`;
//     setColor(color);
//   }

//   return (
//     <>
//       <div className="colorArea" style={{ backgroundColor: "color" }}></div>
//       <button onClick={random}>Change Color</button>
//     </>
//   );
// }

import "./ColorBox.css";
import { useState } from "react";

export default function ColorBox() {
  let [color, setColor] = useState("rgb(100, 256, 200)");

  function random() {
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    let Color = `rgb(${a}, ${b}, ${c})`;
    setColor(Color);
  }

  return (
    <>
      <h3>Color Code:{color}</h3>
      <div className="colorArea" style={{ backgroundColor: color }}></div>
      <button onClick={random}>Change Color</button>
    </>
  );
}
