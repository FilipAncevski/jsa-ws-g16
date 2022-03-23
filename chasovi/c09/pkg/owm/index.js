const fetch = require("node-fetch");
const { get } = require("../config");

//   https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const API_URL = ` https://api.openweathermap.org/data/2.5`;

const CACHE = {};

const getCityWeather = async (city) => {
  let now = new Date().getTime() / 1000;

  if (
    CACHE[city] &&
    CACHE[city].timestamp + get("weather").cache_expires > now
  ) {
    return CACHE[city];
  }

  let URL = `${API_URL}/weather?q=${city}&units=metric&appid=${
    get("weather").api_key
  }`;
  try {
    let res = await fetch(URL);
    let data = await res.json();

    CACHE[city] = {
      timestamp: new Date().getTime() / 1000,
      data,
    };

    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCityWeather,
};
