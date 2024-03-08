import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export type MenuItemProps = {
  label: React.ReactNode;
  key: React.Key;
  id: string;
  path?: string;
  children?: MenuItemProps[];
  type: 'group' | 'menu';
  disabled?: boolean;
};

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let systemSubMenuList: MenuItemProps[] = [
    {
      label: 'system_3',
      key: 'system_3',
      id: 'system_3',
      type: 'menu',
    },
    {
      label: 'system_4',
      key: 'system_4',
      id: 'system_4',
      type: 'menu',
    },
  ];
  let systemMenuList: MenuItemProps[] = [
    {
      label: 'system_1',
      key: 'system_1',
      id: 'system_1',
      type: 'menu',
    },
    {
      label: 'system_2',
      key: 'system_2',
      id: 'system_2',
      type: 'group',
      children: systemSubMenuList,
    },
  ];
  let adminSubMenuList: MenuItemProps[] = [
    {
      label: 'admin_3',
      key: 'admin_3',
      id: 'admin_3',
      type: 'menu',
    },
    {
      label: 'admin_4',
      key: 'admin_4',
      id: 'admin_4',
      type: 'menu',
    },
  ];
  let adminMenuList: MenuItemProps[] = [
    {
      label: 'admin_1',
      key: 'admin_1',
      id: 'admin_1',
      type: 'menu',
    },
    {
      label: 'admin_2',
      key: 'admin_2',
      id: 'admin_2',
      type: 'group',
      children: adminSubMenuList,
    },
  ];
  let monitoringMenuList: MenuItemProps[] = [
    {
      label: 'monitoring_1',
      key: 'monitoring_1',
      id: 'monitoring_1',
      type: 'menu',
    },
    {
      label: 'monitoring_2',
      key: 'monitoring_2',
      id: 'monitoring_2',
      type: 'menu',
    },
  ];
  let detectingMenuList: MenuItemProps[] = [
    {
      label: 'detecting_1',
      key: 'detecting_1',
      id: 'detecting_1',
      type: 'menu',
    },
    {
      label: 'detecting_2',
      key: 'detecting_2',
      id: 'detecting_2',
      type: 'menu',
    },
  ];

  const menuList: MenuItemProps[] = [
    {
      label: <HomeIcon />,
      key: 'home',
      id: 'home',
      type: 'menu',
    },
    {
      label: 'SYSTEM',
      key: 'system',
      id: 'system',
      type: 'group',
      children: systemMenuList,
    },
    {
      label: 'ADMIN',
      key: 'admin',
      id: 'admin',
      type: 'group',
      children: adminMenuList,
    },
    {
      label: 'MONITORING',
      key: 'monitoring',
      id: 'monitoring',
      type: 'group',
      children: monitoringMenuList,
    },
    {
      label: 'DETECTING',
      key: 'detecting',
      id: 'detecting',
      type: 'group',
      children: detectingMenuList,
    },
  ];

  return (
    <>
      {menuList.map((menu: MenuItemProps) => {
        return menu.type === 'menu' ? (
          <Button key={menu.key}>
            <Link to={menu.path ?? '/'}>{menu.label}</Link>
          </Button>
        ) : (
          <>
            <Button id={menu.id}>{menu.label}</Button>
            {menu.children?.map((item: MenuItemProps) => {
              <Menu
                anchorEl={document.getElementById('system-button')}
                open={anchorEl ? anchorEl.id === 'system-button' : false}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="system/system_1"> system-1 </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>system-2</MenuItem>
              </Menu>;
            })}
          </>
        );
      })}
    </>
  );
};

export default NavigationBar;
