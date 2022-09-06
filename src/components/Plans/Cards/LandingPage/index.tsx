import styles from '../Cards.module.scss'
import Icon from '@mui/icons-material/RequestPage';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';

export default function LandingPage() {
    return <div className={styles.cards}>
        <div className={styles.cards__card}>
            <div className={styles.cards__card__icon}><Icon /></div>
            <h2 className={styles.cards__card__title}>Landing Page</h2>
            <h1 className={styles.cards__card__price}>R$ 1789</h1>
            <div>
                Produto de afiliado, curso, treinamento, produto físico, produto digital, captação de leads e muito mais. Uma página focada em conversão.
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