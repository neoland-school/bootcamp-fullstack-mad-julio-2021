// 1- Crear un componente que tenga un input y un botón y que cada vez que se pulse el botón muestre en un p el texto del input en upperCase
// 2- Añadir a ese componente un contador que si es par, te muestre el texto del input en upperCase y si es Impar te lo muestre en lowerCase
// 3- Crear un custom hook que englobe toda esta lógica para poder usarla en cualquier compoennte //No terminado


import useTextCase from '../../hook_custom/custom_prueba1/ex_hook_custom';
import {useRef} from 'react';

function ExerciseHookCustom (){
       const myRef = useRef('');
       const [contador, parrafo, incrementar] = useTextCase (myRef.current.value);

return(
<div>
    {/* //actualizar el input */}
    <input ref={myRef} type="text" name="input"></input> 
    {/* //actualizar el parrafo */}
    <button onClick={() => incrementar(contador + 1)}>Dale click</button>
    {/* Me debe aparecer el string en el p */}
    <p>{contador}</p>
    <p>{parrafo}</p>
</div>
);
}

export default ExerciseHookCustom;