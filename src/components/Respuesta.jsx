import React from 'react';
import '../App.css';

const Respuesta = ({respuestas}) => {
    return (
        <div>
            <div className='respuesta'>
                <h2>Respuesta:</h2>
                <div>
                    <h3>{respuestas[0] + ' - ' + respuestas[1]}</h3>
                </div>
            </div>
            <div>
                <h2>Encuesta completada ¡Muchas gracias!</h2>
            </div>
        </div>
    )
}

export default Respuesta