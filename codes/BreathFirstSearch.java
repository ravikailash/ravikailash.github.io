import java.util.*;


class Node {
	int node;
	Node left, right;

	public Node(int x) {
		this.node = x;
		this.left = this.right = null;
	}
	public Node(int x, Node l, Node r) {
		this.node = x;
		this.left = l;
		this.right = r;
	}
}

public class BreathFirstSearch{

	// Default : perfect binary tree (#15 nodes)
	public Node make_tree() {
		System.out.println("Rendering perfect binary tree with 15 nodes...");
		Node t1 = new Node(4, new Node(8), new Node(9));
		Node t2 = new Node(5, new Node(0), new Node(1));
		Node t3 = new Node(6, new Node(2), new Node(3));
        Node t4 = new Node(7, new Node(4), new Node(5));
        Node t5 = new Node(2, t1, t2);
        Node t6 = new Node(3, t3, t4);
        Node t = new Node(1, t5, t6);
		return t;
	}

	public Node make_tree(int x) {
		// full binary tree(#7 nodes)
		if (x == 1) {
			System.out.println("Rendering full binary tree with 7 nodes...");
			Node t1 = new Node(4, new Node(6), new Node(7));
        	Node t2 = new Node(2, t1, new Node(5));
        	Node t = new Node(1, t2, new Node(3));
        	return t;
		}
		// complete binary tree(#10 nodes)
		else if (x == 2) {
			System.out.println("Rendering complete binary tree with 10 nodes...");
			Node t1 = new Node(4, new Node(8), new Node(9));
        	Node t2 = new Node(2, t1, new Node(5, new Node(0), null));
        	Node t3 = new Node(3, new Node(6), new Node(7));
        	Node t = new Node(1, t2, t3);
        	return t;
		} else {
			return make_tree();
		}
	}

	public LinkedList<Integer> inorder_traversal(Node tree, LinkedList<Integer> _path) {
		if (tree != null) {
			inorder_traversal(tree.left, _path);
			_path.add(tree.node);
			inorder_traversal(tree.right, _path);
		}
		return _path;
	}


	public LinkedList<Integer> breath_first_search(Node root) {
		Queue<Node> queue = new LinkedList<Node>();
		if (root == null) {
			return null;
		}

		LinkedList<Integer> bfs_result = new LinkedList<Integer>();

		queue.add(root);
		while (! queue.isEmpty()) {
			Node current = (Node) queue.remove();
			bfs_result.add(current.node);
			if (current.left != null){
				queue.add(current.left);
			}
			if (current.right != null) {
				queue.add(current.right);
			}
		}
		return bfs_result;
	}

	public static void main(String[] args) {
		BreathFirstSearch bfs = new BreathFirstSearch();
		Node tree = bfs.make_tree(1);

		LinkedList<Integer> inorder_path = new LinkedList<Integer>();
		inorder_path = bfs.inorder_traversal(tree, inorder_path);
		System.out.print("Inorder traversal > ");
		for (Integer x: inorder_path) {
			System.out.print(" " + x);
		}
		System.out.println();

		LinkedList<Integer> bfs_path = new LinkedList<Integer>();
		bfs_path = bfs.breath_first_search(tree);
		System.out.print("Breath First Search traversal > ");
		for (Integer x: bfs_path) {
			System.out.print(x + " ");
		}
		System.out.println();

	}	
}








