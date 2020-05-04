export const getFriends = state => state.messenger.friends;

export const getMesseges = friendId => state => state.messenger.messages[friendId] || [];

export const getSelectedFriendId = state => state.messenger.selectedFriend;