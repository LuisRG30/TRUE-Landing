import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import post1 from './blogposts/post1'

const url = 'https://truedatapublicassets.blob.core.windows.net/true-images/'
const mainimageurl = 'https://truedatapublicassets.blob.core.windows.net/true-images/stock-14.jpg'
const receiptimageurl = 'https://truedatapublicassets.blob.core.windows.net/true-images/stock-15.jpg'
const softwareimageurl = 'https://truedatapublicassets.blob.core.windows.net/true-images/stock-1.jpg'
const dataimageurl = 'https://truedatapublicassets.blob.core.windows.net/true-images/stock-9.jpg'
const automationimageurl = 'https://truedatapublicassets.blob.core.windows.net/true-images/stock-8.jpg'
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
  { title: 'Documentación', url: '#' },
  { title: 'Precios', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Team', url: '#' },
  { title: 'FAQ', url: '#' },
  { title: 'Contacto', url: '#' },
];

const mainFeaturedPost = {
  title: 'Ingeniería y Ciencia de Datos',
  description:
    "Proporcionar soluciones de ciencia e ingeniería de datos que permitan a las organizaciones lograr más con sus datos.",
  image: mainimageurl,
  imageText: 'main image description',
  linkText: 'Sigue leyendo…',
};



const featuredPosts = [
  {
    title: 'Receipt',
    date: 'Última Versión',
    description:
      'Receipt es un punto de venta que te permite vender de manera fácil y rápida, interactuando con tus clientes digitalmente.',
    image: receiptimageurl, 
    imageLabel: 'Receipt',
  },
  {
    title: 'Ingeniería de Software',
    date: 'Comunícate con nosotros',
    description:
      'Desarrollamos y administramos software a tu medida y la de tus clientes. Lleva tu negicio al espacio digital.',
    image: softwareimageurl,
    imageLabel: 'Software Engineering',
  },
  {
    title: 'Ciencia de Datos',
    date: 'Comunícate con nosotros',
    description:
      'Soluciones personalizadas para mejor tu experiencia empresarial. Haz mejor uso de tus datos para servir a clientes y colaboradores.',
    image: dataimageurl,
    imageLabel: 'Data Science',
  },
  {
    title: 'Automatización',
    date: 'Comunícate con nosotros',
    description:
      'Automatiza y digitaliza los procesos tediosos de tu negocio. Haz eficiente la operación y toma de decisiones.',
    image: automationimageurl,
    imageLabel: 'Automation',
  },
];

const posts = [post1];

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

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="TRUE" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        image="https://truedatapublicassets.blob.core.windows.net/true-images/Logo.png"
        description="Integrate technology to provide value"
      />
    </ThemeProvider>
  );
}