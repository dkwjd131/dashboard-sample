import * as React from 'react';
import { header } from '../assets/styles/layout.styled';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div css={header.container}>
      <div>
        <IconButton aria-label="home">
          <Link to="/home">
            <HomeIcon />
          </Link>
        </IconButton>
        <Button id="admin-button" onClick={handleClick}>
          ADMIN
        </Button>
        <Button id="dashboard-button" onClick={handleClick}>
          DASHBOARD
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={document.getElementById('admin-button')}
          open={anchorEl ? anchorEl.id === 'admin-button' : false}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/admin"> admin </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>asset</MenuItem>
        </Menu>
        <Menu
          id="basic-menu"
          anchorEl={document.getElementById('dashboard-button')}
          open={anchorEl ? anchorEl.id === 'dashboard-button' : false}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/monitoring"> monitoring </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>detecting</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
