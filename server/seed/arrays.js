const arrays = [
  {
    title: "Two Sum",

    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",

    difficulty: "Easy",

    tags: ["Array", "HashMap"],

    functionName: "twoSum",

    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
      },
    ],

    constraints: "2 <= nums.length <= 10^4",

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

    }
};`,

      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {

    }
}`,

      python: `class Solution:
    def twoSum(self, nums, target):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [2, 7, 11, 15],
          target: 9,
        },
        output: [0, 1],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [3, 2, 4],
          target: 6,
        },
        output: [1, 2],
      },
      {
        input: {
          nums: [3, 3],
          target: 6,
        },
        output: [0, 1],
      },
    ],
  },

  {
    title: "Best Time to Buy and Sell Stock",

    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve. If no profit can be achieved, return 0.",

    difficulty: "Easy",

    tags: ["Array", "Dynamic Programming"],

    functionName: "maxProfit",

    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No profit can be achieved.",
      },
    ],

    constraints: `1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4`,

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
          prices: [7, 1, 5, 3, 6, 4],
        },
        output: 5,
      },
      {
        input: {
          prices: [7, 6, 4, 3, 1],
        },
        output: 0,
      },
      {
        input: {
          prices: [2, 4, 1],
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          prices: [1, 2],
        },
        output: 1,
      },
      {
        input: {
          prices: [2, 1],
        },
        output: 0,
      },
      {
        input: {
          prices: [2, 1, 2, 1, 0, 1, 2],
        },
        output: 2,
      },
      {
        input: {
          prices: [3, 2, 6, 5, 0, 3],
        },
        output: 4,
      },
      {
        input: {
          prices: [1],
        },
        output: 0,
      },
    ],
  },

  {
    title: "Contains Duplicate",

    description:
      "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",

    difficulty: "Easy",

    tags: ["Array", "Hash Table", "Sorting"],

    functionName: "containsDuplicate",

    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],

    constraints: `1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9`,

    starterCode: {
      cpp: `class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public boolean containsDuplicate(int[] nums) {

    }
}`,

      python: `class Solution:
    def containsDuplicate(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 2, 3, 1],
        },
        output: true,
      },
      {
        input: {
          nums: [1, 2, 3, 4],
        },
        output: false,
      },
      {
        input: {
          nums: [1, 1],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [5],
        },
        output: false,
      },
      {
        input: {
          nums: [2, 2, 2],
        },
        output: true,
      },
      {
        input: {
          nums: [10, 20, 30, 40, 50],
        },
        output: false,
      },
      {
        input: {
          nums: [9, 8, 7, 6, 5, 4, 3, 2, 1, 9],
        },
        output: true,
      },
      {
        input: {
          nums: [-1, -2, -3, -1],
        },
        output: true,
      },
    ],
  },

  ///Maximum Subarray
  {
    title: "Maximum Subarray",

    description:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",

    difficulty: "Medium",

    tags: ["Array", "Dynamic Programming"],

    functionName: "maxSubArray",

    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum = 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
      },
    ],

    constraints: `1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4`,

    starterCode: {
      cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int maxSubArray(int[] nums) {

    }
}`,

      python: `class Solution:
    def maxSubArray(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        },
        output: 6,
      },
      {
        input: {
          nums: [1],
        },
        output: 1,
      },
      {
        input: {
          nums: [5, 4, -1, 7, 8],
        },
        output: 23,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [-1],
        },
        output: -1,
      },
      {
        input: {
          nums: [-2, -3, -1, -5],
        },
        output: -1,
      },
      {
        input: {
          nums: [1, 2, 3, 4],
        },
        output: 10,
      },
      {
        input: {
          nums: [8, -19, 5, -4, 20],
        },
        output: 21,
      },
      {
        input: {
          nums: [0, 0, 0],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 5: Move Zeroes
  // =========================

  {
    title: "Move Zeroes",

    description:
      "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.",

    difficulty: "Easy",

    tags: ["Array", "Two Pointers"],

    functionName: "moveZeroes",

    examples: [
      {
        input: "nums = [0,1,0,3,12]",
        output: "[1,3,12,0,0]",
      },
      {
        input: "nums = [0]",
        output: "[0]",
      },
    ],

    constraints: `1 <= nums.length <= 10^4
-2^31 <= nums[i] <= 2^31 - 1`,

    starterCode: {
      cpp: `class Solution {
public:
    void moveZeroes(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public void moveZeroes(int[] nums) {

    }
}`,

      python: `class Solution:
    def moveZeroes(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [0, 1, 0, 3, 12],
        },
        output: [1, 3, 12, 0, 0],
      },
      {
        input: {
          nums: [0],
        },
        output: [0],
      },
      {
        input: {
          nums: [1, 0],
        },
        output: [1, 0],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 2, 3],
        },
        output: [1, 2, 3],
      },
      {
        input: {
          nums: [0, 0, 1],
        },
        output: [1, 0, 0],
      },
      {
        input: {
          nums: [4, 2, 4, 0, 0, 3, 0, 5, 1, 0],
        },
        output: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0],
      },
      {
        input: {
          nums: [0, 0],
        },
        output: [0, 0],
      },
      {
        input: {
          nums: [1],
        },
        output: [1],
      },
    ],
  },
  // =========================
  // Problem 6: Remove Duplicates from Sorted Array
  // =========================

  {
    title: "Remove Duplicates from Sorted Array",

    description:
      "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.",

    difficulty: "Easy",

    tags: ["Array", "Two Pointers"],

    functionName: "removeDuplicates",

    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2",
        explanation: "The first two elements become [1,2].",
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5",
        explanation: "The first five elements become [0,1,2,3,4].",
      },
    ],

    constraints: `1 <= nums.length <= 3 * 10^4
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.`,

    starterCode: {
      cpp: `class Solution {
public:
    int removeDuplicates(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int removeDuplicates(int[] nums) {

    }
}`,

      python: `class Solution:
    def removeDuplicates(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 1, 2],
        },
        output: 2,
      },
      {
        input: {
          nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
        },
        output: 5,
      },
      {
        input: {
          nums: [1],
        },
        output: 1,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 2, 3],
        },
        output: 3,
      },
      {
        input: {
          nums: [2, 2, 2, 2],
        },
        output: 1,
      },
      {
        input: {
          nums: [-3, -3, -2, -1, -1],
        },
        output: 3,
      },
      {
        input: {
          nums: [1, 1, 1, 2, 2, 3],
        },
        output: 3,
      },
      {
        input: {
          nums: [],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 7: Merge Sorted Array
  // =========================

  {
    title: "Merge Sorted Array",

    description:
      "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2. Merge nums2 into nums1 as one sorted array in-place.",

    difficulty: "Easy",

    tags: ["Array", "Two Pointers", "Sorting"],

    functionName: "merge",

    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
      },
      {
        input: "nums1 = [1], m = 1, nums2 = [], n = 0",
        output: "[1]",
      },
      {
        input: "nums1 = [0], m = 0, nums2 = [1], n = 1",
        output: "[1]",
      },
    ],

    constraints: `nums1.length == m + n
nums2.length == n
0 <= m,n <= 200
-10^9 <= nums1[i], nums2[i] <= 10^9`,

    starterCode: {
      cpp: `class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {

    }
};`,

      java: `class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {

    }
}`,

      python: `class Solution:
    def merge(self, nums1, m, nums2, n):
        pass`,
    },

    testCases: [
      {
        input: {
          nums1: [1, 2, 3, 0, 0, 0],
          m: 3,
          nums2: [2, 5, 6],
          n: 3,
        },
        output: [1, 2, 2, 3, 5, 6],
      },
      {
        input: {
          nums1: [1],
          m: 1,
          nums2: [],
          n: 0,
        },
        output: [1],
      },
      {
        input: {
          nums1: [0],
          m: 0,
          nums2: [1],
          n: 1,
        },
        output: [1],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums1: [4, 5, 6, 0, 0, 0],
          m: 3,
          nums2: [1, 2, 3],
          n: 3,
        },
        output: [1, 2, 3, 4, 5, 6],
      },
      {
        input: {
          nums1: [2, 0],
          m: 1,
          nums2: [1],
          n: 1,
        },
        output: [1, 2],
      },
      {
        input: {
          nums1: [0, 0, 0],
          m: 0,
          nums2: [1, 2, 3],
          n: 3,
        },
        output: [1, 2, 3],
      },
      {
        input: {
          nums1: [-1, 0, 0, 3, 3, 3, 0, 0, 0],
          m: 6,
          nums2: [1, 2, 2],
          n: 3,
        },
        output: [-1, 0, 0, 1, 2, 2, 3, 3, 3],
      },
      {
        input: {
          nums1: [1],
          m: 1,
          nums2: [],
          n: 0,
        },
        output: [1],
      },
    ],
  },
  // =========================
  // Problem 8: Rotate Array
  // =========================

  {
    title: "Rotate Array",

    description:
      "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",

    difficulty: "Medium",

    tags: ["Array", "Math", "Two Pointers"],

    functionName: "rotate",

    examples: [
      {
        input: "nums = [1,2,3,4,5,6,7], k = 3",
        output: "[5,6,7,1,2,3,4]",
        explanation:
          "Rotate 1 step right: [7,1,2,3,4,5,6]. Rotate 2 steps: [6,7,1,2,3,4,5]. Rotate 3 steps: [5,6,7,1,2,3,4].",
      },
      {
        input: "nums = [-1,-100,3,99], k = 2",
        output: "[3,99,-1,-100]",
      },
    ],

    constraints: `1 <= nums.length <= 10^5
-2^31 <= nums[i] <= 2^31 - 1
0 <= k <= 10^5`,

    starterCode: {
      cpp: `class Solution {
public:
    void rotate(vector<int>& nums, int k) {

    }
};`,

      java: `class Solution {
    public void rotate(int[] nums, int k) {

    }
}`,

      python: `class Solution:
    def rotate(self, nums, k):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 2, 3, 4, 5, 6, 7],
          k: 3,
        },
        output: [5, 6, 7, 1, 2, 3, 4],
      },
      {
        input: {
          nums: [-1, -100, 3, 99],
          k: 2,
        },
        output: [3, 99, -1, -100],
      },
      {
        input: {
          nums: [1, 2],
          k: 1,
        },
        output: [2, 1],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1],
          k: 5,
        },
        output: [1],
      },
      {
        input: {
          nums: [1, 2, 3],
          k: 0,
        },
        output: [1, 2, 3],
      },
      {
        input: {
          nums: [1, 2, 3, 4, 5],
          k: 10,
        },
        output: [1, 2, 3, 4, 5],
      },
      {
        input: {
          nums: [6, 7, 8, 9, 10],
          k: 3,
        },
        output: [8, 9, 10, 6, 7],
      },
      {
        input: {
          nums: [-1, -2, -3, -4, -5],
          k: 2,
        },
        output: [-4, -5, -1, -2, -3],
      },
    ],
  },
  // =========================
  // Problem 9: Plus One
  // =========================

  {
    title: "Plus One",

    description:
      "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant. Increment the large integer by one and return the resulting array of digits.",

    difficulty: "Easy",

    tags: ["Array", "Math"],

    functionName: "plusOne",

    examples: [
      {
        input: "digits = [1,2,3]",
        output: "[1,2,4]",
        explanation:
          "The array represents the integer 123. Incrementing by one gives 124.",
      },
      {
        input: "digits = [4,3,2,1]",
        output: "[4,3,2,2]",
      },
      {
        input: "digits = [9]",
        output: "[1,0]",
      },
    ],

    constraints: `1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading zeros.`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {

    }
};`,

      java: `class Solution {
    public int[] plusOne(int[] digits) {

    }
}`,

      python: `class Solution:
    def plusOne(self, digits):
        pass`,
    },

    testCases: [
      {
        input: {
          digits: [1, 2, 3],
        },
        output: [1, 2, 4],
      },
      {
        input: {
          digits: [4, 3, 2, 1],
        },
        output: [4, 3, 2, 2],
      },
      {
        input: {
          digits: [9],
        },
        output: [1, 0],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          digits: [0],
        },
        output: [1],
      },
      {
        input: {
          digits: [9, 9],
        },
        output: [1, 0, 0],
      },
      {
        input: {
          digits: [8, 9, 9],
        },
        output: [9, 0, 0],
      },
      {
        input: {
          digits: [1, 9, 9, 9],
        },
        output: [2, 0, 0, 0],
      },
      {
        input: {
          digits: [5, 6, 7, 8],
        },
        output: [5, 6, 7, 9],
      },
    ],
  },
  // =========================
  // Problem 10: Majority Element
  // =========================

  {
    title: "Majority Element",

    description:
      "Given an array nums of size n, return the majority element. The majority element is the element that appears more than n/2 times. You may assume that the majority element always exists in the array.",

    difficulty: "Easy",

    tags: ["Array", "Hash Table", "Sorting", "Boyer-Moore Voting Algorithm"],

    functionName: "majorityElement",

    examples: [
      {
        input: "nums = [3,2,3]",
        output: "3",
      },
      {
        input: "nums = [2,2,1,1,1,2,2]",
        output: "2",
      },
    ],

    constraints: `1 <= nums.length <= 5 * 10^4
-10^9 <= nums[i] <= 10^9
The majority element always exists in the array.`,

    starterCode: {
      cpp: `class Solution {
public:
    int majorityElement(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int majorityElement(int[] nums) {

    }
}`,

      python: `class Solution:
    def majorityElement(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [3, 2, 3],
        },
        output: 3,
      },
      {
        input: {
          nums: [2, 2, 1, 1, 1, 2, 2],
        },
        output: 2,
      },
      {
        input: {
          nums: [1],
        },
        output: 1,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [3, 3, 4],
        },
        output: 3,
      },
      {
        input: {
          nums: [5, 5, 5, 2, 2],
        },
        output: 5,
      },
      {
        input: {
          nums: [1, 1, 1, 2, 3],
        },
        output: 1,
      },
      {
        input: {
          nums: [7, 7, 7, 7, 1, 2],
        },
        output: 7,
      },
      {
        input: {
          nums: [-1, -1, -1, 2, 3],
        },
        output: -1,
      },
    ],
  },
  // =========================
  // Problem 11: Missing Number
  // =========================

  {
    title: "Missing Number",

    description:
      "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",

    difficulty: "Easy",

    tags: ["Array", "Math", "Bit Manipulation"],

    functionName: "missingNumber",

    examples: [
      {
        input: "nums = [3,0,1]",
        output: "2",
        explanation:
          "n = 3, the numbers are in range [0,3]. The missing number is 2.",
      },
      {
        input: "nums = [0,1]",
        output: "2",
      },
      {
        input: "nums = [9,6,4,2,3,5,7,0,1]",
        output: "8",
      },
    ],

    constraints: `n == nums.length
1 <= n <= 10^4
0 <= nums[i] <= n
All the numbers of nums are unique.`,

    starterCode: {
      cpp: `class Solution {
public:
    int missingNumber(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int missingNumber(int[] nums) {

    }
}`,

      python: `class Solution:
    def missingNumber(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [3, 0, 1],
        },
        output: 2,
      },
      {
        input: {
          nums: [0, 1],
        },
        output: 2,
      },
      {
        input: {
          nums: [9, 6, 4, 2, 3, 5, 7, 0, 1],
        },
        output: 8,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [0],
        },
        output: 1,
      },
      {
        input: {
          nums: [1],
        },
        output: 0,
      },
      {
        input: {
          nums: [0, 1, 2, 3, 5],
        },
        output: 4,
      },
      {
        input: {
          nums: [2, 0, 3, 1],
        },
        output: 4,
      },
      {
        input: {
          nums: [5, 4, 3, 2, 1, 0],
        },
        output: 6,
      },
    ],
  },
  // =========================
  // Problem 12: Intersection of Two Arrays II
  // =========================

  {
    title: "Intersection of Two Arrays II",

    description:
      "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.",

    difficulty: "Easy",

    tags: ["Array", "Hash Table", "Two Pointers", "Sorting"],

    functionName: "intersect",

    examples: [
      {
        input: "nums1 = [1,2,2,1], nums2 = [2,2]",
        output: "[2,2]",
      },
      {
        input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
        output: "[4,9]",
        explanation:
          "Both 4 and 9 appear in both arrays. The output order does not matter.",
      },
    ],

    constraints: `1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {

    }
};`,

      java: `class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {

    }
}`,

      python: `class Solution:
    def intersect(self, nums1, nums2):
        pass`,
    },

    testCases: [
      {
        input: {
          nums1: [1, 2, 2, 1],
          nums2: [2, 2],
        },
        output: [2, 2],
      },
      {
        input: {
          nums1: [4, 9, 5],
          nums2: [9, 4, 9, 8, 4],
        },
        output: [4, 9],
      },
      {
        input: {
          nums1: [1, 2, 3],
          nums2: [4, 5, 6],
        },
        output: [],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums1: [1, 1, 2, 2],
          nums2: [1, 2, 2],
        },
        output: [1, 2, 2],
      },
      {
        input: {
          nums1: [5, 5, 5],
          nums2: [5, 5],
        },
        output: [5, 5],
      },
      {
        input: {
          nums1: [1],
          nums2: [1],
        },
        output: [1],
      },
      {
        input: {
          nums1: [2, 2, 3, 4],
          nums2: [2, 2, 2, 5],
        },
        output: [2, 2],
      },
      {
        input: {
          nums1: [0, 1, 2],
          nums2: [0, 2, 2],
        },
        output: [0, 2],
      },
    ],
  },
  // =========================
  // Problem 13: Product of Array Except Self
  // =========================

  {
    title: "Product of Array Except Self",

    description:
      "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",

    difficulty: "Medium",

    tags: ["Array", "Prefix Sum"],

    functionName: "productExceptSelf",

    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation:
          "answer[0] = 2*3*4, answer[1] = 1*3*4, answer[2] = 1*2*4, answer[3] = 1*2*3",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],

    constraints: `2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int[] productExceptSelf(int[] nums) {

    }
}`,

      python: `class Solution:
    def productExceptSelf(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 2, 3, 4],
        },
        output: [24, 12, 8, 6],
      },
      {
        input: {
          nums: [-1, 1, 0, -3, 3],
        },
        output: [0, 0, 9, 0, 0],
      },
      {
        input: {
          nums: [2, 3],
        },
        output: [3, 2],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 1, 1, 1],
        },
        output: [1, 1, 1, 1],
      },
      {
        input: {
          nums: [0, 1, 2, 3],
        },
        output: [6, 0, 0, 0],
      },
      {
        input: {
          nums: [-1, -2, -3, -4],
        },
        output: [-24, -12, -8, -6],
      },
      {
        input: {
          nums: [5, 0, 5],
        },
        output: [0, 25, 0],
      },
      {
        input: {
          nums: [10, 2, 5],
        },
        output: [10, 50, 20],
      },
    ],
  },
  // =========================
  // Problem 14: Find Pivot Index
  // =========================

  {
    title: "Find Pivot Index",

    description:
      "Given an array of integers nums, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the right of the index. If no such index exists, return -1.",

    difficulty: "Easy",

    tags: ["Array", "Prefix Sum"],

    functionName: "pivotIndex",

    examples: [
      {
        input: "nums = [1,7,3,6,5,6]",
        output: "3",
        explanation:
          "The pivot index is 3. Left sum = 1+7+3 = 11 and right sum = 5+6 = 11.",
      },
      {
        input: "nums = [1,2,3]",
        output: "-1",
      },
      {
        input: "nums = [2,1,-1]",
        output: "0",
      },
    ],

    constraints: `1 <= nums.length <= 10^4
