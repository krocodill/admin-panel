import styles from "./Icon.module.css"

const IconTypes = {
    none: styles.none,
    filter: styles.filtericon,
    sun: styles.sunicon,
    refresh: styles.refreshicon
}

const IconColor = {
    white: styles.white,
    primary: styles.primary,
    secondary: styles.secondary
}

function Icon(props){
    const typeIcon = props.icon ? props.icon : "none";
    const styleTypeIcon = IconTypes[typeIcon];
    const styleColorIcon = props.color ? IconColor[props.color] : styles.primary;
    return(
        <i className={[styleTypeIcon, styleColorIcon].join(" ")}></i>
    );
}

export { Icon };