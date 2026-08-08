const strings = [
  // =========================
  // Problem 1: Valid Palindrome
  // =========================

  {
    title: "Valid Palindrome",

    description:
      "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise.",

    difficulty: "Easy",

    tags: ["String", "Two Pointers"],

    functionName: "isPalindrome",

    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation:
          "After removing non-alphanumeric characters and converting to lowercase, it becomes 'amanaplanacanalpanama'.",
      },
      {
        input: 's = "race a car"',
        output: "false",
      },
    ],

    constraints: `1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isPalindrome(string s) {

    }
};`,

      java: `class Solution {
    public boolean isPalindrome(String s) {

    }
}`,

      python: `class Solution:
    def isPalindrome(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "A man, a plan, a canal: Panama",
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "race a car",
        },
        output: false,
      },
      {
        input: {
          s: " ",
        },
        output: true,
      },
      {
        input: {
          s: "0P",
        },
        output: false,
      },
    ],
  },

  // =========================
  // Problem 2: Valid Anagram
  // =========================

  {
    title: "Valid Anagram",

    description:
      "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",

    difficulty: "Easy",

    tags: ["String", "Hash Table", "Sorting"],

    functionName: "isAnagram",

    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
    ],

    constraints: `1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isAnagram(string s, string t) {

    }
};`,

      java: `class Solution {
    public boolean isAnagram(String s, String t) {

    }
}`,

      python: `class Solution:
    def isAnagram(self, s, t):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "anagram",
          t: "nagaram",
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "rat",
          t: "car",
        },
        output: false,
      },
      {
        input: {
          s: "listen",
          t: "silent",
        },
        output: true,
      },
      {
        input: {
          s: "hello",
          t: "world",
        },
        output: false,
      },
    ],
  },
  // =========================
  // Problem 3: Longest Common Prefix
  // =========================

  {
    title: "Longest Common Prefix",

    description:
      "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",

    difficulty: "Easy",

    tags: ["String"],

    functionName: "longestCommonPrefix",

    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"',
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
      },
    ],

    constraints: `1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.`,

    starterCode: {
      cpp: `class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {

    }
};`,

      java: `class Solution {
    public String longestCommonPrefix(String[] strs) {

    }
}`,

      python: `class Solution:
    def longestCommonPrefix(self, strs):
        pass`,
    },

    testCases: [
      {
        input: {
          strs: ["flower", "flow", "flight"],
        },
        output: "fl",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          strs: ["dog", "racecar", "car"],
        },
        output: "",
      },
      {
        input: {
          strs: ["interview", "internet", "internal"],
        },
        output: "inter",
      },
    ],
  },

  // =========================
  // Problem 4: Reverse String
  // =========================

  {
    title: "Reverse String",

    description:
      "Write a function that reverses an array of characters in-place. Do not allocate extra space for another array.",

    difficulty: "Easy",

    tags: ["String", "Two Pointers"],

    functionName: "reverseString",

    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],

    constraints: `1 <= s.length <= 10^5
s[i] is a printable ASCII character.`,

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
        pass`,
    },

    testCases: [
      {
        input: {
          s: ["h", "e", "l", "l", "o"],
        },
        output: ["o", "l", "l", "e", "h"],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: ["H", "a", "n", "n", "a", "h"],
        },
        output: ["h", "a", "n", "n", "a", "H"],
      },
      {
        input: {
          s: ["a"],
        },
        output: ["a"],
      },
    ],
  },
  // =========================
  // Problem 5: Length of Last Word
  // =========================

  {
    title: "Length of Last Word",

    description:
      "Given a string s consisting of words and spaces, return the length of the last word in the string.",

    difficulty: "Easy",

    tags: ["String"],

    functionName: "lengthOfLastWord",

    examples: [
      {
        input: 's = "Hello World"',
        output: "5",
      },
      {
        input: 's = "   fly me   to   the moon  "',
        output: "4",
      },
    ],

    constraints: `1 <= s.length <= 10^4
