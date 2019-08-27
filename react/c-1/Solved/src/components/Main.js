import React, { Component } from "react";

const styles = {
    main: {
        background: "#fff",
        padding: 20
    }
}

class Main extends Component {
    render() {
        return (
            <section style={styles.main}>

                {/* Dynamically add in the user profile items */}
                <h2> User Profile </h2>
                <p>Name: {this.props.user.name} </p>
                <p>Age: {this.props.user.age}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Address: {this.props.user.address}</p>
                <p>Phone: {this.props.user.phone}</p>

            </section>
        );
    }

}

export default Main;