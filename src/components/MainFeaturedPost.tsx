import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { fontFamily } from '@mui/system';



interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    title: string;
    callToAction: string | null;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
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
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            {
              post.callToAction && (
                <Button variant="contained" sx={{ color: 'black', fontSize: 16,backgroundColor: '#ffffff', border: 1, fontFamily: 'Roboto, sans-serif', '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                  borderColor: '#f8f8f8',
                  border: 1,
                } }}
                onClick={() => window.location.href = 'https://l9iqjjtmd5o.typeform.com/to/iyyW6XGz'}
                >
                  Encuentra un servicio para ti
                </Button>
              )
            }
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}