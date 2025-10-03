import { WebSocketServer, WebSocket } from "ws";
import http from "http";

export function setupWebSocket(server: http.Server) {
    const wss = new WebSocketServer({ server });
    wss.on("connection", (ws: WebSocket) => {
        console.log("Client connected");
        ws.send("Welcome!");
        
        ws.on("message", (message: Buffer) => {
            console.log("Received:" , message.toString());
            ws.send(`Echo: ${message}`);
        });
        
        ws.on("close", () => {
            console.log("Client disconnected");                
        });
    })
}