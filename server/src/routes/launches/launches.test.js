const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should respond with 200 success and 'Content-Type' to include the word 'json'", async () => {
    response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launches", () => {
  test("It should respond with 200 success", () => {});

  test("It should catch required properties", () => {});
  test("It should catch invalid dates", () => {});
});
