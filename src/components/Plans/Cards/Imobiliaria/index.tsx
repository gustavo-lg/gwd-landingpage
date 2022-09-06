import styles from '../Cards.module.scss'
import Icon from '@mui/icons-material/House';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';

export default function Imobiliaria() {
    return <div className={styles.cards}>
        <div className={styles.cards__card}>
            <div className={styles.cards__card__icon}><Icon /></div>
            <h2 className={styles.cards__card__title}>Imobiliaria</h2>
            <h1 className={styles.cards__card__price}>R$ 3289</h1>
            <div>
                Imobiliárias estão entrando cada vez mais no mundo digital com o avanço da técnologia.
                Diante disto, é preciso se adaptar e evoluir para que seu negócio alcance um crescimento saudável e escalável.
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