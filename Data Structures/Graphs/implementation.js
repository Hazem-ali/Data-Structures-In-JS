class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacencyList = {};
    }

    addVertex(node){
        this.adjacencyList[node] = [];
        this.numberOfNodes++;

    }

    addEdge(node1,node2){
        // undirected graph
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);

    }

    showConnections(){
        const allNodes = Object.keys(this.adjacencyList);
        // forof is for arrays
        for (const node of allNodes) {
            let nodeConnections = this.adjacencyList[node];
            let connections = "";
            let vertex;

            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "--> " + connections);

        }

    }
}  


const myGraph = new Graph();

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3','1');
myGraph.addEdge('3','4');
myGraph.addEdge('4','2');
myGraph.addEdge('4','5');
myGraph.addEdge('1','2');
myGraph.addEdge('1','0');
myGraph.addEdge('0','2');
myGraph.addEdge('6','5');

console.log(myGraph.showConnections());