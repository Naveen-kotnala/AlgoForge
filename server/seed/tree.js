const tree = [
  // =========================
  // Problem 1: Invert Binary Tree
  // =========================

  {
    title: "Invert Binary Tree",

    description:
      "Given the root of a binary tree, invert the tree, and return its root.",

    difficulty: "Easy",

    tags: ["Tree", "DFS", "Binary Tree"],

    functionName: "invertTree",

    examples: [
      {
        input: "root = [4,2,7,1,3,6,9]",
        output: "[4,7,2,9,6,3,1]",
      },
      {
        input: "root = [2,1,3]",
        output: "[2,3,1]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0,100].
-100 <= Node.val <= 100`,

    starterCode: {
      cpp: `class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {

    }
};`,

      java: `class Solution {
    public TreeNode invertTree(TreeNode root) {

    }
}`,

      python: `class Solution:
    def invertTree(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [4, 2, 7, 1, 3, 6, 9],
        },
        output: [4, 7, 2, 9, 6, 3, 1],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [2, 1, 3],
        },
        output: [2, 3, 1],
      },
      {
        input: {
          root: [],
        },
        output: [],
      },
    ],
  },

  // =========================
  // Problem 2: Maximum Depth of Binary Tree
  // =========================

  {
    title: "Maximum Depth of Binary Tree",

    description: "Given the root of a binary tree, return its maximum depth.",

    difficulty: "Easy",

    tags: ["Tree", "DFS", "BFS", "Binary Tree"],

    functionName: "maxDepth",

    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
      },
      {
        input: "root = [1,null,2]",
        output: "2",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0,10^4].
