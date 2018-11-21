import React, { Component } from 'react';
import './AppBody.css';
import Filter from "../components/filter/Filter";
import ContainerPokemon from "../components/containerpokemon/ContainerPokemon";
import Card from "../components/card/Card";

export default class AppBody extends Component {
    render() {
        return (
            <div className={"AppBody"}>
                <Filter/>
                <ContainerPokemon handleClickPokemon={this.props.handleClickPokemon}/>
                <Card/>
            </div>
        )
    }
}