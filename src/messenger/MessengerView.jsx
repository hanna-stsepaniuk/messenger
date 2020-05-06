import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import FriendsList from './FriendsListContainer';
import ChatWindow from './ChatWindowContainer';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    height: 600,
  },
}));

const MessengerView = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Paper className={classes.container}>
          <FriendsList />
        </Paper>
      </Grid>
      <Grid item xs={10}>
        <Paper className={classes.container}>
          <ChatWindow />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MessengerView;
