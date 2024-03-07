import * as React from 'react';
import { header } from '../assets/styles/header.styled';
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
          <Link to="/">
            <HomeIcon />
          </Link>
        </IconButton>
        <Button id="system-button" onClick={handleClick}>
          SYSTEM
        </Button>
        <Button id="admin-button" onClick={handleClick}>
          ADMIN
        </Button>
        <Button id="monitoring-button" onClick={handleClick}>
          MONITORING
        </Button>
        <Button id="detecting-button" onClick={handleClick}>
          DETECTING
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={document.getElementById('system-button')}
          open={anchorEl ? anchorEl.id === 'system-button' : false}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="system/system_1"> system-1 </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>system-2</MenuItem>
        </Menu>
        <Menu
          id="basic-menu"
          anchorEl={document.getElementById('admin-button')}
          open={anchorEl ? anchorEl.id === 'admin-button' : false}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="admin/admin_1"> admin-1 </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>admin-2</MenuItem>
        </Menu>
        <Menu
          id="basic-menu"
          anchorEl={document.getElementById('monitoring-button')}
          open={anchorEl ? anchorEl.id === 'monitoring-button' : false}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="user/monitoring"> monitoring-1 </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>monitoring-2</MenuItem>
        </Menu>
        <Menu
          id="basic-menu"
          anchorEl={document.getElementById('detecting-button')}
          open={anchorEl ? anchorEl.id === 'detecting-button' : false}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="user/detecting"> detecting-1 </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>detecting-2</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
