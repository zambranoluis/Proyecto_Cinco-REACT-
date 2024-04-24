import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import SimpsonsLogo from '../Imagenes/SimpsonsLogo.png';
const NavBar = () => {

    const estilosNavBar = {
        navBar: 'flex justify-between items-center h-[70px] p-4 bg-[#4273DE]',
        logo: 'w-[110px] h-[60px]',
        contenedorBuscador: "flex flex-col",
        divBarraDeBusqueda: " flex flex-col",
        barraDeBusqueda: "w-[300px] pl-2 outline-none h-[30px] rounded-md focus:outline-[#F071BE]",
        divResultados: "hidden grid-cols-1 absolute top-[51px] w-[300px] min-h-[30px] bg-white rounded-md justify-center max-h-[200px] overflow-y-scroll overflow-x-hidden z-10",
        divNavLinks: "flex justify-between items-center gap-3",
    }

    let EstilosIsActive = ({ isActive }) => ({
        color: "#FFDF00",
        backgroundColor: (isActive) ? "rgba(25, 62, 99, 0.8)" : "rgba(25, 62, 99, 0.3)",
        paddingInline: "7px",
        paddingBlock: "3px",
        borderRadius: "5px",
    });

    const [personajes, setPersonajes] = useState([]);
    const [personaje, setPersonaje] = useState({});



    useEffect(() => {
        async function obtenerDatos() {
            const respuesta = await axios.get(`https://apisimpsons.fly.dev/api/personajes/?page=1&limit=650`)
            setPersonajes(respuesta.data.docs)
        };
        obtenerDatos();
    }, [])

    useEffect(() => {
        console.log(personajes);
    }, [personajes])

    const navegacion = useNavigate();

    const redirigir = (id,e) => {
        navegacion(`/personaje/${id}`);
    }

    return (
        <nav className={estilosNavBar.navBar}>
            <a href="http://localhost:3000/">
                <img className={estilosNavBar.logo} src={SimpsonsLogo} alt="TheSimpsonsLogo" />
            </a>
            <div className={estilosNavBar.contenedorBuscador}>
                <div className={estilosNavBar.divBarraDeBusqueda}>
                    <input
                        id='barraDeBusqueda'
                        className={estilosNavBar.barraDeBusqueda}
                        type="text"
                        placeholder='Buscar Personaje...'
                        onFocus={(e) => {
                            e.preventDefault();
                            document.getElementById('resultados').style.display = 'grid'
                            if (e.target.value === '') {
                                personajes.map((personaje) => {
                                    let parrafoNombre = document.createElement('p')
                                    parrafoNombre.setAttribute('id', personaje._id)
                                    parrafoNombre.onclick = () => {
                                        navegacion(`/personaje/${personaje._id}`);
                                    }
                                    parrafoNombre.className = 'hover:bg-[gray]'
                                    parrafoNombre.innerText = personaje.Nombre
                                    document.getElementById('resultados').appendChild(parrafoNombre)
                                })
                            }
                            if (e.target.value !== ''){
                                document.getElementById('resultados').innerHTML = ''
                                personajes.map ((personaje) => {
                                    if (personaje.Nombre.toLowerCase().includes(e.target.value.toLowerCase())){
                                        console.log("Encontrado")
                                        let parrafoNombre = document.createElement('p');
                                        parrafoNombre.setAttribute('id', personaje._id)
                                        parrafoNombre.className = 'hover:bg-[gray]'
                                        parrafoNombre.onclick = () => {
                                            navegacion(`/personaje/${personaje._id}`);
                                        }
                                        parrafoNombre.innerText = personaje.Nombre;
                                        document.getElementById('resultados').appendChild(parrafoNombre)
                                    }
                                })
                            }
                        }}
                    onBlur={() => {
                        setTimeout(() => {
                        document.getElementById('resultados').style.display = 'none'
                        document.getElementById('resultados').innerHTML = ''    
                        },100)
                        
                    }}
                    onChange={(e) => {
                        e.preventDefault();
                        console.log(e.target.value)
                        if (e.target.value === ''){
                            personajes.map ((personaje) => {
                                let parrafoNombre = document.createElement('p');
                                parrafoNombre.setAttribute('id', personaje._id)
                                parrafoNombre.className = 'hover:bg-[gray]'
                                parrafoNombre.onclick = () => {
                                        navegacion(`/personaje/${personaje._id}`);
                                    }
                                parrafoNombre.innerText = personaje.Nombre;
                                document.getElementById('resultados').appendChild(parrafoNombre)
                            })
                        }
                        if (e.target.value !== ''){
                            document.getElementById('resultados').innerHTML = ''
                            personajes.map ((personaje) => {
                                if (personaje.Nombre.toLowerCase().includes(e.target.value.toLowerCase())){
                                    console.log("onChange Encontrado")
                                    let parrafoNombre = document.createElement('p');
                                    parrafoNombre.setAttribute('id', personaje._id)
                                    parrafoNombre.className = 'hover:bg-[gray]'
                                    parrafoNombre.onclick = () => {
                                        navegacion(`/personaje/${personaje._id}`);
                                    }
                                    parrafoNombre.innerText = personaje.Nombre;
                                    document.getElementById('resultados').appendChild(parrafoNombre)
                                }
                            })
                        }
                    }}
                    />
                </div>
                <div id='resultados' className={estilosNavBar.divResultados}>
                    {/* {personajes.map((personaje) => (
                        <p className='hover:bg-[gray] pl-14'>{personaje.Nombre}</p>
                    ))} */}
                </div>
            </div>
            <div className={estilosNavBar.divNavLinks}>
                <NavLink style={EstilosIsActive} to="/">Inicio</NavLink>
                <NavLink style={EstilosIsActive} to="/personajes">Personajes</NavLink>
                <NavLink style={EstilosIsActive} to="/acerca-de">Acerca De</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;