import { useState } from "react";
import "./App.css";
import { Retter } from "./Components/Retter/RettKategori";
import { meny } from "./Components/Meny/Meny";

function App() {
  return (
    <>
      <h1>Meny </h1>
      <div className="retter">
        <div>
          <Retter kategori="Forrett" />
        </div>

        <div className="retter">
          <div>
            <Retter kategori="Hovedrett" />
          </div>
        </div>

        <div className="retter">
          <div>
            <Retter kategori="Dessert" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
