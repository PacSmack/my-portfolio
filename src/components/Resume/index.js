import React from 'react';

import { Box } from '@material-ui/core';

import pdf from "../../assets/resume/resume.pdf"

export default function ResumeComp() {

    return (
        <Box >
            <h1>My Resume</h1>
            <iframe src={pdf} width="100%" height="600px"></iframe>
        </Box>
    )
}