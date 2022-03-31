const fetch = require("node-fetch");
const { get } = require("../config");
const CoinGecko = require("coingecko-api");

const CoinGeckoClient = new CoinGecko();

// const funcPrice = async (coin) => {
//   let data = await CoinGeckoClient.coins.fetch(coin, {});
//   // console.log(Object.keys(data));
//   console.log(data.data.market_data.current_price.eur);
//   return data.data.market_data.current_price.eur;
// };
// const funcDescription = async (coin) => {
//   let data = await CoinGeckoClient.coins.fetch(coin);
//   console.log(data.data.description.en);
//   return data.data.description.en;
// };

let COINCACHE = {};
const CACHE = {};
const CACHEDES = {};
//Kako da go sporedam dali e isto so let data = await CoinGeckoClient.coins.list();
// Valjda ako go imam vo svoja baza mozam da go sporedam

const listCoins = async () => {
  let now = new Date().getTime() / 1000;
  if (COINCACHE.data && CACHE[coin].timestamp + 10000 > now) {
    return COINCACHE.data.data;
  }

  try {
    let data = await CoinGeckoClient.coins.list();

    COINCACHE = {
      data,
    };

    return data.data;
  } catch (error) {
    throw error;
  }
};

const getPrice = async (coin) => {
  let now = new Date().getTime() / 1000;

  if (
    CACHE[coin] &&
    CACHE[coin].timestamp + get("crypto").cache_expires > now
  ) {
    return CACHE[coin].data;
  }

  try {
    let res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
    let data = await res.json();

    CACHE[coin] = {
      timestamp: new Date().getTime() / 1000,
      data: data.market_data.current_price.eur,
    };
    return data.market_data.current_price.eur;
  } catch (error) {
    throw error;
  }
};

const getDescriptions = async (desc) => {
  if (CACHEDES[desc]) {
    return CACHEDES[desc];
  }

  try {
    let res = await fetch(`https://api.coingecko.com/api/v3/coins/${desc}`);
    let data = await res.json();

    CACHEDES[desc] = {
      data: data.description.en,
    };

    // console.log(data.description.en);
    return data.description.en;
  } catch (error) {
    throw error;
  }
};

// getPrice("cardano");
// getDescriptions("cardano");

// funcPrice("bitcoin");
// funcDescription("bitcoin");

module.exports = {
  getPrice,
  getDescriptions,
  listCoins,
};
