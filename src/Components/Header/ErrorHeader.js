import HeaderCard from "../utils/HeaderCard";
function ErrorHeader(props) {
  const caughtError = props;
  return <HeaderCard> THERE WAS AN ERROR WHILE LOADING AN APP</HeaderCard>;
}

export default ErrorHeader;
