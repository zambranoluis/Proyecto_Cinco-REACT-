import ReactAudioPlayer from "react-audio-player";
import simpsonsIntro from "../Audio/simpsonsIntro.mp3";
import simpsonFont from "../Fuentes/SimpsonFont.otf";
import welcome from "../Imagenes/welcome.png";
import fondo from "../Imagenes/fondo.jpg";
import fondo2 from "../Imagenes/fondo2.jpg";

const Home = () => {
    
    const estilos = {
        contenedorPlayer:"min-w-screen items-end flex flex-col justify-center",
        player: "h-[20px] w-[200px] rounded-none border-none outline-none mb-2",
        contenedorWelcome:"min-w-screen items-center flex flex-col justify-center",
        welcome: "w-[600px] bg-[#F39B52] rounded-xl my-5",
        fondo:"mb-5 rounded-xl  drop-shadow-xl w-[800px]",
        titulo:"font-bold text-5xl text-[#d965a0] text-center",
        detalles:"text-center font-semibold text-xl my-3",
    } 

    return (
        <main>
            
            <div className={estilos.contenedorWelcome}>
                <img className={estilos.welcome} src={fondo2} alt="" />
                <p className={estilos.titulo}>¡Hola! y Bienvenido a mi aplicación de React.</p>
                <p className={estilos.detalles}>Aquí podrás encontrar información detallada sobre todos los personajes de la serie "Los Simpsons", como el nombre de los personajes, su género, su ocupación, su estado y una breve reseña que explica su historia.</p>
                <p className={estilos.detalles}>¡Espero que te diviertas leyendo las divertidas reseñas y que te enteres de lo que te perdiste sobre estos divertidos personajes!</p>
            </div>
            <div className={estilos.contenedorPlayer}>
                <ReactAudioPlayer className={estilos.player}
                    src={simpsonsIntro}
                    autoPlay
                    controls
                />
            </div>
        </main>
        
    );
}

export default Home;