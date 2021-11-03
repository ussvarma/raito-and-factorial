const full_names = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (full_names) => {
  return getFirstNames(full_names);
};

module.exports = getPeopleInCity;
