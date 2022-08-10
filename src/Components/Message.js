/*import "./MessageList.css";

const Message = (props) => {
  const renderMessages = (message) => {
    const { data, id, member } = message;

    const className =
      props.member.clientData.name === currentMember.name &&
      prop.member.clientData.avatar === currentMember.avatar &&
      member.clientData.color === currentMember.color
        ? "Messages-message currentMember"
        : "Messages-message";

    return (
      <li className={className} key={id}>
        <span className="emoji">{member.clientData.avatar}</span>
        <div className="Message-content">
          <div
            className="username"
            style={{
              color: member.clientData.color,
            }}
          >
            {member.clientData.name}
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

export default Message;

*/
