import express from "express";
import fs from "fs";
import path from "path"
import dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from "url";
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const LOG_FILE_PATH=path.join(__dirname,"app.sample.log");
const PORT = process.env.PORT || 5000;
const app = express();

const LOG_MESSAGES = [
    "User logged in",
    "ERROR: DB timeout"
];

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * LOG_MESSAGES.length);
    const log = LOG_MESSAGES[randomIndex];
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${log}\n`;

    console.log(logEntry);

    fs.appendFile(LOG_FILE_PATH, logEntry, (err) => {
        if (err) {
            console.error("Failed to write to log file:", err);
        }
    });
}, 2000);

app.get("/", (req, res) => {
    res.json({ status: "Log generator running", interval: "2s" });
});

app.listen(PORT, () => {
    console.log(`Log generator server listening on port ${PORT}`);
    console.log("Generating sample logs every 2 seconds...");
});
