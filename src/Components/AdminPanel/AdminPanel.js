import { Header } from "../Header/Header";
import styles from "./AdminPanel.module.css"
import { Filters } from "../Filters/Filters";
import { Tables } from "../Tables/Tables";

function AdminPanel() {
    return (
        <div className={styles.adminpanel}>
            <Header/>
            <Filters/>
            <Tables/>
        </div>

    );

}

export { AdminPanel };
