const queue = [
  // =========================
  // Problem 1: Implement Queue using Stacks
  // =========================

  {
    title: "Implement Queue using Stacks",

    description:
      "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue.",

    difficulty: "Easy",

    tags: ["Queue", "Stack", "Design"],

    functionName: "MyQueue",

    examples: [
      {
        input: '["MyQueue","push","push","peek","pop","empty"]',
        output: "[null,null,null,1,1,false]",
      },
    ],

    constraints: `1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All calls to pop and peek are valid.`,

    starterCode: {
      cpp: `class MyQueue {
public:
    MyQueue() {

    }

    void push(int x) {

    }

    int pop() {

    }

    int peek() {

    }

    bool empty() {

    }
};`,

      java: `class MyQueue {

    public MyQueue() {

    }

    public void push(int x) {

    }

    public int pop() {

    }

    public int peek() {

    }

    public boolean empty() {

    }
}`,

      python: `class MyQueue:

    def __init__(self):
        pass

    def push(self, x):
        pass

    def pop(self):
        pass

    def peek(self):
        pass

    def empty(self):
        pass`,
    },

    testCases: [
      {
        input: {
          operations: ["push", "push", "peek", "pop", "empty"],
          values: [1, 2],
        },
        output: [1, 1, false],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          operations: ["push", "pop", "empty"],
          values: [5],
        },
        output: [5, true],
      },
      {
        input: {
          operations: ["push", "push", "pop", "peek"],
          values: [1, 2],
        },
        output: [1, 2],
      },
    ],
  },

  // =========================
  // Problem 2: Implement Stack using Queues
  // =========================

  {
    title: "Implement Stack using Queues",

    description:
      "Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack.",

    difficulty: "Easy",

    tags: ["Queue", "Stack", "Design"],

    functionName: "MyStack",

    examples: [
      {
        input: '["MyStack","push","push","top","pop","empty"]',
        output: "[null,null,null,2,2,false]",
      },
    ],

    constraints: `1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All calls to pop and top are valid.`,

    starterCode: {
      cpp: `class MyStack {
public:
    MyStack() {

    }

    void push(int x) {

    }

    int pop() {

    }

    int top() {

    }

    bool empty() {

    }
};`,

      java: `class MyStack {

    public MyStack() {

    }

    public void push(int x) {

    }

    public int pop() {

    }

    public int top() {

    }

    public boolean empty() {

    }
}`,

      python: `class MyStack:

    def __init__(self):
        pass

    def push(self, x):
        pass

    def pop(self):
        pass

    def top(self):
        pass

    def empty(self):
        pass`,
    },

    testCases: [
      {
        input: {
          operations: ["push", "push", "top", "pop", "empty"],
          values: [1, 2],
        },
        output: [2, 2, false],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          operations: ["push", "pop", "empty"],
          values: [10],
        },
        output: [10, true],
      },
      {
        input: {
          operations: ["push", "push", "pop", "top"],
          values: [5, 6],
        },
        output: [6, 5],
      },
    ],
  },
  // =========================
  // Problem 3: Number of Recent Calls
  // =========================

  {
    title: "Number of Recent Calls",

    description:
      "You have a RecentCounter class which counts the number of recent requests within the last 3000 milliseconds. Implement the ping(int t) function.",

    difficulty: "Easy",

    tags: ["Queue", "Design", "Data Stream"],

    functionName: "RecentCounter",

    examples: [
      {
        input: '["RecentCounter","ping","ping","ping","ping"]',
        output: "[null,1,2,3,3]",
      },
    ],

    constraints: `1 <= t <= 10^9
Each call to ping uses a strictly larger value of t.
At most 10^4 calls will be made.`,

    starterCode: {
      cpp: `class RecentCounter {
public:
    RecentCounter() {

    }

    int ping(int t) {

    }
};`,

      java: `class RecentCounter {

    public RecentCounter() {

    }

    public int ping(int t) {

    }
}`,

      python: `class RecentCounter:

    def __init__(self):
        pass

    def ping(self, t):
        pass`,
    },

    testCases: [
      {
        input: {
          operations: ["ping", "ping", "ping", "ping"],
          values: [1, 100, 3001, 3002],
        },
        output: [1, 2, 3, 3],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          operations: ["ping", "ping"],
          values: [5000, 8000],
        },
        output: [1, 2],
      },
      {
        input: {
          operations: ["ping"],
          values: [1],
        },
        output: [1],
      },
    ],
  },

  // =========================
  // Problem 4: Dota2 Senate
  // =========================

  {
    title: "Dota2 Senate",

    description:
      "In the Dota2 senate, senators from two parties (Radiant and Dire) vote to ban members of the opposing party. Given the order of senators, predict which party will finally win.",

    difficulty: "Medium",

    tags: ["Queue", "Greedy", "Simulation"],

    functionName: "predictPartyVictory",

    examples: [
      {
        input: 'senate = "RD"',
        output: '"Radiant"',
      },
      {
        input: 'senate = "RDD"',
        output: '"Dire"',
      },
    ],

    constraints: `1 <= senate.length <= 10^4
senate[i] is either 'R' or 'D'.`,

    starterCode: {
      cpp: `class Solution {
public:
    string predictPartyVictory(string senate) {

    }
};`,

      java: `class Solution {
    public String predictPartyVictory(String senate) {

    }
}`,

      python: `class Solution:
    def predictPartyVictory(self, senate):
        pass`,
    },

    testCases: [
      {
        input: {
          senate: "RD",
        },
        output: "Radiant",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          senate: "RDD",
        },
        output: "Dire",
      },
      {
        input: {
          senate: "RRDDD",
        },
        output: "Radiant",
      },
    ],
  },
  // =========================
  // Problem 5: Sliding Window Maximum
  // =========================

  {
    title: "Sliding Window Maximum",

    description:
      "You are given an array of integers nums, and there is a sliding window of size k moving from left to right. Return the maximum value in each sliding window.",

    difficulty: "Hard",

    tags: ["Queue", "Deque", "Sliding Window", "Array"],

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

    constraints: `1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
1 <= k <= nums.length`,

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
          nums: [9, 10, 9, -7, -4, -8, 2, -6],
          k: 5,
        },
        output: [10, 10, 9, 2],
      },
    ],
  },

  // =========================
  // Problem 6: First Unique Character in a Stream
  // =========================

  {
    title: "First Unique Character in a Stream",

    description:
      "Implement a data structure that returns the first non-repeating character after each insertion into a character stream. If there is no unique character, return '#'.",

    difficulty: "Medium",

    tags: ["Queue", "Hash Map", "String"],

    functionName: "FirstNonRepeating",

    examples: [
      {
        input: 'stream = "aabc"',
        output: '"a#bb"',
      },
      {
        input: 'stream = "zz"',
        output: '"z#"',
      },
    ],

    constraints: `1 <= stream.length <= 10^5
stream consists of lowercase English letters.`,

    starterCode: {
      cpp: `class Solution {
public:
    string FirstNonRepeating(string stream) {

    }
};`,

      java: `class Solution {
    public String FirstNonRepeating(String stream) {

    }
}`,

      python: `class Solution:
    def FirstNonRepeating(self, stream):
        pass`,
    },

    testCases: [
      {
        input: {
          stream: "aabc",
        },
        output: "a#bb",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          stream: "zz",
        },
        output: "z#",
      },
      {
        input: {
          stream: "abcabc",
        },
        output: "aaabc#",
      },
    ],
  },
  // =========================
  // Problem 7: Design Circular Queue
  // =========================

  {
    title: "Design Circular Queue",

    description:
      "Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO principle and the last position is connected back to the first position to make a circle.",

    difficulty: "Medium",

    tags: ["Queue", "Design", "Array"],

    functionName: "MyCircularQueue",

    examples: [
      {
        input:
          '["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]',
        output: "[null,true,true,true,false,3,true,true,true,4]",
      },
    ],

    constraints: `1 <= k <= 1000
0 <= value <= 1000
At most 3000 calls will be made.`,

    starterCode: {
      cpp: `class MyCircularQueue {
public:
    MyCircularQueue(int k) {

    }

    bool enQueue(int value) {

    }

    bool deQueue() {

    }

    int Front() {

    }

    int Rear() {

    }

    bool isEmpty() {

    }

    bool isFull() {

    }
};`,

      java: `class MyCircularQueue {

    public MyCircularQueue(int k) {

    }

    public boolean enQueue(int value) {

    }

    public boolean deQueue() {

    }

    public int Front() {

    }

    public int Rear() {

    }

    public boolean isEmpty() {

    }

    public boolean isFull() {

    }
}`,

      python: `class MyCircularQueue:

    def __init__(self, k):
        pass

    def enQueue(self, value):
        pass

    def deQueue(self):
        pass

    def Front(self):
        pass

    def Rear(self):
        pass

    def isEmpty(self):
        pass

    def isFull(self):
        pass`,
    },

    testCases: [
      {
        input: {
          k: 3,
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          k: 5,
        },
        output: true,
      },
      {
        input: {
          k: 1,
        },
        output: true,
      },
    ],
  },

  // =========================
  // Problem 8: Shortest Subarray with Sum at Least K
  // =========================

  {
    title: "Shortest Subarray with Sum at Least K",

    description:
      "Return the length of the shortest non-empty subarray of nums with sum at least k. If there is no such subarray, return -1.",

    difficulty: "Hard",

    tags: ["Queue", "Deque", "Prefix Sum", "Sliding Window"],

    functionName: "shortestSubarray",

    examples: [
      {
        input: "nums = [1], k = 1",
        output: "1",
      },
      {
        input: "nums = [1,2], k = 4",
        output: "-1",
      },
      {
        input: "nums = [2,-1,2], k = 3",
        output: "3",
      },
    ],

    constraints: `1 <= nums.length <= 10^5
-10^5 <= nums[i] <= 10^5
1 <= k <= 10^9`,

    starterCode: {
      cpp: `class Solution {
public:
    int shortestSubarray(vector<int>& nums, int k) {

    }
};`,

      java: `class Solution {
    public int shortestSubarray(int[] nums, int k) {

    }
}`,

      python: `class Solution:
    def shortestSubarray(self, nums, k):
        pass`,
    },

    testCases: [
      {
        input: {
          nums: [2, -1, 2],
          k: 3,
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [1],
          k: 1,
        },
        output: 1,
      },
      {
        input: {
          nums: [1, 2],
          k: 4,
        },
        output: -1,
      },
    ],
  },
];

export default queue;
