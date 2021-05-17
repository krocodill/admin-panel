import { Heading } from "./Heading";
import styles from "./Header.module.css";
import { Button } from "../Buttons/Button";

export function Header() {
  return (
    <div className={styles.header}>
      <Heading />
      <Button type="transporent" icon="Sun">
        Светлая тема
      </Button>
    </div>
  );
}
