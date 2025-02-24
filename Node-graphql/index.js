const express = require('express');
const app = express();
const server = require('./Server/server');
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello World !!");
});
    
async function startApolloExpressServer() {
    await server.start();
    server.applyMiddleware({ app });  //Apply Apollo middleware to the Express app

    app.listen(port, () => {
      console.log(`App is running on http://localhost:${port}/graphql`);
    });
    
}
  
startApolloExpressServer()
    .then(() => console.log('Apollo Express Server Initialization Successful'))
    .catch((error) => console.log(`ApolloExpress Server Initialization Failed. Error: ${error.message}`, { error }));

