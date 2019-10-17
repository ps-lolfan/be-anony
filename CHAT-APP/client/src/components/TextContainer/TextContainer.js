import React from 'react';

import onlineIcon1 from '../../icons/onlineIcon1.png';
import linkedin from '../../icons/linkedin.png';
import github from '../../icons/github.png';
import profile from '../../icons/profile.png';



import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      
      <h1 align="right"><font color="#D3D3D3">Anonymous Chat Room <span role="img" aria-label="emoji">💬</span></font></h1>
      <h4 align="right"><font color="#3387E5">By - PRAVEEN SINNUR</font></h4>

      <p align="right"><b>PING ME HERE</b><br/><br/>
              <a href="/profile">
              <img alt="Online" src={profile}/> <b>myself</b>
              </a> &nbsp;&nbsp;&nbsp;

              <a href="https://www.linkedin.com/in/praveen-sinnur-322341166" target="_blank">
              <img alt="Online" src={linkedin}/>
              </a> &nbsp;&nbsp;&nbsp;

              <a href="https://www.github.com/ps-lolfan" target="_blank">
              <img alt="Online" src={github}/>
              </a>
      </p>


      









      
      <div class="blink_me">
       <h3 align="center">
          <font color="red">Don't Refresh the page !!!<br />Otherwise your chats will be cleared !!!</font></h3>
      </div>
    </div>
    {
      users
        ? (
          <div id="header">
              
            <h2>People currently in this room:</h2>
            
              <div className="activeContainer">
              
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    
                    <img alt="Online Icon" src={onlineIcon1}/> 
                    
                    &nbsp;&nbsp;{name}
                    
                  </div>
                ))}
              </h4>
              
              
            </div>
            

          </div>
          
        )
        : null
    }
  </div>
);

export default TextContainer;