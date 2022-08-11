import HeaderCard from "../../utils/HeaderCard";

function LoggedInHeader(props) {
  const name = props.name;

  return (
    <HeaderCard>
      Hello {name.charAt(0).toUpperCase() + name.slice(1)}
      <p>Thank you for using our application</p>
    </HeaderCard>
  );
}

export default LoggedInHeader;
