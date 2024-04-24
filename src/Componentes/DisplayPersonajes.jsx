const DisplayPersonajes = (props) => {

    const estilos = {
        display: "hover:scale-105 hover:cursor-pointer flex flex-col w-[270px] h-[700px] text-white gap-4 justify-center bg-[#636363]  p-4 rounded-xl",
        nombre:"h-[10%] text-xl font-bold",
        imagen:"w-full h-[60%] aspect-1/1 drop-shadow-xl bg-[#DEBD84] rounded-xl",		
        contenedorDetalles:"h-[20%]"
    }

    return (
        <div data-aos="flip-left" className={estilos.display} id={props.id} key={props.id} onClick={(e)=>{ e.preventDefault(); props.onClick(props.id)}}>
            <p className={estilos.nombre}>{props.nombre}</p>
            <img className={estilos.imagen} src={props.imagen} alt={props.nombre} />
            <div className={estilos.contenedorDetalles}>
                <p><span className="font-bold">Género: </span>{props.genero}</p>
                <p><span className="font-bold">Ocupación: </span>{props.ocupacion}</p>
                <p><span className="font-bold">Estado: </span>{props.estado}</p>
            </div>
        </div> 
    );
}

export default DisplayPersonajes;