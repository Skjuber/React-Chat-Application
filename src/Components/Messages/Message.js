import "./Message.css";

const Message = (props) => {
  const { data, id, member, currentMember } = props;

  const deliveredMessage =
    member?.clientData.name === currentMember?.name &&
    member?.clientData.avatar === currentMember?.avatar &&
    member?.clientData.color === currentMember?.color
      ? "Messages-message currentMember"
      : "Messages-message";

  return (
    <li className={deliveredMessage} key={id}>
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

export default Message;
