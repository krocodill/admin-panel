import styles from "./SearchInput.module.css";
import React from "react";

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            placeholder: props.placeholder
        }
        this.handleReset = this.handleReset.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleReset = () => {
        console.log('reset');
        this.setState({
            value: ''
        });
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <div className={styles.searchbar}>
                <span className={styles.searchicon}></span>
                <input type="text"
                       value={this.state.value}
                       required
                       className={styles.inputwithicon}
                       placeholder={this.state.placeholder}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleReset}  className={styles.closeicon} type="reset"/>
            </div>
        );
    }
}

export { SearchInput };