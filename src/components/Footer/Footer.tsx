import styles from './Footer.module.scss';
import { ReactComponent as Instagram } from 'assets/footer/instagram/logo.svg';
import { ReactComponent as Facebook } from 'assets/footer/facebook/logo.svg';
import { ReactComponent as Linkedin } from 'assets/footer/linkedin/logo.svg';
import logo from './footer.json';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__gwdLogo}>
                <img className={styles.footer__logoIcon} src={require('assets/logoIcon.png')} alt='logo' />
                <img src={require('assets/logoText.png')} alt='logo' />
            </div>
            <ul className={styles.footer__logos}>
                {logo.map(links => (
                    <li key={links.label} className={styles.footer__logo}>
                        <a href={links.link} target='_blank' rel="noreferrer">
                            {links.label === "fb" ? <Facebook /> : null}
                            {links.label === "ig" ? <Instagram /> : null}
                            {links.label === "in" ? <Linkedin /> : null}
                        </a>
                    </li>
                ))}
            </ul>
            <div className={styles.footer__copyright}>Copyright © – Todos os direitos reservados.</div>
        </div>
    )
}