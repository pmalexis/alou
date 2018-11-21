import React, { Component } from 'react';
import './AppHeader.css'
import Nav from "../components/nav/Nav";
import '../components/nav/Nav.css'
import Foward from "../components/foward/Foward";


export default class AppHeader extends Component {

    render() {
        return (
            <header className="App-header">
                <Nav/>
                <Foward/>
            </header>
        );
    }
}

