import { useState, useEffect } from "react";

const useCounter = (baseValue = 0, modifier = 1) => {
  const [number, setNumber] = useState(baseValue);
  useEffect(() => {
    const identifier = setInterval(() => {
      setNumber((prev) => prev + modifier);
    }, 1000);

    return () => {
      clearInterval(identifier);
    };
  });

  return number
}

export default useCounter