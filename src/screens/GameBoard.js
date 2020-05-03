import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Contents from "../components/Contents";
import Box from "../components/Box";

import { database } from "../firebase";

const GridContainer = styled(Box)`
  width: 390px;
  height: 390px;
`;

const GameInfoContainer = styled.div`
  padding: 30px;
`;

const GridBox = styled.div`
  display: inline-block;
  width: 130px;
  height: 130px;
`;

const Line = styled.line`
  stroke: #d282a6;
  stroke-width: 8px;
  stroke-linecap: round;
`;

const Circle = styled.circle`
  stroke: #d282a6;
  stroke-width: 8px;
  fill: none;
`;

const EntrySvg = styled.svg`
  width: 80px;
  height: 80px;
  margin: 25px;
`;

const CurrentPlayerDisplay = styled.div`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

const getSVGToDisplay = value => {
  if (value === 1) {
    return (
      <EntrySvg>
        <Line x1="4" x2="76" y1="4" y2="76" />
        <Line x1="76" x2="4" y1="4" y2="76" />
      </EntrySvg>
    );
  } else if (value === 2) {
    return (
      <EntrySvg>
        <Circle cx="40" cy="40" r="36" />
      </EntrySvg>
    );
  } else return "";
};

const GameBoard = () => {
  const gameId = window.location.pathname.replace(/^\//, "");
  const gamesRef = database.ref("games");
  const playerId = window.location.search.replace(/\?p=/, "");

  const [data, setData] = useState(undefined);
  const [playerTokens, setPlayerTokens] = useState(undefined);
  const [currentGameState, setCurrentGameState] = useState(undefined);
  const [currentPlayer, setCurrentPlayer] = useState(undefined);

  const convertPlayerTokenToNumber = token => {
    if (playerTokens[0] === token) {
      return 1;
    } else {
      return 2;
    }
  };

  const handleClick = boxIndex => {
    const updatedGameState = [...currentGameState];
    if (currentPlayer === playerId) {
      const playerNum = convertPlayerTokenToNumber(currentPlayer);
      updatedGameState[boxIndex] = playerNum;
      const nextPlayer = playerNum === 1 ? playerTokens[1] : playerTokens[0];
      gamesRef.child(gameId).update({
        game_state: updatedGameState,
        current_player: nextPlayer
      });
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
        {currentGameState &&
          currentGameState.map((value, index) => (
            <GridBox id={"box-" + index} onClick={() => handleClick(index)}>
              {getSVGToDisplay(value)}
            </GridBox>
          ))}
      </GridContainer>
      <GameInfoContainer>
        {currentPlayer !== undefined && (
          <CurrentPlayerDisplay>
            Current Player: {convertPlayerTokenToNumber(currentPlayer)}
          </CurrentPlayerDisplay>
        )}
        {playerTokens !== undefined && (
          <CurrentPlayerDisplay>
            You are player {convertPlayerTokenToNumber(playerId)}
          </CurrentPlayerDisplay>
        )}
      </GameInfoContainer>
    </Contents>
  );
};

export default GameBoard;
