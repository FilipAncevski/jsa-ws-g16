const { getCityWeather } = require("../pkg/owm");

const getForCity = async (req, res) => {
  try {
    let weather = await getCityWeather(req.params.city);
    res.send(weather);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getForCity,
};
