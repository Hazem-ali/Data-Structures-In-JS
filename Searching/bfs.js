class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree {
    constructor() { this.root = null; }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;

            while (true) {
                if (value >= currentNode.value) {
                    // right
                    // If there is no right of then 
                    // we add this value to the right (bcz it's > currentNode)
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    // else, there's a bigger node, so we jump to it and retry
                    currentNode = currentNode.right;
                }
                else if (value < currentNode.value) {
                    // left
                    // If there is no left of then 
                    // we add this value to the left (bcz it's < currentNode)
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    // else, there's a smaller node, so we jump to it and retry
                    currentNode = currentNode.left;

                }
            }
        }
    }


    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                // left
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                // right
                currentNode = currentNode.right;

            }
            else if (value === currentNode.value) {
                return currentNode;
            }
        }



    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            console.log(currentNode.value);
            list.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return list;
    }

    breadthFirstSearchRecursive(BFSQueue, list) {
        if (!BFSQueue.length) {
            return list;
        }

        let currentNode = BFSQueue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            BFSQueue.push(currentNode.left);
        }
        if (currentNode.right) {
            BFSQueue.push(currentNode.right);
        }


        return this.breadthFirstSearchRecursive(BFSQueue, list);
    }






    remove() { }
}






const myTree = new BinarySearchTree();

myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);

//       9
//   4        20
// 1   6    15  170
//
// console.log(myTree.breadthFirstSearch());
console.log(myTree.breadthFirstSearchRecursive([myTree.root], []));