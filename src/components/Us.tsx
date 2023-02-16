import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Container from '@mui/material/Container';

const theme = createTheme()

const Us = () => {
    const navigate = useNavigate();
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <h1>Us</h1>
            </Container>
        </ThemeProvider>
    );
}

export default Us;