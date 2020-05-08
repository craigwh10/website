import React from "react";
import { FilterChoiceContext } from "./ChoiceContext";

export const useChoice = (): FilterChoiceContext => {
  const [filterChoice, setFilterChoice] = React.useState("");

  const setCurrentFilterChoice = (currentChoice: string): void =>
    setFilterChoice(currentChoice);

  return {
    filterChoice,
    setFilterChoice,
  };
};
