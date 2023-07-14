
import Header from './Header';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Container from '@mui/material/Container';

const theme = createTheme()

const Services = () => {
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />  
            </Container>
        </ThemeProvider>
    );
}

export default Services;