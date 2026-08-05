import { useState } from "react";
import "./App.css";
import { Retter } from "./Components/Retter/RettKategori";
import { meny } from "./Components/Meny/Meny";

function App() {
  return (
    <>
      <h1>Meny </h1>
      <Retter kategori="Forrett" />
      <Retter kategori="Hovedrett" />
      <Retter kategori="Dessert" />
    </>
  );
}

export default App;
