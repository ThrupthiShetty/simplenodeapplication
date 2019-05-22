const app = require('express')();
app.get('/', (req, res) => {
  res.send('<h2 style="color:orange">Hello world</h2> <p style="color:blue">Welcome to Node app</p>')
})
app.listen(3000, () => {
  console.log('App listening on port 3000');
});