import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import Switch from '@material-ui/core/Switch';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { toggleTheme } from '../redux/actions';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
        },
        switch: {
            textAlign: 'right',
        },
    }),
);

const Header = () => {
    const isDarktheme = useSelector<RootState, boolean>(state => state.toggleTheme.isDarktheme);
    const dispatch = useDispatch();

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.switch}>
                <Switch
                    checked={isDarktheme}
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onClick={() => dispatch(toggleTheme())}
                />
            </div>
            <h1>こんにちは</h1>
        </div>
    );
}

export default Header;