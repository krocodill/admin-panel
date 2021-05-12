import styles from "./SearchInput.module.css";

function SearchInput(){
    return(
        <form className={styles.searchbar}>
            <span className={styles.searchicon}></span>
            <input type="text" required className={styles.inputwithicon} placeholder="Номер заказа или ФИО"/>
            <button  className={styles.closeicon} type="reset"/>
        </form>
    );
}

export default SearchInput;