// import Message from "./Message";

import "./MessageList.css";

const MessageList = ({ messages, currentMember }) => {
  const renderMessages = (message) => {
    const { data, id, member } = message;

    const className =
      member?.clientData.name === currentMember?.name &&
      member?.clientData.avatar === currentMember?.avatar &&
      member?.clientData.color === currentMember?.color
        ? "Messages-message currentMember"
        : "Messages-message";

    return (
      <li className={className} key={id}>
        <span className="emoji">{member?.clientData.avatar}</span>
        <div className="Message-content">
          <div
            className="username"
            style={{
              color: member?.clientData.color,
            }}
          >
            {member?.clientData.name}
          </div>
          <div className="text">{data}</div>
        </div>
      </li>
    );
  };

  return (
    <ul className="Messages-list">
      {messages.map((message) => renderMessages(message))}
    </ul>
  );
};

export default MessageList;
