import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
        },
    }),
);

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>これから色々書いていく予定</p>
        </div>
    );
}

export default Header;