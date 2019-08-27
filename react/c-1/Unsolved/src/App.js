import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


class App extends Component {

  state = {
    user: {
      name: 'John',
      age: 31,
      email: 'johndoe@gmail.com',
      address: '1234 Shadow Street, Salt Lake City, UT 84116',
      phone: '801-838-9393'
    }
  }

  render() {

    // Destructure name out of state for the Header component

    return (
      <div className="App">
        <header className="App-header">

          {/* Add props to <Header /> to customize the welcome greeting */}
          <Header />

          {/* Add props to <Main /> pass down the user profile */}
          <Main />

          <Footer />

        </header>
      </div>
    );
  }
}

export default App;
