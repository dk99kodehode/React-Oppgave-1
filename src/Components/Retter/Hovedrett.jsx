import { meny } from "../Meny/Meny";
import { MenyKort } from "../Meny/MenyKort";

export function Hovedrett() {
  const Hovedrett = meny.filter((rett) => rett.kategori === "Hovedrett");

  return (
    <article>
      <h2>Hovedretter</h2>

      {Hovedrett.map((rett) => (
        <MenyKort key={rett.id} rett={rett} />
      ))}
    </article>
  );
}
