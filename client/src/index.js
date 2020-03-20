import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom' 
import './index.css';
import App from './App';
import About from './About';
import Header from './Header';
import Portfolio from './Portfolio';
import * as serviceWorker from './serviceWorker';

function Router(props) {
  return(
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path={'/'} component={App} />
        <Route path={'/about'} component={About} /> 
        <Route path={'/portfolio'} componenet={Portfolio} />
      </Switch>
      </div>
    </BrowserRouter>
    
  )
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
//ReactDOM.render(<Router />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
