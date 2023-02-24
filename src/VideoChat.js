import React, { useCallback, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { useAppContext } from './context/appContext';
import Video from 'twilio-video';
import Room from './components/Room/Room';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function VideoChat() {
    const [roomName, setRoomName] = useState(uuidv4());
    const [room, setRoom] = useState(null);
    const [username, setUsername] = useState("");

    const {currentUser, connecting, setConnecting} = useAppContext();

    useEffect(()=> {
        if(currentUser) {
            setUsername(currentUser.email);
        }
    },[currentUser]);

    const handleSubmit = useCallback(async () => {
        setConnecting(true);

        const data = await fetch("/video/token", {
            method: "POST",
            body: JSON.stringify({
                identity:username,
                room:roomName,    
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>res.json());
        Video.connect(data.token, {
            name:roomName,
        }).then((room)=>{
            setConnecting(false);
            setRoom(room)
        })
        .catch((err)=> {
            console.log(err);
            setConnecting(false)
        })
    },[roomName, username]);

    const handleLogOut = useCallback(()=>{
        setRoom((prevRoom)=> {
            if(prevRoom) {
                prevRoom.localParticipant.tracks.forEach((trackPub)=>{
                    trackPub.track.stop();
                });
                prevRoom.disconnect();
            }
        })
    },[])

    useEffect(()=> {
        if(room) {
            const tidyUp = (event) => {
                if(event.persisted) {
                    return;
                }
                if(room) {
                    handleLogOut();
                }
            };
            window.addEventListener("pagehide", tidyUp);
            window.addEventListener("beforeunload", tidyUp);

            return()=> {
                window.removeEventListener("pagehide", tidyUp);
                window.removeEventListener("pagehide", tidyUp);
            }
        }
    },[room, handleLogOut])
    let render;

    if(room) {
        render = (
            <Room roomName={roomName} room={room} handleLogOut={handleLogOut} />
        )
    }else {
        render = (
            <>
            <Header />
            {
                connecting ? (
                    <h1>Loading</h1>
                ):(
                    <Home
                    handleSubmit={handleSubmit}
                    setRoomName={setRoomName}
                     />
                )}
            </>
        );
    }

    return render;
};

export default VideoChat