-100 <= Node.val <= 100`,

    starterCode: {
      cpp: `class Solution {
public:
    int maxDepth(TreeNode* root) {

    }
};`,

      java: `class Solution {
    public int maxDepth(TreeNode root) {

    }
}`,

      python: `class Solution:
    def maxDepth(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [3, 9, 20, null, null, 15, 7],
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1],
        },
        output: 1,
      },
      {
        input: {
          root: [],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 3: Same Tree
  // =========================

  {
    title: "Same Tree",

    description:
      "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",

    difficulty: "Easy",

    tags: ["Tree", "DFS", "Binary Tree"],

    functionName: "isSameTree",

    examples: [
      {
        input: "p = [1,2,3], q = [1,2,3]",
        output: "true",
      },
      {
        input: "p = [1,2], q = [1,null,2]",
        output: "false",
      },
      {
        input: "p = [1,2,1], q = [1,1,2]",
        output: "false",
      },
    ],

    constraints: `The number of nodes in both trees is in the range [0,100].
-10^4 <= Node.val <= 10^4`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {

    }
};`,

      java: `class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {

    }
}`,

      python: `class Solution:
    def isSameTree(self, p, q):
        pass`,
    },

    testCases: [
      {
        input: {
          p: [1, 2, 3],
          q: [1, 2, 3],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          p: [1, 2],
          q: [1, null, 2],
        },
        output: false,
      },
      {
        input: {
          p: [],
          q: [],
        },
        output: true,
      },
    ],
  },

  // =========================
  // Problem 4: Symmetric Tree
  // =========================

  {
    title: "Symmetric Tree",

    description:
      "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",

    difficulty: "Easy",

    tags: ["Tree", "DFS", "BFS", "Binary Tree"],

    functionName: "isSymmetric",

    examples: [
      {
        input: "root = [1,2,2,3,4,4,3]",
        output: "true",
      },
      {
        input: "root = [1,2,2,null,3,null,3]",
        output: "false",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [1,1000].
-100 <= Node.val <= 100`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isSymmetric(TreeNode* root) {

    }
};`,

      java: `class Solution {
    public boolean isSymmetric(TreeNode root) {

    }
}`,

      python: `class Solution:
    def isSymmetric(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [1, 2, 2, 3, 4, 4, 3],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1, 2, 2, null, 3, null, 3],
        },
        output: false,
      },
      {
        input: {
          root: [1],
        },
        output: true,
      },
    ],
  },
  // =========================
  // Problem 5: Binary Tree Level Order Traversal
  // =========================

  {
    title: "Binary Tree Level Order Traversal",

    description:
      "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",

    difficulty: "Medium",

    tags: ["Tree", "BFS", "Binary Tree"],

    functionName: "levelOrder",

    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
      },
      {
        input: "root = [1]",
        output: "[[1]]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0,2000].
-1000 <= Node.val <= 1000`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {

    }
};`,

      java: `class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {

    }
}`,

      python: `class Solution:
    def levelOrder(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [3, 9, 20, null, null, 15, 7],
        },
        output: [[3], [9, 20], [15, 7]],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1],
        },
        output: [[1]],
      },
      {
        input: {
          root: [],
        },
        output: [],
      },
    ],
  },

  // =========================
  // Problem 6: Diameter of Binary Tree
  // =========================

  {
    title: "Diameter of Binary Tree",

    description:
      "Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",

    difficulty: "Easy",

    tags: ["Tree", "DFS", "Binary Tree"],

    functionName: "diameterOfBinaryTree",

    examples: [
      {
        input: "root = [1,2,3,4,5]",
        output: "3",
      },
      {
        input: "root = [1,2]",
        output: "1",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [1,10^4].
-100 <= Node.val <= 100`,

    starterCode: {
      cpp: `class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {

    }
};`,

      java: `class Solution {
    public int diameterOfBinaryTree(TreeNode root) {

    }
}`,

      python: `class Solution:
    def diameterOfBinaryTree(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [1, 2, 3, 4, 5],
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1, 2],
        },
        output: 1,
      },
      {
        input: {
          root: [1],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 7: Balanced Binary Tree
  // =========================

  {
    title: "Balanced Binary Tree",

    description:
      "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is one in which the depth of the two subtrees of every node never differs by more than one.",

    difficulty: "Easy",

    tags: ["Tree", "DFS", "Binary Tree"],

    functionName: "isBalanced",

    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "true",
      },
      {
        input: "root = [1,2,2,3,3,null,null,4,4]",
        output: "false",
      },
      {
        input: "root = []",
        output: "true",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0,5000].
-10^4 <= Node.val <= 10^4`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isBalanced(TreeNode* root) {

    }
};`,

      java: `class Solution {
    public boolean isBalanced(TreeNode root) {

    }
}`,

      python: `class Solution:
    def isBalanced(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [3, 9, 20, null, null, 15, 7],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1, 2, 2, 3, 3, null, null, 4, 4],
        },
        output: false,
      },
      {
        input: {
          root: [],
        },
        output: true,
      },
    ],
  },

  // =========================
  // Problem 8: Lowest Common Ancestor of BST
  // =========================

  {
    title: "Lowest Common Ancestor of BST",

    description:
      "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",

    difficulty: "Medium",

    tags: ["Tree", "Binary Search Tree", "DFS"],

    functionName: "lowestCommonAncestor",

    examples: [
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        output: "6",
      },
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        output: "2",
      },
      {
        input: "root = [2,1], p = 2, q = 1",
        output: "2",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [2,10^5].
-10^9 <= Node.val <= 10^9
p != q
Both p and q will exist in the BST.`,

    starterCode: {
      cpp: `class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {

    }
};`,

      java: `class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {

    }
}`,

      python: `class Solution:
    def lowestCommonAncestor(self, root, p, q):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
          p: 2,
          q: 8,
        },
        output: 6,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
          p: 2,
          q: 4,
        },
        output: 2,
      },
      {
        input: {
          root: [2, 1],
          p: 2,
          q: 1,
        },
        output: 2,
      },
    ],
  },
  // =========================
  // Problem 9: Lowest Common Ancestor of Binary Tree
  // =========================

  {
    title: "Lowest Common Ancestor of Binary Tree",

    description:
      "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. According to the definition of LCA, it is the lowest node in the tree that has both p and q as descendants (where a node can be a descendant of itself).",

    difficulty: "Medium",

    tags: ["Tree", "DFS", "Binary Tree"],

    functionName: "lowestCommonAncestor",

    examples: [
      {
        input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        output: "3",
      },
      {
        input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
        output: "5",
      },
      {
        input: "root = [1,2], p = 1, q = 2",
        output: "1",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [2,10^5].
-10^9 <= Node.val <= 10^9
All Node.val are unique.
p != q
Both p and q will exist in the tree.`,

    starterCode: {
      cpp: `class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {

    }
};`,

      java: `class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {

    }
}`,

      python: `class Solution:
    def lowestCommonAncestor(self, root, p, q):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
          p: 5,
          q: 1,
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
          p: 5,
          q: 4,
        },
        output: 5,
      },
      {
        input: {
          root: [1, 2],
          p: 1,
          q: 2,
        },
        output: 1,
      },
    ],
  },

  // =========================
  // Problem 10: Binary Tree Right Side View
  // =========================

  {
    title: "Binary Tree Right Side View",

    description:
      "Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes you can see ordered from top to bottom.",

    difficulty: "Medium",

    tags: ["Tree", "BFS", "DFS", "Binary Tree"],

    functionName: "rightSideView",

    examples: [
      {
        input: "root = [1,2,3,null,5,null,4]",
        output: "[1,3,4]",
      },
      {
        input: "root = [1,null,3]",
        output: "[1,3]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0,100].
-100 <= Node.val <= 100`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {

    }
};`,

      java: `class Solution {
    public List<Integer> rightSideView(TreeNode root) {

    }
}`,

      python: `class Solution:
    def rightSideView(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [1, 2, 3, null, 5, null, 4],
        },
        output: [1, 3, 4],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1, null, 3],
        },
        output: [1, 3],
      },
      {
        input: {
          root: [],
        },
        output: [],
      },
    ],
  },
  // =========================
  // Problem 11: Path Sum
  // =========================

  {
    title: "Path Sum",

    description:
      "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.",

    difficulty: "Easy",

    tags: ["Tree", "DFS", "Binary Tree"],

    functionName: "hasPathSum",

    examples: [
      {
        input:
          "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22",
        output: "true",
      },
      {
        input: "root = [1,2,3], targetSum = 5",
        output: "false",
      },
      {
        input: "root = [], targetSum = 0",
        output: "false",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0,5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000`,

    starterCode: {
      cpp: `class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {

    }
};`,

      java: `class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {

    }
}`,

      python: `class Solution:
    def hasPathSum(self, root, targetSum):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
          targetSum: 22,
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1, 2, 3],
          targetSum: 5,
        },
        output: false,
      },
      {
        input: {
          root: [],
          targetSum: 0,
        },
        output: false,
      },
    ],
  },

  // =========================
  // Problem 12: Binary Tree Maximum Path Sum
  // =========================

  {
    title: "Binary Tree Maximum Path Sum",

    description:
      "A path in a binary tree is any sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can appear at most once in the sequence. The path does not need to pass through the root. Return the maximum path sum of any non-empty path.",

    difficulty: "Hard",

    tags: ["Tree", "DFS", "Dynamic Programming", "Binary Tree"],

    functionName: "maxPathSum",

    examples: [
      {
        input: "root = [1,2,3]",
        output: "6",
      },
      {
        input: "root = [-10,9,20,null,null,15,7]",
        output: "42",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [1,3 * 10^4].
-1000 <= Node.val <= 1000`,

    starterCode: {
      cpp: `class Solution {
public:
    int maxPathSum(TreeNode* root) {

    }
};`,

      java: `class Solution {
    public int maxPathSum(TreeNode root) {

    }
}`,

      python: `class Solution:
    def maxPathSum(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [1, 2, 3],
        },
        output: 6,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [-10, 9, 20, null, null, 15, 7],
        },
        output: 42,
      },
      {
        input: {
          root: [2, -1],
        },
        output: 2,
      },
    ],
  },
  // =========================
  // Problem 13: Construct Binary Tree from Preorder and Inorder Traversal
  // =========================

  {
    title: "Construct Binary Tree from Preorder and Inorder Traversal",

    description:
      "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",

    difficulty: "Medium",

    tags: ["Tree", "DFS", "Binary Tree", "Recursion"],

    functionName: "buildTree",

    examples: [
      {
        input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        output: "[3,9,20,null,null,15,7]",
      },
      {
        input: "preorder = [-1], inorder = [-1]",
        output: "[-1]",
      },
    ],

    constraints: `1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.`,

    starterCode: {
      cpp: `class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {

    }
};`,

      java: `class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {

    }
}`,

      python: `class Solution:
    def buildTree(self, preorder, inorder):
        pass`,
    },

    testCases: [
      {
        input: {
          preorder: [3, 9, 20, 15, 7],
          inorder: [9, 3, 15, 20, 7],
        },
        output: [3, 9, 20, null, null, 15, 7],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          preorder: [-1],
          inorder: [-1],
        },
        output: [-1],
      },
      {
        input: {
          preorder: [1, 2],
          inorder: [2, 1],
        },
        output: [1, 2],
      },
    ],
  },

  // =========================
  // Problem 14: Serialize and Deserialize Binary Tree
  // =========================

  {
    title: "Serialize and Deserialize Binary Tree",

    description:
      "Design an algorithm to serialize and deserialize a binary tree. Serialization is the process of converting a tree into a string, and deserialization is the process of converting the string back into the original tree.",

    difficulty: "Hard",

    tags: ["Tree", "DFS", "BFS", "Binary Tree"],

    functionName: "Codec",

    examples: [
      {
        input: "root = [1,2,3,null,null,4,5]",
        output: 'serialize(root) = "1,2,null,null,3,4,null,null,5,null,null"',
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0,10^4].
-1000 <= Node.val <= 1000`,

    starterCode: {
      cpp: `class Codec {
public:

    string serialize(TreeNode* root) {

    }

    TreeNode* deserialize(string data) {

    }
};`,

      java: `public class Codec {

    public String serialize(TreeNode root) {

    }

    public TreeNode deserialize(String data) {

    }
}`,

      python: `class Codec:

    def serialize(self, root):
        pass

    def deserialize(self, data):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [1, 2, 3, null, null, 4, 5],
        },
        output: [1, 2, 3, null, null, 4, 5],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [],
        },
        output: [],
      },
      {
        input: {
          root: [1],
        },
        output: [1],
      },
    ],
  },
  // =========================
  // Problem 15: Validate Binary Search Tree
  // =========================

  {
    title: "Validate Binary Search Tree",

    description:
      "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree contains only nodes with keys greater than the node's key. Both left and right subtrees must also be binary search trees.",

    difficulty: "Medium",

    tags: ["Tree", "DFS", "Binary Search Tree"],

    functionName: "isValidBST",

    examples: [
      {
        input: "root = [2,1,3]",
        output: "true",
      },
      {
        input: "root = [5,1,4,null,null,3,6]",
        output: "false",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [1,10^4].
-2^31 <= Node.val <= 2^31 - 1`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isValidBST(TreeNode* root) {

    }
};`,

      java: `class Solution {
    public boolean isValidBST(TreeNode root) {

    }
}`,

      python: `class Solution:
    def isValidBST(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [2, 1, 3],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [5, 1, 4, null, null, 3, 6],
        },
        output: false,
      },
      {
        input: {
          root: [1],
        },
        output: true,
      },
    ],
  },

  {
    title: "Binary Tree Zigzag Level Order Traversal",

    description:
      "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. The first level is traversed from left to right, the next level from right to left, and so on for each level.",

    difficulty: "Medium",

    tags: ["Tree", "BFS", "Binary Tree", "Queue"],

    functionName: "zigzagLevelOrder",

    returnType: {
      cpp: "vector<vector<int>>",
      java: "List<List<Integer>>",
      python: "List[List[int]]",
    },

    parameters: {
      cpp: [{ name: "root", type: "TreeNode*" }],
      java: [{ name: "root", type: "TreeNode" }],
      python: [{ name: "root", type: "TreeNode" }],
    },

    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[20,9],[15,7]]",
        explanation:
          "The first level is traversed left to right, the second right to left, and the third left to right.",
      },
      {
        input: "root = [1]",
        output: "[[1]]",
        explanation: "The tree contains only one node.",
      },
      {
        input: "root = []",
        output: "[]",
        explanation: "The tree is empty, so the traversal is empty.",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        
    }
};`,

      java: `class Solution {
public:
    List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        
    }
}`,

      python: `class Solution:
    def zigzagLevelOrder(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [3, 9, 20, null, null, 15, 7],
        },
        output: [[3], [20, 9], [15, 7]],
      },

      {
        input: {
          root: [1],
        },
        output: [[1]],
      },

      {
        input: {
          root: [],
        },
        output: [],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1, 2, 3, 4, 5, 6, 7],
        },
        output: [[1], [3, 2], [4, 5, 6, 7]],
      },

      {
        input: {
          root: [1, 2, null, 3, null, 4],
        },
        output: [[1], [2], [3], [4]],
      },

      {
        input: {
          root: [10, 5, 15, 2, 7, 12, 20],
        },
        output: [[10], [15, 5], [2, 7, 12, 20]],
      },

      {
        input: {
          root: [1, null, 2, null, 3],
        },
        output: [[1], [2], [3]],
      },

      {
        input: {
          root: [5, 3, 8],
        },
        output: [[5], [8, 3]],
      },
    ],
  },

  {
    title: "Kth Smallest Element in a BST",

    description:
      "Given the root of a binary search tree and an integer k, return the kth smallest value among all the nodes in the tree. The kth smallest value is the value that would appear in the kth position in the sorted order of all node values.",

    difficulty: "Medium",

    tags: ["Tree", "Binary Search Tree", "DFS", "Stack"],

    functionName: "kthSmallest",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [
        { name: "root", type: "TreeNode*" },
        { name: "k", type: "int" },
      ],
      java: [
        { name: "root", type: "TreeNode" },
        { name: "k", type: "int" },
      ],
      python: [
        { name: "root", type: "TreeNode" },
        { name: "k", type: "int" },
      ],
    },

    examples: [
      {
        input: "root = [3,1,4,null,2], k = 1",
        output: "1",
        explanation:
          "The values in sorted order are [1,2,3,4], so the 1st smallest value is 1.",
      },
      {
        input: "root = [5,3,6,2,4,null,null,1], k = 3",
        output: "3",
        explanation:
          "The values in sorted order are [1,2,3,4,5,6], so the 3rd smallest value is 3.",
      },
      {
        input: "root = [2,1,3], k = 2",
        output: "2",
        explanation:
          "The sorted values are [1,2,3], so the 2nd smallest value is 2.",
      },
    ],

    constraints: `The number of nodes in the tree is n.
1 <= k <= n <= 10^4
0 <= Node.val <= 10^4
All node values are unique.`,

    starterCode: {
      cpp: `class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        
    }
};`,

      java: `class Solution {
public:
    int kthSmallest(TreeNode root, int k) {
        
    }
}`,

      python: `class Solution:
    def kthSmallest(self, root, k):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [3, 1, 4, null, 2],
          k: 1,
        },
        output: 1,
      },

      {
        input: {
          root: [5, 3, 6, 2, 4, null, null, 1],
          k: 3,
        },
        output: 3,
      },

      {
        input: {
          root: [2, 1, 3],
          k: 2,
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1],
          k: 1,
        },
        output: 1,
      },

      {
        input: {
          root: [4, 2, 6, 1, 3, 5, 7],
          k: 5,
        },
        output: 5,
      },

      {
        input: {
          root: [8, 4, 12, 2, 6, 10, 14],
          k: 4,
        },
        output: 8,
      },

      {
        input: {
          root: [10, 5, 15, 3, 7, 12, 20],
          k: 6,
        },
        output: 15,
      },

      {
        input: {
          root: [7, 3, 9, 1, 5, 8, 10],
          k: 2,
        },
        output: 3,
      },
    ],
  },

  {
    title: "Binary Tree Vertical Order Traversal",

    description:
      "Given the root of a binary tree, return the vertical order traversal of its nodes' values. For each vertical column, nodes are listed from top to bottom. Columns are ordered from left to right.",

    difficulty: "Medium",

    tags: ["Tree", "BFS", "Hash Table", "Binary Tree"],

    functionName: "verticalOrder",

    returnType: {
      cpp: "vector<vector<int>>",
      java: "List<List<Integer>>",
      python: "List[List[int]]",
    },

    parameters: {
      cpp: [{ name: "root", type: "TreeNode*" }],
      java: [{ name: "root", type: "TreeNode" }],
      python: [{ name: "root", type: "TreeNode" }],
    },

    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[9],[3,15],[20],[7]]",
        explanation:
          "Nodes are grouped by their vertical column. The leftmost column contains 9, followed by the column containing 3 and 15, then 20, and finally 7.",
      },
      {
        input: "root = [3,9,8,4,0,1,7]",
        output: "[[4],[9],[3,0,1],[8],[7]]",
        explanation:
          "Nodes having the same horizontal distance from the root belong to the same vertical column.",
      },
      {
        input: "root = [1]",
        output: "[[1]]",
        explanation: "A single-node tree has only one vertical column.",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0, 1000].
-1000 <= Node.val <= 1000`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> verticalOrder(TreeNode* root) {
        
    }
};`,

      java: `class Solution {
public:
    List<List<Integer>> verticalOrder(TreeNode root) {
        
    }
}`,

      python: `class Solution:
    def verticalOrder(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [3, 9, 20, null, null, 15, 7],
        },
        output: [[9], [3, 15], [20], [7]],
      },

      {
        input: {
          root: [3, 9, 8, 4, 0, 1, 7],
        },
        output: [[4], [9], [3, 0, 1], [8], [7]],
      },

      {
        input: {
          root: [1],
        },
        output: [[1]],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [],
        },
        output: [],
      },

      {
        input: {
          root: [1, 2, 3],
        },
        output: [[2], [1], [3]],
      },

      {
        input: {
          root: [1, 2, 3, 4, 5, 6, 7],
        },
        output: [[4], [2], [1, 5, 6], [3], [7]],
      },

      {
        input: {
          root: [10, 5, 15, 2, 7, 12, 20],
        },
        output: [[2], [5], [10, 7, 12], [15], [20]],
      },

      {
        input: {
          root: [1, null, 2, null, 3, null, 4],
        },
        output: [[1], [2], [3], [4]],
      },
    ],
  },

  {
    title: "Flatten Binary Tree to Linked List",

    description:
      "Given the root of a binary tree, flatten the tree into a linked list in-place. The linked list should use the same TreeNode nodes, where the right child points to the next node and the left child is always null. The nodes should follow the same order as a preorder traversal of the binary tree.",

    difficulty: "Medium",

    tags: ["Tree", "DFS", "Binary Tree", "Linked List", "Stack"],

    functionName: "flatten",

    returnType: {
      cpp: "void",
      java: "void",
      python: "None",
    },

    parameters: {
      cpp: [{ name: "root", type: "TreeNode*" }],
      java: [{ name: "root", type: "TreeNode" }],
      python: [{ name: "root", type: "TreeNode" }],
    },

    examples: [
      {
        input: "root = [1,2,5,3,4,null,6]",
        output: "[1,null,2,null,3,null,4,null,5,null,6]",
        explanation:
          "The preorder traversal is [1,2,3,4,5,6], so the tree is flattened into that order.",
      },
      {
        input: "root = []",
        output: "[]",
        explanation: "The tree is empty, so there is nothing to flatten.",
      },
      {
        input: "root = [0]",
        output: "[0]",
        explanation: "A single-node tree is already a flattened linked list.",
      },
    ],

    constraints: `The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100`,

    starterCode: {
      cpp: `class Solution {
public:
    void flatten(TreeNode* root) {
        
    }
};`,

      java: `class Solution {
public:
    void flatten(TreeNode root) {
        
    }
}`,

      python: `class Solution:
    def flatten(self, root):
        pass`,
    },

    testCases: [
      {
        input: {
          root: [1, 2, 5, 3, 4, null, 6],
        },
        output: [1, null, 2, null, 3, null, 4, null, 5, null, 6],
      },

      {
        input: {
          root: [],
        },
        output: [],
      },

      {
        input: {
          root: [0],
        },
        output: [0],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          root: [1, 2, 3],
        },
        output: [1, null, 2, null, 3],
      },

      {
        input: {
          root: [1, 2, null, 3, null, 4],
        },
        output: [1, null, 2, null, 3, null, 4],
      },

      {
        input: {
          root: [1, null, 2, null, 3],
        },
        output: [1, null, 2, null, 3],
      },

      {
        input: {
          root: [10, 5, 15, 2, 7, 12, 20],
        },
        output: [10, null, 5, null, 2, null, 7, null, 15, null, 12, null, 20],
      },

      {
        input: {
          root: [1, 2, 5, 3, 4, 6, 7],
        },
        output: [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7],
      },
    ],
  },
];

export default tree;
