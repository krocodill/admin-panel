import styles from "./Filters.module.css";
import { MainFilters } from "./MainFilters";
import { ExtendedFilter } from "./ExtendedFilter";

export function Filters() {
  return (
    <div className={styles.filter}>
      <MainFilters />
      <ExtendedFilter />
    </div>
  );
}
