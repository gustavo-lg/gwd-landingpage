import styles from '../Cards.module.scss'
import Icon from '@mui/icons-material/BusinessCenter';

export default function Institucional() {
    return <div className={styles.cards}>
        <div className={styles.cards__card}>
            <div className={styles.cards__card__icon}><Icon /></div>
            <h2 className={styles.cards__card__title}>Institucional</h2>
            <h1 className={styles.cards__card__price}>R$ 2389</h1>
            <div>
                Já percebeu que todas as grandes empresas possuem seu próprio site? Inclusive seu concorrente.
                Isso demonstra mais profissionalismo e credibilidade para a empresa.
            </div>
        </div>
    </div>
}