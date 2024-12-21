# Node.js EADDRINUSE Error
This repository demonstrates a common error encountered when developing Node.js applications: the `EADDRINUSE` error. This error occurs when a server attempts to bind to a port that is already in use. 

## Problem
The `server.js` file contains a simple HTTP server.  If you run this server and then try to run it again immediately without stopping the first instance, it will throw an `EADDRINUSE` error because port 8080 is already occupied.

## Solution
The `serverSolution.js` file provides a solution to handle the `EADDRINUSE` error gracefully. It uses a `try...catch` block to catch the error and provides helpful logging and retry mechanism if the port is busy.