import { useState } from "react";

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  function toggleValue(value) {
    setValue((prevState) => typeof value === "boolean" ? value : !prevState);
  }

  return [value, toggleValue]
}