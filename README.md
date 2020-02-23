# job-dashboard-backend
Node-Express Backend for job-dashboard project

## Run Project
- Open terminal and runt he command ```npm install```
- After all the dependencies are installed run the command ```npm start```.
Make sure that the port number 8081 is free so as to be able to run the project

### Test GraphQL
The project is function with both RestAPI and GraphQl.
To access GraphQL apis, first follow the steps to `Run Project`. Then, 
1. Open GraphiQL app and enter the GraphQL endpoint as [http://localhost:8081/graphql](http://localhost:8081/graphql)
2.  Open the 'Edit HTTP Headers' option
3.  Add a new header as:
    1. Header Name: Authorization
    2. Header value: For the token please refer to the config.js file placed in the config directory. Copy the token and enter the header value as Bearer followed by a space and the token.
4. You can now query the graphQL backend.

## Testing
Simply run the command npm run test and jest tests will be run and a summary of all the tests will be shown in the end. 
