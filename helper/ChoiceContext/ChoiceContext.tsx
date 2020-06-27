import React from "react";

export interface FilterChoiceContext {
  filterChoice: string;
  setFilterChoice: (CurrentFilterChoice: string) => void;
}

export const FILTER_CHOICE_DEFAULT_VALUE = {
  filterChoice: "",
  setFilterChoice: () => {},
};

export const filterContext = React.createContext<FilterChoiceContext>(
  FILTER_CHOICE_DEFAULT_VALUE
);
