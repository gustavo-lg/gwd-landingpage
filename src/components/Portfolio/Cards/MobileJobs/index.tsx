import styles from '../Cards.module.scss';

export default function MobileJobs() {
    return <div className={styles.cards}>
        <img className={styles.cards__card} src={require('../../../.././assets/portfolio/mobileJobs/agileMobile.png')} alt='website' />
    </div>
}