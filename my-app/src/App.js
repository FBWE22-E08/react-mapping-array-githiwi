import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const products = [
    {
      name: "xbox",
      price: "400€",
      image: "https://picsum.photos/300/200",
    },
    {
      name: "PlayStation",
      price: "550€",
      image: "https://picsum.photos/300/200",
    },
    { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
  ];
  return (
    <div className="App">
      {products.map((el) => (
        <div className="box" key={uuidv4()}>
          <img src={el.image} alt={el.name}></img>
          <h1>{el.name}</h1>
          <h2>{el.price}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
