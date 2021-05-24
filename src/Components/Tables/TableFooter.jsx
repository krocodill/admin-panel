import styles from 'Components/Tables/TableFooter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'Components/Buttons/Button';
import { orderUpdate, orderDelete, fetchOrders } from 'features/data/dataSlice';
import { Pagination } from 'Components/Tables/Pagination';

export function TableFooter() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.data.currentPage);
  const allPages = useSelector((state) => state.data.allPages);
  const selectedRow = useSelector((state) => state.data.selectedOrdersCount);

  return (
    <div className={styles.tableFooter}>
      <div className={styles.buttonPanel}>
        <p className={styles.textSelect}>{`Выбрано записей: ${selectedRow}`}</p>
        <div className={styles.buttonUpdate}>
          <Button icon="Pencil" type="solid" size="medium" onClick={() => dispatch(orderUpdate())}>
            Изменить статус
          </Button>
        </div>
        <div className={styles.buttonDelete}>
          <Button
            icon="Delete"
            type="solid"
            size="medium"
            onClick={() => {
              dispatch(orderDelete());
              dispatch(fetchOrders());
            }}
          >
            Удалить
          </Button>
        </div>
      </div>
      <div className={styles.pagesPanel}>
        <div className={styles.pages}>
          <Pagination currentPage={currentPage} allPages={allPages} />
        </div>
      </div>
    </div>
  );
}
