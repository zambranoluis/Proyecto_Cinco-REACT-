
const estilosBotonesPaginacion = {
    botonesPersonajesPorPagina:"bg-[#FF81C1] p-1.5 text-center rounded-md min-w-[30px]",
    botonesNavegacion:"bg-[#FF81C1] p-1.5 text-center rounded-md min-w-[30px]",
}

const BotonesPersonajesPorPagina = (props) => {
    return (
        <button className={estilosBotonesPaginacion.botonesPersonajesPorPagina} onClick={props.onClick} onChange={(e)=>{ e.preventDefault(); props.onChange()}} >
            {props.contenido}
        </button>
    );
}

const BotonesPaginacion = (props) => {
    
    return (
        <button className={estilosBotonesPaginacion.botonesNavegacion} id={props.id} onClick={props.onClick}>
            {props.contenido}
        </button>
    );
}




export {BotonesPaginacion, BotonesPersonajesPorPagina};