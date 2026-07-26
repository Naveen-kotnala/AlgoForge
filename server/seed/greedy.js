const greedy = [
  // =========================
  // Problem 1: Assign Cookies
  // =========================

  {
    title: "Assign Cookies",

    description:
      "Assume you are an awesome parent and want to give your children cookies. Each child can receive at most one cookie. Each child has a greed factor and each cookie has a size. If the size of the cookie is greater than or equal to the child's greed factor, the child is satisfied. Return the maximum number of content children.",

    difficulty: "Easy",

    tags: ["Greedy", "Sorting", "Two Pointer"],

    functionName: "findContentChildren",

    examples: [
      {
        input: "g = [1,2,3], s = [1,1]",
        output: "1",
      },
      {
        input: "g = [1,2], s = [1,2,3]",
        output: "2",
      },
    ],

    constraints: `
1 <= g.length, s.length <= 3 * 10^4
1 <= g[i], s[j] <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {

    }
};`,

      java: `class Solution {
    public int findContentChildren(int[] g, int[] s) {

    }
}`,

      python: `class Solution:
    def findContentChildren(self, g, s):
        pass`,
    },

    testCases: [
      {
        input: {
          g: [1, 2, 3],
          s: [1, 1],
        },
        output: 1,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          g: [1, 2],
          s: [1, 2, 3],
        },
        output: 2,
      },
      {
        input: {
          g: [10, 9, 8],
          s: [5],
        },
        output: 0,
      },
    ],
  },

  // =========================
  // Problem 2: Best Time to Buy and Sell Stock
  // =========================

  {
    title: "Best Time to Buy and Sell Stock",

    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",

    difficulty: "Easy",

    tags: ["Greedy", "Array"],

    functionName: "maxProfit",

    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
      },
    ],

    constraints: `
1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
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
          prices: [7, 1, 5, 3, 6, 4],
        },
        output: 5,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          prices: [7, 6, 4, 3, 1],
        },
        output: 0,
      },
      {
        input: {
          prices: [1, 2],
        },
        output: 1,
      },
    ],
  },
  // =========================
  // Problem 3: Jump Game
  // =========================

  {
    title: "Jump Game",

    description:
      "You are given an integer array nums. You are initially positioned at the first index. Each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",

    difficulty: "Medium",

    tags: ["Greedy", "Array"],

    functionName: "canJump",

    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "true",
      },
      {
        input: "nums = [3,2,1,0,4]",
        output: "false",
      },
    ],

    constraints: `
1 <= nums.length <= 10^4
0 <= nums[i] <= 10^5
`,

    starterCode: {
      cpp: `class Solution {
public:
    bool canJump(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public boolean canJump(int[] nums) {

    }
}`,

      python: `class Solution:
    def canJump(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [2, 3, 1, 1, 4],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [3, 2, 1, 0, 4],
        },
        output: false,
      },
      {
        input: {
          nums: [0],
        },
        output: true,
      },
    ],
  },

  // =========================
  // Problem 4: Jump Game II
  // =========================

  {
    title: "Jump Game II",

    description:
      "Given an array nums where nums[i] represents the maximum jump length from that position, return the minimum number of jumps required to reach the last index.",

    difficulty: "Medium",

    tags: ["Greedy", "Array", "BFS"],

    functionName: "jump",

    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "2",
      },
      {
        input: "nums = [2,3,0,1,4]",
        output: "2",
      },
    ],

    constraints: `
1 <= nums.length <= 10^4
0 <= nums[i] <= 1000
It is guaranteed that you can reach the last index.
`,

    starterCode: {
      cpp: `class Solution {
public:
    int jump(vector<int>& nums) {

    }
};`,

      java: `class Solution {
    public int jump(int[] nums) {

    }
}`,

      python: `class Solution:
    def jump(self, nums):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [2, 3, 1, 1, 4],
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [2, 3, 0, 1, 4],
        },
        output: 2,
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
  // Problem 5: Gas Station
  // =========================

  {
    title: "Gas Station",

    description:
      "There are n gas stations along a circular route. You are given two integer arrays gas and cost. At station i, you can get gas[i] amount of gas and it costs cost[i] gas to travel to the next station. Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.",

    difficulty: "Medium",

    tags: ["Greedy", "Array"],

    functionName: "canCompleteCircuit",

    examples: [
      {
        input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        output: "3",
      },
      {
        input: "gas = [2,3,4], cost = [3,4,3]",
        output: "-1",
      },
    ],

    constraints: `
n == gas.length == cost.length
1 <= n <= 10^5
0 <= gas[i], cost[i] <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {

    }
};`,

      java: `class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {

    }
}`,

      python: `class Solution:
    def canCompleteCircuit(self, gas, cost):
        pass`,
    },

    testCases: [
      {
        input: {
          gas: [1, 2, 3, 4, 5],
          cost: [3, 4, 5, 1, 2],
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          gas: [2, 3, 4],
          cost: [3, 4, 3],
        },
        output: -1,
      },
      {
        input: {
          gas: [5],
          cost: [4],
        },
        output: 0,
      },
    ],
  },

  // =========================
  // Problem 6: Lemonade Change
  // =========================

  {
    title: "Lemonade Change",

    description:
      "At a lemonade stand, each lemonade costs $5. Customers are standing in a queue and buy one lemonade at a time. They pay with $5, $10, or $20 bills. Return true if you can provide every customer with correct change.",

    difficulty: "Easy",

    tags: ["Greedy", "Simulation"],

    functionName: "lemonadeChange",

    examples: [
      {
        input: "bills = [5,5,5,10,20]",
        output: "true",
      },
      {
        input: "bills = [5,5,10,10,20]",
        output: "false",
      },
    ],

    constraints: `
