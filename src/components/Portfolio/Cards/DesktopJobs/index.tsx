import styles from '../Cards.module.scss'
import examples from './examples.json';

export default function DesktopJobs() {
    return <div className={styles.cards}>
        {examples.map((links, index) => (
                    <img key={index} className={styles.cards__card} src={require(`../../../.././assets/portfolio/desktopJobs/${links.src}`)} alt='website' />
        ))}
    </div>
}