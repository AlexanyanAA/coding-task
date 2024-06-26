module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  roots: ["<rootDir>/src/tests"],
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
};
