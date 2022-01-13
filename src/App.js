import React, {useState, useEffect} from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import ContactsDetails from './components/ContactsDetails';
import ProfileUser from './components/ProfileUser';
import Login from './components/Login'

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

export default () => {

    const [chatlist, setChatlist] = useState([
        {chatId: 1, title: 'Gaybriel Vulgo Anao Bombado', image: 'https://avatarfiles.alphacoders.com/214/thumb-214539.jpg'},
        {chatId: 2, title: 'Daonel - frotografo editor', image: 'https://avatarfiles.alphacoders.com/214/thumb-214539.jpg'},
        {chatId: 3, title: 'Everaldim', image: 'https://avatarfiles.alphacoders.com/214/thumb-214539.jpg'},
    ]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState(null);
    const [showNewChat, setShowNewChat] = useState(false);
    const [showProfileUser, setShowProfileUser] = useState(false);
    const handleNewChatOpen = () => {
        setShowNewChat(true);
    }
    const handleProfileUserOpen = () => {
        setShowProfileUser(true);
    }

    const handleLoginData = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        };
        setUser(newUser);
    }

    if(user === null) {
        return (<Login onReceive={handleLoginData} />);
    }

    return (
        <div className="app-window">
            <div className="sidebar">
                <NewChat 
                    chatlist={chatlist}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                <ProfileUser 
                    user={user}
                    show={showProfileUser}
                    setShow={setShowProfileUser}
                />
                <header>
                    <img onClick={handleProfileUserOpen} className="header--avatar" src={user.avatar} alt="avatar image"></img>
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color: '#919191'}} />
                        </div>
                        <div onClick={handleNewChatOpen} className="header--btn">
                            <ChatIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn">
                            <MoreVertIcon style={{color: '#919191'}} />
                        </div>
                    </div>
                </header>

                <div className="search">
                    <div className="search--input">
                    <SearchIcon fontSize="small" style={{color: '#919191'}} />
                    <input type="search" placeholder="Pesquisar ou começar uma nova conversa" />
                    </div>
                </div>

                <div className="chatlist">
                    {chatlist.map((item, key) =>(
                        <ChatListItem 
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatlist[key].chatId}
                            onClick={()=>setActiveChat(chatlist[key])}
                        />
                    ))}
                </div>

            </div>

            <div className="contentarea">
                {activeChat.chatId !== undefined &&
                    <ChatWindow 
                    user={user}
                    />
                }
                {activeChat.chatId === undefined &&
                    <ChatIntro />
                }
            </div>
            {/* <ContactsDetails /> */}

        </div>
  )
}