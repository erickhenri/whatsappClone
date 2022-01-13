import React from 'react';
import './ContactsDetails.css';

import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BlockIcon from '@mui/icons-material/Block';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';

export default () => {
    return (
        <div className="contactsDetails">

            <div className="contactsDetails--head">
                <div className="contactsDetails--closebutton">
                    <CloseIcon style={{color: '#51585C'}} />
                </div>
                <div className="contactsDetails--headtitle">Dados do contato</div>    
            </div>  

            <div className="contactsDetails--body">
                <div className="contactsDetails--personaldata">
                    <img className="contactsDetails--avatar" src="https://avatarfiles.alphacoders.com/214/thumb-214539.jpg" alt="" />
                    <div className="contactsDetails--name">Francisco</div>
                    <div className="contactsDetails--number">99 991234567</div>
                </div>

                <div className="contactsDetails--message">Recado</div>

                <div className="contactsDetails--archives">
                    <div className="contactsDetails--archivesname">Arquivos de mídia, links e docs</div>
                    <div className="contactsDetails--archivesamount">0</div>
                    <div className="contactsDetails--icon">
                        <ArrowForwardIosIcon style={{color: 'rgba(0,0,0,0.45)'}}/>
                    </div>
                </div>

                <div className="contactsDetails--favoritemessages">
                    <div className="contactsDetails--icon">
                        <StarIcon style={{color: 'rgba(0,0,0,0.45)'}} />
                    </div>
                    <div className="contactsDetails--favoritemessagesname">Mensagens favoritas</div>
                    <div className="contactsDetails--icon">
                        <ArrowForwardIosIcon style={{color: 'rgba(0,0,0,0.45)'}} />
                    </div>
                </div>

                <div className="contactsDetails--messageoptions">
                    <div className="contactsDetails--silencenotifications">
                        <div className="contactsDetails--icon">
                            <NotificationsIcon style={{color: 'rgba(0,0,0,0.45)'}} />    
                        </div>
                        <div className="contactsDetails--silencenotificationsname">Silenciar notificações</div>
                    </div>
                    <div className="contactsDetails--temporarymessages">
                        <div className="contactsDetails--icon">
                            <WatchLaterIcon style={{color: 'rgba(0,0,0,0.45)'}} />    
                        </div>
                        <div className="contactsDetails--temporarymessages">Mensagens temporárias</div>
                        <div className="contactsDetails--icon">
                            <ArrowForwardIosIcon style={{color: 'rgba(0,0,0,0.45)'}} />
                        </div>
                    </div>
                </div>

                <div className="contactsDetails--useraccusations">
                    <div className="contactsDetails--reportuser">
                        <div className="contactsDetails--icon">
                            <BlockIcon style={{color: '#D70000'}} />
                        </div>
                        <div className="contactsDetails--reportusername">Bloquear Francisco</div>                    </div>
                    <div className="contactsDetails--blockuser">
                        <div className="contactsDetails--icon">
                            <ThumbDownIcon style={{color: '#D70000'}} />
                        </div>
                        <div className="contactsDetails--blockusername">Denunciar Francisco</div>
                    </div>
                </div>
                <div className="contactsDetails--deletemessage">
                    <div className="contactsDetails--icon">
                        <DeleteIcon style={{color: '#D70000'}} />
                    </div>
                    <div className="contactsDetails--deletemessagename">Apagar conversa</div>

                </div>
            </div>
        </div>
    )
}
