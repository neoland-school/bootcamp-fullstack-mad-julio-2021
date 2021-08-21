function useAuth (){
    let myEmail = sessionStorage.getItem("email");

   //  myEmail !== null ? <div>Hay un usuario</div> : <div>Tienes que estar logueado</div>
   console.log(myEmail);
    return  myEmail !== null; //Esta función debe devolver true cuando tenga un email y false cuando no lo
    
 }

 export default useAuth;