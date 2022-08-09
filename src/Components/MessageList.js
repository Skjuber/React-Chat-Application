import "./MessageList.css";

const MessageList = ({ messages, currentMember }) => {
  const renderMessages = (message) => {
    const { data, id, member } = message;
    console.log(message);
    //Odakle dohvacamo data,id,member?

    const className =
      member?.clientData.name === currentMember.name
        ? "Messages-message currentMember"
        : "Messages-message";

    // Kako se točno poruka renderira ode?
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

export default MessageList;
