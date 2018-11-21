import React, { Component } from 'react';
import './Foward.css'


export default class Foward extends Component {

    constructor(props){
        super(props);

        this.state = {
            randomPokemon : '025'
        }

        this.imgUrl = ''
    }
    componentDidMount(){
        let randomNumber = Math.floor(Math.random() * 151) + 1;
        randomNumber = randomNumber <= 9 ? "00" + randomNumber : randomNumber <= 99 ? "0" + randomNumber : randomNumber;
        this.setState({randomPokemon : randomNumber})
    }

    render() {

        let pokemon = require('./../../assets/pokemonMinimaliste/' + this.state.randomPokemon +".jpg");

        return (
            <div className="minimalisme" style={{ backgroundImage: 'url(' + pokemon + ')' }}>
                <div className="gradient"></div>


            </div>
        );
    }
}

