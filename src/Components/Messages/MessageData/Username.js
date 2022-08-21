import "./Username.css";
const Username = (props) => {
  const { Color, Username } = props;

  return (
    <div
      className="username"
      style={{
        color: Color,
      }}
    >
      {Username}
    </div>
  );
};

export default Username;
