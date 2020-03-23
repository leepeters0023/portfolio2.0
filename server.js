const express = require('express'); // this is a safer way rather than import because import is newer and not as widely adopted 
const path = require('path'); // path is a native part of node 
// require is another way of doing imports 
// require vs import has something to do with scoping which Josh explained and was confusing 
// Josh says to just use import since everyone mostly uses modern browsers 
// require always works in the server, though
const app = express();
const port = process.env.PORT || 3000; 
// .env means 'from whatever location we're running inside of, look for a variable named PORT, it's called an environment variable 

app.use(express.static(path.join(__dirname, '/client/build'))); // sets up a static directory from which our files are served and prevents people seeing sensitive code like login credentials or cc numbers, should always set up a static directory 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
}) // * means 'any path' - __dirname joins our current directory to the following string 

app.listen(port, () => {
  console.log('Listening on port:', port)
})