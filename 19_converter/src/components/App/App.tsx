import React from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import loadable from "@loadable/component";

const CurrencyConverter = loadable(()=>import('../Pages/CurrencyConverter'))
const LengthConverter = loadable(()=>import('../Pages/LengthConverter'))

function App() {
  return (
    <BrowserRouter>
         <main className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li onClick={testFunc}>
                                <Link to="/currency">Currency Converter</Link>
                            </li>
                            <li>
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


function testFunc(){
  console.log('work')
}

export default App;
