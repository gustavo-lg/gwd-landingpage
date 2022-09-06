import styles from './About.module.scss';
import { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from 'react-scroll';

export default function About() {
    const [openAbout, setOpenAbout] = useState<boolean>(false);
    const handleOpenAbout = () => setOpenAbout(true);
    const handleCloseAbout = () => setOpenAbout(false);

    const [openDifference, setOpenDifference] = useState<boolean>(false);
    const handleOpenDifference = () => setOpenDifference(true);
    const handleCloseDifference = () => setOpenDifference(false);

    const [openMission, setOpenMission] = useState<boolean>(false);
    const handleOpenMission = () => setOpenMission(true);
    const handleCloseMission = () => setOpenMission(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div id='about'>
            <h2 className={styles.about__title}>Sobre a GWD</h2>
            <div className={styles.about}>
                <div className={styles.about__team}>
                    <img className={styles.about__teamImg} src={require('../.././assets/about/team.jpg')} alt='team' />
                </div>

                <div>
                    <div className={styles.about__btns}>
                        <Button onClick={handleOpenAbout} className={styles.about__btn} variant="contained" startIcon={<InfoOutlinedIcon />}>
                            Sobre
                            <label>Conheça nossa história</label>
                        </Button>

                        <Button onClick={handleOpenDifference} className={styles.about__btn} variant="contained" startIcon={<StarBorderOutlinedIcon />}>
                            Diferencial
                            <label>Descubra nosso destaque</label>
                        </Button>

                        <Button onClick={handleOpenMission} className={styles.about__btn} variant="contained" startIcon={<RocketLaunchOutlinedIcon />}>
                            Missão
                            <label>Conheça nossa missão</label>
                        </Button>
                    </div>

                    <div className={styles.about__text}>
                        A GWD esta sempre atrás de soluções inovadoras com revitalização de Projetos, Worksite e social media.
                        Nosso diferencial está na habilidade de análise e entendimento da necessidade do nosso cliente.
                    </div>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <Button
                            variant="contained"
                            className={styles.about__btnContact}>
                            Fale Conosco
                        </Button>
                    </Link>
                </div>

                <Modal
                    open={openAbout}
                    onClose={handleCloseAbout}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        className={styles.about__modal}
                        sx={style}>
                        <Typography
                            className={styles.about__modal__text}
                            id="modal-modal-title"
                            variant="h6"
                            component="h2">
                            Sobre
                        </Typography>
                        <Typography
                            className={styles.about__modal__text}
                            id="modal-modal-description"
                            sx={{ mt: 2 }}>
                            Somos uma startup que surgiu através de um grupo de três amigos, especializada em consultoria e criação de sites.
                        </Typography>
                    </Box>
                </Modal>

                <Modal
                    open={openDifference}
                    onClose={handleCloseDifference}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        className={styles.about__modal}
                        sx={style}>
                        <Typography
                            className={styles.about__modal__text}
                            id="modal-modal-title"
                            variant="h6"
                            component="h2">
                            Diferencial
                        </Typography>
                        <Typography
                            className={styles.about__modal__text}
                            id="modal-modal-description"
                            sx={{ mt: 2 }}>
                            Nós trabalhamos com reuniões online para entender melhor a dor e desejo do cliente.
                            Também oferecemos gratuitamente 2 meses de suporte aos serviços implantados.
                        </Typography>
                    </Box>
                </Modal>

                <Modal
                    open={openMission}
                    onClose={handleCloseMission}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        className={styles.about__modal}
                        sx={style}>
                        <Typography
                            className={styles.about__modal__text}
                            id="modal-modal-title"
                            variant="h6"
                            component="h2">
                            Missão
                        </Typography>
                        <Typography
                            className={styles.about__modal__text}
                            id="modal-modal-description"
                            sx={{ mt: 2 }}>
                            Nossa missão é nos tornarmos referência de excelência na prestação de serviços tecnológicos,
                            com inovação, criatividade, conhecimento e buscando sempre encontrar a solução para diferentes necessidades.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div >
    )
} 