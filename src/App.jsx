import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            El cine como <span className="text-gradient">arte</span>: descubre
            obras que marcan un antes y después.
          </h1>
        </header>
        <p>Search</p>
      </div>
    </main>
  );
};

export default App;
