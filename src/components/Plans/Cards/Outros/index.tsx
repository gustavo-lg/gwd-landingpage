import styles from '../Cards.module.scss'
import Icon from '@mui/icons-material/MoreHoriz';

export default function Outros() {
    return <div className={styles.cards}>
        <div className={styles.cards__card}>
            <div className={styles.cards__card__icon}><Icon/></div>
            <h2 className={styles.cards__card__title}>Outros</h2>
            <h1 className={styles.cards__card__price}>R$ Sob Análise</h1>
            <div>
                Ficamos a disposição para conversamos sobre suas ideias e projetos.
            </div>
        </div>
    </div>
}