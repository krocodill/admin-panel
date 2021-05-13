import styles from "./SearchPanel.module.css";
import { SearchInput } from "../SearchBar/SearchInput";
import { Button } from "../Buttons/Button";

function SearchPanel(){
    return(
        <div className={styles.searchpanel}>
            <SearchInput placeholder="Номер заказа или ФИО"
            />
            <div className={styles.buttonfilter}>
                <Button text="Фильтры"
                        icon="filter"
                        type="solid"
                />
            </div>
        </div>
    );
}

export { SearchPanel };