import "./styles.css";
import React, { useState } from "react";
import MessageDisplay from "./components/MessageDisplay";
import MessageForm from "./components/MessageForm";

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  const youveGotMail = (newMessage) => {
    setCurrentMsg(newMessage);
  };
  return (
    <>
                  
      <MessageForm onNewMessage={youveGotMail} />
                  
      <MessageDisplay message={currentMsg} />
              
    </>
  );
}

export default App;
