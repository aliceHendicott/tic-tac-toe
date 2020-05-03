import React from "react";
import "./App.css";
import GameHeader from "./components/GameHeader";

import { HashRouter, Route } from "react-router-dom";
import GameBoard from "./screens/GameBoard";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <GameHeader />
      <HashRouter basename="/tic-tac-toe">
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/:token" component={GameBoard} />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
