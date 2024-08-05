import { useState } from "react";
import QRcode from "react-qr-code";
import "./App.css";

function App() {
  let [text, setText] = useState("");
  let [isVisible, setIsVisible] = useState(false);

  let handleInputChange = (e) => {
    setText(e.target.value);
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setText("");
  };

  return (
    <>
      <h1>QR code Generator</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="lol"
          id="name"
          value={text}
          onChange={handleInputChange}
        />
        <br /> <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div> {isVisible && <QRcode value={text} />}</div>
    </>
  );
}

export default App;
