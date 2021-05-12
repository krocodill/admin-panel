import styles from "./SolidButtonWithIcon.module.css"

function SolidButtonWithIcon(){
    return(
        <div className={styles.solidbuttonwithicon}>
            <button className={styles.solidbutton}>
                <i className={styles.filtericon}></i>
                Фильтры
            </button>
        </div>
    );
}

export default SolidButtonWithIcon;