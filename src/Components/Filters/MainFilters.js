import styles from "./MainFilters.module.css";
import { SearchPanel } from "./SearchPanel";
import { Button } from "../Buttons/Button";

export function MainFilters() {
  return (
    <div className={styles.mainFilters}>
      <SearchPanel />
      <Button type="transporent" icon="Refresh">
        Загрузка
      </Button>
    </div>
  );
}
