import React from "react";
import { useLocation } from "react-router-dom";

//El que recupera
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PaginaDos() {
      
  let query = useQuery(); //Llamada a funcion useQuery

  return (
    <div>
     <p>Hola query params: {query.get('parrafo')} desde tu segunda página</p>
    </div>
  );
}

export default PaginaDos;
