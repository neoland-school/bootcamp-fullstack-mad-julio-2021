import {  createSlice } from '@reduxjs/toolkit'; //Importo el createSlice de la librería de redux


const initialState = { // el valor inicial de esa porción de state.
  value: 0, 
};


export const contadorSlice = createSlice({ //la función createSlice
  //Acepta como parámetro un objeto
   name: 'contador', //nombre de la porción
  initialState,
  //Aquí pondré mis reducers
  reducers: { 
    incrementar: (state) => { //nombre del reducer
      state.value += 1; //Con su función de incrementar
    },
  },
  
});

export const {incrementar} = contadorSlice.actions; //Exporto las actions generadas por la función createSlice

export const selectContador = (state) => state.contador.value; //Selector creado

export default contadorSlice.reducer; //Se debe exportar el reducer
