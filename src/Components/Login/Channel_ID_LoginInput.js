const Channel_ID_LoginInput = (props) => {
  const channel_ID_InputChangeHandler = (event) => {
    props.onChannel_ID_Login(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter your channelID"
      value={props.typed}
      onChange={channel_ID_InputChangeHandler}
    />
  );
};

export default Channel_ID_LoginInput;
