import { Header } from 'Components/Header/Header';
import styles from 'Components/AdminPanel/AdminPanel.module.css';
import { Filters } from 'Components/Filters/Filters';
import { Tables } from 'Components/Tables/Tables';

export function AdminPanel() {
  return (
    <div className={styles.adminPanel}>
      <Header />
      <Filters />
      <Tables />
    </div>
  );
}
