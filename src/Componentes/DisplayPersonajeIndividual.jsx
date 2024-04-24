const DisplayPersonajeIndividual = (props) => {
    const estilos = {
        display: " flex flex-col w-[60%] h-[850px] text-white gap-4 justify-center items-center bg-[#636363]  p-4 rounded-xl my-2",
        nombre:"h-[5%] text-4xl font-bold",
        imagen:" w-[240px] h-[340px] drop-shadow-xl bg-[#DEBD84] rounded-xl",		
        contenedorDetalles:"h-[30%] text-center",
        detalles:"text-xl",	
        spanDetalles:"font-bold",
    }

    return (
        <div className={estilos.display} id={props.id} key={props.id}>
            <p className={estilos.nombre}>{props.nombre}</p>
            <img className={estilos.imagen} src={props.imagen} alt={props.nombre} />
            <div className={estilos.contenedorDetalles}>
                <p className={estilos.detalles}><span className={estilos.spanDetalles}>Género: </span>{props.genero}</p>
                <p className={estilos.detalles}><span className={estilos.spanDetalles}>Ocupación: </span>{props.ocupacion}</p>
                <p className={estilos.detalles}><span className={estilos.spanDetalles}>Estado: </span>{props.estado}</p>
                <p className={estilos.detalles}><span className={estilos.spanDetalles}>Historia: </span>{props.historia}</p>
            </div>
        </div>
    );
}

export default DisplayPersonajeIndividual;