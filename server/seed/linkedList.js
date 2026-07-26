const linkedList = [
  // =========================
  // Problem 1: Reverse Linked List
  // =========================

  {
    title: "Reverse Linked List",

    description:
      "Given the head of a singly linked list, reverse the list, and return the reversed list.",

    difficulty: "Easy",

    tags: ["Linked List"],

    functionName: "reverseList",

    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
      },
      {
        input: "head = []",
        output: "[]",
      },
    ],

    constraints: `The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000`,

    starterCode: {
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {

    }
};`,

      java: `class Solution {
    public ListNode reverseList(ListNode head) {

    }
}`,

      python: `class Solution:
    def reverseList(self, head):
        pass`,
    },

    testCases: [
      {
        input: {
          head: [1, 2, 3, 4, 5],
        },
        output: [5, 4, 3, 2, 1],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          head: [1, 2],
        },
        output: [2, 1],
      },
      {
        input: {
          head: [],
        },
        output: [],
      },
    ],
  },

  // =========================
  // Problem 2: Middle of the Linked List
  // =========================

  {
    title: "Middle of the Linked List",

    description:
      "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",

    difficulty: "Easy",

    tags: ["Linked List", "Two Pointers"],

    functionName: "middleNode",

    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[3,4,5]",
      },
      {
        input: "head = [1,2,3,4,5,6]",
        output: "[4,5,6]",
      },
    ],

    constraints: `The number of nodes in the list is in the range [1,100].
1 <= Node.val <= 100`,

    starterCode: {
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 * };
 */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {

    }
};`,

      java: `class Solution {
    public ListNode middleNode(ListNode head) {

    }
}`,

      python: `class Solution:
    def middleNode(self, head):
        pass`,
    },

    testCases: [
      {
        input: {
          head: [1, 2, 3, 4, 5],
        },
        output: [3, 4, 5],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          head: [1, 2, 3, 4, 5, 6],
        },
        output: [4, 5, 6],
      },
      {
        input: {
          head: [1],
        },
        output: [1],
      },
    ],
  },
  // =========================
  // Problem 3: Merge Two Sorted Lists
  // =========================

  {
    title: "Merge Two Sorted Lists",

    description:
      "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list and return its head.",

    difficulty: "Easy",

    tags: ["Linked List", "Recursion"],

    functionName: "mergeTwoLists",

    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
      },
      {
        input: "list1 = [], list2 = [0]",
        output: "[0]",
      },
    ],

    constraints: `The number of nodes in both lists is in the range [0,50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.`,

    starterCode: {
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {

    }
};`,

      java: `class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

    }
}`,

      python: `class Solution:
    def mergeTwoLists(self, list1, list2):
        pass`,
    },

    testCases: [
      {
        input: {
          list1: [1, 2, 4],
          list2: [1, 3, 4],
        },
        output: [1, 1, 2, 3, 4, 4],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          list1: [],
          list2: [],
        },
        output: [],
      },
      {
        input: {
          list1: [],
          list2: [0],
        },
        output: [0],
      },
    ],
  },

  // =========================
  // Problem 4: Linked List Cycle
  // =========================

  {
    title: "Linked List Cycle",

    description:
      "Given head, determine if the linked list has a cycle in it. Return true if there is a cycle in the linked list, otherwise return false.",

    difficulty: "Easy",

    tags: ["Linked List", "Two Pointers", "Hash Table"],

    functionName: "hasCycle",

    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
      },
      {
        input: "head = [1,2], pos = 0",
        output: "true",
      },
      {
        input: "head = [1], pos = -1",
        output: "false",
      },
    ],

    constraints: `The number of nodes is in the range [0,10^4].
