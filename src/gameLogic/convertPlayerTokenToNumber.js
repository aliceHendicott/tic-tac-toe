const convertPlayerTokenToNumber = (token, playerTokens) => {
  if (playerTokens[0] === token) {
    return 1;
  } else {
    return 2;
  }
};

export default convertPlayerTokenToNumber;
