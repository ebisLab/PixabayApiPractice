import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Components/navbar/NavBar';
import Search from './Components/search/Search';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
      <div>
      <NavBar />
      <Search />
      </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
