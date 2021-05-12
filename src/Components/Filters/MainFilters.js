import styles from "./MainFilters.module.css"
import SearchPanel from "./SearchPanel";
import ReloadPanel from "./ReloadPanel";

function MainFilters(){
    return(
      <div className={styles.mainfilters}>
          <SearchPanel/>
          <ReloadPanel/>
      </div>
    );

}

export default MainFilters;