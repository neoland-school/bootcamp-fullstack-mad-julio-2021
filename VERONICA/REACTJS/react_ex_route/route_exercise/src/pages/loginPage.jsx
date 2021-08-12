import React, {useRef} from "react";
// import {
//     useHistory,
//     useLocation
//   } from "react-router-dom";
  
import { useHistory } from "react-router-dom";

function LoginForm() {
 
  const myHistory = useHistory();
  const myRef = useRef(""); //Referencia de lo que vale el value en el DOM
 

  function handleSubmit(e) { //es la función que se ejecuta cuando se lanza el submit
    
    e.preventDefault();//e este objeto representa el evento se ejecuta cuando se lanza el evento, para evitar la redirección del action
    sessionStorage.setItem("email", myRef.current.value); //guarda la información del input en el sessionStorage
    // console.log('handleSubmit');
    myHistory.push('/user');
  }
 
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="input-email">
        <label>Escribe tu email: </label>
        <input
          ref={myRef}
          type="email"
          name="email"
          id="email"
          required
        ></input>
      </div>
      <div className="input-submit">
        <input type="submit" value="login" 
        // onClick={() => {
        //     myHistory.push('/user');
        // }}
        ></input>
    
      </div>
    </form>
  );
}
export default LoginForm;
