import styles from "./Menykort.module.css";

export function MenyKort({ rett }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardinnhold}>
        <h2 className={styles.tittel}>{rett.tittel}</h2>
        <p className={styles.ingredienser}>{rett.ingredienser}</p>
        <p className={styles.pris}>{rett.pris}</p>
      </div>
    </div>
  );
}
