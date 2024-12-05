import styles from "./Articles.module.css";
import card01 from '../../assets/images/image-currency.jpg'
import card02 from '../../assets/images/image-restaurant.jpg'
import card03 from '../../assets/images/image-plane.jpg'
import card04 from '../../assets/images/image-confetti.jpg'

const Articles = () =>{
    return(
        <section className={styles.section}>
            <div className={"content " + styles.section__content}>
                <h2 className={styles.subtitle}>Latest Articles</h2>
                <div className={styles.card__container}>
                    <div className={styles.card}>
                        <div className={styles.card__img}>
                            <img src={card01} alt="Imagen" />
                        </div>
                        <div className={styles.card__info}>
                            <p className={styles.card__small}>By Claire Robinson</p>
                            <a href="#" className={styles.card__title}>Receive money in any currency with no fees</a>
                            <p className={styles.card__text}>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card__img}>
                            <img src={card02} alt="Imagen" />
                        </div>
                        <div className={styles.card__info}>
                            <p className={styles.card__small}>By Wilson Hutton</p>
                            <a href="#" className={styles.card__title}>Treat yourself without worrying about money</a>
                            <p className={styles.card__text}>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card__img}>
                            <img src={card03} alt="Imagen" />
                        </div>
                        <div className={styles.card__info}>
                            <p className={styles.card__small}>By Wilson Hutton</p>
                            <a  href="#"className={styles.card__title}>Take your Easybank card wherever you go</a>
                            <p className={styles.card__text}>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card__img}>
                            <img src={card04} alt="Imagen" />
                        </div>
                        <div className={styles.card__info}>
                            <p className={styles.card__small}>By Claire Robinson</p>
                            <a href="#" className={styles.card__title}>Our invite-only Beta accounts are now live!</a>
                            <p className={styles.card__text}>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Articles;