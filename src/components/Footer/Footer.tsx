import styles from './Footer.module.scss';
import { ReactComponent as Instagram } from 'assets/footer/instagram/logo.svg';
import { ReactComponent as Facebook } from 'assets/footer/facebook/logo.svg';
import { ReactComponent as Linkedin } from 'assets/footer/linkedin/logo.svg';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <img src={require('assets/logo.png')} alt='logo' />
            <ul className={styles.footer__logos}>
                <li className={styles.footer__logo}>
                    <a href='https://www.facebook.com/GWDmarketing.digital'>
                    <Facebook />
                    </a>
                </li>
                <li className={styles.footer__logo}>
                <a href='https://www.instagram.com/gwdsolucoes/?hl=pt-br'>
                    <Instagram />
                    </a>
                </li>
                <li className={styles.footer__logo}>
                <a href='https://www.linkedin.com/in/gwd-sites-1b3406200/'>
                    <Linkedin />
                    </a>
                </li>
            </ul>
            <div className={styles.footer__copyright}>Copyright © – Todos os direitos reservados.</div>
        </div>
    )
}