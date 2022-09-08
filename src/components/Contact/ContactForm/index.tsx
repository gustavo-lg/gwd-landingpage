import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.scss';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { IMaskInput } from 'react-imask';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="(00) 00000-0000"
                definitions={{
                    '#': /[1-9]/,
                }}
                inputRef={ref as any}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);

export default function ContactForm() {
    const [values, setValues] = useState<string>('');
    const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(e.target.value);
    };
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
                type="tel"
                id="outlined-basic"
                label="Telefone"
                variant="outlined"
                name="tel"
                inputProps={{ maxLength: 15 }}
                InputProps={{
                    inputComponent: TextMaskCustom as any,
                }}
                value={values}
                onChange={handleChangeForm}
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