import React from 'react';
import { Provider } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import MessengerView from './messenger/MessengerView';
import store from './store';

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(1),
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
    <Container maxWidth="lg">
      <Paper>
        <header className={classes.header}>
          <Typography variant="h5" component="h1" >Brand New Messenger</Typography>
        </header>
        <MessengerView />
      </Paper>
    </Container>
    </Provider>
  );
}

export default App;
