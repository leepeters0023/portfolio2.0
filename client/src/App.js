import React from 'react';
import './App.css';
import { Link } from 'react-router-dom' 
import About from './About'
import portfolio from './Portfolio'
import {Switch, Route} from 'react-router-dom'
import Header from './Header';
import Portfolio from './Portfolio';

function App() {
  return(
    <div>
    <Header />
    <Switch>
      {/*<Route exact path={'/'} component={Home} />*/}
      <Route path={'/about'} component={About} />
      {/*<Route path={'/portfolio'} component={Portfolio} />*/}
    </Switch>
    </div>
  )
}

/* // not sure what this is
function App() {
  return (
    <div className="App">
      <h1>Hello portfolio!</h1>
      <Link to={'/about'}>
        <button>About Me</button>
      </Link>
    </div>
  );
}
*/
export default App;
