import React from 'react';
import { makeStyles, Grid, Avatar } from "@material-ui/core";

import {gravatarPath} from '../gravatar';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: "26px",
    }
})

export const MessageInputField = ({name}) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(name);
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Avatar src={avatarPath} />
                </Grid>
                <Grid item xs={10}>
                    入力
                </Grid>
                <Grid item xs={1}>
                    ボタン
                </Grid>
            </Grid>
        </div>
    );
}