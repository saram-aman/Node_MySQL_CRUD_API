const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
  res.send("Welcome to Node MySQL CRUD api server!")
})

app.use("/", require("./apis"))
app.listen(PORT)