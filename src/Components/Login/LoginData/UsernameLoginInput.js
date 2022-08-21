const UsernameLoginInput = (props) => {
  const usernameInputChangeHandler = (event) => {
    props.onUsernameLogin(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter your username"
      value={props.typed}
      onChange={usernameInputChangeHandler}
    />
  );
};

export default UsernameLoginInput;
