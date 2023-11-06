const http = require("http");
const port = 3000;
const projects = require("./data");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/api/projects") {
        res.writeHead(200, { 'Content-Type': "application/json" });
        res.end(JSON.stringify(projects));
    }
    else if (req.method === "DELETE" && req.url.startsWith("/api/projects/")) {
        const projectId = parseInt(req.url.split("/").pop());
        const index = projects.findIndex(project => project.id == projectId);
        if (index !== -1) {
            const project = projects[index];
            projects.splice(index, 1);
            res.writeHead(200);
            res.end(JSON.stringify(project));
        }
        else {
            res.writeHead(404);
            res.end("Project not found!");
        }
    }
});

server.listen(port, () => console.log(`Server is running on port ${port}.`));