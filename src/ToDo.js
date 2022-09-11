import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import './ToDo.css';

export default function ToDo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary="ToDo" secondary={props.text} />
            </ListItem>
        </List>
    )
}