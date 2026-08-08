const stack = [
  // =========================
  // Problem 1: Valid Parentheses
  // =========================

  {
    title: "Valid Parentheses",

    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",

    difficulty: "Easy",

    tags: ["Stack", "String"],

    functionName: "isValid",

    examples: [
      {
        input: `s = "()"`,
        output: "true",
      },
      {
        input: `s = "()[]{}"`,
        output: "true",
      },
      {
        input: `s = "(]"`,
        output: "false",
      },
    ],

    constraints: `1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isValid(string s) {

    }
};`,

      java: `class Solution {
    public boolean isValid(String s) {

    }
}`,

      python: `class Solution:
    def isValid(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "()[]{}",
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "([{}])",
        },
        output: true,
      },
      {
        input: {
          s: "(]",
        },
        output: false,
      },
    ],
  },

  // =========================
  // Problem 2: Min Stack
  // =========================

  {
    title: "Min Stack",

    description:
      "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",

    difficulty: "Medium",

    tags: ["Stack", "Design"],

    functionName: "MinStack",

    examples: [
      {
        input:
          '["MinStack","push","push","push","getMin","pop","top","getMin"]',
        output: "[null,null,null,null,-3,null,0,-2]",
      },
    ],

    constraints: `-2^31 <= val <= 2^31 - 1
Methods pop(), top() and getMin() will always be called on non-empty stacks.
At most 3 * 10^4 calls will be made.`,

    starterCode: {
      cpp: `class MinStack {
public:
    MinStack() {

    }

    void push(int val) {

    }

    void pop() {

    }

    int top() {

    }

    int getMin() {

    }
};`,

      java: `class MinStack {

    public MinStack() {

    }

    public void push(int val) {

    }

    public void pop() {

    }

    public int top() {

    }

    public int getMin() {

    }
}`,

      python: `class MinStack:

    def __init__(self):
        pass

    def push(self, val):
        pass

    def pop(self):
        pass

    def top(self):
        pass

    def getMin(self):
        pass`,
    },

    testCases: [
      {
        input: {
          operations: ["push", "push", "push", "getMin"],
          values: [-2, 0, -3],
        },
        output: -3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          operations: ["push", "push", "getMin"],
          values: [2, 1],
        },
        output: 1,
      },
      {
        input: {
          operations: ["push", "push", "pop", "top"],
          values: [5, 3],
        },
        output: 5,
      },
    ],
  },
  // =========================
  // Problem 3: Evaluate Reverse Polish Notation
  // =========================

  {
    title: "Evaluate Reverse Polish Notation",

    description:
      "You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation. Return the value of the expression.",

    difficulty: "Medium",

    tags: ["Stack", "Array"],

    functionName: "evalRPN",

    examples: [
      {
        input: 'tokens = ["2","1","+","3","*"]',
        output: "9",
      },
      {
        input: 'tokens = ["4","13","5","/","+"]',
        output: "6",
      },
      {
        input:
          'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]',
        output: "22",
      },
    ],

    constraints: `1 <= tokens.length <= 10^4
tokens[i] is an operator (+,-,*,/) or an integer.`,

    starterCode: {
      cpp: `class Solution {
public:
    int evalRPN(vector<string>& tokens) {

    }
};`,

      java: `class Solution {
    public int evalRPN(String[] tokens) {

    }
}`,

      python: `class Solution:
    def evalRPN(self, tokens):
        pass`,
    },

    testCases: [
      {
        input: {
          tokens: ["2", "1", "+", "3", "*"],
        },
        output: 9,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          tokens: ["4", "13", "5", "/", "+"],
        },
        output: 6,
      },
      {
        input: {
          tokens: ["3"],
        },
        output: 3,
      },
    ],
  },

  // =========================
  // Problem 4: Daily Temperatures
  // =========================

  {
    title: "Daily Temperatures",

    description:
      "Given an array of daily temperatures temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day, keep answer[i] = 0.",

    difficulty: "Medium",

    tags: ["Stack", "Monotonic Stack", "Array"],

    functionName: "dailyTemperatures",

    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
      },
      {
        input: "temperatures = [30,40,50,60]",
        output: "[1,1,1,0]",
      },
      {
        input: "temperatures = [30,60,90]",
        output: "[1,1,0]",
      },
    ],

    constraints: `1 <= temperatures.length <= 10^5
30 <= temperatures[i] <= 100`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {

    }
};`,

      java: `class Solution {
    public int[] dailyTemperatures(int[] temperatures) {

    }
}`,

      python: `class Solution:
    def dailyTemperatures(self, temperatures):
        pass`,
    },

    testCases: [
      {
        input: {
          temperatures: [73, 74, 75, 71, 69, 72, 76, 73],
        },
        output: [1, 1, 4, 2, 1, 1, 0, 0],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          temperatures: [30, 40, 50, 60],
        },
        output: [1, 1, 1, 0],
      },
      {
        input: {
          temperatures: [30, 60, 90],
        },
        output: [1, 1, 0],
      },
    ],
  },
  // =========================
  // Problem 5: Next Greater Element I
  // =========================

  {
    title: "Next Greater Element I",

    description:
      "The next greater element of some element x in nums1 is the first greater element to its right in nums2. Return an array containing the next greater element for every element in nums1.",

    difficulty: "Easy",

    tags: ["Stack", "Hash Map", "Monotonic Stack", "Array"],

    functionName: "nextGreaterElement",

    examples: [
      {
        input: "nums1 = [4,1,2], nums2 = [1,3,4,2]",
        output: "[-1,3,-1]",
      },
      {
        input: "nums1 = [2,4], nums2 = [1,2,3,4]",
        output: "[3,-1]",
      },
    ],

    constraints: `1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 10^4
All integers in nums1 and nums2 are unique.`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {

    }
};`,

      java: `class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {

    }
}`,

      python: `class Solution:
    def nextGreaterElement(self, nums1, nums2):
        pass`,
    },

    testCases: [
      {
        input: {
          nums1: [4, 1, 2],
          nums2: [1, 3, 4, 2],
        },
        output: [-1, 3, -1],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums1: [2, 4],
          nums2: [1, 2, 3, 4],
        },
        output: [3, -1],
      },
      {
        input: {
          nums1: [1],
          nums2: [1],
        },
        output: [-1],
      },
    ],
  },

  // =========================
  // Problem 6: Next Greater Element II
  // =========================

  {
    title: "Next Greater Element II",

    description:
      "Given a circular integer array nums, return the next greater number for every element. If it doesn't exist, return -1.",

    difficulty: "Medium",

    tags: ["Stack", "Monotonic Stack", "Array"],

    functionName: "nextGreaterElements",

    examples: [
      {
        input: "nums = [1,2,1]",
        output: "[2,-1,2]",
      },
      {
        input: "nums = [1,2,3,4,3]",
        output: "[2,3,4,-1,4]",
      },
    ],

    constraints: `1 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int[] nextGreaterElements(int[] nums) {

    }
}`,

      python: `class Solution:
    def nextGreaterElements(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 2, 1],
        },
        output: [2, -1, 2],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 2, 3, 4, 3],
        },
        output: [2, 3, 4, -1, 4],
      },
      {
        input: {
          nums: [5],
        },
        output: [-1],
      },
    ],
  },
  // =========================
  // Problem 7: Largest Rectangle in Histogram
  // =========================

  {
    title: "Largest Rectangle in Histogram",

    description:
      "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",

    difficulty: "Hard",

    tags: ["Stack", "Monotonic Stack", "Array"],

    functionName: "largestRectangleArea",

    examples: [
      {
        input: "heights = [2,1,5,6,2,3]",
        output: "10",
      },
      {
        input: "heights = [2,4]",
        output: "4",
      },
    ],

    constraints: `1 <= heights.length <= 10^5
0 <= heights[i] <= 10^4`,

    starterCode: {
      cpp: `class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {

    }
};`,

      java: `class Solution {
    public int largestRectangleArea(int[] heights) {

    }
}`,

      python: `class Solution:
    def largestRectangleArea(self, heights):
        pass`,
    },

    testCases: [
      {
        input: {
          heights: [2, 1, 5, 6, 2, 3],
        },
        output: 10,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          heights: [2, 4],
        },
        output: 4,
      },
      {
        input: {
          heights: [1, 1],
        },
        output: 2,
      },
    ],
  },

  // =========================
  // Problem 8: Trapping Rain Water
  // =========================

  {
    title: "Trapping Rain Water",

    description:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",

    difficulty: "Hard",

    tags: ["Stack", "Two Pointers", "Monotonic Stack", "Array"],

    functionName: "trap",

    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],

    constraints: `1 <= height.length <= 2 * 10^4
0 <= height[i] <= 10^5`,

    starterCode: {
      cpp: `class Solution {
public:
    int trap(vector<int>& height) {

    }
};`,

      java: `class Solution {
    public int trap(int[] height) {

    }
}`,

      python: `class Solution:
    def trap(self, height):
        pass`,
    },

    testCases: [
      {
        input: {
          height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
        },
        output: 6,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          height: [4, 2, 0, 3, 2, 5],
        },
        output: 9,
      },
      {
        input: {
          height: [1, 2, 3, 4],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 9: Remove K Digits
  // =========================

  {
    title: "Remove K Digits",

    description:
      "Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits.",

    difficulty: "Medium",

    tags: ["Stack", "Greedy", "String"],

    functionName: "removeKdigits",

    examples: [
      {
        input: 'num = "1432219", k = 3',
        output: '"1219"',
      },
      {
        input: 'num = "10200", k = 1',
        output: '"200"',
      },
      {
        input: 'num = "10", k = 2',
        output: '"0"',
      },
    ],

    constraints: `1 <= k <= num.length <= 10^5
num consists of digits only.
num does not contain leading zeros except the number "0".`,

    starterCode: {
      cpp: `class Solution {
public:
    string removeKdigits(string num, int k) {

    }
};`,

      java: `class Solution {
    public String removeKdigits(String num, int k) {

    }
}`,

      python: `class Solution:
    def removeKdigits(self, num, k):
        pass`,
    },

    testCases: [
      {
        input: {
          num: "1432219",
          k: 3,
        },
        output: "1219",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          num: "10200",
          k: 1,
        },
        output: "200",
      },
      {
        input: {
          num: "10",
          k: 2,
        },
        output: "0",
      },
    ],
  },

  // =========================
  // Problem 10: Decode String
  // =========================

  {
    title: "Decode String",

    description:
      "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.",

    difficulty: "Medium",

    tags: ["Stack", "String", "Recursion"],

    functionName: "decodeString",

    examples: [
      {
        input: 's = "3[a]2[bc]"',
        output: '"aaabcbc"',
      },
      {
        input: 's = "3[a2[c]]"',
        output: '"accaccacc"',
      },
      {
        input: 's = "2[abc]3[cd]ef"',
        output: '"abcabccdcdcdef"',
      },
    ],

    constraints: `1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets.
The input is guaranteed to be valid.`,

    starterCode: {
      cpp: `class Solution {
public:
    string decodeString(string s) {

    }
};`,

      java: `class Solution {
    public String decodeString(String s) {

    }
}`,

      python: `class Solution:
    def decodeString(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "3[a]2[bc]",
        },
        output: "aaabcbc",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "3[a2[c]]",
        },
        output: "accaccacc",
      },
      {
        input: {
          s: "2[abc]3[cd]ef",
        },
        output: "abcabccdcdcdef",
      },
    ],
  },
  // =========================
  // Problem 11: Asteroid Collision
  // =========================

  {
    title: "Asteroid Collision",

    description:
      "We are given an array asteroids of integers representing asteroids in a row. The absolute value represents the size, and the sign represents the direction (positive = right, negative = left). Find the state of the asteroids after all collisions.",

    difficulty: "Medium",

    tags: ["Stack", "Array", "Simulation"],

    functionName: "asteroidCollision",

    examples: [
      {
        input: "asteroids = [5,10,-5]",
        output: "[5,10]",
      },
      {
        input: "asteroids = [8,-8]",
        output: "[]",
      },
      {
        input: "asteroids = [10,2,-5]",
        output: "[10]",
      },
    ],

    constraints: `2 <= asteroids.length <= 10^4
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {

    }
};`,

      java: `class Solution {
    public int[] asteroidCollision(int[] asteroids) {

    }
}`,

      python: `class Solution:
    def asteroidCollision(self, asteroids):
        pass`,
    },

    testCases: [
      {
        input: {
          asteroids: [5, 10, -5],
        },
        output: [5, 10],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          asteroids: [8, -8],
        },
        output: [],
      },
      {
        input: {
          asteroids: [10, 2, -5],
        },
        output: [10],
      },
    ],
  },

  // =========================
  // Problem 12: Basic Calculator
  // =========================

  {
    title: "Basic Calculator",

    description:
      "Given a valid expression string containing non-negative integers, '+', '-', '(', ')' and spaces, return the result of evaluating the expression.",

    difficulty: "Hard",

    tags: ["Stack", "Math", "String"],

    functionName: "calculate",

    examples: [
      {
        input: 's = "1 + 1"',
        output: "2",
      },
      {
        input: 's = " 2-1 + 2 "',
        output: "3",
      },
      {
        input: 's = "(1+(4+5+2)-3)+(6+8)"',
        output: "23",
      },
    ],

    constraints: `1 <= s.length <= 3 * 10^5
s consists of digits, '+', '-', '(', ')', and spaces.
s represents a valid expression.`,

    starterCode: {
      cpp: `class Solution {
public:
    int calculate(string s) {

    }
};`,

      java: `class Solution {
    public int calculate(String s) {

    }
}`,

      python: `class Solution:
    def calculate(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "1 + 1",
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "2-1+2",
        },
        output: 3,
      },
      {
        input: {
          s: "(1+(4+5+2)-3)+(6+8)",
        },
        output: 23,
      },
    ],
  },

  {
    title: "Simplify Path",

    description:
      "You are given an absolute Unix-style file path. Simplify the path to its canonical form. In a Unix-style file system, a single period represents the current directory, two periods represent the parent directory, and multiple consecutive slashes are treated as a single slash.",

    difficulty: "Medium",

    tags: ["Stack", "String"],

    functionName: "simplifyPath",

    returnType: {
      cpp: "string",
      java: "String",
      python: "str",
    },

    parameters: {
      cpp: [{ name: "path", type: "string" }],
      java: [{ name: "path", type: "String" }],
      python: [{ name: "path", type: "str" }],
    },

    examples: [
      {
        input: 'path = "/home/"',
        output: '"/home"',
        explanation: "The trailing slash is removed from the canonical path.",
      },
      {
        input: 'path = "/home//foo/"',
        output: '"/home/foo"',
        explanation: "Multiple consecutive slashes are treated as one slash.",
      },
      {
        input: 'path = "/home/user/Documents/../Pictures"',
        output: '"/home/user/Pictures"',
        explanation: 'The ".." moves from "Documents" back to "user".',
      },
    ],

    constraints: `1 <= path.length <= 3000
path consists of English letters, digits, period '.', slash '/' or underscore '_'.
path is a valid absolute Unix-style path.`,

    starterCode: {
      cpp: `class Solution {
public:
    string simplifyPath(string path) {
        
    }
};`,

      java: `class Solution {
public:
    String simplifyPath(String path) {
        
    }
}`,

      python: `class Solution:
    def simplifyPath(self, path):
        pass`,
    },

    testCases: [
      {
        input: {
          path: "/home/",
        },
        output: "/home",
      },

      {
        input: {
          path: "/home//foo/",
        },
        output: "/home/foo",
      },

      {
        input: {
          path: "/home/user/Documents/../Pictures",
        },
        output: "/home/user/Pictures",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          path: "/../",
        },
        output: "/",
      },

      {
        input: {
          path: "/home/../../..",
        },
        output: "/",
      },

      {
        input: {
          path: "/a/./b/../../c/",
        },
        output: "/c",
      },

      {
        input: {
          path: "/a//b////c/d//././/..",
        },
        output: "/a/b/c",
      },

      {
        input: {
          path: "/abc/def/ghi/../jkl",
        },
        output: "/abc/def/jkl",
      },
    ],
  },

  {
    title: "Remove All Adjacent Duplicates in String",

    description:
      "You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them. Repeat this process until no more adjacent duplicates can be removed. Return the final string.",

    difficulty: "Easy",

    tags: ["Stack", "String"],

    functionName: "removeDuplicates",

    returnType: {
      cpp: "string",
      java: "String",
      python: "str",
    },

    parameters: {
      cpp: [{ name: "s", type: "string" }],
      java: [{ name: "s", type: "String" }],
      python: [{ name: "s", type: "str" }],
    },

    examples: [
      {
        input: 's = "abbaca"',
        output: '"ca"',
        explanation: 'Remove "bb" to get "aaca", then remove "aa" to get "ca".',
      },
      {
        input: 's = "azxxzy"',
        output: '"ay"',
        explanation: 'Remove "xx" to get "azzy", then remove "zz" to get "ay".',
      },
      {
        input: 's = "aabbcc"',
        output: '""',
        explanation: "All adjacent duplicate pairs are removed.",
      },
    ],

    constraints: `1 <= s.length <= 100000
s consists of lowercase English letters.`,

    starterCode: {
      cpp: `class Solution {
public:
    string removeDuplicates(string s) {
        
    }
};`,

      java: `class Solution {
public:
    String removeDuplicates(String s) {
        
    }
}`,

      python: `class Solution:
    def removeDuplicates(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "abbaca",
        },
        output: "ca",
      },

      {
        input: {
          s: "azxxzy",
        },
        output: "ay",
      },

      {
        input: {
          s: "aabbcc",
        },
        output: "",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "aaaa",
        },
        output: "",
      },

      {
        input: {
          s: "abcddcba",
        },
        output: "",
      },

      {
        input: {
          s: "aababaab",
        },
        output: "ba",
      },

      {
        input: {
          s: "abcdef",
        },
        output: "abcdef",
      },

      {
        input: {
          s: "abba",
        },
        output: "",
      },
    ],
  },
];

export default stack;
