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
    remove() { }
}



function traverse(node) {
    const tree = { value: node.value };
    tree.left = (node.left === null) ? null : traverse(node.left);
    tree.right = (node.right === null) ? null : traverse(node.right);
    return tree;
}




const myTree = new BinarySearchTree();

myTree.insert(9);
myTree.insert(12);
myTree.insert(1);
myTree.insert(24);
myTree.lookup(24);

console.log(JSON.stringify(traverse(myTree.root)));
console.log(myTree.lookup(2));