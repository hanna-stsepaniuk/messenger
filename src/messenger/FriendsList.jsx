import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const FriendsList = ({ friends, selectFriendHandler, selectedFriendId }) => {
  return (
    <List>
      {friends.map((friend) => (
        <ListItem
          button
          key={friend.id}
          onClick={selectFriendHandler(friend.id)}
          selected={selectedFriendId === friend.id}
        >
          {friend.name}
        </ListItem>
      ))}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  selectFriendHandler: PropTypes.func.isRequired,
  selectedFriendId: PropTypes.number,
};

export default FriendsList;
