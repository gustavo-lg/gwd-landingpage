import Button from "@mui/material/Button";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './ContactBtns.module.scss'
import btns from './contactBtns.json'


export default function ContactBtns () {
    return <div className={styles.contact__btns}>
        {btns.map(contactBtns => (
             <a href={contactBtns.link}>
             <Button 
             className={styles.contact__btn} 
             variant="contained" 
             startIcon={contactBtns.title === "Whatsapp" ? <WhatsAppIcon /> : <EmailOutlinedIcon />}>
                 {contactBtns.title}
                 <label>{contactBtns.label}</label>
             </Button>
         </a>
        ))}
</div>
}