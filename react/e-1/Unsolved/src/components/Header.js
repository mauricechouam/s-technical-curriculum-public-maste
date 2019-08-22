import React, { Component } from "react";
import "../styles/Header.css";

const styles = {
    // move the contents of respective .css file to this styles object
    // then remove the classNames, and reference the style object inside the component
}

class Header extends Component {
    render() {
        return (
            <header className="header" >

                {/* Change the greeting to say, Welcome <NAME> */}
                < h1 > Welcome!</h1>
            </header >
        );
    }

}

export default Header;