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

  {
    title: "Decode Ways",

    description:
      "A message containing letters from A-Z can be encoded into numbers using the mapping 'A' -> '1', 'B' -> '2', ..., 'Z' -> '26'. Given a string s containing only digits, return the number of ways to decode it. A valid encoding cannot contain leading zeros or decode a number greater than 26.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "String", "Memoization"],

    functionName: "numDecodings",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [{ name: "s", type: "string" }],

      java: [{ name: "s", type: "String" }],

      python: [{ name: "s", type: "str" }],
    },

    examples: [
      {
        input: 's = "12"',
        output: "2",
        explanation: "The string can be decoded as 'AB' (1,2) or 'L' (12).",
      },

      {
        input: 's = "226"',
        output: "3",
        explanation:
          "The possible decodings are 'BZ' (2,26), 'VF' (22,6), and 'BBF' (2,2,6).",
      },

      {
        input: 's = "06"',
        output: "0",
        explanation:
          "A valid encoding cannot start with 0, so there are no valid decodings.",
      },
    ],

    constraints: `1 <= s.length <= 100
s contains only digits.
The answer is guaranteed to fit in a 32-bit integer.`,

    starterCode: {
      cpp: `class Solution {
public:
    int numDecodings(string s) {
        
    }
};`,

      java: `class Solution {
public:
    int numDecodings(String s) {
        
    }
}`,

      python: `class Solution:
    def numDecodings(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "12",
        },
        output: 2,
      },

      {
        input: {
          s: "226",
        },
        output: 3,
      },

      {
        input: {
          s: "06",
        },
        output: 0,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "1",
        },
        output: 1,
      },

      {
        input: {
          s: "10",
        },
        output: 1,
      },

      {
        input: {
          s: "11106",
        },
        output: 2,
      },

      {
        input: {
          s: "2101",
        },
        output: 1,
      },

      {
        input: {
          s: "27",
        },
        output: 1,
      },
    ],
  },

  {
    title: "0/1 Knapsack",

    description:
      "Given a set of items, where each item has a weight and a value, and a knapsack with a maximum capacity W, determine the maximum total value that can be obtained by selecting items without exceeding the knapsack capacity. Each item can either be selected once or not selected at all.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Array", "Knapsack"],

    functionName: "knapsack",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [
        { name: "W", type: "int" },
        { name: "val", type: "vector<int>" },
        { name: "wt", type: "vector<int>" },
      ],

      java: [
        { name: "W", type: "int" },
        { name: "val", type: "int[]" },
        { name: "wt", type: "int[]" },
      ],

      python: [
        { name: "W", type: "int" },
        { name: "val", type: "List[int]" },
        { name: "wt", type: "List[int]" },
      ],
    },

    examples: [
      {
        input: "W = 4, val = [1,2,3], wt = [4,5,1]",
        output: "3",
        explanation:
          "The item with value 3 and weight 1 can be selected. The other items cannot fit within the remaining capacity, so the maximum value is 3.",
      },

      {
        input: "W = 3, val = [1,2,3], wt = [4,5,6]",
        output: "0",
        explanation:
          "All items are heavier than the knapsack capacity, so no item can be selected.",
      },

      {
        input: "W = 7, val = [10,20,30], wt = [1,3,4]",
        output: "50",
        explanation:
          "Selecting items with weights 3 and 4 gives a total weight of 7 and a total value of 50.",
      },
    ],

    constraints: `1 <= W <= 1000
1 <= val.length = wt.length <= 1000
1 <= val[i] <= 1000
1 <= wt[i] <= 1000`,

    starterCode: {
      cpp: `class Solution {
public:
    int knapsack(int W, vector<int>& val, vector<int>& wt) {
        
    }
};`,

      java: `class Solution {
public:
    int knapsack(int W, int[] val, int[] wt) {
        
    }
}`,

      python: `class Solution:
    def knapsack(self, W, val, wt):
        pass`,
    },

    testCases: [
      {
        input: {
          W: 4,
          val: [1, 2, 3],
          wt: [4, 5, 1],
        },
        output: 3,
      },

      {
        input: {
          W: 3,
          val: [1, 2, 3],
          wt: [4, 5, 6],
        },
        output: 0,
      },

      {
        input: {
          W: 7,
          val: [10, 20, 30],
          wt: [1, 3, 4],
        },
        output: 50,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          W: 5,
          val: [10, 20, 30],
          wt: [2, 3, 4],
        },
        output: 40,
      },

      {
        input: {
          W: 10,
          val: [60, 100, 120],
          wt: [10, 20, 30],
        },
        output: 60,
      },

      {
        input: {
          W: 6,
          val: [10, 20, 30, 40],
          wt: [1, 2, 3, 4],
        },
        output: 70,
      },

      {
        input: {
          W: 0,
          val: [10, 20],
          wt: [1, 2],
        },
        output: 0,
      },

      {
        input: {
          W: 8,
          val: [15, 25, 35],
          wt: [3, 4, 5],
        },
        output: 50,
      },
    ],
  },

  {
    title: "Maximum Product Subarray",

    description:
      "Given an integer array nums, find a contiguous subarray whose elements have the largest product and return the product. The test cases are generated so that the answer fits in a 32-bit integer.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Array"],

    functionName: "maxProduct",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [{ name: "nums", type: "vector<int>" }],

      java: [{ name: "nums", type: "int[]" }],

      python: [{ name: "nums", type: "List[int]" }],
    },

    examples: [
      {
        input: "nums = [2,3,-2,4]",
        output: "6",
        explanation: "The subarray [2,3] has the largest product, which is 6.",
      },

      {
        input: "nums = [-2,0,-1]",
        output: "0",
        explanation:
          "The possible products are -2, 0, and -1. Therefore, the maximum product is 0.",
      },

      {
        input: "nums = [-2,3,-4]",
        output: "24",
        explanation: "The entire subarray [-2,3,-4] has product 24.",
      },
    ],

    constraints: `1 <= nums.length <= 2 * 10^4
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.`,

    starterCode: {
      cpp: `class Solution {
public:
    int maxProduct(vector<int>& nums) {
        
    }
};`,

      java: `class Solution {
public:
    int maxProduct(int[] nums) {
        
    }
}`,

      python: `class Solution:
    def maxProduct(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [2, 3, -2, 4],
        },
        output: 6,
      },

      {
        input: {
          nums: [-2, 0, -1],
        },
        output: 0,
      },

      {
        input: {
          nums: [-2, 3, -4],
        },
        output: 24,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [-2],
        },
        output: -2,
      },

      {
        input: {
          nums: [0, 2],
        },
        output: 2,
      },

      {
        input: {
          nums: [-2, 3, -4],
        },
        output: 24,
      },

      {
        input: {
          nums: [2, -5, -2, -4, 3],
        },
        output: 24,
      },

      {
        input: {
          nums: [-1, -2, -3, 0],
        },
        output: 6,
      },
    ],
  },

  {
    title: "Minimum Path Sum",

    description:
      "Given a m x n grid filled with non-negative numbers, find a path from the top-left corner to the bottom-right corner that minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Array", "Grid"],

    functionName: "minPathSum",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [{ name: "grid", type: "vector<vector<int>>" }],

      java: [{ name: "grid", type: "int[][]" }],

      python: [{ name: "grid", type: "List[List[int]]" }],
    },

    examples: [
      {
        input: "grid = [[1,3,1],[1,5,1],[4,2,1]]",
        output: "7",
        explanation: "The path 1 → 3 → 1 → 1 → 1 gives the minimum sum of 7.",
      },

      {
        input: "grid = [[1,2,3],[4,5,6]]",
        output: "12",
        explanation: "The path 1 → 2 → 3 → 6 gives the minimum sum of 12.",
      },

      {
        input: "grid = [[5]]",
        output: "5",
        explanation: "There is only one cell, so the minimum path sum is 5.",
      },
    ],

    constraints: `1 <= grid.length, grid[i].length <= 200
0 <= grid[i][j] <= 200`,

    starterCode: {
      cpp: `class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        
    }
};`,

      java: `class Solution {
public:
    int minPathSum(int[][] grid) {
        
    }
}`,

      python: `class Solution:
    def minPathSum(self, grid):
        pass`,
    },

    testCases: [
      {
        input: {
          grid: [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
          ],
        },
        output: 7,
      },

      {
        input: {
          grid: [
            [1, 2, 3],
            [4, 5, 6],
          ],
        },
        output: 12,
      },

      {
        input: {
          grid: [[5]],
        },
        output: 5,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          grid: [
            [1, 2],
            [1, 1],
          ],
        },
        output: 3,
      },

      {
        input: {
          grid: [
            [1, 2, 1],
            [1, 1, 1],
          ],
        },
        output: 4,
      },

      {
        input: {
          grid: [
            [5, 1, 3],
            [2, 8, 2],
            [1, 1, 1],
          ],
        },
        output: 10,
      },

      {
        input: {
          grid: [
            [7, 1],
            [2, 3],
          ],
        },
        output: 10,
      },

      {
        input: {
          grid: [
            [1, 4, 8, 2],
            [2, 3, 1, 5],
            [3, 2, 1, 1],
          ],
        },
        output: 11,
      },
    ],
  },

  {
    title: "Jump Game VI",

    description:
      "You are given a 0-indexed integer array nums and an integer k. You are initially standing at index 0. In one move, you can jump from index i to any index j such that i < j <= i + k. Return the maximum score you can get, where your score is the sum of all nums[i] for the indices you visit.",

    difficulty: "Medium",

    tags: ["Dynamic Programming", "Deque", "Sliding Window"],

    functionName: "maxResult",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [
        { name: "nums", type: "vector<int>" },
        { name: "k", type: "int" },
      ],
      java: [
        { name: "nums", type: "int[]" },
        { name: "k", type: "int" },
      ],
      python: [
        { name: "nums", type: "List[int]" },
        { name: "k", type: "int" },
      ],
    },

    examples: [
      {
        input: "nums = [1,-1,-2,4,-7,3], k = 2",
        output: "7",
        explanation:
          "The optimal path is 0 -> 1 -> 3 -> 5, giving a score of 1 + (-1) + 4 + 3 = 7.",
      },
      {
        input: "nums = [10,-5,-2,4,0,3], k = 3",
        output: "17",
        explanation: "The optimal path gives the maximum possible score of 17.",
      },
    ],

    constraints: `
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
1 <= k <= nums.length - 1
`,

    starterCode: {
      cpp: `class Solution {
public:
    int maxResult(vector<int>& nums, int k) {

    }
};`,

      java: `class Solution {
public int maxResult(int[] nums, int k) {

}
}`,

      python: `class Solution:
    def maxResult(self, nums, k):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, -1, -2, 4, -7, 3],
          k: 2,
        },
        output: 7,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [10, -5, -2, 4, 0, 3],
          k: 3,
        },
        output: 17,
      },
      {
        input: {
          nums: [1, -1, -2, 4, -7, 3],
          k: 1,
        },
        output: -2,
      },
      {
        input: {
          nums: [5],
          k: 1,
        },
        output: 5,
      },
    ],
  },
];

export default dp;
