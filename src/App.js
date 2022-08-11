import "./App.css";
import { useState } from "react";
import Input from "./Components/Input";
import MessageList from "./Components/MessageList";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { generateDarkColorHex } from "./utils/Colors";

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
    const drone = new window.Scaledrone("pGbdiqBZtoOeKIow", {
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
    <div>
      <div className="App">
        <Header></Header>
        {!loggedIn && <Login onLogin={LoggedInHandler} />}
        <MessageList
          messages={messages}
          currentMember={currentMember}
        ></MessageList>

        {loggedIn && <Input sendMessage={sendMessage} />}
      </div>
    </div>
  );
};

export default App;
