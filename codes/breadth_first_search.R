rm(list=ls())
# Breadth first search of a binary tree

# Function to build binary tree
make_tree <- function(index=0) {
  if (index == 1) {
    "
    Binary tree - Full binary tree with 7 nodes
           1
         /   \
        2     3
       /  \
      4    5
     / \
    6   7
    "
	print("Rendering full binary tree with 7 nodes...")
    t1 <- list(node = 6, left = NULL, right = NULL)
    t2 <- list(node = 7, left = NULL, right = NULL)
    t3 <- list(node = 4, left = t1, right = t2)
    t4 <- list(node = 5, left = NULL, right = NULL)
    t5 <- list(node = 2, left = t3, right = t4)
    t6 <- list(node = 3, left = NULL, right = NULL)
    t <- list(node = 1, left = t5, right = t6)
    return (t)
  } 
  else if (index == 2) {
    "
    Binary tree - Complete binary tree with 10 nodes
             1
          /    \
         2       3
       /  \     / \
      4     5  6   7
     / \   /
    8   9 0
    "
	print("Rendering complete binary tree with 10 nodes...")
    t1 <- list(node = 8, left = NULL, right = NULL)
    t2 <- list(node = 9, left = NULL, right = NULL)
    t3 <- list(node = 0, left = NULL, right = NULL)
    t4 <- list(node = 4, left = t1, right = t2)
    t5 <- list(node = 5, left = t3, right = NULL)
    t6 <- list(node = 6, left = NULL, right = NULL)
    t7 <- list(node = 7, left = NULL, right = NULL)
    t8 <- list(node = 2, left = t4, right = t5)
    t9 <- list(node = 3, left = t6, right = t7)
    t <- list(node = 1, left = t8, right = t9)
    return (t)
  } 
  else {
    if (index != 0) {
      print("Index not available. Used 0 by default...")
    }
    "
    Binary tree - Perfect binary tree with 15 nodes
             1
          /     \
         2        3
       /  \       /  \
      4    5     6     7
     /\    /\    /\    /\
    8  9  0  1  2  3  4  5
    "
	print("Rendering perfect binary tree with 15 nodes...")
    t1 <- list(node = 8, left = NULL, right = NULL)
    t2 <- list(node = 9, left = NULL, right = NULL)
    t3 <- list(node = 0, left = NULL, right = NULL)
    t4 <- list(node = 1, left = NULL, right = NULL)
    t5 <- list(node = 2, left = NULL, right = NULL)
    t6 <- list(node = 3, left = NULL, right = NULL)
    t7 <- list(node = 4, left = NULL, right = NULL)
    t8 <- list(node = 5, left = NULL, right = NULL)
    
    t9 <- list(node= 4, left= t1, right= t2)
    t10 <- list(node= 5, left= t3, right= t4)
    t11 <- list(node= 6, left= t5, right= t6)
    t12 <- list(node= 7, left= t7, right= t8)
    t13 <- list(node= 2, left= t9, right= t10)
    t14 <- list(node= 3, left= t11, right= t12)
    t <- list(node= 1, left= t13, right= t14)
    return (t)
  }
}

# Queue implementation
# >>> Basic functions:(push, pop(:= poll), size, isEmpty)
Queue <- setRefClass(Class = "Queue",
                     fields = list(
                       data = "list"),
                     methods = list(
                       size = function() {
                         return(length(data))
                       },
                       push = function(x) {
                         data[[length(data) + 1]] <<- x
                       },
                       pop = function() {
                         if (size() == 0) return (NULL)
                         x <- data[[1]]
                         data[[1]] <<- NULL
                         return (x)
                       },
                       isEmpty = function() {
                         return (length(data) == 0)
                       }
                     ))

# Linked list implementation
LinkedList <-setRefClass(Class = "LinkedList",
                         fields = list(
                           data = "list"),
                         methods = list(
                           size = function() {
                             return (length(size))
                           },
                           append = function(x) {
                             data[[length(data)+1]] <<- x
                           },
                           pop = function() {
                             if(length(data) != 0) {
                               val <- data[[length(data)]]
                               data[length(data)] <<- NULL
                               return (val)
                             }
                           },
                           isEmpty = function () {
                             return (length(data) == 0)
                           },
                           getList = function() {
                             res <- c()
                             for (x in data) {
                               res[length(res) + 1] <- x
                             }
                             return (res)
                           }
                         ))

# Breadth First Search
bfs <- function(tree) {
  bfs_path <- c()
  queue <- Queue$new()
  queue$push(tree)
  
  while (! queue$isEmpty()) {
    current <- queue$pop()
    bfs_path[length(bfs_path) + 1] <- current$node

    if (! is.null(current$left)) {
      queue$push(current$left)
    }
    if (! is.null(current$right)) {
      queue$push(current$right)
    }
  }
  return (bfs_path)
}

# Inorder Traversal helper function
inorder_traversal_util <- function(tree, inorder_result) {
  if (! is.null(tree)) {
    inorder_traversal_util(tree$left, inorder_result)
    inorder_result$append(tree$node)
    inorder_traversal_util(tree$right, inorder_result)
  }
}

# Inorder Traversal
inorder_traversal <- function(tree) {
  inorder_result <- LinkedList$new()
  inorder_traversal_util(tree, inorder_result)
  
  return (inorder_result$getList())
}

tree <- make_tree(1)
inorder_path <- inorder_traversal(tree)
bfs_path <- bfs(tree)
cat("Inorder traversal > ", inorder_path)
cat("Breadth First Search > ", bfs_path)
