import styles from "./HeadingButton.module.css"

function HeadingButton(){
    return(
        <div className={styles.button}>
            <span className={styles.buttonIcon}></span>
            <p>Светлая тема</p>
        </div>
    );
}

export default HeadingButton;