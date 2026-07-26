const dp = [
  // =========================
  // Problem 1: Climbing Stairs
  // =========================

  {
    title: "Climbing Stairs",

    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. Return the number of distinct ways you can climb to the top.",

    difficulty: "Easy",

    tags: ["Dynamic Programming", "Math", "Recursion"],

    functionName: "climbStairs",

    examples: [
      {
        input: "n = 2",
        output: "2",
      },
      {
        input: "n = 3",
        output: "3",
      },
    ],

    constraints: `
1 <= n <= 45
`,

    starterCode: {
      cpp: `class Solution {
public:
    int climbStairs(int n) {

    }
};`,

      java: `class Solution {
    public int climbStairs(int n) {

    }
}`,

      python: `class Solution:
    def climbStairs(self, n):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 3,
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 2,
        },
        output: 2,
      },
      {
        input: {
          n: 5,
        },
        output: 8,
      },
    ],
  },

  // =========================
  // Problem 2: House Robber
  // =========================

  {
    title: "House Robber",

    description:
      "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money. Adjacent houses have security systems connected, so you cannot rob two adjacent houses. Return the maximum amount of money you can rob without alerting the police.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Array"],

    functionName: "rob",

    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
      },
      {
        input: "nums = [2,7,9,3,1]",
        output: "12",
      },
    ],

    constraints: `
1 <= nums.length <= 100
0 <= nums[i] <= 400
`,

    starterCode: {
      cpp: `class Solution {
public:
    int rob(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int rob(int[] nums) {

    }
}`,

      python: `class Solution:
    def rob(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 2, 3, 1],
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [2, 7, 9, 3, 1],
        },
        output: 12,
      },
      {
        input: {
          nums: [5],
        },
        output: 5,
      },
    ],
  },
  // =========================
  // Problem 3: House Robber II
  // =========================

  {
    title: "House Robber II",

    description:
      "You are a professional robber planning to rob houses along a street. All houses are arranged in a circle, meaning the first house and the last house are neighbors. Return the maximum amount of money you can rob without alerting the police.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Array"],

    functionName: "rob",

    examples: [
      {
        input: "nums = [2,3,2]",
        output: "3",
      },
      {
        input: "nums = [1,2,3,1]",
        output: "4",
      },
      {
        input: "nums = [1,2,3]",
        output: "3",
      },
    ],

    constraints: `
1 <= nums.length <= 100
0 <= nums[i] <= 1000
`,

    starterCode: {
      cpp: `class Solution {
public:
    int rob(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int rob(int[] nums) {

    }
}`,

      python: `class Solution:
    def rob(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [2, 3, 2],
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 2, 3, 1],
        },
        output: 4,
      },
      {
        input: {
          nums: [1, 2, 3],
        },
        output: 3,
      },
    ],
  },

  // =========================
  // Problem 4: Coin Change
  // =========================

  {
    title: "Coin Change",

    description:
      "Given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money, return the fewest number of coins that you need to make up that amount. If the amount cannot be made up by any combination of coins, return -1.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "BFS"],

    functionName: "coinChange",

    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
      {
        input: "coins = [1], amount = 0",
        output: "0",
      },
    ],

    constraints: `
1 <= coins.length <= 12
1 <= coins[i] <= 2^31 - 1
0 <= amount <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {

    }
};`,

      java: `class Solution {
    public int coinChange(int[] coins, int amount) {

    }
}`,

      python: `class Solution:
    def coinChange(self, coins, amount):
        pass`,
    },

    testCases: [
      {
        input: {
          coins: [1, 2, 5],
          amount: 11,
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          coins: [2],
          amount: 3,
        },
        output: -1,
      },
      {
        input: {
          coins: [1],
          amount: 0,
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 5: House Robber II
  // =========================

  {
    title: "House Robber II",

    description:
      "You are a professional robber planning to rob houses along a street. All houses are arranged in a circle, meaning the first house and the last house are neighbors. Return the maximum amount of money you can rob without alerting the police.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Array"],

    functionName: "rob",

    examples: [
      {
        input: "nums = [2,3,2]",
        output: "3",
      },
      {
        input: "nums = [1,2,3,1]",
        output: "4",
      },
      {
        input: "nums = [1,2,3]",
        output: "3",
      },
    ],

    constraints: `
