import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';
import MessageItem from './MessageItem'


import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default ({user}) => {
     
    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }


    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 1234, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 1234, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 1234, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 1234, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 1234, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 1234, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 1234, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 123, body:'bla bla bla'},
        {author: 1234, body:'bla bla bla'},
    ]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji)
    };

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    };

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript );
            }

            recognition.start();
        }
    }

    const handleSendClick = () => {
        
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://avatarfiles.alphacoders.com/214/thumb-214539.jpg" alt="avatar image" />
                    <div className="chatWindow--name">Gaybriel</div>
                </div>

                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#51585C'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#51585C'}} />
                    </div>
                </div>
            </div>

                <div ref={body} className="chatWindow--body">
            <div className="chatWindow--bodybg">
                    {list.map((item, key)=>(
                        <MessageItem
                        key={key}
                        data={item}
                        user={user}
                        />
                        ))}
                </div>
            </div>

            <div className="chatWindow--emojiarea"
            style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div 
                        className="chatWindow--btn"
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? '40px' : '0px'}}
                    >
                        <CloseIcon style={{color: '#51585C'}} />
                    </div>
                    <div   
                        className="chatWindow--btn"
                        onClick={handleOpenEmoji}
                    >
                        <SentimentVerySatisfiedIcon style={{color: emojiOpen ? '#009688' : '#51585C'}} />
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input" 
                        type="text" 
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow--btn">
                            <MicIcon style={{color: listening ? '#126ECE' : '#51585C'}} />
                        </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow--btn">
                            <SendIcon style={{color: '#51585C'}} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}