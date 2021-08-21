
'use strict';//Creamos un componente React de Clase.   
//Es de clase porque se utiliza una claseJS para crearlo  
// Este componente represente un Boton de Like  
class LikeButtonComponent extends React.Component {   
    // los componentes de clase siempre extienden de React.Component  
  constructor(props) {  
    super(props);  
    // this.state = { liked: false };  
  }  printHello(){  
      console.log('Hola Mundo Desde Componente de React');  
  }  render() {  
    // if (this.state.liked) {  
    //   return 'You liked this.';  
    // }    return React.createElement(  
      'button',  
      { onClick: () => this.printHello() },  
      'Like'  
 
  }  
}// Cojo el contenedor que yo quiero utilizar para React  
const domContainer = document.getElementById('MY_FIRST_REACT_APP');  
// Llamo a la funcion Render de ReactDOM,   
// Necesito el nombre de la clase del componente a renderizar  
// necesito el nodo del DOM contenedor donde lo quiero pintar  
ReactDOM.render(React.createElement(LikeButtonComponent), domContainer)
