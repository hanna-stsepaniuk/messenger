import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  history: {
    flexGrow: 2,
  },
  newMessageContainer: {
    display: 'flex',
  },
  submitButton: {
    marginLeft: theme.spacing(1),
  },
}));

const ChatWindow = ({ messages, formik }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.history}>
        <List>
          {messages.map(({ messageText, date }) => (
            <ListItem key={messageText}>
              <ListItemText primary={messageText} secondary={`Me at ${date}`} />
            </ListItem>
          ))}
        </List>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className={classes.newMessageContainer}
      >
        <TextField
          fullWidth={true}
          name="messageText"
          value={formik.values.messageText}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <Button
          className={classes.submitButton}
          type="submit"
          disabled={!formik.isValid}
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      messageText: PropTypes.string,
      date: PropTypes.string,
    })
  ),
  formik: PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired,
    values: PropTypes.shape({
      messageText: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ChatWindow;
