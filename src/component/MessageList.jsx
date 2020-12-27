import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core";

import { messagesRef } from '../firebase';

const useStyles = makeStyles({
    root: {
        gridRow: 1,
    }
})

// key: -MPWX0E2YyLWn5xAzrpp: value: {name: "ヤンヤン", text: "こんにちは。"}
// key: -MPWX0E2YyLWn5xAzrpp, name: "ヤンヤン", text: "こんにちは。"}

export const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        messagesRef
        .orderByKey()
        .limitToLast(3)
        .on('value', (snapshot) => {
            const tempMessages = snapshot.val();
            if (tempMessages == null) return;
            const entries = Object.entries(tempMessages);
            const newMessages = entries.map(entry => {
                const [key, nameAndText] = entry;
                return { key, ...nameAndText };
            });
            console.log(newMessages);
            setMessages(newMessages);
        });
    }, []);
    return (
        <div className={classes.root}>a
        </div>
    );
}
