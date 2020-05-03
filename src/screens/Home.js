import React from "react";
import generateToken from "../gameLogic/generateToken";

import Button from "../components/Button";
import Contents from "../components/Contents";

import { database } from "../firebase";

const createGame = () => {
  const newGame = {
    p1_token: generateToken(4),
    p2_token: generateToken(4)
  };

  const game_id = generateToken(6);

  const game = database.ref("games/" + game_id);

  game.set(newGame).then(
    () => {
      window.location = `/${game_id}?p=${newGame.p1_token}`;
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
