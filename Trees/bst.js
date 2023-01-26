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
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
                else if (value < currentNode.value) {
                    // left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
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



function traverse(mode) {
    const tree = { value: mode.value };
    tree.left = (node.left === null) ? null : traverse(node.left);
    tree.right = (node.right === null) ? null : traverse(node.right);
    return tree;
}