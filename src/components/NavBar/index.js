import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import other components
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import Form from '../ContactForm';
import ResumeComp from '../Resume';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },

}));

export default function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                    className="tabColor"
                >
                    <LinkTab label="About Me" href="/aboutme" {...a11yProps(0)} />
                    <LinkTab label="Portfolio" href="/portfolio" {...a11yProps(1)} />
                    <LinkTab label="Contact" href="/contact" {...a11yProps(2)} />
                    <LinkTab label="Resume" href="/resume" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>

                <AboutMe />

            </TabPanel>
            <TabPanel value={value} index={1}>

                <Portfolio />

            </TabPanel>

            <TabPanel value={value} index={2}>
                <Box className='centerForm'>
                    <Form />
                </Box>
            </TabPanel>


            <TabPanel value={value} index={3}>

                <ResumeComp />

            </TabPanel>


        </div>
    );
}