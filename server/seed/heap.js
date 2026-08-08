const heap = [
  // =========================
  // Problem 1: Kth Largest Element in an Array
  // =========================

  {
    title: "Kth Largest Element in an Array",

    description:
      "Given an integer array nums and an integer k, return the kth largest element in the array.",

    difficulty: "Medium",

    tags: ["Heap", "Priority Queue", "Sorting"],

    functionName: "findKthLargest",

    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
      },
      {
        input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        output: "4",
      },
    ],

    constraints: `
1 <= k <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {

    }
};`,

      java: `class Solution {
    public int findKthLargest(int[] nums, int k) {

    }
}`,

      python: `class Solution:
    def findKthLargest(self, nums, k):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [3, 2, 1, 5, 6, 4],
          k: 2,
        },
        output: 5,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [3, 2, 3, 1, 2, 4, 5, 5, 6],
          k: 4,
        },
        output: 4,
      },
      {
        input: {
          nums: [1],
          k: 1,
        },
        output: 1,
      },
    ],
  },

  // =========================
  // Problem 2: Kth Smallest Element in a Sorted Matrix
  // =========================

  {
    title: "Kth Smallest Element in a Sorted Matrix",

    description:
      "Given an n x n matrix where each row and column is sorted in ascending order, return the kth smallest element in the matrix.",

    difficulty: "Medium",

    tags: ["Heap", "Priority Queue", "Binary Search"],

    functionName: "kthSmallest",

    examples: [
      {
        input: "matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8",
        output: "13",
      },
      {
        input: "matrix = [[-5]], k = 1",
        output: "-5",
      },
    ],

    constraints: `
1 <= n <= 300
-10^9 <= matrix[i][j] <= 10^9
1 <= k <= n^2
`,

    starterCode: {
      cpp: `class Solution {
public:
    int kthSmallest(vector<vector<int>>& matrix, int k) {

    }
};`,

      java: `class Solution {
    public int kthSmallest(int[][] matrix, int k) {

    }
}`,

      python: `class Solution:
    def kthSmallest(self, matrix, k):
        pass`,
    },

    testCases: [
      {
        input: {
          matrix: [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15],
          ],
          k: 8,
        },
        output: 13,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          matrix: [
            [1, 2],
            [3, 4],
          ],
          k: 2,
        },
        output: 2,
      },
      {
        input: {
          matrix: [[-5]],
          k: 1,
        },
        output: -5,
      },
    ],
  },
  // =========================
  // Problem 3: Top K Frequent Elements
  // =========================

  {
    title: "Top K Frequent Elements",

    description:
      "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",

    difficulty: "Medium",

    tags: ["Heap", "Priority Queue", "Hash Map", "Bucket Sort"],

    functionName: "topKFrequent",

    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
      },
    ],

    constraints: `