s consists of only English letters and spaces.
There will be at least one word in s.`,

    starterCode: {
      cpp: `class Solution {
public:
    int lengthOfLastWord(string s) {

    }
};`,

      java: `class Solution {
    public int lengthOfLastWord(String s) {

    }
}`,

      python: `class Solution:
    def lengthOfLastWord(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "Hello World",
        },
        output: 5,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "   fly me   to   the moon  ",
        },
        output: 4,
      },
      {
        input: {
          s: "luffy is still joyboy",
        },
        output: 6,
      },
    ],
  },

  // =========================
  // Problem 6: Longest Substring Without Repeating Characters
  // =========================

  {
    title: "Longest Substring Without Repeating Characters",

    description:
      "Given a string s, find the length of the longest substring without repeating characters.",

    difficulty: "Medium",

    tags: ["String", "Hash Table", "Sliding Window"],

    functionName: "lengthOfLongestSubstring",

    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with the length of 3.',
      },
    ],

    constraints: `0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.`,

    starterCode: {
      cpp: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {

    }
};`,

      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {

    }
}`,

      python: `class Solution:
    def lengthOfLongestSubstring(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "abcabcbb",
        },
        output: 3,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "bbbbb",
        },
        output: 1,
      },
      {
        input: {
          s: "pwwkew",
        },
        output: 3,
      },
      {
        input: {
          s: "",
        },
        output: 0,
      },
    ],
  },
  // =========================
  // Problem 7: Group Anagrams
  // =========================

  {
    title: "Group Anagrams",

    description:
      "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",

    difficulty: "Medium",

    tags: ["String", "Hash Table", "Sorting"],

    functionName: "groupAnagrams",

    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
      },
    ],

    constraints: `1 <= strs.length <= 10^4
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.`,

    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {

    }
};`,

      java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

    }
}`,

      python: `class Solution:
    def groupAnagrams(self, strs):
        pass`,
    },

    testCases: [
      {
        input: {
          strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
        },
        output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
      },
    ],

    hiddenTestCases: [
      {
        input: {
          strs: [""],
        },
        output: [[""]],
      },
      {
        input: {
          strs: ["a"],
        },
        output: [["a"]],
      },
    ],
  },

  // =========================
  // Problem 8: Longest Palindromic Substring
  // =========================

  {
    title: "Longest Palindromic Substring",

    description:
      "Given a string s, return the longest palindromic substring in s.",

    difficulty: "Medium",

    tags: ["String", "Dynamic Programming", "Two Pointers"],

    functionName: "longestPalindrome",

    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: '"aba" is also a valid answer.',
      },
      {
        input: 's = "cbbd"',
        output: '"bb"',
      },
    ],

    constraints: `1 <= s.length <= 1000
