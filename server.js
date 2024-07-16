const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