1 <= nums.length <= 10^5
k is in the range [1, number of unique elements]
-10^4 <= nums[i] <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {

    }
};`,

      java: `class Solution {
    public int[] topKFrequent(int[] nums, int k) {

    }
}`,

      python: `class Solution:
    def topKFrequent(self, nums, k):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 1, 1, 2, 2, 3],
          k: 2,
        },
        output: [1, 2],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1],
          k: 1,
        },
        output: [1],
      },
      {
        input: {
          nums: [4, 4, 4, 5, 5, 6],
          k: 2,
        },
        output: [4, 5],
      },
    ],
  },

  // =========================
  // Problem 4: Last Stone Weight
  // =========================

  {
    title: "Last Stone Weight",

    description:
      "You are given an array of stones where stones[i] is the weight of the ith stone. Each turn, choose the two heaviest stones and smash them together. Return the weight of the last remaining stone or 0 if no stones remain.",

    difficulty: "Easy",

    tags: ["Heap", "Priority Queue"],

    functionName: "lastStoneWeight",

    examples: [
      {
        input: "stones = [2,7,4,1,8,1]",
        output: "1",
      },
      {
        input: "stones = [1]",
        output: "1",
      },
    ],

    constraints: `
1 <= stones.length <= 30
1 <= stones[i] <= 1000
`,

    starterCode: {
      cpp: `class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {

    }
};`,

      java: `class Solution {
    public int lastStoneWeight(int[] stones) {

    }
}`,

      python: `class Solution:
    def lastStoneWeight(self, stones):
        pass`,
    },

    testCases: [
      {
        input: {
          stones: [2, 7, 4, 1, 8, 1],
        },
        output: 1,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          stones: [1],
        },
        output: 1,
      },
      {
        input: {
          stones: [2, 2],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 5: Merge K Sorted Lists
  // =========================

  {
    title: "Merge K Sorted Lists",

    description:
      "You are given an array of k linked-lists where each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",

    difficulty: "Hard",

    tags: ["Heap", "Priority Queue", "Linked List", "Divide and Conquer"],

    functionName: "mergeKLists",

    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
      },
      {
        input: "lists = []",
        output: "[]",
      },
    ],

    constraints: `
k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= Node.val <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {

    }
};`,

      java: `class Solution {
    public ListNode mergeKLists(ListNode[] lists) {

    }
}`,

      python: `class Solution:
    def mergeKLists(self, lists):
        pass`,
    },

    testCases: [
      {
        input: {
          lists: [
            [1, 4, 5],
            [1, 3, 4],
            [2, 6],
          ],
        },
        output: [1, 1, 2, 3, 4, 4, 5, 6],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          lists: [],
        },
        output: [],
      },
      {
        input: {
          lists: [[1]],
        },
        output: [1],
      },
    ],
  },

  // =========================
  // Problem 6: Find Median from Data Stream
  // =========================

  {
    title: "Find Median from Data Stream",

    description:
      "The median is the middle value in an ordered integer list. Design a data structure that supports adding numbers and finding the median from all elements added so far.",

    difficulty: "Hard",

    tags: ["Heap", "Priority Queue", "Two Heaps"],

    functionName: "MedianFinder",

    examples: [
      {
        input: "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()",
        output: "1.5, 2",
      },
    ],

    constraints: `
-10^5 <= num <= 10^5
At most 5 * 10^4 calls will be made to addNum and findMedian.
`,

    starterCode: {
      cpp: `class MedianFinder {
public:

    MedianFinder() {

    }

    void addNum(int num) {

    }

    double findMedian() {

    }
};`,

      java: `class MedianFinder {

    public MedianFinder() {

    }

    public void addNum(int num) {

    }

    public double findMedian() {

    }
}`,

      python: `class MedianFinder:

    def __init__(self):

        pass

    def addNum(self, num):

        pass

    def findMedian(self):

        pass`,
    },

    testCases: [
      {
        input: [
          "addNum(1)",
          "addNum(2)",
          "findMedian()",
          "addNum(3)",
          "findMedian()",
        ],
        output: [1.5, 2],
      },
    ],

    hiddenTestCases: [
      {
        input: ["addNum(5)", "findMedian()"],
        output: [5],
      },
      {
        input: ["addNum(2)", "addNum(4)", "addNum(6)", "findMedian()"],
        output: [4],
      },
    ],
  },
  // =========================
  // Problem 7: K Closest Points to Origin
  // =========================

  {
    title: "K Closest Points to Origin",

    description:
      "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0,0).",

    difficulty: "Medium",

    tags: ["Heap", "Priority Queue", "Sorting"],

    functionName: "kClosest",

    examples: [
      {
        input: "points = [[1,3],[-2,2]], k = 1",
        output: "[[-2,2]]",
      },
      {
        input: "points = [[3,3],[5,-1],[-2,4]], k = 2",
        output: "[[3,3],[-2,4]]",
      },
    ],

    constraints: `
1 <= k <= points.length <= 10^4
-10^4 <= xi, yi <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {

    }
};`,

      java: `class Solution {
    public int[][] kClosest(int[][] points, int k) {

    }
}`,

      python: `class Solution:
    def kClosest(self, points, k):
        pass`,
    },

    testCases: [
      {
        input: {
          points: [
            [1, 3],
            [-2, 2],
          ],
          k: 1,
        },
        output: [[-2, 2]],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          points: [
            [3, 3],
            [5, -1],
            [-2, 4],
          ],
          k: 2,
        },
        output: [
          [3, 3],
          [-2, 4],
        ],
      },
      {
        input: {
          points: [[0, 1]],
          k: 1,
        },
        output: [[0, 1]],
      },
    ],
  },

  // =========================
  // Problem 8: Task Scheduler (Heap Approach)
  // =========================

  {
    title: "Task Scheduler",

    description:
      "Given a list of tasks represented by characters and a cooldown period n, return the minimum number of intervals needed to complete all tasks. The same task must have at least n intervals between two executions.",

    difficulty: "Medium",

    tags: ["Heap", "Priority Queue", "Greedy"],

    functionName: "leastInterval",

    examples: [
      {
        input: 'tasks = ["A","A","A","B","B","B"], n = 2',
        output: "8",
      },
      {
        input: 'tasks = ["A","A","A","B","B","B"], n = 0',
        output: "6",
      },
    ],

    constraints: `
1 <= tasks.length <= 10^4
tasks[i] is an uppercase English letter.
0 <= n <= 100
`,

    starterCode: {
      cpp: `class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {

    }
};`,

      java: `class Solution {
    public int leastInterval(char[] tasks, int n) {

    }
}`,

      python: `class Solution:
    def leastInterval(self, tasks, n):
        pass`,
    },

    testCases: [
      {
        input: {
          tasks: ["A", "A", "A", "B", "B", "B"],
          n: 2,
        },
        output: 8,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          tasks: ["A", "A", "A", "B", "B", "B"],
          n: 0,
        },
        output: 6,
      },
      {
        input: {
          tasks: ["A"],
          n: 2,
        },
        output: 1,
      },
    ],
  },
  // =========================
  // Problem 9: Reorganize String
  // =========================

  {
    title: "Reorganize String",

    description:
      "Given a string s, rearrange the characters of s so that no two adjacent characters are the same. Return any possible rearrangement or return an empty string if it is impossible.",

    difficulty: "Medium",

    tags: ["Heap", "Priority Queue", "Greedy", "Hash Map"],

    functionName: "reorganizeString",

    examples: [
      {
        input: 's = "aab"',
        output: '"aba"',
      },
      {
        input: 's = "aaab"',
        output: '""',
      },
    ],

    constraints: `
1 <= s.length <= 500
s consists of lowercase English letters.
`,

    starterCode: {
      cpp: `class Solution {
public:
    string reorganizeString(string s) {

    }
};`,

      java: `class Solution {
    public String reorganizeString(String s) {

    }
}`,

      python: `class Solution:
    def reorganizeString(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "aab",
        },
        output: "aba",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "aaab",
        },
        output: "",
      },
      {
        input: {
          s: "vvvlo",
        },
        output: "vovlv",
      },
    ],
  },

  // =========================
  // Problem 10: Smallest Range Covering Elements from K Lists
  // =========================

  {
    title: "Smallest Range Covering Elements from K Lists",

    description:
      "You have k sorted lists of integers. Find the smallest range that includes at least one number from each of the k lists.",

    difficulty: "Hard",

    tags: ["Heap", "Priority Queue", "Sliding Window"],

    functionName: "smallestRange",

    examples: [
      {
        input: "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]",
        output: "[20,24]",
      },
      {
        input: "nums = [[1,2,3],[1,2,3],[1,2,3]]",
        output: "[1,1]",
      },
    ],

    constraints: `
1 <= nums.length <= 3500
1 <= nums[i].length <= 50
nums[i] sorted in ascending order.
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> smallestRange(vector<vector<int>>& nums) {

    }
};`,

      java: `class Solution {
    public int[] smallestRange(List<List<Integer>> nums) {

    }
}`,

      python: `class Solution:
    def smallestRange(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [
            [4, 10, 15, 24, 26],
            [0, 9, 12, 20],
            [5, 18, 22, 30],
          ],
        },
        output: [20, 24],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
          ],
        },
        output: [1, 1],
      },
      {
        input: {
          nums: [[1], [2], [3]],
        },
        output: [1, 3],
      },
    ],
  },
  // =========================
  // Problem 11: Sort Characters By Frequency
  // =========================

  {
    title: "Sort Characters By Frequency",

    description:
      "Given a string s, sort it in decreasing order based on the frequency of the characters. Return the sorted string.",

    difficulty: "Medium",

    tags: ["Heap", "Priority Queue", "Hash Map", "Sorting"],

    functionName: "frequencySort",

    examples: [
      {
        input: 's = "tree"',
        output: '"eert"',
      },
      {
        input: 's = "cccaaa"',
        output: '"aaaccc"',
      },
      {
        input: 's = "Aabb"',
        output: '"bbAa"',
      },
    ],

    constraints: `
1 <= s.length <= 5 * 10^5
s consists of uppercase and lowercase English letters.
`,

    starterCode: {
      cpp: `class Solution {
public:
    string frequencySort(string s) {

    }
};`,

      java: `class Solution {
    public String frequencySort(String s) {

    }
}`,

      python: `class Solution:
    def frequencySort(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "tree",
        },
        output: "eert",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "cccaaa",
        },
        output: "aaaccc",
      },
      {
        input: {
          s: "Aabb",
        },
        output: "bbAa",
      },
    ],
  },

  // =========================
  // Problem 12: IPO (Maximum Capital)
  // =========================

  {
    title: "IPO",

    description:
      "You are given n projects where the ith project has a profit and a minimum capital requirement. Initially you have some capital. You can complete at most k projects. Choose projects to maximize your final capital.",

    difficulty: "Hard",

    tags: ["Heap", "Greedy", "Priority Queue", "Sorting"],

    functionName: "findMaximizedCapital",

    examples: [
      {
        input: "k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]",
        output: "4",
      },
      {
        input: "k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]",
        output: "6",
      },
    ],

    constraints: `
1 <= k <= 10^5
0 <= w <= 10^9
1 <= profits.length <= 10^5
0 <= profits[i] <= 10^4
0 <= capital[i] <= 10^9
`,

    starterCode: {
      cpp: `class Solution {
public:
    int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {

    }
};`,

      java: `class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {

    }
}`,

      python: `class Solution:
    def findMaximizedCapital(self, k, w, profits, capital):
        pass`,
    },

    testCases: [
      {
        input: {
          k: 2,
          w: 0,
          profits: [1, 2, 3],
          capital: [0, 1, 1],
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          k: 3,
          w: 0,
          profits: [1, 2, 3],
          capital: [0, 1, 2],
        },
        output: 6,
      },
      {
        input: {
          k: 1,
          w: 0,
          profits: [5],
          capital: [0],
        },
        output: 5,
      },
    ],
  },
  // =========================
  // Problem 13: Sliding Window Maximum
  // =========================

  {
    title: "Sliding Window Maximum",

    description:
      "You are given an array nums and a sliding window of size k that moves from the left to the right. Return the maximum value in each window.",

    difficulty: "Hard",

    tags: ["Heap", "Deque", "Sliding Window"],

    functionName: "maxSlidingWindow",

    examples: [
      {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]",
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
      },
    ],

    constraints: `
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
1 <= k <= nums.length
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {

    }
};`,

      java: `class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {

    }
}`,

      python: `class Solution:
    def maxSlidingWindow(self, nums, k):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [1, 3, -1, -3, 5, 3, 6, 7],
          k: 3,
        },
        output: [3, 3, 5, 5, 6, 7],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1],
          k: 1,
        },
        output: [1],
      },
      {
        input: {
          nums: [9, 11],
          k: 2,
        },
        output: [11],
      },
    ],
  },

  // =========================
  // Problem 14: Meeting Rooms III
  // =========================

  {
    title: "Meeting Rooms III",

    description:
      "You are given n meeting rooms and a list of meetings. Assign each meeting to the available room with the smallest number. If no room is available, delay the meeting until a room becomes free. Return the room that held the most meetings.",

    difficulty: "Hard",

    tags: ["Heap", "Priority Queue", "Sorting"],

    functionName: "mostBooked",

    examples: [
      {
        input: "n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]",
        output: "0",
      },
      {
        input: "n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]",
        output: "1",
      },
    ],

    constraints: `
1 <= n <= 100
1 <= meetings.length <= 10^5
meetings[i].length == 2
0 <= starti < endi <= 5 * 10^5
`,

    starterCode: {
      cpp: `class Solution {
public:
    int mostBooked(int n, vector<vector<int>>& meetings) {

    }
};`,

      java: `class Solution {
    public int mostBooked(int n, int[][] meetings) {

    }
}`,

      python: `class Solution:
    def mostBooked(self, n, meetings):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 2,
          meetings: [
            [0, 10],
            [1, 5],
            [2, 7],
            [3, 4],
          ],
        },
        output: 0,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 3,
          meetings: [
            [1, 20],
            [2, 10],
            [3, 5],
            [4, 9],
            [6, 8],
          ],
        },
        output: 1,
      },
      {
        input: {
          n: 1,
          meetings: [
            [0, 5],
            [5, 10],
          ],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 15: Find K Pairs with Smallest Sums
  // =========================

  {
    title: "Find K Pairs with Smallest Sums",

    description:
      "You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k. Return the k pairs (u,v) with the smallest sums where u belongs to nums1 and v belongs to nums2.",

    difficulty: "Medium",

    tags: ["Heap", "Priority Queue", "K-Way Merge"],

    functionName: "kSmallestPairs",

    examples: [
      {
        input: "nums1 = [1,7,11], nums2 = [2,4,6], k = 3",
        output: "[[1,2],[1,4],[1,6]]",
      },
      {
        input: "nums1 = [1,1,2], nums2 = [1,2,3], k = 2",
        output: "[[1,1],[1,1]]",
      },
    ],

    constraints: `
1 <= nums1.length, nums2.length <= 10^5
-10^9 <= nums1[i], nums2[i] <= 10^9
1 <= k <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {

    }
};`,

      java: `class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {

    }
}`,

      python: `class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
        pass`,
    },

    testCases: [
      {
        input: {
          nums1: [1, 7, 11],
          nums2: [2, 4, 6],
          k: 3,
        },
        output: [
          [1, 2],
          [1, 4],
          [1, 6],
        ],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums1: [1, 1, 2],
          nums2: [1, 2, 3],
          k: 2,
        },
        output: [
          [1, 1],
          [1, 1],
        ],
      },
      {
        input: {
          nums1: [1, 2],
          nums2: [3],
          k: 2,
        },
        output: [
          [1, 3],
          [2, 3],
        ],
      },
    ],
  },

  // =========================
  // Problem 16: Kth Largest Element in a Stream
  // =========================

  {
    title: "Kth Largest Element in a Stream",

    description:
      "Design a class to find the kth largest element in a stream of numbers. The kth largest element is the element that would be in the kth position if all elements were sorted in descending order.",

    difficulty: "Easy",

    tags: ["Heap", "Priority Queue", "Data Stream"],

    functionName: "KthLargest",

    examples: [
      {
        input:
          "k = 3, nums = [4,5,8,2], add(3), add(5), add(10), add(9), add(4)",
        output: "4,5,5,8,8",
      },
    ],

    constraints: `
