import { Button } from '@mui/material';
import styles from './Header.module.scss';
import { Link } from 'react-scroll';
import header from './header.json';

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
                    {header.map((btns, index) => (
                        <Link
                            to={btns.to}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            key={index}
                        >
                            <Button
                                className={btns.className}
                                variant="outlined"
                            >
                                {btns.label}
                            </Button>
                        </Link>
                    ))}
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