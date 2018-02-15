# /usr/bin/python
# -*- coding: utf-8 -*-

'''Breadth First Search(BFS) of a binary tree
'''


print(__doc__)


class Node:
	"""
	Represents the node of a tree
	"""
	def __init__(self, node, left=None, right=None):
		"""
		:param node: The value of the node
		:type node: Union[int, str, float]
		:param left: The left treenode
		:type left: Union[None, TreeNode]
		:param right: The right treenode
		:type left: Union[None, TreeNode]
		"""
		self.node = node
		self.left = left
		self.right = right

	def get_node(self):
		"""
		Function to fecth the node value
		"""
		return self.node

	def get_children(self, values=False):
		"""
		Function to get either the children values or node object
		:param values: to choose between the values or node object
		:type values: boolean
		:rType: Union[List[int], List[float], List[str]]
		"""
		children = []
		if self.left is not None:
			children.append(self.left)
		if self.right is not None:
			children.append(self.right)

		if not values:
			return children
		return [cur.node for cur in children]

	def __str__(self):
		"""
		returns the string representation
		"""
		return 'TreeNode: ({0},({1},{2}))'.format(self.node, self.left, self.right)

	def __repr__(self):
		"""
		returns the official string representation
		"""
		return '({0},({1},{2}))'.format(self.node, self.left, self.right)


def make_tree(index=0):
	"""Function to create the trees
		1. Full binary tree (7 nodes)
		2. Complete binary tree (10 nodes)
	 	3. Perfect binary tree (15 nodes)
	
	Args: 
		index (int): The index to choose the tree, perfect binary tree(index=0) is set as default
	
	Returns
		Node: Root node of the binary tree. Returns Perfect binary tree by default
	"""

	# full binary tree: (7-nodes)
	if index == 1:
		"""
			     1
			   ╱   ╲
		      2     3
		    ╱  ╲
		   4     5
		 ╱  ╲
		6    7	
		"""
		print("Rendering full binary tree with 7 nodes...")
		t1 = Node(4, Node(6), Node(7))
		t2 = Node(2, t1, Node(5))
		t = Node(1, t2, Node(3))
		return t

	# complete binary tree: (10-nodes)
	elif index == 2:
		"""
			        1
			     ╱    ╲
		       2        3
		     ╱  ╲      ╱  ╲
		   4      5   6	   7
		 ╱  ╲	 ╱
		8    9  0	
		"""
		print("Rendering complete binary tree with 10 nodes...")
		t1 = Node(4, Node(8), Node(9))
		t2 = Node(2, t1, Node(5, Node(0)))
		t3 = Node(3, Node(6), Node(7))
		t = Node(1, t2, t3)
		return t

	# perfect binary tree: (15-nodes)
	else:
		"""
			         1
			   	  ╱    ╲			         
			   	 ╱      ╲
		       2          3
		    ╱   ╲        ╱   ╲
		  4      5      6	  7
		 ╱ ╲	╱ ╲    ╱ ╲   ╱  ╲
		8   9  0   1  2   3 4    5
		"""
		print("Rendering perfect binary tree with 15 nodes...")
		t1 = Node(4, Node(8), Node(9))
		t2 = Node(5, Node(0), Node(1))
		t3 = Node(6, Node(2), Node(3))
		t4 = Node(7, Node(4), Node(5))
		t5 = Node(2, t1, t2)
		t6 = Node(3, t3, t4)
		t = Node(1, t5, t6)
		return t

def in_order(tree, inorder_path=None):
	"""
	Function to return the inorder traversal of a binary tree
	:param tree: The node of a binary tree
	:param inorder_path: The path of the inorder traversal
	
	:type tree: Node
	:type inorder_path: List

	:rType: List
	"""

	# Create the path if one doesn't exist
	if inorder_path is None:
		inorder_path = []

	# Recurse if the tree value is not None
	if tree is not None:
		in_order(tree.left, inorder_path)
		inorder_path.append(tree.node)
		in_order(tree.right, inorder_path)

	return inorder_path


def breadth_first_search(root, bfs_path=None):
	"""
	Function to return the breadth first search of a binary tree
	:param root: The root node of the binary tree
	:param bfs_path: The path of the bfs

	:type root: Node
	:type bfs_path: List

	:rType: List
	"""

	# Create the path if it doesn't exist
	if bfs_path is None: 
		bfs_path = []

	# Queue to store the current node's children
	queue = [root]
	while queue != []:
		current = queue.pop(0)
		bfs_path.append(current.node)
		queue.extend(current.get_children())

	return bfs_path


def main():
	"""
	Main function

	:rType: None
	"""
	tree = make_tree(2)
	# print(tree)
	print('Inorder traversal: ', in_order(tree))
	print('Breadth First Search: ', breadth_first_search(tree))


if __name__ == '__main__':
	main()
