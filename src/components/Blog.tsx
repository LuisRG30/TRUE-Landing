import * as React from 'react';

import { useNavigate } from 'react-router-dom';

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


const mainFeaturedPost = {
  title: 'Ingeniería de Datos',
  description:
    "Creamos soluciones que permiten a las organizaciones lograr más.",
  image: url + prefix + '2' + '.jpg',
  imageText: 'main image description', 
  callToAction: 'typeform'
};



const featuredPosts = [
  {
    title: 'Data Management',
    date: 'Control. Integridad. Agilidad.',
    description:
      'Controla tus datos y aprovecha su potencial. Resuelve problemas operacionales y de negocio.',
    image: url + prefix + '3' + '.jpg',
    imageLabel: 'Receipt',
  },
  {
    title: 'Data Intelligence',
    date: 'Descubrimiento. Conocimiento. Optimización.',
    description:
      'Descubre patrones y relaciones ocultas en tus datos. Mejora tus procesos y toma decisiones.',
    image: url + prefix + '9' + '.jpg',
    imageLabel: 'Client Management',
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
        <Header />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
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