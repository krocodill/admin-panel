import { Heading } from "./Heading";
import { HeadingButton } from "./HeadingButton";
import styles from "./Header.module.css"

function Header(){
    return(
        <div className={styles.header}>
            <Heading/>
            <HeadingButton/>
        </div>
    );

}

export { Header };