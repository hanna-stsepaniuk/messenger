import { handleActions } from 'redux-actions';
import produce from 'immer';

import {
  setFriendsAction,
  setMessagesAction,
  pushMessageAction,
  selectFriendAction,
} from '../actions/messengerActions';

const initialState = {
  friends: [],
  messages: {},
  selectedFriend: null,
};

export default handleActions(
  {
    [setFriendsAction]: (state, action) =>
      produce(state, (draft) => {
        draft.friends = action.payload;
      }),
    [setMessagesAction]: (state, action) =>
      produce(state, (draft) => {
        const { friendId, messages } = action.payload;
        draft.messages[friendId] = messages;
      }),
    [pushMessageAction]: (state, action) =>
      produce(state, (draft) => {
        const { friendId, message } = action.payload;

        if (!draft.messages[friendId]) {
          draft.messages[friendId] = [];
        }

        draft.messages[friendId].push(message);
      }),
    [selectFriendAction]: (state, action) =>
      produce(state, (draft) => {
        draft.selectedFriend = action.payload;
      }),
  },
  initialState
);
