require('dotenv').config();
const app = require('express')();
const PORT = process.env.PORT;

// middleware
app.use((req, res, next) => {
    console.log(req.method, req.path); // e.g. 'GET /register'
    next();
});

// routes
app.get('/', (req, res) => {
    res.json({msg: "Welcome to the app"});
});
app.get('/register/:id', (req, res) => {});
app.post('/register', (req, res) => {});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} ...`)
});