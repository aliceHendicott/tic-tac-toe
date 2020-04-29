const generateToken = () => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 4; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export default generateToken;
