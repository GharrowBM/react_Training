import useCounter from "../hooks/use-counter";
import Card from "./Card";

function ForwardCounter(props) {
  const number = useCounter(props.number)

  return (
    <Card>
      <p>{number}</p>
    </Card>
  );
}

export default ForwardCounter;
