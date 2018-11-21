import React, { Component } from 'react';
import './App.css';
import AppBody from './layout/AppBody';
import $ from "jquery";
import AppHeader from "./layout/AppHeader";

class App extends Component {

    handleClickPokemon = () => {
        if(!$('AppBody').hasClass('show'))
            $('.AppBody').addClass('show');
    }

  render() {
    return (
      <div className="App">
          <AppHeader/>
          <AppBody handleClickPokemon={this.handleClickPokemon}/>
      </div>
    );
  }
}

export default App;
