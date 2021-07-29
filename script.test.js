const pl = require("./script");

test("word translates to word", () => {
  expect(pl("apple")).toBe("appleway");
});

test("eagle translates to eagleway", () => {
  expect(pl("eagle")).toBe("eagleway");
});

test("orange translates to orangeway", () => {
  expect(pl("orange")).toBe("orangeway");
});

//tests for starting with consonants
test("banana translates to ananabay", () => {
  expect(pl("banana")).toBe("ananabay");
});

test("cat translates to atcay", () => {
  expect(pl("cat")).toBe("atcay");
});

test("psychology translates to ologypsychay", () => {
  expect(pl("psychology")).toBe("ologypsychay");
});

// test lowercase
test("Brigitta translates to igittabray", () => {
  expect(pl("Brigitta")).toBe("igittabray");
});
