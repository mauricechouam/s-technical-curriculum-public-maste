import React, { Component } from "react";
import "../styles/Main.css";

const styles = {
    // move the contents of respective .css file to this styles object
    // then remove the classNames, and reference the style object inside the component
}

class Main extends Component {
    render() {
        return (
            <section className="main">

                {/* Dynamically add in the user profile items */}
                <h2> User Profile </h2>
                <p>Name: {} </p>
                <p>Age: {}</p>
                <p>Email: {}</p>
                <p>Address: {t}</p>
                <p>Phone: {}</p>

            </section>
        );
    }

}

export default Main;