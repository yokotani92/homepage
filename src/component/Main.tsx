import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SideMenu from './SideMenu';
import MyWork from './MyWork';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
        },
    }),
);

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <SideMenu />
                </Grid>
                <Grid item xs={9}>
                    <MyWork />
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;