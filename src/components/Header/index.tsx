import { Button } from '@mui/material';
import styles from './Header.module.scss';
import { Link } from 'react-scroll';

export default function Header() {
    return (
        <nav className={styles.header} id='home'>
            <ul>
                <li>
                    <div className={styles.header__logo}>
                        <div>
                            <img className={styles.header__logoIcon} src={require('assets/logoIcon.png')} alt='logo' />
                            <img src={require('assets/logoText.png')} alt='logo' />
                        </div>  
                    </div>
                </li>
                <li className={styles.header__btns}>
                    <Link
                        to="plans"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <Button
                            className={styles.header__btnPlan}
                            variant="outlined"
                        >
                            Planos
                        </Button>
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <Button
                            className={styles.header__btnContact}
                            variant="contained"
                        >
                            Fale Conosco
                        </Button>
                    </Link>
                </li>
                <li>
                    <div className={styles.header__banner}>
                        <img src={require('assets/banner.png')} alt='logo' />
                    </div>
                </li>
            </ul>

        </nav>
    )
}