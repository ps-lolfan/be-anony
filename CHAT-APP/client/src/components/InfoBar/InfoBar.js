import React from 'react';

import logout from '../../icons/logout.png';
import roomIcon from '../../icons/room.png';


import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
    <div className="leftInnerContainer">
        <img className="roomIcon" src={roomIcon} alt="room" />
   
        <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
        <a href="/"><img src={logout} alt="close" /></a>
    </div>
    </div>
)

export default InfoBar;