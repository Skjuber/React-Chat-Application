import "./App.css";
import React, { useState, Fragment } from "react";
import Input from "./Components/Input";
import MessageList from "./Components/Messages/MessageList";
import InitialHeader from "./Components/Header/InitialHeader";
import Login from "./Components/Login";
import { generateDarkColorHex } from "./utils/Colors";
import LoggedInHeader from "./Components/Header/LoggedInHeader";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentMember, setCurrentMember] = useState({});
  const [drone, setDrone] = useState(null);

  const LoggedInHandler = (username, emoji) => {
    const member = {
      name: username,
      color: generateDarkColorHex(),
      avatar: emoji,
    };
    const drone = new window.Scaledrone("A0UwEce0izDLuIpl", {
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
      <div className="App">
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

export default App;
