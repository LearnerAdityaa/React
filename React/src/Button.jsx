function printHello() {
  console.log("hello World");
}
function handleHover() {
  console.log("Hovered");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click Me!</button>
      <p onMouseOver={handleHover}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sequi.
        Quos laudantium, illum neque libero officia dolorum. Ipsa voluptate vero
        omnis ad tenetur aliquid, ratione vel fugiat ipsum natus incidunt!
      </p>
    </div>
  );
}
