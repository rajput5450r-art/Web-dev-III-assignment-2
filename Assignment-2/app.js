const express = require("express");
const logger = require("./middelware/logger.js");
const studentRoutes = require("./routes/studentRoutes.js");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/students", studentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});