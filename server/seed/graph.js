const graph = [
  // =========================
  // Problem 1: Number of Islands
  // =========================

  {
    title: "Number of Islands",

    description:
      "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",

    difficulty: "Medium",

    tags: ["Graph", "DFS", "BFS", "Matrix"],

    functionName: "numIslands",

    examples: [
      {
        input:
          'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
      {
        input:
          'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
      },
    ],

    constraints: `
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
`,

    starterCode: {
      cpp: `class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {

    }
};`,

      java: `class Solution {
    public int numIslands(char[][] grid) {

    }
}`,

      python: `class Solution:
    def numIslands(self, grid):
        pass`,
    },

    testCases: [
      {
        input: {
          grid: [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
          ],
        },
        output: 1,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          grid: [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"],
          ],
        },
        output: 3,
      },
      {
        input: {
          grid: [["0"]],
        },
        output: 0,
      },
    ],
  },

  // =========================
  // Problem 2: Clone Graph
  // =========================

  {
    title: "Clone Graph",

    description:
      "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",

    difficulty: "Medium",

    tags: ["Graph", "DFS", "BFS", "Hash Map"],

    functionName: "cloneGraph",

    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]",
      },
      {
        input: "adjList = [[]]",
        output: "[[]]",
      },
    ],

    constraints: `
The number of nodes in the graph is in the range [0,100].
1 <= Node.val <= 100
Each node has unique values.
The graph is connected.
`,

    starterCode: {
      cpp: `class Solution {
public:
    Node* cloneGraph(Node* node) {

    }
};`,

      java: `class Solution {
    public Node cloneGraph(Node node) {

    }
}`,

      python: `class Solution:
    def cloneGraph(self, node):
        pass`,
    },

    testCases: [
      {
        input: {
          adjList: [
            [2, 4],
            [1, 3],
            [2, 4],
            [1, 3],
          ],
        },
        output: [
          [2, 4],
          [1, 3],
          [2, 4],
          [1, 3],
        ],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          adjList: [[]],
        },
        output: [[]],
      },
      {
        input: {
          adjList: [],
        },
        output: [],
      },
    ],
  },
  // =========================
  // Problem 3: Max Area of Island
  // =========================

  {
    title: "Max Area of Island",

    description:
      "Given an m x n binary grid grid, return the maximum area of an island in grid. An island is a group of connected 1s (land) connected horizontally or vertically.",

    difficulty: "Medium",

    tags: ["Graph", "DFS", "BFS", "Matrix"],

    functionName: "maxAreaOfIsland",

    examples: [
      {
        input:
          "grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,1,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,0,0,0,0,1,1,0,0],[0,1,1,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0]]",
        output: "6",
      },
      {
        input: "grid = [[0,0,0,0,0,0,0,0]]",
        output: "0",
      },
    ],

    constraints: `
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is 0 or 1.
`,

    starterCode: {
      cpp: `class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {

    }
};`,

      java: `class Solution {
    public int maxAreaOfIsland(int[][] grid) {

    }
}`,

      python: `class Solution:
    def maxAreaOfIsland(self, grid):
        pass`,
    },

    testCases: [
      {
        input: {
          grid: [
            [0, 0, 1],
            [1, 1, 1],
            [0, 1, 0],
          ],
        },
        output: 5,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          grid: [
            [0, 0],
            [0, 0],
          ],
        },
        output: 0,
      },
      {
        input: {
          grid: [
            [1, 1],
            [1, 1],
          ],
        },
        output: 4,
      },
    ],
  },

  // =========================
  // Problem 4: Flood Fill
  // =========================

  {
    title: "Flood Fill",

    description:
      "An image is represented by an m x n integer grid image where image[i][j] represents the pixel value. Given a starting pixel and a new color, perform a flood fill operation by changing all connected pixels with the same color.",

    difficulty: "Easy",

    tags: ["Graph", "DFS", "BFS", "Matrix"],

    functionName: "floodFill",

    examples: [
      {
        input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
        output: "[[2,2,2],[2,2,0],[2,0,1]]",
      },
      {
        input: "image = [[0,0,0]], sr = 0, sc = 0, color = 0",
        output: "[[0,0,0]]",
      },
    ],

    constraints: `
m == image.length
n == image[i].length
1 <= m,n <= 50
0 <= image[i][j], color < 2^16
0 <= sr < m
0 <= sc < n
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {

    }
};`,

      java: `class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {

    }
}`,

      python: `class Solution:
    def floodFill(self, image, sr, sc, color):
        pass`,
    },

    testCases: [
      {
        input: {
          image: [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
          ],
          sr: 1,
          sc: 1,
          color: 2,
        },
        output: [
          [2, 2, 2],
          [2, 2, 0],
          [2, 0, 1],
        ],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          image: [[0, 0, 0]],
          sr: 0,
          sc: 0,
          color: 0,
        },
        output: [[0, 0, 0]],
      },
      {
        input: {
          image: [
            [1, 1, 1],
            [1, 1, 1],
          ],
          sr: 0,
          sc: 0,
          color: 2,
        },
        output: [
          [2, 2, 2],
          [2, 2, 2],
        ],
      },
    ],
  },
  // =========================
  // Problem 5: Course Schedule
  // =========================

  {
    title: "Course Schedule",

    description:
      "There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Given an array prerequisites where prerequisites[i] = [a, b] means you must take course b before course a. Return true if you can finish all courses.",

    difficulty: "Medium",

    tags: ["Graph", "BFS", "DFS", "Topological Sort"],

    functionName: "canFinish",

    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
      },
    ],

    constraints: `
1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All pairs in prerequisites are unique.
`,

    starterCode: {
      cpp: `class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {

    }
};`,

      java: `class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {

    }
}`,

      python: `class Solution:
    def canFinish(self, numCourses, prerequisites):
        pass`,
    },

    testCases: [
      {
        input: {
          numCourses: 2,
          prerequisites: [[1, 0]],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          numCourses: 2,
          prerequisites: [
            [1, 0],
            [0, 1],
          ],
        },
        output: false,
      },
      {
        input: {
          numCourses: 3,
          prerequisites: [
            [1, 0],
            [2, 1],
          ],
        },
        output: true,
      },
    ],
  },

  // =========================
  // Problem 6: Course Schedule II
  // =========================

  {
    title: "Course Schedule II",

    description:
      "Given numCourses and prerequisites, return the ordering of courses you should take to finish all courses. If there are multiple answers, return any of them. If it is impossible, return an empty array.",

    difficulty: "Medium",

    tags: ["Graph", "BFS", "DFS", "Topological Sort"],

    functionName: "findOrder",

    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "[0,1]",
      },
      {
        input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        output: "[0,2,1,3]",
      },
    ],

    constraints: `
1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {

    }
};`,

      java: `class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {

    }
}`,

      python: `class Solution:
    def findOrder(self, numCourses, prerequisites):
        pass`,
    },

    testCases: [
      {
        input: {
          numCourses: 2,
          prerequisites: [[1, 0]],
        },
        output: [0, 1],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          numCourses: 2,
          prerequisites: [
            [1, 0],
            [0, 1],
          ],
        },
        output: [],
      },
      {
        input: {
          numCourses: 1,
          prerequisites: [],
        },
        output: [0],
      },
    ],
  },
  // =========================
  // Problem 7: Pacific Atlantic Water Flow
  // =========================

  {
    title: "Pacific Atlantic Water Flow",

    description:
      "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the left and top edges, and the Atlantic Ocean touches the right and bottom edges. Return a list of grid coordinates where water can flow to both oceans. Water can flow from a cell to another cell with the same or lower height.",

    difficulty: "Medium",

    tags: ["Graph", "DFS", "BFS", "Matrix"],

    functionName: "pacificAtlantic",

    examples: [
      {
        input:
          "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
      },
      {
        input: "heights = [[1]]",
        output: "[[0,0]]",
      },
    ],

    constraints: `
m == heights.length
n == heights[i].length
1 <= m,n <= 200
0 <= heights[i][j] <= 10^5
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {

    }
};`,

      java: `class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {

    }
}`,

      python: `class Solution:
    def pacificAtlantic(self, heights):
        pass`,
    },

    testCases: [
      {
        input: {
          heights: [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4],
          ],
        },
        output: [
          [0, 4],
          [1, 3],
          [1, 4],
          [2, 2],
          [3, 0],
          [3, 1],
          [4, 0],
        ],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          heights: [[1]],
        },
        output: [[0, 0]],
      },
      {
        input: {
          heights: [
            [1, 2],
            [4, 3],
          ],
        },
        output: [
          [0, 1],
          [1, 0],
          [1, 1],
        ],
      },
    ],
  },

  // =========================
  // Problem 8: Rotting Oranges
  // =========================

  {
    title: "Rotting Oranges",

    description:
      "You are given an m x n grid where each cell has one of three values: 0 representing empty cells, 1 representing fresh oranges, and 2 representing rotten oranges. Every minute, any fresh orange adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no fresh oranges remain. If impossible, return -1.",

    difficulty: "Medium",

    tags: ["Graph", "BFS", "Matrix"],

    functionName: "orangesRotting",

    examples: [
      {
        input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        output: "4",
      },
      {
        input: "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        output: "-1",
      },
      {
        input: "grid = [[0,2]]",
        output: "0",
      },
    ],

    constraints: `
m == grid.length
n == grid[i].length
1 <= m,n <= 10
grid[i][j] is 0, 1, or 2.
`,

    starterCode: {
      cpp: `class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {

    }
};`,

      java: `class Solution {
    public int orangesRotting(int[][] grid) {

    }
}`,

      python: `class Solution:
    def orangesRotting(self, grid):
        pass`,
    },

    testCases: [
      {
        input: {
          grid: [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
          ],
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          grid: [
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1],
          ],
        },
        output: -1,
      },
      {
        input: {
          grid: [[0, 2]],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 9: Word Ladder
  // =========================

  {
    title: "Word Ladder",

    description:
      "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words where each adjacent pair differs by exactly one letter. Return the number of words in the shortest transformation sequence, or 0 if no such sequence exists.",

    difficulty: "Hard",

    tags: ["Graph", "BFS", "Hash Table"],

    functionName: "ladderLength",

    examples: [
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
      },
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: "0",
      },
    ],

    constraints: `
1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList consist of lowercase English letters.
`,

    starterCode: {
      cpp: `class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {

    }
};`,

      java: `class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {

    }
}`,

      python: `class Solution:
    def ladderLength(self, beginWord, endWord, wordList):
        pass`,
    },

    testCases: [
      {
        input: {
          beginWord: "hit",
          endWord: "cog",
          wordList: ["hot", "dot", "dog", "lot", "log", "cog"],
        },
        output: 5,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          beginWord: "hit",
          endWord: "cog",
          wordList: ["hot", "dot", "dog", "lot", "log"],
        },
        output: 0,
      },
      {
        input: {
          beginWord: "a",
          endWord: "c",
          wordList: ["a", "b", "c"],
        },
        output: 2,
      },
    ],
  },

  // =========================
  // Problem 10: Surrounded Regions
  // =========================

  {
    title: "Surrounded Regions",

    description:
      "Given an m x n matrix board containing 'X' and 'O', capture all regions that are surrounded by 'X'. A region is captured by replacing all surrounded 'O's with 'X's. Any 'O' connected to the border cannot be captured.",

    difficulty: "Medium",

    tags: ["Graph", "DFS", "BFS", "Matrix"],

    functionName: "solve",

    examples: [
      {
        input:
          'board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]',
        output:
          '[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]',
      },
      {
        input: 'board = [["X"]]',
        output: '[["X"]]',
      },
    ],

    constraints: `
m == board.length
n == board[i].length
1 <= m,n <= 200
board[i][j] is 'X' or 'O'.
`,

    starterCode: {
      cpp: `class Solution {
public:
    void solve(vector<vector<char>>& board) {

    }
};`,

      java: `class Solution {
    public void solve(char[][] board) {

    }
}`,

      python: `class Solution:
    def solve(self, board):
        pass`,
    },

    testCases: [
      {
        input: {
          board: [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "O", "X"],
            ["X", "O", "X", "X"],
          ],
        },
        output: [
          ["X", "X", "X", "X"],
          ["X", "X", "X", "X"],
          ["X", "X", "X", "X"],
          ["X", "O", "X", "X"],
        ],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          board: [
            ["X", "O", "X"],
            ["O", "X", "O"],
            ["X", "O", "X"],
          ],
        },
        output: [
          ["X", "O", "X"],
          ["O", "X", "O"],
          ["X", "O", "X"],
        ],
      },
      {
        input: {
          board: [["O"]],
        },
        output: [["O"]],
      },
    ],
  },
  // =========================
  // Problem 11: Graph Valid Tree
  // =========================

  {
    title: "Graph Valid Tree",

    description:
      "Given n nodes labeled from 0 to n-1 and a list of undirected edges, determine if these edges make up a valid tree. A valid tree must have exactly n-1 edges and contain no cycles.",

    difficulty: "Medium",

    tags: ["Graph", "DFS", "BFS", "Union Find"],

    functionName: "validTree",

    examples: [
      {
        input: "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
        output: "true",
      },
      {
        input: "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
        output: "false",
      },
    ],

    constraints: `
1 <= n <= 2000
0 <= edges.length <= 5000
edges[i].length == 2
0 <= ai, bi < n
There are no duplicate edges.
`,

    starterCode: {
      cpp: `class Solution {
public:
    bool validTree(int n, vector<vector<int>>& edges) {

    }
};`,

      java: `class Solution {
    public boolean validTree(int n, int[][] edges) {

    }
}`,

      python: `class Solution:
    def validTree(self, n, edges):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 5,
          edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
          ],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 5,
          edges: [
            [0, 1],
            [1, 2],
            [2, 3],
            [1, 3],
            [1, 4],
          ],
        },
        output: false,
      },
      {
        input: {
          n: 1,
          edges: [],
        },
        output: true,
      },
    ],
  },

  // =========================
  // Problem 12: Network Delay Time
  // =========================

  {
    title: "Network Delay Time",

    description:
      "You are given a network of n nodes represented by directed edges times, where times[i] = [ui, vi, wi] means a signal takes wi time to travel from node ui to node vi. Send a signal from node k. Return the minimum time it takes for all nodes to receive the signal. If impossible, return -1.",

    difficulty: "Medium",

    tags: ["Graph", "Dijkstra", "Priority Queue"],

    functionName: "networkDelayTime",

    examples: [
      {
        input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        output: "2",
      },
      {
        input: "times = [[1,2,1]], n = 2, k = 1",
        output: "1",
      },
    ],

    constraints: `
1 <= k <= n <= 100
1 <= times.length <= 6000
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
`,

    starterCode: {
      cpp: `class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {

    }
};`,

      java: `class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {

    }
}`,

      python: `class Solution:
    def networkDelayTime(self, times, n, k):
        pass`,
    },

    testCases: [
      {
        input: {
          times: [
            [2, 1, 1],
            [2, 3, 1],
            [3, 4, 1],
          ],
          n: 4,
          k: 2,
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          times: [[1, 2, 1]],
          n: 2,
          k: 1,
        },
        output: 1,
      },
      {
        input: {
          times: [[1, 2, 1]],
          n: 2,
          k: 2,
        },
        output: -1,
      },
    ],
  },
  // =========================
  // Problem 13: Cheapest Flights Within K Stops
  // =========================

  {
    title: "Cheapest Flights Within K Stops",

    description:
      "There are n cities connected by some number of flights. You are given flights where flights[i] = [fromi, toi, pricei]. Find the cheapest price from src to dst with at most k stops. If no such route exists, return -1.",

    difficulty: "Medium",

    tags: ["Graph", "BFS", "Bellman Ford", "Dynamic Programming"],

    functionName: "findCheapestPrice",

    examples: [
      {
        input:
          "n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1",
        output: "700",
      },
      {
        input:
          "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
        output: "200",
      },
    ],

    constraints: `
