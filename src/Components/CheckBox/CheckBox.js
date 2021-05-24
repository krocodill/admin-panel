import styles from 'Components/CheckBox/CheckBox.module.css';

export function CheckBox(props) {
  const Key = props.identifier;

  function handleChange(event) {
    if (event.target.checked) {
      props.OnChecked(Key);
    } else {
      props.OnUnChecked(Key);
    }
  }

  return (
    <input
      className={styles.checkBox}
      type="checkbox"
      checked={props.checked}
      onChange={handleChange}
    />
  );
}
