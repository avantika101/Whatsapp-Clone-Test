import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, name, id }) {

    const [seed, setSeed] = useState("");
    console.log(name);
    console.log(id);

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
        console.log('hey there from useEffect')
    }, [])


    const createChat = () => {
        const roomName = prompt("Please enter room name");
        console.log('roomname is',roomName);
        if (roomName) {
            //do something
        }
    };

    return !addNewChat ? (
        
        <Link to={`/rooms/${id}`} key={id}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </Link>
        
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat