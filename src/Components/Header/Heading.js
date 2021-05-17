import styles from "./Header.module.css";

export function Heading() {
  return (
    <div className={styles.header}>
      <h1>Список заказов</h1>
    </div>
  );
}
