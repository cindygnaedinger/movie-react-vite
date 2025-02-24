import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { AnimatedHeading } from "./components/AnimatedHeading";
import { Spotlight } from "./components/Spotlight";
import { SpotlightNewDemo } from "./components/SpotlightNewDemo";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />

      <div>
        <header style={{ margin: "0" }}>
          <SpotlightNewDemo />
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
      </div>
    </main>
  );
};

export default App;
