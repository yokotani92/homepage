import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhotoIcon from '@material-ui/icons/Photo';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '90%',
            // maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            alignContent: 'center',
        },
    }),
);

const SideMenu: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Favorite" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PhotoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Photo" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="About me" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Menuになる予定だけどまだなにもない" />
                </ListItem>
            </List>
        </div>
    );
}

export default SideMenu;