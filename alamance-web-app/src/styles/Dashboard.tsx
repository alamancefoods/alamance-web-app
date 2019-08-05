import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pickService } from '../redux/services/actions'
import { useKeycloak } from 'react-keycloak';
import clsx from 'clsx';
import {  createMuiTheme, createStyles, makeStyles, withStyles, useTheme, Theme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import MyDropZone from '../utils/fileHandler/MyDropZone'

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {main: '#ff0000'},
    secondary: { main: '#ff0000'},
  },
})

const StyledProfileMenu = withStyles({
  paper: {
    border: '1px solid #ff0000',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledProfileMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: '#ff0000',
      '& multiListItemIcon-root, & .MultiListItemText-primary': {
        color: '#ff0000'
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    profile: {
      marginLeft: 'auto',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing(1)
    }
  }),
);

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch()
  const roles = useSelector((state: any) => state.roleReducer.roles)
  const pickedService = useSelector((state: any) => state.serviceReducer.service)
  const [keycloak, initialized] = useKeycloak();

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleProfileClick(event: React.MouseEvent<HTMLElement>){
    setAnchorEl(event.currentTarget);
  }

  function handleProfileClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            AFI Technologies
          </Typography>
          <div className={classes.profile}>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleProfileClick}
            >
              <AccountCircleIcon />
            </Button>
            <StyledProfileMenu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleProfileClose}
            >
              <StyledProfileMenuItem>
                <ListItemText primary="Logout" onClick={() => keycloak.logout()} />
              </StyledProfileMenuItem>
            </StyledProfileMenu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => dispatch(pickService('home'))}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {roles.includes('analytics')
          ?
           <ListItem button onClick={() => dispatch(pickService('analytics'))}>
             <ListItemIcon>
               <MultilineChartIcon />
             </ListItemIcon>
             <ListItemText primary="Analytics" />
           </ListItem>
          : null
          }
          {roles.includes('sales')
          ?
           <ListItem button onClick={() => dispatch(pickService('sales'))}>
             <ListItemIcon>
               <MonetizationOnIcon />
             </ListItemIcon>
             <ListItemText primary="Sales" />
           </ListItem>
          : null
          }
          {roles.includes('operations')
          ?
           <ListItem button onClick={() => dispatch(pickService('operations'))}>
             <ListItemIcon>
               <BusinessIcon />
             </ListItemIcon>
             <ListItemText primary="Operations" />
           </ListItem>
          : null
          }
          {roles.includes('human resources')
          ?
           <ListItem button onClick={() => dispatch(pickService('humanResources'))}>
             <ListItemIcon>
               <PeopleIcon />
             </ListItemIcon>
             <ListItemText primary="Human Resources" />
           </ListItem>
          : null
          }
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => console.log(pickedService)}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}> <MyDropZone /> </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
