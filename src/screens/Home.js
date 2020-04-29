import React from "react";
import generateToken from "../gameLogic/generateToken";

import Button from "../components/Button";
import Contents from "../components/Contents";

import { database } from "../firebase";

const createGame = () => {
  const newGame = {
    p1_token: generateToken(),
    p2_token: generateToken()
  };

  const game = database.ref("games").push();

  game.set(newGame).then(
    () => {
      window.location = `/${newGame.p1_token}`;
    },
    err => {
      throw err;
    }
  );
};

const Home = () => (
  <Contents>
    <Button onClick={createGame}>Start a new game</Button>
  </Contents>
);

export default Home;
