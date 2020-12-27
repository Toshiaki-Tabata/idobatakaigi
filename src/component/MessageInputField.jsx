import React, { useState, useRef } from 'react';
import { makeStyles, Grid, Avatar } from "@material-ui/core";

import {gravatarPath} from '../gravatar';
import {MessageField} from './MessageField';
import {MessageSubmitButton} from './MessageSubmitButton';

import { pushMessage } from '../firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        gridRow: 2,
        margin: "26px",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
}));

export const MessageInputField = ({name}) => {
    const [text, setText] = useState('');
    const inputEl = useRef(null);
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    const onSubmitData = () => {
        if (text !== '') {
            pushMessage({ name, text });
            setText('');
            inputEl.current.focus();
        };
    };

    return (
        <div className={classes.root}>
            <form className={classes.form} noValidate
            　  onSubmit={e => {
                    onSubmitData();
                    e.preventDefault();
                }}>
                <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Avatar src={avatarPath} />
                </Grid>
                <Grid item xs={10}>
                    <MessageField
                    inputEl={inputEl}
                    setText={setText}
                    text={text}
                    name={name} />
                </Grid>
                <Grid item xs={1}>
                    <MessageSubmitButton text={text} onSubmit={onSubmitData} />
                </Grid>
            </Grid>
            </form>
        </div>
    );
}