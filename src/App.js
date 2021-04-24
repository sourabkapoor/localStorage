import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import './App.css';
import NavBar from './components/navbar/nabBar';
import Home from './views/home';
import ManageProducts from './views/manageProducts';
import Data from "./initialData.json"

class App extends React.Component {

  componentDidMount() {
    // to populate some data
    localStorage.setItem('data', JSON.stringify(Data.data))
  }
  

  render() {
    return (
      <div className="App">
        {/* common Navbar */}
        <NavBar />

        {/* Different routes */}
        <div className="App-content">
        <Switch>

          <Route 
            path="/home"
            exact
            default
            render={(props) => <Home {...props}/>}/>

          <Route 
            path="/ManageProducts"
            exact
            render={(props) => <ManageProducts {...props}/>}/>

          <Redirect to="/home" />

        </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
