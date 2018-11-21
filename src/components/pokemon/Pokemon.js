import React, { Component } from 'react';
import './Pokemon.css';

export default class Pokemon extends Component {

    render() {
        return(
            <div className={"Pokemon"} onClick={this.props.handleClickPokemon}>
                <img src={this.props.pokemon} alt=""/>
            </div>
        )
    }
}