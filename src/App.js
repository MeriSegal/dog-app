import React from 'react';
import HomePage from './components/HomePage';
import DogsPage from './components/DogsPage';
import RacePage from './components/RacePage';
import {HashRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  
}  


  render() {   
    return (
      <div className="App">
       <HashRouter>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/dogs">
              <DogsPage />
            </Route> 
            <Route exact path="/dogs/:race">
              <RacePage/>  
            </Route>     
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
