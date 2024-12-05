import style from './EasyBank.module.css'
import card01 from '../../assets/images/icon-online.svg';
import card02 from '../../assets/images/icon-budgeting.svg';
import card03 from '../../assets/images/icon-onboarding.svg';
import card04 from '../../assets/images/icon-api.svg'

const EasyBank = () => {
    return (
        <section className={style.section}>
            <div className={style.section__content + " content"}>
                <h2 className={style.subtitle}>Why choose Easybank?</h2>
                <p className={style.info}>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                <div className={style.card__container}>
                    <div className={style.card}>
                        <div className="card__img">
                            <img src={card01} alt="" />
                        </div>
                        <div className={style.card__info}>
                            <h3 className={style.card__title}>Online Banking</h3>
                            <p className={style.card__text}>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className="card__img">
                            <img src={card02} alt="" />
                        </div>
                        <div className={style.card__info}>
                            <h3 className={style.card__title}>Simple Budgeting</h3>
                            <p className={style.card__text}>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className="card__img">
                            <img src={card03} alt="" />
                        </div>
                        <div className={style.card__info}>
                            <h3 className={style.card__title}>Fast Onboarding</h3>
                            <p className={style.card__text}>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className="card__img">
                            <img src={card04} alt="" />
                        </div>
                        <div className={style.card__info}>
                            <h3 className={style.card__title}>Open API</h3>
                            <p className={style.card__text}>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EasyBank;