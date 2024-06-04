import { useState, useEffect } from "react";
import "./styles.css";

//Debouncing: No matter how many times the user fires the event, the connected function will only run once the user stops firing the event

function useDebouncedValue(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default function Debounce() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebouncedValue(inputValue, 2000);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
}
