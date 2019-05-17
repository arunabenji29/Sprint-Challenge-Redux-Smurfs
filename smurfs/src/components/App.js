import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import  Smurfs  from './Smurfs'
import SmurfForm from './SmurfForm'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/addSmurf'>Add Smurf</Link>
          </nav>
          <Route exact path='/' component={Smurfs} />
          <Route path='/addSmurf' component={SmurfForm} />
        </div>
      </Router>
    );
  }
}

export default App;
