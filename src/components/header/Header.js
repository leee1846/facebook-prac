import React from "react";
import "./Header.css";

//icons
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//material-ui/core
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./../../store/StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png'
          alt=''
        />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      <div className='header__middle'>
        <div className='header__option header__option--active'>
          <HomeIcon />
        </div>
        <div className='header__option'>
          <FlagIcon />
        </div>
        <div className='header__option'>
          <SubscriptionsIcon />
        </div>
        <div className='header__option'>
          <StorefrontIcon />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
