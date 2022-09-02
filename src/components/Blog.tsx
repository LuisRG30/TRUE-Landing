

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
  { title: 'About', url: '#' },
  { title: 'Offering', url: '#' },
  { title: 'Docs', url: '#' },
  { title: 'Pricing', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Team', url: '#' },
  { title: 'FAQ', url: '#' },
  { title: 'Contact', url: '#' },
];

const mainFeaturedPost = {
  title: 'Data Science & Engineering',
  description:
    "Provide Data Science and Engineering solutions that generate insights, techniques and tools that enable organizations to achieve more with their data.",
  image: randomizeBlob(url, prefix, 12),
  imageText: 'main image description',
  linkText: 'Continue reading…',
};



const featuredPosts = [
  {
    title: 'Receipt',
    date: 'Latest Release',
    description:
      'All in one integrated sales solution.',
    image: randomizeBlob(url, prefix, 12),
    imageLabel: 'Receipt',
  },
  {
    title: 'Client Management',
    date: 'Latest Release',
    description:
      'Custom solutions to enhance client experiences.',
    image: randomizeBlob(url, prefix, 12),
    imageLabel: 'Client Management',
  },
];

const posts = [post1];

const sidebar = {
  title: 'About',
  description:
    'We, as a startup company, believe that organizations, big and small, can benefit from data driven processes and decision making as a result of data being at the center. \
     We strive to intelligently care, manage and display data to improve business culture and results.',
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