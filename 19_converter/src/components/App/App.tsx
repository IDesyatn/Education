import React from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import loadable from "@loadable/component";

import {addLengthConvertInit, addCurrencyConvertInit} from '../../Store/actionsTypeLength'

const CurrencyConverter = loadable(()=>import('../Pages/CurrencyConverter'))
const LengthConverter = loadable(()=>import('../Pages/LengthConverter'))

function App() {
  return (
    <BrowserRouter>
                <header className="App-header">
                    <nav>
                        <ul className ="navigation">
                            <li onClick={addCurrencyConvertInit} className="navigation__list">
                                <Link to="/currency" className='navigation_li'>Currency Converter</Link>
                            </li>
                            <li onClick={addLengthConvertInit} className="navigation__list">
                                <Link to="/length" className='navigation_li' >Length Converter</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                  <Route path="/length" component={LengthConverter} />
                  <Route path="/currency" component={CurrencyConverter} />
                </Switch>


    </BrowserRouter> 
  );
}



export default App;
