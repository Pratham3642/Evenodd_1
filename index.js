const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/find", (req, res) => {
  let num = req.query.number;
  if (!num || isNaN(num)) {
    return res.status(400).json({ error: "Invalid number" });
  }
  
  let n = parseFloat(num);
  let r = n % 2 === 0 ? "Even" : "Odd";
  res.json({ result: r });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