1 <= bills.length <= 10^5
bills[i] is either 5, 10, or 20.
`,

    starterCode: {
      cpp: `class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {

    }
};`,

      java: `class Solution {
    public boolean lemonadeChange(int[] bills) {

    }
}`,

      python: `class Solution:
    def lemonadeChange(self, bills):
        pass`,
    },

    testCases: [
      {
        input: {
          bills: [5, 5, 5, 10, 20],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          bills: [5, 5, 10, 10, 20],
        },
        output: false,
      },
      {
        input: {
          bills: [10],
        },
        output: false,
      },
    ],
  },
  // =========================
  // Problem 7: Merge Intervals
  // =========================

  {
    title: "Merge Intervals",

    description:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",

    difficulty: "Medium",

    tags: ["Greedy", "Sorting", "Intervals"],

    functionName: "merge",

    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
      },
    ],

    constraints: `
1 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {

    }
};`,

      java: `class Solution {
    public int[][] merge(int[][] intervals) {

    }
}`,

      python: `class Solution:
    def merge(self, intervals):
        pass`,
    },

    testCases: [
      {
        input: {
          intervals: [
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18],
          ],
        },
        output: [
          [1, 6],
          [8, 10],
          [15, 18],
        ],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          intervals: [
            [1, 4],
            [4, 5],
          ],
        },
        output: [[1, 5]],
      },
      {
        input: {
          intervals: [[1, 4]],
        },
        output: [[1, 4]],
      },
    ],
  },

  // =========================
  // Problem 8: Non-overlapping Intervals
  // =========================

  {
    title: "Non-overlapping Intervals",

    description:
      "Given an array of intervals, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",

    difficulty: "Medium",

    tags: ["Greedy", "Sorting", "Intervals"],

    functionName: "eraseOverlapIntervals",

    examples: [
      {
        input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        output: "1",
      },
      {
        input: "intervals = [[1,2],[1,2],[1,2]]",
        output: "2",
      },
    ],

    constraints: `
1 <= intervals.length <= 10^5
intervals[i].length == 2
-5 * 10^4 <= starti < endi <= 5 * 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {

    }
};`,

      java: `class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {

    }
}`,

      python: `class Solution:
    def eraseOverlapIntervals(self, intervals):
        pass`,
    },

    testCases: [
      {
        input: {
          intervals: [
            [1, 2],
            [2, 3],
            [3, 4],
            [1, 3],
          ],
        },
        output: 1,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          intervals: [
            [1, 2],
            [1, 2],
            [1, 2],
          ],
        },
        output: 2,
      },
      {
        input: {
          intervals: [
            [1, 2],
            [2, 3],
          ],
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 9: Partition Labels
  // =========================

  {
    title: "Partition Labels",

    description:
      "You are given a string s. Partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of the sizes of these parts.",

    difficulty: "Medium",

    tags: ["Greedy", "String", "Hash Table"],

    functionName: "partitionLabels",

    examples: [
      {
        input: 's = "ababcbacadefegdehijhklij"',
        output: "[9,7,8]",
      },
      {
        input: 's = "eccbbbbdec"',
        output: "[10]",
      },
    ],

    constraints: `
