import { meny } from "../Meny/Meny";
import { MenyKort } from "../Meny/MenyKort";

export function Foretter() {
  const foretter = meny.filter((rett) => rett.kategori === "Forrett");

  return (
    <article>
      <h2>Foretter</h2>

      {foretter.map((rett) => (
        <MenyKort key={rett.id} rett={rett} />
      ))}
    </article>
  );
}