1 <= nums.length <= 100
0 <= nums[i] <= 1000
`,

    starterCode: {
      cpp: `class Solution {
public:
    int rob(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int rob(int[] nums) {

    }
}`,

      python: `class Solution:
    def rob(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [2, 3, 2],
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 2, 3, 1],
        },
        output: 4,
      },
      {
        input: {
          nums: [1, 2, 3],
        },
        output: 3,
      },
    ],
  },

  // =========================
  // Problem 6: Coin Change
  // =========================

  {
    title: "Coin Change",

    description:
      "Given an integer array coins representing coins of different denominations and an integer amount, return the fewest number of coins that you need to make up that amount. If the amount cannot be made up by any combination of coins, return -1.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "BFS"],

    functionName: "coinChange",

    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
      {
        input: "coins = [1], amount = 0",
        output: "0",
      },
    ],

    constraints: `
1 <= coins.length <= 12
1 <= coins[i] <= 2^31 - 1
0 <= amount <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {

    }
};`,

      java: `class Solution {
    public int coinChange(int[] coins, int amount) {

    }
}`,

      python: `class Solution:
    def coinChange(self, coins, amount):
        pass`,
    },

    testCases: [
      {
        input: {
          coins: [1, 2, 5],
          amount: 11,
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          coins: [2],
          amount: 3,
        },
        output: -1,
      },
      {
        input: {
          coins: [1],
          amount: 0,
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 7: Longest Increasing Subsequence
  // =========================

  {
    title: "Longest Increasing Subsequence",

    description:
      "Given an integer array nums, return the length of the longest strictly increasing subsequence.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Binary Search", "LIS"],

    functionName: "lengthOfLIS",

    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
      },
      {
        input: "nums = [0,1,0,3,2,3]",
        output: "4",
      },
      {
        input: "nums = [7,7,7,7,7,7,7]",
        output: "1",
      },
    ],

    constraints: `
1 <= nums.length <= 2500
-10^4 <= nums[i] <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int lengthOfLIS(int[] nums) {

    }
}`,

      python: `class Solution:
    def lengthOfLIS(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [10, 9, 2, 5, 3, 7, 101, 18],
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [0, 1, 0, 3, 2, 3],
        },
        output: 4,
      },
      {
        input: {
          nums: [7, 7, 7, 7],
        },
        output: 1,
      },
    ],
  },

  // =========================
  // Problem 8: Longest Common Subsequence
  // =========================

  {
    title: "Longest Common Subsequence",

    description:
      "Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is a sequence that appears in the same order but not necessarily contiguous.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "String"],

    functionName: "longestCommonSubsequence",

    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
      },
      {
        input: 'text1 = "abc", text2 = "abc"',
        output: "3",
      },
      {
        input: 'text1 = "abc", text2 = "def"',
        output: "0",
      },
    ],

    constraints: `
1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
`,

    starterCode: {
      cpp: `class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {

    }
};`,

      java: `class Solution {
    public int longestCommonSubsequence(String text1, String text2) {

    }
}`,

      python: `class Solution:
    def longestCommonSubsequence(self, text1, text2):
        pass`,
    },

    testCases: [
      {
        input: {
          text1: "abcde",
          text2: "ace",
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          text1: "abc",
          text2: "abc",
        },
        output: 3,
      },
      {
        input: {
          text1: "abc",
          text2: "def",
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 9: Unique Paths
  // =========================

  {
    title: "Unique Paths",

    description:
      "There is a robot on an m x n grid. The robot starts at the top-left corner and wants to reach the bottom-right corner. The robot can only move either down or right at any point. Return the number of possible unique paths.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Math", "Grid"],

    functionName: "uniquePaths",

    examples: [
      {
        input: "m = 3, n = 7",
        output: "28",
      },
      {
        input: "m = 3, n = 2",
        output: "3",
      },
    ],

    constraints: `
