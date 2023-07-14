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
import Footer from './Footer';
import ChatButton from './ChatButton';

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
