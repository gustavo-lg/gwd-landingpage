import Button from "@mui/material/Button";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './ContactBtns.module.scss'


export default function ContactBtns () {
    return <div className={styles.contact__btns}>
    <a href="https://wa.me/5548999875260">
        <Button className={styles.contact__btn} variant="contained" startIcon={<WhatsAppIcon />}>
            WhatsApp
            <label>Fale com nosso consultor</label>
        </Button>
    </a>
    <a href="mailto:agenciagwd@gmail.com">
        <Button className={styles.contact__btn} variant="contained" startIcon={<EmailOutlinedIcon />}>
            E-mail
            <label>Envie um e-mail para nós</label>
        </Button>
    </a>
</div>
}