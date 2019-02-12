import React, {Component} from 'react';
import logo from './logo.svg';
import Titulo from "./Titulo"
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Titulo/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>
                        <h4> jusnito</h4>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
