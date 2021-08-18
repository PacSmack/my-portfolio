import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import avatar from "../../assets/images/avatar.jpg"


export default function AboutMe() {

    return (
        <Container id="disable-select" className="aboutMeWrap">
            <Box className="avatarImgWrap">
                <img className="avatarImg" src={avatar}></img>

                <Typography className="myName">
                    <h1>Nathan Da Silva</h1>
                </Typography>
            </Box>

            <Typography variant={'h2'} display="block">
                Aenean porta ultrices urna, ac interdum nisi ultricies eget. Nunc molestie porttitor nisi, et maximus metus sagittis non. Nullam tristique purus sit amet molestie commodo. In pharetra enim tortor, vel lobortis neque mattis sit amet.
            </Typography>


        </Container>
    )
}