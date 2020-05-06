import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useFormik } from 'formik';

import { loadMessages, sendMessage } from '../api/messages';
import {
  pushMessageAction,
  setMessagesAction,
} from '../redux/actions/messengerActions';
import {
  getMessages,
  getSelectedFriendId,
} from '../redux/selectors/messengerSelectors';

import ChatWindow from './ChatWindow';
import { Typography } from '@material-ui/core';

const validate = (values) => {
  const errors = {};

  if (!values.messageText) {
    errors.messageText = 'Required';
  }

  return errors;
};

const ChatWindowContainer = () => {
  const dispatch = useDispatch();
  const selectedFriendId = useSelector(getSelectedFriendId);
  const messages = useSelector(getMessages(selectedFriendId));

  const initialValues = {
    messageText: '',
  };

  const onSubmit = ({ messageText }, { resetForm }) =>
    sendMessage(selectedFriendId, messageText)
      .then(() =>
        dispatch(
          pushMessageAction(selectedFriendId, {
            messageText,
            date: dayjs().format('hh:mm:ss A'),
          })
        )
      )
      .then(() => resetForm());

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  // NOTE: Load messages from the server
  // useEffect(() => {
  //     loadMessages(selectedFriendId)
  //         .then(messages => dispatch(setMessagesAction(selectedFriendId, messages)));
  // }, [dispatch, selectedFriendId]);

  return selectedFriendId === null ? (
    <Typography>Select a friend</Typography>
  ) : (
    <ChatWindow messages={messages} formik={formik} />
  );
};

export default ChatWindowContainer;
