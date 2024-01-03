import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typed from 'react-typed';

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    title: string | string[];
    align: string;
  };
}

export default function MainFeaturedPost(props: React.PropsWithChildren<MainFeaturedPostProps>) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container
        sx={{
          pr: '5%',
          pl: '5%',
          justifyContent: post.align,
        }}>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            { typeof post.title === 'string' ? (
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '2.5rem' }}
              >
                {post.title}
              </Typography>
            ) : (
              <Typed
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '2.5rem' }}
                strings={post.title}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            )}
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}