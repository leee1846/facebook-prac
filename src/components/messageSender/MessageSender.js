import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
//icons
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./../../store/StateProvider";

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //some db stuff

    //reset input
    setInput("");
    setImageUrl("");
  };

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL} />
        <form action=''>
          <input
            className='messageSender__input'
            placeholder={`What's on your mind${user.displayName}`}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <input
            placeholder='image URL (Optional)'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden submit
          </button>
        </form>
      </div>

      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
