import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [state, setState] = useState(0);
  const recieveDataFromChild = (data) => {
    setState(state + 1);
    console.log(data);
  };
  return (
    <div className="App">
      <h1>{state}</h1>
      <Child sendDatatoPArent={recieveDataFromChild} />
    </div>
  );
}
const Child = ({ sendDatatoPArent }) => {
  const setData = () => {
    const data = "I got Updated";
    sendDatatoPArent(data);
  };
  return <button onClick={setData}>Click me</button>;
};
