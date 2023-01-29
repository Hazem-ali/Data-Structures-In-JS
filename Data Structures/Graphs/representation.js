// Edge List
const edgeList = [[0, 2], [2, 3], [2, 1], [1, 3]];


// Adjacency List
const adjList = [[2], [2, 3], [0, 1, 3], [1, 2]]; // indexes are the actual nodes 

// Adjacency Matrix
const adjMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]
const adjMatrixObj = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}