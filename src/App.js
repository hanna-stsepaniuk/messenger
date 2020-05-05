import React from 'react';
import { Provider } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import MessengerView from './messenger/MessengerView';
import store from './store';

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Container maxWidth="lg">
          <header className={classes.header}>
            <Typography variant="h5" component="h1">Brand New Messenger</Typography>
          </header>
          <MessengerView />
      </Container>
    </Provider>
  );
}

export default App;
