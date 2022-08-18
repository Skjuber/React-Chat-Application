import "./MessageList.css";
import Message from "./Message";

const MessageList = (props) => {
  //  const currentMember = props.currentMember;
  //const messages = props.messages; Ovo je isto ko ovo drugo

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
