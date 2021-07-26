import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const[inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon/>
            <Link to="/">
            <img 
               className="header__logo"
               src="data:image/png;base64,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" 
               alt=""/>
            </Link>
            </div>
            <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"/>
            </Link>
            
            </div>
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar
              alt="Shruti Semwal"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFos69rUlhSuA/profile-displayphoto-shrink_400_400/0/1623903471325?e=1632355200&v=beta&t=eiOqRfoxdZ06W8ycgEGrTOPVZ2iw_FytaBQLKlmHX7U"
             />
            </div>

        </div>
    )
}

export default Header;
