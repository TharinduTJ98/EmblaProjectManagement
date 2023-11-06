const http = require("http");
const port = 5000;

//Controllers
const {
  getAllProjects,
  getProject,
  getTopPerformProjects
} = require("./controller/ProjectController");

const server = http.createServer((req, res) => {
  if (req.url == "/api/v1/projects" && req.method == "GET") {
    getAllProjects(req, res);
  } else if (
    req.url.match(/\/api\/v1\/projects\/([0-9]+)/) &&
    req.method == "GET"
  ) {
    const id = parseInt(req.url.split("/")[4]);
    getProject(req,res,id);
  } else if(req.url == "/api/v1/projects/getTopProject" && req.method == "GET"){
    getTopPerformProjects(req,res)
  }
  else{
    res.writeHead(404, { 'Content-Type': "application/json" });
    res.end(JSON.stringify({message:"No Routes Found"}));
  }
});

server.listen(port, () => {
  console.info(`Server is Up and Running on ${port}`);
});
