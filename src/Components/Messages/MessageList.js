import "./MessageList.css";
import Message from "./Message";

const MessageList = (props) => {
  const { currentMember, messages } = props;

  return (
    <ul className="Messages-list">
      {messages.map((item) => (
        <Message
          data={item.data}
          id={item.id}
          member={item.member}
          currentMember={currentMember}
        ></Message>
      ))}
    </ul>
  );
};

export default MessageList;
