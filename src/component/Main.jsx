import { makeStyles } from "@material-ui/core";
import React from "react";

import { MessageInputField } from './MessageInputField';
import { MessageList } from './MessageList';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr auto',
    },

});

export const Main = ({name}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MessageList />
            <MessageInputField name={name}/>
            <p>Your Name is {name}.</p>
        </div>
    );
};
