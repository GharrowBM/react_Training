import useCounter from "../hooks/use-counter";
import Card from "./Card"

function BackwardCounter(props) {
  const number = useCounter(undefined, -1)

  return (
    <Card>
      <p>{number}</p>
    </Card>
  );
}

export default BackwardCounter