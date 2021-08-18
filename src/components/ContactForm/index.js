import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            display: 'block',

        },
    },
}));

export default function Form() {
    const classes = useStyles();

    return (
        <Box component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            autoComplete="off"
            className="contactForm" 
            display="block"
            overflow="hidden"
            name="contactForm"
            width="60%"
            textAlign="center"
        >


            <h1>Contact Me</h1>

            <Box m={2}>
                <label htmlFor="email"></label>
                <TextField
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    placeholder="email"
                    name="email"
                    type="email"
                    id="email"                    
                />
            </Box>
            <Box m={2}>
                <label htmlFor="SummonerName"></label>
                <TextField
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="Name"
                    type="Name"
                    id="Name"                    
                />
            </Box>
            <Box m={2}>
                <label htmlFor="password"></label>
                <TextField
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    name="Message"
                    type="Message"
                    id="pwd"
                />
            </Box>
        
            <Box>
                <Button
                    className="contactFormBtn"
                    variant="contained"
                    color="primary"
                    size="medium"
                    type="submit"
                    form="contactForm"
                >
                    Send
                </Button>
            </Box>
        </Box >
    );
}