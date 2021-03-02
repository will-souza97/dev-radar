const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./webSocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(`mongodb://localhost/omnistack10`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
