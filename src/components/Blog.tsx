import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DeblurOutlinedIcon from '@mui/icons-material/DeblurOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';

import ServiceCategory from './ServiceCategory';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ChatButton from './ChatButton';

const url = 'https://truedatapublicassets.blob.core.windows.net/true-images/'
const prefix = 'stock-'

function generateRandom(min: number, max: number) {

  // find diff
  let difference = max - min;

  // generate random number 
  let rand = Math.random();
  
  // multiply with difference 
  rand = Math.floor( rand * difference);

  // add with min value 
  rand = rand + min;

  return rand;
}

function randomizeBlob(url:string, prefix: string, nBlobs: number) {
  let blob = url + prefix + generateRandom(1, nBlobs) + '.jpg'
  return blob
}

const sections = [
  { title: 'Nosotros', url: '#' },
  { title: 'Servicios', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Preguntas Frecuentes', url: '#' },
  { title: 'Contacto', url: '#' },
];

const mainFeaturedPost = {
  title: ['Ingeniería de Datos', 'Inteligencia Artificial', 'Machine Learning', 'Big Data', 'Análisis de Datos', 'Ciencia de Datos'],
  description:
    "Creamos soluciones que permiten a las organizaciones lograr más.",
  image: url + prefix + '2' + '.jpg',
  imageText: 'main image description', 
  align: 'left'
};


const serviceCategories = [
  {
    title: 'Data Management',
    description:
      'Controla tus datos y aprovecha su potencial. Resuelve problemas operacionales y de negocio.',
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: '3rem', color: '#14252C' }}/>,
    link: '/services'
  },
  {
    title: 'Data Intelligence',
    description:
      'Descubre patrones y relaciones ocultas en tus datos. Mejora tus procesos y toma decisiones.',
    icon: <DeblurOutlinedIcon sx={{ fontSize: '3rem', color: '#14252C' }}/>,
    link: '/services'
  },
  {
    title: 'Data Mastery',
    description:
      'Entrena a tus colaboradores y capacítalos para que puedan aprovechar el potencial de tus datos.',
    icon: <SchoolOutlinedIcon sx={{ fontSize: '3rem', color: '#14252C' }}/>,
    link: '/services'
  },
];

const sidebar = {
  title: 'About',
  description:

    'We, as a startup company, believe that organizations, big and small, can benefit from data driven processes and decision making as a result of data being at the center. We strive to intelligently care, manage and display data to improve business culture and results.',

  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const latestBlogUrl = 'https://truedatapublicassets.blob.core.windows.net/blogs/latest-blog.md'

const posts = [ latestBlogUrl ];

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent:'space-between', flexDirection:'column', minHeight: '100vh' }}>
        <Box>
          <Container maxWidth="lg">
            <Header />
            <MainFeaturedPost post={mainFeaturedPost}>
              <Box sx={{ mt:'10%'}}>
                <Button variant="contained"
                        sx={{ color: 'black',
                              fontSize: 16,
                              backgroundColor: '#ffffff',
                              border: 1,
                              fontFamily: 'Roboto, sans-serif',
                              '&:hover': {
                                backgroundColor: 'black',
                                color: 'white',
                                borderColor: '#f8f8f8',
                                border: 1
                              }
                            }}
                        onClick={() => window.location.href = 'https://l9iqjjtmd5o.typeform.com/to/iyyW6XGz'}>
                    Encuentra un servicio para ti
                </Button>
              </Box>
            </MainFeaturedPost>
            <Typography
              component="h1"
              sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '3rem', pt: '3%'}}
            >
              Explora nuestros servicios
            </Typography>
            <Grid container sx={{ display: 'flex', justifyContent:'center', alignItems:'center', p:'1%', pt:'3%' }}>
              <Box sx={{ display: 'flex', justifyContent:'space-between', width:'100%' }}>
                {serviceCategories.map((serviceCategory) => (
                  <ServiceCategory key={serviceCategory.title} serviceCategory={serviceCategory} />
                ))}
              </Box>
            </Grid>

            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="Nuestro blog más reciente" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
            
          </Container>
        </Box>
        <Box>
          <Footer
            //image="https://truedatapublicassets.blob.core.windows.net/true-images/Logo.png"
            description="Integrate technology to provide value"
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
