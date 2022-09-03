import ChatIcon from '@mui/icons-material/Chat';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import QuizIcon from '@mui/icons-material/Quiz';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import styles from './BottomMenu.module.scss';
import { Link } from 'react-scroll';

export default function BottomMenu() {

    return (
        <>
            <div className={styles.bottomMenu__overlay} />
            <div className={styles.bottomMenu}>
                <Link
                    className={styles.bottomMenu__btn}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <SupervisedUserCircleIcon />
                    <div>Sobre</div>
                </Link>
                <Link
                    className={styles.bottomMenu__btn}
                    to="plans"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <FactCheckIcon />
                    <div>Planos</div>
                </Link>
                <Link
                    className={styles.bottomMenu__btn}
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <ViewQuiltIcon />
                    <div>Portfólio</div>
                </Link>
                <Link
                    className={styles.bottomMenu__btn}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <ChatIcon />
                    <div>Contato</div>
                </Link>
                <Link
                    className={styles.bottomMenu__btn}
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <QuizIcon />
                    <div>FAQ</div>
                </Link>
            </div>
        </>
    )
}