import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import styles from './Plans.module.scss';
import classNames from 'classnames';
import Imobiliaria from './Cards/Imobiliaria'
import Institucional from './Cards/Institucional'
import LandingPage from './Cards/LandingPage';
import Outros from './Cards/Outros';
import Blog from './Cards/Blog';
import Grow from '@mui/material/Grow';
import HouseIcon from '@mui/icons-material/House';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Plans() {
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
      case '3':
        setChecked('3');
        break;
      case '4':
        setChecked('4');
        break;
      case '5':
        setChecked('5');
        break;
      default:
        setChecked('1');
    }
  };

  return (
    <div className={styles.plans} id='plans'>
      <h2 className={styles.plans__title}>Planos e Serviços</h2>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              className={styles.plans__tabs}
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab
                className={classNames({
                  [styles.plans__tab]: true,
                  [styles['plans__tab--active']]: value === '1' ? true : false
                })}
                label="Imobiliaria"
                value="1"
                icon={<HouseIcon />}
              />
              <Tab
                className={classNames({
                  [styles.plans__tab]: true,
                  [styles['plans__tab--active']]: value === '2' ? true : false
                })}
                label="Institucional"
                value="2"
                icon={<BusinessCenterIcon />}
              />
              <Tab
                className={classNames({
                  [styles.plans__tab]: true,
                  [styles['plans__tab--active']]: value === '3' ? true : false
                })}
                label="Landing Page"
                value="3"
                icon={<RequestPageIcon />}
              />
              <Tab
                className={classNames({
                  [styles.plans__tab]: true,
                  [styles['plans__tab--active']]: value === '4' ? true : false
                })}
                label="Blog"
                value="4"
                icon={<WysiwygIcon />}
              />
              <Tab
                className={classNames({
                  [styles.plans__tab]: true,
                  [styles['plans__tab--active']]: value === '5' ? true : false
                })}
                label="Personalização"
                value="5"
                icon={<MoreHorizIcon />}
              />
            </Tabs>
          </Box>
          <Grow
            in={checked === '1'}
          >
            <TabPanel value="1">
              <Imobiliaria />
            </TabPanel>
          </Grow>
          <Grow
            in={checked === '2'}
          >
            <TabPanel value="2">
              <Institucional />
            </TabPanel>
          </Grow>
          <Grow
            in={checked === '3'}
          >
            <TabPanel value="3">
              <LandingPage />
            </TabPanel>
          </Grow>
          <Grow
            in={checked === '4'}
          >
            <TabPanel value="4">
              <Blog />
            </TabPanel>
          </Grow>
          <Grow
            in={checked === '5'}
          >
            <TabPanel value="5">
              <Outros />
            </TabPanel>
          </Grow >
        </TabContext>
      </Box>
    </div>
  );
}