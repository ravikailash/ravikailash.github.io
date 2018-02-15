package main;

import (
	"fmt"
	// "reflect"
	// "container/list"
)

// Tree data structure
type Node struct {
	node int
	left *Node
	right *Node
}

func (n Node) getNode() int {
	return n.node
}

func (n Node) getChildren() []*Node {
	_children := []*Node {}
	if n.left != nil {
		_children = append(_children, n.left)
	}
	if n.right != nil {
		_children = append(_children, n.right)
	}
	return _children;
}


func build_tree(args ...int) Node {
	if len(args) == 1 && args[0] == 1 {
		/*
		Full binary tree (#7 nodes)

				 1
			   ╱   ╲
		      2     3
		    ╱  ╲
		   4     5
		 ╱  ╲
		6    7
		*/
		
		fmt.Println("Rendering full binary tree with 7 nodes...")
		t1 := &Node{4, &Node{6, nil, nil}, &Node{7, nil, nil}}
		t2 := &Node{2, t1, &Node{5, nil, nil}}
		t := Node{1, t2, &Node{3, nil, nil}}
		return t
	} else if len(args) == 1 && args[0] == 2{
		/*
		Complete binary tree (#10 nodes)
			      1
			    ╱   ╲
		      2       3
		    ╱   ╲    ╱ ╲
		   4     5  6   7
		 ╱  ╲	╱
		8    9 0
		*/
		
		fmt.Println("Rendering complete binary tree with 10 nodes...")
		t1 := &Node{4, &Node{8, nil, nil}, &Node{9, nil, nil}}
		t2 := &Node{2, t1, &Node{5, &Node{0, nil, nil}, nil}}
		t3 := &Node{3, &Node{6, nil, nil}, &Node{7, nil, nil}}
		t := Node{1, t2, t3}
		return t
	} else {
		if len(args) == 1 && args[0] != 0{
			println("Invalid Index. Used 0 by default...")
		}
		/*
		Perfect binary tree (#15 nodes)
			         1
			   	  ╱     ╲
			   	 ╱       ╲
		       2           3
		    ╱   ╲        ╱   ╲
		  4      5      6	  7
		 ╱ ╲	╱ ╲    ╱ ╲   ╱  ╲
		8   9  0   1  2   3 4    5
		*/
		
		fmt.Println("Rendering complete binary tree with 15 nodes...")
		t1 := &Node{4, &Node{8, nil, nil}, &Node{9, nil, nil}}
		t2 := &Node{5, &Node{0, nil, nil}, &Node{1, nil, nil}}
		t3 := &Node{6, &Node{2, nil, nil}, &Node{3, nil, nil}}
		t4 := &Node{7, &Node{4, nil, nil}, &Node{5, nil, nil}}
		t5 := &Node{2, t1, t2}
		t6 := &Node{3, t3, t4}
		t := Node{1, t5, t6}
		return t
	}
}

func inorder_traversal(t *Node, _path *[]int){
	if (t != nil) {
		inorder_traversal(t.left, _path)
		*_path = append(*_path, t.node)
		inorder_traversal(t.right, _path)
	}
}

func breadth_first_search(root *Node) []int{
	queue := []*Node {root}
	var _path []int

	for len(queue) != 0 {
		current := queue[0]
		queue = queue[1:]
		_path = append(_path, current.node)
		for _, child := range current.getChildren() {
			queue = append(queue, child)
		}
	}
	return _path
}

func main() {
	tree := build_tree(1)
	fmt.Println("Tree >", tree)
	fmt.Println("Tree children >> ", tree.getChildren())

	inorder_path := []int{}
	inorder_traversal(&tree, &inorder_path)
	fmt.Println("Inorder traversal > ", inorder_path)

	bfs_path := breadth_first_search(&tree)
	fmt.Println("Breadth First Search > ", bfs_path)
}
