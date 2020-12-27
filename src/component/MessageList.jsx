import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";

import MessageItem from './MessageItem';
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: 'auto',
        width: '100%',
    }
})

// key: -MPWX0E2YyLWn5xAzrpp: value: {name: "ヤンヤン", text: "こんにちは。"}
// key: -MPWX0E2YyLWn5xAzrpp, name: "ヤンヤン", text: "こんにちは。"}

export const MessageList = ({key, name, text}) => {
    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        messagesRef
        .orderByKey()
        .limitToLast(20)
        .on('value', (snapshot) => {
            const tempMessages = snapshot.val();
            if (tempMessages == null) return;
            const entries = Object.entries(tempMessages);
            const newMessages = entries.map(entry => {
                const [key, nameAndText] = entry;
                return { key, ...nameAndText };
            });
            setMessages(newMessages);
        });
    }, []);

    const length = messages.length;


    return (
        <List className={classes.root}>
            {messages !== null && messages.map((message, index) => {
                const isLastItem = length === index + 1;
                return (
                <MessageItem isLastItem={isLastItem} key={message.key} name={message.name} text={message.text} />
            )})}
        </List>
    );
}
