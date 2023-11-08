import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user"/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/14021938/pexels-photo-14021938.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <div className="userChatInfo">
            <span>Chris</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
