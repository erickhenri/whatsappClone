import React from 'react';
import './ChatListItem.css';

export default ({onClick, active, data}) => {
    return (
        <div 
            className={`chatListItem ${active? 'active':''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.image} />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                        <div className="chatListItem--name">{data.title}</div>
                        <div className="chatListItem--date">19:42</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Bixo me diga, não da vontade de matar o eriki as vezes?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}