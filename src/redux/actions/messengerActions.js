import { createAction } from 'redux-actions'; 

export const setFriendsAction = createAction("SET_FRIENDS");

export const setMessagesAction = createAction("SET_MESSAGES", (friendId, messages) => ({ friendId, messages }));

export const pushMessageAction = createAction("PUSH_MESSAGE", (friendId, message) => ({ friendId, message }));

export const selectFriendAction = createAction("SELECT_FRIEND");