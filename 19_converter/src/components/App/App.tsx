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
         <main className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li onClick={addCurrencyConvertInit}>
                                <Link to="/currency">Currency Converter</Link>
                            </li>
                            <li onClick={addLengthConvertInit}>
                                <Link to="/length">Length Converter</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                  <Route path="/length" component={LengthConverter} />
                  <Route path="/currency" component={CurrencyConverter} />
                </Switch>

            </main>
    </BrowserRouter> 
  );
}



export default App;