1 <= m, n <= 100
`,

    starterCode: {
      cpp: `class Solution {
public:
    int uniquePaths(int m, int n) {

    }
};`,

      java: `class Solution {
    public int uniquePaths(int m, int n) {

    }
}`,

      python: `class Solution:
    def uniquePaths(self, m, n):
        pass`,
    },

    testCases: [
      {
        input: {
          m: 3,
          n: 7,
        },
        output: 28,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          m: 3,
          n: 2,
        },
        output: 3,
      },
      {
        input: {
          m: 1,
          n: 1,
        },
        output: 1,
      },
    ],
  },

  // =========================
  // Problem 10: Partition Equal Subset Sum
  // =========================

  {
    title: "Partition Equal Subset Sum",

    description:
      "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Knapsack"],

    functionName: "canPartition",

    examples: [
      {
        input: "nums = [1,5,11,5]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,5]",
        output: "false",
      },
    ],

    constraints: `
1 <= nums.length <= 200
1 <= nums[i] <= 100
`,

    starterCode: {
      cpp: `class Solution {
public:
    bool canPartition(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public boolean canPartition(int[] nums) {

    }
}`,

      python: `class Solution:
    def canPartition(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 5, 11, 5],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 2, 3, 5],
        },
        output: false,
      },
      {
        input: {
          nums: [2, 2, 3, 5],
        },
        output: false,
      },
    ],
  },
  // =========================
  // Problem 11: Edit Distance
  // =========================

  {
    title: "Edit Distance",

    description:
      "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You can perform insert, delete, or replace operations.",

    difficulty: "Hard",

    tags: ["Dynamic Programming", "String"],

    functionName: "minDistance",

    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
      },
      {
        input: 'word1 = "intention", word2 = "execution"',
        output: "5",
      },
    ],

    constraints: `
0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
`,

    starterCode: {
      cpp: `class Solution {
public:
    int minDistance(string word1, string word2) {

    }
};`,

      java: `class Solution {
    public int minDistance(String word1, String word2) {

    }
}`,

      python: `class Solution:
    def minDistance(self, word1, word2):
        pass`,
    },

    testCases: [
      {
        input: {
          word1: "horse",
          word2: "ros",
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          word1: "intention",
          word2: "execution",
        },
        output: 5,
      },
      {
        input: {
          word1: "",
          word2: "abc",
        },
        output: 3,
      },
    ],
  },

  // =========================
  // Problem 12: Word Break II
  // =========================

  {
    title: "Word Break II",

    description:
      "Given a string s and a dictionary of words wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all possible sentences.",

    difficulty: "Hard",

    tags: ["Dynamic Programming", "DFS", "Backtracking", "Memoization"],

    functionName: "wordBreak",

    examples: [
      {
        input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',
        output: '["cats and dog","cat sand dog"]',
      },
      {
        input:
          's = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]',
        output:
          '["pine apple pen apple","pineapple pen apple","pine applepen apple"]',
      },
    ],

    constraints: `
1 <= s.length <= 20
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 10
s and wordDict[i] consist of lowercase English letters.
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<string> wordBreak(string s, vector<string>& wordDict) {

    }
};`,

      java: `class Solution {
    public List<String> wordBreak(String s, List<String> wordDict) {

    }
}`,

      python: `class Solution:
    def wordBreak(self, s, wordDict):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "catsanddog",
          wordDict: ["cat", "cats", "and", "sand", "dog"],
        },
        output: ["cats and dog", "cat sand dog"],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "pineapplepenapple",
          wordDict: ["apple", "pen", "applepen", "pine", "pineapple"],
        },
        output: [
          "pine apple pen apple",
          "pineapple pen apple",
          "pine applepen apple",
        ],
      },
      {
        input: {
          s: "catsandog",
          wordDict: ["cats", "dog", "sand", "and", "cat"],
        },
        output: [],
      },
    ],
  },
  // =========================
  // Problem 13: Best Time to Buy and Sell Stock with Cooldown
  // =========================

  {
    title: "Best Time to Buy and Sell Stock with Cooldown",

    description:
      "You are given an array prices where prices[i] is the price of a stock on the ith day. Find the maximum profit you can achieve. After selling a stock, you cannot buy stock on the next day (cooldown period of one day).",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Stock", "State Machine"],

    functionName: "maxProfit",

    examples: [
      {
        input: "prices = [1,2,3,0,2]",
        output: "3",
      },
      {
        input: "prices = [1]",
        output: "0",
      },
    ],

    constraints: `
1 <= prices.length <= 5000
0 <= prices[i] <= 1000
`,

    starterCode: {
      cpp: `class Solution {
public:
    int maxProfit(vector<int>& prices) {

    }
};`,

      java: `class Solution {
    public int maxProfit(int[] prices) {

    }
}`,

      python: `class Solution:
    def maxProfit(self, prices):
        pass`,
    },

    testCases: [
      {
        input: {
          prices: [1, 2, 3, 0, 2],
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          prices: [1],
        },
        output: 0,
      },
      {
        input: {
          prices: [2, 1, 4],
        },
        output: 3,
      },
    ],
  },

  // =========================
  // Problem 14: Target Sum
  // =========================

  {
    title: "Target Sum",

    description:
      "Given an integer array nums and an integer target, return the number of different expressions that you can build by adding '+' or '-' before each integer in nums to make the sum equal to target.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Knapsack", "Backtracking"],

    functionName: "findTargetSumWays",

    examples: [
      {
        input: "nums = [1,1,1,1,1], target = 3",
        output: "5",
      },
      {
        input: "nums = [1], target = 1",
        output: "1",
      },
    ],

    constraints: `
1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000
`,

    starterCode: {
      cpp: `class Solution {
public:
    int findTargetSumWays(vector<int>& nums, int target) {

    }
};`,

      java: `class Solution {
    public int findTargetSumWays(int[] nums, int target) {

    }
}`,

      python: `class Solution:
    def findTargetSumWays(self, nums, target):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 1, 1, 1, 1],
          target: 3,
        },
        output: 5,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1],
          target: 1,
        },
        output: 1,
      },
      {
        input: {
          nums: [1, 2, 3],
          target: 2,
        },
        output: 1,
      },
    ],
  },

  // =========================
  // Problem 15: Regular Expression Matching
  // =========================

  {
    title: "Regular Expression Matching",

    description:
      "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' matches any single character. '*' matches zero or more of the preceding element. The matching should cover the entire input string.",

    difficulty: "Hard",

    tags: ["Dynamic Programming", "String", "Recursion", "Memoization"],

    functionName: "isMatch",

    examples: [
      {
        input: 's = "aa", p = "a"',
        output: "false",
      },
      {
        input: 's = "aa", p = "a*"',
        output: "true",
      },
      {
        input: 's = "ab", p = ".*"',
        output: "true",
      },
    ],

    constraints: `
1 <= s.length <= 20
1 <= p.length <= 30
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed that for every '*' character, there will be a previous valid character.
`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isMatch(string s, string p) {

    }
};`,

      java: `class Solution {
    public boolean isMatch(String s, String p) {

    }
}`,

      python: `class Solution:
    def isMatch(self, s, p):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "aa",
          p: "a*",
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "ab",
          p: ".*",
        },
        output: true,
      },
      {
        input: {
          s: "mississippi",
          p: "mis*is*p*.",
        },
        output: false,
      },
    ],
  },
];

export default dp;
