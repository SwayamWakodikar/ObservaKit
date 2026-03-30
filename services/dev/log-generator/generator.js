import express from "express";

const PORT = 5000;
const app = express();

const LOG_MESSAGES = [
    "User logged in",
    "ERROR: DB timeout"
];

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * LOG_MESSAGES.length);
    const log = LOG_MESSAGES[randomIndex];
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${log}`);
}, 2000);

app.get("/", (req, res) => {
    res.json({ status: "Log generator running", interval: "2s" });
});

app.listen(PORT, () => {
    console.log(`Log generator server listening on port ${PORT}`);
    console.log("Generating sample logs every 2 seconds...");
});
