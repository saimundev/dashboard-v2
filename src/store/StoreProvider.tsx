"use client";

import { Provider } from "react-redux";
import { store } from "./store";
type ChildrenProps = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: ChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
