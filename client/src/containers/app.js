import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//import Header from './component/header';
//import User from './component/user';

export default class App extends Component {
    componentDidMount() {
        
    }

    render() {
        return(
            <div id="root">
                <BrowserRouter>
                    <div>
                        <h1>App</h1>
                        <div>
                            <h3>Canvas</h3>
                            <canvas>

                            </canvas>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}