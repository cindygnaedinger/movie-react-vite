import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { LampDemo } from "./components/LampDemo";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <LampDemo />
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
      </div>
    </main>
  );
};

export default App;
