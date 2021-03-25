import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Link } from "react-router-dom";
import db from './firebase';

function SidebarChat({ addNewChat, name, id }) {

    const [seed, setSeed] = useState("");
    console.log(name);
    console.log(id);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
        console.log('hey there from useEffect')
    }, [])

    useEffect(() => {
        if(id) {
            db.collection("rooms").doc(id).collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => (
                    doc.data()
                )))
            ));
        }
    }, [id]);


    const createChat = () => {
        const roomName = prompt("Please enter room name");
        console.log('roomname is',roomName);
        if (roomName) {
            db.collection("rooms").add({
                name: roomName
            })
        }
    };

    return !addNewChat ? (
        
        <Link to={`/rooms/${id}`} key={id}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
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