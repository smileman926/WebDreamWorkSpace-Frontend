import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(8),
    paddingTop: theme.spacing(1),
  },
  templateItemText: {
    fontSize: 12,
    fontWeight: 400,
    color: 'rgba(9,30,66,.66)',
  },
  menuItem: {
    fontWeight: 700,
    fontSize: 14,
  },
}));

export default function DashboardSidebar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const templateListItems = ['Business', 'Design', 'Education', 'Engineering', 'Marketing', 'HR & Operation',
                             'Personal', 'Productivity', 'Product Management', 'Project Management', 'Sales',
                             'Support', 'Team Management']

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button href="#boards">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Boards" classes={{primary: classes.menuItem}}/>
      </ListItem>
      
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <CollectionsBookmarkIcon />
        </ListItemIcon>
        <ListItemText primary="Templates"  classes={{primary: classes.menuItem}}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {templateListItems.map((templateListItem, index) =>
          <ListItem button className={classes.nested}  key={index}>
            <ListItemText primary={templateListItem} key={index} classes={{primary: classes.templateItemText}}/>
          </ListItem> 
        )}
        </List>
      </Collapse>

      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home"  classes={{primary: classes.menuItem}}/>
      </ListItem>
    </List>
  );
}