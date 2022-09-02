import styles from '../Cards.module.scss'
import Icon from '@mui/icons-material/Wysiwyg';

export default function Blog() {
    return <div className={styles.cards}>
        <div className={styles.cards__card}>
            <div className={styles.cards__card__icon}><Icon /></div>
            <h2 className={styles.cards__card__title}>Blog</h2>
            <h1 className={styles.cards__card__price}>R$ 1759</h1>
            <div>
                Se você é produtor de conteúdo, ou quer gerar conteúdo para aumentar a relevancia do seu site nos mecanismos de busca, o blog é  uma ótima alternativa!
                Divulgue seu conteúdo constante e alcance o maior número de pessoas com seu Blog.
            </div>
        </div>
    </div>
}