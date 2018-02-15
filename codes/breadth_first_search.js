// Tree data structure
var TreeNode = function(node, left=null, right=null) {
	this.node = node;
	this.left = left;
	this.right = right;
};


// function to get children objects of a node
TreeNode.prototype.getChildren = function() {
    var children = [];
	if (this.left !== null) {
		children.push(this.left);
	}
	if (this.right !== null) {
		children.push(this.right);
	}
	return children;
};


// function to build a tree
var make_tree = function(index=0) {
	// Full binary tree (#7-nodes)
	if (index === 1) {
		console.log("Rendering full binary tree with 7 nodes...")
		t1 = new TreeNode(4, new TreeNode(6), new TreeNode(7));
		t2 = new TreeNode(2, t1, new TreeNode(5));
		t = new TreeNode(1, t2, new TreeNode(3));
		return t;
	} 
	
	// Complete binary tree (#10-nodes)
	else if (index === 2) {
		console.log("Rendering complete binary tree with 10 nodes...")
		t1 = new TreeNode(4, new TreeNode(8), new TreeNode(9));
		t2 = new TreeNode(2, t1, new TreeNode(5, new TreeNode(0))); 
		t3 = new TreeNode(3, new TreeNode(6), new TreeNode(7));
		t = new TreeNode(1, t2, t3);
		return t;
	} 
	// Perfect binary tree (#15-nodes)
	else {	
		if (index != 0) {
			console.log("Index not defined. Used 0 by default...")
		}
		console.log("Rendering perfect binary tree with 15 nodes...")
		t1 = new TreeNode(4, new TreeNode(8), new TreeNode(9))
		t2 = new TreeNode(5, new TreeNode(0), new TreeNode(1))
		t3 = new TreeNode(6, new TreeNode(2), new TreeNode(3))
		t4 = new TreeNode(7, new TreeNode(4), new TreeNode(5))
		t5 = new TreeNode(2, t1, t2)
		t6 = new TreeNode(3, t3, t4)
		t = new TreeNode(1, t5, t6)
		return t
	}
};


// function for the Inorder Traversal of binary tree
var inorder_traversal = function(tree, inorder_path) {
	if (tree != null) {
		inorder_traversal(tree.left, inorder_path);
		inorder_path.push(tree.node);
		inorder_traversal(tree.right, inorder_path);
	}
	return inorder_path;
};


// function for the binary search tree
var breadth_first_search = function(root) {
	var queue = [root];
	var bfs_result = [];
	
	while (queue.length != 0) {
		current = queue.shift();
		bfs_result.push(current.node);
		
		if (current.left != null) {
			queue.push(current.left)
		}
		if (current.right != null) {
			queue.push(current.right)
		}
	}
	return bfs_result;
};


// main function
function main() {
	var tree = make_tree(1);
	// console.log(tree.getChildren());
	var inorder_path = [];
	inorder_traversal(tree, inorder_path);
	console.log("Inorder Traversal > " + inorder_path);
	
	var bfs_path = breadth_first_search(tree);
	console.log("Breadth First Search > " + bfs_path);
}


main()