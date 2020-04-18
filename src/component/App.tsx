import React from 'react';
import Main from './Main';
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { lightBlue, pink } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const App: React.FC = () => {
  const isDarktheme = useSelector<RootState, boolean>(state => state.toggleTheme.isDarktheme);

  const theme = createMuiTheme({
    palette: {
      type: isDarktheme ? 'dark' : 'light',
      primary: {
        main: lightBlue.A400,
      },
      secondary: {
        main: pink.A200,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
};

export default App;