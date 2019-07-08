const app = require('express')();
app.get('/', (req, res) => {
  res.send('<html >
    <head>
        <title>
Simple Demo
        </title>
    </head>
    <body style="background:lightblue">
        <h1 style="color:indigo">Welcome To OKE Developer Assistant Tool</h1>
        <p style="color:green">Your application is now running on OKE Cluster......</p>
    </body>
    <footer>
        Copyright © 2018, Oracle and/or its affiliates.  All Rights Reserved. | Confidential – Oracle Internal

    </footer>
</html>')
})
app.listen(8084, () => {
  console.log('App listening on port 8084');
});
