const Gun = require('gun');
require('gun/sea');       // crypto / auth (optional but useful)
require('gun/axe');       // performance

const express = require('express');
const app = express();

// Required so Render doesn't kill it
const PORT = process.env.PORT || 8080;

app.get('/', (_, res) => res.send('GunDB Relay is running'));

const server = app.listen(PORT, () => {
  console.log('Server listening on', PORT);
});

// Attach Gun to Express server
Gun({
  web: server,
  radisk: true,         // enable disk storage
});
 
