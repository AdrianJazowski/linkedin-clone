/** @format */

import React from "react";
import "./Header.css";
import HeaderOption from "../headerOption/HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase/firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1615629927~hmac=b4a7f2a28c8eec91f69f79fd71fa54f5"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Główna" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Moja sięc" />
        <HeaderOption Icon={BusinessCenterIcon} title="Oferty pracy" />
        <HeaderOption Icon={ChatIcon} title="Wiadomości" />
        <HeaderOption Icon={NotificationsIcon} title="Powiadomienia" />
        <HeaderOption avatar={true} title="Ja" onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
