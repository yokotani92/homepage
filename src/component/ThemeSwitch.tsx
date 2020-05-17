import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import Switch from '@material-ui/core/Switch';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { toggleTheme } from '../redux/actions';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        switch: {
            textAlign: 'left',
            display: 'inline-block'
        },
    }),
);

const ThemeSwitch: React.FC = () => {
    const isDarktheme = useSelector<RootState, boolean>(state => state.toggleTheme.isDarktheme);
    const dispatch = useDispatch();

    const classes = useStyles();

    return (
        <div className={classes.switch}>
            <Switch
                checked={isDarktheme}
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                onClick={() => dispatch(toggleTheme())}
            />
        </div>
    );
}

export default ThemeSwitch;