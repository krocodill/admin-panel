import styles from "./SearchPanel.module.css";
import SearchInput from "../SearchBar/SearchInput";
import SolidButtonWithIcon from "../Buttons/SolidButtonWithIcon";

function SearchPanel(){
    return(
        <div className={styles.searchpanel}>
            <SearchInput/>
            <div className={styles.buttonfilter}>
                <SolidButtonWithIcon/>
            </div>
        </div>
    );
}

export default SearchPanel;