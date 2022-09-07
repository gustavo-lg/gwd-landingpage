import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.scss';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
    const form = useRef<HTMLFormElement | any>(null);

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
    const handleKeyboardEvent = (e: any) => {
        let tecla = e.key;
        let telefone = e.target.value.replace(/\D+/g, "");
        if (e.which !== 8 && e.which !== 46) {
            if (e.which < 48 || e.which > 57) {
                e.preventDefault();
            }
        }
        if (/^[0-9]$/i.test(tecla)) {
            telefone = telefone + tecla;
            let tamanho = telefone.length;

            if (tamanho > 10) {
                telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
            } else if (tamanho > 5) {
                telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
            } else if (tamanho > 2) {
                telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
            } else {
                telefone = telefone.replace(/^(\d*)/, "($1");
            }

            e.target.value = telefone;
        }

        if (!["Backspace", "Delete"].includes(tecla)) {
            return false;
        }
    }
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
                name="name"
                required
            />
            <TextField
                className={styles.form__input}
                type="email"
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                name="email"
                required
            />
            <TextField
                className={styles.form__input}
                onKeyDown={handleKeyboardEvent}
                type="tel"
                id="outlined-basic"
                label="Telefone"
                variant="outlined"
                name="tel"
                inputProps={{ maxLength: 12 }}
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