-1000 <= nums[i] <= 1000`,

    starterCode: {
      cpp: `class Solution {
public:
    int pivotIndex(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int pivotIndex(int[] nums) {

    }
}`,

      python: `class Solution:
    def pivotIndex(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 7, 3, 6, 5, 6],
        },
        output: 3,
      },
      {
        input: {
          nums: [1, 2, 3],
        },
        output: -1,
      },
      {
        input: {
          nums: [2, 1, -1],
        },
        output: 0,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1],
        },
        output: 0,
      },
      {
        input: {
          nums: [0, 0, 0, 0],
        },
        output: 0,
      },
      {
        input: {
          nums: [-1, -1, -1, 0, 1, 1],
        },
        output: 0,
      },
      {
        input: {
          nums: [1, 3, 5, 2, 2],
        },
        output: 2,
      },
      {
        input: {
          nums: [10, -10, 5, -5],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 15: Summary Ranges
  // =========================

  {
    title: "Summary Ranges",

    description:
      "You are given a sorted unique integer array nums. A range [a,b] is the set of all integers from a to b inclusive. Return the smallest sorted list of ranges that exactly covers all the numbers in the array.",

    difficulty: "Easy",

    tags: ["Array", "Two Pointers"],

    functionName: "summaryRanges",

    examples: [
      {
        input: "nums = [0,1,2,4,5,7]",
        output: '["0->2","4->5","7"]',
        explanation: "The ranges are 0 to 2, 4 to 5, and 7.",
      },
      {
        input: "nums = [0,2,3,4,6,8,9]",
        output: '["0","2->4","6","8->9"]',
      },
    ],

    constraints: `0 <= nums.length <= 20
-2^31 <= nums[i] <= 2^31 - 1
All the values of nums are unique.
nums is sorted in ascending order.`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public List<String> summaryRanges(int[] nums) {

    }
}`,

      python: `class Solution:
    def summaryRanges(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [0, 1, 2, 4, 5, 7],
        },
        output: ["0->2", "4->5", "7"],
      },
      {
        input: {
          nums: [0, 2, 3, 4, 6, 8, 9],
        },
        output: ["0", "2->4", "6", "8->9"],
      },
      {
        input: {
          nums: [],
        },
        output: [],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1],
        },
        output: ["1"],
      },
      {
        input: {
          nums: [1, 2, 3, 4, 5],
        },
        output: ["1->5"],
      },
      {
        input: {
          nums: [1, 3, 5, 7],
        },
        output: ["1", "3", "5", "7"],
      },
      {
        input: {
          nums: [-3, -2, -1, 1, 2],
        },
        output: ["-3->-1", "1->2"],
      },
      {
        input: {
          nums: [10, 11, 12, 15, 16, 20],
        },
        output: ["10->12", "15->16", "20"],
      },
    ],
  },
];

export default arrays;
