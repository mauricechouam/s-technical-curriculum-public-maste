import React, { Component } from "react";
import "../styles/Footer.css";

const styles = {
    // move the contents of respective .css file to this styles object
    // then remove the classNames, and reference the style object inside the component
}

// Refactor this to be a functional React component instead of a class-based component
class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <p>&copy; Some Company | 2019 </p>
            </footer>
        );
    }

}

export default Footer;