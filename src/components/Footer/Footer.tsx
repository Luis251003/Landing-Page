import styles from './Footer.module.css';
import img__logo from '../../assets/images/logo--white.svg';

import { ReactComponent as FacebookIcon } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as YouTubeIcon } from '../../assets/images/icon-youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../../assets/images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/icon-instagram.svg';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer__content + " content"}>
                <div className={styles.footer__logo}>
                    <div className="logo--content">
                        <img src={img__logo} alt="" />
                    </div>
                    <div className={styles.enlaces__content}>
                        <ul>
                            <li><a href="#"><FacebookIcon className={"icon"}/></a></li>
                            <li><a href="#"><YouTubeIcon className={"icon"}/></a></li>
                            <li><a href="#"><TwitterIcon className={"icon"}/></a></li>
                            <li><a href="#"><PinterestIcon className={"icon"}/></a></li>
                            <li><a href="#"><InstagramIcon className={"icon"}/></a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer__enlaces}>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className={styles.footer__button__container}>
                    <button className='button__primary'>Request Invite</button>
                    <small className={styles.footer__small}>© Easybank. All Rights Reserved</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;