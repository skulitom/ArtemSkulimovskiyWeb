import './App.scss';
import React from 'react';
import * as ROUTES from './constants/routes';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core';
import {purple, cyan} from '@material-ui/core/colors';
import HomePage from './components/home/HomePage';

const theme = createMuiTheme({
   palette: {
      type: 'dark',
      primary: purple,
      secondary: cyan
   },
   status: {
      danger: 'red',
   }
});


function App() {
   return (
      <div className="App">
         <ThemeProvider theme={theme}>
            <Router>
               <Switch>
                  <Route path={ROUTES.HOME}>
                     <HomePage />
                  </Route>
               </Switch>
            </Router>
         </ThemeProvider>
      </div>
   );
}

export default App;
