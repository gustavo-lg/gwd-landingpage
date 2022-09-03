import styles from './Contact.module.scss'
import ContactBtns from "./ContactBtns";
import ContactForm from './ContactForm';

export default function Contact() {
    return <div className={styles.contact} id='contact'>
        <h2 className={styles.contact__title}>Entre em contato</h2>
        <div className={styles.contact__container}>
            <ContactBtns />
            <ContactForm />
        </div>
    </div>
}