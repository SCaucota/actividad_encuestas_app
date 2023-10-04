import React, {useState} from 'react';
import './App.css';
import Encuesta from './components/Encuesta';

function App() {

    const [respuestas, setRespuestas] = useState([]);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const handleRespuestas = (respuestaSeleccionada) => {
        setRespuestas([...respuestas, respuestaSeleccionada]);
        avanzarPregunta(respuestaSeleccionada);
    };

    const avanzarPregunta = (respuestaSeleccionada) => {
        if(preguntaActual === 0) {
            if(respuestaSeleccionada === 'Terror'){
                setPreguntaActual(1);
            }else if(respuestaSeleccionada === 'Romance'){
                setPreguntaActual(2);
            }else if(respuestaSeleccionada === 'Comedia'){
                setPreguntaActual(3);
            }
        }else if(respuestaSeleccionada === 'No vi ninguna'){
            setPreguntaActual(4)
        }else if(preguntaActual === 4){
            setRespuestas(respuestas.pop())
            setRespuestas([...respuestas, respuestaSeleccionada])
            setPreguntaActual(null)
        }else{
            setPreguntaActual(null)
        }
    }

    const preguntas = [
        {id:1, pregunta: '¿Qué género te gusta más?', opciones: ['Terror', 'Romance', 'Comedia']},
        {id: 2, pregunta: '¿Haz visto alguna de estas películas? ¿Cuál te gustó más?', opciones: ['IT', 'Chucky', 'El juego del miedo','No vi ninguna'] },
        {id: 3, pregunta: '¿Haz visto alguna de estas películas? ¿Cuál te gustó más?', opciones: ['Yo antes de ti', 'Diario de una pasión', 'Tres metros sobre el cielo', 'No vi ninguna'] },
        {id: 4, pregunta: '¿Haz visto alguna de estas películas? ¿Cuál te gustó más?', opciones: ['Son como niños', 'Scary Movie', '¿Qué pasó ayer?','No vi ninguna'] },
        {id: 5, pregunta: '¿Cuál es tu película favorita de este género?'}
    ]

    return (
        <div className='appContainer'>
            <h1 className='tituloApp'>App de Encuestas</h1>
            <Encuesta
                pregunta={preguntas[preguntaActual]}
                respuestas={respuestas}
                opcionSeleccionada={opcionSeleccionada}
                handleRespuestas={handleRespuestas}
                setOpcionSeleccionada={setOpcionSeleccionada}
            />
        </div>
    )
}

export default App