import React, { Component } from 'react';
import './Nav.css'
import Logo from "../logo/Logo";
import '../logo/Logo.css'


export default class Nav extends Component {
    render() {
        return (
            <div className="Nav-header">
                <Logo/>
            </div>
        );
    }
}