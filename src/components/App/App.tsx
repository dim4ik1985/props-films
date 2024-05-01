import "./App.css";
import { Stars } from "../Starts";
import { useState } from "react";
export const App = () => {
  const [count] = useState(0);
  return (
    <>
      <div className={"container"}>
        <Stars count={count} />
      </div>
    </>
  );
};
