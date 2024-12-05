import style from './Hero.module.css';
import hero__img from '../../assets/images/bg-intro-desktop.svg';
import hero__img__movile from '../../assets/images/bg-intro-mobile.svg'

type screenSize={
    width: number;
    height: number;
}

interface props {
    screenSize: screenSize;
}

const Hero = ({screenSize}:props) =>{

    return (
        <>
            <div className={style.hero}>
                <div className={`${style.hero__content} ${screenSize.width<=768 ? "" : " content"}`}>
                    <div className={style.hero__info}>
                        <h1 className={style.hero__title}>Next generation digital banking</h1>
                        <p className={style.hero__text}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                        <button className={'button__primary ' + style.hero__button}>Request Invite</button>
                    </div>
                    <div>
                        <img className={style.img__hero} src={screenSize.width<=768 ? hero__img__movile : hero__img}  alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero;