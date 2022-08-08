import { useRef, useState } from "react";

const Input = (props) => {
  const enteredTextRef = useRef();

  const [error, setError] = useState(null);
  const errorHandler = () => setError(null);

  const onSubmitHandler = (e) => {
    const enteredText = enteredTextRef.current.value;

    if (enteredText.trim().length === 0) {
      e.preventDefault();

      setError(1);

      return;
    } else {
      e.preventDefault();

      props.sendMessage(enteredText);

      enteredTextRef.current.value = "";
    }
  };

  return (
    <div>
      <div>
        <h3>{error && <div>PORUKA NE MOŽE BITI PRAZNA!!!</div>}</h3>

        <form onSubmit={onSubmitHandler}>
          <input
            style={{
              // Promjena
              borderColor: error ? "red" : "#00645b",
              background: error ? "salmon" : "transparent",
            }}
            type="text"
            placeholder="Napišite poruku i stisnite Enter"
            autoFocus={true}
            ref={enteredTextRef}
            onChange={errorHandler}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
