import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/14021938/pexels-photo-14021938.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Chris</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/18238182/pexels-photo-18238182/free-photo-of-young-woman-sitting-in-an-armchair.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Alison</span>
          <p>Hello</p>
        </div>
      </div><div className="userChat">
        <img
          src="https://images.pexels.com/photos/18596173/pexels-photo-18596173/free-photo-of-beautiful-blonde-woman-sitting-in-front-of-the-plants.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Claire</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
