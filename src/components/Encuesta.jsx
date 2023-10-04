import React, { useState } from 'react';
import '../App.css';
import Respuesta from './Respuesta';

const Encuesta = ({ pregunta, respuestas, opcionSeleccionada, handleRespuestas, setOpcionSeleccionada }) => {

    const [peliEnviada, setPeliEnviada] = useState('');

    if (!pregunta) {
        return (
            <Respuesta respuestas={respuestas} />
        )
    };

    const handleNoViNingunaSubmit = (e) => {
        e.preventDefault();
        handleRespuestas(peliEnviada);
    };

    return (
        <>
            <h2 className='subtitulo'>Encuestas Pendientes</h2>
            <div>
                <h3>{pregunta.pregunta}</h3>
                {
                    opcionSeleccionada === 'No vi ninguna' ? (
                        <form onSubmit={handleNoViNingunaSubmit}>
                            <input
                                className='inputPeli'
                                type="text"
                                name="otro"
                                value={peliEnviada}
                                onChange={(e) => setPeliEnviada(e.target.value)}
                            />
                            <button className='botonEnviar' type="submit">Enviar</button>
                        </form>
                    )
                        : 
                        <div>
                            {pregunta.opciones.map((opcion, index) => (
                                <div key={index}>
                                    <input
                                        type='radio'
                                        name='respuesta'
                                        value={opcion}
                                        checked={opcion === opcionSeleccionada}
                                        onChange={() => {
                                            if (opcion === opcionSeleccionada) {
                                                handleRespuestas(opcion);
                                                setOpcionSeleccionada(null);
                                            } else {
                                                handleRespuestas(opcion)
                                                setOpcionSeleccionada(opcion);
                                            }
                                        }}
                                    />
                                    <label className='opciones'>{opcion}</label>
                                </div>
                            ))}
                        </div>
                }
            </div>
        </>
    );
};

export default Encuesta;
