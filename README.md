# BFS Demo

This is the source code for my blog post comparing my original Breadth First Search (BFS) solution compared one optimized to make use of `Queue`.

## Instructions

1. In order to test this app, you will first need to start a python server using `python3 -m http.server 8000`.
2. Once you server is running, open `http://localhost:8000/` in your browser of choice.
3. To test out my original BFS function, click the button that says `BFS MINE`.
4. To test out the optimized `Queue` based function, click the button that says `BFS QUEUE`.
5. To run them concurrently, click the button that says `RUN BOTH FUNCTIONS.`
6. You should see a readout of how many milliseconds each method takes, with `BFS QUEUE` most often finishing in a shorter amount of time.

## Expected Behavior

The expected behavior of this app is to see the text next to the method labels (`My BFS Function: ...` and `Queue BFS Function: ... ` respectively) update with the amount of milliseconds it takes for the respective method to run.

## Example

Below is an example of what the app should look like after proper execution.

![comparison](/assets/comparison.png)
