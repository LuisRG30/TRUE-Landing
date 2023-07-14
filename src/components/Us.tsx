

import { useNavigate } from 'react-router-dom';

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Container from '@mui/material/Container';

const theme = createTheme()

const mission = {
    title: 'Misión',
    description:
      "Proporcionar soluciones de Ciencia e Ingeniería de Datos que permitan a las organizaciones lograr más con sus datos.",
    image: 'https://truedatapublicassets.blob.core.windows.net/true-images/sand.jpg',
    imageText: 'main image description', 
    callToAction: null
  };

const vision = {
    title: 'Visión',    
    description:
        "Ser líderes en soluciones de integración de procesos que entreguen valor y enriquezcan la experiencia de nuestros clientes.",
    image: 'https://truedatapublicassets.blob.core.windows.net/true-images/stars.jpg',
    imageText: 'main image description',
    callToAction: null
}

const values = {
    title: 'Valores',
    description:
        "Somos un equipo de profesionales que entrega valor a nuestros clientes a través de la innovación y la excelencia en la ingeniería.",
    image: 'https://truedatapublicassets.blob.core.windows.net/true-images/sparks-reversed.jpg',
    imageText: 'main image description',
    callToAction: null
}

const Us = () => {
    const navigate = useNavigate();
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <main>
                    <MainFeaturedPost post={mission} />
                    <MainFeaturedPost post={vision} />
                    <MainFeaturedPost post={values} />
                </main>
            </Container>
        </ThemeProvider>
    );
}

export default Us;