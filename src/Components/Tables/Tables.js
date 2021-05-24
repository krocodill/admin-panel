import styles from 'Components/Tables/Tables.module.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from 'features/data/dataSlice';
import { TableHeader } from 'Components/Tables/TableHeader';
import { TableGrid } from 'Components/Tables/TableGrid';
import { TableFooter } from 'Components/Tables/TableFooter';

export function Tables(props) {
  const dispatch = useDispatch();
  const isIdle = useSelector((state) => state.data.isIdle);
  const orders = useSelector((state) => state.data.filtredOrders);
  const isLoading = useSelector((state) => state.data.isLoading);

  useEffect(() => {
    if (isIdle) {
      dispatch(fetchOrders());
    }
  }, [isIdle, dispatch]);

  return (
    <div className={styles.tables}>
      <TableHeader />
      <TableGrid orders={orders} isLoading={isLoading} />
      <TableFooter />
    </div>
  );
}
