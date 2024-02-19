const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
 res.send('Hello World!');
});

app.listen(3000, () => {
 console.log('Example app listening on port 3000!');
});

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
  })
  
module.exports = app