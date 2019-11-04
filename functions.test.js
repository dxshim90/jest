const functions = require("./functions");

test("Adds Two Numbers", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("User Should be Daniel Shimield object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Danny",
    lastName: "Shimield"
  });
});

test("Should be under 1600", () => {
  const load1 = 700;
  const load2 = 800;
  expect(load1 + load2).toBeLessThan(1600);
});

//regex
test("There is no i in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("Admin Should be in username", () => {
  username = ["Dave", "Barry", "Admin"];
  expect(username).toContain("Admin");
});

// test("User fetched name is leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

test("User fetched name is leanne Graham", async () => {
  expect.assertions(1);
  const response = await functions.fetchUser();
  expect(response.name).toEqual("Leanne Graham");
});

//Jest Matchers
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined opposide of toBeUndefined
// toBeTruthy matches anything that has a truthy value
// toBeFalst matches anything that has a falsy value
