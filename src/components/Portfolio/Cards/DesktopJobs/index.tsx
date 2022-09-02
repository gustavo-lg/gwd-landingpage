import styles from '../Cards.module.scss'

export default function DesktopJobs() {
    return <div className={styles.cards}>
        <img className={styles.cards__card} src={require('../../../.././assets/portfolio/desktopJobs/disk.png')} alt='website' />
        <img className={styles.cards__card} src={require('../../../.././assets/portfolio/desktopJobs/agile.png')} alt='website' />
        <img className={styles.cards__card} src={require('../../../.././assets/portfolio/desktopJobs/stratto.png')} alt='website' />
    </div>
}