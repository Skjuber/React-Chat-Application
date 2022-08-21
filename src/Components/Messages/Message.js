import "./Message.css";
import Avatar from "./MessageData/Avatar";
import Username from "./MessageData/Username";
import Text from "./MessageData/Text";

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
      <Avatar avatar={member?.clientData.avatar}></Avatar>
      <div className="Message-content">
        <Username
          Username={member?.clientData.name}
          Color={member?.clientData.color}
        ></Username>

        <Text text={data}></Text>
      </div>
    </li>
  );
};

export default Message;
