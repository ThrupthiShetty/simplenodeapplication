const app = require('express')();
app.get('/', (req, res) => {
  res.send('<h1>Hello Everyone</h1>')
})
app.listen(8084, () => {
  console.log('App listening on port 8084');
});
