import React from "react";
import "./App.scss";
import GameContainer from "../Game/GameContainer";

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <GameContainer />
    </div>
  );
};

export default App;
