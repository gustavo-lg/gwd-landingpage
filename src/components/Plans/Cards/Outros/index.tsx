import styles from '../Cards.module.scss'
import Icon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';

export default function Outros() {
    return <div className={styles.cards}>
        <div className={styles.cards__card}>
            <div className={styles.cards__card__icon}><Icon /></div>
            <h2 className={styles.cards__card__title}>Personalizações</h2>
            <h1 className={styles.cards__card__price}>R$ Sob Análise</h1>
            <div>
                Ficamos a disposição para conversamos sobre suas ideias e projetos.
            </div>
            <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <Button variant='contained' className={styles.cards__card__btn}>
                    Consultar
                </Button>
            </Link>
        </div>
    </div>
}