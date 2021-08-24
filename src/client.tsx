import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { App } from './app/App';
import { theme } from './theme/index';
import { jssServerSideTagId } from './const/common';

export const Main: React.FC = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector(`#${jssServerSideTagId}`);
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
  );
}

ReactDOM.hydrate(<Main />, document.querySelector('#root'));