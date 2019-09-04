import React, { Component } from "react";

const styles = {
    footer: {
        background: "#000",
        height: 60
    },
    footerText: {
        color: "#fff",
        fontSize: "0.8rem",
        margin: 0,
        lineHeight: 3,
        textAlign: "center"
    }
}

class Footer extends Component {

    render() {
        return (
            <footer style={styles.footer}>
                <p style={styles.footerText}>&copy; Some Company | 2019 </p>
            </footer>
        );
    }

}

export default Footer;