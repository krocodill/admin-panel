import { Heading } from 'Components/Header/Heading';
import styles from 'Components/Header/Header.module.css';
import { Button } from 'Components/Buttons/Button';

export function Header() {
  return (
    <div className={styles.header}>
      <Heading />
      <Button type="transparent" icon="Sun">
        Светлая тема
      </Button>
    </div>
  );
}
