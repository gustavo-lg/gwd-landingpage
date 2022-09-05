import ChatIcon from '@mui/icons-material/Chat';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import QuizIcon from '@mui/icons-material/Quiz';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import styles from './BottomMenu.module.scss';
import { Link } from 'react-scroll';
import bottomMenu from './bottonMenu.json'

export default function BottomMenu() {

    return (
        <>
            <div className={styles.bottomMenu__overlay} />
            <div className={styles.bottomMenu}>
                {bottomMenu.map(btns => (
                    <Link
                        className={styles.bottomMenu__btn}
                        to={btns.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        {btns.label === "Sobre" ? <SupervisedUserCircleIcon /> : null}
                        {btns.label === "Planos" ? <FactCheckIcon /> : null}
                        {btns.label === "Portfólio" ? <ViewQuiltIcon /> : null}
                        {btns.label === "Contato" ? <ChatIcon /> : null}
                        {btns.label === "FAQ" ? <QuizIcon /> : null}
                        <div>{btns.label}</div>
                    </Link>
                ))}
            </div>
        </>
    )
}