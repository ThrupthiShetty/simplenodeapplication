const app = require('express')();
app.get('/', (req, res) => {
  res.send('<h2 style="color:orange">Hello world</h2> <p style="color:blue">Welcome to Node app... </p><p style="color:red">Welcome to OKE... </p>')
})
app.listen(8084, () => {
  console.log('App listening on port 8084');
});
