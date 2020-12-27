import React from 'react';
import {IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export const MessageSubmitButton = ({text, onSubmit}) => {
//    <!-- SendIcon / -->
    return (
        <IconButton disabled={text === ''} onClick={()=>onSubmit()}>
            <SendIcon />
        </IconButton>
    );
}