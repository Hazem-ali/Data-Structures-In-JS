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

    DFSInorder() {
        return traverseInorder(this.root, [])
    }
    DFSPreorder() {
        return traversePreorder(this.root, [])
    }
    DFSPostorder() {
        return traversePostorder(this.root, [])
    }






}

function traverseInorder(node, list) {

    if (node.left) {
        traverseInorder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInorder(node.right, list);
    }

    return list;

}
function traversePreorder(node, list) {


    list.push(node.value);

    if (node.left) {
        traversePreorder(node.left, list);
    }

    if (node.right) {
        traversePreorder(node.right, list);
    }

    return list;

}
function traversePostorder(node, list) {



    if (node.left) {
        traversePostorder(node.left, list);
    }

    if (node.right) {
        traversePostorder(node.right, list);
    }

    list.push(node.value);


    return list;

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

// InOrder => [1, 4, 6, 9, 15, 20, 170]
// PreOrder => [9, 4, 1, 6, 20, 15, 170]
// PostOrder => [1, 6, 4, 15, 170, 20, 9]

console.log('InOrder', myTree.DFSInorder())
console.log('PreOrder', myTree.DFSPreorder())
console.log('PostOrder', myTree.DFSPostorder())

