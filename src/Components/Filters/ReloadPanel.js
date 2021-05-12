import styles from "./ReloadPanel.module.css"

function ReloadPanel(){
    return(
        <div className={styles.reloadpanel}>
            <div className={styles.button}>
                <span className={styles.buttonIcon}></span>
                <p>Загрузка</p>
            </div>
        </div>

    );
}

export default ReloadPanel;