1 <= n <= 100
0 <= flights.length <= 10^4
flights[i].length == 3
0 <= fromi, toi < n
1 <= pricei <= 10^4
0 <= k <= n - 1
`,

    starterCode: {
      cpp: `class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {

    }
};`,

      java: `class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {

    }
}`,

      python: `class Solution:
    def findCheapestPrice(self, n, flights, src, dst, k):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 3,
          flights: [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500],
          ],
          src: 0,
          dst: 2,
          k: 1,
        },
        output: 200,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 3,
          flights: [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500],
          ],
          src: 0,
          dst: 2,
          k: 0,
        },
        output: 500,
      },
      {
        input: {
          n: 2,
          flights: [[0, 1, 100]],
          src: 1,
          dst: 0,
          k: 1,
        },
        output: -1,
      },
    ],
  },

  // =========================
  // Problem 14: Accounts Merge
  // =========================

  {
    title: "Accounts Merge",

    description:
      "Given a list of accounts where each account contains a name followed by email addresses, merge accounts that belong to the same person. Two accounts belong to the same person if they share at least one common email.",

    difficulty: "Medium",

    tags: ["Graph", "DFS", "Union Find", "Hash Map"],

    functionName: "accountsMerge",

    examples: [
      {
        input:
          'accounts = [["John","johnsmith@mail.com","john00@mail.com"],["John","johnnybravo@mail.com"],["John","johnsmith@mail.com","john_newyork@mail.com"],["Mary","mary@mail.com"]]',
        output:
          '[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["John","johnnybravo@mail.com"],["Mary","mary@mail.com"]]',
      },
    ],

    constraints: `
1 <= accounts.length <= 1000
2 <= accounts[i].length <= 10
1 <= accounts[i][j].length <= 30
accounts[i][j] consists of lowercase English letters, digits, and '@'.
All emails are unique.
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {

    }
};`,

      java: `class Solution {
    public List<List<String>> accountsMerge(List<List<String>> accounts) {

    }
}`,

      python: `class Solution:
    def accountsMerge(self, accounts):
        pass`,
    },

    testCases: [
      {
        input: {
          accounts: [
            ["John", "johnsmith@mail.com", "john00@mail.com"],
            ["John", "johnnybravo@mail.com"],
            ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
            ["Mary", "mary@mail.com"],
          ],
        },
        output: [
          [
            "John",
            "john00@mail.com",
            "john_newyork@mail.com",
            "johnsmith@mail.com",
          ],
          ["John", "johnnybravo@mail.com"],
          ["Mary", "mary@mail.com"],
        ],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          accounts: [
            ["David", "a@mail.com", "b@mail.com"],
            ["David", "b@mail.com", "c@mail.com"],
          ],
        },
        output: [["David", "a@mail.com", "b@mail.com", "c@mail.com"]],
      },
      {
        input: {
          accounts: [["Alex", "alex@mail.com"]],
        },
        output: [["Alex", "alex@mail.com"]],
      },
    ],
  },
  // =========================
  // Problem 15: Alien Dictionary
  // =========================

  {
    title: "Alien Dictionary",

    description:
      "There is a new alien language that uses the English alphabet. However, the order among the letters is unknown. You are given a list of words from the alien language's dictionary, where the words are sorted lexicographically according to the rules of this new language. Return a string of the unique characters in the correct order of this alien language.",

    difficulty: "Hard",

    tags: ["Graph", "Topological Sort", "DFS", "BFS"],

    functionName: "alienOrder",

    examples: [
      {
        input: 'words = ["wrt","wrf","er","ett","rftt"]',
        output: '"wertf"',
      },
      {
        input: 'words = ["z","x"]',
        output: '"zx"',
      },
      {
        input: 'words = ["z","x","z"]',
        output: '""',
      },
    ],

    constraints: `
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.
`,

    starterCode: {
      cpp: `class Solution {
public:
    string alienOrder(vector<string>& words) {

    }
};`,

      java: `class Solution {
    public String alienOrder(String[] words) {

    }
}`,

      python: `class Solution:
    def alienOrder(self, words):
        pass`,
    },

    testCases: [
      {
        input: {
          words: ["wrt", "wrf", "er", "ett", "rftt"],
        },
        output: "wertf",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          words: ["z", "x"],
        },
        output: "zx",
      },
      {
        input: {
          words: ["z", "x", "z"],
        },
        output: "",
      },
    ],
  },
];

export default graph;
