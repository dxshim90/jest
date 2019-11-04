const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = {
      firstName: "Danny"
    };
    user["lastName"] = "Shimield";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "error"),

  reverseString: string =>
    string
      .split("")
      .reverse()
      .join(""),

  chunkedArray: (array, len) => {
    const chunkedArr = [];

    array.forEach(val => {
      const last = chunkedArr[chunkedArr.length - 1];
      if (!last || last.length === len) {
        chunkedArr.push([val]);
      } else {
        last.push(val);
      }
    });
    return chunkedArr;
  }
};

module.exports = functions;
