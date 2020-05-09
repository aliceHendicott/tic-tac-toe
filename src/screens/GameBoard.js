import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Contents from "../components/Contents";
import Box from "../components/Box";
import GridLines from "../components/Gridlines";

import getPlayedSVGToDisplay from "../gameLogic/getPlayedSVGToDisplay";
import convertPlayerTokenToNumber from "../gameLogic/convertPlayerTokenToNumber";

import { database } from "../firebase";

const Grid = styled(Box)`
  position: absolute;
  display: flex;
  width: 390px;
  height: 390px;
  flex-wrap: wrap;
`;

const GridContainer = styled.div`
  position: relative;
  display: block;
  width: 490px;
  height: 490px;
`;

const GameInfoContainer = styled.div`
  padding: 30px;
`;

const GridBox = styled.div`
  flex: 1 0 33%;
  z-index: 10;
`;

const CurrentPlayerDisplay = styled.div`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

const GameBoard = () => {
  const gameId = window.location.hash.replace(/^#\//, "").replace(/\?.*/, "");
  const gamesRef = database.ref("games");
  const playerId = window.location.hash.replace(/#\/.*=/, "");

  const [data, setData] = useState(undefined);
  const [playerTokens, setPlayerTokens] = useState(undefined);
  const [currentGameState, setCurrentGameState] = useState(undefined);
  const [currentPlayer, setCurrentPlayer] = useState(undefined);

  const indexAvailable = boxIndex => {
    return currentGameState[boxIndex] === 0 ? true : false;
  };

  const handleClick = boxIndex => {
    console.log("clicking");
    if (indexAvailable(boxIndex)) {
      const updatedGameState = [...currentGameState];
      if (currentPlayer === playerId) {
        const playerNum = convertPlayerTokenToNumber(
          currentPlayer,
          playerTokens
        );
        updatedGameState[boxIndex] = playerNum;
        const nextPlayer = playerNum === 1 ? playerTokens[1] : playerTokens[0];
        gamesRef.child(gameId).update({
          game_state: updatedGameState,
          current_player: nextPlayer
        });
      }
    }
  };

  useEffect(() => {
    gamesRef.once("value").then(snapshot => {
      setData(snapshot.child(gameId).val());
    });
  }, [gameId, gamesRef]);

  useEffect(() => {
    data && setCurrentGameState(data.game_state);
    data && setCurrentPlayer(data.current_player);
    data && setPlayerTokens([data.p1_token, data.p2_token]);
  }, [data]);

  return (
    <Contents>
      <GridContainer>
        <Grid>
          {currentGameState &&
            currentGameState.map((value, index) => (
              <GridBox id={"box-" + index} onClick={() => handleClick(index)}>
                {getPlayedSVGToDisplay(value)}
              </GridBox>
            ))}
        </Grid>
        <GridLines />
      </GridContainer>
      <GameInfoContainer>
        {currentPlayer !== undefined && (
          <CurrentPlayerDisplay>
            Current Player:{" "}
            {convertPlayerTokenToNumber(currentPlayer, playerTokens)}
          </CurrentPlayerDisplay>
        )}
        {playerTokens !== undefined && (
          <CurrentPlayerDisplay>
            You are player {convertPlayerTokenToNumber(playerId, playerTokens)}
          </CurrentPlayerDisplay>
        )}
        {playerTokens !== undefined && (
          <CurrentPlayerDisplay>
            Player 2 token is {playerTokens[1]}
          </CurrentPlayerDisplay>
        )}
      </GameInfoContainer>
    </Contents>
  );
};

export default GameBoard;
