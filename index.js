import Queue from "./queue.js";

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B", "X"],
  E: ["B", "X", "Y"],
  F: ["C", "X"],
};

const startKey = "A";

const bfsMine = (graph, startNode) => {
  let isRead = {};
  isRead[startNode] = true;
  console.log(startNode);
  for (let key in graph) {
    if (!isRead[key]) {
      isRead[key] = true;
      console.log(key);
    }
    if (graph[key]) {
      graph[key].forEach((x) => {
        if (!isRead[x]) {
          isRead[x] = true;
          console.log(x);
        }
      });
    }
  }
};

const bfsQueue = (graph, startNode) => {
  const queue = new Queue();
  const visited = new Set();

  queue.enqueue(startNode);
  visited.add(startNode);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    console.log(node); // Visit the node

    // Add all unvisited neighbors to the queue
    if (graph[node]) {
      graph[node].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.enqueue(neighbor);
        }
      });
    }
  }
};

const runBfsMine = () => {
  var t0 = performance.now();
  bfsMine(graph, startKey);
  var t1 = performance.now();
  changeTarget("bfsMine", t1 - t0);
};

const runBfsQueue = () => {
  var t0 = performance.now();
  bfsQueue(graph, startKey);
  var t1 = performance.now();
  changeTarget("bfsQueue", t1 - t0);
};

const changeTarget = (target, val) => {
  document.getElementById(target).innerText = `${val} millseconds`;
};

window.runBfsMine = runBfsMine;
window.runBfsQueue = runBfsQueue;

window.runBoth = () => {
  runBfsMine();
  runBfsQueue();
};
