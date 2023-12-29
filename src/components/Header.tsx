import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import truelogo from '../TRUE-left.svg';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const { sections, title } = props;

  function handleEmailClick() {
    window.location.href = 'mailto:support@truedata.com.mx'
  }

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
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}