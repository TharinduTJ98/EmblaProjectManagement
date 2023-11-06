const projects = require("../data");

function getAllProjects(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(projects));
}

function getProject(req, res, id) {
  const project = projects.find((p) => p.id === id)
  if (project) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(project));
  }else{
    res.writeHead(404, { 'Content-Type': "application/json" });
    res.end(JSON.stringify({message:"No project Found with Given Id"}));
  }
}

module.exports = {
  getAllProjects,
  getProject,
};