1 <= k <= 10^4
0 <= nums.length <= 10^4
-10^4 <= val <= 10^4
At most 10^4 calls will be made to add.
`,

    starterCode: {
      cpp: `class KthLargest {
public:

    KthLargest(int k, vector<int>& nums) {

    }

    int add(int val) {

    }
};`,

      java: `class KthLargest {

    public KthLargest(int k, int[] nums) {

    }

    public int add(int val) {

    }
}`,

      python: `class KthLargest:

    def __init__(self, k, nums):

        pass

    def add(self, val):

        pass`,
    },

    testCases: [
      {
        input: {
          k: 3,
          nums: [4, 5, 8, 2],
          operations: ["add(3)", "add(5)", "add(10)", "add(9)", "add(4)"],
        },
        output: [4, 5, 5, 8, 8],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          k: 1,
          nums: [],
          operations: ["add(5)"],
        },
        output: [5],
      },
      {
        input: {
          k: 2,
          nums: [0],
          operations: ["add(-1)", "add(1)"],
        },
        output: [-1, 0],
      },
    ],
  },

  {
    title: "Maximum Performance of a Team",

    description:
      "You are given n engineers. Each engineer has a speed and an efficiency. You need to select at most k engineers to form a team. The performance of a team is defined as the sum of the speeds of all selected engineers multiplied by the minimum efficiency among them. Return the maximum possible performance of the team.",

    difficulty: "Hard",

    tags: ["Heap", "Priority Queue", "Greedy", "Sorting"],

    functionName: "maxPerformance",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [
        { name: "n", type: "int" },
        { name: "speed", type: "vector<int>" },
        { name: "efficiency", type: "vector<int>" },
        { name: "k", type: "int" },
      ],
      java: [
        { name: "n", type: "int" },
        { name: "speed", type: "int[]" },
        { name: "efficiency", type: "int[]" },
        { name: "k", type: "int" },
      ],
      python: [
        { name: "n", type: "int" },
        { name: "speed", type: "List[int]" },
        { name: "efficiency", type: "List[int]" },
        { name: "k", type: "int" },
      ],
    },

    examples: [
      {
        input:
          "n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2",
        output: "60",
        explanation:
          "Selecting engineers with speeds 10 and 5 gives a speed sum of 15 and minimum efficiency of 4, resulting in performance 15 * 4 = 60.",
      },
      {
        input:
          "n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3",
        output: "68",
        explanation:
          "The maximum performance achievable with at most 3 engineers is 68.",
      },
    ],

    constraints: `
