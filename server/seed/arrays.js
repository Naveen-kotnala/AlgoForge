const arrays = [
  {
    title: "Two Sum",
    difficulty: "Easy",

    tags:[
 "Array",
 "HashMap"
],
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
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

`
    },
    testCases: [
      {
        input: "[2,7,11,15],9",
        output: "[0,1]"
      }
    ]

    
  },

  {
    title: "Palindrome Number",
    difficulty: "Easy",
    description:
      "Given an integer x, return true if x is a palindrome.",
    input: "121",
    output: "true",
    starterCode: {
  cpp: `class Solution {
public:
    bool isPalindrome(int x) {

    }
};`,

  java: `class Solution {
    public boolean isPalindrome(int x) {

    }
}`,

  python: `class Solution:
    def isPalindrome(self, x):

`
},
    testCases: [ {
    input: "121",
    output: "true"
  },
  {
    input: "-121",
    output: "false"
  }]
  },

  {
    title: "Reverse String",
    difficulty: "Easy",
    description:
      "Write a function that reverses a string.",
    input: `"hello"`,
    output: `"olleh"`,
    starterCode: {
  cpp: `class Solution {
public:
    void reverseString(vector<char>& s) {

    }
};`,

  java: `class Solution {
    public void reverseString(char[] s) {

    }
}`,

  python: `class Solution:
    def reverseString(self, s):

`
},
    testCases: [ {
    input: "hello",
    output: "olleh"
  },
  {
    input: "world",
    output: "dlrow"
  }]
  },
    

  {
    title:"Valid Parentheses",

    difficulty:"Easy",

    description:
    "Given a string s containing brackets, check whether it is valid.",

    input:
    "s = ()[]{}",

    output:
    "true",

    starterCode:{
      cpp:`class Solution {
public:
    bool isValid(string s) {

    }
};`
    },

    testCases:[
      {
        input:"()[]{}",
        output:"true"
      }
    ]
  }

  
];

export default arrays;