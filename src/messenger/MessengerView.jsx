import React from 'react';

import Grid from '@material-ui/core/Grid';

import FriendsList from './FriendsListContainer';

const MessengerView = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <FriendsList/>
            </Grid>
            <Grid item xs={10}>Chat</Grid>
        </Grid>);
};

export default MessengerView;