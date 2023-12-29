import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import ChatButton from './ChatButton';

const mainFeaturedPost = {
  title: 'Ingeniería y Ciencia de Datos',
  description:
    "Creamos soluciones que permiten a las organizaciones lograr más.",
  image: '',
  imageText: 'main image description',
  callToAction: 'typeform'
};



const featuredPosts = [
  {
    title: 'Receipt',
    date: 'Última Versión',
    description:
      'Controla tus datos y aprovecha su potencial. Resuelve problemas operacionales y de negocio.',
    image: '',
    imageLabel: 'Receipt',
  },
  {
    title: 'Ingeniería de Software',
    date: 'Comunícate con nosotros',
    description:
      'Desarrollamos y administramos software a tu medida y la de tus clientes. Lleva tu negicio al espacio digital.',
    image: '',
    imageLabel: 'Software Engineering',
  },
  {
    title: 'Ciencia de Datos',
    date: 'Comunícate con nosotros',
    description:
      'Descubre patrones y relaciones ocultas en tus datos. Mejora tus procesos y toma decisiones.',
    image: '',
    imageLabel: 'Client Management',
  },
];



const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <ChatButton />
        </main>
      </Container>
      <Footer
        image="https://truedatapublicassets.blob.core.windows.net/true-images/Logo.png"
        description="Integrate technology to provide value"
      />
    </ThemeProvider>
  );
}
