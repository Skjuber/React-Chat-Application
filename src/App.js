import "./App.css";
import { useState } from "react";
import Input from "./Components/Input";
import MessageList from "./Components/MessageList";
import Header from "./Components/Header";

function randomName() {
  const adjectives = [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "broken",
    "cold",
    "damp",
    "falling",
    "frosty",
    "green",
    "long",
    "late",
    "lingering",
    "bold",
    "little",
    "morning",
    "muddy",
    "old",
    "red",
    "rough",
    "still",
    "small",
    "sparkling",
    "throbbing",
    "shy",
    "wandering",
    "withered",
    "wild",
    "black",
    "young",
    "holy",
    "solitary",
    "fragrant",
    "aged",
    "snowy",
    "proud",
    "floral",
    "restless",
    "divine",
    "polished",
    "ancient",
    "purple",
    "lively",
    "nameless",
  ];
  const nouns = [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
    "sun",
    "glade",
    "bird",
    "brook",
    "butterfly",
    "bush",
    "dew",
    "dust",
    "field",
    "fire",
    "flower",
    "firefly",
    "feather",
    "grass",
    "haze",
    "mountain",
    "night",
    "pond",
    "darkness",
    "snowflake",
    "silence",
    "sound",
    "sky",
    "shape",
    "surf",
    "thunder",
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function generateDarkColorHex() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}
const currentMember = {
  name: randomName().toUpperCase(),
  color: generateDarkColorHex(),
};

const drone = new window.Scaledrone("F3TaecOklILJ6gfx", {
  data: {
    name: currentMember.name,
    color: currentMember.color,
  },
});

const droneOnHanlder = () => drone.on("open");
droneOnHanlder();

const room = drone.subscribe("observable-room");

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessageHandler = (poruka) => {
    drone.publish({
      room: "observable-room",
      message: poruka,
    });
  };

  room.on("data", (data, member) => {
    //"Data" je komanda koju moramo staviti
    // debugger;
    console.log("triggers");
    const messageList = messages;

    messageList.push({ data: data, id: member.id, member: member });
    setMessages([...messageList]);
  });

  return (
    <div>
      <div className="App">
        <Header></Header>

        <MessageList
          messages={messages}
          currentMember={currentMember}
        ></MessageList>
        <Input onSendMessage={sendMessageHandler}></Input>
      </div>
    </div>
  );
};

export default App;
