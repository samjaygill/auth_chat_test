import React, { useContext } from "react";
import Cam from "../img/cam.jpeg";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chaticons">
          <img src={Cam} alt="" className="cam" />
          <img src={Add} alt="" className="add" />
          <img src={More} alt="" className="more" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