1 <= k <= n <= 10^5
1 <= speed[i] <= 10^5
1 <= efficiency[i] <= 10^8
`,

    starterCode: {
      cpp: `class Solution {
public:
    int maxPerformance(int n, vector<int>& speed, vector<int>& efficiency, int k) {

    }
};`,

      java: `class Solution {
public int maxPerformance(int n, int[] speed, int[] efficiency, int k) {

}
}`,

      python: `class Solution:
    def maxPerformance(self, n, speed, efficiency, k):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 6,
          speed: [2, 10, 3, 1, 5, 8],
          efficiency: [5, 4, 3, 9, 7, 2],
          k: 2,
        },
        output: 60,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 6,
          speed: [2, 10, 3, 1, 5, 8],
          efficiency: [5, 4, 3, 9, 7, 2],
          k: 3,
        },
        output: 68,
      },
      {
        input: {
          n: 3,
          speed: [2, 8, 5],
          efficiency: [2, 7, 5],
          k: 2,
        },
        output: 52,
      },
      {
        input: {
          n: 1,
          speed: [5],
          efficiency: [10],
          k: 1,
        },
        output: 50,
      },
    ],
  },

  {
    title: "Ugly Number III",

    description:
      "An ugly number is a positive integer that is divisible by at least one of the integers a, b, or c. Given four integers n, a, b, and c, return the nth ugly number.",

    difficulty: "Medium",

    tags: ["Heap", "Math", "Binary Search", "Number Theory"],

    functionName: "nthUglyNumber",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [
        { name: "n", type: "int" },
        { name: "a", type: "int" },
        { name: "b", type: "int" },
        { name: "c", type: "int" },
      ],
      java: [
        { name: "n", type: "int" },
        { name: "a", type: "int" },
        { name: "b", type: "int" },
        { name: "c", type: "int" },
      ],
      python: [
        { name: "n", type: "int" },
        { name: "a", type: "int" },
        { name: "b", type: "int" },
        { name: "c", type: "int" },
      ],
    },

    examples: [
      {
        input: "n = 3, a = 2, b = 3, c = 5",
        output: "4",
        explanation:
          "The positive integers divisible by 2, 3, or 5 are 2, 3, 4, 5, 6, ... Therefore, the 3rd ugly number is 4.",
      },
      {
        input: "n = 4, a = 2, b = 3, c = 4",
        output: "6",
        explanation:
          "The ugly numbers are 2, 3, 4, 6, 8, 9, ... Therefore, the 4th ugly number is 6.",
      },
      {
        input: "n = 5, a = 2, b = 11, c = 13",
        output: "10",
        explanation:
          "The numbers divisible by 2, 11, or 13 start with 2, 4, 6, 8, 10, ... Therefore, the 5th ugly number is 10.",
      },
    ],

    constraints: `
1 <= n, a, b, c <= 10^9
`,

    starterCode: {
      cpp: `class Solution {
public:
    int nthUglyNumber(int n, int a, int b, int c) {

    }
};`,

      java: `class Solution {
public int nthUglyNumber(int n, int a, int b, int c) {

}
}`,

      python: `class Solution:
    def nthUglyNumber(self, n, a, b, c):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 3,
          a: 2,
          b: 3,
          c: 5,
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 4,
          a: 2,
          b: 3,
          c: 4,
        },
        output: 6,
      },
      {
        input: {
          n: 5,
          a: 2,
          b: 11,
          c: 13,
        },
        output: 10,
      },
      {
        input: {
          n: 1000000000,
          a: 2,
          b: 217983653,
          c: 336916467,
        },
        output: 1999999984,
      },
    ],
  },

  {
    title: "Ugly Number II",

    description:
      "An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer n, return the nth ugly number.",

    difficulty: "Medium",

    tags: ["Heap", "Priority Queue", "Dynamic Programming", "Hash Set"],

    functionName: "nthUglyNumber",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [{ name: "n", type: "int" }],
      java: [{ name: "n", type: "int" }],
      python: [{ name: "n", type: "int" }],
    },

    examples: [
      {
        input: "n = 10",
        output: "12",
        explanation:
          "The first 10 ugly numbers are 1, 2, 3, 4, 5, 6, 8, 9, 10, and 12. Therefore, the 10th ugly number is 12.",
      },
      {
        input: "n = 1",
        output: "1",
        explanation: "1 is considered an ugly number.",
      },
      {
        input: "n = 15",
        output: "24",
        explanation: "The 15th ugly number is 24.",
      },
    ],

    constraints: `
1 <= n <= 1690
`,

    starterCode: {
      cpp: `class Solution {
public:
    int nthUglyNumber(int n) {

    }
};`,

      java: `class Solution {
public int nthUglyNumber(int n) {

}
}`,

      python: `class Solution:
    def nthUglyNumber(self, n):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 10,
        },
        output: 12,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 1,
        },
        output: 1,
      },
      {
        input: {
          n: 15,
        },
        output: 24,
      },
      {
        input: {
          n: 20,
        },
        output: 36,
      },
      {
        input: {
          n: 100,
        },
        output: 1536,
      },
      {
        input: {
          n: 1690,
        },
        output: 2123366400,
      },
    ],
  },
];

export default heap;
