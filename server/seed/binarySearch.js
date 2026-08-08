const binarySearch = [
  // =========================
  // Problem 1: Binary Search
  // =========================

  {
    title: "Binary Search",

    description:
      "Given an array of integers nums which is sorted in ascending order, and an integer target, return the index of target if it exists. Otherwise, return -1.",

    difficulty: "Easy",

    tags: ["Array", "Binary Search"],

    functionName: "search",

    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
      },
    ],

    constraints: `1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All the integers in nums are unique.
nums is sorted in ascending order.`,

    starterCode: {
      cpp: `class Solution {
public:
    int search(vector<int>& nums, int target) {

    }
};`,

      java: `class Solution {
    public int search(int[] nums, int target) {

    }
}`,

      python: `class Solution:
    def search(self, nums, target):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [-1, 0, 3, 5, 9, 12],
          target: 9,
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [-1, 0, 3, 5, 9, 12],
          target: 2,
        },
        output: -1,
      },
      {
        input: {
          nums: [5],
          target: 5,
        },
        output: 0,
      },
    ],
  },

  // =========================
  // Problem 2: Search Insert Position
  // =========================

  {
    title: "Search Insert Position",

    description:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be inserted in order.",

    difficulty: "Easy",

    tags: ["Array", "Binary Search"],

    functionName: "searchInsert",

    examples: [
      {
        input: "nums = [1,3,5,6], target = 5",
        output: "2",
      },
      {
        input: "nums = [1,3,5,6], target = 2",
        output: "1",
      },
      {
        input: "nums = [1,3,5,6], target = 7",
        output: "4",
      },
    ],

    constraints: `1 <= nums.length <= 10^4
-10^4 <= nums[i], target <= 10^4
nums contains distinct values sorted in ascending order.`,

    starterCode: {
      cpp: `class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {

    }
};`,

      java: `class Solution {
    public int searchInsert(int[] nums, int target) {

    }
}`,

      python: `class Solution:
    def searchInsert(self, nums, target):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 3, 5, 6],
          target: 5,
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 3, 5, 6],
          target: 2,
        },
        output: 1,
      },
      {
        input: {
          nums: [1, 3, 5, 6],
          target: 7,
        },
        output: 4,
      },
      {
        input: {
          nums: [1],
          target: 0,
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 3: Find First and Last Position of Element in Sorted Array
  // =========================

  {
    title: "Find First and Last Position of Element in Sorted Array",

    description:
      "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If the target is not found, return [-1, -1].",

    difficulty: "Medium",

    tags: ["Array", "Binary Search"],

    functionName: "searchRange",

    examples: [
      {
        input: "nums = [5,7,7,8,8,10], target = 8",
        output: "[3,4]",
      },
      {
        input: "nums = [5,7,7,8,8,10], target = 6",
        output: "[-1,-1]",
      },
    ],

    constraints: `0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums is sorted in non-decreasing order.
-10^9 <= target <= 10^9`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {

    }
};`,

      java: `class Solution {
    public int[] searchRange(int[] nums, int target) {

    }
}`,

      python: `class Solution:
    def searchRange(self, nums, target):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [5, 7, 7, 8, 8, 10],
          target: 8,
        },
        output: [3, 4],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [5, 7, 7, 8, 8, 10],
          target: 6,
        },
        output: [-1, -1],
      },
      {
        input: {
          nums: [],
          target: 0,
        },
        output: [-1, -1],
      },
      {
        input: {
          nums: [1],
          target: 1,
        },
        output: [0, 0],
      },
    ],
  },

  // =========================
  // Problem 4: Search in Rotated Sorted Array
  // =========================

  {
    title: "Search in Rotated Sorted Array",

    description:
      "There is an integer array nums sorted in ascending order (with distinct values). Before being passed to your function, nums is rotated at an unknown pivot. Given the array nums after rotation and an integer target, return the index of target if it exists, otherwise return -1.",

    difficulty: "Medium",

    tags: ["Array", "Binary Search"],

    functionName: "search",

    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
      {
        input: "nums = [4,5,6,7,0,1,2], target = 3",
        output: "-1",
      },
    ],

    constraints: `1 <= nums.length <= 5000
-10^4 <= nums[i], target <= 10^4
All values of nums are unique.
nums is rotated at some pivot.`,

    starterCode: {
      cpp: `class Solution {
public:
    int search(vector<int>& nums, int target) {

    }
};`,

      java: `class Solution {
    public int search(int[] nums, int target) {

    }
}`,

      python: `class Solution:
    def search(self, nums, target):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [4, 5, 6, 7, 0, 1, 2],
          target: 0,
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [4, 5, 6, 7, 0, 1, 2],
          target: 3,
        },
        output: -1,
      },
      {
        input: {
          nums: [1],
          target: 0,
        },
        output: -1,
      },
      {
        input: {
          nums: [1],
          target: 1,
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 5: Find Peak Element
  // =========================

  {
    title: "Find Peak Element",

    description:
      "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.",

    difficulty: "Medium",

    tags: ["Array", "Binary Search"],

    functionName: "findPeakElement",

    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "2",
      },
      {
        input: "nums = [1,2,1,3,5,6,4]",
        output: "5",
      },
    ],

    constraints: `1 <= nums.length <= 1000
-2^31 <= nums[i] <= 2^31 - 1
nums[i] != nums[i + 1] for all valid i.`,

    starterCode: {
      cpp: `class Solution {
public:
    int findPeakElement(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int findPeakElement(int[] nums) {

    }
}`,

      python: `class Solution:
    def findPeakElement(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 2, 3, 1],
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 2, 1, 3, 5, 6, 4],
        },
        output: 5,
      },
      {
        input: {
          nums: [1],
        },
        output: 0,
      },
    ],
  },

  // =========================
  // Problem 6: Find Minimum in Rotated Sorted Array
  // =========================

  {
    title: "Find Minimum in Rotated Sorted Array",

    description:
      "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",

    difficulty: "Medium",

    tags: ["Array", "Binary Search"],

    functionName: "findMin",

    examples: [
      {
        input: "nums = [3,4,5,1,2]",
        output: "1",
      },
      {
        input: "nums = [4,5,6,7,0,1,2]",
        output: "0",
      },
      {
        input: "nums = [11,13,15,17]",
        output: "11",
      },
    ],

    constraints: `n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All integers of nums are unique.
nums is sorted and rotated.`,

    starterCode: {
      cpp: `class Solution {
public:
    int findMin(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int findMin(int[] nums) {

    }
}`,

      python: `class Solution:
    def findMin(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [3, 4, 5, 1, 2],
        },
        output: 1,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [4, 5, 6, 7, 0, 1, 2],
        },
        output: 0,
      },
      {
        input: {
          nums: [11, 13, 15, 17],
        },
        output: 11,
      },
      {
        input: {
          nums: [2, 1],
        },
        output: 1,
      },
    ],
  },
  // =========================
  // Problem 7: Koko Eating Bananas
  // =========================

  {
    title: "Koko Eating Bananas",

    description:
      "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards will return in h hours. Koko can decide her eating speed k (bananas/hour). Return the minimum integer k such that she can eat all the bananas within h hours.",

    difficulty: "Medium",

    tags: ["Array", "Binary Search"],

    functionName: "minEatingSpeed",

    examples: [
      {
        input: "piles = [3,6,7,11], h = 8",
        output: "4",
      },
      {
        input: "piles = [30,11,23,4,20], h = 5",
        output: "30",
      },
      {
        input: "piles = [30,11,23,4,20], h = 6",
        output: "23",
      },
    ],

    constraints: `1 <= piles.length <= 10^4
1 <= piles[i] <= 10^9
piles.length <= h <= 10^9`,

    starterCode: {
      cpp: `class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {

    }
};`,

      java: `class Solution {
    public int minEatingSpeed(int[] piles, int h) {

    }
}`,

      python: `class Solution:
    def minEatingSpeed(self, piles, h):
        pass`,
    },

    testCases: [
      {
        input: {
          piles: [3, 6, 7, 11],
          h: 8,
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          piles: [30, 11, 23, 4, 20],
          h: 5,
        },
        output: 30,
      },
      {
        input: {
          piles: [30, 11, 23, 4, 20],
          h: 6,
        },
        output: 23,
      },
    ],
  },

  // =========================
  // Problem 8: Capacity To Ship Packages Within D Days
  // =========================

  {
    title: "Capacity To Ship Packages Within D Days",

    description:
      "A conveyor belt has packages that must be shipped within days days. Return the least weight capacity of the ship that will result in all the packages being shipped within the given number of days.",

    difficulty: "Medium",

    tags: ["Array", "Binary Search"],

    functionName: "shipWithinDays",

    examples: [
      {
        input: "weights = [1,2,3,4,5,6,7,8,9,10], days = 5",
        output: "15",
      },
      {
        input: "weights = [3,2,2,4,1,4], days = 3",
        output: "6",
      },
    ],

    constraints: `1 <= days <= weights.length <= 5 * 10^4
1 <= weights[i] <= 500`,

    starterCode: {
      cpp: `class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {

    }
};`,

      java: `class Solution {
    public int shipWithinDays(int[] weights, int days) {

    }
}`,

      python: `class Solution:
    def shipWithinDays(self, weights, days):
        pass`,
    },

    testCases: [
      {
        input: {
          weights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          days: 5,
        },
        output: 15,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          weights: [3, 2, 2, 4, 1, 4],
          days: 3,
        },
        output: 6,
      },
      {
        input: {
          weights: [1, 2, 3, 1, 1],
          days: 4,
        },
        output: 3,
      },
    ],
  },
  // =========================
  // Problem 9: Split Array Largest Sum
  // =========================

  {
    title: "Split Array Largest Sum",

    description:
      "Given an integer array nums and an integer k, split nums into k non-empty continuous subarrays such that the largest sum among these subarrays is minimized. Return the minimized largest sum.",

    difficulty: "Hard",

    tags: ["Array", "Binary Search", "Greedy"],

    functionName: "splitArray",

    examples: [
      {
        input: "nums = [7,2,5,10,8], k = 2",
        output: "18",
      },
      {
        input: "nums = [1,2,3,4,5], k = 2",
        output: "9",
      },
    ],

    constraints: `1 <= nums.length <= 1000
