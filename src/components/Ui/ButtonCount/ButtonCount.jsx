import React from 'react'
import { useState } from 'react';

export const ButtonCount = () => {

        // primer posicion: valor inicial
        //Segunda posición: función que va alterar variable
        
        const [counter, setCounter] = useState(0);
        
        const handleAdd = () => {
            setCounter(counter+1)
        }
        const handleRemove = () => {
            setCounter(counter-1)
        }
        const Reset = () => {
            setCounter(0)
        }

    return (
        <>
            <h2>{ counter }</h2>
            <button onClick={handleAdd}>Sumar</button>
            <button onClick={handleRemove}>Restar</button>
            <button onClick={Reset}>Resetear</button>
        </>
    )
}
