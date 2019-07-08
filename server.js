const app = require('express')();
app.get('/', (req, res) => {
  res.send('<html >
    <head>
        <title>
Simple Demo
        </title>
    </head>
    <body style="background:lightblue">
        <div>
                <img src="https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo.png" style="width:15%">

        </div>
 <div style="    display: block;
 text-align: center;">     
        <h1 style="color:indigo; display: contents;">Welcome To OKE Developer Assistant Tool</h1>
    </div>      <p style="color:green">Your application is now running on OKE Cluster......</p>
        <img src="https://www.hopetutors.com/wp-content/uploads/2018/07/Docker-and-Kubernetes-Training-in-Chennai.jpg">
    </body>
    <footer>
        Copyright © 2018, Oracle and/or its affiliates.  All Rights Reserved. | Confidential – Oracle Internal

    </footer>
</html>')
})
app.listen(8084, () => {
  console.log('App listening on port 8084');
});
