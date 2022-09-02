import styles from './Portfolio.module.scss';
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Monitor from '@mui/icons-material/Monitor';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import classNames from 'classnames';
import Grow from '@mui/material/Grow';
import MobileJobs from './Cards/MobileJobs';
import DesktopJobs from './Cards/DesktopJobs';


export default function Portfolio() {
    const [value, setValue] = useState<string>('1');
    const [checked, setChecked] = useState<string>('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        switch (newValue) {
            case '1':
                setChecked('1');
                break;
            case '2':
                setChecked('2');
                break;
            default:
                setChecked('1');
        }
    };
    return <div className={styles.portfolio} id='portfolio'>
        <h2 className={styles.portfolio__title}>Nosso Portfólio</h2>

        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        className={styles.portfolio__tabs}
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    >
                        <Tab
                            className={classNames({
                                [styles.portfolio__tab]: true,
                                [styles['portfolio__tab--active']]: value === '1' ? true : false
                            })}
                            label="Desktop"
                            value="1"
                            icon={<Monitor />}
                        />
                        <Tab
                            className={classNames({
                                [styles.portfolio__tab]: true,
                                [styles['portfolio__tab--active']]: value === '2' ? true : false
                            })}
                            label="Mobile"
                            value="2"
                            icon={<PhoneAndroidIcon />}
                        />
                    </Tabs>
                </Box>
                <Grow
                    in={checked === '1'}
                >
                    <TabPanel value="1">
                       <DesktopJobs />
                    </TabPanel>
                </Grow>
                <Grow
                    in={checked === '2'}
                >
                    <TabPanel value="2">
                        <MobileJobs />
                    </TabPanel>
                </Grow>
            </TabContext>
        </Box>
    </div>
}