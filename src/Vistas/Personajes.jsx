import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import DisplayPersonajes from "../Componentes/DisplayPersonajes";
import {BotonesPaginacion, BotonesPersonajesPorPagina} from "../Componentes/BotonesPaginacion";

const Personajes = () => {

    const estilos = {
        principal:"min-h-screen flex flex-col items-center",
        titulo:"text-6xl font-bold my-5 text-[#EF5A52]",
        contenedorPaginas:"flex flex-col gap-2",
        contenedorPersonajesPorPagina:"flex justify-center items-center gap-1",
        contenedorPaginasTotales:"flex justify-center items-center gap-1",
        contenedorBotones:"flex gap-5 py-2",
        contenedorPersonajes:"grid grid-cols-4 gap-8 place-items-center mx-2 my-5",
    }

    const [info, setInfo] = useState([])
    const [personajes, setPersonajes] = useState([])
    const [pagina, setPagina] = useState(1);
    const [personajesPorPagina, setPersonajesPorPagina] = useState(5); 


    useEffect(()=> { 
        async function obtenerDatos(){
            const respuesta = await axios.get(`https://apisimpsons.fly.dev/api/personajes/?page=${pagina}&limit=${personajesPorPagina}`);
            setInfo(respuesta.data);
            setPersonajes(respuesta.data.docs);
        };
        obtenerDatos();
    },[pagina, personajesPorPagina]);


    const navegacion = useNavigate();

    const redirigir = (id) =>{
        navegacion(`/personaje/${id}`);
    }


    return (
        <main className={estilos.principal}>
            <h1 className={estilos.titulo}>Personajes</h1>
            <div className={estilos.contenedorPaginas}>
                <div className={estilos.contenedorPersonajesPorPagina}>
                    <p>Personajes por Página:</p>
                    <BotonesPersonajesPorPagina
                        contenido="5" 
                        onClick={()=>{setPersonajesPorPagina(5)}}
                    />
                    <BotonesPersonajesPorPagina
                        contenido="10"
                        onClick={()=>{setPersonajesPorPagina(10)}}
                    />
                    <BotonesPersonajesPorPagina
                        contenido="20"
                        onClick={()=>{setPersonajesPorPagina(20)}}
                    />
                    <BotonesPersonajesPorPagina
                        contenido="30"
                        onClick={()=>{setPersonajesPorPagina(30)}}
                    />
                    <BotonesPersonajesPorPagina
                        contenido="40"
                        onClick={()=>{setPersonajesPorPagina(40)}}
                    />
                    <BotonesPersonajesPorPagina
                        contenido="50"
                        onClick={()=>{setPersonajesPorPagina(50)}}
                    />
                </div>
                <div className={estilos.contenedorPaginasTotales}>
                    <p>Páginas Totales:</p>
                    <BotonesPersonajesPorPagina contenido={(info.totalDocs) ? Math.ceil(info.totalDocs / personajesPorPagina) : 0}/>
                </div>
            </div>
            <div className={estilos.contenedorBotones}>
                <BotonesPaginacion 
                    onClick={()=>{
                        setPagina(1)
                    }} 
                    contenido="<<- Primera"
                />
                <BotonesPaginacion 
                    onClick={()=>{
                        (pagina === 1) ? setPagina(Math.ceil(info.totalDocs / personajesPorPagina)) : setPagina(pagina-1)
                    }}
                    contenido="<- Anterior" 
                />
                <BotonesPaginacion contenido={pagina}/>
                <BotonesPaginacion
                    onClick={()=>{
                        (pagina === Math.ceil(info.totalDocs / personajesPorPagina)) ? setPagina(1) : setPagina(pagina+1)
                    }}
                    contenido="Siguiente ->"
                />
                <BotonesPaginacion
                    onClick={()=>{
                        setPagina(Math.ceil(info.totalDocs / personajesPorPagina))
                    }}
                    contenido="Última ->>"
                />
            </div>
            <div className={estilos.contenedorPersonajes}>
                {
                    personajes.map(
                        (personaje) => (
                            <DisplayPersonajes
                                key={personaje._id}
                                id={personaje._id}
                                nombre={personaje.Nombre}
                                imagen={personaje.Imagen}
                                genero={personaje.Genero}
                                ocupacion={personaje.Ocupacion}
                                estado={personaje.Estado}
                                historia={personaje.Historia}
                                onClick={redirigir}
                            />
                        )
                    )
                }
            </div>
        </main>
    );
}

export default Personajes;