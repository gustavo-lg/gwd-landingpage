import styles from '../Cards.module.scss'
import Icon from '@mui/icons-material/RequestPage';

export default function LandingPage(){
    return <div className={styles.cards}>
        <div className={styles.cards__card}>
            <div className={styles.cards__card__icon}><Icon /></div>
            <h2 className={styles.cards__card__title}>Landing Page</h2>
            <h1 className={styles.cards__card__price}>R$ 2189</h1>
            <div>
            Produto de afiliado, curso, treinamento, produto físico, produto digital, captação de leads e muito mais. Uma página focada em conversão.
            </div>
        </div>
    </div>
}