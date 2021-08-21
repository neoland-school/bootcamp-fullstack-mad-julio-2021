import React from "react";

class DemoUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      pokemon: {}
    };
    this.myRef = React.createRef();
    console.log('constructor');
  }


  greet(){
    this.setState({
        name: `Hola, ${this.myRef.current.value}`
    })
  }

  componentDidMount(){ // SE EJECUTA CUANDO EL COMPONENTE ESTA MONTADO
      console.log('componentDidMount')
    fetch('https://pokeapi.co/api/v2/pokemon/3/')
    .then(res => res.json())
    .then(data => {
       this.setState({
           pokemon: data
       })
    })
  }


  render() {
      console.log('Estoy en el render');// 3
    return (
      <div>
        <input ref={this.myRef}></input>
        <button onClick={() => this.greet()}>Saludame</button>
        <p>{this.state.name}</p>
        <p>{this.state.pokemon.name}</p>
        <p>Experienca Base: {this.state.pokemon.base_experience}</p>
        <img src={this.state.pokemon.sprites?.front_default}></img>
      </div>
    );
  }
}

export default DemoUpdate;
