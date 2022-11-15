import Button from "@mui/material/Button";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './ContactBtns.module.scss'
import btns from './contactBtns.json'


export default function ContactBtns() {
    return <div className={styles.contact__btns}>
        {btns.map((contactBtns, index) => (
            <a href={contactBtns.link} key={index} target='_blank' rel="noreferrer">
                <Button
                    className={styles.contact__btn}
                    variant="contained"
                    startIcon={contactBtns.title === "WhatsApp" ? <WhatsAppIcon /> : <EmailOutlinedIcon />}>
                    {contactBtns.title}
                    <label>{contactBtns.label}</label>
                </Button>
            </a>
        ))}
    </div>
}