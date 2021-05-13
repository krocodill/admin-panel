import styles from "./Filters.module.css"
import { MainFilters } from "./MainFilters";

function Filters(){
    return(
        <div className={styles.filter}>
            <MainFilters/>

        </div>

    );
}

export { Filters };