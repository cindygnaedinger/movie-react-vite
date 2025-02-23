import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
