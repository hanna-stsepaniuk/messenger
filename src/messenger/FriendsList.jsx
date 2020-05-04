import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const FriendsList = ({ friends, selectFriendHandler, selectedFriendId }) => {
    return (<List>
        {friends.map(friend => 
            <ListItem
                button
                key={friend.id}
                onClick={selectFriendHandler(friend.id)}
                selected={selectedFriendId === friend.id}>
                {friend.name}
            </ListItem>)}
    </List>);
};

export default FriendsList;