import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { navigationBar } from '../assets/styles/navigationBar.styled';
  
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
  const [subAnchorEl, setSubAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const subHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log('sub handle click')
    setSubAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const subHandleClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
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
      path: 'system/system_1'
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
      path:"admin/admin_1"
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
      path: "user/monitoring"
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
      path: "user/detecting"
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
      path: '/'
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
      {menuList.map((oneDepth: MenuItemProps) => {
        return oneDepth.type === 'menu' ? (
          <Button key={oneDepth.key}>
            <Link to={oneDepth.path ?? '/'}>{oneDepth.label}</Link>
          </Button>
        ) : (
          <div key={oneDepth.key}>
              <Button key={'group'+oneDepth.key} id={oneDepth.id} onClick={handleClick}>{oneDepth.label}</Button>
              <Menu
                key={'Menu-'+oneDepth.key} 
                anchorEl={document.getElementById(oneDepth.id)}
                open={anchorEl ? anchorEl.id === oneDepth.id : false}
                onClose={handleClose}
              >
                <div id={'anchor'+oneDepth.id}></div>
                {oneDepth.children?.map((twoDepth: MenuItemProps) => {
                  if (twoDepth.type === 'menu') {
                    return <MenuItem key={twoDepth.key} onClick={handleClose}>
                      <Link to={twoDepth.path ?? '/'}> {twoDepth.label} </Link>
                    </MenuItem>;
                  } else {
                    return <div key={twoDepth.key}>
                      <MenuItem id={twoDepth.id} key={'group'+twoDepth.key} onClick={subHandleClick}>{twoDepth.label}</MenuItem>
                      <Menu
                        css={navigationBar['three-depth-menu']}
                        key={'Menu-'+twoDepth.key}
                        anchorEl={document.getElementById('anchor'+oneDepth.id)}
                        open={subAnchorEl ? subAnchorEl.id === twoDepth.id : false}
                        onClose={subHandleClose}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        {
                          twoDepth.children?.map((threeDepth: MenuItemProps) => { 
                            return <MenuItem key={threeDepth.key} onClick={subHandleClose}>
                            <Link to={threeDepth.path ?? '/'}> {threeDepth.label} </Link>
                          </MenuItem>;
                          })
                        }
                      </Menu>
                    </div>;
                  }
              })}
              </Menu>
          </div>
        );
      })}
    </>
  );
};

export default NavigationBar;
