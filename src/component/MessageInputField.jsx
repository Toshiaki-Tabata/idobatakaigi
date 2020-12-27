import React, { useState } from 'react';
import { makeStyles, Grid, Avatar } from "@material-ui/core";

import {gravatarPath} from '../gravatar';
import {MessageField} from './MessageField';

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
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    const onSubmitData = () => {
        if (text !== '') {
            pushMessage({ name: 'ヤンヤン', text });
            setText('');
        };
    };

    return (
        <div className={classes.root}>
            <form className={classes.form} noValidate
            　  onSubmit={e => {
    　              setText(text);
                    onSubmitData();
                    e.preventDefault();
                }}>
                <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Avatar src={avatarPath} />
                </Grid>
                <Grid item xs={10}>
                    <MessageField setText={setText} text={text} name={name} />
                </Grid>
                <Grid item xs={1}>
                    ボタン
                </Grid>
            </Grid>
            </form>
        </div>
    );
}