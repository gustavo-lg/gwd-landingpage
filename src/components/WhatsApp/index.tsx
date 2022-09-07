import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './WhatsApp.module.scss'

export default function ContactBtns() {
    return <div className={styles.whats}>
        <a
            className={styles.whats__btn}
            href='https://api.whatsapp.com/send?phone=5548999875260'>
            <WhatsAppIcon />
        </a>
    </div>
}