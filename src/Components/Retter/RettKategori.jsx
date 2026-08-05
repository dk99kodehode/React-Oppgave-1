import { meny } from "../Meny/Meny";
import { MenyKort } from "../Meny/MenyKort";

export function Retter({ kategori }) {
  const Retter = meny.filter((rett) => rett.kategori === kategori);

  return (
    <article>
      <h2>{kategori}</h2>

      {Retter.map((rett) => (
        <MenyKort key={rett.id} rett={rett} kategori={kategori} />
      ))}
    </article>
  );
}
