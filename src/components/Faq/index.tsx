import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import styles from './Faq.module.scss';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';

export default function Faq() {
    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div className={styles.faq} id='faq'>
            <h2 className={styles.faq__title}>Dúvidas Frequentes</h2>
            <Accordion
                className={styles.faq__btn}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography
                        className={styles.faq__btn__label}
                        sx={{ color: 'text.secondary' }}>
                        <AccessTimeOutlinedIcon/> Quanto tempo para entrega do projeto?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className={styles.faq__btn__label}>
                        Em média de 15 a 30 dias úteis, dependendo das especificidades do projeto. Cada projeto é individual e merece seu devido cuidado.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className={styles.faq__btn}
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography
                        className={styles.faq__btn__label}
                        sx={{ color: 'text.secondary' }}>
                        <MonetizationOnOutlinedIcon /> Quais os valores para um projeto?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className={styles.faq__btn__label}>
                        Depende, cada projeto é um projeto. O desenvolvimento de um e-commerce é diferente de um Blog. Logo acima podemos ver que tem diversos tipos de site, e cada um tem sua complexidade de desenvolvimento, além dos seus desejos como cliente.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className={styles.faq__btn}
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={styles.faq__btn__label} sx={{ color: 'text.secondary' }}>
                    <StarsOutlinedIcon/> Otimiza ranqueamento no Google?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className={styles.faq__btn__label}>
                        Todos os sites são desenvolvimento com as mais atuais técnicas de SEO, no qual, resulta nos  melhores resultados nos organismos de busca como o Google.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className={styles.faq__btn}
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography
                        className={styles.faq__btn__label}
                        sx={{ color: 'text.secondary' }}>
                        <CurrencyExchangeOutlinedIcon/> Tem mensalidade?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className={styles.faq__btn__label}>
                        Não, o site completo é desenvolvido por um valor fixo. Após a entrega ele é totalmente seu, sem nenhuma pendência conosco.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className={styles.faq__btn}
                expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography
                        className={styles.faq__btn__label}
                        sx={{ color: 'text.secondary' }}>
                         <ChangeCircleOutlinedIcon/> Consigo mudar algo no site depois de publicado?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className={styles.faq__btn__label}>
                        Sim, após a entrega, forneçeremos tutoriais de usabilidade do site junto do acesso administrativo, para que você possa mexer e fazer as alterações que desejar.
                        Caso desejar uma personalização fora do orçamento, a mesma tera custo e prazo adicional. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}