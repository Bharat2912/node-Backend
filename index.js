const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors())

// app.use(function(req, res, next) {
//     res.setHeader("Content-Security-Policy", "script-src 'self' http://localhost:3001");
//     next();
// });

app.use("/api/v1/microservice",require('./routes'));

app.listen(port, () => {
    console.log(`Microservice is now running on port ${port}`);
});
