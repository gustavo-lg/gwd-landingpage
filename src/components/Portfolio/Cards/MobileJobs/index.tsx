import styles from '../Cards.module.scss';
import examples from './examples.json';

export default function MobileJobs() {
    return <div className={styles.cards}>
        {examples.map((links, index) => (
            <div>
                <h3 key={index} className={styles.cards__title}>{links.title}</h3>
                <a href={links.link} target='_blank' rel="noreferrer">
                    <img key={index} className={styles.cards__card} src={require(`../../../.././assets/portfolio/mobileJobs/${links.src}`)} alt='website' />
                </a>
            </div>
        ))}
    </div>
}