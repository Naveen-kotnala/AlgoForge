const math = [
  // =========================
  // Problem 1: Fizz Buzz
  // =========================

  {
    title: "Fizz Buzz",

    description:
      "Given an integer n, return a string array answer (1-indexed) where answer[i] is 'FizzBuzz' if i is divisible by 3 and 5, 'Fizz' if i is divisible by 3, 'Buzz' if i is divisible by 5, or i as a string otherwise.",

    difficulty: "Easy",

    tags: ["Math", "Simulation"],

    functionName: "fizzBuzz",

    examples: [
      {
        input: "n = 3",
        output: '["1","2","Fizz"]',
      },
      {
        input: "n = 5",
        output: '["1","2","Fizz","4","Buzz"]',
      },
      {
        input: "n = 15",
        output:
          '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
      },
    ],

    constraints: `
1 <= n <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<string> fizzBuzz(int n) {

    }
};`,

      java: `class Solution {
    public List<String> fizzBuzz(int n) {

    }
}`,

      python: `class Solution:
    def fizzBuzz(self, n):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 3,
        },
        output: ["1", "2", "Fizz"],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 5,
        },
        output: ["1", "2", "Fizz", "4", "Buzz"],
      },
      {
        input: {
          n: 15,
        },
        output: [
          "1",
          "2",
          "Fizz",
          "4",
          "Buzz",
          "Fizz",
          "7",
          "8",
          "Fizz",
          "Buzz",
          "11",
          "Fizz",
          "13",
          "14",
          "FizzBuzz",
        ],
      },
    ],
  },

  // =========================
  // Problem 2: Happy Number
  // =========================

  {
    title: "Happy Number",

    description:
      "Write an algorithm to determine if a number n is happy. A happy number is a number that eventually reaches 1 when replaced by the sum of the square of its digits repeatedly.",

    difficulty: "Easy",

    tags: ["Math", "Hash Table"],

    functionName: "isHappy",

    examples: [
      {
        input: "n = 19",
        output: "true",
      },
      {
        input: "n = 2",
        output: "false",
      },
    ],

    constraints: `
1 <= n <= 2^31 - 1
`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isHappy(int n) {

    }
};`,

      java: `class Solution {
    public boolean isHappy(int n) {

    }
}`,

      python: `class Solution:
    def isHappy(self, n):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 19,
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 2,
        },
        output: false,
      },
      {
        input: {
          n: 1,
        },
        output: true,
      },
    ],
  },
  // =========================
  // Problem 3: Plus One
  // =========================

  {
    title: "Plus One",

    description:
      "You are given a large integer represented as an integer array digits, where each digits[i] represents the ith digit of the integer. Increment the large integer by one and return the resulting array of digits.",

    difficulty: "Easy",

    tags: ["Math", "Array"],

    functionName: "plusOne",

    examples: [
      {
        input: "digits = [1,2,3]",
        output: "[1,2,4]",
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

    constraints: `
1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain leading zeros.
`,

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
    ],

    hiddenTestCases: [
      {
        input: {
          digits: [9],
        },
        output: [1, 0],
      },
      {
        input: {
          digits: [4, 3, 2, 1],
        },
        output: [4, 3, 2, 2],
      },
    ],
  },

  // =========================
  // Problem 4: Add Binary
  // =========================

  {
    title: "Add Binary",

    description:
      "Given two binary strings a and b, return their sum as a binary string.",

    difficulty: "Easy",

    tags: ["Math", "String", "Bit Manipulation"],

    functionName: "addBinary",

    examples: [
      {
        input: 'a = "11", b = "1"',
        output: '"100"',
      },
      {
        input: 'a = "1010", b = "1011"',
        output: '"10101"',
      },
    ],

    constraints: `
1 <= a.length, b.length <= 10^4
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for zero itself.
`,

    starterCode: {
      cpp: `class Solution {
public:
    string addBinary(string a, string b) {

    }
};`,

      java: `class Solution {
    public String addBinary(String a, String b) {

    }
}`,

      python: `class Solution:
    def addBinary(self, a, b):
        pass`,
    },

    testCases: [
      {
        input: {
          a: "11",
          b: "1",
        },
        output: "100",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          a: "1010",
          b: "1011",
        },
        output: "10101",
      },
      {
        input: {
          a: "0",
          b: "0",
        },
        output: "0",
      },
    ],
  },

  // =========================
  // Problem 5: Sqrt(x)
  // =========================

  {
    title: "Sqrt(x)",

    description:
      "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative.",

    difficulty: "Easy",

    tags: ["Math", "Binary Search"],

    functionName: "mySqrt",

    examples: [
      {
        input: "x = 4",
        output: "2",
      },
      {
        input: "x = 8",
        output: "2",
      },
    ],

    constraints: `
0 <= x <= 2^31 - 1
`,

    starterCode: {
      cpp: `class Solution {
public:
    int mySqrt(int x) {

    }
};`,

      java: `class Solution {
    public int mySqrt(int x) {

    }
}`,

      python: `class Solution:
    def mySqrt(self, x):
        pass`,
    },

    testCases: [
      {
        input: {
          x: 4,
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          x: 8,
        },
        output: 2,
      },
      {
        input: {
          x: 1,
        },
        output: 1,
      },
    ],
  },
  // =========================
  // Problem 6: Pow(x, n)
  // =========================

  {
    title: "Pow(x, n)",

    description:
      "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",

    difficulty: "Medium",

    tags: ["Math", "Recursion", "Binary Search"],

    functionName: "myPow",

    examples: [
      {
        input: "x = 2.00000, n = 10",
        output: "1024.00000",
      },
      {
        input: "x = 2.10000, n = 3",
        output: "9.26100",
      },
      {
        input: "x = 2.00000, n = -2",
        output: "0.25000",
      },
    ],

    constraints: `
-100.0 < x < 100.0
-2^31 <= n <= 2^31-1
n is an integer.
-10^4 <= x^n <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    double myPow(double x, int n) {

    }
};`,

      java: `class Solution {
    public double myPow(double x, int n) {

    }
}`,

      python: `class Solution:
    def myPow(self, x, n):
        pass`,
    },

    testCases: [
      {
        input: {
          x: 2.0,
          n: 10,
        },
        output: 1024.0,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          x: 2.0,
          n: -2,
        },
        output: 0.25,
      },
      {
        input: {
          x: 1.0,
          n: 100,
        },
        output: 1.0,
      },
    ],
  },

  // =========================
  // Problem 7: Multiply Strings
  // =========================

  {
    title: "Multiply Strings",

    description:
      "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2 as a string without using built-in big integer multiplication.",

    difficulty: "Medium",

    tags: ["Math", "String", "Simulation"],

    functionName: "multiply",

    examples: [
      {
        input: 'num1 = "2", num2 = "3"',
        output: '"6"',
      },
      {
        input: 'num1 = "123", num2 = "456"',
        output: '"56088"',
      },
    ],

    constraints: `
1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both numbers do not contain leading zeros.
`,

    starterCode: {
      cpp: `class Solution {
public:
    string multiply(string num1, string num2) {

    }
};`,

      java: `class Solution {
    public String multiply(String num1, String num2) {

    }
}`,

      python: `class Solution:
    def multiply(self, num1, num2):
        pass`,
    },

    testCases: [
      {
        input: {
          num1: "123",
          num2: "456",
        },
        output: "56088",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          num1: "2",
          num2: "3",
        },
        output: "6",
      },
      {
        input: {
          num1: "0",
          num2: "52",
        },
        output: "0",
      },
    ],
  },

  // =========================
  // Problem 8: Roman to Integer
  // =========================

  {
    title: "Roman to Integer",

    description: "Given a roman numeral, convert it to an integer.",

    difficulty: "Easy",

    tags: ["Math", "String", "Hash Table"],

    functionName: "romanToInt",

    examples: [
      {
        input: 's = "III"',
        output: "3",
      },
      {
        input: 's = "LVIII"',
        output: "58",
      },
      {
        input: 's = "MCMXCIV"',
        output: "1994",
      },
    ],

    constraints: `
1 <= s.length <= 15
s contains only characters ('I','V','X','L','C','D','M').
It is guaranteed that s is a valid roman numeral.
`,

    starterCode: {
      cpp: `class Solution {
public:
    int romanToInt(string s) {

    }
};`,

      java: `class Solution {
    public int romanToInt(String s) {

    }
}`,

      python: `class Solution:
    def romanToInt(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "III",
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "MCMXCIV",
        },
        output: 1994,
      },
      {
        input: {
          s: "LVIII",
        },
        output: 58,
      },
    ],
  },
  // =========================
  // Problem 9: Integer to Roman
  // =========================

  {
    title: "Integer to Roman",

    description: "Given an integer, convert it to a roman numeral.",

    difficulty: "Medium",

    tags: ["Math", "String", "Greedy"],

    functionName: "intToRoman",

    examples: [
      {
        input: "num = 3",
        output: '"III"',
      },
      {
        input: "num = 58",
        output: '"LVIII"',
      },
      {
        input: "num = 1994",
        output: '"MCMXCIV"',
      },
    ],

    constraints: `
1 <= num <= 3999
`,

    starterCode: {
      cpp: `class Solution {
public:
    string intToRoman(int num) {

    }
};`,

      java: `class Solution {
    public String intToRoman(int num) {

    }
}`,

      python: `class Solution:
    def intToRoman(self, num):
        pass`,
    },

    testCases: [
      {
        input: {
          num: 58,
        },
        output: "LVIII",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          num: 1994,
        },
        output: "MCMXCIV",
      },
      {
        input: {
          num: 3,
        },
        output: "III",
      },
    ],
  },

  // =========================
  // Problem 10: Palindrome Number
  // =========================

  {
    title: "Palindrome Number",

    description:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",

    difficulty: "Easy",

    tags: ["Math"],

    functionName: "isPalindrome",

    examples: [
      {
        input: "x = 121",
        output: "true",
      },
      {
        input: "x = -121",
        output: "false",
      },
      {
        input: "x = 10",
        output: "false",
      },
    ],

    constraints: `
-2^31 <= x <= 2^31 - 1
`,

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
        pass`,
    },

    testCases: [
      {
        input: {
          x: 121,
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          x: -121,
        },
        output: false,
      },
      {
        input: {
          x: 10,
        },
        output: false,
      },
    ],
  },

  // =========================
  // Problem 11: Reverse Integer
  // =========================

  {
    title: "Reverse Integer",

    description:
      "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, return 0.",

    difficulty: "Medium",

    tags: ["Math"],

    functionName: "reverse",

    examples: [
      {
        input: "x = 123",
        output: "321",
      },
      {
        input: "x = -123",
        output: "-321",
      },
      {
        input: "x = 120",
        output: "21",
      },
    ],

    constraints: `
-2^31 <= x <= 2^31 - 1
`,

    starterCode: {
      cpp: `class Solution {
public:
    int reverse(int x) {

    }
};`,

      java: `class Solution {
    public int reverse(int x) {

    }
}`,

      python: `class Solution:
    def reverse(self, x):
        pass`,
    },

    testCases: [
      {
        input: {
          x: 123,
        },
        output: 321,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          x: -123,
        },
        output: -321,
      },
      {
        input: {
          x: 120,
        },
        output: 21,
      },
    ],
  },

  // =========================
  // Problem 12: Factorial Trailing Zeroes
  // =========================

  {
    title: "Factorial Trailing Zeroes",

    description:
      "Given an integer n, return the number of trailing zeroes in n!.",

    difficulty: "Medium",

    tags: ["Math"],

    functionName: "trailingZeroes",

    examples: [
      {
        input: "n = 3",
        output: "0",
      },
      {
        input: "n = 5",
        output: "1",
      },
      {
        input: "n = 25",
        output: "6",
      },
    ],

    constraints: `
0 <= n <= 10^4
`,

    starterCode: {
      cpp: `class Solution {
public:
    int trailingZeroes(int n) {

    }
};`,

      java: `class Solution {
    public int trailingZeroes(int n) {

    }
}`,

      python: `class Solution:
    def trailingZeroes(self, n):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 5,
        },
        output: 1,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 25,
        },
        output: 6,
      },
      {
        input: {
          n: 0,
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 13: Count Primes
  // =========================

  {
    title: "Count Primes",

    description:
      "Given an integer n, return the number of prime numbers that are strictly less than n.",

    difficulty: "Medium",

    tags: ["Math", "Sieve of Eratosthenes"],

    functionName: "countPrimes",

    examples: [
      {
        input: "n = 10",
        output: "4",
      },
      {
        input: "n = 0",
        output: "0",
      },
      {
        input: "n = 1",
        output: "0",
      },
    ],

    constraints: `
0 <= n <= 5 * 10^6
`,

    starterCode: {
      cpp: `class Solution {
public:
    int countPrimes(int n) {

    }
};`,

      java: `class Solution {
    public int countPrimes(int n) {

    }
}`,

      python: `class Solution:
    def countPrimes(self, n):
        pass`,
    },

    testCases: [
      {
        input: {
          n: 10,
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          n: 2,
        },
        output: 0,
      },
      {
        input: {
          n: 100,
        },
        output: 25,
      },
    ],
  },

  // =========================
  // Problem 14: Missing Number
  // =========================

  {
    title: "Missing Number",

    description:
      "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",

    difficulty: "Easy",

    tags: ["Math", "Array", "Bit Manipulation"],

    functionName: "missingNumber",

    examples: [
      {
        input: "nums = [3,0,1]",
        output: "2",
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

    constraints: `
n == nums.length
1 <= n <= 10^4
0 <= nums[i] <= n
All numbers of nums are unique.
`,

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
    ],

    hiddenTestCases: [
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
  },

  // =========================
  // Problem 15: Excel Sheet Column Number
  // =========================

  {
    title: "Excel Sheet Column Number",

    description:
      "Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.",

    difficulty: "Easy",

    tags: ["Math", "String"],

    functionName: "titleToNumber",

    examples: [
      {
        input: 'columnTitle = "A"',
        output: "1",
      },
      {
        input: 'columnTitle = "AB"',
        output: "28",
      },
      {
        input: 'columnTitle = "ZY"',
        output: "701",
      },
    ],

    constraints: `
1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
`,

    starterCode: {
      cpp: `class Solution {
public:
    int titleToNumber(string columnTitle) {

    }
};`,

      java: `class Solution {
    public int titleToNumber(String columnTitle) {

    }
}`,

      python: `class Solution:
    def titleToNumber(self, columnTitle):
        pass`,
    },

    testCases: [
      {
        input: {
          columnTitle: "AB",
        },
        output: 28,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          columnTitle: "A",
        },
        output: 1,
      },
      {
        input: {
          columnTitle: "ZY",
        },
        output: 701,
      },
    ],
  },
];

export default math;
