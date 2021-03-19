import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>>", input);
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at...</p>
                </div>

                <div className="chat__headerRight">
                <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">Avantika</span>
                    hey there  
                    <span className="chat__timestamp">3:52pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonOutlinedIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)}  type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicOutlinedIcon />
            </div>
        </div>
    )
}

export default Chat