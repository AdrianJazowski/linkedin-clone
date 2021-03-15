/** @format */

import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import InputOption from "../InputOption/InputOption";
import SendIcon from "@material-ui/icons/Send";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="grey" />
        <InputOption Icon={ChatIcon} title="Comments" color="grey" />
        <InputOption Icon={ShareIcon} title="Share" color="grey" />
        <InputOption Icon={SendIcon} title="Send" color="grey" />
      </div>
    </div>
  );
});

export default Post;
