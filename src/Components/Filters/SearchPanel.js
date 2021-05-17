import styles from "./SearchPanel.module.css";
import { SearchInput } from "../SearchBar/SearchInput";
import { Button } from "../Buttons/Button";

export function SearchPanel() {
  return (
    <div className={styles.searchPanel}>
      <SearchInput placeholder="Номер заказа или ФИО" />
      <div className={styles.buttonFilter}>
        <Button icon="Filter" type="solid">
          Фильтры
        </Button>
      </div>
    </div>
  );
}
