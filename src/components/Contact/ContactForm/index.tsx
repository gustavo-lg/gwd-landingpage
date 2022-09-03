import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.scss';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
    const form = useRef<HTMLFormElement | any>();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('gwd_gmail', 'template_yl2umrd', form.current, 'mI3yhcSVtx942vlOc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        );
    };
    return <div>
        <form
            className={styles.form}
            ref={form}
            onSubmit={sendEmail}
        >
            <TextField
                className={styles.form__input}
                type="text"
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                required
            />
            <TextField
                className={styles.form__input}
                type="email"
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                required
            />
            <TextareaAutosize
                className={styles.form__textarea}
                name="message"
                aria-label="empty textarea"
                placeholder="Mensagem"
            />
            <Button
                className={styles.form__btn}
                type="submit"
                value="Send"
                variant="contained"
                endIcon={<SendIcon />}>
                Enviar
            </Button>
        </form>
    </div>
}