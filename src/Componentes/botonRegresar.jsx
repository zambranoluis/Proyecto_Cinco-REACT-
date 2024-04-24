const BotonRegresar = () => {
    const estilos = {
        contenedorBoton:"",
        anclaRegresar:"",
        botonRegresar:"",
        parrafoRegresar:"flex justify-center bg-[#FF81C1] p-1.5 text-center rounded-md my-2",
        spanRegresar:""
    }
    return (
        <div className={estilos.contenedorBoton}>
            <a className={estilos.anclaRegresar} href="http://localhost:3000/personajes">
                <button className={estilos.botonRegresar}>
                    <p className={estilos.parrafoRegresar}><span className={estilos.spanRegresar} class="material-symbols-outlined">arrow_back</span>Regresar</p>
                </button>
            </a>
        </div>
    );
}

export default BotonRegresar;