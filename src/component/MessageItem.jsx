import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

import {gravatarPath} from '../gravatar';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));

const MessageItem = ({key, name, text}) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    return (
        <ListItem divider>
            <ListItemAvatar>
                <Avatar src={avatarPath} />
            </ListItemAvatar>
            <ListItemText
            primary={name}
            secondary={
                <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
                >
                    {text}
                </Typography>
            }
            />
        </ListItem>
    );
}

export default MessageItem;