-10^5 <= Node.val <= 10^5
pos is -1 or a valid index in the linked list.`,

    starterCode: {
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {

    }
};`,

      java: `public class Solution {
    public boolean hasCycle(ListNode head) {

    }
}`,

      python: `class Solution:
    def hasCycle(self, head):
        pass`,
    },

    testCases: [
      {
        input: {
          head: [3, 2, 0, -4],
          pos: 1,
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          head: [1, 2],
          pos: 0,
        },
        output: true,
      },
      {
        input: {
          head: [1],
          pos: -1,
        },
        output: false,
      },
    ],
  },
  // =========================
  // Problem 5: Remove Nth Node From End of List
  // =========================

  {
    title: "Remove Nth Node From End of List",

    description:
      "Given the head of a linked list, remove the nth node from the end of the list and return its head.",

    difficulty: "Medium",

    tags: ["Linked List", "Two Pointers"],

    functionName: "removeNthFromEnd",

    examples: [
      {
        input: "head = [1,2,3,4,5], n = 2",
        output: "[1,2,3,5]",
      },
      {
        input: "head = [1], n = 1",
        output: "[]",
      },
      {
        input: "head = [1,2], n = 1",
        output: "[1]",
      },
    ],

    constraints: `The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz`,

    starterCode: {
      cpp: `class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {

    }
};`,

      java: `class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {

    }
}`,

      python: `class Solution:
    def removeNthFromEnd(self, head, n):
        pass`,
    },

    testCases: [
      {
        input: {
          head: [1, 2, 3, 4, 5],
          n: 2,
        },
        output: [1, 2, 3, 5],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          head: [1],
          n: 1,
        },
        output: [],
      },
      {
        input: {
          head: [1, 2],
          n: 1,
        },
        output: [1],
      },
    ],
  },

  // =========================
  // Problem 6: Palindrome Linked List
  // =========================

  {
    title: "Palindrome Linked List",

    description:
      "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",

    difficulty: "Easy",

    tags: ["Linked List", "Two Pointers", "Stack"],

    functionName: "isPalindrome",

    examples: [
      {
        input: "head = [1,2,2,1]",
        output: "true",
      },
      {
        input: "head = [1,2]",
        output: "false",
      },
    ],

    constraints: `The number of nodes is in the range [1,10^5].
0 <= Node.val <= 9`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isPalindrome(ListNode* head) {

    }
};`,

      java: `class Solution {
    public boolean isPalindrome(ListNode head) {

    }
}`,

      python: `class Solution:
    def isPalindrome(self, head):
        pass`,
    },

    testCases: [
      {
        input: {
          head: [1, 2, 2, 1],
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          head: [1, 2],
        },
        output: false,
      },
      {
        input: {
          head: [1],
        },
        output: true,
      },
    ],
  },
  // =========================
  // Problem 7: Add Two Numbers
  // =========================

  {
    title: "Add Two Numbers",

    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.",

    difficulty: "Medium",

    tags: ["Linked List", "Math"],

    functionName: "addTwoNumbers",

    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
      },
      {
        input: "l1 = [0], l2 = [0]",
        output: "[0]",
      },
      {
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]",
      },
    ],

    constraints: `The number of nodes in each linked list is in the range [1,100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.`,

    starterCode: {
      cpp: `class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {

    }
};`,

      java: `class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

    }
}`,

      python: `class Solution:
    def addTwoNumbers(self, l1, l2):
        pass`,
    },

    testCases: [
      {
        input: {
          l1: [2, 4, 3],
          l2: [5, 6, 4],
        },
        output: [7, 0, 8],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          l1: [0],
          l2: [0],
        },
        output: [0],
      },
      {
        input: {
          l1: [9, 9, 9, 9, 9, 9, 9],
          l2: [9, 9, 9, 9],
        },
        output: [8, 9, 9, 9, 0, 0, 0, 1],
      },
    ],
  },

  // =========================
  // Problem 8: Intersection of Two Linked Lists
  // =========================

  {
    title: "Intersection of Two Linked Lists",

    description:
      "Given the heads of two singly linked lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection, return null.",

    difficulty: "Easy",

    tags: ["Linked List", "Two Pointers"],

    functionName: "getIntersectionNode",

    examples: [
      {
        input: "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]",
        output: "8",
      },
      {
        input: "intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4]",
        output: "2",
      },
      {
        input: "intersectVal = 0, listA = [2,6,4], listB = [1,5]",
        output: "null",
      },
    ],

    constraints: `The number of nodes of listA is in the range [1,3×10^4].
The number of nodes of listB is in the range [1,3×10^4].
1 <= Node.val <= 10^5`,

    starterCode: {
      cpp: `class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {

    }
};`,

      java: `public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {

    }
}`,

      python: `class Solution:
    def getIntersectionNode(self, headA, headB):
        pass`,
    },

    testCases: [
      {
        input: {
          listA: [4, 1, 8, 4, 5],
          listB: [5, 6, 1, 8, 4, 5],
        },
        output: 8,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          listA: [1, 9, 1, 2, 4],
          listB: [3, 2, 4],
        },
        output: 2,
      },
      {
        input: {
          listA: [2, 6, 4],
          listB: [1, 5],
        },
        output: null,
      },
    ],
  },
  // =========================
  // Problem 9: Reverse Nodes in k-Group
  // =========================

  {
    title: "Reverse Nodes in k-Group",

    description:
      "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list. If the number of nodes is not a multiple of k, leave the remaining nodes as they are.",

    difficulty: "Hard",

    tags: ["Linked List", "Recursion"],

    functionName: "reverseKGroup",

    examples: [
      {
        input: "head = [1,2,3,4,5], k = 2",
        output: "[2,1,4,3,5]",
      },
      {
        input: "head = [1,2,3,4,5], k = 3",
        output: "[3,2,1,4,5]",
      },
    ],

    constraints: `1 <= k <= n <= 5000
0 <= Node.val <= 1000`,

    starterCode: {
      cpp: `class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {

    }
};`,

      java: `class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {

    }
}`,

      python: `class Solution:
    def reverseKGroup(self, head, k):
        pass`,
    },

    testCases: [
      {
        input: {
          head: [1, 2, 3, 4, 5],
          k: 2,
        },
        output: [2, 1, 4, 3, 5],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          head: [1, 2, 3, 4, 5],
          k: 3,
        },
        output: [3, 2, 1, 4, 5],
      },
      {
        input: {
          head: [1],
          k: 1,
        },
        output: [1],
      },
    ],
  },

  // =========================
  // Problem 10: Sort List
  // =========================

  {
    title: "Sort List",

    description:
      "Given the head of a linked list, sort the list in ascending order and return the sorted list.",

    difficulty: "Medium",

    tags: ["Linked List", "Merge Sort", "Divide and Conquer"],

    functionName: "sortList",

    examples: [
      {
        input: "head = [4,2,1,3]",
        output: "[1,2,3,4]",
      },
      {
        input: "head = [-1,5,3,4,0]",
        output: "[-1,0,3,4,5]",
      },
    ],

    constraints: `The number of nodes is in the range [0,5×10^4].
-10^5 <= Node.val <= 10^5`,

    starterCode: {
      cpp: `class Solution {
public:
    ListNode* sortList(ListNode* head) {

    }
};`,

      java: `class Solution {
    public ListNode sortList(ListNode head) {

    }
}`,

      python: `class Solution:
    def sortList(self, head):
        pass`,
    },

    testCases: [
      {
        input: {
          head: [4, 2, 1, 3],
        },
        output: [1, 2, 3, 4],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          head: [-1, 5, 3, 4, 0],
        },
        output: [-1, 0, 3, 4, 5],
      },
      {
        input: {
          head: [],
        },
        output: [],
      },
    ],
  },
];

export default linkedList;
