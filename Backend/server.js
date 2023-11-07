const http = require("http");
const port = 5000;

//Controllers
const {
  getAllProjects,
  getProject,
  getTopPerformProjects,
  deleteProject,
  createProject,
} = require("./controller/ProjectController");

const server = http.createServer((req, res) => {
  // Handle Cors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "");

  if (req.url == "/api/v1/projects" && req.method == "GET") {
    getAllProjects(req, res);
  } else if (
    req.url.match(/\/api\/v1\/projects\/([0-9]+)/) &&
    req.method == "GET"
  ) {
    const id = parseInt(req.url.split("/")[4]);
    getProject(req, res, id);
  } else if (
    req.url == "/api/v1/projects/getTopProject" &&
    req.method == "GET"
  ) {
    getTopPerformProjects(req, res);
  } else if (
    req.url.match(/\/api\/v1\/projects\/([0-9]+)/) &&
    req.method == "DELETE"
  ) {
    const id = parseInt(req.url.split("/")[4]);
    deleteProject(req, res, id);
  } else if (req.url == "/api/v1/projects" && req.method == "POST") {
    createProject(req, res);
  } else if (
    req.url == "/api/v1/projects/completed" &&
    req.method == "GET"
  ) {
    getComputedStyle(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "No Routes Found" }));
  }
});

server.listen(port, () => {
  console.info(`Server is Up and Running on ${port}`);
});
