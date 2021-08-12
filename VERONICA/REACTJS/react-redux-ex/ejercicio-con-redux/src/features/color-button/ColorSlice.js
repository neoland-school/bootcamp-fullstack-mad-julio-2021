import {  createSlice } from '@reduxjs/toolkit'; //Importo el createSlice de la librería de redux


const initialState = { // el valor inicial de esa porción de state.
  color: 'teal', 
};


export const cambiandoColorSlice = createSlice({ //la función createSlice

    //Acepta como parámetro un objeto
    name: 'cambiarColor', //nombre de la porción
    initialState,
    // Aquí pondré mis reducers
    reducers: {
    cambiarColor: (state) => { //nombre del reducer
        console.log('cambiarColor',state);
        return state.color === 'teal' ? 'brown' : 'teal'; //Con su función de cambiar
      },
    },
});

export const {cambiarColor} = cambiandoColorSlice.actions; //Exporto las actions generadas por la función createSlice

export const cambioDeColor = (state) => {
    console.log('state de cambio de color', state);
    return state.color}; //Selector creado

export default cambiandoColorSlice.reducer; //Se debe exportar el reducer