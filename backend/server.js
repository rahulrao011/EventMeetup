require("dotenv").config();
const app = require("express")();
const apiRoutes = require("./routes/api");
const PORT = process.env.PORT;

// middleware
app.use((req, res, next) => {
  console.log(req.method, req.path); // e.g. 'GET /register'
  next();
});

// routes
app.use('/register', apiRoutes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT} ...`);
});
