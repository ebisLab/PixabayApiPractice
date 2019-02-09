import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from'material-ui/styles';
import NavBar from './Components/navbar/NavBar';
import Search from './Components/search/Search';
import red from 'material-ui/styles/colors/';

const theme = createMuiTheme

class App extends Component {



  render() {
    return (
      <MuiThemeProvider theme = {theme} >
      <div>
      <NavBar />
      <Search />
      </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
