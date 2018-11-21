import React, { Component } from 'react';
import './ContainerPokemon.css';
import Pokemon from "../pokemon/Pokemon";

export default class ContainerPokemon extends Component {

    render() {
        let pokemons = [];
        for (let i = 1; i <= 151; i++) {
            let img = require('./../../assets/pokemon/img_'+i+'.png');
            pokemons.push(<Pokemon key={i} handleClickPokemon={this.props.handleClickPokemon} pokemon={img}/>);
        }
        return(
            <div className={"ContainerPokemon"}>
                {pokemons}
            </div>
        )
    }
}