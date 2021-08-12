import {useState} from 'react';
import './index.css';

function ExercisesUseState (){

const [colorButton, setColor] = useState('black');

return (
   <button className={'color-' + colorButton} id='button-style' onClick={()=>
    setColor(colorButton === 'red' ? 'black' : 'red')}>
    Dale Click
    </button>
);
}

export default ExercisesUseState;