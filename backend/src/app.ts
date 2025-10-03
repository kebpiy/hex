import express from "express";
import http from "http";
import { fileURLToPath } from "url";
import path from "path";

import { setupWebSocket } from "./game/ws.js";
import apiRoutes from "./routes/api.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
app.use(express.json());

// Serve compiled svelte frontend
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

// Serve the api route
app.use("/api", apiRoutes);

// Initialize websocket server in game/ws.ts
setupWebSocket(server);

// Host the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Backend listening at http://localhost:${PORT}`);
});

export default app;