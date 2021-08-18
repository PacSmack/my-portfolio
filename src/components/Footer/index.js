import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    return (
        <footer>
            <Box>
                <Box padding="0"            >
                    <Container maxWidth="lg" position="relative">
                        <Box display="inline-flex" textAlign="center">
                            <IconButton><GitHubIcon /></IconButton>
                            <IconButton><LinkedInIcon /></IconButton>
                            <IconButton><InstagramIcon /></IconButton>
                        </Box>
                        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                            Nathan Dias Vieira da Silva &reg; {new Date().getFullYear()}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </footer>
    );
}