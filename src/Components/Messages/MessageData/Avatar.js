import "./Avatar.css";
const Avatar = (props) => {
  const { avatar } = props;

  return <span className="emoji">{avatar}</span>;
};

export default Avatar;
