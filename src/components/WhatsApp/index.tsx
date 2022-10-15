import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './WhatsApp.module.scss'

export default function ContactBtns() {
    return <div className={styles.whats}>
        <a
            className={styles.whats__btn}
            href='https://api.whatsapp.com/send?phone=5548999875260'
            target='_blank'
            rel="noreferrer"
        >
            <WhatsAppIcon />
        </a>
    </div>
}