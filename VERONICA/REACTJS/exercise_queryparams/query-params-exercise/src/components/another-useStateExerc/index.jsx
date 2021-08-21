import {useState} from 'react';


function ParrafoUseState (){
// const valueInput = useRef(''); //No es necesario
const [parrafo, escribirParrafo] = useState('');

return (
   <div>
    <input placeholder='Write something' onChange={(e)=> escribirParrafo(e.target.value)}></input> 
    <p>{parrafo}</p>
    </div>
   );
}

export default ParrafoUseState;