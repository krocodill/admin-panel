import styles from "./Header.module.css"

function Heading (){
    return(
        <div className={styles.header}>
            <h1>Список заказов</h1>
        </div>
    );
}

export default Heading;


