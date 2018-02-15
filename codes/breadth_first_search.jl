# Breadth First Search(BFS) of a binary tree

# Tree structure
struct TreeNode
	node
	left
	right
end

# function to build a tree
function build_tree(index=0)
	# full binary tree: (7-nodes)
	if index == 1
		#=
			     1
			   ╱   ╲
		      2     3
		    ╱  ╲
		   4     5
		 ╱  ╲
		6    7
		=#
		
		println("Rendering full binary tree with 7 nodes...")
		t1 = TreeNode(4, TreeNode(6, nothing, nothing), TreeNode(7, nothing, nothing))
		t2 = TreeNode(2, t1, TreeNode(5, nothing, nothing))
		t = TreeNode(1, t2, TreeNode(3, nothing, nothing))
	
	# complete binary tree: (10-nodes)
	elseif index == 2
		#=
			        1
			     ╱    ╲
		       2        3
		     ╱  ╲      ╱  ╲
		   4      5   6	   7
		 ╱  ╲	 ╱
		8    9  0
		=#
		
		println("Rendering complete binary tree with 10 nodes...")
		t1 = TreeNode(4, TreeNode(8, nothing, nothing), TreeNode(9, nothing, nothing))
		t2 = TreeNode(2, t1, TreeNode(5, TreeNode(0, nothing, nothing), nothing))
		t3 = TreeNode(3, TreeNode(6, nothing, nothing), TreeNode(7, nothing, nothing))
		t = TreeNode(1, t2, t3)

	# perfect binary tree: (15-nodes)
	else
		if index != 0
			println("Invalid Index. Used 0 by default...")
		end
		#= 
			         1
			   	  ╱     ╲
			   	 ╱       ╲
		       2           3
		    ╱   ╲        ╱   ╲
		  4      5      6	  7
		 ╱ ╲	╱ ╲    ╱ ╲   ╱  ╲
		8   9  0   1  2   3 4    5
		=#
		println("Rendering perfect binary tree with 15 nodes...")
		t1 = TreeNode(4, TreeNode(8, nothing, nothing), TreeNode(9, nothing, nothing))
		t2 = TreeNode(5, TreeNode(0, nothing, nothing), TreeNode(1, nothing, nothing))
		t3 = TreeNode(6, TreeNode(2, nothing, nothing), TreeNode(3, nothing, nothing))
		t4 = TreeNode(7, TreeNode(4, nothing, nothing), TreeNode(5, nothing, nothing))
		t5 = TreeNode(2, t1, t2)
		t6 = TreeNode(3, t3, t4)
		t = TreeNode(1, t5, t6)
	end
	return t
end


# Implementation of inorder traversal of binary tree
function inorder_traversal(tree, _path=nothing)
	"""
	 	function for the inorder traversal
	"""
	if _path == nothing
		_path = []
	end
	if tree != nothing
		inorder_traversal(tree.left, _path)
		push!(_path, tree.node)
		inorder_traversal(tree.right, _path)
	end
	return _path
end


# Breath first search implementation
function breath_first_search(root)
	"""
		function for the breath first search
	"""
	if root == nothing
		return []
	end

	queue = [root]
	bfs_result = []
	while isempty(queue) != true
		current = queue[1]
		deleteat!(queue, 1)
		push!(bfs_result, current.node)
		if current.left != nothing
			push!(queue, current.left)
		end
		if current.right != nothing
			push!(queue, current.right)
		end
	end
	return bfs_result;
end

# main function
function main()
	tree = build_tree(1);
	inorder_path = inorder_traversal(tree);
	bfs_path = breath_first_search(tree);
	println("Inorder Traversal > ", inorder_path);
	println("Breadth First Search > ", bfs_path);
end

main()
