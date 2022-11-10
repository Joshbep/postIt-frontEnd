import './leftBar.css';
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School
} from '@material-ui/icons'
import React from 'react'


function Leftbar() {
  return (
    <div className="left">
      <div className="wrapper">
        <ul className="list">
          <li className="listItem">
            <RssFeed className="icon"/>
            <span className="listItemText">Feed</span>
          </li>
          <li className="listItem">
            <Chat className="icon"/>
            <span className="listItemText">Chats</span>
          </li>
          <li className="listItem">
            <PlayCircleFilledOutlined className="icon"/>
            <span className="listItemText">Videos</span>
          </li>
          <li className="listItem">
            <Group className="icon"/>
            <span className="listItemText">Groups</span>
          </li>
          <li className="listItem">
            <Bookmark className="icon"/>
            <span className="listItemText">Bookmarks</span>
          </li>
          <li className="listItem">
            <HelpOutline className="icon"/>
            <span className="listItemText">Questions</span>
          </li>
          <li className="listItem">
            <WorkOutline className="icon"/>
            <span className="listItemText">Jobs</span>
          </li>
          <li className="listItem">
            <Event className="icon"/>
            <span className="listItemText">Events</span>
          </li>
          <li className="listItem">
            <School className="icon"/>
            <span className="listItemText">School</span>
          </li>
        </ul>
        <button className="leftButton"> Show More</button>
        <hr className="leftHr"/>
        <ul className="leftFriendList">
          <li className="friend">
            <img className="leftFriendImage" src="" alt=""/>
            <span className="leftFriendName">Josh Pasour</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;