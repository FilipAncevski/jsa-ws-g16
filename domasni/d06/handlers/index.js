const { getDescriptions, getPrice, listCoins } = require("../pkg/crypto");

const price = async (req, res) => {
  try {
    const coin = await getPrice(req.params.coin);
    return res.status(200).json(coin);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

const description = async (req, res) => {
  try {
    const coin = await getDescriptions(req.params.coin);
    return res.status(200).json(coin);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

const list = async (req, res) => {
  try {
    return res.status(200).json(await listCoins());
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  price,
  description,
  list,
};
