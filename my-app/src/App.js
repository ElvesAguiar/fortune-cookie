import React, { Component } from "react";
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookiePhrase:''
    }

    this.phrase = [
      'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
    this.openCookie = this.openCookie.bind(this);
  }


  openCookie(){
    let state = this.state;
    let radomNumber = Math.floor(Math.random()* this.phrase.length);
    state.cookiePhrase = '"'+this.phrase[radomNumber]+'"';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" />
        <Button name="open cookie" actionButton={this.openCookie}/>
        <h3 className="cookiePhrase">{this.state.cookiePhrase}</h3>
      </div>
    );
  }
}
export default App;


class Button extends Component {
  render() {
    return(
    <button onClick={this.props.actionButton}>{this.props.name}</button>);
  }

}