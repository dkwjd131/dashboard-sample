import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>project</MenuItem>
        <MenuItem onClick={handleClose}>asset</MenuItem>
      </Menu>
      <Menu
        id="basic-menu"
        anchorEl={document.getElementById('dashboard-button')}
        open={anchorEl ? anchorEl.id === 'dashboard-button' : false}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>monitoring</MenuItem>
        <MenuItem onClick={handleClose}>detecting</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