0 <= nums[i] <= 10^6
1 <= k <= min(50, nums.length)`,

    starterCode: {
      cpp: `class Solution {
public:
    int splitArray(vector<int>& nums, int k) {

    }
};`,

      java: `class Solution {
    public int splitArray(int[] nums, int k) {

    }
}`,

      python: `class Solution:
    def splitArray(self, nums, k):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [7, 2, 5, 10, 8],
          k: 2,
        },
        output: 18,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1, 2, 3, 4, 5],
          k: 2,
        },
        output: 9,
      },
      {
        input: {
          nums: [1, 4, 4],
          k: 3,
        },
        output: 4,
      },
    ],
  },

  // =========================
  // Problem 10: Median of Two Sorted Arrays
  // =========================

  {
    title: "Median of Two Sorted Arrays",

    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",

    difficulty: "Hard",

    tags: ["Array", "Binary Search"],

    functionName: "findMedianSortedArrays",

    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
      },
    ],

    constraints: `nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-10^6 <= nums1[i], nums2[i] <= 10^6`,

    starterCode: {
      cpp: `class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {

    }
};`,

      java: `class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {

    }
}`,

      python: `class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        pass`,
    },

    testCases: [
      {
        input: {
          nums1: [1, 3],
          nums2: [2],
        },
        output: 2.0,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums1: [1, 2],
          nums2: [3, 4],
        },
        output: 2.5,
      },
      {
        input: {
          nums1: [],
          nums2: [1],
        },
        output: 1.0,
      },
      {
        input: {
          nums1: [2],
          nums2: [],
        },
        output: 2.0,
      },
    ],
  },

  {
    title: "Find Smallest Letter Greater Than Target",

    description:
      "You are given a characters array letters that is sorted in non-decreasing order and a character target. There are at least two different characters in letters. Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.",

    difficulty: "Easy",

    tags: ["Array", "Binary Search"],

    functionName: "nextGreatestLetter",

    returnType: {
      cpp: "char",
      java: "char",
      python: "char",
    },

    parameters: {
      cpp: [
        { name: "letters", type: "vector<char>" },
        { name: "target", type: "char" },
      ],
      java: [
        { name: "letters", type: "char[]" },
        { name: "target", type: "char" },
      ],
      python: [
        { name: "letters", type: "List[str]" },
        { name: "target", type: "str" },
      ],
    },

    examples: [
      {
        input: 'letters = ["c","f","j"], target = "a"',
        output: '"c"',
        explanation: 'The smallest character greater than "a" is "c".',
      },
      {
        input: 'letters = ["c","f","j"], target = "c"',
        output: '"f"',
        explanation: 'The smallest character strictly greater than "c" is "f".',
      },
      {
        input: 'letters = ["x","x","y","y"], target = "z"',
        output: '"x"',
        explanation:
          'There is no character greater than "z", so return the first character "x".',
      },
    ],

    constraints: `2 <= letters.length <= 10^4
letters consists of lowercase English letters.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.`,

    starterCode: {
      cpp: `class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        
    }
};`,

      java: `class Solution {
public:
    char nextGreatestLetter(char[] letters, char target) {
        
    }
}`,

      python: `class Solution:
    def nextGreatestLetter(self, letters, target):
        pass`,
    },

    testCases: [
      {
        input: {
          letters: ["c", "f", "j"],
          target: "a",
        },
        output: "c",
      },

      {
        input: {
          letters: ["c", "f", "j"],
          target: "c",
        },
        output: "f",
      },

      {
        input: {
          letters: ["x", "x", "y", "y"],
          target: "z",
        },
        output: "x",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          letters: ["c", "f", "j"],
          target: "d",
        },
        output: "f",
      },

      {
        input: {
          letters: ["c", "f", "j"],
          target: "j",
        },
        output: "c",
      },

      {
        input: {
          letters: ["a", "b"],
          target: "a",
        },
        output: "b",
      },

      {
        input: {
          letters: ["a", "a", "b", "c"],
          target: "a",
        },
        output: "b",
      },

      {
        input: {
          letters: ["a", "b", "c"],
          target: "z",
        },
        output: "a",
      },
    ],
  },

  {
    title: "Search a 2D Matrix II",

    description:
      "Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties: integers in each row are sorted in ascending order from left to right, and integers in each column are sorted in ascending order from top to bottom.",

    difficulty: "Medium",

    tags: ["Array", "Binary Search", "Matrix"],

    functionName: "searchMatrix",

    returnType: {
      cpp: "bool",
      java: "boolean",
      python: "bool",
    },

    parameters: {
      cpp: [
        { name: "matrix", type: "vector<vector<int>>" },
        { name: "target", type: "int" },
      ],
      java: [
        { name: "matrix", type: "int[][]" },
        { name: "target", type: "int" },
      ],
      python: [
        { name: "matrix", type: "List[List[int]]" },
        { name: "target", type: "int" },
      ],
    },

    examples: [
      {
        input:
          "matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target = 5",
        output: "true",
        explanation: "The value 5 exists in the matrix.",
      },
      {
        input:
          "matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target = 20",
        output: "false",
        explanation: "The value 20 does not exist in the matrix.",
      },
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]], target = 8",
        output: "true",
        explanation: "The value 8 exists in the matrix.",
      },
    ],

    constraints: `m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
-10^9 <= matrix[i][j] <= 10^9
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-10^9 <= target <= 10^9`,

    starterCode: {
      cpp: `class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
    }
};`,

      java: `class Solution {
public:
    boolean searchMatrix(int[][] matrix, int target) {
        
    }
}`,

      python: `class Solution:
    def searchMatrix(self, matrix, target):
        pass`,
    },

    testCases: [
      {
        input: {
          matrix: [
            [1, 4, 7, 11],
            [2, 5, 8, 12],
            [3, 6, 9, 16],
            [10, 13, 14, 17],
          ],
          target: 5,
        },
        output: true,
      },

      {
        input: {
          matrix: [
            [1, 4, 7, 11],
            [2, 5, 8, 12],
            [3, 6, 9, 16],
            [10, 13, 14, 17],
          ],
          target: 20,
        },
        output: false,
      },

      {
        input: {
          matrix: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ],
          target: 8,
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          matrix: [[1]],
          target: 1,
        },
        output: true,
      },

      {
        input: {
          matrix: [[1]],
          target: 2,
        },
        output: false,
      },

      {
        input: {
          matrix: [
            [1, 4],
            [2, 5],
            [3, 6],
          ],
          target: 3,
        },
        output: true,
      },

      {
        input: {
          matrix: [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
          ],
          target: 10,
        },
        output: false,
      },

      {
        input: {
          matrix: [
            [-5, -3, 0],
            [-2, 1, 4],
            [2, 5, 8],
          ],
          target: -3,
        },
        output: true,
      },
    ],
  },
];

export default binarySearch;
