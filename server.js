const express = require("express");
const app = express();

const PORT = 3333;

app.get("/", (req, res) => {
  res.json("Hello World From gitAction");
});


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
