import "./App.css";
import { useState } from "react";
function App() {
  const [query, setquery] = useState("");
  return (
    <div className="App">
      <h1> Food Recipes </h1>
      <form className="searchForm">
        <input
          type="Text"
          placeholder="Enter Ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input type="Submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
