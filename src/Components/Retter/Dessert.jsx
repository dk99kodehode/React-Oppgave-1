import { meny } from "../Meny/Meny";
import { MenyKort } from "../Meny/MenyKort";

export function Dessert() {
  const Dessert = meny.filter((rett) => rett.kategori === "Dessert");

  return (
    <article>
      <h2>Dessert</h2>

      {Dessert.map((rett) => (
        <MenyKort key={rett.id} rett={rett} />
      ))}
    </article>
  );
}
