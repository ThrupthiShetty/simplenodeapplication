const app = require('express')();
app.get('/', (req, res) => {
  res.send('<body style="background:lightblue"><h1 style="color:indigo; display: contents;">Welcome to CI/CD Automation with Oracle Developer Cloud Service</h1></div>      <p style="color:green">Your application is now running on OKE Cluster......Thank You!!!!!</p> <img src="https://www.hopetutors.com/wp-content/uploads/2018/07/Docker-and-Kubernetes-Training-in-Chennai.jpg"></body>')
})
app.listen(8084, () => {
  console.log('App listening on port 8084');
});
