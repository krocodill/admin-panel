import { Header } from "../Header/Header";
import styles from "./AdminPanel.module.css";
import { Filters } from "../Filters/Filters";
import { Tables } from "../Tables/Tables";

export function AdminPanel() {
  return (
    <div className={styles.adminPanel}>
      <Header />
      <Filters />
      <Tables />
    </div>
  );
}
