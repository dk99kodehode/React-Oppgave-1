import { useState } from "react";
import "./App.css";
import { Foretter } from "./Components/Retter/Forrett";
import { Dessert } from "./Components/Retter/Dessert";
import { Hovedrett } from "./Components/Retter/Hovedrett";

function App() {
  return (
    <>
      <h1>Meny </h1>
      <Foretter />
      <Hovedrett />
      <Dessert />
    </>
  );
}

export default App;
