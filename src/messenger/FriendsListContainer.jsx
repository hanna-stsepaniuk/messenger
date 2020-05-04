import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadFriends } from '../api/friends';
import { setFriendsAction, selectFriendAction } from '../redux/actions/messengerActions';
import { getFriends, getSelectedFriendId } from '../redux/selectors/messengerSelectors';

import FriendsList from './FriendsList';

const FriendsListContainer = () => {
    const dispatch = useDispatch();
    const friendsList = useSelector(getFriends);
    const selectedFriendId = useSelector(getSelectedFriendId);

    const selectFriendHandler = id => () => dispatch(selectFriendAction(id));

    useEffect(() => {
        loadFriends().then(friends => dispatch(setFriendsAction(friends)));
    }, [dispatch]);

    return (<FriendsList
        friends={friendsList}
        selectFriendHandler={selectFriendHandler}
        selectedFriendId={selectedFriendId}
    />);
};

export default FriendsListContainer;