s consists of only digits and English letters.`,

    starterCode: {
      cpp: `class Solution {
public:
    string longestPalindrome(string s) {

    }
};`,

      java: `class Solution {
    public String longestPalindrome(String s) {

    }
}`,

      python: `class Solution:
    def longestPalindrome(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "babad",
        },
        output: "bab",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "cbbd",
        },
        output: "bb",
      },
      {
        input: {
          s: "a",
        },
        output: "a",
      },
      {
        input: {
          s: "ac",
        },
        output: "a",
      },
    ],
  },
  // =========================
  // Problem 9: String Compression
  // =========================

  {
    title: "String Compression",

    description:
      "Given an array of characters chars, compress it using the following algorithm. Begin with an empty string s. For each group of consecutive repeating characters in chars, append the character followed by the group's length if the length is greater than 1. Return the new length of the array after compression.",

    difficulty: "Medium",

    tags: ["String", "Two Pointers"],

    functionName: "compress",

    examples: [
      {
        input: 'chars = ["a","a","b","b","c","c","c"]',
        output: "6",
        explanation:
          'The compressed array should be ["a","2","b","2","c","3"].',
      },
      {
        input: 'chars = ["a"]',
        output: "1",
      },
    ],

    constraints: `1 <= chars.length <= 2000
chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.`,

    starterCode: {
      cpp: `class Solution {
public:
    int compress(vector<char>& chars) {

    }
};`,

      java: `class Solution {
    public int compress(char[] chars) {

    }
}`,

      python: `class Solution:
    def compress(self, chars):
        pass`,
    },

    testCases: [
      {
        input: {
          chars: ["a", "a", "b", "b", "c", "c", "c"],
        },
        output: 6,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          chars: ["a"],
        },
        output: 1,
      },
      {
        input: {
          chars: [
            "a",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
            "b",
          ],
        },
        output: 4,
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

    tags: ["String", "Stack", "Recursion"],

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
      {
        input: {
          s: "10[a]",
        },
        output: "aaaaaaaaaa",
      },
    ],
  },
  // =========================
  // Problem 11: Minimum Window Substring
  // =========================

  {
    title: "Minimum Window Substring",

    description:
      "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return an empty string.",

    difficulty: "Hard",

    tags: ["String", "Hash Table", "Sliding Window"],

    functionName: "minWindow",

    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
      },
      {
        input: 's = "a", t = "a"',
        output: '"a"',
      },
      {
        input: 's = "a", t = "aa"',
        output: '""',
      },
    ],

    constraints: `m == s.length
n == t.length
1 <= m, n <= 10^5
s and t consist of uppercase and lowercase English letters.`,

    starterCode: {
      cpp: `class Solution {
public:
    string minWindow(string s, string t) {

    }
};`,

      java: `class Solution {
    public String minWindow(String s, String t) {

    }
}`,

      python: `class Solution:
    def minWindow(self, s, t):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "ADOBECODEBANC",
          t: "ABC",
        },
        output: "BANC",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "a",
          t: "a",
        },
        output: "a",
      },
      {
        input: {
          s: "a",
          t: "aa",
        },
        output: "",
      },
      {
        input: {
          s: "aa",
          t: "aa",
        },
        output: "aa",
      },
    ],
  },

  // =========================
  // Problem 12: Regular Expression Matching
  // =========================

  {
    title: "Regular Expression Matching",

    description:
      "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' matches any single character. '*' matches zero or more of the preceding element. The matching should cover the entire input string.",

    difficulty: "Hard",

    tags: ["String", "Dynamic Programming", "Recursion"],

    functionName: "isMatch",

    examples: [
      {
        input: 's = "aa", p = "a"',
        output: "false",
      },
      {
        input: 's = "aa", p = "a*"',
        output: "true",
      },
      {
        input: 's = "ab", p = ".*"',
        output: "true",
      },
    ],

    constraints: `1 <= s.length <= 20
1 <= p.length <= 30
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isMatch(string s, string p) {

    }
};`,

      java: `class Solution {
    public boolean isMatch(String s, String p) {

    }
}`,

      python: `class Solution:
    def isMatch(self, s, p):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "aa",
          p: "a*",
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "aa",
          p: "a",
        },
        output: false,
      },
      {
        input: {
          s: "ab",
          p: ".*",
        },
        output: true,
      },
      {
        input: {
          s: "mississippi",
          p: "mis*is*p*.",
        },
        output: false,
      },
    ],
  },
  // =========================
  // Problem 13: Isomorphic Strings
  // =========================

  {
    title: "Isomorphic Strings",

    description:
      "Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if the characters in s can be replaced to get t while preserving the order of characters.",

    difficulty: "Easy",

    tags: ["String", "Hash Table"],

    functionName: "isIsomorphic",

    examples: [
      {
        input: 's = "egg", t = "add"',
        output: "true",
      },
      {
        input: 's = "foo", t = "bar"',
        output: "false",
      },
      {
        input: 's = "paper", t = "title"',
        output: "true",
      },
    ],

    constraints: `1 <= s.length <= 5 * 10^4
t.length == s.length
s and t consist of any valid ASCII character.`,

    starterCode: {
      cpp: `class Solution {
public:
    bool isIsomorphic(string s, string t) {

    }
};`,

      java: `class Solution {
    public boolean isIsomorphic(String s, String t) {

    }
}`,

      python: `class Solution:
    def isIsomorphic(self, s, t):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "egg",
          t: "add",
        },
        output: true,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "foo",
          t: "bar",
        },
        output: false,
      },
      {
        input: {
          s: "paper",
          t: "title",
        },
        output: true,
      },
    ],
  },

  // =========================
  // Problem 14: Reverse Words in a String
  // =========================

  {
    title: "Reverse Words in a String",

    description:
      "Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters.",

    difficulty: "Medium",

    tags: ["String", "Two Pointers"],

    functionName: "reverseWords",

    examples: [
      {
        input: 's = "the sky is blue"',
        output: '"blue is sky the"',
      },
      {
        input: 's = "  hello world  "',
        output: '"world hello"',
      },
    ],

    constraints: `1 <= s.length <= 10^4
s contains English letters, digits and spaces.`,

    starterCode: {
      cpp: `class Solution {
public:
    string reverseWords(string s) {

    }
};`,

      java: `class Solution {
    public String reverseWords(String s) {

    }
}`,

      python: `class Solution:
    def reverseWords(self, s):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "the sky is blue",
        },
        output: "blue is sky the",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "  hello world  ",
        },
        output: "world hello",
      },
      {
        input: {
          s: "a good   example",
        },
        output: "example good a",
      },
    ],
  },

  // =========================
  // Problem 15: Roman to Integer
  // =========================

  {
    title: "Roman to Integer",

    description:
      "Roman numerals are represented by seven different symbols. Given a Roman numeral, convert it to an integer.",

    difficulty: "Easy",

    tags: ["String", "Hash Table"],

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

    constraints: `1 <= s.length <= 15
s contains only the characters 'I', 'V', 'X', 'L', 'C', 'D', 'M'.
It is guaranteed that s is a valid Roman numeral.`,

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
          s: "LVIII",
        },
        output: 58,
      },
      {
        input: {
          s: "MCMXCIV",
        },
        output: 1994,
      },
    ],
  },

  {
    title: "Find the Index of the First Occurrence in a String",

    description:
      "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",

    difficulty: "Easy",

    tags: ["String", "Two Pointers"],

    functionName: "strStr",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [
        { name: "haystack", type: "string" },
        { name: "needle", type: "string" },
      ],
      java: [
        { name: "haystack", type: "String" },
        { name: "needle", type: "String" },
      ],
      python: [
        { name: "haystack", type: "str" },
        { name: "needle", type: "str" },
      ],
    },

    examples: [
      {
        input: 'haystack = "sadbutsad", needle = "sad"',
        output: "0",
        explanation: 'The substring "sad" first occurs at index 0.',
      },
      {
        input: 'haystack = "leetcode", needle = "leeto"',
        output: "-1",
        explanation: '"leeto" does not occur in "leetcode".',
      },
      {
        input: 'haystack = "hello", needle = "ll"',
        output: "2",
        explanation: 'The substring "ll" first occurs at index 2.',
      },
    ],

    constraints: `1 <= haystack.length, needle.length <= 10^4
haystack and needle consist of only lowercase English characters.`,

    starterCode: {
      cpp: `class Solution {
public:
    int strStr(string haystack, string needle) {
        
    }
};`,

      java: `class Solution {
public:
    int strStr(String haystack, String needle) {
        
    }
}`,

      python: `class Solution:
    def strStr(self, haystack, needle):
        pass`,
    },

    testCases: [
      {
        input: {
          haystack: "sadbutsad",
          needle: "sad",
        },
        output: 0,
      },

      {
        input: {
          haystack: "leetcode",
          needle: "leeto",
        },
        output: -1,
      },

      {
        input: {
          haystack: "hello",
          needle: "ll",
        },
        output: 2,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          haystack: "aaaaa",
          needle: "bba",
        },
        output: -1,
      },

      {
        input: {
          haystack: "abc",
          needle: "abc",
        },
        output: 0,
      },

      {
        input: {
          haystack: "mississippi",
          needle: "issip",
        },
        output: 4,
      },

      {
        input: {
          haystack: "a",
          needle: "a",
        },
        output: 0,
      },

      {
        input: {
          haystack: "abc",
          needle: "c",
        },
        output: 2,
      },
    ],
  },

  {
    title: "Add Strings",

    description:
      "Given two non-negative integers num1 and num2 represented as strings, return the sum of num1 and num2 as a string. You must not use any built-in BigInteger library or convert the inputs directly to integers.",

    difficulty: "Easy",

    tags: ["String", "Math", "Simulation"],

    functionName: "addStrings",

    returnType: {
      cpp: "string",
      java: "String",
      python: "str",
    },

    parameters: {
      cpp: [
        { name: "num1", type: "string" },
        { name: "num2", type: "string" },
      ],
      java: [
        { name: "num1", type: "String" },
        { name: "num2", type: "String" },
      ],
      python: [
        { name: "num1", type: "str" },
        { name: "num2", type: "str" },
      ],
    },

    examples: [
      {
        input: 'num1 = "11", num2 = "123"',
        output: '"134"',
        explanation: "Adding 11 and 123 gives 134.",
      },
      {
        input: 'num1 = "456", num2 = "77"',
        output: '"533"',
        explanation: "Adding 456 and 77 gives 533.",
      },
      {
        input: 'num1 = "0", num2 = "0"',
        output: '"0"',
        explanation: "Adding 0 and 0 gives 0.",
      },
    ],

    constraints: `1 <= num1.length, num2.length <= 10^4
num1 and num2 consist of only digits.
num1 and num2 do not contain any leading zeros except for the number 0 itself.`,

    starterCode: {
      cpp: `class Solution {
public:
    string addStrings(string num1, string num2) {
        
    }
};`,

      java: `class Solution {
public:
    String addStrings(String num1, String num2) {
        
    }
}`,

      python: `class Solution:
    def addStrings(self, num1, num2):
        pass`,
    },

    testCases: [
      {
        input: {
          num1: "11",
          num2: "123",
        },
        output: "134",
      },

      {
        input: {
          num1: "456",
          num2: "77",
        },
        output: "533",
      },

      {
        input: {
          num1: "0",
          num2: "0",
        },
        output: "0",
      },
    ],

    hiddenTestCases: [
      {
        input: {
          num1: "999",
          num2: "1",
        },
        output: "1000",
      },

      {
        input: {
          num1: "1",
          num2: "9999",
        },
        output: "10000",
      },

      {
        input: {
          num1: "123456789",
          num2: "987654321",
        },
        output: "1111111110",
      },

      {
        input: {
          num1: "5",
          num2: "5",
        },
        output: "10",
      },

      {
        input: {
          num1: "0",
          num2: "999999",
        },
        output: "999999",
      },
    ],
  },

  {
    title: "Longest Repeating Character Replacement",

    description:
      "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character at most k times. Return the length of the longest substring containing the same letter after performing the replacements.",

    difficulty: "Medium",

    tags: ["String", "Hash Table", "Sliding Window", "Two Pointers"],

    functionName: "characterReplacement",

    returnType: {
      cpp: "int",
      java: "int",
      python: "int",
    },

    parameters: {
      cpp: [
        { name: "s", type: "string" },
        { name: "k", type: "int" },
      ],
      java: [
        { name: "s", type: "String" },
        { name: "k", type: "int" },
      ],
      python: [
        { name: "s", type: "str" },
        { name: "k", type: "int" },
      ],
    },

    examples: [
      {
        input: 's = "ABAB", k = 2',
        output: "4",
        explanation:
          'Replace the two B characters with A to get "AAAA". The longest substring has length 4.',
      },
      {
        input: 's = "AABABBA", k = 1',
        output: "4",
        explanation:
          'Replace one B in "AABA" or one A in "ABBA" to get a substring of length 4 containing the same character.',
      },
      {
        input: 's = "AAAA", k = 2',
        output: "4",
        explanation:
          "The string already contains the same character throughout, so the answer is 4.",
      },
    ],

    constraints: `1 <= s.length <= 10^5
s consists of only uppercase English letters.
0 <= k <= s.length`,

    starterCode: {
      cpp: `class Solution {
public:
    int characterReplacement(string s, int k) {
        
    }
};`,

      java: `class Solution {
public:
    int characterReplacement(String s, int k) {
        
    }
}`,

      python: `class Solution:
    def characterReplacement(self, s, k):
        pass`,
    },

    testCases: [
      {
        input: {
          s: "ABAB",
          k: 2,
        },
        output: 4,
      },

      {
        input: {
          s: "AABABBA",
          k: 1,
        },
        output: 4,
      },

      {
        input: {
          s: "AAAA",
          k: 2,
        },
        output: 4,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          s: "ABBB",
          k: 2,
        },
        output: 4,
      },

      {
        input: {
          s: "ABCDE",
          k: 1,
        },
        output: 2,
      },

      {
        input: {
          s: "AAAAABBB",
          k: 2,
        },
        output: 7,
      },

      {
        input: {
          s: "A",
          k: 0,
        },
        output: 1,
      },

      {
        input: {
          s: "ABABBA",
          k: 2,
        },
        output: 5,
      },
    ],
  },

  {
    title: "Word Pattern",

    description:
      "Given a pattern and a string s, find if s follows the same pattern. A string follows the pattern if there is a one-to-one correspondence between a letter in pattern and a non-empty word in s.",

    difficulty: "Easy",

    tags: ["String", "Hash Table"],

    functionName: "wordPattern",

    returnType: {
      cpp: "bool",
      java: "boolean",
      python: "bool",
    },

    parameters: {
      cpp: [
        { name: "pattern", type: "string" },
        { name: "s", type: "string" },
      ],
      java: [
        { name: "pattern", type: "String" },
        { name: "s", type: "String" },
      ],
      python: [
        { name: "pattern", type: "str" },
        { name: "s", type: "str" },
      ],
    },

    examples: [
      {
        input: 'pattern = "abba", s = "dog cat cat dog"',
        output: "true",
        explanation: 'The pattern "abba" matches the words "dog cat cat dog".',
      },
      {
        input: 'pattern = "abba", s = "dog cat cat fish"',
        output: "false",
        explanation:
          'The last word should match the first character pattern, but "fish" does not match "dog".',
      },
      {
        input: 'pattern = "aaaa", s = "dog cat cat dog"',
        output: "false",
        explanation:
          "All pattern characters are the same, but the words are not all the same.",
      },
    ],

    constraints: `1 <= pattern.length <= 300
1 <= s.length <= 3000
pattern consists of lowercase English letters.
s consists of lowercase English letters and spaces.
There is exactly one space between words in s.
There are no leading or trailing spaces in s.`,

    starterCode: {
      cpp: `class Solution {
public:
    bool wordPattern(string pattern, string s) {
        
    }
};`,

      java: `class Solution {
public:
    boolean wordPattern(String pattern, String s) {
        
    }
}`,

      python: `class Solution:
    def wordPattern(self, pattern, s):
        pass`,
    },

    testCases: [
      {
        input: {
          pattern: "abba",
          s: "dog cat cat dog",
        },
        output: true,
      },

      {
        input: {
          pattern: "abba",
          s: "dog cat cat fish",
        },
        output: false,
      },

      {
        input: {
          pattern: "aaaa",
          s: "dog cat cat dog",
        },
        output: false,
      },
    ],

    hiddenTestCases: [
      {
        input: {
          pattern: "abba",
          s: "dog dog dog dog",
        },
        output: false,
      },

      {
        input: {
          pattern: "abc",
          s: "dog cat fish",
        },
        output: true,
      },

      {
        input: {
          pattern: "abc",
          s: "dog cat cat",
        },
        output: false,
      },

      {
        input: {
          pattern: "a",
          s: "dog",
        },
        output: true,
      },

      {
        input: {
          pattern: "ab",
          s: "dog dog",
        },
        output: false,
      },
    ],
  },
];

export default strings;
