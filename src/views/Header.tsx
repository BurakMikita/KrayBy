import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container/Container';
import { useTranslation } from 'react-i18next';

import InboxIcon from '@mui/icons-material/MoveToInbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Collapse, ListItemIcon } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [ {name: 'main', link: "/" }, {name: 'news', link: "news" },{name: 'about', link: "ourprojects" },{name: 'contact', link: "contact" }];
const languages = ['it', 'ru']

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
   
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        KrayBy
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink to={item.link} >
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar component="nav" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Container maxWidth={'lg'} sx={{ display: 'flex' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              KrayBy
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <NavLink style={{color: "black"}} to={item.link} >
                <Button key={item.name}  sx={{color: 'white'}}>
                  {t(`header.${item.name}`)}
                </Button>
                </NavLink>
              ))}
            </Box>

            <Button sx={{ color: '#fff' }} onClick={handleClick}>
              <span>{i18n.language}</span>
              {open ? <ExpandLess /> : <ExpandMore />}
            </Button>

            <Collapse in={open} sx={{ position: 'relative' }} timeout="auto" unmountOnExit>
              <List
                sx={{ position: 'absolute', top: '50px', right: '5px' }}
                component="div"
                disablePadding
              >

                {languages.map((ling) => (
                <Button key={ling }  sx={{
                  background: 'white',
                  color: ling == i18n.language ? 'rgb(209, 29, 49)': 'rgb(25, 118, 210)' ,
                  border: '1px solid rgb(25, 118, 210)',
                }}
                onClick={() => changeLanguage(ling)}>
                  {ling}
                </Button>
              ))}
              
              </List>
            </Collapse>
          </Container>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
