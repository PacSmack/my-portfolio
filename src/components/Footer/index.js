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
            <Box className="footerWrap" display="block"           >
                <Box display="flex" className="iconsWrap">                    
                    <IconButton href="https://github.com/PacSmack" target="_blank"><GitHubIcon /></IconButton>
                    <IconButton href="https://www.linkedin.com/in/nathan-dias-silva/" target="_blank"><LinkedInIcon /></IconButton>
                    <IconButton href="https://www.instagram.com/nathandbrs/" target="_blank"><InstagramIcon /></IconButton>                   
                </Box>
                <Box textAlign="center" >
                    Nathan Dias Vieira da Silva &reg; {new Date().getFullYear()}
                </Box>
            </Box>
        </footer>
    );
}