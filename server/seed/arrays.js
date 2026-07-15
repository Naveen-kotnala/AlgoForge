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
        output: "[0,1]"
      }
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
        pass`
    },

    testCases: [
      {
        input: {
          nums: [2, 7, 11, 15],
          target: 9
        },
        output: [0, 1]
      }
    ],

    hiddenTestCases: [
      {
        input: {
          nums: [3, 2, 4],
          target: 6
        },
        output: [1, 2]
      },
      {
        input: {
          nums: [3, 3],
          target: 6
        },
        output: [0, 1]
      }
    ]
  }
];

export default arrays;