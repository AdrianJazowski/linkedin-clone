/** @format */

import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1498962342534-ee08a0bb1d45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Kto wyświetlił twój profil</p>
          <p className="sidebar__statNumber">999</p>
        </div>
        <div className="sidebar__stat">
          <p>Kontakty</p>
          <p className="sidebar__statNumber">999</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Niedawne</p>
        {recentItem("Gry")}
        {recentItem("Ekonomia")}
        {recentItem("Programowanie")}
        {recentItem("Przypadkowy tytuł")}
        {recentItem("Ten też")}
        {recentItem("Logistyka")}
      </div>
    </div>
  );
};

export default Sidebar;
