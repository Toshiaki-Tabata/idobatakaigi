import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        gridRow: 2,
    }
})

export const MessageInputField = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>MessageInputField</div>
    );
}