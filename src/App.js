import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from'material-ui/styles';
import NavBar from './Components/navbar/NavBar';
import Search from './Components/search/Search';
import {orange500} from 'material-ui/styles/colors/';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const theme = createMuiTheme;
const muiTheme = getMuiTheme(darkBaseTheme);

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
