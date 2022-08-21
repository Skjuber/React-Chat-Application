import "./Avatar.css";
const Avatar = (props) => {
  const avatar = props.avatar;

  return <span className="emoji">{avatar}</span>;
};

export default Avatar;
