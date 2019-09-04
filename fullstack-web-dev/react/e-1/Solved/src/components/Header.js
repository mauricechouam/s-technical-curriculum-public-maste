import React, { Component } from "react";

const styles = {
    header: {
        background: "#cc0000",
        height: 200
    },
    headerText: {
        margin: 0,
        paddingTop: 75,
        textAlign: "center",
        color: "#fff",
        fontSize: "2.5rem"
    }
}

class Header extends Component {
    render() {
        return (
            <header style={styles.header}>

                {/* Change the greeting to say, Welcome <NAME> */}
                <h1 style={styles.headerText}> Welcome, {this.props.name}!</h1>
            </header >
        );
    }

}

export default Header;