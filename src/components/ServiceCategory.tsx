import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

interface ServiceCategoryProps {
  serviceCategory: {
    title: string;
    description: string;
    icon: any;
    link: string;
  };
}

export default function ServiceCategory(props: ServiceCategoryProps) {
  const navigate = useNavigate();

  const { serviceCategory } = props;
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsTransitioning(false);
  }

  const handleTransitioning = () => {
    if (isHovered) {
      setIsTransitioning(true);
    }
  };

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate(serviceCategory.link)}
        raised={isHovered} // Add a raised effect when hovered
      >
        <CardContent sx={{ height: '20vh', border: '1px solid #e0e0e0'}}>
          <Stack alignItems="left" sx={{ height: '100%', display: 'flex', justifyContent: 'space-between' }}>
            {serviceCategory.icon}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              position="relative"
            >
              <Box sx={{width:'90%'}}>
                <Slide direction="up" in={!isHovered} appear={false} mountOnEnter unmountOnExit
                      style={{ display: isTransitioning ? 'none' : 'block'}}
                      addEndListener={() => handleTransitioning()}
                      timeout={500}>
                  <Typography variant="h6" component="h2">
                    {serviceCategory.title}
                  </Typography>
                </Slide>
                <Slide direction="down" in={isHovered && isTransitioning} mountOnEnter unmountOnExit
                      style={{ display: isTransitioning ? 'block' : 'none'}}
                      timeout={500}>
                  <Typography
                    variant="body1"
                  >
                    {serviceCategory.description}
                  </Typography>
                </Slide>
              </Box>
              <Box sx={{position: 'absolute', bottom: 0, left: '90%'}}>
                <ArrowForwardRoundedIcon sx={{ color: 'black' }} />
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