1 <= s.length <= 500
s consists of lowercase English letters.
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<int> partitionLabels(string s) {

    }
};`,

      java: `class Solution {
    public List<Integer> partitionLabels(String s) {

    }
}`,

      python: `class Solution:
    def partitionLabels(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "ababcbacadefegdehijhklij",
        },
        output: [9, 7, 8],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "eccbbbbdec",
        },
        output: [10],
      },
      {
        input: {
          s: "abc",
        },
        output: [1, 1, 1],
      },
    ],
  },

  // =========================
  // Problem 10: Task Scheduler
  // =========================

  {
    title: "Task Scheduler",

    description:
      "Given a characters array tasks, where tasks[i] represents a task that needs to be completed. Each task takes one unit of time. You are also given an integer n representing the cooldown period between the same tasks. Return the minimum number of intervals required to complete all tasks.",

    difficulty: "Medium",

    tags: ["Greedy", "Heap", "Priority Queue", "Counting"],

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
  // Problem 11: Candy
  // =========================

  {
    title: "Candy",

    description:
      "There are n children standing in a line. Each child is assigned a rating value. You are giving candies to these children based on the following rules: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to give.",

    difficulty: "Hard",

    tags: ["Greedy", "Array", "Two Pass"],

    functionName: "candy",

    examples: [
      {
        input: "ratings = [1,0,2]",
        output: "5",
      },
      {
        input: "ratings = [1,2,2]",
        output: "4",
      },
    ],

    constraints: `
1 <= ratings.length <= 2 * 10^4
0 <= ratings[i] <= 2 * 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    int candy(vector<int>& ratings) {

    }
};`,

      java: `class Solution {
    public int candy(int[] ratings) {

    }
}`,

      python: `class Solution:
    def candy(self, ratings):
        pass`,
    },

    testCases: [
      {
        input: {
          ratings: [1, 0, 2],
        },
        output: 5,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          ratings: [1, 2, 2],
        },
        output: 4,
      },
      {
        input: {
          ratings: [1],
        },
        output: 1,
      },
    ],
  },

  // =========================
  // Problem 12: Meeting Rooms II
  // =========================

  {
    title: "Meeting Rooms II",

    description:
      "Given an array of meeting time intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.",

    difficulty: "Medium",

    tags: ["Greedy", "Sorting", "Heap", "Intervals"],

    functionName: "minMeetingRooms",

    examples: [
      {
        input: "intervals = [[0,30],[5,10],[15,20]]",
        output: "2",
      },
      {
        input: "intervals = [[7,10],[2,4]]",
        output: "1",
      },
    ],

    constraints: `
1 <= intervals.length <= 10^4
0 <= starti < endi <= 10^6
`,

    starterCode: {
      cpp: `class Solution {
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {

    }
};`,

      java: `class Solution {
    public int minMeetingRooms(int[][] intervals) {

    }
}`,

      python: `class Solution:
    def minMeetingRooms(self, intervals):
        pass`,
    },

    testCases: [
      {
        input: {
          intervals: [
            [0, 30],
            [5, 10],
            [15, 20],
          ],
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          intervals: [
            [7, 10],
            [2, 4],
          ],
        },
        output: 1,
      },
      {
        input: {
          intervals: [
            [1, 5],
            [2, 6],
            [3, 7],
          ],
        },
        output: 3,
      },
    ],
  },
  // =========================
  // Problem 13: Queue Reconstruction by Height
  // =========================

  {
    title: "Queue Reconstruction by Height",

    description:
      "You are given an array of people where people[i] = [hi, ki], representing the height of a person and the number of people in front of this person who have a height greater than or equal to hi. Reconstruct and return the queue.",

    difficulty: "Medium",

    tags: ["Greedy", "Sorting", "Array"],

    functionName: "reconstructQueue",

    examples: [
      {
        input: "people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]",
        output: "[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]",
      },
    ],

    constraints: `
1 <= people.length <= 2000
0 <= hi <= 10^6
0 <= ki < people.length
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {

    }
};`,

      java: `class Solution {
    public int[][] reconstructQueue(int[][] people) {

    }
}`,

      python: `class Solution:
    def reconstructQueue(self, people):
        pass`,
    },

    testCases: [
      {
        input: {
          people: [
            [7, 0],
            [4, 4],
            [7, 1],
            [5, 0],
            [6, 1],
            [5, 2],
          ],
        },
        output: [
          [5, 0],
          [7, 0],
          [5, 2],
          [6, 1],
          [4, 4],
          [7, 1],
        ],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          people: [
            [6, 0],
            [5, 0],
            [4, 0],
            [3, 2],
            [2, 2],
            [1, 4],
          ],
        },
        output: [
          [4, 0],
          [5, 0],
          [2, 2],
          [3, 2],
          [1, 4],
          [6, 0],
        ],
      },
    ],
  },

  // =========================
  // Problem 14: Minimum Number of Arrows to Burst Balloons
  // =========================

  {
    title: "Minimum Number of Arrows to Burst Balloons",

    description:
      "There are some spherical balloons taped onto a wall. Each balloon is represented by intervals where xstart and xend represent horizontal coordinates. Return the minimum number of arrows required to burst all balloons.",

    difficulty: "Medium",

    tags: ["Greedy", "Sorting", "Intervals"],

    functionName: "findMinArrowShots",

    examples: [
      {
        input: "points = [[10,16],[2,8],[1,6],[7,12]]",
        output: "2",
      },
      {
        input: "points = [[1,2],[3,4],[5,6],[7,8]]",
        output: "4",
      },
    ],

    constraints: `
1 <= points.length <= 10^5
points[i].length == 2
-2^31 <= xstart < xend <= 2^31 - 1
`,

    starterCode: {
      cpp: `class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {

    }
};`,

      java: `class Solution {
    public int findMinArrowShots(int[][] points) {

    }
}`,

      python: `class Solution:
    def findMinArrowShots(self, points):
        pass`,
    },

    testCases: [
      {
        input: {
          points: [
            [10, 16],
            [2, 8],
            [1, 6],
            [7, 12],
          ],
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          points: [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
          ],
        },
        output: 4,
      },
      {
        input: {
          points: [
            [1, 10],
            [2, 9],
            [3, 8],
          ],
        },
        output: 1,
      },
    ],
  },
  // =========================
  // Problem 15: Huffman Coding
  // =========================

  {
    title: "Huffman Coding",

    description:
      "Given a set of characters with their frequencies, build a Huffman Tree and generate binary codes for each character such that the total encoded length is minimized.",

    difficulty: "Hard",

    tags: ["Greedy", "Heap", "Binary Tree"],

    functionName: "huffmanCodes",

    examples: [
      {
        input: "chars = ['a','b','c','d','e','f'], freq = [5,9,12,13,16,45]",
        output: "Valid Huffman Codes",
      },
    ],

    constraints: `
1 <= number of characters <= 100
1 <= frequency <= 10^5
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<string> huffmanCodes(string S, vector<int> f, int N) {

    }
};`,

      java: `class Solution {
    public ArrayList<String> huffmanCodes(String S, int[] f, int N) {

    }
}`,

      python: `class Solution:
    def huffmanCodes(self, S, f, N):
        pass`,
    },

    testCases: [
      {
        input: {
          S: "abcdef",
          f: [5, 9, 12, 13, 16, 45],
          N: 6,
        },
        output: "Valid Huffman Codes",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          S: "abc",
          f: [5, 9, 12],
          N: 3,
        },
        output: "Valid Huffman Codes",
      },
    ],
  },

  // =========================
  // Problem 16: Maximum Units on a Truck
  // =========================

  {
    title: "Maximum Units on a Truck",

    description:
      "You are given boxTypes where boxTypes[i] = [numberOfBoxes, numberOfUnitsPerBox]. You have a truck that can carry maximumTruckSize boxes. Return the maximum total number of units you can put on the truck.",

    difficulty: "Easy",

    tags: ["Greedy", "Sorting"],

    functionName: "maximumUnits",

    examples: [
      {
        input: "boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4",
        output: "8",
      },
      {
        input: "boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10",
        output: "91",
      },
    ],

    constraints: `
1 <= boxTypes.length <= 1000
1 <= numberOfBoxes, numberOfUnitsPerBox <= 1000
1 <= truckSize <= 10^6
`,

    starterCode: {
      cpp: `class Solution {
public:
    int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {

    }
};`,

      java: `class Solution {
    public int maximumUnits(int[][] boxTypes, int truckSize) {

    }
}`,

      python: `class Solution:
    def maximumUnits(self, boxTypes, truckSize):
        pass`,
    },

    testCases: [
      {
        input: {
          boxTypes: [
            [1, 3],
            [2, 2],
            [3, 1],
          ],
          truckSize: 4,
        },
        output: 8,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          boxTypes: [
            [5, 10],
            [2, 5],
            [4, 7],
            [3, 9],
          ],
          truckSize: 10,
        },
        output: 91,
      },
      {
        input: {
          boxTypes: [[1, 10]],
          truckSize: 1,
        },
        output: 10,
      },
    ],
  },
];

export default greedy;
