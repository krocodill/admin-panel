import styles from 'Components/Filters/MainFilters.module.css';
import { SearchPanel } from 'Components/Filters/SearchPanel';
import { Button } from 'Components/Buttons/Button';
import { useDispatch } from 'react-redux';
import { fetchOrders } from 'features/data/dataSlice';

export function MainFilters() {
  const dispatch = useDispatch();
  return (
    <div className={styles.mainFilters}>
      <SearchPanel />
      <Button
        type="transporent"
        icon="Refresh"
        onClick={() => dispatch(fetchOrders())}
      >
        Загрузка
      </Button>
    </div>
  );
}
