import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pickService } from '../../redux/services/actions'
import { useKeycloak } from 'react-keycloak';
import clsx from 'clsx';
import { MenuProps } from '@material-ui/core/Menu'
import { ServiceSwitch } from '../appTools/ServiceSwitch'

import {
  HOME, ANALYTICS, SALES, OPERATIONS, HUMAN_RESOURCES, SETTINGS
} from '../../constants/servicesAndRoles'

import {
  createStyles, makeStyles,
  withStyles, useTheme, Theme
} from '@material-ui/core/styles';

import {
  IconButton, Divider, Typography, CssBaseline,
  Grid, Paper, List, Toolbar, AppBar, Drawer, Button,
  MenuItem, ListItem, ListItemText, ListItemIcon, Menu
} from '@material-ui/core'

import  {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  MultilineChart as MultilineChartIcon,
  MonetizationOn as MonetizationOnIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon
} from '@material-ui/icons';
// END OF IMPORTS


const drawerWidth = 240;

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
  const [keycloak] = useKeycloak();

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
          <ListItem button onClick={() => dispatch(pickService(HOME))}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {roles.includes(ANALYTICS)
          ?
           <ListItem button onClick={() => dispatch(pickService(ANALYTICS))}>
             <ListItemIcon>
               <MultilineChartIcon />
             </ListItemIcon>
             <ListItemText primary="Analytics" />
           </ListItem>
          : null
          }
          {roles.includes(SALES)
          ?
           <ListItem button onClick={() => dispatch(pickService(SALES))}>
             <ListItemIcon>
               <MonetizationOnIcon />
             </ListItemIcon>
             <ListItemText primary="Sales" />
           </ListItem>
          : null
          }
          {roles.includes(OPERATIONS)
          ?
           <ListItem button onClick={() => dispatch(pickService(OPERATIONS))}>
             <ListItemIcon>
               <BusinessIcon />
             </ListItemIcon>
             <ListItemText primary="Operations" />
           </ListItem>
          : null
          }
          {roles.includes(HUMAN_RESOURCES)
          ?
           <ListItem button onClick={() => dispatch(pickService(HUMAN_RESOURCES))}>
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
          <ListItem button onClick={() => dispatch(pickService(SETTINGS))}>
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
            <Paper className={classes.paper}> <ServiceSwitch /> </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
