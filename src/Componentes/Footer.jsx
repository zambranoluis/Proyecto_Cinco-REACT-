import logoLZ from "../Imagenes/logoLZ.png";
import lexpinx from "../Imagenes/Lexpin_Logo_color.png";
import fb from "../Imagenes/FB.png";
import ig from "../Imagenes/IG.png";
import tw from "../Imagenes/TW.png";

const Footer = () => {
    const estilos = {
        footer: "h-20 bg-[#9C5B01] flex justify-between items-center px-10",
        contenedorLogos:"flex gap-3 items-center",
        logoLZ: "h-[60px]",
        lexpinX: "h-[60px]",
        contenedorDetalles:"",
        detalles:"font-bold text-xl text-[#FF81C1]",
        contenedorSocial:"flex gap-8",
        social:"h-[45px] drop-shadow-xl border-2 rounded-2xl border-[#F7D629] bg-[#F7D629]",
    }
    return (
        <footer className={estilos.footer}>
            <div className={estilos.contenedorLogos}>
                <img className={estilos.logoLZ} src={logoLZ} alt="LogoLuisZambrano" />
                <img className={estilos.lexpinX} src={lexpinx} alt="" />
            </div>
            <div className={estilos.contenedorDetalles}>
                <p className={estilos.detalles}>Lexpin Online y Luis Zambrano © 2023</p>
            </div>
            <div className={estilos.contenedorSocial}>
                <a href="https://www.facebook.com/people/Luis-Zambrano/pfbid0KRdbKMXJpR7fdSX53iWBknymwmLCRUCRkuwatefaVfMbT2LJkgJbc69VVGL4s5FYl/" target="_blank">
                    <img className={estilos.social} src={fb} alt="" />
                </a>
                <a href="https://twitter.com/_MrMonka" target="_blank">
                    <img className={estilos.social} src={tw} alt="" />
                </a>
                <a href="https://www.instagram.com/zambranoluis94" target="_blank">
                    <img className={estilos.social} src={ig} alt="" />
                </a>
            </div>
        </footer>
    );
}

export default Footer