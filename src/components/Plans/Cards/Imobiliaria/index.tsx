import styles from '../Cards.module.scss'
import Icon from '@mui/icons-material/House';

export default function Imobiliaria() {
    return <div className={styles.cards}>
        <div className={styles.cards__card}>
            <div className={styles.cards__card__icon}><Icon /></div>
            <h2 className={styles.cards__card__title}>Imobiliaria</h2>
            <h1 className={styles.cards__card__price}>R$ 5289</h1>
            <div>
                Imobiliárias estão entrando cada vez mais no mundo digital com o avanço da técnologia.
                Diante disto, é preciso se adaptar e evoluir para que seu negócio alcance um crescimento saudável e escalável.
            </div>
        </div>
    </div>
}