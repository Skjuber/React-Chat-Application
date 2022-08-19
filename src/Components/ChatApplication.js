import "./ChatApplication.css";
import React, { useState, Fragment } from "react";
import Input from "./Input/Input";
import MessageList from "./Messages/MessageList";
import InitialHeader from "./Header/InitialHeader";
import Login from "./Login/Login";
import { generateDarkColorHex } from "./utils/Colors";
import LoggedInHeader from "./Header/LoggedInHeader";

const ChatApplication = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentMember, setCurrentMember] = useState({});
  const [drone, setDrone] = useState(null);

  const LoggedInHandler = (username, emoji) => {
    const member = {
      name: username,
      color: generateDarkColorHex(),
      avatar: emoji,
    };

    const drone = new window.Scaledrone("hDUiK32SFbij9uya", {
      data: member,
    });

    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
    });

    const room = drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      const messageList = messages;

      messageList.push({ data: data, id: member?.id, member: member });
      // debugger;
      setMessages([...messageList]);
      // debugger;
    });

    setLoggedIn(true);
    setCurrentMember(member);
    setDrone(drone);
  };

  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    //debugger;
    drone.publish({
      room: "observable-room",
      message: message,
    });
  };

  return (
    <Fragment>
      <div className="ChatApplication ">
        {!loggedIn && <InitialHeader></InitialHeader>}
        {loggedIn && (
          <LoggedInHeader name={currentMember.name}></LoggedInHeader>
        )}

        {!loggedIn && <Login onLogin={LoggedInHandler} />}
        <MessageList
          messages={messages}
          currentMember={currentMember}
        ></MessageList>

        {loggedIn && <Input sendMessage={sendMessage} />}
      </div>
    </Fragment>
  );
};

export default ChatApplication;
