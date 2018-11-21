import React, { Component } from 'react';
import '../../App.css'
import '../logo/Logo.css'
import pika from '../../assets/img/pokeball.png';

export default class Logo extends Component {
    render() {
        return (
            <div className="logo-pika">
                    <img src={pika}></img>
            </div>
        );
    }
}
