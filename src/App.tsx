import Hero from "./components/Hero/Hero";
import Navegador from "./components/Navegador/Navegador";
import style from "./App.module.css";
import EasyBank from "./components/EasyBank/EasyBank";
import hero__phone from './assets/images/image-mockups.png'
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App(){

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Escuchar el evento de cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={style.global__container}>
        
        <Navegador screenSize={screenSize}/>
        <Hero screenSize={screenSize}/>
        
        <img className={style.img__phone} src={hero__phone} alt="" />

        <main>
          <EasyBank/>
          <Articles/>
        </main>

        <Footer/>
      </div>
    </>
  );
}

export default App;