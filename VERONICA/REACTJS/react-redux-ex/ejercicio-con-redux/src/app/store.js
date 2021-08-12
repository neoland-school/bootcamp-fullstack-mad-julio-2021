import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from '../features/counter/counterSlice'; //Reducer importado en el Store
import cambiarColorReducer from '../features/color-button/ColorSlice';

export const store = configureStore({  //Almacen de mi estado global de la aplicación
  reducer: {
    contador: contadorReducer,
    cambiarColor: cambiarColorReducer,
  },
});
