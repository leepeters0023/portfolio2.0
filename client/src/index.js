import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom' 
import './App.css';
import App from './App';
import Home from './Home'
import Header from './Header';
import Design from './Design';
import WebDev from './WebDev';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

function Router(props) {
  return(
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path={'/'} component={App} />
        <Route path={'/Home'} component={Home} />
        <Route path={'/WebDev'} component={WebDev} />
        <Route path={'/Design'} component={Design} />
        <Route path={'/Footer'} component={Footer} />
      </Switch>
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
//ReactDOM.render(<Router />, document.getElementById('root')); < - not sure why this change, remember for later

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
