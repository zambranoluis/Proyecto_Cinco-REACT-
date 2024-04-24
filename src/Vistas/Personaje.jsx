import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DisplayPersonajeIndividual from "../Componentes/DisplayPersonajeIndividual";
import BotonRegresar from "../Componentes/botonRegresar";

import loader from "../Imagenes/homeroGif.gif";


const Personaje = () => {
    const estilos = {
        contenedorPrincipal: "min-h-screen min-w-screen flex flex-col items-center justify-center gap-2",
    }


    const { id } = useParams();
    const [personajes, setPersonajes] = useState([]);
    const [personaje, setPersonaje] = useState({});




    useEffect(() => {
        async function obtenerDatos() {
                const respuesta = await axios.get(`https://apisimpsons.fly.dev/api/personajes/?page=1&limit=650`)
                setPersonajes(respuesta.data.docs)
        };
        obtenerDatos();
    }, [id])

    useEffect(() => {
        const personajeBuscado = personajes.filter(personaje => id === personaje._id)
        setPersonaje(personajeBuscado[0])
    }, [personajes])




    return (
        <main className={estilos.contenedorPrincipal}>
            {
                (personaje)
                    ? (
                        <>
                            <DisplayPersonajeIndividual
                                id={personaje._id}
                                nombre={personaje.Nombre}
                                imagen={personaje.Imagen}
                                genero={personaje.Genero}
                                ocupacion={personaje.Ocupacion}
                                estado={personaje.Estado}
                                historia={personaje.Historia}
                            />
                            <BotonRegresar
                            />
                            
                        </>
                    )
                    : (
                        <div>
                            <img src={loader} alt="loader" />
                        </div>
                    )
            }
        </main>
    );
}

export default Personaje;