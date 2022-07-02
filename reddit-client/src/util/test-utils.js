/*
La funzione di React Testing Library render accetta un albero di elementi React 
e ne esegue il rendering. Proprio come in una vera app, qualsiasi componente 
connesso a Redux avrà bisogno di un componente React-Redux <Provider> avvolto 
attorno a sé , con un vero negozio Redux impostato e fornito.

Inoltre, il codice di test dovrebbe creare un'istanza del negozio Redux separata 
per ogni test, invece di riutilizzare la stessa istanza del negozio e reimpostarne 
lo stato . Ciò garantisce che i valori non perdano accidentalmente tra i test.

Invece di copiare e incollare la stessa creazione e Provider configurazione 
del negozio in ogni test, possiamo utilizzare l' wrapper opzione nella render 
funzione ed esportare la nostra funzione personalizzata render che crea un nuovo 
negozio Redux ed esegue il rendering di un file <Provider> 
*/

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

//import { configureStore } from '@reduxjs/toolkit'
//sostituito con
import { store } from '../Components/App/store';

const AllTheProviders = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}