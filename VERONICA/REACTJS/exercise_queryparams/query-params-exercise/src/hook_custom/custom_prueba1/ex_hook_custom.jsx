import {useState, useEffect} from 'react';
//No lo estoy utilizando 

function useTextCase (refValue = ''){
         
        const [contador,setContador] = useState(0);
        const [parrafo,setParrafo] = useState('');
        // const [valueInput] = useState('');
        useEffect(() => {
            contador%2===0 
            ? setParrafo(refValue.toUpperCase())
            : setParrafo(refValue.toLowerCase())
        }, [contador, refValue]);
        return [contador, parrafo,() => setContador(contador+1)];
   
}

export default useTextCase;