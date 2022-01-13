import React, { useState } from 'react';
import './ProfileUser.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { Scale } from '@mui/icons-material';

export default ({user, show, setShow}) => {
    const [activeInputName, setActiveInputName] = useState(false);
    const [activeInputMessage, setActiveInputMessage] = useState(false);
    const [message, setMessage] = useState('Hey there! I am using WhatsApp.')
    const [text, setText] = useState('');

    const handleClose = () => {
        setShow(false);
    }

    const toggleNameOpen = () => {
        setActiveInputName(true);
        setText(text + user.name)
    }
    const toggleNameClose = () => {
        setActiveInputName(false);
        user.name = text;
        setText("");
    }

    const toggleMessageOpen = () => {
        setActiveInputMessage(true);
        setText(text + message)
    }
    const toggleMessageClose = () => {
        setActiveInputMessage(false);
        setMessage(text);
        setText("");
    }

    return (
        <div className="profileUser" style={{left: show ? 0 : -415}} >
            <div className="profileUser--head">
                <div onClick={handleClose} className="profileUser--backbutton">
                    <ArrowBackIcon style={{color:'#FFF'}} />
                </div>
                <div className="profileUser--headTitle">Perfil</div>    
            </div>
            
            <div className="profileUser--body" >
                <div className="profileUser--avatar">
                    <img 
                        className="profileUser--avatarImage" 
                        src={user.avatar} alt="" 
                        style={{transform: show ? 'scale(1)' : 'scale(0)'}} 
                    />
                </div>
                <div 
                    className="profileUser--infoArea" 
                    style={
                        {opacity: show ? 1 : 0, top: show ? 0 : -30}
                    }
                >
                    <div className="profileUser--nameArea">
                        <div className="profileUser--nameArea--title">Seu nome</div>
                        <div 
                            className="profileUser--nameArea--toggleName"
                            style={{borderBottom: activeInputName ? '2px solid #00BFA5' : '2px solid transparent'}}    
                        >   
                            {activeInputName === false &&
                                    <div className="profileUser--nameArea--name">{user.name}</div>
                            }
                            {activeInputName === true &&
                                    <input  
                                        className="profileUser--input" 
                                        type="text"
                                        maxLength="25"
                                        value={text}
                                        onChange={e => setText(e.target.value)}
                                        autoFocus={true}
                                    />

                            }
                            <div className="profileUser--icons">
                                <div 
                                    onClick={toggleNameOpen}
                                    className="profileUser--icon"
                                    style={
                                        {transform: activeInputName ? 'scale(0)' : 'scale(1)', 
                                        opacity: activeInputName ? 0 : 1                         
                                    }}
                                >
                                    <EditIcon style={{color: '#919191'}} />
                                </div>
                                <div 
                                    onClick= {toggleNameClose} 
                                    className="profileUser--icon" 
                                    style={
                                        {transform: activeInputName ? 'scale(1)' : 'scale(0)', 
                                        opacity: activeInputName ? 1 : 0   
                                    }}
                                >
                                    <DoneIcon style={{color: '#919191'}} />
                                </div>
                            </div>
                    </div>
                    </div>      
                    
                    <div className="profileUser--warning">Esse não é seu nome de usuário e nem seu PIN. Esse nome será visível para seus contatos do WhatsApp.</div>
                    
                    <div className="profileUser--messageArea">
                        <div className="profileUser--messageArea--title">Recado</div>

                        <div 
                            className="profileUser--messageArea--toggleMessage"
                            style={{borderBottom: activeInputMessage ? '2px solid #00BFA5' : '2px solid transparent'}}  
                        >
                            {activeInputMessage === false &&
                                <div className="profileUser--messageArea--message">{message}</div>
                            }
                            {activeInputMessage === true &&
                                <input
                                    className="profileUser--input"
                                    type="text"
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    autoFocus={true}
                                />
                            }
                            <div className="profileUser--icons">
                                <div 
                                    onClick={toggleMessageOpen} 
                                    className="profileUser--icon"
                                    style={
                                        {transform: activeInputMessage ? 'scale(0)' : 'scale(1)', 
                                        opacity: activeInputMessage ? 0 : 1                         
                                    }}
                                >
                                    <EditIcon style={{color: '#919191'}} />
                                </div> 
                                <div 
                                    onClick={toggleMessageClose} 
                                    className="profileUser--icon" 
                                    style={
                                        {transform: activeInputMessage ? 'scale(1)' : 'scale(0)', 
                                        opacity: activeInputMessage ? 1 : 0   
                                    }}
                                >
                                    <DoneIcon style={{color: '#919191'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

        </div>
    )
}