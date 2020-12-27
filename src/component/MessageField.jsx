import React from 'react';
import { TextField } from '@material-ui/core';

export const MessageField = ({inputEl, text, setText, name}) => {
    return <TextField
    autoFocus
    inputRef={inputEl}
    fullWidth={true}
    onChange={e => setText(e.target.value)}
    value={text}
    />;
};
