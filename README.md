# middleware-madness

Exploring Express.js middleware and the use of next

The Express documentation will provide all the help needed to complete these tasks.

## Task 1

Create a piece of middleware that will `console.info` the `method` of each request made to the server. A test has been written to test your middleware.

## Task 2

For the route `"/api/cats/:id"` - the req should be redirected to the other `/api/cats/:id` if the cat's I'd is 666. By only adding code in the if statement for the first route, re-direct the request to the other. A test has been set up for you to test this.

The final request should be sent from the second route, not the first

## Task 3

An `authenticateUser` function has been declared for you and added as a piece of middleware for the route `POST:"/api/login"`

Finish the authenticateUser function so that it checks if the posted user is authenticated or not. An authenticate user has an `admin` key with a value of `true`

-   If authenticated, they should be redirected back to the route to finish the request.

-   If a user is not authenticated, they should be sent to the error handling middleware, to send the 401 status.

A test has been written to check your implementation

## Task 4

As well as the `authenticateUser` middleware you just created, add some middleware that will log the url of the request.

The middleware should only be applied to the `POST:"/api/login"` route. The urlLogger.js file has been started for you.

The docs may be useful in looking at how to add multiple pieces of middleware to a route.

A test has been written to check your implementation

## Task 5

`POST("/api/text-endpoint")` allows plain text to be send as its payload.

Add some middleware that will parse the body into plain text and return the text as its response.

A test has been written to check your implementation

## Task 6

For task 1, you created a request method logger. Express also supplies a piece of middleware that can provide this information.

morgan - https://expressjs.com/en/resources/middleware/morgan.html

Research how to implement the morgan middleware to log the `method`, `url` `status` and `response-time` in milliseconds for all requests made to the server. There is no test for this but you should see the result in your terminal.

Keep your logger in place to avoid your tests failing.

## Task 7

A public folder has been provided for you which currently has some files. Add some Express middleware that will enable you to serve these files as static files.

Once implemented, you should be able to start the server and the following endpoints in your browser to see the static files:

    http://localhost:9090/other/file1.txt
    http://localhost:9090/other/file2.txt
    http://localhost:9090/welcome.html

## EXTRA:

We can currently see the welcome html page when we go to `http://localhost:9090/welcome.html`

However, ideally, we would like to see this page on the route: `http://localhost:9090/home`

Without changing any file names, use your Express server to serve the html page on the route `GET:  /home`
