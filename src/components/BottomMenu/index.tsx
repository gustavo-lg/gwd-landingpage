import ChatIcon from '@mui/icons-material/Chat';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import QuizIcon from '@mui/icons-material/Quiz';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import styles from './BottomMenu.module.scss';
import { Link } from 'react-scroll';

export default function BottomMenu() {
    const [navigation, setNavigation] = useState<number | null>(null);

    return (
        <>
            <div className={styles.bottomMenu__overlay} />
            <BottomNavigation
                className={styles.bottomMenu}
                showLabels
                value={navigation}
                onChange={(event, newNavigation) => {
                    setNavigation(newNavigation);
                }}
            >
                <Link
                    className={styles.bottomMenu__link}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <BottomNavigationAction
                        className={styles.bottomMenu__btn}
                        label="Sobre"
                        icon={<SupervisedUserCircleIcon />}
                    />
                </Link>
                <Link
                    className={styles.bottomMenu__link}
                    to="plans"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <BottomNavigationAction
                        className={styles.bottomMenu__btn}
                        label="Planos"
                        icon={<FactCheckIcon />}
                    />
                </Link>
                <Link
                    className={styles.bottomMenu__link}
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <BottomNavigationAction
                        className={styles.bottomMenu__btn}
                        label="Portfólio"
                        icon={<ViewQuiltIcon />}
                    />
                </Link>
                <Link
                    className={styles.bottomMenu__link}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <BottomNavigationAction
                        className={styles.bottomMenu__btn}
                        label="Contato"
                        icon={<ChatIcon />}
                    />
                </Link>
                <Link
                    className={styles.bottomMenu__link}
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    <BottomNavigationAction
                        className={styles.bottomMenu__btn}
                        label="FAQ"
                        icon={<QuizIcon />}
                    />
                </Link>
            </BottomNavigation>
        </>
    )
}