import React from 'react';
import { TextField } from '@material-ui/core';

export const MessageField = ({text, setText, name}) => {
    return <TextField
    fullWidth={true}
    onChange={e => setText(e.target.value)}
    value={text}
    />;
};
