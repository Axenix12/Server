const livereload = require("livereload");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

if (app.get("env") === "development") {
	const liveReloadServer = livereload.createServer();
	liveReloadServer.watch(path.join(__dirname, "public"));

	app.use(require("connect-livereload")());

	liveReloadServer.server.once("connection", () => {
		setTimeout(() => {
			liveReloadServer.refresh("/");
		}, 100);
	});
}

app.use(express.static("public"));

const jsonParser = bodyParser.json();

app.post("/blog", jsonParser, (req, res) => {
	console.log(req.body);
	res.status(201);
	res.send("OK");
});

app.get("/blog", (req, res) => {
	res.status(201);
	res.send("OK");
});
// app.app.get("/", (req, res) => {
// 	res.send("Hello World!");
// });

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
