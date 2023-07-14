import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import truelogo from '../TRUE-left.svg';

import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';


const sections = [
  { title: 'Nosotros', url: '/us' },
  { title: 'Servicios', url: '/services' },
  { title: 'Blog', url: '#' },
  { title: 'Preguntas Frecuentes', url: '#' },
  { title: 'Contacto', url: '#' },
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        <img src={truelogo} alt="True Data" width="25%" height="auto" onClick={() => navigate('/')} style={{ cursor: 'pointer'}}/> 
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body1"
            href={section.url}
            sx={{ p: 1, flexShrink: 0, fontSize: '1rem' }}
            underline="none"
            onClick={() => navigate(section.url)}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}