const http = require("http");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

// Use environment variable PORT (PORT=XXXX in packages.json -> scripts -> [SCRIPT]) or 8000
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  // listen function for Express is exactly the same as listen function for server (http.createServer())
  // So it is possible to separate Express functionality (app.js) from server (server.js) in separate files
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
