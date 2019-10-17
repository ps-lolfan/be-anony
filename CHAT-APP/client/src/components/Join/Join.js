import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';
import { fontFace } from 'glamor';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    

    return (
        <div className="joinOuterContainer">    
            <div className="joinInnerContainer">
            
                <h1 className="heading">Join</h1>
                <div><input placeholder="Your username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div>
                    <input placeholder="Which room you wanna join ?" 
                            className="joinInput mt-20" 
                            type="text" 
                            onChange={(event) => setRoom(event.target.value)}/>
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                  <button className={'button mt-20'} type="submit">Sign In</button>
        
                
                </Link><br/>
                
                <div>
                    <p><font color="#00FF00"><b>Disclaimer!!!</b></font> <br />
                    <font color="red">The room you join is not under control of admin.
                        If you enter non-existing room name. Then that room will be created and you will
                        be logged in. Content of the room is not under control and the people here are anonymous !!!
                    </font>
                    </p>
                </div>
            </div>
            
        </div>
    )
} 

export default Join;