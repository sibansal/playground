// DSA 25 Patterns Interactive Lab Dataset (99 Problems across 25 Patterns)
const DATA = [
  {
    "title": "Valid Palindrome",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/valid-palindrome/",
    "pattern": "Two Pointers",
    "short": "Two Pointers",
    "intro": "Move two positions intelligently; sorted data and opposite-end relationships often let you discard whole sets of candidates.",
    "thinking": "What relationship between two positions lets me safely eliminate candidates?",
    "steps": [
      "Restate **Valid Palindrome** as a state/decision problem before writing code.",
      "Use the core Two Pointers invariant: what relationship between two positions lets me safely eliminate candidates?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Input",
      "Two positions",
      "Evaluate",
      "Discard impossible side",
      "Finish"
    ],
    "description": "<p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.</p>\n\n<p>Given a string <code>s</code>, return <code>true</code><em> if it is a <strong>palindrome</strong>, or </em><code>false</code><em> otherwise</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;A man, a plan, a canal: Panama&quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong> &quot;amanaplanacanalpanama&quot; is a palindrome.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;race a car&quot;\n<strong>Output:</strong> false\n<strong>Explanation:</strong> &quot;raceacar&quot; is not a palindrome.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot; &quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong> s is an empty string &quot;&quot; after removing non-alphanumeric characters.\nSince an empty string reads the same forward and backward, it is a palindrome.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 2 * 10<sup>5</sup></code></li>\n\t<li><code>s</code> consists only of printable ASCII characters.</li>\n</ul>\n",
    "pythonCode": "def isPalindrome(s: str) -> bool:\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and not s[l].isalnum(): l += 1\n        while l < r and not s[r].isalnum(): r -= 1\n        if s[l].lower() != s[r].lower(): return False\n        l += 1; r -= 1\n    return True",
    "codeLines": 8,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Filtering the entire string with a new filtered array or string reversal takes O(N) space. Two pointers moving from both ends skip non-alphanumeric characters in-place and compare character by character in O(1) auxiliary space.",
    "edgeCasesAndBreakPoints": [
      "Empty string or string with no alphanumeric characters (e.g. '.,:'): returns True.",
      "Single character string: returns True.",
      "Case sensitivity: s[l].lower() ensures uppercase and lowercase match.",
      "Odd vs even length palindromes: l < r terminates without out-of-bounds indexing."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "s = 'A man, a plan, a canal: Panama'",
      "array": [
        "A",
        "m",
        "a",
        "n",
        "...",
        "n",
        "a",
        "m",
        "a",
        "P"
      ],
      "steps": [
        {
          "active": [
            0,
            9
          ],
          "vars": {
            "L": "'A'",
            "R": "'P'",
            "match": "'a'=='a'"
          },
          "msg": "Skip punctuation. Compare 'A'.lower() and 'P'.lower() -> matches 'a' == 'a'."
        },
        {
          "active": [
            1,
            8
          ],
          "vars": {
            "L": "'m'",
            "R": "'m'",
            "match": true
          },
          "msg": "Advance pointers inward. Compare 'm' and 'm' -> match."
        },
        {
          "active": [
            2,
            7
          ],
          "vars": {
            "L": "'a'",
            "R": "'a'",
            "match": true
          },
          "msg": "Advance pointers inward. Compare 'a' and 'a' -> match."
        },
        {
          "active": [
            3,
            6
          ],
          "vars": {
            "L": "'n'",
            "R": "'n'",
            "match": true
          },
          "msg": "Advance pointers inward. Compare 'n' and 'n' -> match."
        },
        {
          "active": [
            4,
            5
          ],
          "vars": {
            "pointersMeet": true,
            "isPalindrome": true
          },
          "msg": "Pointers cross at center. String is a valid palindrome! Complete!"
        }
      ]
    }
  },
  {
    "title": "3Sum",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/3sum/",
    "pattern": "Two Pointers",
    "short": "Two Pointers",
    "intro": "Move two positions intelligently; sorted data and opposite-end relationships often let you discard whole sets of candidates.",
    "thinking": "What relationship between two positions lets me safely eliminate candidates?",
    "steps": [
      "Restate **3Sum** as a state/decision problem before writing code.",
      "Use the core Two Pointers invariant: what relationship between two positions lets me safely eliminate candidates?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Input",
      "Two positions",
      "Evaluate",
      "Discard impossible side",
      "Finish"
    ],
    "description": "<p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>\n\n<p>Notice that the solution set must not contain duplicate triplets.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [-1,0,1,2,-1,-4]\n<strong>Output:</strong> [[-1,-1,2],[-1,0,1]]\n<strong>Explanation:</strong> \nnums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\nThe distinct triplets are [-1,0,1] and [-1,-1,2].\nNotice that the order of the output and the order of the triplets does not matter.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1,1]\n<strong>Output:</strong> []\n<strong>Explanation:</strong> The only possible triplet does not sum up to 0.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,0,0]\n<strong>Output:</strong> [[0,0,0]]\n<strong>Explanation:</strong> The only possible triplet sums up to 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>3 &lt;= nums.length &lt;= 3000</code></li>\n\t<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>\n</ul>\n",
    "pythonCode": "def threeSum(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    ans = []\n    for i, x in enumerate(nums):\n        if i > 0 and x == nums[i - 1]: continue\n        if x > 0: break\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            s = x + nums[l] + nums[r]\n            if s < 0: l += 1\n            elif s > 0: r -= 1\n            else:\n                ans.append([x, nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]: l += 1\n                while l < r and nums[r] == nums[r - 1]: r -= 1\n                l += 1; r -= 1\n    return ans",
    "codeLines": 17,
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Brute force checks all triplets in O(N^3) time and requires a hash set for deduplication. Sorting the array takes O(N log N). Fixing nums[i] reduces the problem to Two Sum II on the sorted suffix [i+1, n-1], where two pointers scan in O(N) time and skip duplicate adjacent elements in O(1) space, achieving O(N^2) total.",
    "edgeCasesAndBreakPoints": [
      "Array with fewer than 3 elements: returns [] immediately.",
      "All elements positive (min > 0): if x > 0 breaks early since sum can never be 0.",
      "Many duplicate triplets (e.g. [0, 0, 0, 0, 0]): skipping duplicate numbers prevents duplicate results.",
      "All zeros: returns [[0, 0, 0]]."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [-1, 0, 1, 2, -1, -4] -> sorted: [-4, -1, -1, 0, 1, 2]",
      "array": [
        -4,
        -1,
        -1,
        0,
        1,
        2
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            5
          ],
          "vars": {
            "i": 0,
            "x": -4,
            "L": -1,
            "R": 2,
            "sum": -3
          },
          "msg": "i=0 (x=-4): L=-1, R=2. sum = -4 + (-1) + 2 = -3 < 0. Advance L."
        },
        {
          "active": [
            1,
            2,
            5
          ],
          "vars": {
            "i": 1,
            "x": -1,
            "L": -1,
            "R": 2,
            "sum": 0
          },
          "msg": "i=1 (x=-1): L=-1, R=2. sum = -1 + (-1) + 2 = 0! Found [-1, -1, 2]."
        },
        {
          "active": [
            1,
            3,
            4
          ],
          "vars": {
            "i": 1,
            "x": -1,
            "L": 0,
            "R": 1,
            "sum": 0
          },
          "msg": "Skip duplicates: L=0, R=1. sum = -1 + 0 + 1 = 0! Found [-1, 0, 1]."
        },
        {
          "active": [
            1,
            2,
            3,
            4,
            5
          ],
          "vars": {
            "triplets": "[[-1,-1,2], [-1,0,1]]"
          },
          "msg": "All valid unique triplets collected. Complete!"
        }
      ]
    }
  },
  {
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/container-with-most-water/",
    "pattern": "Two Pointers",
    "short": "Two Pointers",
    "intro": "Move two positions intelligently; sorted data and opposite-end relationships often let you discard whole sets of candidates.",
    "thinking": "What relationship between two positions lets me safely eliminate candidates?",
    "steps": [
      "Restate **Container With Most Water** as a state/decision problem before writing code.",
      "Use the core Two Pointers invariant: what relationship between two positions lets me safely eliminate candidates?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Input",
      "Two positions",
      "Evaluate",
      "Discard impossible side",
      "Finish"
    ],
    "description": "<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>\n\n<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>\n\n<p>Return <em>the maximum amount of water a container can store</em>.</p>\n\n<p><strong>Notice</strong> that you may not slant the container.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg\" style=\"width: 600px; height: 287px;\" />\n<pre>\n<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]\n<strong>Output:</strong> 49\n<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> height = [1,1]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == height.length</code></li>\n\t<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "def maxArea(height: list[int]) -> int:\n    l, r, ans = 0, len(height) - 1, 0\n    while l < r:\n        ans = max(ans, min(height[l], height[r]) * (r - l))\n        if height[l] < height[r]:\n            l += 1\n        else:\n            r -= 1\n    return ans",
    "codeLines": 9,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Brute force checks every pair of lines (i, j) in O(N^2) time. Two pointers start at maximum width (0, n - 1). The area is constrained by the shorter bar. Moving the taller bar inward strictly decreases the width while the height cannot increase beyond the shorter bar. Thus, moving the shorter bar is the only move that can yield a larger area, reducing time to O(N).",
    "edgeCasesAndBreakPoints": [
      "Array length 2: evaluates the single possible container directly.",
      "All heights identical: maximum area is formed by the outer boundaries index 0 and n - 1.",
      "Decreasing or increasing stairs: two pointers contract smoothly to the center.",
      "Tall narrow spike vs wide shallow bar: accurately compares min(h[l], h[r]) * width."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]",
      "array": [
        1,
        8,
        6,
        2,
        5,
        4,
        8,
        3,
        7
      ],
      "steps": [
        {
          "active": [
            0,
            8
          ],
          "vars": {
            "L": 0,
            "R": 8,
            "h[L]": 1,
            "h[R]": 7,
            "area": "1 * 8 = 8",
            "maxArea": 8
          },
          "msg": "L=0 (h=1), R=8 (h=7): area = min(1, 7) * 8 = 8. h[L] < h[R] -> move L to 1."
        },
        {
          "active": [
            1,
            8
          ],
          "vars": {
            "L": 1,
            "R": 8,
            "h[L]": 8,
            "h[R]": 7,
            "area": "7 * 7 = 49",
            "maxArea": 49
          },
          "msg": "L=1 (h=8), R=8 (h=7): area = min(8, 7) * 7 = 49! New maxArea = 49. Move R to 7."
        },
        {
          "active": [
            1,
            7
          ],
          "vars": {
            "L": 1,
            "R": 7,
            "h[L]": 8,
            "h[R]": 3,
            "area": "3 * 6 = 18",
            "maxArea": 49
          },
          "msg": "L=1 (h=8), R=7 (h=3): area = 18 < 49. Move R to 6."
        },
        {
          "active": [
            1,
            6
          ],
          "vars": {
            "L": 1,
            "R": 6,
            "h[L]": 8,
            "h[R]": 8,
            "area": "8 * 5 = 40",
            "maxArea": 49
          },
          "msg": "L=1 (h=8), R=6 (h=8): area = 40 < 49. Pointers contract inward."
        },
        {
          "active": [
            1,
            8
          ],
          "vars": {
            "bestArea": 49
          },
          "msg": "Pointers meet. Maximum water container area = 49. Complete!"
        }
      ]
    }
  },
  {
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/trapping-rain-water/",
    "pattern": "Two Pointers",
    "short": "Two Pointers",
    "intro": "Move two positions intelligently; sorted data and opposite-end relationships often let you discard whole sets of candidates.",
    "thinking": "What relationship between two positions lets me safely eliminate candidates?",
    "steps": [
      "Restate **Trapping Rain Water** as a state/decision problem before writing code.",
      "Use the core Two Pointers invariant: what relationship between two positions lets me safely eliminate candidates?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Input",
      "Two positions",
      "Evaluate",
      "Discard impossible side",
      "Finish"
    ],
    "description": "<p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img src=\"https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png\" style=\"width: 412px; height: 161px;\" />\n<pre>\n<strong>Input:</strong> height = [0,1,0,2,1,0,1,3,2,1,2,1]\n<strong>Output:</strong> 6\n<strong>Explanation:</strong> The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> height = [4,2,0,3,2,5]\n<strong>Output:</strong> 9\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == height.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></li>\n</ul>\n",
    "pythonCode": "def trap(height: list[int]) -> int:\n    l, r, l_max, r_max, ans = 0, len(height) - 1, 0, 0, 0\n    while l < r:\n        if height[l] < height[r]:\n            l_max = max(l_max, height[l])\n            ans += l_max - height[l]\n            l += 1\n        else:\n            r_max = max(r_max, height[r])\n            ans += r_max - height[r]\n            r -= 1\n    return ans",
    "codeLines": 12,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Brute force checks every position i and scans left and right to find boundary maxima, taking O(N^2) time. The two-pointer approach proves that the trapped water at any bar is bounded strictly by the smaller of the two outer boundary maxima. By advancing the pointer at the smaller boundary inward, we determine water at that bar in O(1) and never need to rescan, reducing time to linear O(N) and space to strict O(1).",
    "edgeCasesAndBreakPoints": [
      "Monotonically increasing or decreasing elevations: returns 0 trapped water without false positive accumulation.",
      "Array length < 3: cannot form any concave reservoir; returns 0 immediately.",
      "Consecutive equal peak elevations: handled seamlessly by running maximum updates without double-counting.",
      "All elements equal to 0 or flat terrain: pointers converge without unbounded indexing or positive sum."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
      "array": [
        0,
        1,
        0,
        2,
        1,
        0,
        1,
        3,
        2,
        1,
        2,
        1
      ],
      "steps": [
        {
          "active": [
            0,
            11
          ],
          "vars": {
            "L": 0,
            "R": 11,
            "lMax": 0,
            "rMax": 0,
            "ans": 0
          },
          "msg": "Initialize pointers at l=0 (val 0) and r=11 (val 1). Both boundary maximums start at 0."
        },
        {
          "active": [
            1,
            11
          ],
          "vars": {
            "L": 1,
            "R": 11,
            "lMax": 0,
            "rMax": 0,
            "ans": 0
          },
          "msg": "height[l]=0 < height[r]=1: lMax updated to max(0, 0)=0, water added = 0 - 0 = 0. Advance l to 1."
        },
        {
          "active": [
            1,
            10
          ],
          "vars": {
            "L": 1,
            "R": 10,
            "lMax": 1,
            "rMax": 1,
            "ans": 0
          },
          "msg": "height[l]=1 == height[r]=1: process right. rMax updated to 1, water added = 1 - 1 = 0. Decrement r to 10."
        },
        {
          "active": [
            1,
            9
          ],
          "vars": {
            "L": 1,
            "R": 9,
            "lMax": 1,
            "rMax": 2,
            "ans": 0
          },
          "msg": "height[r]=2 > height[l]=1: process left. lMax=1, height[1]=1 → water += 0. Advance l to 2."
        },
        {
          "active": [
            2,
            9
          ],
          "vars": {
            "L": 2,
            "R": 9,
            "lMax": 1,
            "rMax": 2,
            "ans": 1
          },
          "msg": "height[l]=0 < height[r]=1: lMax is 1 > height[2]=0. Trapped water += 1 - 0 = 1! Total water = 1."
        },
        {
          "active": [
            3,
            9
          ],
          "vars": {
            "L": 3,
            "R": 9,
            "lMax": 2,
            "rMax": 2,
            "ans": 1
          },
          "msg": "height[l]=2 updates lMax to 2. No water at peak. Advance l to 4."
        },
        {
          "active": [
            5,
            9
          ],
          "vars": {
            "L": 5,
            "R": 9,
            "lMax": 2,
            "rMax": 2,
            "ans": 3
          },
          "msg": "Stepping inward through indices 4 and 5 (trough between peaks 2 and 3). Accumulates 2 more water units. Total = 3."
        },
        {
          "active": [
            7,
            7
          ],
          "vars": {
            "L": 7,
            "R": 7,
            "lMax": 3,
            "rMax": 3,
            "ans": 6
          },
          "msg": "Pointers meet at highest peak index 7 (height 3). Total trapped water = 6 units. Complete!"
        }
      ]
    }
  },
  {
    "title": "Middle of the Linked List",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "pattern": "Fast & Slow Pointers",
    "short": "Fast & Slow Pointers",
    "intro": "Use different pointer speeds to expose cycles, repeated states, or relative positions.",
    "thinking": "What does the relative speed of the pointers reveal about repetition or position?",
    "steps": [
      "Restate **Middle of the Linked List** as a state/decision problem before writing code.",
      "Use the core Fast & Slow Pointers invariant: what does the relative speed of the pointers reveal about repetition or position?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Repeated/linked state",
      "slow + fast",
      "Advance",
      "Meet / boundary",
      "Interpret"
    ],
    "description": "<p>Given the <code>head</code> of a singly linked list, return <em>the middle node of the linked list</em>.</p>\n\n<p>If there are two middle nodes, return <strong>the second middle</strong> node.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg\" style=\"width: 544px; height: 65px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4,5]\n<strong>Output:</strong> [3,4,5]\n<strong>Explanation:</strong> The middle node of the list is node 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg\" style=\"width: 664px; height: 65px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4,5,6]\n<strong>Output:</strong> [4,5,6]\n<strong>Explanation:</strong> Since the list has two middle nodes with values 3 and 4, we return the second one.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the list is in the range <code>[1, 100]</code>.</li>\n\t<li><code>1 &lt;= Node.val &lt;= 100</code></li>\n</ul>\n",
    "pythonCode": "def middleNode(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow, fast = slow.next, fast.next.next\n    return slow",
    "codeLines": 5,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Counting list length first and traversing again requires two passes. Fast and slow pointers traverse the list in a single pass: the fast pointer advances twice as fast as the slow pointer, landing slow exactly at the middle node when fast reaches the end.",
    "edgeCasesAndBreakPoints": [
      "Single node list: fast.next is None, returns head immediately.",
      "Two node list: fast advances 2 steps to None, returns second node (middle for even length).",
      "Odd length list: fast lands on last node, slow lands on exact middle.",
      "Even length list: fast lands on None, slow lands on second middle node as required."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "head = [1, 2, 3, 4, 5]",
      "array": [
        1,
        2,
        3,
        4,
        5
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "slow": 1,
            "fast": 1
          },
          "msg": "Start both pointers at head (node 1)."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "slow": 2,
            "fast": 3
          },
          "msg": "Step 1: slow -> 2, fast -> 3."
        },
        {
          "active": [
            2,
            4
          ],
          "vars": {
            "slow": 3,
            "fast": 5
          },
          "msg": "Step 2: slow -> 3, fast -> 5. fast.next is None! Stop."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "middleNode": 3
          },
          "msg": "Slow pointer is at node 3 (exact middle). Complete!"
        }
      ]
    }
  },
  {
    "title": "Remove Nth Node From End of List",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "pattern": "Fast & Slow Pointers",
    "short": "Fast & Slow Pointers",
    "intro": "Use different pointer speeds to expose cycles, repeated states, or relative positions.",
    "thinking": "What does the relative speed of the pointers reveal about repetition or position?",
    "steps": [
      "Restate **Remove Nth Node From End of List** as a state/decision problem before writing code.",
      "Use the core Fast & Slow Pointers invariant: what does the relative speed of the pointers reveal about repetition or position?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Repeated/linked state",
      "slow + fast",
      "Advance",
      "Meet / boundary",
      "Interpret"
    ],
    "description": "<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4,5], n = 2\n<strong>Output:</strong> [1,2,3,5]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> head = [1], n = 1\n<strong>Output:</strong> []\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> head = [1,2], n = 1\n<strong>Output:</strong> [1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the list is <code>sz</code>.</li>\n\t<li><code>1 &lt;= sz &lt;= 30</code></li>\n\t<li><code>0 &lt;= Node.val &lt;= 100</code></li>\n\t<li><code>1 &lt;= n &lt;= sz</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Could you do this in one pass?</p>\n",
    "pythonCode": "def removeNthFromEnd(head, n: int):\n    dummy = fast = slow = ListNode(0, head)\n    for _ in range(n): fast = fast.next\n    while fast.next:\n        slow, fast = slow.next, fast.next\n    slow.next = slow.next.next\n    return dummy.next",
    "codeLines": 7,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Finding the length first and then subtracting n requires two passes over the list. Advancing a fast pointer n steps ahead of slow creates a fixed gap of size n. When fast reaches the tail, slow is positioned exactly before the node to delete, removing it in a single pass with O(1) memory.",
    "edgeCasesAndBreakPoints": [
      "Removing head node (n == length): dummy node ensures slow.next = slow.next.next deletes head smoothly.",
      "Single node list with n = 1: returns None (empty list).",
      "Removing tail node (n = 1): unlinks tail cleanly.",
      "List with 2 nodes: handles both n=1 and n=2 without null pointer errors."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "head = [1, 2, 3, 4, 5], n = 2",
      "array": [
        "dummy",
        1,
        2,
        3,
        4,
        5
      ],
      "steps": [
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "gap": 2,
            "fast": 2,
            "slow": "dummy"
          },
          "msg": "Advance fast n=2 steps ahead to node 2. Gap established."
        },
        {
          "active": [
            3,
            5
          ],
          "vars": {
            "fast": 5,
            "slow": 3
          },
          "msg": "Advance both until fast is at tail (node 5). slow is at node 3."
        },
        {
          "active": [
            3,
            5
          ],
          "vars": {
            "unlinked": 4,
            "relinked": "3 -> 5"
          },
          "msg": "Unlink target: slow.next = slow.next.next (bypasses node 4)."
        },
        {
          "active": [
            1,
            2,
            3,
            5
          ],
          "vars": {
            "result": "[1, 2, 3, 5]"
          },
          "msg": "Node 4 removed from end of list. Complete!"
        }
      ]
    }
  },
  {
    "title": "Find the Duplicate Number",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/find-the-duplicate-number/",
    "pattern": "Fast & Slow Pointers",
    "short": "Fast & Slow Pointers",
    "intro": "Use different pointer speeds to expose cycles, repeated states, or relative positions.",
    "thinking": "What does the relative speed of the pointers reveal about repetition or position?",
    "steps": [
      "Restate **Find the Duplicate Number** as a state/decision problem before writing code.",
      "Use the core Fast & Slow Pointers invariant: what does the relative speed of the pointers reveal about repetition or position?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Repeated/linked state",
      "slow + fast",
      "Advance",
      "Meet / boundary",
      "Interpret"
    ],
    "description": "<p>Given an array of integers <code>nums</code> containing&nbsp;<code>n + 1</code> integers where each integer is in the range <code>[1, n]</code> inclusive.</p>\n\n<p>There is only <strong>one repeated number</strong> in <code>nums</code>, return <em>this&nbsp;repeated&nbsp;number</em>.</p>\n\n<p>You must solve the problem <strong>without</strong> modifying the array <code>nums</code>&nbsp;and using only constant extra space.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,3,4,2,2]\n<strong>Output:</strong> 2\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,1,3,4,2]\n<strong>Output:</strong> 3\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,3,3,3,3]\n<strong>Output:</strong> 3</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>nums.length == n + 1</code></li>\n\t<li><code>1 &lt;= nums[i] &lt;= n</code></li>\n\t<li>All the integers in <code>nums</code> appear only <strong>once</strong> except for <strong>precisely one integer</strong> which appears <strong>two or more</strong> times.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><b>Follow up:</b></p>\n\n<ul>\n\t<li>How can we prove that at least one duplicate number must exist in <code>nums</code>?</li>\n\t<li>Can you solve the problem in linear runtime complexity?</li>\n</ul>\n",
    "pythonCode": "def findDuplicate(nums: list[int]) -> int:\n    slow = fast = nums[0]\n    while True:\n        slow, fast = nums[slow], nums[nums[fast]]\n        if slow == fast: break\n    slow = nums[0]\n    while slow != fast:\n        slow, fast = nums[slow], nums[fast]\n    return slow",
    "codeLines": 9,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Sorting modifies the input array and takes O(N log N). A hash set takes O(N) extra space. Because array values are in range [1, n], we can treat the array as a functional linked list where i -> nums[i]. By Floyd's Cycle Detection Algorithm (Tortoise and Hare), the duplicate number is the entry point of the cycle, found in O(N) time without modifying nums and using strict O(1) space.",
    "edgeCasesAndBreakPoints": [
      "Duplicate repeated many times: cycle entry remains uniquely at the duplicate value.",
      "Array of length 2 [1, 1]: detected on first phase immediately.",
      "Duplicate not adjacent: cycle detection traverses across array indices seamlessly.",
      "No modification to input array: fully preserves read-only memory requirements."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [1, 3, 4, 2, 2]",
      "array": [
        1,
        3,
        4,
        2,
        2
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "phase": "Cycle detection",
            "slow": 1,
            "fast": 1
          },
          "msg": "Start slow and fast at nums[0] = 1."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "slow": 3,
            "fast": 4
          },
          "msg": "Step 1: slow=nums[1]=3, fast=nums[nums[1]]=nums[3]=2 -> nums[2]=4."
        },
        {
          "active": [
            4,
            4
          ],
          "vars": {
            "slow": 4,
            "fast": 4,
            "intersect": 4
          },
          "msg": "Step 2: slow and fast meet at value 4! Cycle detected."
        },
        {
          "active": [
            0,
            4
          ],
          "vars": {
            "phase": "Find cycle entry",
            "slow": 1,
            "fast": 4
          },
          "msg": "Reset slow to nums[0]=1. Advance both 1 step at a time."
        },
        {
          "active": [
            3,
            3
          ],
          "vars": {
            "duplicate": 2
          },
          "msg": "Pointers meet at value 2! Duplicate number is 2. Complete!"
        }
      ]
    }
  },
  {
    "title": "Longest Duplicate Substring",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/longest-duplicate-substring/",
    "pattern": "Fast & Slow Pointers",
    "short": "Fast & Slow Pointers",
    "intro": "Use different pointer speeds to expose cycles, repeated states, or relative positions.",
    "thinking": "What does the relative speed of the pointers reveal about repetition or position?",
    "steps": [
      "Restate **Longest Duplicate Substring** as a state/decision problem before writing code.",
      "Use the core Fast & Slow Pointers invariant: what does the relative speed of the pointers reveal about repetition or position?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Repeated/linked state",
      "slow + fast",
      "Advance",
      "Meet / boundary",
      "Interpret"
    ],
    "description": "<p>Given a string <code>s</code>, consider all <em>duplicated substrings</em>: (contiguous) substrings of s that occur 2 or more times.&nbsp;The occurrences&nbsp;may overlap.</p>\n\n<p>Return <strong>any</strong> duplicated&nbsp;substring that has the longest possible length.&nbsp;If <code>s</code> does not have a duplicated substring, the answer is <code>&quot;&quot;</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> s = \"banana\"\n<strong>Output:</strong> \"ana\"\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> s = \"abcd\"\n<strong>Output:</strong> \"\"\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>s</code> consists of lowercase English letters.</li>\n</ul>\n",
    "pythonCode": "def longestDupSubstring(s: str) -> str:\n    def check(L: int) -> int:\n        seen = set()\n        for i in range(len(s) - L + 1):\n            sub = s[i:i + L]\n            if sub in seen: return i\n            seen.add(sub)\n        return -1\n    lo, hi, start, best_len = 1, len(s) - 1, 0, 0\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        idx = check(mid)\n        if idx != -1:\n            start, best_len, lo = idx, mid, mid + 1\n        else:\n            hi = mid - 1\n    return s[start:start + best_len]",
    "codeLines": 17,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force checks all O(N^2) candidate substrings and compares them in O(N^3) total time. Because substring duplication exhibits monotonicity (if a duplicate of length L exists, duplicates of length < L must also exist), we can binary search on the length L in [1, N-1] in O(log N) iterations. Testing existence of duplicate of length L uses rolling hash or set in O(N), giving O(N log N) overall.",
    "edgeCasesAndBreakPoints": [
      "No duplicate substrings at all (e.g. 'abcdef'): returns '' cleanly when lo > hi.",
      "All characters identical (e.g. 'aaaaa'): longest duplicate length is n - 1.",
      "Large strings with hash collisions: Python's fast string hashing/slices provide collision-safe checks.",
      "Short strings (length 2): binary search boundaries lo=1, hi=1 terminate correctly."
    ],
    "simConfig": {
      "type": "binary_search",
      "inputDisplay": "s = 'banana'",
      "array": [
        "b",
        "a",
        "n",
        "a",
        "n",
        "a"
      ],
      "steps": [
        {
          "active": [
            0,
            5
          ],
          "vars": {
            "lo": 1,
            "hi": 5,
            "mid": 3,
            "best": "''"
          },
          "msg": "String length 6. Binary search length range [1, 5]. Mid length = 3."
        },
        {
          "active": [
            1,
            3
          ],
          "vars": {
            "lo": 1,
            "hi": 5,
            "mid": 3,
            "cand": "'ana'"
          },
          "msg": "Check L=3: 'ban', 'ana', 'nan', 'ana' -> 'ana' appears twice at index 1 and 3!"
        },
        {
          "active": [
            1,
            4
          ],
          "vars": {
            "lo": 4,
            "hi": 5,
            "mid": 4,
            "best": "'ana'"
          },
          "msg": "Found duplicate of len 3! Update best='ana', search higher: lo=4, hi=5, mid=4."
        },
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "lo": 4,
            "hi": 5,
            "mid": 4,
            "cand": "'bana'"
          },
          "msg": "Check L=4: 'bana', 'anan', 'nana' -> all unique. No duplicate of length 4."
        },
        {
          "active": [
            1,
            4
          ],
          "vars": {
            "lo": 4,
            "hi": 3,
            "done": true,
            "res": "'ana'"
          },
          "msg": "Search space exhausted (lo > hi). Return longest duplicate substring: 'ana'."
        }
      ]
    }
  },
  {
    "title": "Maximum Average Subarray I",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/maximum-average-subarray-i/",
    "pattern": "Sliding Window",
    "short": "Sliding Window",
    "intro": "Maintain a contiguous window, update its state incrementally, and shrink it only when its invariant is violated.",
    "thinking": "What exactly is inside my window, and what condition makes it invalid?",
    "steps": [
      "Restate **Maximum Average Subarray I** as a state/decision problem before writing code.",
      "Use the core Sliding Window invariant: what exactly is inside my window, and what condition makes it invalid?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Contiguous range",
      "Expand",
      "Update state",
      "Invalid?",
      "Shrink",
      "Answer"
    ],
    "description": "<p>You are given an integer array <code>nums</code> consisting of <code>n</code> elements, and an integer <code>k</code>.</p>\n\n<p>Find a contiguous subarray whose <strong>length is equal to</strong> <code>k</code> that has the maximum average value and return <em>this value</em>. Any answer with a calculation error less than <code>10<sup>-5</sup></code> will be accepted.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,12,-5,-6,50,3], k = 4\n<strong>Output:</strong> 12.75000\n<strong>Explanation:</strong> Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [5], k = 1\n<strong>Output:</strong> 5.00000\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "def findMaxAverage(nums: list[int], k: int) -> float:\n    cur = max_s = sum(nums[:k])\n    for i in range(k, len(nums)):\n        cur += nums[i] - nums[i - k]\n        max_s = max(max_s, cur)\n    return max_s / k",
    "codeLines": 6,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Recalculating the sum of each k-length window from scratch takes O(N * K) time. By maintaining a sliding window of size k, sliding the window rightward adds nums[i] and subtracts nums[i - k] in O(1) time per step, achieving O(N) linear time and O(1) extra space.",
    "edgeCasesAndBreakPoints": [
      "k == len(nums): single window encompassing entire array; returns sum(nums) / k.",
      "Negative numbers: max_s initialized to first window sum handles strictly negative arrays without 0-default bugs.",
      "k = 1: maximum average is simply max(nums).",
      "Floating point division: max_s / k executed once at the end to prevent precision loss."
    ],
    "simConfig": {
      "type": "sliding_window",
      "inputDisplay": "nums = [1, 12, -5, -6, 50, 3], k = 4",
      "array": [
        1,
        12,
        -5,
        -6,
        50,
        3
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "window": "0..3",
            "sum": "1+12-5-6 = 2",
            "maxSum": 2
          },
          "msg": "Initial window [1, 12, -5, -6]: sum = 2."
        },
        {
          "active": [
            1,
            2,
            3,
            4
          ],
          "vars": {
            "add": 50,
            "drop": 1,
            "sum": "2+50-1 = 51",
            "maxSum": 51
          },
          "msg": "Slide to [12, -5, -6, 50]: add 50, subtract 1. sum = 51! New maxSum = 51."
        },
        {
          "active": [
            2,
            3,
            4,
            5
          ],
          "vars": {
            "add": 3,
            "drop": 12,
            "sum": "51+3-12 = 42",
            "maxSum": 51
          },
          "msg": "Slide to [-5, -6, 50, 3]: add 3, drop 12. sum = 42 < 51."
        },
        {
          "active": [
            1,
            2,
            3,
            4
          ],
          "vars": {
            "maxAverage": "51 / 4 = 12.75"
          },
          "msg": "Max average = 51 / 4 = 12.75. Complete!"
        }
      ]
    }
  },
  {
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "pattern": "Sliding Window",
    "short": "Sliding Window",
    "intro": "Maintain a contiguous window, update its state incrementally, and shrink it only when its invariant is violated.",
    "thinking": "What exactly is inside my window, and what condition makes it invalid?",
    "steps": [
      "Restate **Longest Substring Without Repeating Characters** as a state/decision problem before writing code.",
      "Use the core Sliding Window invariant: what exactly is inside my window, and what condition makes it invalid?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Contiguous range",
      "Expand",
      "Update state",
      "Invalid?",
      "Shrink",
      "Answer"
    ],
    "description": "<p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <span data-keyword=\"substring-nonempty\"><strong>substring</strong></span> without duplicate characters.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;abcabcbb&quot;\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The answer is &quot;abc&quot;, with the length of 3. Note that <code>&quot;bca&quot;</code> and <code>&quot;cab&quot;</code> are also correct answers.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;bbbbb&quot;\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> The answer is &quot;b&quot;, with the length of 1.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;pwwkew&quot;\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The answer is &quot;wke&quot;, with the length of 3.\nNotice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= s.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>\n</ul>\n",
    "pythonCode": "def lengthOfLongestSubstring(s: str) -> int:\n    seen, l, ans = {}, 0, 0\n    for r, c in enumerate(s):\n        if c in seen and seen[c] >= l:\n            l = seen[c] + 1\n        seen[c] = r\n        ans = max(ans, r - l + 1)\n    return ans",
    "codeLines": 8,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(min(M, N))",
    "whyBetterThanBruteForce": "Brute force checks all O(N^2) substrings and validates character uniqueness in O(N^3) time. A sliding window with a hashmap recording the latest index of each character allows the left pointer to jump directly past the previous occurrence of a duplicate character in O(1), ensuring every character is processed in a single linear pass.",
    "edgeCasesAndBreakPoints": [
      "Empty string: returns 0 immediately.",
      "All characters identical (e.g. 'bbbbb'): left pointer advances with each step, returns 1.",
      "String with all unique characters: left pointer stays at 0, returns len(s).",
      "Character seen earlier before the current left pointer: seen[c] >= l check prevents left pointer from moving backwards."
    ],
    "simConfig": {
      "type": "sliding_window",
      "inputDisplay": "s = 'abcabcbb'",
      "array": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "window": "'abc'",
            "L": 0,
            "R": 2,
            "maxLen": 3
          },
          "msg": "Expand: 'abc' has all unique characters. maxLen = 3."
        },
        {
          "active": [
            1,
            2,
            3
          ],
          "vars": {
            "repeat": "'a'",
            "jump_L": 1,
            "window": "'bca'"
          },
          "msg": "r=3 ('a'): 'a' was seen at index 0. Jump L = 0 + 1 = 1. Window: 'bca'."
        },
        {
          "active": [
            2,
            3,
            4
          ],
          "vars": {
            "repeat": "'b'",
            "jump_L": 2,
            "window": "'cab'"
          },
          "msg": "r=4 ('b'): 'b' was seen at index 1. Jump L = 2. Window: 'cab'."
        },
        {
          "active": [
            5,
            6,
            7
          ],
          "vars": {
            "bestLen": 3
          },
          "msg": "Remaining characters contract window. Longest substring length = 3 ('abc'). Complete!"
        }
      ]
    }
  },
  {
    "title": "Permutation in String",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/permutation-in-string/",
    "pattern": "Sliding Window",
    "short": "Sliding Window",
    "intro": "Maintain a contiguous window, update its state incrementally, and shrink it only when its invariant is violated.",
    "thinking": "What exactly is inside my window, and what condition makes it invalid?",
    "steps": [
      "Restate **Permutation in String** as a state/decision problem before writing code.",
      "Use the core Sliding Window invariant: what exactly is inside my window, and what condition makes it invalid?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Contiguous range",
      "Expand",
      "Update state",
      "Invalid?",
      "Shrink",
      "Answer"
    ],
    "description": "<p>Given two strings <code>s1</code> and <code>s2</code>, return <code>true</code> if <code>s2</code> contains a <span data-keyword=\"permutation-string\">permutation</span> of <code>s1</code>, or <code>false</code> otherwise.</p>\n\n<p>In other words, return <code>true</code> if one of <code>s1</code>&#39;s permutations is the substring of <code>s2</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidbaooo&quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong> s2 contains one permutation of s1 (&quot;ba&quot;).\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidboaoo&quot;\n<strong>Output:</strong> false\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s1.length, s2.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>s1</code> and <code>s2</code> consist of lowercase English letters.</li>\n</ul>\n",
    "pythonCode": "from collections import Counter\n\ndef checkInclusion(s1: str, s2: str) -> bool:\n    n1, n2 = len(s1), len(s2)\n    if n1 > n2: return False\n    c1, c2 = Counter(s1), Counter(s2[:n1])\n    if c1 == c2: return True\n    for i in range(n1, n2):\n        c2[s2[i]] += 1\n        c2[s2[i - n1]] -= 1\n        if c2[s2[i - n1]] == 0: del c2[s2[i - n1]]\n        if c1 == c2: return True\n    return False",
    "codeLines": 13,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1) (at most 26 lowercase letters)",
    "whyBetterThanBruteForce": "Generating all permutations of s1 takes factorial O(N1!) time. Sorting each window of size len(s1) in s2 takes O(N2 * N1 log N1). A fixed-size sliding window maintaining frequency counts of 26 letters slides across s2: updating one character entered and one character exited takes O(1), achieving O(N2) overall time.",
    "edgeCasesAndBreakPoints": [
      "len(s1) > len(s2): impossible for s2 to contain a permutation of s1; returns False.",
      "s1 and s2 identical: first comparison c1 == c2 returns True immediately.",
      "Permutation at the very end of s2: loop completes full traversal and returns True.",
      "No matching permutation: returns False after sliding."
    ],
    "simConfig": {
      "type": "sliding_window",
      "inputDisplay": "s1 = 'ab', s2 = 'eidbaooo'",
      "array": [
        "e",
        "i",
        "d",
        "b",
        "a",
        "o",
        "o",
        "o"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "s1": "{'a':1,'b':1}",
            "window": "{'e':1,'i':1}",
            "match": false
          },
          "msg": "Window 0..1 'ei': frequency mismatch."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "window": "'id'",
            "match": false
          },
          "msg": "Slide to 'id': frequency mismatch."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "window": "'db'",
            "match": false
          },
          "msg": "Slide to 'db': frequency mismatch."
        },
        {
          "active": [
            3,
            4
          ],
          "vars": {
            "window": "'ba'",
            "match": true
          },
          "msg": "Slide to 'ba': counts {'b':1, 'a':1} match s1 perfectly! Return True."
        }
      ]
    }
  },
  {
    "title": "Minimum Window Substring",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/minimum-window-substring/",
    "pattern": "Sliding Window",
    "short": "Sliding Window",
    "intro": "Maintain a contiguous window, update its state incrementally, and shrink it only when its invariant is violated.",
    "thinking": "What exactly is inside my window, and what condition makes it invalid?",
    "steps": [
      "Restate **Minimum Window Substring** as a state/decision problem before writing code.",
      "Use the core Sliding Window invariant: what exactly is inside my window, and what condition makes it invalid?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Contiguous range",
      "Expand",
      "Update state",
      "Invalid?",
      "Shrink",
      "Answer"
    ],
    "description": "<p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window</strong></em> <span data-keyword=\"substring-nonempty\"><strong><em>substring</em></strong></span><em> of </em><code>s</code><em> such that every character in </em><code>t</code><em> (<strong>including duplicates</strong>) is included in the window</em>. If there is no such substring, return <em>the empty string </em><code>&quot;&quot;</code>.</p>\n\n<p>The testcases will be generated such that the answer is <strong>unique</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;ADOBECODEBANC&quot;, t = &quot;ABC&quot;\n<strong>Output:</strong> &quot;BANC&quot;\n<strong>Explanation:</strong> The minimum window substring &quot;BANC&quot; includes &#39;A&#39;, &#39;B&#39;, and &#39;C&#39; from string t.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;a&quot;, t = &quot;a&quot;\n<strong>Output:</strong> &quot;a&quot;\n<strong>Explanation:</strong> The entire string s is the minimum window.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;a&quot;, t = &quot;aa&quot;\n<strong>Output:</strong> &quot;&quot;\n<strong>Explanation:</strong> Both &#39;a&#39;s from t must be included in the window.\nSince the largest window of s only has one &#39;a&#39;, return empty string.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == s.length</code></li>\n\t<li><code>n == t.length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Could you find an algorithm that runs in <code>O(m + n)</code> time?</p>\n",
    "pythonCode": "from collections import Counter\n\ndef minWindow(s: str, t: str) -> str:\n    need, missing = Counter(t), len(t)\n    start = end = l = 0\n    for r, c in enumerate(s, 1):\n        if need[c] > 0: missing -= 1\n        need[c] -= 1\n        if missing == 0:\n            while need[s[l]] < 0:\n                need[s[l]] += 1\n                l += 1\n            if end == 0 or r - l < end - start:\n                start, end = l, r\n            need[s[l]] += 1\n            missing += 1\n            l += 1\n    return s[start:end]",
    "codeLines": 18,
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1) (ASCII 128)",
    "whyBetterThanBruteForce": "Brute force generates all O(N^2) substrings and validates character frequency against t in O(M) time, resulting in O(M * N^2) complexity. The two-pointer sliding window expands the right pointer to satisfy character needs and contracts the left pointer to discard redundant characters. Each pointer moves at most N steps, guaranteeing O(M + N) linear time with O(1) auxiliary alphabet storage.",
    "edgeCasesAndBreakPoints": [
      "len(s) < len(t): impossible to contain t; returns '' immediately.",
      "s and t identical: window encompasses entire string on first pass and returns s.",
      "Multiple duplicate characters in t (e.g. t='aa'): 'missing' counter tracks total needed occurrences.",
      "No valid window found anywhere in s: start and end remain 0, returning '' cleanly."
    ],
    "simConfig": {
      "type": "sliding_window",
      "inputDisplay": "s = 'ADOBECODEBANC', t = 'ABC'",
      "array": [
        "A",
        "D",
        "O",
        "B",
        "E",
        "C",
        "O",
        "D",
        "E",
        "B",
        "A",
        "N",
        "C"
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "vars": {
            "L": 0,
            "R": 5,
            "window": "'ADOBEC'",
            "missing": 0,
            "minLen": 6
          },
          "msg": "Expand right to index 5 ('C'): contains all 'A','B','C'! Window is 'ADOBEC' (len 6)."
        },
        {
          "active": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
          ],
          "vars": {
            "L": 1,
            "R": 9,
            "window": "'DOBECODEB'",
            "missing": 0,
            "minLen": 6
          },
          "msg": "Contract L to 1, expand R to 9 ('B'). Missing satisfied again."
        },
        {
          "active": [
            9,
            10,
            11,
            12
          ],
          "vars": {
            "L": 9,
            "R": 12,
            "window": "'BANC'",
            "missing": 0,
            "minLen": 4
          },
          "msg": "Expand to end at index 12 ('C'). Contract left pointer up to index 9 ('B'). Window 'BANC' len = 4!"
        },
        {
          "active": [
            9,
            10,
            11,
            12
          ],
          "vars": {
            "res": "'BANC'",
            "len": 4
          },
          "msg": "Right pointer reaches end. Minimal window substring found: 'BANC'."
        }
      ]
    }
  },
  {
    "title": "Running Sum of 1d Array",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/running-sum-of-1d-array/",
    "pattern": "Prefix Sum",
    "short": "Prefix Sum",
    "intro": "Transform repeated range/subarray calculations into reusable cumulative state.",
    "thinking": "What repeated calculation can become a difference or lookup of cumulative state?",
    "steps": [
      "Restate **Running Sum of 1d Array** as a state/decision problem before writing code.",
      "Use the core Prefix Sum invariant: what repeated calculation can become a difference or lookup of cumulative state?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Raw data",
      "Cumulative state",
      "Range difference / lookup",
      "Answer"
    ],
    "description": "<p>Given an array <code>nums</code>. We define a running sum of an array as&nbsp;<code>runningSum[i] = sum(nums[0]&hellip;nums[i])</code>.</p>\n\n<p>Return the running sum of <code>nums</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,3,4]\n<strong>Output:</strong> [1,3,6,10]\n<strong>Explanation:</strong> Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,1,1,1,1]\n<strong>Output:</strong> [1,2,3,4,5]\n<strong>Explanation:</strong> Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,1,2,10,1]\n<strong>Output:</strong> [3,4,6,16,17]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 1000</code></li>\n\t<li><code>-10^6&nbsp;&lt;= nums[i] &lt;=&nbsp;10^6</code></li>\n</ul>\n",
    "pythonCode": "def runningSum(nums: list[int]) -> list[int]:\n    for i in range(1, len(nums)):\n        nums[i] += nums[i - 1]\n    return nums",
    "codeLines": 4,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1) in-place",
    "whyBetterThanBruteForce": "Recalculating sum(nums[:i+1]) for each index takes O(N^2) time. Accumulating in-place nums[i] += nums[i-1] takes exactly one addition per element in O(N) time with zero extra memory allocation.",
    "edgeCasesAndBreakPoints": [
      "Single element array: loop does not execute, returns [nums[0]].",
      "Negative numbers: correctly adds negative values without magnitude bugs.",
      "All zeros: array remains all zeros.",
      "Large numbers up to 10^6: Python handles integer additions without 32-bit overflow."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [1, 2, 3, 4]",
      "array": [
        1,
        2,
        3,
        4
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "sum": 1
          },
          "msg": "Index 0: running sum = 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "sum": "1 + 2 = 3"
          },
          "msg": "Index 1: nums[1] += nums[0] -> 3."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "i": 2,
            "sum": "3 + 3 = 6"
          },
          "msg": "Index 2: nums[2] += nums[1] -> 6."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "i": 3,
            "sum": "6 + 4 = 10"
          },
          "msg": "Index 3: nums[3] += nums[2] -> 10. Result: [1, 3, 6, 10]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Subarray Sum Equals K",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "pattern": "Prefix Sum",
    "short": "Prefix Sum",
    "intro": "Transform repeated range/subarray calculations into reusable cumulative state.",
    "thinking": "What repeated calculation can become a difference or lookup of cumulative state?",
    "steps": [
      "Restate **Subarray Sum Equals K** as a state/decision problem before writing code.",
      "Use the core Prefix Sum invariant: what repeated calculation can become a difference or lookup of cumulative state?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Raw data",
      "Cumulative state",
      "Range difference / lookup",
      "Answer"
    ],
    "description": "<p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return <em>the total number of subarrays whose sum equals to</em> <code>k</code>.</p>\n\n<p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [1,1,1], k = 2\n<strong>Output:</strong> 2\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [1,2,3], k = 3\n<strong>Output:</strong> 2\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>\n\t<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>\n\t<li><code>-10<sup>7</sup> &lt;= k &lt;= 10<sup>7</sup></code></li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict\n\ndef subarraySum(nums: list[int], k: int) -> int:\n    mp, cur, ans = defaultdict(int), 0, 0\n    mp[0] = 1\n    for x in nums:\n        cur += x\n        ans += mp[cur - k]\n        mp[cur] += 1\n    return ans",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Checking all O(N^2) subarrays takes O(N^2) time. Because nums can contain negative numbers, sliding window does not work. Storing prefix sum frequencies in a hashmap allows querying the count of past prefix sums equal to cur - k in O(1) amortized time, counting all target subarrays in a single O(N) pass.",
    "edgeCasesAndBreakPoints": [
      "k == 0 with zeros in array: correctly accumulates multiple zeroes using frequency counts.",
      "Subarray starts at index 0: mp[0] = 1 base case handles prefixes summing directly to k.",
      "Negative numbers in nums: prefix sums fluctuate up and down without breaking hashmap lookup.",
      "No valid subarray: ans remains 0."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [1, 1, 1], k = 2",
      "array": [
        1,
        1,
        1
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "x": 1,
            "cur": 1,
            "need": "1-2=-1",
            "ans": 0,
            "map": "{0:1, 1:1}"
          },
          "msg": "i=0: prefix sum = 1. cur - k = -1 not in map. Store 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "x": 1,
            "cur": 2,
            "need": "2-2=0",
            "ans": 1,
            "map": "{0:1, 1:1, 2:1}"
          },
          "msg": "i=1: prefix sum = 2. cur - k = 0 (count 1 in map)! Subarray [1, 1] found. ans = 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "x": 1,
            "cur": 3,
            "need": "3-2=1",
            "ans": 2
          },
          "msg": "i=2: prefix sum = 3. cur - k = 1 (count 1 in map)! Subarray [1, 1] found. ans = 1 + 1 = 2."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "totalSubarrays": 2
          },
          "msg": "Scan complete. Total subarrays summing to 2 = 2."
        }
      ]
    }
  },
  {
    "title": "Product of Array Except Self",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/product-of-array-except-self/",
    "pattern": "Prefix Sum",
    "short": "Prefix Sum",
    "intro": "Transform repeated range/subarray calculations into reusable cumulative state.",
    "thinking": "What repeated calculation can become a difference or lookup of cumulative state?",
    "steps": [
      "Restate **Product of Array Except Self** as a state/decision problem before writing code.",
      "Use the core Prefix Sum invariant: what repeated calculation can become a difference or lookup of cumulative state?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Raw data",
      "Cumulative state",
      "Range difference / lookup",
      "Answer"
    ],
    "description": "<p>Given an integer array <code>nums</code>, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is equal to the product of all the elements of</em> <code>nums</code> <em>except</em> <code>nums[i]</code>.</p>\n\n<p>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</p>\n\n<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time and without using the division operation.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [1,2,3,4]\n<strong>Output:</strong> [24,12,8,6]\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [-1,1,0,-3,3]\n<strong>Output:</strong> [0,0,9,0,0]\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-30 &lt;= nums[i] &lt;= 30</code></li>\n\t<li>The input is generated such that <code>answer[i]</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong>&nbsp;Can you solve the problem in <code>O(1)</code>&nbsp;extra&nbsp;space complexity? (The output array <strong>does not</strong> count as extra space for space complexity analysis.)</p>\n",
    "pythonCode": "def productExceptSelf(nums: list[int]) -> list[int]:\n    n = len(nums)\n    ans = [1] * n\n    prefix = 1\n    for i in range(n):\n        ans[i] = prefix; prefix *= nums[i]\n    suffix = 1\n    for i in range(n - 1, -1, -1):\n        ans[i] *= suffix; suffix *= nums[i]\n    return ans",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1) auxiliary",
    "whyBetterThanBruteForce": "Computing product of all other elements for each index with a loop takes O(N^2). Using division total_prod / nums[i] fails when zeros are present and violates the problem constraint. Accumulating prefix products in the output array in pass 1 and multiplying by a running suffix product in pass 2 solves the problem in O(N) time and O(1) auxiliary memory.",
    "edgeCasesAndBreakPoints": [
      "Array with exactly one zero: only the zero index receives the product of all other non-zero values; all other indices receive 0.",
      "Array with two or more zeros: all indices receive 0.",
      "Negative elements: sign alternates naturally with multiplication.",
      "Two elements [a, b]: outputs [b, a] cleanly."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [1, 2, 3, 4]",
      "array": [
        1,
        2,
        3,
        4
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "pass": "Prefix sweep",
            "ans": "[1, 1, 2, 6]"
          },
          "msg": "Prefix sweep: ans[i] stores product of elements strictly before index i: [1, 1, 2, 6]."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "i": 3,
            "suffix": 1,
            "ans[3]": "6 * 1 = 6"
          },
          "msg": "Suffix sweep at index 3: ans[3] = 6 * 1 = 6. suffix = 1 * 4 = 4."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "i": 2,
            "suffix": 4,
            "ans[2]": "2 * 4 = 8"
          },
          "msg": "Suffix sweep at index 2: ans[2] = 2 * 4 = 8. suffix = 4 * 3 = 12."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "suffix": 12,
            "ans[1]": "1 * 12 = 12"
          },
          "msg": "Suffix sweep at index 1: ans[1] = 1 * 12 = 12. suffix = 12 * 2 = 24."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "suffix": 24,
            "ans[0]": "1 * 24 = 24"
          },
          "msg": "Suffix sweep at index 0: ans[0] = 24. Result: [24, 12, 8, 6]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Maximum Sum of 3 Non-Overlapping Subarrays",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
    "pattern": "Prefix Sum",
    "short": "Prefix Sum",
    "intro": "Transform repeated range/subarray calculations into reusable cumulative state.",
    "thinking": "What repeated calculation can become a difference or lookup of cumulative state?",
    "steps": [
      "Restate **Maximum Sum of 3 Non-Overlapping Subarrays** as a state/decision problem before writing code.",
      "Use the core Prefix Sum invariant: what repeated calculation can become a difference or lookup of cumulative state?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Raw data",
      "Cumulative state",
      "Range difference / lookup",
      "Answer"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, find three non-overlapping subarrays of length <code>k</code> with maximum sum and return them.</p>\n\n<p>Return the result as a list of indices representing the starting position of each interval (<strong>0-indexed</strong>). If there are multiple answers, return the lexicographically smallest one.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,1,2,6,7,5,1], k = 2\n<strong>Output:</strong> [0,3,5]\n<strong>Explanation:</strong> Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].\nWe could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,1,2,1,2,1,2,1], k = 2\n<strong>Output:</strong> [0,2,4]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= nums[i] &lt;&nbsp;2<sup>16</sup></code></li>\n\t<li><code>1 &lt;= k &lt;= floor(nums.length / 3)</code></li>\n</ul>\n",
    "pythonCode": "def maxSumOfThreeSubarrays(nums: list[int], k: int) -> list[int]:\n    w, cur = [], sum(nums[:k])\n    w.append(cur)\n    for i in range(k, len(nums)):\n        cur += nums[i] - nums[i - k]\n        w.append(cur)\n    n = len(w)\n    left, right = [0] * n, [n - 1] * n\n    best = 0\n    for i in range(1, n):\n        if w[i] > w[best]: best = i\n        left[i] = best\n    best = n - 1\n    for i in range(n - 2, -1, -1):\n        if w[i] >= w[best]: best = i\n        right[i] = best\n    ans, max_sum = [], 0\n    for j in range(k, n - k):\n        i, l = left[j - k], right[j + k]\n        total = w[i] + w[j] + w[l]\n        if total > max_sum: max_sum, ans = total, [i, j, l]\n    return ans",
    "codeLines": 22,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force tries all triplets of start indices (i, j, l) with j >= i + k and l >= j + k, requiring O(N^3) time. By precomputing window sums W in O(N) and caching the optimal left window for each point and optimal right window for each point, we fix the middle window j and query the best left and right in O(1), achieving O(N) time overall.",
    "edgeCasesAndBreakPoints": [
      "Multiple triplets achieving the same maximum sum: lexicographically smallest required, achieved by strict > for left and >= for right.",
      "Array length exactly equal to 3 * k: exactly one valid triplet [0, k, 2*k].",
      "Large numbers with sums exceeding 32-bit limits: Python handles arbitrarily large integers automatically.",
      "Uniform array elements: returns [0, k, 2*k] matching lexicographical tiebreaker rules."
    ],
    "simConfig": {
      "type": "intervals",
      "inputDisplay": "nums = [1, 2, 1, 2, 6, 7, 5, 1], k = 2",
      "array": [
        1,
        2,
        1,
        2,
        6,
        7,
        5,
        1
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "windowSums": "[3, 3, 3, 8, 13, 12, 6]",
            "k": 2
          },
          "msg": "Precompute 2-element window sums: W=[3, 3, 3, 8, 13, 12, 6]."
        },
        {
          "active": [
            0,
            1,
            2,
            3,
            4
          ],
          "vars": {
            "leftBest": "[0, 0, 0, 3, 4, 4, 4]"
          },
          "msg": "Compute prefix best left window indices: W[3]=8, W[4]=13."
        },
        {
          "active": [
            4,
            5,
            6
          ],
          "vars": {
            "rightBest": "[4, 4, 4, 4, 4, 5, 6]"
          },
          "msg": "Compute suffix best right window indices: W[5]=12, W[6]=6."
        },
        {
          "active": [
            0,
            1,
            3,
            4,
            5,
            6
          ],
          "vars": {
            "fixed_mid": "j=3 (idx 3..4)",
            "left": "idx 0..1",
            "right": "idx 5..6",
            "sum": "3 + 8 + 12 = 23"
          },
          "msg": "Test middle j=3: left best is index 0 (sum 3), right best is index 5 (sum 12). Total sum = 23."
        },
        {
          "active": [
            0,
            1,
            3,
            4,
            5,
            6
          ],
          "vars": {
            "result": "[0, 3, 5]",
            "maxSum": 23
          },
          "msg": "Maximum sum 23 achieved at starting indices [0, 3, 5]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Two Sum",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/two-sum/",
    "pattern": "HashMap",
    "short": "HashMap",
    "intro": "Remember the smallest useful state so future elements can perform fast lookups.",
    "thinking": "What should the key represent, and what minimum value/state must I remember?",
    "steps": [
      "Restate **Two Sum** as a state/decision problem before writing code.",
      "Use the core HashMap invariant: what should the key represent, and what minimum value/state must i remember?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Current item",
      "Derive key/need",
      "Lookup",
      "Use/update",
      "Continue"
    ],
    "description": "<p>You are given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>\n\n<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>\n\n<p>You can return the answer in any order.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,7,11,15], target = 9\n<strong>Output:</strong> [0,1]\n<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,4], target = 6\n<strong>Output:</strong> [1,2]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,3], target = 6\n<strong>Output:</strong> [0,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>\n\t<li><strong>Only one valid answer exists.</strong></li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face=\"monospace\">&nbsp;</font>time complexity?",
    "pythonCode": "def twoSum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, x in enumerate(nums):\n        if target - x in seen:\n            return [seen[target - x], i]\n        seen[x] = i",
    "codeLines": 6,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force checks every pair (i, j) in O(N^2) time. By using a hashmap to store previously visited values and their indices, we can check whether the complementary value target - x has already been seen in O(1) amortized time, solving the problem in a single O(N) pass.",
    "edgeCasesAndBreakPoints": [
      "Exactly one solution guaranteed: loop terminates as soon as target - x is found.",
      "Pair made of identical numbers (e.g. nums=[3, 3], target=6): second 3 finds first 3 in seen before overwriting.",
      "Negative numbers: target - x subtraction works seamlessly.",
      "Large arrays: O(1) hashmap lookups ensure sub-millisecond execution."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [2, 7, 11, 15], target = 9",
      "array": [
        2,
        7,
        11,
        15
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "x": 2,
            "need": "9 - 2 = 7",
            "seen": "{2: 0}"
          },
          "msg": "i=0 (x=2): target - x = 7 not in seen. Store seen[2] = 0."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "x": 7,
            "need": "9 - 7 = 2",
            "found": "seen[2] = 0"
          },
          "msg": "i=1 (x=7): target - x = 2 is in seen at index 0! Return [0, 1]."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "result": "[0, 1]"
          },
          "msg": "Solution indices found: [0, 1]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Group Anagrams",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/group-anagrams/",
    "pattern": "HashMap",
    "short": "HashMap",
    "intro": "Remember the smallest useful state so future elements can perform fast lookups.",
    "thinking": "What should the key represent, and what minimum value/state must I remember?",
    "steps": [
      "Restate **Group Anagrams** as a state/decision problem before writing code.",
      "Use the core HashMap invariant: what should the key represent, and what minimum value/state must i remember?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Current item",
      "Derive key/need",
      "Lookup",
      "Use/update",
      "Continue"
    ],
    "description": "<p>Given an array of strings <code>strs</code>, group the <span data-keyword=\"anagram\">anagrams</span> together. You can return the answer in <strong>any order</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">strs = [&quot;eat&quot;,&quot;tea&quot;,&quot;tan&quot;,&quot;ate&quot;,&quot;nat&quot;,&quot;bat&quot;]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[[&quot;bat&quot;],[&quot;nat&quot;,&quot;tan&quot;],[&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;]]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<ul>\n\t<li>There is no string in strs that can be rearranged to form <code>&quot;bat&quot;</code>.</li>\n\t<li>The strings <code>&quot;nat&quot;</code> and <code>&quot;tan&quot;</code> are anagrams as they can be rearranged to form each other.</li>\n\t<li>The strings <code>&quot;ate&quot;</code>, <code>&quot;eat&quot;</code>, and <code>&quot;tea&quot;</code> are anagrams as they can be rearranged to form each other.</li>\n</ul>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">strs = [&quot;&quot;]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[[&quot;&quot;]]</span></p>\n</div>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">strs = [&quot;a&quot;]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[[&quot;a&quot;]]</span></p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= strs.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= strs[i].length &lt;= 100</code></li>\n\t<li><code>strs[i]</code> consists of lowercase English letters.</li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict\n\ndef groupAnagrams(strs: list[str]) -> list[list[str]]:\n    mp = defaultdict(list)\n    for s in strs:\n        mp[tuple(sorted(s))].append(s)\n    return list(mp.values())",
    "codeLines": 7,
    "timeComplexity": "O(N * K log K)",
    "spaceComplexity": "O(N * K)",
    "whyBetterThanBruteForce": "Comparing every pair of words to test if they are anagrams takes O(N^2 * K) time. By sorting each word's characters into a canonical tuple key, anagrams produce identical keys and group together in a hashmap in O(N * K log K) time.",
    "edgeCasesAndBreakPoints": [
      "Empty string strs = ['']: grouped into [['']].",
      "Single string strs = ['a']: grouped into [['a']].",
      "All strings anagrams of each other: grouped into one single bucket.",
      "No anagrams: each word forms its own individual group."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']",
      "array": [
        "eat",
        "tea",
        "tan",
        "ate",
        "nat",
        "bat"
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            3
          ],
          "vars": {
            "key": "('a','e','t')",
            "group": "['eat', 'tea', 'ate']"
          },
          "msg": "Sorted key ('a','e','t') groups 'eat', 'tea', and 'ate'."
        },
        {
          "active": [
            2,
            4
          ],
          "vars": {
            "key": "('a','n','t')",
            "group": "['tan', 'nat']"
          },
          "msg": "Sorted key ('a','n','t') groups 'tan' and 'nat'."
        },
        {
          "active": [
            5
          ],
          "vars": {
            "key": "('a','b','t')",
            "group": "['bat']"
          },
          "msg": "Sorted key ('a','b','t') groups 'bat'."
        },
        {
          "active": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "vars": {
            "output": "[['eat','tea','ate'], ['tan','nat'], ['bat']]"
          },
          "msg": "All anagram groups assembled. Complete!"
        }
      ]
    }
  },
  {
    "title": "Longest Consecutive Sequence",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "pattern": "HashMap",
    "short": "HashMap",
    "intro": "Remember the smallest useful state so future elements can perform fast lookups.",
    "thinking": "What should the key represent, and what minimum value/state must I remember?",
    "steps": [
      "Restate **Longest Consecutive Sequence** as a state/decision problem before writing code.",
      "Use the core HashMap invariant: what should the key represent, and what minimum value/state must i remember?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Current item",
      "Derive key/need",
      "Lookup",
      "Use/update",
      "Continue"
    ],
    "description": "<p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence.</em></p>\n\n<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [100,4,200,1,3,2]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> The longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Therefore its length is 4.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,3,7,2,5,8,4,6,0,1]\n<strong>Output:</strong> 9\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,0,1,2]\n<strong>Output:</strong> 3\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n</ul>\n",
    "pythonCode": "def longestConsecutive(nums: list[int]) -> int:\n    num_set = set(nums)\n    ans = 0\n    for x in num_set:\n        if x - 1 not in num_set:\n            y = x + 1\n            while y in num_set: y += 1\n            ans = max(ans, y - x)\n    return ans",
    "codeLines": 9,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Sorting the array takes O(N log N) time. By converting nums into a hash set, we can identify streak starters in O(1): a number x is the start of a consecutive streak if and only if x - 1 is NOT in the set. Only streak starters initiate a while loop, ensuring each element is visited at most twice for a true O(N) linear time solution.",
    "edgeCasesAndBreakPoints": [
      "Empty array: returns 0 immediately.",
      "Array with duplicates: set eliminates duplicates automatically without breaking streak length.",
      "Negative numbers: x - 1 and x + 1 arithmetic handles negative values seamlessly.",
      "All elements consecutive: single loop runs in N steps, returns N."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [100, 4, 200, 1, 3, 2]",
      "array": [
        100,
        4,
        200,
        1,
        3,
        2
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "x": 100,
            "100-1 in set": false,
            "streak": "[100] (len 1)"
          },
          "msg": "x=100: 99 not in set. Start streak -> length 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "x": 200,
            "200-1 in set": false,
            "streak": "[200] (len 1)"
          },
          "msg": "x=200: 199 not in set. Start streak -> length 1."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "x": 1,
            "1-1 in set": false,
            "streak": "[1, 2, 3, 4] (len 4)"
          },
          "msg": "x=1: 0 not in set. Expand: 2, 3, 4 are in set! Streak length = 4."
        },
        {
          "active": [
            1,
            4,
            5
          ],
          "vars": {
            "x": "2, 3, 4",
            "isStarter": false
          },
          "msg": "Numbers 2, 3, 4 have predecessors in set, so their loops are skipped."
        },
        {
          "active": [
            3,
            5,
            4,
            1
          ],
          "vars": {
            "longestConsecutive": 4
          },
          "msg": "Longest consecutive sequence length = 4 ([1, 2, 3, 4]). Complete!"
        }
      ]
    }
  },
  {
    "title": "Substring with Concatenation of All Words",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    "pattern": "HashMap",
    "short": "HashMap",
    "intro": "Remember the smallest useful state so future elements can perform fast lookups.",
    "thinking": "What should the key represent, and what minimum value/state must I remember?",
    "steps": [
      "Restate **Substring with Concatenation of All Words** as a state/decision problem before writing code.",
      "Use the core HashMap invariant: what should the key represent, and what minimum value/state must i remember?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Current item",
      "Derive key/need",
      "Lookup",
      "Use/update",
      "Continue"
    ],
    "description": "<p>You are given a string <code>s</code> and an array of strings <code>words</code>. All the strings of <code>words</code> are of <strong>the same length</strong>.</p>\n\n<p>A <strong>concatenated string</strong> is a string that exactly contains all the strings of any permutation of <code>words</code> concatenated.</p>\n\n<ul>\n\t<li>For example, if <code>words = [&quot;ab&quot;,&quot;cd&quot;,&quot;ef&quot;]</code>, then <code>&quot;abcdef&quot;</code>, <code>&quot;abefcd&quot;</code>, <code>&quot;cdabef&quot;</code>, <code>&quot;cdefab&quot;</code>, <code>&quot;efabcd&quot;</code>, and <code>&quot;efcdab&quot;</code> are all concatenated strings. <code>&quot;acdbef&quot;</code> is not a concatenated string because it is not the concatenation of any permutation of <code>words</code>.</li>\n</ul>\n\n<p>Return an array of <em>the starting indices</em> of all the concatenated substrings in <code>s</code>. You can return the answer in <strong>any order</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">s = &quot;barfoothefoobarman&quot;, words = [&quot;foo&quot;,&quot;bar&quot;]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[0,9]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p>The substring starting at 0 is <code>&quot;barfoo&quot;</code>. It is the concatenation of <code>[&quot;bar&quot;,&quot;foo&quot;]</code> which is a permutation of <code>words</code>.<br />\nThe substring starting at 9 is <code>&quot;foobar&quot;</code>. It is the concatenation of <code>[&quot;foo&quot;,&quot;bar&quot;]</code> which is a permutation of <code>words</code>.</p>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">s = &quot;wordgoodgoodgoodbestword&quot;, words = [&quot;word&quot;,&quot;good&quot;,&quot;best&quot;,&quot;word&quot;]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p>There is no concatenated substring.</p>\n</div>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">s = &quot;barfoofoobarthefoobarman&quot;, words = [&quot;bar&quot;,&quot;foo&quot;,&quot;the&quot;]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[6,9,12]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p>The substring starting at 6 is <code>&quot;foobarthe&quot;</code>. It is the concatenation of <code>[&quot;foo&quot;,&quot;bar&quot;,&quot;the&quot;]</code>.<br />\nThe substring starting at 9 is <code>&quot;barthefoo&quot;</code>. It is the concatenation of <code>[&quot;bar&quot;,&quot;the&quot;,&quot;foo&quot;]</code>.<br />\nThe substring starting at 12 is <code>&quot;thefoobar&quot;</code>. It is the concatenation of <code>[&quot;the&quot;,&quot;foo&quot;,&quot;bar&quot;]</code>.</p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= words.length &lt;= 5000</code></li>\n\t<li><code>1 &lt;= words[i].length &lt;= 30</code></li>\n\t<li><code>s</code> and <code>words[i]</code> consist of lowercase English letters.</li>\n</ul>\n",
    "pythonCode": "from collections import Counter\n\ndef findSubstring(s: str, words: list[str]) -> list[int]:\n    if not s or not words: return []\n    w_len, count, total = len(words[0]), len(words), len(words[0]) * len(words)\n    word_cnt, ans = Counter(words), []\n    for i in range(w_len):\n        l, seen = i, Counter()\n        for r in range(i, len(s) - w_len + 1, w_len):\n            w = s[r:r + w_len]\n            if w in word_cnt:\n                seen[w] += 1\n                while seen[w] > word_cnt[w]:\n                    seen[s[l:l + w_len]] -= 1\n                    l += w_len\n                if r + w_len - l == total: ans.append(l)\n            else:\n                seen.clear(); l = r + w_len\n    return ans",
    "codeLines": 19,
    "timeComplexity": "O(N * w_len)",
    "spaceComplexity": "O(M * w_len)",
    "whyBetterThanBruteForce": "Brute force checks every substring of length total in O(N * total) time by re-tokenizing and sorting/hashing. Since all words have uniform length L, we partition the string into L offset lanes and run an independent sliding window on word tokens. In each lane, every word is pushed and popped at most once, reducing runtime to O(N * L).",
    "edgeCasesAndBreakPoints": [
      "len(s) < total concatenated length: returns [] immediately.",
      "Words list contains duplicate words: Counter tracks exact frequency count requirements.",
      "Unrecognized word encountered: clears seen map and resets window left pointer immediately.",
      "Multiple matching concatenated windows overlapping: smoothly advances left by w_len."
    ],
    "simConfig": {
      "type": "sliding_window",
      "inputDisplay": "s = 'barfoothefoobarman', words = ['foo','bar']",
      "array": [
        "bar",
        "foo",
        "the",
        "foo",
        "bar",
        "man"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "lane": 0,
            "window": "['bar', 'foo']",
            "match": "2/2",
            "start": 0
          },
          "msg": "Lane 0: 'bar' + 'foo' match all words! Record start index 0."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "lane": 0,
            "token": "'the'",
            "match": "reset"
          },
          "msg": "'the' is not in words list. Reset sliding window to index 9."
        },
        {
          "active": [
            3,
            4
          ],
          "vars": {
            "lane": 0,
            "window": "['foo', 'bar']",
            "match": "2/2",
            "start": 9
          },
          "msg": "'foo' + 'bar' match all words! Record start index 9."
        },
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "results": "[0, 9]"
          },
          "msg": "Search completed across all offset lanes. Output: [0, 9]."
        }
      ]
    }
  },
  {
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/valid-parentheses/",
    "pattern": "Stack",
    "short": "Stack",
    "intro": "Keep unresolved items in LIFO order; monotonic stacks efficiently resolve next-greater/smaller relationships.",
    "thinking": "Which previous elements are unresolved, and what future event resolves them?",
    "steps": [
      "Restate **Valid Parentheses** as a state/decision problem before writing code.",
      "Use the core Stack invariant: which previous elements are unresolved, and what future event resolves them?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidate",
      "Push",
      "New item",
      "Resolve top while valid",
      "Push current"
    ],
    "description": "<p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p>\n\n<p>An input string is valid if:</p>\n\n<ol>\n\t<li>Open brackets must be closed by the same type of brackets.</li>\n\t<li>Open brackets must be closed in the correct order.</li>\n\t<li>Every close bracket has a corresponding open bracket of the same type.</li>\n</ol>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">s = &quot;()&quot;</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">true</span></p>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">s = &quot;()[]{}&quot;</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">true</span></p>\n</div>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">s = &quot;(]&quot;</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">false</span></p>\n</div>\n\n<p><strong class=\"example\">Example 4:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">s = &quot;([])&quot;</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">true</span></p>\n</div>\n\n<p><strong class=\"example\">Example 5:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">s = &quot;([)]&quot;</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">false</span></p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li>\n</ul>\n",
    "pythonCode": "def isValid(s: str) -> bool:\n    stack, mp = [], {')': '(', '}': '{', ']': '['}\n    for c in s:\n        if c in mp:\n            if not stack or stack.pop() != mp[c]: return False\n        else:\n            stack.append(c)\n    return not stack",
    "codeLines": 8,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Repeatedly replacing '()', '{}', '[]' with '' using string substitution takes O(N^2) time. A LIFO stack pushes opening brackets and pops the matching opening bracket when a closing bracket appears in O(1) per character, achieving O(N) linear time.",
    "edgeCasesAndBreakPoints": [
      "Odd length string: can never be fully paired; caught by stack non-empty at end.",
      "Closing bracket appears first: stack is empty, returns False immediately.",
      "Mismatched bracket types (e.g. '(]'): stack.pop() != mp[c] returns False.",
      "All open brackets remaining (e.g. '((('): return not stack returns False."
    ],
    "simConfig": {
      "type": "stack",
      "inputDisplay": "s = '()[]{}'",
      "array": [
        "(",
        ")",
        "[",
        "]",
        "{",
        "}"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "c": "'('",
            "stack": "['(']"
          },
          "msg": "Push '(' onto stack."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "c": "')'",
            "pop": "'('",
            "stack": "[]"
          },
          "msg": "Match ')' with popped '('. Stack empty."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "c": "'['",
            "stack": "['[']"
          },
          "msg": "Push '[' onto stack."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "c": "']'",
            "pop": "'['",
            "stack": "[]"
          },
          "msg": "Match ']' with popped '['. Stack empty."
        },
        {
          "active": [
            4,
            5
          ],
          "vars": {
            "c": "'{}'",
            "valid": true
          },
          "msg": "Match '{' and '}'. Stack is empty at end. String is valid!"
        }
      ]
    }
  },
  {
    "title": "Min Stack",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/min-stack/",
    "pattern": "Stack",
    "short": "Stack",
    "intro": "Keep unresolved items in LIFO order; monotonic stacks efficiently resolve next-greater/smaller relationships.",
    "thinking": "Which previous elements are unresolved, and what future event resolves them?",
    "steps": [
      "Restate **Min Stack** as a state/decision problem before writing code.",
      "Use the core Stack invariant: which previous elements are unresolved, and what future event resolves them?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidate",
      "Push",
      "New item",
      "Resolve top while valid",
      "Push current"
    ],
    "description": "<p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>\n\n<p>Implement the <code>MinStack</code> class:</p>\n\n<ul>\n\t<li><code>MinStack()</code> initializes the stack object.</li>\n\t<li><code>void push(int value)</code> pushes the element <code>value</code> onto the stack.</li>\n\t<li><code>void pop()</code> removes the element on the top of the stack.</li>\n\t<li><code>int top()</code> gets the top element of the stack.</li>\n\t<li><code>int getMin()</code> retrieves the minimum element in the stack.</li>\n</ul>\n\n<p>You must implement a solution with <code>O(1)</code> time complexity for each function.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;MinStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;getMin&quot;,&quot;pop&quot;,&quot;top&quot;,&quot;getMin&quot;]\n[[],[-2],[0],[-3],[],[],[],[]]\n\n<strong>Output</strong>\n[null,null,null,null,-3,null,0,-2]\n\n<strong>Explanation</strong>\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin(); // return -3\nminStack.pop();\nminStack.top();    // return 0\nminStack.getMin(); // return -2\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>-2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1</code></li>\n\t<li>Methods <code>pop</code>, <code>top</code> and <code>getMin</code> operations will always be called on <strong>non-empty</strong> stacks.</li>\n\t<li>At most <code>3 * 10<sup>4</sup></code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>getMin</code>.</li>\n</ul>\n",
    "pythonCode": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        cur_min = min(val, self.min_stack[-1] if self.min_stack else val)\n        self.min_stack.append(cur_min)\n    def pop(self) -> None:\n        self.stack.pop(); self.min_stack.pop()\n    def top(self) -> int:\n        return self.stack[-1]\n    def getMin(self) -> int:\n        return self.min_stack[-1]",
    "codeLines": 14,
    "timeComplexity": "O(1) for all operations",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Calling min(stack) takes O(N) time. By pairing the main stack with a parallel min_stack where min_stack[i] records the minimum value present in the stack up to depth i, getMin() returns the current minimum in strict O(1) time without search.",
    "edgeCasesAndBreakPoints": [
      "Negative numbers pushed: min() comparison handles negative values correctly.",
      "Popping the minimum element: min_stack automatically restores the previous minimum.",
      "Duplicate minimum values: both instances tracked in min_stack so popping one preserves the other.",
      "Strictly increasing pushes: min_stack retains the initial element."
    ],
    "simConfig": {
      "type": "stack",
      "inputDisplay": "push(-2), push(0), push(-3), getMin()->-3, pop(), top()->0, getMin()->-2",
      "array": [
        "stack",
        "min_stack"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "push": -2,
            "stack": "[-2]",
            "min_stack": "[-2]"
          },
          "msg": "push(-2): min is -2."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "push": 0,
            "stack": "[-2, 0]",
            "min_stack": "[-2, -2]"
          },
          "msg": "push(0): min remains -2."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "push": -3,
            "stack": "[-2, 0, -3]",
            "min_stack": "[-2, -2, -3]"
          },
          "msg": "push(-3): min becomes -3."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "op": "getMin()",
            "result": -3
          },
          "msg": "getMin(): returns min_stack top = -3 in O(1)."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "op": "pop()",
            "stack": "[-2, 0]",
            "newMin": -2
          },
          "msg": "pop(): removes -3. Minimum restored to -2 in O(1)!"
        }
      ]
    }
  },
  {
    "title": "Daily Temperatures",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/daily-temperatures/",
    "pattern": "Stack",
    "short": "Stack",
    "intro": "Keep unresolved items in LIFO order; monotonic stacks efficiently resolve next-greater/smaller relationships.",
    "thinking": "Which previous elements are unresolved, and what future event resolves them?",
    "steps": [
      "Restate **Daily Temperatures** as a state/decision problem before writing code.",
      "Use the core Stack invariant: which previous elements are unresolved, and what future event resolves them?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidate",
      "Push",
      "New item",
      "Resolve top while valid",
      "Push current"
    ],
    "description": "<p>Given an array of integers <code>temperatures</code> represents the daily temperatures, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is the number of days you have to wait after the</em> <code>i<sup>th</sup></code> <em>day to get a warmer temperature</em>. If there is no future day for which this is possible, keep <code>answer[i] == 0</code> instead.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> temperatures = [73,74,75,71,69,72,76,73]\n<strong>Output:</strong> [1,1,4,2,1,1,0,0]\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> temperatures = [30,40,50,60]\n<strong>Output:</strong> [1,1,1,0]\n</pre><p><strong class=\"example\">Example 3:</strong></p>\n<pre><strong>Input:</strong> temperatures = [30,60,90]\n<strong>Output:</strong> [1,1,0]\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;=&nbsp;temperatures.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>30 &lt;=&nbsp;temperatures[i] &lt;= 100</code></li>\n</ul>\n",
    "pythonCode": "def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    n = len(temperatures)\n    ans = [0] * n\n    stack = []\n    for i, t in enumerate(temperatures):\n        while stack and temperatures[stack[-1]] < t:\n            prev = stack.pop()\n            ans[prev] = i - prev\n        stack.append(i)\n    return ans",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Checking each day against future days takes O(N^2) time. A monotonic decreasing stack stores indices of days whose warmer day has not yet been found. When day i is warmer than stack[-1], it resolves stack[-1]'s wait time in O(1) amortized time, ensuring every element is pushed and popped at most once.",
    "edgeCasesAndBreakPoints": [
      "Strictly decreasing temperatures: no warmer days exist, all remain 0.",
      "Strictly increasing temperatures: each day resolves the previous day immediately (all 1s).",
      "Single day array: returns [0].",
      "Equal temperatures: strictly less comparison (<) avoids popping on ties."
    ],
    "simConfig": {
      "type": "stack",
      "inputDisplay": "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]",
      "array": [
        73,
        74,
        75,
        71,
        69,
        72,
        76,
        73
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "t": 73,
            "stack": "[0(73)]"
          },
          "msg": "Day 0 (73): Push index 0."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "t": 74,
            "resolves": "0(73)",
            "ans[0]": "1 - 0 = 1"
          },
          "msg": "Day 1 (74) > 73: Pop 0. Wait time for day 0 is 1. Push 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "i": 2,
            "t": 75,
            "resolves": "1(74)",
            "ans[1]": "2 - 1 = 1"
          },
          "msg": "Day 2 (75) > 74: Pop 1. Wait time for day 1 is 1. Push 2."
        },
        {
          "active": [
            3,
            4,
            5
          ],
          "vars": {
            "i": 5,
            "t": 72,
            "resolves": "4(69)",
            "ans[4]": "5 - 4 = 1"
          },
          "msg": "Day 5 (72) > 69: Pop day 4. Day 4 wait time is 1."
        },
        {
          "active": [
            6
          ],
          "vars": {
            "i": 6,
            "t": 76,
            "resolves": "5, 3, 2"
          },
          "msg": "Day 6 (76) resolves days 5, 3, and 2! Output: [1, 1, 4, 2, 1, 1, 0, 0]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "pattern": "Stack",
    "short": "Stack",
    "intro": "Keep unresolved items in LIFO order; monotonic stacks efficiently resolve next-greater/smaller relationships.",
    "thinking": "Which previous elements are unresolved, and what future event resolves them?",
    "steps": [
      "Restate **Largest Rectangle in Histogram** as a state/decision problem before writing code.",
      "Use the core Stack invariant: which previous elements are unresolved, and what future event resolves them?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidate",
      "Push",
      "New item",
      "Resolve top while valid",
      "Push current"
    ],
    "description": "<p>Given an array of integers <code>heights</code> representing the histogram&#39;s bar height where the width of each bar is <code>1</code>, return <em>the area of the largest rectangle in the histogram</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg\" style=\"width: 522px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> heights = [2,1,5,6,2,3]\n<strong>Output:</strong> 10\n<strong>Explanation:</strong> The above is a histogram where width of each bar is 1.\nThe largest rectangle is shown in the red area, which has an area = 10 units.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg\" style=\"width: 202px; height: 362px;\" />\n<pre>\n<strong>Input:</strong> heights = [2,4]\n<strong>Output:</strong> 4\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= heights.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= heights[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "def largestRectangleArea(heights: list[int]) -> int:\n    stack, ans = [-1], 0\n    heights.append(0)\n    for i, h in enumerate(heights):\n        while stack[-1] != -1 and heights[stack[-1]] >= h:\n            height = heights[stack.pop()]\n            width = i - stack[-1] - 1\n            ans = max(ans, height * width)\n        stack.append(i)\n    heights.pop()\n    return ans",
    "codeLines": 11,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force considers every pair of bars (i, j) and finds the minimum height bar between them in O(N^3) or O(N^2) time. A monotonic increasing stack stores indices of bars. When a shorter bar is encountered at index i, each taller bar popped from the stack has its right boundary defined by i and left boundary defined by the element below it in the stack. Each bar is pushed and popped exactly once, yielding an optimal O(N) linear time solution.",
    "edgeCasesAndBreakPoints": [
      "All bars have strictly increasing heights: the appended sentinel 0 forces all bars to be popped and evaluated.",
      "All bars have identical height: width spans the entire array length n correctly.",
      "Single bar array: width = 1, area = heights[0].",
      "Histogram with 0-height gaps: handles zero height without invalid area calculations."
    ],
    "simConfig": {
      "type": "stack",
      "inputDisplay": "heights = [2, 1, 5, 6, 2, 3]",
      "array": [
        2,
        1,
        5,
        6,
        2,
        3
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "h": 2,
            "stack": "[0]",
            "maxArea": 0
          },
          "msg": "i=0 (h=2): Push index 0 onto stack."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "h": 1,
            "stack": "[1]",
            "popped": 0,
            "area": "2 * 1 = 2"
          },
          "msg": "i=1 (h=1) < 2: Pop 0. Height=2, width=1-0=1. Area=2. Push 1."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "i": 3,
            "h": 6,
            "stack": "[1, 2, 3]",
            "maxArea": 2
          },
          "msg": "i=2 (h=5) and i=3 (h=6) are increasing: Push 2 and 3."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "i": 4,
            "h": 2,
            "stack": "[1, 4]",
            "popped": 3,
            "area": "6 * 1 = 6"
          },
          "msg": "i=4 (h=2) < 6: Pop 3. Height=6, width=4-2-1=1. Area=6."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "i": 4,
            "h": 2,
            "stack": "[1, 4]",
            "popped": 2,
            "area": "5 * 2 = 10"
          },
          "msg": "Still 2 < 5: Pop 2. Height=5, width=4-1-1=2. Area=10! New maxArea=10. Push 4."
        },
        {
          "active": [
            5
          ],
          "vars": {
            "i": 6,
            "sentinel": 0,
            "maxArea": 10
          },
          "msg": "End sentinel 0 flushes remaining bars. Max rectangle area = 10. Complete!"
        }
      ]
    }
  },
  {
    "title": "Number of Recent Calls",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/number-of-recent-calls/",
    "pattern": "Queue",
    "short": "Queue",
    "intro": "Process a FIFO frontier; queues become especially powerful with BFS and deques.",
    "thinking": "What is the frontier, and why must states be processed in this order?",
    "steps": [
      "Restate **Number of Recent Calls** as a state/decision problem before writing code.",
      "Use the core Queue invariant: what is the frontier, and why must states be processed in this order?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start states",
      "Queue",
      "Pop front",
      "Process",
      "Push next"
    ],
    "description": "<p>You have a <code>RecentCounter</code> class which counts the number of recent requests within a certain time frame.</p>\n\n<p>Implement the <code>RecentCounter</code> class:</p>\n\n<ul>\n\t<li><code>RecentCounter()</code> Initializes the counter with zero recent requests.</li>\n\t<li><code>int ping(int t)</code> Adds a new request at time <code>t</code>, where <code>t</code> represents some time in milliseconds, and returns the number of requests that has happened in the past <code>3000</code> milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range <code>[t - 3000, t]</code>.</li>\n</ul>\n\n<p>It is <strong>guaranteed</strong> that every call to <code>ping</code> uses a strictly larger value of <code>t</code> than the previous call.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;RecentCounter&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;]\n[[], [1], [100], [3001], [3002]]\n<strong>Output</strong>\n[null, 1, 2, 3, 3]\n\n<strong>Explanation</strong>\nRecentCounter recentCounter = new RecentCounter();\nrecentCounter.ping(1);     // requests = [<u>1</u>], range is [-2999,1], return 1\nrecentCounter.ping(100);   // requests = [<u>1</u>, <u>100</u>], range is [-2900,100], return 2\nrecentCounter.ping(3001);  // requests = [<u>1</u>, <u>100</u>, <u>3001</u>], range is [1,3001], return 3\nrecentCounter.ping(3002);  // requests = [1, <u>100</u>, <u>3001</u>, <u>3002</u>], range is [2,3002], return 3\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= t &lt;= 10<sup>9</sup></code></li>\n\t<li>Each test case will call <code>ping</code> with <strong>strictly increasing</strong> values of <code>t</code>.</li>\n\t<li>At most <code>10<sup>4</sup></code> calls will be made to <code>ping</code>.</li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\nclass RecentCounter:\n    def __init__(self):\n        self.q = deque()\n    def ping(self, t: int) -> int:\n        self.q.append(t)\n        while self.q[0] < t - 3000:\n            self.q.popleft()\n        return len(self.q)",
    "codeLines": 10,
    "timeComplexity": "O(1) amortized",
    "spaceComplexity": "O(W) where W <= 3000",
    "whyBetterThanBruteForce": "Storing all historical pings and filtering them on each ping takes O(N) per call. Because ping times t are strictly increasing, a queue preserves chronological order. At each call, timestamps older than t - 3000 are popped from the front in O(1) amortized time, keeping memory bounded by 3000.",
    "edgeCasesAndBreakPoints": [
      "First call ping(1): initializes queue, returns 1.",
      "Large gap between pings (e.g. t=1 then t=10000): pops all expired timestamps in a single loop.",
      "Calls exactly at boundary t - 3000: inclusive comparison keeps boundary timestamp in queue.",
      "Rapid consecutive pings: smoothly accumulates count."
    ],
    "simConfig": {
      "type": "deque",
      "inputDisplay": "ping(1), ping(100), ping(3001), ping(3002)",
      "array": [
        "1",
        "100",
        "3001",
        "3002"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "t": 1,
            "range": "[-2999, 1]",
            "queue": "[1]",
            "count": 1
          },
          "msg": "ping(1): queue = [1]. Count = 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "t": 100,
            "range": "[-2900, 100]",
            "queue": "[1, 100]",
            "count": 2
          },
          "msg": "ping(100): queue = [1, 100]. Count = 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "t": 3001,
            "range": "[1, 3001]",
            "queue": "[1, 100, 3001]",
            "count": 3
          },
          "msg": "ping(3001): 1 >= 3001 - 3000 = 1, so 1 is kept. Count = 3."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "t": 3002,
            "range": "[2, 3002]",
            "popped": 1,
            "queue": "[100, 3001, 3002]",
            "count": 3
          },
          "msg": "ping(3002): 1 < 2, so 1 is evicted! Queue has 3 items. Count = 3."
        }
      ]
    }
  },
  {
    "title": "Design Circular Queue",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/design-circular-queue/",
    "pattern": "Queue",
    "short": "Queue",
    "intro": "Process a FIFO frontier; queues become especially powerful with BFS and deques.",
    "thinking": "What is the frontier, and why must states be processed in this order?",
    "steps": [
      "Restate **Design Circular Queue** as a state/decision problem before writing code.",
      "Use the core Queue invariant: what is the frontier, and why must states be processed in this order?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start states",
      "Queue",
      "Pop front",
      "Process",
      "Push next"
    ],
    "description": "<p>Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called &quot;Ring Buffer&quot;.</p>\n\n<p>One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.</p>\n\n<p>Implement the <code>MyCircularQueue</code> class:</p>\n\n<ul>\n\t<li><code>MyCircularQueue(k)</code> Initializes the object with the size of the queue to be <code>k</code>.</li>\n\t<li><code>int Front()</code> Gets the front item from the queue. If the queue is empty, return <code>-1</code>.</li>\n\t<li><code>int Rear()</code> Gets the last item from the queue. If the queue is empty, return <code>-1</code>.</li>\n\t<li><code>boolean enQueue(int value)</code> Inserts an element into the circular queue. Return <code>true</code> if the operation is successful.</li>\n\t<li><code>boolean deQueue()</code> Deletes an element from the circular queue. Return <code>true</code> if the operation is successful.</li>\n\t<li><code>boolean isEmpty()</code> Checks whether the circular queue is empty or not.</li>\n\t<li><code>boolean isFull()</code> Checks whether the circular queue is full or not.</li>\n</ul>\n\n<p>You must solve the problem without using the built-in queue data structure in your programming language.&nbsp;</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;MyCircularQueue&quot;, &quot;enQueue&quot;, &quot;enQueue&quot;, &quot;enQueue&quot;, &quot;enQueue&quot;, &quot;Rear&quot;, &quot;isFull&quot;, &quot;deQueue&quot;, &quot;enQueue&quot;, &quot;Rear&quot;]\n[[3], [1], [2], [3], [4], [], [], [], [4], []]\n<strong>Output</strong>\n[null, true, true, true, false, 3, true, true, true, 4]\n\n<strong>Explanation</strong>\nMyCircularQueue myCircularQueue = new MyCircularQueue(3);\nmyCircularQueue.enQueue(1); // return True\nmyCircularQueue.enQueue(2); // return True\nmyCircularQueue.enQueue(3); // return True\nmyCircularQueue.enQueue(4); // return False\nmyCircularQueue.Rear();     // return 3\nmyCircularQueue.isFull();   // return True\nmyCircularQueue.deQueue();  // return True\nmyCircularQueue.enQueue(4); // return True\nmyCircularQueue.Rear();     // return 4\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= k &lt;= 1000</code></li>\n\t<li><code>0 &lt;= value &lt;= 1000</code></li>\n\t<li>At most <code>3000</code> calls will be made to&nbsp;<code>enQueue</code>, <code>deQueue</code>,&nbsp;<code>Front</code>,&nbsp;<code>Rear</code>,&nbsp;<code>isEmpty</code>, and&nbsp;<code>isFull</code>.</li>\n</ul>\n",
    "pythonCode": "class MyCircularQueue:\n    def __init__(self, k: int):\n        self.q = [0] * k\n        self.head = self.tail = self.size = 0\n        self.k = k\n    def enQueue(self, val: int) -> bool:\n        if self.isFull(): return False\n        self.q[self.tail] = val\n        self.tail = (self.tail + 1) % self.k\n        self.size += 1\n        return True\n    def deQueue(self) -> bool:\n        if self.isEmpty(): return False\n        self.head = (self.head + 1) % self.k\n        self.size -= 1\n        return True\n    def Front(self) -> int:\n        return -1 if self.isEmpty() else self.q[self.head]\n    def Rear(self) -> int:\n        return -1 if self.isEmpty() else self.q[(self.tail - 1) % self.k]\n    def isEmpty(self) -> bool:\n        return self.size == 0\n    def isFull(self) -> bool:\n        return self.size == self.k",
    "codeLines": 24,
    "timeComplexity": "O(1) for all operations",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Using a dynamic array and shifting elements on dequeue takes O(N) time. A circular buffer with head and tail pointers wrapping around via modulo (idx % k) allows both enQueue and deQueue to execute in strict O(1) time without shifting or memory reallocations.",
    "edgeCasesAndBreakPoints": [
      "enQueue into a full queue: returns False without overwriting head.",
      "deQueue from an empty queue: returns False.",
      "Queue of capacity 1: head and tail point to same slot; size counter disambiguates full vs empty.",
      "Wraparound at boundary (tail == k - 1): wraps smoothly to index 0."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "k = 3: enQueue(1), enQueue(2), enQueue(3), enQueue(4)->False, deQueue()->True, enQueue(4)->True",
      "array": [
        "Slot 0",
        "Slot 1",
        "Slot 2"
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "q": "[1, 2, 3]",
            "head": 0,
            "tail": 0,
            "size": 3
          },
          "msg": "enQueue 1, 2, 3: queue is full (size=3)."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "action": "enQueue(4)",
            "result": false
          },
          "msg": "enQueue(4) fails because queue is full."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "action": "deQueue()",
            "head": 1,
            "size": 2
          },
          "msg": "deQueue(): removes 1 from head. head advances to index 1. size = 2."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "action": "enQueue(4)",
            "q": "[4, 2, 3]",
            "tail": 1,
            "size": 3
          },
          "msg": "enQueue(4): wraps around and writes 4 into slot 0! queue = [4, 2, 3]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Rotting Oranges",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/rotting-oranges/",
    "pattern": "Queue",
    "short": "Queue",
    "intro": "Process a FIFO frontier; queues become especially powerful with BFS and deques.",
    "thinking": "What is the frontier, and why must states be processed in this order?",
    "steps": [
      "Restate **Rotting Oranges** as a state/decision problem before writing code.",
      "Use the core Queue invariant: what is the frontier, and why must states be processed in this order?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start states",
      "Queue",
      "Pop front",
      "Process",
      "Push next"
    ],
    "description": "<p>You are given an <code>m x n</code> <code>grid</code> where each cell can have one of three values:</p>\n\n<ul>\n\t<li><code>0</code> representing an empty cell,</li>\n\t<li><code>1</code> representing a fresh orange, or</li>\n\t<li><code>2</code> representing a rotten orange.</li>\n</ul>\n\n<p>Every minute, any fresh orange that is <strong>4-directionally adjacent</strong> to a rotten orange becomes rotten.</p>\n\n<p>Return <em>the minimum number of minutes that must elapse until no cell has a fresh orange</em>. If <em>this is impossible, return</em> <code>-1</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2019/02/16/oranges.png\" style=\"width: 650px; height: 137px;\" />\n<pre>\n<strong>Input:</strong> grid = [[2,1,1],[1,1,0],[0,1,1]]\n<strong>Output:</strong> 4\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [[2,1,1],[0,1,1],[1,0,1]]\n<strong>Output:</strong> -1\n<strong>Explanation:</strong> The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [[0,2]]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> Since there are already no fresh oranges at minute 0, the answer is just 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == grid.length</code></li>\n\t<li><code>n == grid[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 10</code></li>\n\t<li><code>grid[i][j]</code> is <code>0</code>, <code>1</code>, or <code>2</code>.</li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef orangesRotting(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    q = deque()\n    fresh = 0\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 2: q.append((r, c))\n            elif grid[r][c] == 1: fresh += 1\n    minutes = 0\n    while q and fresh:\n        minutes += 1\n        for _ in range(len(q)):\n            r, c = q.popleft()\n            for dr, dc in ((-1,0),(1,0),(0,-1),(0,1)):\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2\n                    fresh -= 1\n                    q.append((nr, nc))\n    return minutes if fresh == 0 else -1",
    "codeLines": 22,
    "timeComplexity": "O(R * C)",
    "spaceComplexity": "O(R * C)",
    "whyBetterThanBruteForce": "Simulating decay minute-by-minute by scanning the entire grid takes O(R * C * minutes), which can be O((R * C)^2). Multi-source BFS starts simultaneously from all initial rotten oranges: each cell is enqueued and visited at most once, finding the minimum elapsed minutes in optimal O(R * C) time.",
    "edgeCasesAndBreakPoints": [
      "No fresh oranges at start: returns 0 immediately.",
      "Fresh oranges trapped behind empty cells (0): fresh > 0 at end returns -1.",
      "No rotten oranges initially with fresh oranges present: returns -1.",
      "1x1 grid: correctly returns 0 for [0] or [2], and -1 for [1]."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
      "array": [
        "[2, 1, 1]",
        "[1, 1, 0]",
        "[0, 1, 1]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "minute": 0,
            "rotten": "[(0,0)]",
            "fresh": 6
          },
          "msg": "Minute 0: Rotten orange at (0,0). Fresh count = 6."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "minute": 1,
            "newRotten": "[(0,1),(1,0)]",
            "fresh": 4
          },
          "msg": "Minute 1: Rot spreads to (0,1) and (1,0). Fresh count = 4."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "minute": 2,
            "newRotten": "[(0,2),(1,1)]",
            "fresh": 2
          },
          "msg": "Minute 2: Rot spreads to (0,2) and (1,1). Fresh count = 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "minute": 4,
            "fresh": 0,
            "totalMinutes": 4
          },
          "msg": "Minutes 3 and 4: Rot spreads to (2,1) and (2,2). Fresh count = 0! Minimum minutes = 4."
        }
      ]
    }
  },
  {
    "title": "Sliding Window Maximum",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/sliding-window-maximum/",
    "pattern": "Queue",
    "short": "Queue",
    "intro": "Process a FIFO frontier; queues become especially powerful with BFS and deques.",
    "thinking": "What is the frontier, and why must states be processed in this order?",
    "steps": [
      "Restate **Sliding Window Maximum** as a state/decision problem before writing code.",
      "Use the core Queue invariant: what is the frontier, and why must states be processed in this order?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start states",
      "Queue",
      "Pop front",
      "Process",
      "Push next"
    ],
    "description": "<p>You are given an array of integers&nbsp;<code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p>\n\n<p>Return <em>the max sliding window</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3\n<strong>Output:</strong> [3,3,5,5,6,7]\n<strong>Explanation:</strong> \nWindow position                Max\n---------------               -----\n[1  3  -1] -3  5  3  6  7       <strong>3</strong>\n 1 [3  -1  -3] 5  3  6  7       <strong>3</strong>\n 1  3 [-1  -3  5] 3  6  7      <strong> 5</strong>\n 1  3  -1 [-3  5  3] 6  7       <strong>5</strong>\n 1  3  -1  -3 [5  3  6] 7       <strong>6</strong>\n 1  3  -1  -3  5 [3  6  7]      <strong>7</strong>\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1], k = 1\n<strong>Output:</strong> [1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= k &lt;= nums.length</code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    q, ans = deque(), []\n    for i, x in enumerate(nums):\n        while q and nums[q[-1]] <= x: q.pop()\n        q.append(i)\n        if q[0] <= i - k: q.popleft()\n        if i >= k - 1: ans.append(nums[q[0]])\n    return ans",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Recomputing the max of each size-k window in O(K) leads to O(N * K) brute-force time. A monotonic double-ended queue retains only indices whose values could potentially be maximal in the current or upcoming windows. Smaller predecessors are pruned in O(1) amortized time, providing O(1) query of the maximum from the front of the queue.",
    "edgeCasesAndBreakPoints": [
      "k = len(nums): queue slides exactly once; returns [max(nums)].",
      "Negative array values: monotonically decreasing property maintains the least-negative value at front.",
      "Duplicate maximum values in same window: index tracking ensures correct expiration when sliding.",
      "k = 1: each element is immediately yielded as the window max."
    ],
    "simConfig": {
      "type": "deque",
      "inputDisplay": "nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3",
      "array": [
        1,
        3,
        -1,
        -3,
        5,
        3,
        6,
        7
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "window": "0..2",
            "deque": "[1(3), 2(-1)]",
            "max": 3
          },
          "msg": "Window 0..2: 3 pops 1. Front is 3."
        },
        {
          "active": [
            1,
            2,
            3
          ],
          "vars": {
            "window": "1..3",
            "deque": "[1(3), 2(-1), 3(-3)]",
            "max": 3
          },
          "msg": "Window 1..3: Front remains 3."
        },
        {
          "active": [
            2,
            3,
            4
          ],
          "vars": {
            "window": "2..4",
            "deque": "[4(5)]",
            "max": 5
          },
          "msg": "Window 2..4: 5 pops all smaller values. Front is 5."
        },
        {
          "active": [
            3,
            4,
            5
          ],
          "vars": {
            "window": "3..5",
            "deque": "[4(5), 5(3)]",
            "max": 5
          },
          "msg": "Window 3..5: 3 appended. Front is 5."
        },
        {
          "active": [
            4,
            5,
            6
          ],
          "vars": {
            "window": "4..6",
            "deque": "[6(6)]",
            "max": 6
          },
          "msg": "Window 4..6: 6 pops 5 and 3. Front is 6."
        },
        {
          "active": [
            5,
            6,
            7
          ],
          "vars": {
            "window": "5..7",
            "deque": "[7(7)]",
            "max": 7
          },
          "msg": "Window 5..7: 7 pops 6. Front is 7. Complete!"
        }
      ]
    }
  },
  {
    "title": "Merge Sorted Array",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/merge-sorted-array/",
    "pattern": "Sorting",
    "short": "Sorting",
    "intro": "Create useful order first, then exploit neighboring relationships, greedy choices, or divide-and-conquer.",
    "thinking": "What useful structure appears after ordering the data?",
    "steps": [
      "Restate **Merge Sorted Array** as a state/decision problem before writing code.",
      "Use the core Sorting invariant: what useful structure appears after ordering the data?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Unordered data",
      "Sort",
      "Scan",
      "Exploit order",
      "Answer"
    ],
    "description": "<p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in <strong>non-decreasing order</strong>, and two integers <code>m</code> and <code>n</code>, representing the number of elements in <code>nums1</code> and <code>nums2</code> respectively.</p>\n\n<p><strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a single array sorted in <strong>non-decreasing order</strong>.</p>\n\n<p>The final sorted array should not be returned by the function, but instead be <em>stored inside the array </em><code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a length of <code>n</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\n<strong>Output:</strong> [1,2,2,3,5,6]\n<strong>Explanation:</strong> The arrays we are merging are [1,2,3] and [2,5,6].\nThe result of the merge is [<u>1</u>,<u>2</u>,2,<u>3</u>,5,6] with the underlined elements coming from nums1.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [1], m = 1, nums2 = [], n = 0\n<strong>Output:</strong> [1]\n<strong>Explanation:</strong> The arrays we are merging are [1] and [].\nThe result of the merge is [1].\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [0], m = 0, nums2 = [1], n = 1\n<strong>Output:</strong> [1]\n<strong>Explanation:</strong> The arrays we are merging are [] and [1].\nThe result of the merge is [1].\nNote that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>nums1.length == m + n</code></li>\n\t<li><code>nums2.length == n</code></li>\n\t<li><code>0 &lt;= m, n &lt;= 200</code></li>\n\t<li><code>1 &lt;= m + n &lt;= 200</code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up: </strong>Can you come up with an algorithm that runs in <code>O(m + n)</code> time?</p>\n",
    "pythonCode": "def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:\n    p1, p2, p = m - 1, n - 1, m + n - 1\n    while p2 >= 0:\n        if p1 >= 0 and nums1[p1] > nums2[p2]:\n            nums1[p] = nums1[p1]; p1 -= 1\n        else:\n            nums1[p] = nums2[p2]; p2 -= 1\n        p -= 1",
    "codeLines": 8,
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Merging from the beginning requires shifting elements rightward or creating a new copy in O(M + N) extra space. Merging backwards from the end (index m + n - 1) places the largest elements into the empty trailing space of nums1, avoiding any overwrites or shifts in strict O(1) space.",
    "edgeCasesAndBreakPoints": [
      "nums2 is empty (n = 0): while p2 >= 0 terminates immediately, nums1 untouched.",
      "nums1 initially empty (m = 0): copies all elements from nums2 directly.",
      "All elements in nums2 smaller than nums1: nums2 fills front after nums1 shifts right.",
      "Duplicate elements between arrays: >= comparison smoothly preserves stability."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3",
      "array": [
        1,
        2,
        3,
        0,
        0,
        0
      ],
      "steps": [
        {
          "active": [
            2,
            5
          ],
          "vars": {
            "p1": 2,
            "p2": 2,
            "p": 5,
            "compare": "3 vs 6"
          },
          "msg": "6 > 3: place 6 at index 5. p2->1, p->4."
        },
        {
          "active": [
            2,
            4
          ],
          "vars": {
            "p1": 2,
            "p2": 1,
            "p": 4,
            "compare": "3 vs 5"
          },
          "msg": "5 > 3: place 5 at index 4. p2->0, p->3."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "p1": 2,
            "p2": 0,
            "p": 3,
            "compare": "3 vs 2"
          },
          "msg": "3 > 2: place 3 at index 3. p1->1, p->2."
        },
        {
          "active": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "vars": {
            "result": "[1, 2, 2, 3, 5, 6]"
          },
          "msg": "Remaining elements placed. Merged nums1: [1, 2, 2, 3, 5, 6]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Sort Colors",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/sort-colors/",
    "pattern": "Sorting",
    "short": "Sorting",
    "intro": "Create useful order first, then exploit neighboring relationships, greedy choices, or divide-and-conquer.",
    "thinking": "What useful structure appears after ordering the data?",
    "steps": [
      "Restate **Sort Colors** as a state/decision problem before writing code.",
      "Use the core Sorting invariant: what useful structure appears after ordering the data?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Unordered data",
      "Sort",
      "Scan",
      "Exploit order",
      "Answer"
    ],
    "description": "<p>You are given an array <code>nums</code> with <code>n</code> objects colored red, white, or blue, sort them <strong><a href=\"https://en.wikipedia.org/wiki/In-place_algorithm\" target=\"_blank\">in-place</a> </strong>so that objects of the same color are adjacent, with the colors in the order red, white, and blue.</p>\n\n<p>We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.</p>\n\n<p>You must solve this problem without using the library&#39;s sort function.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [2,0,2,1,1,0]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[0,0,1,1,2,2]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p>The array has two 0s, two 1s, and two 2s. Sorting them in-place places all 0s first, then all 1s, then all 2s.</p>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [2,0,1]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[0,1,2]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p>The array has one each of 0, 1, and 2, arranged in-place in the order 0, 1, 2.</p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 300</code></li>\n\t<li><code>nums[i]</code> is either 0, 1, or 2.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong>&nbsp;Could you come up with a one-pass algorithm using only&nbsp;constant extra space?</p>\n",
    "pythonCode": "def sortColors(nums: list[int]) -> None:\n    l, cur, r = 0, 0, len(nums) - 1\n    while cur <= r:\n        if nums[cur] == 0:\n            nums[l], nums[cur] = nums[cur], nums[l]\n            l += 1; cur += 1\n        elif nums[cur] == 2:\n            nums[cur], nums[r] = nums[r], nums[cur]\n            r -= 1\n        else:\n            cur += 1",
    "codeLines": 11,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Counting frequencies requires two passes. The Dutch National Flag algorithm partitions 0s to the left and 2s to the right using three pointers (l, cur, r) in a single pass, achieving true one-pass O(N) time and O(1) in-place space.",
    "edgeCasesAndBreakPoints": [
      "All elements identical (e.g. all 1s or all 0s): pointers traverse without misplacements.",
      "Array already sorted [0, 1, 2]: verified in N steps without redundant swaps.",
      "nums[cur] == 2 swap: cur is NOT incremented because the swapped element from r needs inspection.",
      "Array of length 1: cur <= r loop terminates after 1 step."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [2, 0, 2, 1, 1, 0]",
      "array": [
        2,
        0,
        2,
        1,
        1,
        0
      ],
      "steps": [
        {
          "active": [
            0,
            5
          ],
          "vars": {
            "cur": 0,
            "val": 2,
            "swapWith": 5
          },
          "msg": "nums[cur]=2: swap with nums[r=5] (0). nums becomes [0, 0, 2, 1, 1, 2]. r->4."
        },
        {
          "active": [
            0,
            0
          ],
          "vars": {
            "cur": 0,
            "val": 0,
            "swapWith": 0
          },
          "msg": "nums[cur]=0: swap with nums[l=0]. l->1, cur->1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "cur": 1,
            "val": 0
          },
          "msg": "nums[cur]=0: swap with nums[l=1]. l->2, cur->2."
        },
        {
          "active": [
            2,
            4
          ],
          "vars": {
            "cur": 2,
            "val": 2,
            "swapWith": 4
          },
          "msg": "nums[cur]=2: swap with nums[r=4] (1). r->3. cur inspects swapped 1."
        },
        {
          "active": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "vars": {
            "result": "[0, 0, 1, 1, 2, 2]"
          },
          "msg": "cur > r: partition complete. Output: [0, 0, 1, 1, 2, 2]."
        }
      ]
    }
  },
  {
    "title": "Sort an Array",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/sort-an-array/",
    "pattern": "Sorting",
    "short": "Sorting",
    "intro": "Create useful order first, then exploit neighboring relationships, greedy choices, or divide-and-conquer.",
    "thinking": "What useful structure appears after ordering the data?",
    "steps": [
      "Restate **Sort an Array** as a state/decision problem before writing code.",
      "Use the core Sorting invariant: what useful structure appears after ordering the data?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Unordered data",
      "Sort",
      "Scan",
      "Exploit order",
      "Answer"
    ],
    "description": "<p>Given an array of integers <code>nums</code>, sort the array in ascending order and return it.</p>\n\n<p>You must solve the problem <strong>without using any built-in</strong> functions in <code>O(nlog(n))</code> time complexity and with the smallest space complexity possible.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [5,2,3,1]\n<strong>Output:</strong> [1,2,3,5]\n<strong>Explanation:</strong> After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [5,1,1,2,0,0]\n<strong>Output:</strong> [0,0,1,1,2,5]\n<strong>Explanation:</strong> Note that the values of nums are not necessarily unique.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>\n\t<li><code>-5 * 10<sup>4</sup> &lt;= nums[i] &lt;= 5 * 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "def sortArray(nums: list[int]) -> list[int]:\n    def merge_sort(arr):\n        if len(arr) <= 1: return arr\n        mid = len(arr) // 2\n        left, right = merge_sort(arr[:mid]), merge_sort(arr[mid:])\n        res, i, j = [], 0, 0\n        while i < len(left) and j < len(right):\n            if left[i] <= right[j]: res.append(left[i]); i += 1\n            else: res.append(right[j]); j += 1\n        return res + left[i:] + right[j:]\n    return merge_sort(nums)",
    "codeLines": 11,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Simple sorting algorithms (bubble sort, insertion sort) take O(N^2) time and TLE on arrays up to 5 * 10^4 elements. Merge sort guarantees O(N log N) time even in worst-case reversed or identical inputs, avoiding quicksort's potential O(N^2) recursion degradation.",
    "edgeCasesAndBreakPoints": [
      "Already sorted array: merge sort runs in standard O(N log N).",
      "Array with many identical numbers: <= comparison preserves stable sorting.",
      "Negative numbers: standard comparisons sort negative integers correctly.",
      "Single element array: base case returns immediately."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [5, 2, 3, 1]",
      "array": [
        5,
        2,
        3,
        1
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "split": "[5, 2] -> [2, 5]"
          },
          "msg": "Divide and sort left half: [5] and [2] merge into [2, 5]."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "split": "[3, 1] -> [1, 3]"
          },
          "msg": "Divide and sort right half: [3] and [1] merge into [1, 3]."
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "merge": "[2, 5] + [1, 3] -> [1, 2, 3, 5]"
          },
          "msg": "Merge two sorted halves: 1, then 2, then 3, then 5."
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "sorted": "[1, 2, 3, 5]"
          },
          "msg": "Array fully sorted in O(N log N). Complete!"
        }
      ]
    }
  },
  {
    "title": "Reverse Pairs",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/reverse-pairs/",
    "pattern": "Sorting",
    "short": "Sorting",
    "intro": "Create useful order first, then exploit neighboring relationships, greedy choices, or divide-and-conquer.",
    "thinking": "What useful structure appears after ordering the data?",
    "steps": [
      "Restate **Reverse Pairs** as a state/decision problem before writing code.",
      "Use the core Sorting invariant: what useful structure appears after ordering the data?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Unordered data",
      "Sort",
      "Scan",
      "Exploit order",
      "Answer"
    ],
    "description": "<p>Given an integer array <code>nums</code>, return <em>the number of <strong>reverse pairs</strong> in the array</em>.</p>\n\n<p>A <strong>reverse pair</strong> is a pair <code>(i, j)</code> where:</p>\n\n<ul>\n\t<li><code>0 &lt;= i &lt; j &lt; nums.length</code> and</li>\n\t<li><code>nums[i] &gt; 2 * nums[j]</code>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,3,2,3,1]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> The reverse pairs are:\n(1, 4) --&gt; nums[1] = 3, nums[4] = 1, 3 &gt; 2 * 1\n(3, 4) --&gt; nums[3] = 3, nums[4] = 1, 3 &gt; 2 * 1\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,4,3,5,1]\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The reverse pairs are:\n(1, 4) --&gt; nums[1] = 4, nums[4] = 1, 4 &gt; 2 * 1\n(2, 4) --&gt; nums[2] = 3, nums[4] = 1, 3 &gt; 2 * 1\n(3, 4) --&gt; nums[3] = 5, nums[4] = 1, 5 &gt; 2 * 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>\n\t<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n",
    "pythonCode": "def reversePairs(nums: list[int]) -> int:\n    def sort_and_count(l, r):\n        if l >= r: return 0\n        mid = (l + r) // 2\n        count = sort_and_count(l, mid) + sort_and_count(mid + 1, r)\n        j = mid + 1\n        for i in range(l, mid + 1):\n            while j <= r and nums[i] > 2 * nums[j]: j += 1\n            count += j - (mid + 1)\n        nums[l:r + 1] = sorted(nums[l:r + 1])\n        return count\n    return sort_and_count(0, len(nums) - 1)",
    "codeLines": 12,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force checks all pairs (i, j) with i < j in O(N^2) time. During merge sort, when combining two sorted halves, both left and right halves are already sorted. For each element in the left half, the pointer j in the right half advancing while nums[i] > 2 * nums[j] moves monotonically, counting all reverse pairs across the split in O(N) per merge level, totaling O(N log N).",
    "edgeCasesAndBreakPoints": [
      "Empty or 1-element list: returns 0 immediately.",
      "Array with 32-bit integer extremes: multiplication 2 * nums[j] handles potential 64-bit overflow automatically in Python.",
      "Strictly increasing array: no pairs satisfy nums[i] > 2 * nums[j]; returns 0.",
      "Strictly decreasing array: counts maximum reverse pairs in O(N log N)."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [1, 3, 2, 3, 1]",
      "array": [
        1,
        3,
        2,
        3,
        1
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "split": "Left [1, 3, 2], Right [3, 1]"
          },
          "msg": "Divide array into halves: [1, 3, 2] and [3, 1]."
        },
        {
          "active": [
            1,
            4
          ],
          "vars": {
            "pair": "(3, 1)",
            "3 > 2*1": true,
            "count": 1
          },
          "msg": "Left value 3 > 2 * 1 (right value). Found reverse pair (3, 1)!"
        },
        {
          "active": [
            2,
            4
          ],
          "vars": {
            "pair": "(3, 1)",
            "count": 2
          },
          "msg": "Second 3 in array also forms pair with 1. count=2."
        },
        {
          "active": [
            0,
            1,
            2,
            3,
            4
          ],
          "vars": {
            "totalReversePairs": 2
          },
          "msg": "Sorted merge completed across all levels. Total reverse pairs = 2."
        }
      ]
    }
  },
  {
    "title": "Binary Search",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/binary-search/",
    "pattern": "Binary Search",
    "short": "Binary Search",
    "intro": "The core idea is monotonic elimination: determine which half of the search space cannot contain the answer.",
    "thinking": "What is my monotonic yes/no predicate and what are its exact boundaries?",
    "steps": [
      "Restate **Binary Search** as a state/decision problem before writing code.",
      "Use the core Binary Search invariant: what is my monotonic yes/no predicate and what are its exact boundaries?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Search space",
      "mid",
      "Predicate",
      "Discard half",
      "Repeat"
    ],
    "description": "<p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p>\n\n<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 9\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> 9 exists in nums and its index is 4\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 2\n<strong>Output:</strong> -1\n<strong>Explanation:</strong> 2 does not exist in nums so return -1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt; nums[i], target &lt; 10<sup>4</sup></code></li>\n\t<li>All the integers in <code>nums</code> are <strong>unique</strong>.</li>\n\t<li><code>nums</code> is sorted in ascending order.</li>\n</ul>\n",
    "pythonCode": "def search(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target: return mid\n        elif nums[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1",
    "codeLines": 8,
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "A linear scan inspects every element in O(N) time. In a sorted array, comparing the target with the middle element halves the search space at every step, finding the target or proving absence in O(log N) comparisons.",
    "edgeCasesAndBreakPoints": [
      "Target not present: lo > hi terminates and returns -1.",
      "Target is at the very first or last index: boundary checks handle extreme positions.",
      "Single element array: loop runs once and returns 0 if match or -1 if not.",
      "Negative target values: handled smoothly by integer comparisons."
    ],
    "simConfig": {
      "type": "binary_search",
      "inputDisplay": "nums = [-1, 0, 3, 5, 9, 12], target = 9",
      "array": [
        -1,
        0,
        3,
        5,
        9,
        12
      ],
      "steps": [
        {
          "active": [
            0,
            5
          ],
          "vars": {
            "lo": 0,
            "hi": 5,
            "mid": 2,
            "nums[mid]": 3
          },
          "msg": "lo=0 (-1), hi=5 (12), mid=2 (3). 3 < 9 -> discard left half. lo = mid + 1 = 3."
        },
        {
          "active": [
            3,
            5
          ],
          "vars": {
            "lo": 3,
            "hi": 5,
            "mid": 4,
            "nums[mid]": 9
          },
          "msg": "lo=3 (5), hi=5 (12), mid=4 (9). nums[4] == 9! Target found!"
        },
        {
          "active": [
            4
          ],
          "vars": {
            "targetIndex": 4
          },
          "msg": "Found target 9 at index 4 in 2 steps. Complete!"
        }
      ]
    }
  },
  {
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "pattern": "Binary Search",
    "short": "Binary Search",
    "intro": "The core idea is monotonic elimination: determine which half of the search space cannot contain the answer.",
    "thinking": "What is my monotonic yes/no predicate and what are its exact boundaries?",
    "steps": [
      "Restate **Search in Rotated Sorted Array** as a state/decision problem before writing code.",
      "Use the core Binary Search invariant: what is my monotonic yes/no predicate and what are its exact boundaries?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Search space",
      "mid",
      "Predicate",
      "Discard half",
      "Repeat"
    ],
    "description": "<p>There is an integer array <code>nums</code> sorted in ascending order (with <strong>distinct</strong> values).</p>\n\n<p>Prior to being passed to your function, <code>nums</code> is <strong>possibly left rotated</strong> at an unknown index <code>k</code> (<code>1 &lt;= k &lt; nums.length</code>) such that the resulting array is <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code> (<strong>0-indexed</strong>). For example, <code>[0,1,2,4,5,6,7]</code> might be left rotated by&nbsp;<code>3</code>&nbsp;indices and become <code>[4,5,6,7,0,1,2]</code>.</p>\n\n<p>Given the array <code>nums</code> <strong>after</strong> the possible rotation and an integer <code>target</code>, return <em>the index of </em><code>target</code><em> if it is in </em><code>nums</code><em>, or </em><code>-1</code><em> if it is not in </em><code>nums</code>.</p>\n\n<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [4,5,6,7,0,1,2], target = 0\n<strong>Output:</strong> 4\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [4,5,6,7,0,1,2], target = 3\n<strong>Output:</strong> -1\n</pre><p><strong class=\"example\">Example 3:</strong></p>\n<pre><strong>Input:</strong> nums = [1], target = 0\n<strong>Output:</strong> -1\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 5000</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li>All values of <code>nums</code> are <strong>unique</strong>.</li>\n\t<li><code>nums</code> is an ascending array that is possibly rotated.</li>\n\t<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "def search(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target: return mid\n        if nums[lo] <= nums[mid]:\n            if nums[lo] <= target < nums[mid]: hi = mid - 1\n            else: lo = mid + 1\n        else:\n            if nums[mid] < target <= nums[hi]: lo = mid + 1\n            else: hi = mid - 1\n    return -1",
    "codeLines": 12,
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Linear scan requires O(N) time. Even though the array is rotated, at least one half (left or right of mid) is always strictly sorted. We can determine in O(1) if target lies within the sorted half; if so, search there, otherwise search the other half, preserving O(log N) binary search speed.",
    "edgeCasesAndBreakPoints": [
      "Array not rotated at all: nums[lo] <= nums[mid] holds for the entire search.",
      "Target not in array: lo > hi terminates with -1.",
      "Array of length 1 or 2: <= comparisons handle small arrays without boundary errors.",
      "Pivot at mid: correctly branches to the active sorted half."
    ],
    "simConfig": {
      "type": "binary_search",
      "inputDisplay": "nums = [4, 5, 6, 7, 0, 1, 2], target = 0",
      "array": [
        4,
        5,
        6,
        7,
        0,
        1,
        2
      ],
      "steps": [
        {
          "active": [
            0,
            6
          ],
          "vars": {
            "lo": 0,
            "hi": 6,
            "mid": 3,
            "val": 7
          },
          "msg": "mid=3 (7). Left half [4..7] is sorted, but target 0 is not in [4, 7]. Search right: lo = 4."
        },
        {
          "active": [
            4,
            6
          ],
          "vars": {
            "lo": 4,
            "hi": 6,
            "mid": 5,
            "val": 1
          },
          "msg": "mid=5 (1). Right half [1..2] is sorted, and 0 < 1. Search left: hi = 4."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "lo": 4,
            "hi": 4,
            "mid": 4,
            "val": 0
          },
          "msg": "mid=4 (0) == target! Found target 0 at index 4. Complete!"
        }
      ]
    }
  },
  {
    "title": "Koko Eating Bananas",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/koko-eating-bananas/",
    "pattern": "Binary Search",
    "short": "Binary Search",
    "intro": "The core idea is monotonic elimination: determine which half of the search space cannot contain the answer.",
    "thinking": "What is my monotonic yes/no predicate and what are its exact boundaries?",
    "steps": [
      "Restate **Koko Eating Bananas** as a state/decision problem before writing code.",
      "Use the core Binary Search invariant: what is my monotonic yes/no predicate and what are its exact boundaries?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Search space",
      "mid",
      "Predicate",
      "Discard half",
      "Repeat"
    ],
    "description": "<p>Koko loves to eat bananas. There are <code>n</code> piles of bananas, the <code>i<sup>th</sup></code> pile has <code>piles[i]</code> bananas. The guards have gone and will come back in <code>h</code> hours.</p>\n\n<p>Koko can decide her bananas-per-hour eating speed of <code>k</code>. Each hour, she chooses some pile of bananas and eats <code>k</code> bananas from that pile. If the pile has less than <code>k</code> bananas, she eats all of them instead and will not eat any more bananas during this hour.</p>\n\n<p>Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.</p>\n\n<p>Return <em>the minimum integer</em> <code>k</code> <em>such that she can eat all the bananas within</em> <code>h</code> <em>hours</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> piles = [3,6,7,11], h = 8\n<strong>Output:</strong> 4\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> piles = [30,11,23,4,20], h = 5\n<strong>Output:</strong> 30\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> piles = [30,11,23,4,20], h = 6\n<strong>Output:</strong> 23\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= piles.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>piles.length &lt;= h &lt;= 10<sup>9</sup></code></li>\n\t<li><code>1 &lt;= piles[i] &lt;= 10<sup>9</sup></code></li>\n</ul>\n",
    "pythonCode": "from math import ceil\n\ndef minEatingSpeed(piles: list[int], h: int) -> int:\n    lo, hi = 1, max(piles)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if sum(ceil(p / mid) for p in piles) <= h:\n            hi = mid\n        else:\n            lo = mid + 1\n    return lo",
    "codeLines": 11,
    "timeComplexity": "O(N log(max(P)))",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Testing eating speeds k = 1, 2, 3... takes O(N * max(Piles)) time. Because hours required is monotonically decreasing with speed k, we can binary search the speed in range [1, max(piles)] in O(log(max(P))) iterations, checking feasibility in O(N) time.",
    "edgeCasesAndBreakPoints": [
      "h == len(piles): must eat at least max(piles) per hour; lo converges to max(piles).",
      "h >> sum(piles): speed 1 is sufficient; returns 1.",
      "Single pile: returns ceil(pile / h).",
      "Large pile numbers: math.ceil avoids floating point roundoff errors."
    ],
    "simConfig": {
      "type": "binary_search",
      "inputDisplay": "piles = [3, 6, 7, 11], h = 8",
      "array": [
        3,
        6,
        7,
        11
      ],
      "steps": [
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "lo": 1,
            "hi": 11,
            "mid": 6,
            "hours": "1+1+2+2 = 6"
          },
          "msg": "mid=6: hours = ceil(3/6)+ceil(6/6)+ceil(7/6)+ceil(11/6) = 6 <= 8. Speed 6 feasible! hi = 6."
        },
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "lo": 1,
            "hi": 6,
            "mid": 3,
            "hours": "1+2+3+4 = 10"
          },
          "msg": "mid=3: hours = 10 > 8. Too slow! lo = 4."
        },
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "lo": 4,
            "hi": 6,
            "mid": 5,
            "hours": "1+2+2+3 = 8"
          },
          "msg": "mid=5: hours = 8 <= 8. Feasible! hi = 5."
        },
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "lo": 4,
            "hi": 5,
            "mid": 4,
            "hours": "1+2+2+3 = 8"
          },
          "msg": "mid=4: hours = 8 <= 8. Feasible! hi = 4."
        },
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "minSpeed": 4
          },
          "msg": "Binary search converges to lo = 4. Minimum speed = 4 bananas/hr. Complete!"
        }
      ]
    }
  },
  {
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "pattern": "Binary Search",
    "short": "Binary Search",
    "intro": "The core idea is monotonic elimination: determine which half of the search space cannot contain the answer.",
    "thinking": "What is my monotonic yes/no predicate and what are its exact boundaries?",
    "steps": [
      "Restate **Median of Two Sorted Arrays** as a state/decision problem before writing code.",
      "Use the core Binary Search invariant: what is my monotonic yes/no predicate and what are its exact boundaries?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Search space",
      "mid",
      "Predicate",
      "Discard half",
      "Repeat"
    ],
    "description": "<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>\n\n<p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [1,3], nums2 = [2]\n<strong>Output:</strong> 2.00000\n<strong>Explanation:</strong> merged array = [1,2,3] and median is 2.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]\n<strong>Output:</strong> 2.50000\n<strong>Explanation:</strong> merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>nums1.length == m</code></li>\n\t<li><code>nums2.length == n</code></li>\n\t<li><code>0 &lt;= m &lt;= 1000</code></li>\n\t<li><code>0 &lt;= n &lt;= 1000</code></li>\n\t<li><code>1 &lt;= m + n &lt;= 2000</code></li>\n\t<li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>\n</ul>\n",
    "pythonCode": "def findMedianSortedArrays(A: list[int], B: list[int]) -> float:\n    if len(A) > len(B): A, B = B, A\n    m, n = len(A), len(B)\n    lo, hi = 0, m\n    while lo <= hi:\n        i = (lo + hi) // 2\n        j = (m + n + 1) // 2 - i\n        maxA = float(\"-inf\") if i == 0 else A[i - 1]\n        minA = float(\"inf\") if i == m else A[i]\n        maxB = float(\"-inf\") if j == 0 else B[j - 1]\n        minB = float(\"inf\") if j == n else B[j]\n        if maxA <= minB and maxB <= minA:\n            if (m + n) % 2: return float(max(maxA, maxB))\n            return (max(maxA, maxB) + min(minA, minB)) / 2.0\n        elif maxA > minB: hi = i - 1\n        else: lo = i + 1",
    "codeLines": 16,
    "timeComplexity": "O(log(min(M, N)))",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Merging the two arrays or counting elements takes O(M + N) time and O(M + N) space. By binary searching for the partition index i on the shorter array A, the partition on B is automatically determined by j = (m + n + 1) // 2 - i. Checking whether max(left) <= min(right) takes O(1) per check, achieving logarithmic O(log(min(M, N))) time and strict O(1) space.",
    "edgeCasesAndBreakPoints": [
      "One array completely empty: binary search immediately yields median from non-empty array.",
      "All elements in A smaller than all elements in B: partition lands at boundary without index errors.",
      "Total length odd vs even: correctly branches between single max and average of two medians.",
      "Arrays of lengths 1 and 1 or 1 and 2: handles minimal inputs cleanly with infinite sentinels."
    ],
    "simConfig": {
      "type": "binary_search",
      "inputDisplay": "nums1 = [1, 3], nums2 = [2]",
      "array": [
        "nums1: [1, 3]",
        "nums2: [2]"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "A": "[2]",
            "B": "[1, 3]",
            "m": 1,
            "n": 2
          },
          "msg": "Set A to shorter array [2] (m=1), B to [1, 3] (n=2). Partition sum = (1+2+1)//2 = 2."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "i": 1,
            "j": 1,
            "maxA": 2,
            "minA": "inf",
            "maxB": 1,
            "minB": 3
          },
          "msg": "Partition i=1 (left A: [2]), j=1 (left B: [1]). maxA=2 <= minB=3 and maxB=1 <= minA=inf. Partition valid!"
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "totalLen": 3,
            "median": "max(maxA, maxB) = 2.0"
          },
          "msg": "Total length is odd (3). Median is max(maxA, maxB) = max(2, 1) = 2.0. Complete!"
        }
      ]
    }
  },
  {
    "title": "Summary Ranges",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/summary-ranges/",
    "pattern": "Merge Intervals",
    "short": "Merge Intervals",
    "intro": "Sort ranges and maintain the current active/merged interval as you scan.",
    "thinking": "After sorting, when does the next range overlap the active range?",
    "steps": [
      "Restate **Summary Ranges** as a state/decision problem before writing code.",
      "Use the core Merge Intervals invariant: after sorting, when does the next range overlap the active range?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Intervals",
      "Sort",
      "Overlap?",
      "Merge / append",
      "Continue"
    ],
    "description": "<p>You are given a <strong>sorted unique</strong> integer array <code>nums</code>.</p>\n\n<p>A <strong>range</strong> <code>[a,b]</code> is the set of all integers from <code>a</code> to <code>b</code> (inclusive).</p>\n\n<p>Return <em>the <strong>smallest sorted</strong> list of ranges that <strong>cover all the numbers in the array exactly</strong></em>. That is, each element of <code>nums</code> is covered by exactly one of the ranges, and there is no integer <code>x</code> such that <code>x</code> is in one of the ranges but not in <code>nums</code>.</p>\n\n<p>Each range <code>[a,b]</code> in the list should be output as:</p>\n\n<ul>\n\t<li><code>&quot;a-&gt;b&quot;</code> if <code>a != b</code></li>\n\t<li><code>&quot;a&quot;</code> if <code>a == b</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1,2,4,5,7]\n<strong>Output:</strong> [&quot;0-&gt;2&quot;,&quot;4-&gt;5&quot;,&quot;7&quot;]\n<strong>Explanation:</strong> The ranges are:\n[0,2] --&gt; &quot;0-&gt;2&quot;\n[4,5] --&gt; &quot;4-&gt;5&quot;\n[7,7] --&gt; &quot;7&quot;\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,2,3,4,6,8,9]\n<strong>Output:</strong> [&quot;0&quot;,&quot;2-&gt;4&quot;,&quot;6&quot;,&quot;8-&gt;9&quot;]\n<strong>Explanation:</strong> The ranges are:\n[0,0] --&gt; &quot;0&quot;\n[2,4] --&gt; &quot;2-&gt;4&quot;\n[6,6] --&gt; &quot;6&quot;\n[8,9] --&gt; &quot;8-&gt;9&quot;\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= nums.length &lt;= 20</code></li>\n\t<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>\n\t<li>All the values of <code>nums</code> are <strong>unique</strong>.</li>\n\t<li><code>nums</code> is sorted in ascending order.</li>\n</ul>\n",
    "pythonCode": "def summaryRanges(nums: list[int]) -> list[str]:\n    ans, i = [], 0\n    while i < len(nums):\n        start = nums[i]\n        while i + 1 < len(nums) and nums[i + 1] == nums[i] + 1:\n            i += 1\n        ans.append(str(start) if start == nums[i] else f\"{start}->{nums[i]}\")\n        i += 1\n    return ans",
    "codeLines": 9,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1) auxiliary",
    "whyBetterThanBruteForce": "Searching range extensions repeatedly takes quadratic time. A two-pointer scan advances through contiguous increments in a single pass, formatting intervals in O(1) time per element.",
    "edgeCasesAndBreakPoints": [
      "Empty array: returns [] immediately.",
      "Single element array: returns ['x'].",
      "No consecutive numbers (e.g. [0, 2, 4]): returns individual strings ['0', '2', '4'].",
      "Consecutive run spanning entire array: returns ['start->end']."
    ],
    "simConfig": {
      "type": "intervals",
      "inputDisplay": "nums = [0, 1, 2, 4, 5, 7]",
      "array": [
        0,
        1,
        2,
        4,
        5,
        7
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "start": 0,
            "end": 2,
            "range": "'0->2'"
          },
          "msg": "Consecutive run 0, 1, 2. Add '0->2'."
        },
        {
          "active": [
            3,
            4
          ],
          "vars": {
            "start": 4,
            "end": 5,
            "range": "'4->5'"
          },
          "msg": "Consecutive run 4, 5. Add '4->5'."
        },
        {
          "active": [
            5
          ],
          "vars": {
            "start": 7,
            "end": 7,
            "range": "'7'"
          },
          "msg": "Isolated number 7. Add '7'."
        },
        {
          "active": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "vars": {
            "result": "['0->2', '4->5', '7']"
          },
          "msg": "All ranges summarized: ['0->2', '4->5', '7']. Complete!"
        }
      ]
    }
  },
  {
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/merge-intervals/",
    "pattern": "Merge Intervals",
    "short": "Merge Intervals",
    "intro": "Sort ranges and maintain the current active/merged interval as you scan.",
    "thinking": "After sorting, when does the next range overlap the active range?",
    "steps": [
      "Restate **Merge Intervals** as a state/decision problem before writing code.",
      "Use the core Merge Intervals invariant: after sorting, when does the next range overlap the active range?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Intervals",
      "Sort",
      "Overlap?",
      "Merge / append",
      "Continue"
    ],
    "description": "<p>Given an array&nbsp;of <code>intervals</code>&nbsp;where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return <em>an array of the non-overlapping intervals that cover all the intervals in the input</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,3],[2,6],[8,10],[15,18]]\n<strong>Output:</strong> [[1,6],[8,10],[15,18]]\n<strong>Explanation:</strong> Since intervals [1,3] and [2,6] overlap, merge them into [1,6].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,4],[4,5]]\n<strong>Output:</strong> [[1,5]]\n<strong>Explanation:</strong> Intervals [1,4] and [4,5] are considered overlapping.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[4,7],[1,4]]\n<strong>Output:</strong> [[1,7]]\n<strong>Explanation:</strong> Intervals [1,4] and [4,7] are considered overlapping.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>intervals[i].length == 2</code></li>\n\t<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[0])\n    merged = []\n    for x in intervals:\n        if not merged or merged[-1][1] < x[0]:\n            merged.append(x)\n        else:\n            merged[-1][1] = max(merged[-1][1], x[1])\n    return merged",
    "codeLines": 9,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Comparing every interval against all others to find overlaps takes O(N^2) time. Sorting intervals by their start coordinate ensures that any overlapping intervals are adjacent in the sequence. A single pass merges overlapping intervals in O(N) time, yielding O(N log N) overall.",
    "edgeCasesAndBreakPoints": [
      "Single interval: returns [interval].",
      "Completely disjoint intervals: no merges occur, all retained.",
      "One interval completely covers another [1, 10] and [2, 5]: max(merged[-1][1], x[1]) keeps outer end 10.",
      "Touching boundaries [1, 4] and [4, 5]: merged into [1, 5]."
    ],
    "simConfig": {
      "type": "intervals",
      "inputDisplay": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      "array": [
        "[1, 3]",
        "[2, 6]",
        "[8, 10]",
        "[15, 18]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "merged": "[[1, 3]]"
          },
          "msg": "Start with [1, 3]."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "overlap": "2 <= 3",
            "merged": "[[1, 6]]"
          },
          "msg": "Interval [2, 6] overlaps with [1, 3]! Merge: end = max(3, 6) = 6."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "overlap": "8 > 6",
            "merged": "[[1, 6], [8, 10]]"
          },
          "msg": "[8, 10] starts after 6 (disjoint). Append [8, 10]."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "overlap": "15 > 10",
            "result": "[[1, 6], [8, 10], [15, 18]]"
          },
          "msg": "[15, 18] is disjoint. Append [15, 18]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Insert Interval",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/insert-interval/",
    "pattern": "Merge Intervals",
    "short": "Merge Intervals",
    "intro": "Sort ranges and maintain the current active/merged interval as you scan.",
    "thinking": "After sorting, when does the next range overlap the active range?",
    "steps": [
      "Restate **Insert Interval** as a state/decision problem before writing code.",
      "Use the core Merge Intervals invariant: after sorting, when does the next range overlap the active range?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Intervals",
      "Sort",
      "Overlap?",
      "Merge / append",
      "Continue"
    ],
    "description": "<p>You are given an array of non-overlapping intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the <code>i<sup>th</sup></code> interval and <code>intervals</code> is sorted in ascending order by <code>start<sub>i</sub></code>. You are also given an interval <code>newInterval = [start, end]</code> that represents the start and end of another interval.</p>\n\n<p>Two intervals are considered overlapping if they share <strong>at least</strong> one point.</p>\n\n<p>Insert <code>newInterval</code> into <code>intervals</code> such that <code>intervals</code> is still sorted in ascending order by <code>start<sub>i</sub></code> and <code>intervals</code> still does not have any overlapping intervals (merge overlapping intervals if necessary).</p>\n\n<p>Return <code>intervals</code><em> after the insertion</em>.</p>\n\n<p><strong>Note</strong> that you don&#39;t need to modify <code>intervals</code> in-place. You can make a new array and return it.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,3],[6,9]], newInterval = [2,5]\n<strong>Output:</strong> [[1,5],[6,9]]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\n<strong>Output:</strong> [[1,2],[3,10],[12,16]]\n<strong>Explanation:</strong> Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>intervals[i].length == 2</code></li>\n\t<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>5</sup></code></li>\n\t<li><code>intervals</code> is sorted by <code>start<sub>i</sub></code> in <strong>ascending</strong> order.</li>\n\t<li><code>newInterval.length == 2</code></li>\n\t<li><code>0 &lt;= start &lt;= end &lt;= 10<sup>5</sup></code></li>\n</ul>\n",
    "pythonCode": "def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:\n    ans, i, n = [], 0, len(intervals)\n    while i < n and intervals[i][1] < newInterval[0]:\n        ans.append(intervals[i]); i += 1\n    while i < n and intervals[i][0] <= newInterval[1]:\n        newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]\n        i += 1\n    ans.append(newInterval)\n    ans.extend(intervals[i:])\n    return ans",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Appending the interval and re-sorting takes O(N log N) time. Because the existing intervals are already sorted, we can partition the insertion into 3 linear phases: copy intervals ending before newInterval, merge all overlapping intervals into newInterval in O(1) per overlap, and append remaining intervals, running in O(N) time.",
    "edgeCasesAndBreakPoints": [
      "Empty intervals list: returns [newInterval].",
      "newInterval inserted at very beginning: copied and all existing intervals appended.",
      "newInterval inserted at very end: existing copied, newInterval appended.",
      "newInterval completely subsumes all existing intervals: merges all into a single giant interval."
    ],
    "simConfig": {
      "type": "intervals",
      "inputDisplay": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
      "array": [
        "[1, 3]",
        "[6, 9]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "overlap": "1 <= 5 and 2 <= 3",
            "merged": "[1, 5]"
          },
          "msg": "[2, 5] overlaps with [1, 3]! Merged into [min(1,2), max(3,5)] = [1, 5]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "compare": "6 > 5",
            "disjoint": "[6, 9]"
          },
          "msg": "[6, 9] starts after 5. Append merged [1, 5], then append [6, 9]."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "result": "[[1, 5], [6, 9]]"
          },
          "msg": "Final intervals: [[1, 5], [6, 9]]. Complete!"
        }
      ]
    }
  },
  {
    "title": "The Skyline Problem",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/the-skyline-problem/",
    "pattern": "Merge Intervals",
    "short": "Merge Intervals",
    "intro": "Sort ranges and maintain the current active/merged interval as you scan.",
    "thinking": "After sorting, when does the next range overlap the active range?",
    "steps": [
      "Restate **The Skyline Problem** as a state/decision problem before writing code.",
      "Use the core Merge Intervals invariant: after sorting, when does the next range overlap the active range?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Intervals",
      "Sort",
      "Overlap?",
      "Merge / append",
      "Continue"
    ],
    "description": "<p>A city&#39;s <strong>skyline</strong> is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return <em>the <strong>skyline</strong> formed by these buildings collectively</em>.</p>\n\n<p>The geometric information of each building is given in the array <code>buildings</code> where <code>buildings[i] = [left<sub>i</sub>, right<sub>i</sub>, height<sub>i</sub>]</code>:</p>\n\n<ul>\n\t<li><code>left<sub>i</sub></code> is the x coordinate of the left edge of the <code>i<sup>th</sup></code> building.</li>\n\t<li><code>right<sub>i</sub></code> is the x coordinate of the right edge of the <code>i<sup>th</sup></code> building.</li>\n\t<li><code>height<sub>i</sub></code> is the height of the <code>i<sup>th</sup></code> building.</li>\n</ul>\n\n<p>You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height <code>0</code>.</p>\n\n<p>The <strong>skyline</strong> should be represented as a list of &quot;key points&quot; <strong>sorted by their x-coordinate</strong> in the form <code>[[x<sub>1</sub>,y<sub>1</sub>],[x<sub>2</sub>,y<sub>2</sub>],...]</code>. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate <code>0</code> and is used to mark the skyline&#39;s termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline&#39;s contour.</p>\n\n<p><b>Note:</b> There must be no consecutive horizontal lines of equal height in the output skyline. For instance, <code>[...,[2 3],[4 5],[7 5],[11 5],[12 7],...]</code> is not acceptable; the three lines of height 5 should be merged into one in the final output as such: <code>[...,[2 3],[4 5],[12 7],...]</code></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/01/merged.jpg\" style=\"width: 800px; height: 331px;\" />\n<pre>\n<strong>Input:</strong> buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]\n<strong>Output:</strong> [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]\n<strong>Explanation:</strong>\nFigure A shows the buildings of the input.\nFigure B shows the skyline formed by those buildings. The red points in figure B represent the key points in the output list.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> buildings = [[0,2,3],[2,5,3]]\n<strong>Output:</strong> [[0,3],[5,0]]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= buildings.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= left<sub>i</sub> &lt; right<sub>i</sub> &lt;= 2<sup>31</sup> - 1</code></li>\n\t<li><code>1 &lt;= height<sub>i</sub> &lt;= 2<sup>31</sup> - 1</code></li>\n\t<li><code>buildings</code> is sorted by <code>left<sub>i</sub></code> in&nbsp;non-decreasing order.</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef getSkyline(buildings: list[list[int]]) -> list[list[int]]:\n    events = []\n    for l, r, h in buildings:\n        events.append((l, -h, r))\n        events.append((r, 0, 0))\n    events.sort()\n    hp, ans = [(0, float(\"inf\"))], [[0, 0]]\n    for x, neg_h, r in events:\n        while hp[0][1] <= x: heappop(hp)\n        if neg_h: heappush(hp, (neg_h, r))\n        if ans[-1][1] != -hp[0][0]:\n            ans.append([x, -hp[0][0]])\n    return ans[1:]",
    "codeLines": 15,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force evaluates the maximum height at every discrete coordinate x, which requires O(N * X) time and huge memory. The sweep-line algorithm processes only building start and end boundary events sorted by x. A max-heap tracks currently active building heights and their right endpoints. When the maximum active height changes at event x, a critical contour point is emitted in O(log N), taking O(N log N) total.",
    "edgeCasesAndBreakPoints": [
      "Buildings sharing identical start coordinates: sorting with negative height (-h) processes taller buildings first.",
      "Adjacent buildings of identical height: ans[-1][1] != max_h check prevents redundant key points.",
      "Buildings sharing same end and start points: processed without false gap drops to 0.",
      "Single building [l, r, h]: produces [[l, h], [r, 0]]."
    ],
    "simConfig": {
      "type": "intervals",
      "inputDisplay": "buildings = [[2,9,10],[3,7,15],[5,12,12]]",
      "array": [
        "[2, 9, h=10]",
        "[3, 7, h=15]",
        "[5, 12, h=12]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "x": 2,
            "event": "Start B0 (h=10)",
            "heapMax": 10,
            "point": "[2, 10]"
          },
          "msg": "x=2: Building 0 starts. Height jumps from 0 to 10. Add [2, 10]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "x": 3,
            "event": "Start B1 (h=15)",
            "heapMax": 15,
            "point": "[3, 15]"
          },
          "msg": "x=3: Building 1 starts with height 15 > 10. Add [3, 15]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "x": 7,
            "event": "End B1 (h=15)",
            "heapMax": 12,
            "point": "[7, 12]"
          },
          "msg": "x=7: Building 1 ends. Active max falls to Building 2 (height 12). Add [7, 12]."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "x": 12,
            "event": "End B2 (h=12)",
            "heapMax": 0,
            "point": "[12, 0]"
          },
          "msg": "x=12: Last building ends. Height drops to ground 0. Add [12, 0]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Single Number",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/single-number/",
    "pattern": "Bitwise Operations",
    "short": "Bitwise Operations",
    "intro": "Represent state at the bit level using XOR, AND, OR, masks, and shifts.",
    "thinking": "Can the requirement be expressed as bit cancellation, masking, or bit-by-bit construction?",
    "steps": [
      "Restate **Single Number** as a state/decision problem before writing code.",
      "Use the core Bitwise Operations invariant: can the requirement be expressed as bit cancellation, masking, or bit-by-bit construction?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Integer state",
      "Bits",
      "AND/OR/XOR/shift",
      "Construct result"
    ],
    "description": "<p>Given a <strong>non-empty</strong>&nbsp;array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p>\n\n<p>You must&nbsp;implement a solution with a linear runtime complexity and use&nbsp;only constant&nbsp;extra space.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [2,2,1]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">1</span></p>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [4,1,2,1,2]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">4</span></p>\n</div>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [1]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">1</span></p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li>Each element in the array appears twice except for one element which appears only once.</li>\n</ul>\n",
    "pythonCode": "def singleNumber(nums: list[int]) -> int:\n    ans = 0\n    for x in nums: ans ^= x\n    return ans",
    "codeLines": 4,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "A hashmap or set takes O(N) space. Sorting takes O(N log N). Because a ^ a = 0 and a ^ 0 = a, XORing all elements together cancels out all pairs appearing twice, leaving only the unique single element in O(N) time and strict O(1) space.",
    "edgeCasesAndBreakPoints": [
      "Single element array: 0 ^ x = x, returns x immediately.",
      "Negative numbers: bitwise XOR handles negative integers naturally.",
      "Unordered array: XOR is commutative and associative, order does not matter.",
      "Large arrays: executes in a single loop in < 10ms."
    ],
    "simConfig": {
      "type": "bitwise",
      "inputDisplay": "nums = [4, 1, 2, 1, 2]",
      "array": [
        4,
        1,
        2,
        1,
        2
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "x": 4,
            "xorAccumulator": "0 ^ 4 = 4"
          },
          "msg": "ans = 0 ^ 4 = 4."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "x": 1,
            "xorAccumulator": "4 ^ 1 = 5"
          },
          "msg": "ans = 4 ^ 1 = 5."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "x": 2,
            "xorAccumulator": "5 ^ 2 = 7"
          },
          "msg": "ans = 5 ^ 2 = 7."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "x": 1,
            "xorAccumulator": "7 ^ 1 = 6 (cancels 1)"
          },
          "msg": "Duplicate 1 cancels: 7 ^ 1 = 6."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "x": 2,
            "xorAccumulator": "6 ^ 2 = 4 (cancels 2)",
            "singleNumber": 4
          },
          "msg": "Duplicate 2 cancels: 6 ^ 2 = 4. Single number is 4! Complete!"
        }
      ]
    }
  },
  {
    "title": "Counting Bits",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/counting-bits/",
    "pattern": "Bitwise Operations",
    "short": "Bitwise Operations",
    "intro": "Represent state at the bit level using XOR, AND, OR, masks, and shifts.",
    "thinking": "Can the requirement be expressed as bit cancellation, masking, or bit-by-bit construction?",
    "steps": [
      "Restate **Counting Bits** as a state/decision problem before writing code.",
      "Use the core Bitwise Operations invariant: can the requirement be expressed as bit cancellation, masking, or bit-by-bit construction?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Integer state",
      "Bits",
      "AND/OR/XOR/shift",
      "Construct result"
    ],
    "description": "<p>Given an integer <code>n</code>, return <em>an array </em><code>ans</code><em> of length </em><code>n + 1</code><em> such that for each </em><code>i</code><em> </em>(<code>0 &lt;= i &lt;= n</code>)<em>, </em><code>ans[i]</code><em> is the <strong>number of </strong></em><code>1</code><em><strong>&#39;s</strong> in the binary representation of </em><code>i</code>.</p>\nDo not solve it with built-in functions (i.e., like <code>__builtin_popcount</code> in C++).\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 2\n<strong>Output:</strong> [0,1,1]\n<strong>Explanation:</strong>\n0 --&gt; 0\n1 --&gt; 1\n2 --&gt; 10\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 5\n<strong>Output:</strong> [0,1,1,2,1,2]\n<strong>Explanation:</strong>\n0 --&gt; 0\n1 --&gt; 1\n2 --&gt; 10\n3 --&gt; 11\n4 --&gt; 100\n5 --&gt; 101\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= n &lt;= 10<sup>5</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong></p>\n\n<ul>\n\t<li>It is very easy to come up with a solution with a runtime of <code>O(n log n)</code>. Can you do it in linear time <code>O(n)</code> and possibly in a single pass?</li>\n</ul>\n",
    "pythonCode": "def countBits(n: int) -> list[int]:\n    ans = [0] * (n + 1)\n    for i in range(1, n + 1):\n        ans[i] = ans[i >> 1] + (i & 1)\n    return ans",
    "codeLines": 5,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1) auxiliary",
    "whyBetterThanBruteForce": "Calling bin(i).count('1') for each integer takes O(N log N) time. Using DP with bit manipulation: the number of set bits in i is equal to the bits in i // 2 (which is i >> 1, already computed) plus the last bit (i & 1), computing each value in O(1) for O(N) total time.",
    "edgeCasesAndBreakPoints": [
      "n = 0: returns [0].",
      "Powers of 2: ans[i >> 1] is ans[power/2] + 0 = 1.",
      "Odd numbers: adds 1 to the count of i - 1.",
      "n up to 10^5: computed in a single pass without extra allocations."
    ],
    "simConfig": {
      "type": "bitwise",
      "inputDisplay": "n = 5",
      "array": [
        "i=0 (0b0)",
        "i=1 (0b1)",
        "i=2 (0b10)",
        "i=3 (0b11)",
        "i=4 (0b100)",
        "i=5 (0b101)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "ans[0]": 0
          },
          "msg": "Base case: 0 has 0 set bits."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "ans[1]": "ans[0] + 1 = 1"
          },
          "msg": "1 has 1 bit."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "ans[2]": "ans[1] + 0 = 1"
          },
          "msg": "2 (0b10): same bits as 1 -> 1 bit."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "ans[3]": "ans[1] + 1 = 2"
          },
          "msg": "3 (0b11): bits of 1 + 1 -> 2 bits."
        },
        {
          "active": [
            4,
            5
          ],
          "vars": {
            "ans": "[0, 1, 1, 2, 1, 2]"
          },
          "msg": "Result: [0, 1, 1, 2, 1, 2]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Maximum XOR of Two Numbers in an Array",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
    "pattern": "Bitwise Operations",
    "short": "Bitwise Operations",
    "intro": "Represent state at the bit level using XOR, AND, OR, masks, and shifts.",
    "thinking": "Can the requirement be expressed as bit cancellation, masking, or bit-by-bit construction?",
    "steps": [
      "Restate **Maximum XOR of Two Numbers in an Array** as a state/decision problem before writing code.",
      "Use the core Bitwise Operations invariant: can the requirement be expressed as bit cancellation, masking, or bit-by-bit construction?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Integer state",
      "Bits",
      "AND/OR/XOR/shift",
      "Construct result"
    ],
    "description": "<p>Given an integer array <code>nums</code>, return <em>the maximum result of </em><code>nums[i] XOR nums[j]</code>, where <code>0 &lt;= i &lt;= j &lt; n</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,10,5,25,2,8]\n<strong>Output:</strong> 28\n<strong>Explanation:</strong> The maximum result is 5 XOR 25 = 28.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [14,70,53,83,49,91,36,80,92,51,66,70]\n<strong>Output:</strong> 127\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n",
    "pythonCode": "def findMaximumXOR(nums: list[int]) -> int:\n    ans = 0\n    for b in range(31, -1, -1):\n        ans <<= 1\n        cand = ans | 1\n        prefixes = {x >> b for x in nums}\n        if any(cand ^ p in prefixes for p in prefixes):\n            ans = cand\n    return ans",
    "codeLines": 9,
    "timeComplexity": "O(32 * N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Evaluating all pairs in O(N^2) takes over 10^9 operations for N = 2 * 10^5. By building the maximum XOR bit by bit from most significant bit 31 down to 0: at each bit, we test if a target candidate bit of 1 is achievable using the property (a ^ b = c <=> a ^ c = b) on the prefix set in O(N) time, reducing total runtime to O(32 * N).",
    "edgeCasesAndBreakPoints": [
      "All numbers identical: maximum XOR is 0.",
      "Two numbers: returns x ^ y directly.",
      "31-bit representation: covers all positive integers up to 2^31 - 1.",
      "High bits non-conflicting: greedily selects 1 whenever achievable."
    ],
    "simConfig": {
      "type": "bitwise",
      "inputDisplay": "nums = [3, 10, 5, 25, 2, 8]",
      "array": [
        3,
        10,
        5,
        25,
        2,
        8
      ],
      "steps": [
        {
          "active": [
            3
          ],
          "vars": {
            "x": 25,
            "binary": "011001"
          },
          "msg": "25 has bit 4 set (16) and bit 3 set (8)."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "x": 5,
            "binary": "000101"
          },
          "msg": "5 has opposite bits at key positions."
        },
        {
          "active": [
            1,
            3
          ],
          "vars": {
            "pair": "25 ^ 5 = 28",
            "binary": "011100"
          },
          "msg": "25 (11001) ^ 5 (00101) = 28 (11100). Maximum XOR achieved = 28. Complete!"
        }
      ]
    }
  },
  {
    "title": "Triples with Bitwise AND Equal To Zero",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/",
    "pattern": "Bitwise Operations",
    "short": "Bitwise Operations",
    "intro": "Represent state at the bit level using XOR, AND, OR, masks, and shifts.",
    "thinking": "Can the requirement be expressed as bit cancellation, masking, or bit-by-bit construction?",
    "steps": [
      "Restate **Triples with Bitwise AND Equal To Zero** as a state/decision problem before writing code.",
      "Use the core Bitwise Operations invariant: can the requirement be expressed as bit cancellation, masking, or bit-by-bit construction?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Integer state",
      "Bits",
      "AND/OR/XOR/shift",
      "Construct result"
    ],
    "description": "<p>Given an integer array nums, return <em>the number of <strong>AND triples</strong></em>.</p>\n\n<p>An <strong>AND triple</strong> is a triple of indices <code>(i, j, k)</code> such that:</p>\n\n<ul>\n\t<li><code>0 &lt;= i &lt; nums.length</code></li>\n\t<li><code>0 &lt;= j &lt; nums.length</code></li>\n\t<li><code>0 &lt;= k &lt; nums.length</code></li>\n\t<li><code>nums[i] &amp; nums[j] &amp; nums[k] == 0</code>, where <code>&amp;</code> represents the bitwise-AND operator.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,1,3]\n<strong>Output:</strong> 12\n<strong>Explanation:</strong> We could choose the following i, j, k triples:\n(i=0, j=0, k=1) : 2 &amp; 2 &amp; 1\n(i=0, j=1, k=0) : 2 &amp; 1 &amp; 2\n(i=0, j=1, k=1) : 2 &amp; 1 &amp; 1\n(i=0, j=1, k=2) : 2 &amp; 1 &amp; 3\n(i=0, j=2, k=1) : 2 &amp; 3 &amp; 1\n(i=1, j=0, k=0) : 1 &amp; 2 &amp; 2\n(i=1, j=0, k=1) : 1 &amp; 2 &amp; 1\n(i=1, j=0, k=2) : 1 &amp; 2 &amp; 3\n(i=1, j=1, k=0) : 1 &amp; 1 &amp; 2\n(i=1, j=2, k=0) : 1 &amp; 3 &amp; 2\n(i=2, j=0, k=1) : 3 &amp; 2 &amp; 1\n(i=2, j=1, k=0) : 3 &amp; 1 &amp; 2\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,0,0]\n<strong>Output:</strong> 27\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 1000</code></li>\n\t<li><code>0 &lt;= nums[i] &lt; 2<sup>16</sup></code></li>\n</ul>\n",
    "pythonCode": "from collections import Counter\n\ndef countTriplets(nums: list[int]) -> int:\n    cnt = Counter(x & y for x in nums for y in nums)\n    return sum(v for xy, v in cnt.items() for z in nums if xy & z == 0)",
    "codeLines": 5,
    "timeComplexity": "O(N^2 + 2^16 * N)",
    "spaceComplexity": "O(2^16)",
    "whyBetterThanBruteForce": "Brute force checks all triplets (i, j, k) in O(N^3) time. Because nums[i] < 2^16, the pairwise AND results xy = nums[i] & nums[j] are limited to at most 2^16 distinct integers. By counting the frequencies of all N^2 pairs in a frequency map cnt, we then iterate through each pair sum and each z in nums, reducing total operations from O(N^3) to O(N^2 + distinct_xy * N).",
    "edgeCasesAndBreakPoints": [
      "All elements 0: every triplet evaluates to 0 & 0 & 0 == 0; returns N^3.",
      "All elements have a common set bit (e.g. all odd): bitwise AND is never 0; returns 0.",
      "Array with single element 0: returns 1.",
      "Bit range up to 2^16 - 1: fits within 16-bit integer without overflow."
    ],
    "simConfig": {
      "type": "bitwise",
      "inputDisplay": "nums = [2, 1, 3]",
      "array": [
        2,
        1,
        3
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "pairsCount": "{2:1, 0:2, 1:1, 3:1}",
            "pairsComputed": 9
          },
          "msg": "Compute all 9 pairwise ANDs. Values: 2&1=0 (count 2), 2&2=2, 1&1=1, etc."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "xy": 0,
            "frequency": 2,
            "z": "any",
            "added": "2 * 3 = 6"
          },
          "msg": "Pairs with xy=0: 0 & z == 0 is True for all 3 values of z. Adds 2 * 3 = 6 triplets."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "xy": 2,
            "frequency": 1,
            "z": 1,
            "added": "2 & 1 == 0 -> +2"
          },
          "msg": "Pairs with xy=2: 2 & 1 == 0 is True. Adds 2 triplets."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "totalTriplets": 12
          },
          "msg": "Final tally: 12 valid triplets. Complete!"
        }
      ]
    }
  },
  {
    "title": "Last Stone Weight",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/last-stone-weight/",
    "pattern": "Heap / Priority Queue",
    "short": "Heap / Priority Queue",
    "intro": "Efficiently retrieve the best current candidate while leaving the remaining candidates unsorted.",
    "thinking": "What is the repeatedly needed best current candidate?",
    "steps": [
      "Restate **Last Stone Weight** as a state/decision problem before writing code.",
      "Use the core Heap / Priority Queue invariant: what is the repeatedly needed best current candidate?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidates",
      "Heap",
      "Pop best",
      "Process",
      "Push new"
    ],
    "description": "<p>You are given an array of integers <code>stones</code> where <code>stones[i]</code> is the weight of the <code>i<sup>th</sup></code> stone.</p>\n\n<p>We are playing a game with the stones. On each turn, we choose the <strong>heaviest two stones</strong> and smash them together. Suppose the heaviest two stones have weights <code>x</code> and <code>y</code> with <code>x &lt;= y</code>. The result of this smash is:</p>\n\n<ul>\n\t<li>If <code>x == y</code>, both stones are destroyed, and</li>\n\t<li>If <code>x != y</code>, the stone of weight <code>x</code> is destroyed, and the stone of weight <code>y</code> has new weight <code>y - x</code>.</li>\n</ul>\n\n<p>At the end of the game, there is <strong>at most one</strong> stone left.</p>\n\n<p>Return <em>the weight of the last remaining stone</em>. If there are no stones left, return <code>0</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> stones = [2,7,4,1,8,1]\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> \nWe combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,\nwe combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,\nwe combine 2 and 1 to get 1 so the array converts to [1,1,1] then,\nwe combine 1 and 1 to get 0 so the array converts to [1] then that&#39;s the value of the last stone.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> stones = [1]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= stones.length &lt;= 30</code></li>\n\t<li><code>1 &lt;= stones[i] &lt;= 1000</code></li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop, heapify\n\ndef lastStoneWeight(stones: list[int]) -> int:\n    hp = [-x for x in stones]\n    heapify(hp)\n    while len(hp) > 1:\n        y, x = -heappop(hp), -heappop(hp)\n        if y != x: heappush(hp, -(y - x))\n    return -hp[0] if hp else 0",
    "codeLines": 9,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Sorting after every stone smash takes O(N^2 log N). Using a max-heap (via negation in Python's heapq), the two heaviest stones are extracted in O(log N) and the smashed remainder is re-inserted in O(log N), taking O(N log N) total time.",
    "edgeCasesAndBreakPoints": [
      "Single stone: loop does not run, returns the stone weight.",
      "All stones smash completely: heap empties, returns 0.",
      "Equal weight stones: both destroyed without re-insertion.",
      "Unequal stones: difference y - x re-inserted."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "stones = [2, 7, 4, 1, 8, 1]",
      "array": [
        2,
        7,
        4,
        1,
        8,
        1
      ],
      "steps": [
        {
          "active": [
            1,
            4
          ],
          "vars": {
            "smash": "8 and 7",
            "remainder": "8 - 7 = 1"
          },
          "msg": "Smash two heaviest (8 and 7): remainder 1 pushed back to heap."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "smash": "4 and 2",
            "remainder": "4 - 2 = 2"
          },
          "msg": "Smash 4 and 2: remainder 2 pushed back."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "smash": "2 and 1",
            "remainder": 1
          },
          "msg": "Smash 2 and 1: remainder 1 pushed back."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "lastStone": 1
          },
          "msg": "Remaining stones smash down to last weight: 1. Complete!"
        }
      ]
    }
  },
  {
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "pattern": "Heap / Priority Queue",
    "short": "Heap / Priority Queue",
    "intro": "Efficiently retrieve the best current candidate while leaving the remaining candidates unsorted.",
    "thinking": "What is the repeatedly needed best current candidate?",
    "steps": [
      "Restate **Kth Largest Element in an Array** as a state/decision problem before writing code.",
      "Use the core Heap / Priority Queue invariant: what is the repeatedly needed best current candidate?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidates",
      "Heap",
      "Pop best",
      "Process",
      "Push new"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>largest element in the array</em>.</p>\n\n<p>Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.</p>\n\n<p>Can you solve it without sorting?</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [3,2,1,5,6,4], k = 2\n<strong>Output:</strong> 5\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [3,2,3,1,2,4,5,5,6], k = 4\n<strong>Output:</strong> 4\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef findKthLargest(nums: list[int], k: int) -> int:\n    hp = []\n    for x in nums:\n        heappush(hp, x)\n        if len(hp) > k: heappop(hp)\n    return hp[0]",
    "codeLines": 8,
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Sorting the entire array takes O(N log N). Maintaining a min-heap of size k stores only the k largest elements seen so far. The minimum among the top k is at the top of the heap, giving the Kth largest element in O(N log K) time with only O(K) space.",
    "edgeCasesAndBreakPoints": [
      "k = 1: finds the maximum element in the array.",
      "k = len(nums): returns the minimum element.",
      "Array with duplicate values: duplicate values are counted as distinct elements.",
      "Negative numbers: min-heap handles signed integers seamlessly."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "nums = [3, 2, 1, 5, 6, 4], k = 2",
      "array": [
        3,
        2,
        1,
        5,
        6,
        4
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "heap": "[2, 3]",
            "k": 2
          },
          "msg": "Push 3 and 2. Heap size = 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "val": 1,
            "heap": "[2, 3]"
          },
          "msg": "Push 1, pop 1 (smaller than min-heap top 2). Heap remains [2, 3]."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "val": 5,
            "heap": "[3, 5]"
          },
          "msg": "Push 5, pop 2. Top k largest are [3, 5]."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "val": 6,
            "heap": "[5, 6]"
          },
          "msg": "Push 6, pop 3. Top k largest are [5, 6]."
        },
        {
          "active": [
            5
          ],
          "vars": {
            "val": 4,
            "kthLargest": 5
          },
          "msg": "4 is smaller than 5. Heap top is 5. The 2nd largest element is 5. Complete!"
        }
      ]
    }
  },
  {
    "title": "Top K Frequent Elements",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/top-k-frequent-elements/",
    "pattern": "Heap / Priority Queue",
    "short": "Heap / Priority Queue",
    "intro": "Efficiently retrieve the best current candidate while leaving the remaining candidates unsorted.",
    "thinking": "What is the repeatedly needed best current candidate?",
    "steps": [
      "Restate **Top K Frequent Elements** as a state/decision problem before writing code.",
      "Use the core Heap / Priority Queue invariant: what is the repeatedly needed best current candidate?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidates",
      "Heap",
      "Pop best",
      "Process",
      "Push new"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k</code> <em>most frequent elements</em>. You may return the answer in <strong>any order</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [1,1,1,2,2,3], k = 2</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1,2]</span></p>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [1], k = 1</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1]</span></p>\n</div>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [1,2,1,2,1,2,3,1,3,2], k = 2</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1,2]</span></p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.</li>\n\t<li>It is <strong>guaranteed</strong> that the answer is <strong>unique</strong>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Your algorithm&#39;s time complexity must be better than <code>O(n log n)</code>, where n is the array&#39;s size.</p>\n",
    "pythonCode": "from collections import Counter\nfrom heapq import heappush, heappop\n\ndef topKFrequent(nums: list[int], k: int) -> list[int]:\n    cnt = Counter(nums)\n    hp = []\n    for val, freq in cnt.items():\n        heappush(hp, (freq, val))\n        if len(hp) > k: heappop(hp)\n    return [val for freq, val in hp]",
    "codeLines": 10,
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Sorting all unique elements by frequency takes O(U log U) where U is the number of unique elements. Maintaining a min-heap of size k stores only the k most frequent elements in O(U log K), beating full sort when k << U.",
    "edgeCasesAndBreakPoints": [
      "k equals number of unique elements: returns all unique numbers.",
      "Array with all identical numbers: returns [num].",
      "Multiple frequencies tied: problem guarantees answer is unique.",
      "Negative numbers: dictionary frequency counting handles signed keys."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "nums = [1, 1, 1, 2, 2, 3], k = 2",
      "array": [
        1,
        1,
        1,
        2,
        2,
        3
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "counts": "{1: 3, 2: 2, 3: 1}"
          },
          "msg": "Count frequencies: 1 appears 3 times, 2 appears 2 times, 3 appears 1 time."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "heap": "[(2, 2), (3, 1)]",
            "k": 2
          },
          "msg": "Push (3, 1) and (2, 2) into min-heap."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "push": "(1, 3)",
            "evict": "(1, 3)",
            "heap": "[(2, 2), (3, 1)]"
          },
          "msg": "Push (1, 3): frequency 1 is smallest, popped out. Retained top 2: {1, 2}."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "result": "[1, 2]"
          },
          "msg": "Top 2 most frequent elements are [1, 2]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Find Median from Data Stream",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/find-median-from-data-stream/",
    "pattern": "Heap / Priority Queue",
    "short": "Heap / Priority Queue",
    "intro": "Efficiently retrieve the best current candidate while leaving the remaining candidates unsorted.",
    "thinking": "What is the repeatedly needed best current candidate?",
    "steps": [
      "Restate **Find Median from Data Stream** as a state/decision problem before writing code.",
      "Use the core Heap / Priority Queue invariant: what is the repeatedly needed best current candidate?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidates",
      "Heap",
      "Pop best",
      "Process",
      "Push new"
    ],
    "description": "<p>The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.</p>\n\n<ul>\n\t<li>For example, for <code>arr = [2,3,4]</code>, the median is <code>3</code>.</li>\n\t<li>For example, for <code>arr = [2,3]</code>, the median is <code>(2 + 3) / 2 = 2.5</code>.</li>\n</ul>\n\n<p>Implement the MedianFinder class:</p>\n\n<ul>\n\t<li><code>MedianFinder()</code> initializes the <code>MedianFinder</code> object.</li>\n\t<li><code>void addNum(int num)</code> adds the integer <code>num</code> from the data stream to the data structure.</li>\n\t<li><code>double findMedian()</code> returns the median of all elements so far. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;MedianFinder&quot;, &quot;addNum&quot;, &quot;addNum&quot;, &quot;findMedian&quot;, &quot;addNum&quot;, &quot;findMedian&quot;]\n[[], [1], [2], [], [3], []]\n<strong>Output</strong>\n[null, null, null, 1.5, null, 2.0]\n\n<strong>Explanation</strong>\nMedianFinder medianFinder = new MedianFinder();\nmedianFinder.addNum(1);    // arr = [1]\nmedianFinder.addNum(2);    // arr = [1, 2]\nmedianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)\nmedianFinder.addNum(3);    // arr[1, 2, 3]\nmedianFinder.findMedian(); // return 2.0\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>-10<sup>5</sup> &lt;= num &lt;= 10<sup>5</sup></code></li>\n\t<li>There will be at least one element in the data structure before calling <code>findMedian</code>.</li>\n\t<li>At most <code>5 * 10<sup>4</sup></code> calls will be made to <code>addNum</code> and <code>findMedian</code>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong></p>\n\n<ul>\n\t<li>If all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>\n\t<li>If <code>99%</code> of all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = []  # max-heap (negated)\n        self.large = []  # min-heap\n    def addNum(self, num: int) -> None:\n        heappush(self.small, -num)\n        heappush(self.large, -heappop(self.small))\n        if len(self.large) > len(self.small):\n            heappush(self.small, -heappop(self.large))\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large):\n            return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0",
    "codeLines": 15,
    "timeComplexity": "addNum: O(log N), findMedian: O(1)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Sorting the stream on every insertion takes O(N log N) per query. Insertion sort takes O(N) per addition. By using two balanced heaps (a max-heap for the lower half and a min-heap for the upper half), each number is inserted in O(log N) while preserving the size invariant len(small) - len(large) in {0, 1}. The median is available at the tops in strict O(1) time.",
    "edgeCasesAndBreakPoints": [
      "Odd number of elements: median is directly -small[0].",
      "Even number of elements: median is the average of -small[0] and large[0].",
      "All duplicate elements: distributed evenly across small and large heaps without imbalance.",
      "Negative and positive stream values: handled naturally by standard float division."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "addNum(1), addNum(2), findMedian()->1.5, addNum(3), findMedian()->2",
      "array": [
        "Small (Max-Heap)",
        "Large (Min-Heap)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "add": 1,
            "small": "[1]",
            "large": "[]",
            "median": 1.0
          },
          "msg": "addNum(1): small=[1], large=[]. Median = 1.0."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "add": 2,
            "small": "[1]",
            "large": "[2]",
            "median": 1.5
          },
          "msg": "addNum(2): small=[1], large=[2]. Balanced! Median = (1 + 2) / 2 = 1.5."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "add": 3,
            "small": "[2, 1]",
            "large": "[3]",
            "median": 2.0
          },
          "msg": "addNum(3): small=[2, 1], large=[3]. Median is top of small = 2.0."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "finalMedian": 2.0
          },
          "msg": "Heap balancing guarantees O(log N) inserts and O(1) median queries."
        }
      ]
    }
  },
  {
    "title": "Kth Largest Element in a Stream",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "pattern": "Top K Elements",
    "short": "Top K Elements",
    "intro": "Keep only the K candidates that can still belong to the final answer.",
    "thinking": "Which candidates can safely be discarded while preserving the best K?",
    "steps": [
      "Restate **Kth Largest Element in a Stream** as a state/decision problem before writing code.",
      "Use the core Top K Elements invariant: which candidates can safely be discarded while preserving the best k?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "n candidates",
      "Keep K",
      "Discard weakest",
      "Return K"
    ],
    "description": "<p>You are part of a university admissions office and need to keep track of the <code>kth</code> highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.</p>\n\n<p>You are tasked to implement a class which, for a given integer&nbsp;<code>k</code>, maintains a stream of test scores and continuously returns the&nbsp;<code>k</code>th highest test score&nbsp;<strong>after</strong>&nbsp;a new score has been submitted. More specifically, we are looking for the <code>k</code>th highest score in the sorted list of all scores.</p>\n\n<p>Implement the&nbsp;<code>KthLargest</code> class:</p>\n\n<ul>\n\t<li><code>KthLargest(int k, int[] nums)</code> Initializes the object with the integer <code>k</code> and the stream of test scores&nbsp;<code>nums</code>.</li>\n\t<li><code>int add(int val)</code> Adds a new test score&nbsp;<code>val</code> to the stream and returns the element representing the <code>k<sup>th</sup></code> largest element in the pool of test scores so far.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong><br />\n<span class=\"example-io\">[&quot;KthLargest&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;]<br />\n[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[null, 4, 5, 5, 8, 8]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p>KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);<br />\nkthLargest.add(3); // return 4<br />\nkthLargest.add(5); // return 5<br />\nkthLargest.add(10); // return 5<br />\nkthLargest.add(9); // return 8<br />\nkthLargest.add(4); // return 8</p>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong><br />\n<span class=\"example-io\">[&quot;KthLargest&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;]<br />\n[[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[null, 7, 7, 7, 8]</span></p>\n\n<p><strong>Explanation:</strong></p>\nKthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);<br />\nkthLargest.add(2); // return 7<br />\nkthLargest.add(10); // return 7<br />\nkthLargest.add(9); // return 7<br />\nkthLargest.add(9); // return 8</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= k &lt;= nums.length + 1</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= val &lt;= 10<sup>4</sup></code></li>\n\t<li>At most <code>10<sup>4</sup></code> calls will be made to <code>add</code>.</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop, heapify\n\nclass KthLargest:\n    def __init__(self, k: int, nums: list[int]):\n        self.k = k\n        self.hp = nums\n        heapify(self.hp)\n        while len(self.hp) > k: heappop(self.hp)\n    def add(self, val: int) -> int:\n        heappush(self.hp, val)\n        if len(self.hp) > self.k: heappop(self.hp)\n        return self.hp[0]",
    "codeLines": 12,
    "timeComplexity": "add: O(log K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Sorting the stream on each addition takes O(N log N) per query. A min-heap constrained to capacity k retains only the k largest stream elements. Adding a number and querying the Kth largest runs in O(log K) time with O(K) space.",
    "edgeCasesAndBreakPoints": [
      "Initial nums array has fewer than k elements: heap grows until k elements are received.",
      "Adding a value smaller than current Kth largest: pushed and popped in O(log K), top unchanged.",
      "Adding a value larger than current Kth largest: becomes new member of top k, top updates.",
      "Negative stream values: handled naturally."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "k = 3, nums = [4, 5, 8, 2]: add(3)->4, add(5)->5, add(10)->5",
      "array": [
        "Heap size 3"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "init": "[4, 5, 8]",
            "kth": 4
          },
          "msg": "Initialize min-heap with top 3 values [4, 5, 8]. 3rd largest is 4."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "add": 3,
            "evict": 3,
            "kth": 4
          },
          "msg": "add(3): 3 < 4, evicted immediately. 3rd largest remains 4."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "add": 5,
            "heap": "[5, 5, 8]",
            "kth": 5
          },
          "msg": "add(5): 4 evicted, heap becomes [5, 5, 8]. 3rd largest is now 5."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "add": 10,
            "heap": "[5, 8, 10]",
            "kth": 5
          },
          "msg": "add(10): heap becomes [5, 8, 10]. 3rd largest is 5. Complete!"
        }
      ]
    }
  },
  {
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "pattern": "Top K Elements",
    "short": "Top K Elements",
    "intro": "Keep only the K candidates that can still belong to the final answer.",
    "thinking": "Which candidates can safely be discarded while preserving the best K?",
    "steps": [
      "Restate **Kth Largest Element in an Array** as a state/decision problem before writing code.",
      "Use the core Top K Elements invariant: which candidates can safely be discarded while preserving the best k?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "n candidates",
      "Keep K",
      "Discard weakest",
      "Return K"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>largest element in the array</em>.</p>\n\n<p>Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.</p>\n\n<p>Can you solve it without sorting?</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [3,2,1,5,6,4], k = 2\n<strong>Output:</strong> 5\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [3,2,3,1,2,4,5,5,6], k = 4\n<strong>Output:</strong> 4\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "from heapq import nlargest\n\ndef findKthLargest(nums: list[int], k: int) -> int:\n    return nlargest(k, nums)[-1]",
    "codeLines": 4,
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Sorting takes O(N log N). heapq.nlargest implements an optimized C-level min-heap of size k that maintains the top k elements in O(N log K) time with O(K) memory.",
    "edgeCasesAndBreakPoints": [
      "k = 1: finds maximum.",
      "Duplicates: counted as distinct ranks.",
      "All negative elements: handles signed magnitudes.",
      "Single element array: returns nums[0]."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4",
      "array": [
        3,
        2,
        3,
        1,
        2,
        4,
        5,
        5,
        6
      ],
      "steps": [
        {
          "active": [
            6,
            7,
            8
          ],
          "vars": {
            "top4": "[4, 5, 5, 6]"
          },
          "msg": "Find top k=4 largest elements: [4, 5, 5, 6]."
        },
        {
          "active": [
            5
          ],
          "vars": {
            "kthLargest": 4
          },
          "msg": "4th largest element is 4. Complete!"
        }
      ]
    }
  },
  {
    "title": "Top K Frequent Elements",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/top-k-frequent-elements/",
    "pattern": "Top K Elements",
    "short": "Top K Elements",
    "intro": "Keep only the K candidates that can still belong to the final answer.",
    "thinking": "Which candidates can safely be discarded while preserving the best K?",
    "steps": [
      "Restate **Top K Frequent Elements** as a state/decision problem before writing code.",
      "Use the core Top K Elements invariant: which candidates can safely be discarded while preserving the best k?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "n candidates",
      "Keep K",
      "Discard weakest",
      "Return K"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k</code> <em>most frequent elements</em>. You may return the answer in <strong>any order</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [1,1,1,2,2,3], k = 2</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1,2]</span></p>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [1], k = 1</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1]</span></p>\n</div>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">nums = [1,2,1,2,1,2,3,1,3,2], k = 2</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1,2]</span></p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.</li>\n\t<li>It is <strong>guaranteed</strong> that the answer is <strong>unique</strong>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Your algorithm&#39;s time complexity must be better than <code>O(n log n)</code>, where n is the array&#39;s size.</p>\n",
    "pythonCode": "from collections import Counter\n\ndef topKFrequent(nums: list[int], k: int) -> list[int]:\n    return [x[0] for x in Counter(nums).most_common(k)]",
    "codeLines": 4,
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Sorting frequency counts takes O(U log U). Counter.most_common(k) uses a bounded heap internally to retrieve the top k frequent elements in O(N + U log K) time.",
    "edgeCasesAndBreakPoints": [
      "k = len(unique): returns all unique elements.",
      "All elements have frequency 1: returns any k elements.",
      "Single unique element: returns [element].",
      "Large numbers up to 10^5: Counter handles efficiently."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "nums = [1, 1, 1, 2, 2, 3], k = 2",
      "array": [
        1,
        1,
        1,
        2,
        2,
        3
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "freq": "{1: 3, 2: 2, 3: 1}"
          },
          "msg": "Counter counts frequencies."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "mostCommon2": "[1, 2]"
          },
          "msg": "most_common(2) yields [1, 2]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Sliding Window Median",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/sliding-window-median/",
    "pattern": "Top K Elements",
    "short": "Top K Elements",
    "intro": "Keep only the K candidates that can still belong to the final answer.",
    "thinking": "Which candidates can safely be discarded while preserving the best K?",
    "steps": [
      "Restate **Sliding Window Median** as a state/decision problem before writing code.",
      "Use the core Top K Elements invariant: which candidates can safely be discarded while preserving the best k?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "n candidates",
      "Keep K",
      "Discard weakest",
      "Return K"
    ],
    "description": "<p>The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.</p>\n\n<ul>\n\t<li>For examples, if <code>arr = [2,<u>3</u>,4]</code>, the median is <code>3</code>.</li>\n\t<li>For examples, if <code>arr = [1,<u>2,3</u>,4]</code>, the median is <code>(2 + 3) / 2 = 2.5</code>.</li>\n</ul>\n\n<p>You are given an integer array <code>nums</code> and an integer <code>k</code>. There is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p>\n\n<p>Return <em>the median array for each window in the original array</em>. Answers within <code>10<sup>-5</sup></code> of the actual value will be accepted.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3\n<strong>Output:</strong> [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]\n<strong>Explanation:</strong> \nWindow position                Median\n---------------                -----\n[<strong>1  3  -1</strong>] -3  5  3  6  7        1\n 1 [<strong>3  -1  -3</strong>] 5  3  6  7       -1\n 1  3 [<strong>-1  -3  5</strong>] 3  6  7       -1\n 1  3  -1 [<strong>-3  5  3</strong>] 6  7        3\n 1  3  -1  -3 [<strong>5  3  6</strong>] 7        5\n 1  3  -1  -3  5 [<strong>3  6  7</strong>]       6\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,3,4,2,3,1,4,2], k = 3\n<strong>Output:</strong> [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n",
    "pythonCode": "from bisect import bisect_left, insort\n\ndef medianSlidingWindow(nums: list[int], k: int) -> list[float]:\n    win = sorted(nums[:k])\n    ans = [(win[k // 2] + win[(k - 1) // 2]) / 2.0]\n    for i in range(k, len(nums)):\n        win.pop(bisect_left(win, nums[i - k]))\n        insort(win, nums[i])\n        ans.append((win[k // 2] + win[(k - 1) // 2]) / 2.0)\n    return ans",
    "codeLines": 10,
    "timeComplexity": "O(N * K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Sorting each size-k window from scratch takes O(N * K log K). Maintaining a sorted window of size k using binary search (bisect_left + insort) takes O(log K + K) = O(K) per step, yielding O(N * K) time with concise minimal Python code.",
    "edgeCasesAndBreakPoints": [
      "k = 1: each element is its own median; outputs floats directly.",
      "k is odd vs even: (win[k//2] + win[(k-1)//2]) / 2.0 cleanly covers both cases.",
      "Duplicate elements in window: bisect_left pops the correct matching value.",
      "Large numbers: float division maintains exact decimal precision."
    ],
    "simConfig": {
      "type": "sliding_window",
      "inputDisplay": "nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3",
      "array": [
        1,
        3,
        -1,
        -3,
        5,
        3,
        6,
        7
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "window": "[-1, 1, 3]",
            "median": 1.0
          },
          "msg": "Window 0..2 sorted: [-1, 1, 3]. Median is 1.0."
        },
        {
          "active": [
            1,
            2,
            3
          ],
          "vars": {
            "window": "[-3, -1, 3]",
            "median": -1.0
          },
          "msg": "Slide: drop 1, insert -3. Sorted: [-3, -1, 3]. Median is -1.0."
        },
        {
          "active": [
            2,
            3,
            4
          ],
          "vars": {
            "window": "[-3, -1, 5]",
            "median": -1.0
          },
          "msg": "Slide: drop 3, insert 5. Sorted: [-3, -1, 5]. Median is -1.0."
        },
        {
          "active": [
            3,
            4,
            5
          ],
          "vars": {
            "window": "[3, 5, 6]",
            "median": 5.0
          },
          "msg": "Sliding through end: outputs medians [1.0, -1.0, -1.0, 3.0, 5.0, 6.0]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Merge Sorted Array",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/merge-sorted-array/",
    "pattern": "K-Way Merge",
    "short": "K-Way Merge",
    "intro": "Merge multiple sorted sources by keeping one live candidate from each source.",
    "thinking": "Can one current candidate per sorted source summarize everything needed next?",
    "steps": [
      "Restate **Merge Sorted Array** as a state/decision problem before writing code.",
      "Use the core K-Way Merge invariant: can one current candidate per sorted source summarize everything needed next?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "K sorted sources",
      "One head/source",
      "Heap",
      "Pop best",
      "Advance source"
    ],
    "description": "<p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in <strong>non-decreasing order</strong>, and two integers <code>m</code> and <code>n</code>, representing the number of elements in <code>nums1</code> and <code>nums2</code> respectively.</p>\n\n<p><strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a single array sorted in <strong>non-decreasing order</strong>.</p>\n\n<p>The final sorted array should not be returned by the function, but instead be <em>stored inside the array </em><code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a length of <code>n</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\n<strong>Output:</strong> [1,2,2,3,5,6]\n<strong>Explanation:</strong> The arrays we are merging are [1,2,3] and [2,5,6].\nThe result of the merge is [<u>1</u>,<u>2</u>,2,<u>3</u>,5,6] with the underlined elements coming from nums1.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [1], m = 1, nums2 = [], n = 0\n<strong>Output:</strong> [1]\n<strong>Explanation:</strong> The arrays we are merging are [1] and [].\nThe result of the merge is [1].\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [0], m = 0, nums2 = [1], n = 1\n<strong>Output:</strong> [1]\n<strong>Explanation:</strong> The arrays we are merging are [] and [1].\nThe result of the merge is [1].\nNote that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>nums1.length == m + n</code></li>\n\t<li><code>nums2.length == n</code></li>\n\t<li><code>0 &lt;= m, n &lt;= 200</code></li>\n\t<li><code>1 &lt;= m + n &lt;= 200</code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up: </strong>Can you come up with an algorithm that runs in <code>O(m + n)</code> time?</p>\n",
    "pythonCode": "def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:\n    i, j, k = m - 1, n - 1, m + n - 1\n    while j >= 0:\n        if i >= 0 and nums1[i] > nums2[j]:\n            nums1[k] = nums1[i]; i -= 1\n        else:\n            nums1[k] = nums2[j]; j -= 1\n        k -= 1",
    "codeLines": 8,
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Merging into a third array takes O(M + N) extra memory. Filling nums1 backwards from index m + n - 1 avoids overwriting unmerged elements of nums1, achieving true O(1) in-place merging in O(M + N) time.",
    "edgeCasesAndBreakPoints": [
      "m = 0: nums1 filled entirely by nums2.",
      "n = 0: nums1 remains unchanged.",
      "Equal elements: properly preserved without overwriting.",
      "Strictly descending fills."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3",
      "array": [
        1,
        2,
        3,
        0,
        0,
        0
      ],
      "steps": [
        {
          "active": [
            2,
            5
          ],
          "vars": {
            "write": "6 at index 5"
          },
          "msg": "Compare 3 and 6: write 6 to index 5."
        },
        {
          "active": [
            2,
            4
          ],
          "vars": {
            "write": "5 at index 4"
          },
          "msg": "Compare 3 and 5: write 5 to index 4."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "write": "3 at index 3"
          },
          "msg": "Compare 3 and 2: write 3 to index 3."
        },
        {
          "active": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "vars": {
            "result": "[1, 2, 2, 3, 5, 6]"
          },
          "msg": "Merged in-place: [1, 2, 2, 3, 5, 6]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Kth Smallest Element in a Sorted Matrix",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    "pattern": "K-Way Merge",
    "short": "K-Way Merge",
    "intro": "Merge multiple sorted sources by keeping one live candidate from each source.",
    "thinking": "Can one current candidate per sorted source summarize everything needed next?",
    "steps": [
      "Restate **Kth Smallest Element in a Sorted Matrix** as a state/decision problem before writing code.",
      "Use the core K-Way Merge invariant: can one current candidate per sorted source summarize everything needed next?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "K sorted sources",
      "One head/source",
      "Heap",
      "Pop best",
      "Advance source"
    ],
    "description": "<p>Given an <code>n x n</code> <code>matrix</code> where each of the rows and columns is sorted in ascending order, return <em>the</em> <code>k<sup>th</sup></code> <em>smallest element in the matrix</em>.</p>\n\n<p>Note that it is the <code>k<sup>th</sup></code> smallest element <strong>in the sorted order</strong>, not the <code>k<sup>th</sup></code> <strong>distinct</strong> element.</p>\n\n<p>You must find a solution with a memory complexity better than <code>O(n<sup>2</sup>)</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8\n<strong>Output:</strong> 13\n<strong>Explanation:</strong> The elements in the matrix are [1,5,9,10,11,12,13,<u><strong>13</strong></u>,15], and the 8<sup>th</sup> smallest number is 13\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> matrix = [[-5]], k = 1\n<strong>Output:</strong> -5\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == matrix.length == matrix[i].length</code></li>\n\t<li><code>1 &lt;= n &lt;= 300</code></li>\n\t<li><code>-10<sup>9</sup> &lt;= matrix[i][j] &lt;= 10<sup>9</sup></code></li>\n\t<li>All the rows and columns of <code>matrix</code> are <strong>guaranteed</strong> to be sorted in <strong>non-decreasing order</strong>.</li>\n\t<li><code>1 &lt;= k &lt;= n<sup>2</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong></p>\n\n<ul>\n\t<li>Could you solve the problem with a constant memory (i.e., <code>O(1)</code> memory complexity)?</li>\n\t<li>Could you solve the problem in <code>O(n)</code> time complexity? The solution may be too advanced for an interview but you may find reading <a href=\"http://www.cse.yorku.ca/~andy/pubs/X+Y.pdf\" target=\"_blank\">this paper</a> fun.</li>\n</ul>\n",
    "pythonCode": "from bisect import bisect_right\n\ndef kthSmallest(matrix: list[list[int]], k: int) -> int:\n    lo, hi = matrix[0][0], matrix[-1][-1]\n    while lo < hi:\n        mid = (lo + hi) // 2\n        count = sum(bisect_right(row, mid) for row in matrix)\n        if count < k: lo = mid + 1\n        else: hi = mid\n    return lo",
    "codeLines": 10,
    "timeComplexity": "O(N log(max - min))",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Flattening and sorting the matrix takes O(N^2 log N) time and O(N^2) memory. Binary searching on value range [matrix[0][0], matrix[-1][-1]] counts how many elements in each sorted row are <= mid using binary search in O(N log N) per probe, achieving O(N log N log(max - min)) with strict O(1) space.",
    "edgeCasesAndBreakPoints": [
      "k = 1: returns top-left element matrix[0][0].",
      "k = N^2: returns bottom-right element matrix[-1][-1].",
      "All matrix elements identical: lo == hi immediately returns the value.",
      "Negative values: binary search on values naturally supports signed integers."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8",
      "array": [
        "[1, 5, 9]",
        "[10, 11, 13]",
        "[12, 13, 15]"
      ],
      "steps": [
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "lo": 1,
            "hi": 15,
            "mid": 8
          },
          "msg": "Search range [1, 15]. mid=8: count of elements <= 8 is 2 (< k=8). lo = 9."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "lo": 9,
            "hi": 15,
            "mid": 12
          },
          "msg": "mid=12: count <= 12 is 6 (< 8). lo = 13."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "lo": 13,
            "hi": 15,
            "mid": 14
          },
          "msg": "mid=14: count <= 14 is 8 (>= 8). hi = 14."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "lo": 13,
            "hi": 13,
            "kthSmallest": 13
          },
          "msg": "Binary search converges to 13. The 8th smallest element is 13. Complete!"
        }
      ]
    }
  },
  {
    "title": "Find K Pairs with Smallest Sums",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
    "pattern": "K-Way Merge",
    "short": "K-Way Merge",
    "intro": "Merge multiple sorted sources by keeping one live candidate from each source.",
    "thinking": "Can one current candidate per sorted source summarize everything needed next?",
    "steps": [
      "Restate **Find K Pairs with Smallest Sums** as a state/decision problem before writing code.",
      "Use the core K-Way Merge invariant: can one current candidate per sorted source summarize everything needed next?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "K sorted sources",
      "One head/source",
      "Heap",
      "Pop best",
      "Advance source"
    ],
    "description": "<p>You are given two integer arrays <code>nums1</code> and <code>nums2</code> sorted in <strong>non-decreasing&nbsp;order</strong> and an integer <code>k</code>.</p>\n\n<p>Define a pair <code>(u, v)</code> which consists of one element from the first array and one element from the second array.</p>\n\n<p>Return <em>the</em> <code>k</code> <em>pairs</em> <code>(u<sub>1</sub>, v<sub>1</sub>), (u<sub>2</sub>, v<sub>2</sub>), ..., (u<sub>k</sub>, v<sub>k</sub>)</code> <em>with the smallest sums</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [1,7,11], nums2 = [2,4,6], k = 3\n<strong>Output:</strong> [[1,2],[1,4],[1,6]]\n<strong>Explanation:</strong> The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums1 = [1,1,2], nums2 = [1,2,3], k = 2\n<strong>Output:</strong> [[1,1],[1,1]]\n<strong>Explanation:</strong> The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>9</sup></code></li>\n\t<li><code>nums1</code> and <code>nums2</code> both are sorted in <strong>non-decreasing order</strong>.</li>\n\t<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code></li>\n\t<li><code>k &lt;=&nbsp;nums1.length *&nbsp;nums2.length</code></li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef kSmallestPairs(nums1: list[int], nums2: list[int], k: int) -> list[list[int]]:\n    if not nums1 or not nums2: return []\n    hp, ans = [], []\n    for i in range(min(k, len(nums1))):\n        heappush(hp, (nums1[i] + nums2[0], i, 0))\n    while hp and len(ans) < k:\n        _, i, j = heappop(hp)\n        ans.append([nums1[i], nums2[j]])\n        if j + 1 < len(nums2):\n            heappush(hp, (nums1[i] + nums2[j + 1], i, j + 1))\n    return ans",
    "codeLines": 13,
    "timeComplexity": "O(K log(min(K, N)))",
    "spaceComplexity": "O(min(K, N))",
    "whyBetterThanBruteForce": "Generating all pairs takes O(N1 * N2 log(N1 * N2)). Since both arrays are sorted, the next smallest pair involving nums1[i] must pair with nums2[j + 1]. A min-heap of size at most min(k, len(nums1)) extracts the smallest pair and pushes its successor, finding the top k pairs in O(K log K) time without computing unneeded pairs.",
    "edgeCasesAndBreakPoints": [
      "k > total possible pairs (len(nums1) * len(nums2)): while hp loop terminates naturally.",
      "Either array empty: returns [] immediately.",
      "Duplicate sums: min-heap breaks ties by array indices.",
      "k = 1: returns [[nums1[0], nums2[0]]]."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "nums1 = [1, 7, 11], nums2 = [2, 4, 6], k = 3",
      "array": [
        "nums1: [1, 7, 11]",
        "nums2: [2, 4, 6]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "heapInit": "[(1+2=3, 0, 0), (7+2=9, 1, 0), (11+2=13, 2, 0)]"
          },
          "msg": "Seed heap with pairs (nums1[i], nums2[0]): sums 3, 9, 13."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "pop": "[1, 2] sum=3",
            "push": "[1, 4] sum=5"
          },
          "msg": "Pop [1, 2] (sum 3). Push successor [1, 4] (sum 5). ans=[[1, 2]]."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "pop": "[1, 4] sum=5",
            "push": "[1, 6] sum=7"
          },
          "msg": "Pop [1, 4] (sum 5). Push successor [1, 6] (sum 7). ans=[[1,2], [1,4]]."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "pop": "[1, 6] sum=7",
            "result": "[[1,2], [1,4], [1,6]]"
          },
          "msg": "Pop [1, 6] (sum 7). k=3 pairs collected! Complete!"
        }
      ]
    }
  },
  {
    "title": "Merge k Sorted Lists",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "pattern": "K-Way Merge",
    "short": "K-Way Merge",
    "intro": "Merge multiple sorted sources by keeping one live candidate from each source.",
    "thinking": "Can one current candidate per sorted source summarize everything needed next?",
    "steps": [
      "Restate **Merge k Sorted Lists** as a state/decision problem before writing code.",
      "Use the core K-Way Merge invariant: can one current candidate per sorted source summarize everything needed next?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "K sorted sources",
      "One head/source",
      "Heap",
      "Pop best",
      "Advance source"
    ],
    "description": "<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>\n\n<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]\n<strong>Output:</strong> [1,1,2,3,4,4,5,6]\n<strong>Explanation:</strong> The linked-lists are:\n[\n  1-&gt;4-&gt;5,\n  1-&gt;3-&gt;4,\n  2-&gt;6\n]\nmerging them into one sorted linked list:\n1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = []\n<strong>Output:</strong> []\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = [[]]\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>k == lists.length</code></li>\n\t<li><code>0 &lt;= k &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= lists[i][j] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li>\n\t<li>The sum of <code>lists[i].length</code> will not exceed <code>10<sup>4</sup></code>.</li>\n</ul>\n",
    "pythonCode": "def mergeKLists(lists: list) -> list:\n    def mergeTwo(l1, l2):\n        dummy = cur = ListNode(0)\n        while l1 and l2:\n            if l1.val < l2.val: cur.next, l1 = l1, l1.next\n            else: cur.next, l2 = l2, l2.next\n            cur = cur.next\n        cur.next = l1 or l2\n        return dummy.next\n    if not lists: return None\n    interval = 1\n    while interval < len(lists):\n        for i in range(0, len(lists) - interval, interval * 2):\n            lists[i] = mergeTwo(lists[i], lists[i + interval])\n        interval *= 2\n    return lists[0]",
    "codeLines": 16,
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Merging lists iteratively one by one takes O(N * K) time. By using Divide and Conquer (pairing up lists and merging them in pairs), the number of lists is halved at each stage. There are log2(K) stages, and each stage merges a total of N nodes in O(N) time, achieving O(N log K) time with strict O(1) extra space without any heap overhead.",
    "edgeCasesAndBreakPoints": [
      "lists = []: returns None immediately.",
      "Odd number of lists at a merge stage: odd tail list carries over untouched to next stage.",
      "Lists containing null heads: mergeTwo handles None operands in O(1).",
      "K = 1: returns lists[0] directly in O(1)."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "lists = [L0, L1, L2, L3] (4 sorted linked lists)",
      "array": [
        "L0",
        "L1",
        "L2",
        "L3"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "stage": 1,
            "merged": "L0 + L1 -> L0'"
          },
          "msg": "Round 1: Merge L0 and L1 into combined L0'."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "stage": 1,
            "merged": "L2 + L3 -> L2'"
          },
          "msg": "Round 1: Merge L2 and L3 into combined L2'."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "stage": 2,
            "merged": "L0' + L2' -> Final"
          },
          "msg": "Round 2: Merge L0' and L2' into final list."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "done": true,
            "totalStages": 2
          },
          "msg": "Divide-and-conquer merges all K lists in log2(K) rounds. Strict O(1) auxiliary space!"
        }
      ]
    }
  },
  {
    "title": "Binary Tree Inorder Traversal",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "pattern": "Trees & Tree Traversals",
    "short": "Trees & Tree Traversals",
    "intro": "Traversal becomes the foundation: decide when to process a node and what information children return.",
    "thinking": "When should this node be processed, and what should children return?",
    "steps": [
      "Restate **Binary Tree Inorder Traversal** as a state/decision problem before writing code.",
      "Use the core Trees & Tree Traversals invariant: when should this node be processed, and what should children return?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Tree",
      "Traversal order",
      "Children",
      "Process node",
      "Return state"
    ],
    "description": "<p>Given the <code>root</code> of a binary tree, return <em>the inorder traversal of its nodes&#39; values</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">root = [1,null,2,3]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1,3,2]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2024/08/29/screenshot-2024-08-29-202743.png\" style=\"width: 200px; height: 264px;\" /></p>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">root = [1,2,3,4,5,null,8,null,null,6,7,9]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[4,2,6,5,7,1,3,9,8]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2024/08/29/tree_2.png\" style=\"width: 350px; height: 286px;\" /></p>\n</div>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">root = []</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[]</span></p>\n</div>\n\n<p><strong class=\"example\">Example 4:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">root = [1]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1]</span></p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li>\n\t<li><code>-100 &lt;= Node.val &lt;= 100</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?",
    "pythonCode": "def inorderTraversal(root) -> list[int]:\n    ans, stack, cur = [], [], root\n    while cur or stack:\n        while cur:\n            stack.append(cur); cur = cur.left\n        cur = stack.pop()\n        ans.append(cur.val)\n        cur = cur.right\n    return ans",
    "codeLines": 9,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(H)",
    "whyBetterThanBruteForce": "Recursive traversal creates implicit function call frame overhead. An explicit LIFO stack traverses leftward to the deepest child, visits the node in O(1), and advances to the right subtree, executing in O(N) time with O(H) auxiliary space.",
    "edgeCasesAndBreakPoints": [
      "Empty tree (root is None): while loop does not execute, returns [].",
      "Single node tree: visits root, stack empties, returns [root.val].",
      "Left-skewed tree: stack grows to depth N.",
      "Right-skewed tree: visits each node immediately."
    ],
    "simConfig": {
      "type": "tree",
      "inputDisplay": "root = [1, null, 2, 3]",
      "array": [
        "1",
        "right: 2",
        "2.left: 3"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "cur": 1,
            "stack": "[1]"
          },
          "msg": "Push 1 to stack. Move to left (None)."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "pop": 1,
            "ans": "[1]",
            "cur": 2
          },
          "msg": "Pop 1 -> add to ans. Move to right child 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "cur": 2,
            "push": "2 and 3",
            "stack": "[2, 3]"
          },
          "msg": "Push 2 and 3 to stack."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "pop": "3 then 2",
            "ans": "[1, 3, 2]"
          },
          "msg": "Pop 3 (add 3), pop 2 (add 2). Inorder result: [1, 3, 2]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "pattern": "Trees & Tree Traversals",
    "short": "Trees & Tree Traversals",
    "intro": "Traversal becomes the foundation: decide when to process a node and what information children return.",
    "thinking": "When should this node be processed, and what should children return?",
    "steps": [
      "Restate **Binary Tree Level Order Traversal** as a state/decision problem before writing code.",
      "Use the core Trees & Tree Traversals invariant: when should this node be processed, and what should children return?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Tree",
      "Traversal order",
      "Children",
      "Process node",
      "Return state"
    ],
    "description": "<p>Given the <code>root</code> of a binary tree, return <em>the level order traversal of its nodes&#39; values</em>. (i.e., from left to right, level by level).</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg\" style=\"width: 277px; height: 302px;\" />\n<pre>\n<strong>Input:</strong> root = [3,9,20,null,null,15,7]\n<strong>Output:</strong> [[3],[9,20],[15,7]]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = [1]\n<strong>Output:</strong> [[1]]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = []\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li>\n\t<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef levelOrder(root) -> list[list[int]]:\n    if not root: return []\n    q, ans = deque([root]), []\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        ans.append(level)\n    return ans",
    "codeLines": 14,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Querying each depth with DFS takes O(N * H) without memoization. BFS using a FIFO queue processes each tree level in batch using len(q): each node is enqueued and dequeued exactly once, achieving O(N) linear time and O(width) space.",
    "edgeCasesAndBreakPoints": [
      "Empty tree: returns [] immediately.",
      "Single node: returns [[root.val]].",
      "Complete binary tree: maximum queue size is N / 2 nodes.",
      "Deep single branch tree: each level has 1 node."
    ],
    "simConfig": {
      "type": "bfs",
      "inputDisplay": "root = [3, 9, 20, null, null, 15, 7]",
      "array": [
        "Level 0: [3]",
        "Level 1: [9, 20]",
        "Level 2: [15, 7]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "level 0": "[3]"
          },
          "msg": "Level 0: [3]. Enqueue children 9 and 20."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "level 1": "[9, 20]"
          },
          "msg": "Level 1: [9, 20]. Enqueue children 15 and 7."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "level 2": "[15, 7]"
          },
          "msg": "Level 2: [15, 7]."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "result": "[[3], [9, 20], [15, 7]]"
          },
          "msg": "All levels grouped: [[3], [9, 20], [15, 7]]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Binary Tree Right Side View",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "pattern": "Trees & Tree Traversals",
    "short": "Trees & Tree Traversals",
    "intro": "Traversal becomes the foundation: decide when to process a node and what information children return.",
    "thinking": "When should this node be processed, and what should children return?",
    "steps": [
      "Restate **Binary Tree Right Side View** as a state/decision problem before writing code.",
      "Use the core Trees & Tree Traversals invariant: when should this node be processed, and what should children return?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Tree",
      "Traversal order",
      "Children",
      "Process node",
      "Return state"
    ],
    "description": "<p>Given the <code>root</code> of a binary tree, imagine yourself standing on the <strong>right side</strong> of it, return <em>the values of the nodes you can see ordered from top to bottom</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">root = [1,2,3,null,5,null,4]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1,3,4]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2024/11/24/tmpd5jn43fs-1.png\" style=\"width: 400px; height: 207px;\" /></p>\n</div>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">root = [1,2,3,4,null,null,null,5]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1,3,4,5]</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2024/11/24/tmpkpe40xeh-1.png\" style=\"width: 400px; height: 214px;\" /></p>\n</div>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">root = [1,null,3]</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[1,3]</span></p>\n</div>\n\n<p><strong class=\"example\">Example 4:</strong></p>\n\n<div class=\"example-block\">\n<p><strong>Input:</strong> <span class=\"example-io\">root = []</span></p>\n\n<p><strong>Output:</strong> <span class=\"example-io\">[]</span></p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li>\n\t<li><code>-100 &lt;= Node.val &lt;= 100</code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef rightSideView(root) -> list[int]:\n    if not root: return []\n    q, ans = deque([root]), []\n    while q:\n        ans.append(q[-1].val)\n        for _ in range(len(q)):\n            node = q.popleft()\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n    return ans",
    "codeLines": 12,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Projecting visible coordinates with geometry takes O(N log N). Level-order BFS visits nodes layer by layer from left to right. The last node in each queue level q[-1] is the rightmost visible node at that depth, recording the right side view in O(N) time with O(W) space.",
    "edgeCasesAndBreakPoints": [
      "Empty tree: returns [].",
      "Left branch deeper than right branch: lower left nodes become visible from the right; handled naturally by level-order.",
      "Single node: returns [root.val].",
      "Strictly right-skewed tree: returns all nodes."
    ],
    "simConfig": {
      "type": "tree",
      "inputDisplay": "root = [1, 2, 3, null, 5, null, 4]",
      "array": [
        "Level 0: [1]",
        "Level 1: [2, 3]",
        "Level 2: [5, 4]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "level 0": "[1]",
            "rightmost": 1
          },
          "msg": "Level 0: rightmost is 1. ans=[1]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "level 1": "[2, 3]",
            "rightmost": 3
          },
          "msg": "Level 1: rightmost is 3. ans=[1, 3]."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "level 2": "[5, 4]",
            "rightmost": 4
          },
          "msg": "Level 2: rightmost is 4. ans=[1, 3, 4]."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "rightSideView": "[1, 3, 4]"
          },
          "msg": "Right side view collected: [1, 3, 4]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Serialize and Deserialize Binary Tree",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "pattern": "Trees & Tree Traversals",
    "short": "Trees & Tree Traversals",
    "intro": "Traversal becomes the foundation: decide when to process a node and what information children return.",
    "thinking": "When should this node be processed, and what should children return?",
    "steps": [
      "Restate **Serialize and Deserialize Binary Tree** as a state/decision problem before writing code.",
      "Use the core Trees & Tree Traversals invariant: when should this node be processed, and what should children return?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Tree",
      "Traversal order",
      "Children",
      "Process node",
      "Return state"
    ],
    "description": "<p>Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.</p>\n\n<p>Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.</p>\n\n<p><strong>Clarification:</strong> The input/output format is the same as <a href=\"https://support.leetcode.com/hc/en-us/articles/32442719377939-How-to-create-test-cases-on-LeetCode#h_01J5EGREAW3NAEJ14XC07GRW1A\" target=\"_blank\">how LeetCode serializes a binary tree</a>. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg\" style=\"width: 442px; height: 324px;\" />\n<pre>\n<strong>Input:</strong> root = [1,2,3,null,null,4,5]\n<strong>Output:</strong> [1,2,3,null,null,4,5]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = []\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>\n\t<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n",
    "pythonCode": "class Codec:\n    def serialize(self, root) -> str:\n        vals = []\n        def dfs(node):\n            if not node: vals.append(\"#\"); return\n            vals.append(str(node.val))\n            dfs(node.left); dfs(node.right)\n        dfs(root)\n        return \",\".join(vals)\n    def deserialize(self, data: str):\n        vals = iter(data.split(\",\"))\n        def dfs():\n            val = next(vals)\n            if val == \"#\": return None\n            node = TreeNode(int(val))\n            node.left, node.right = dfs(), dfs()\n            return node\n        return dfs()",
    "codeLines": 18,
    "timeComplexity": "O(N) for both serialize & deserialize",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Reconstructing a tree from traversal usually requires two traversals (e.g. Inorder + Preorder) and O(N^2) reconstruction time without unique node values. By including null node markers ('#') in a pre-order traversal, the tree is encoded with 1-to-1 uniqueness in a single string. Deserializing using a Python iterator reads values sequentially in pure O(N) time.",
    "edgeCasesAndBreakPoints": [
      "Empty tree (root is None): serializes to '#' and deserializes back to None.",
      "Negative node values: string conversion preserves negative signs.",
      "Multi-digit integers: comma delimiter avoids ambiguity.",
      "Deeply nested single-branch tree: preorder recursion handles deep paths within Python's default stack limit."
    ],
    "simConfig": {
      "type": "tree",
      "inputDisplay": "root = [1, 2, 3, null, null, 4, 5]",
      "array": [
        "1",
        "2",
        "#",
        "#",
        "3",
        "4",
        "#",
        "#",
        "5",
        "#",
        "#"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "serialize": "1,2,#,#"
          },
          "msg": "Preorder serialize: visit 1, then left child 2, then its null children '#' and '#' -> '1,2,#,#'."
        },
        {
          "active": [
            4,
            5,
            8
          ],
          "vars": {
            "serialize": "3,4,#,#,5,#,#"
          },
          "msg": "Visit right subtree 3: left child 4, right child 5 -> '3,4,#,#,5,#,#'."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "fullString": "'1,2,#,#,3,4,#,#,5,#,#'"
          },
          "msg": "Serialization complete: '1,2,#,#,3,4,#,#,5,#,#'."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "deserialize": "iter(split(',')) -> DFS reconstructs exact tree"
          },
          "msg": "Deserialization: iterator reads tokens in preorder to reconstruct original tree in O(N)."
        }
      ]
    }
  },
  {
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "pattern": "Depth First Search — DFS",
    "short": "DFS",
    "intro": "Explore deeply while carrying a precise recursive/stack state and tracking visited nodes where necessary.",
    "thinking": "What is the state of one recursive call, and what must be marked/returned?",
    "steps": [
      "Restate **Maximum Depth of Binary Tree** as a state/decision problem before writing code.",
      "Use the core Depth First Search — DFS invariant: what is the state of one recursive call, and what must be marked/returned?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start",
      "Visit",
      "Explore deeply",
      "Return/backtrack",
      "Answer"
    ],
    "description": "<p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>\n\n<p>A binary tree&#39;s <strong>maximum depth</strong>&nbsp;is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg\" style=\"width: 400px; height: 277px;\" />\n<pre>\n<strong>Input:</strong> root = [3,9,20,null,null,15,7]\n<strong>Output:</strong> 3\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = [1,null,2]\n<strong>Output:</strong> 2\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>\n\t<li><code>-100 &lt;= Node.val &lt;= 100</code></li>\n</ul>\n",
    "pythonCode": "def maxDepth(root) -> int:\n    return 1 + max(maxDepth(root.left), maxDepth(root.right)) if root else 0",
    "codeLines": 2,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(H)",
    "whyBetterThanBruteForce": "Traversing each path individually from root to every leaf takes O(N * H) time. Single-line post-order DFS computes 1 + max(left_depth, right_depth) in O(1) time per node, resolving the maximum tree depth in O(N) time and O(H) recursion stack space.",
    "edgeCasesAndBreakPoints": [
      "Empty tree (root is None): returns 0.",
      "Single node tree: returns 1.",
      "Completely balanced tree: stack height is log2(N).",
      "Completely skewed tree: stack height is N."
    ],
    "simConfig": {
      "type": "tree",
      "inputDisplay": "root = [3, 9, 20, null, null, 15, 7]",
      "array": [
        "3",
        "Left: 9 (depth 2)",
        "Right: 20 -> 15, 7 (depth 3)"
      ],
      "steps": [
        {
          "active": [
            1
          ],
          "vars": {
            "leaf 9": "depth 1 + 1 = 2"
          },
          "msg": "Node 9 has depth 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "leaves 15, 7": "depth 3"
          },
          "msg": "Nodes 15 and 7 have depth 3."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "root 3": "1 + max(2, 3) = 4"
          },
          "msg": "Root depth: 1 + max(left=1, right=2) = 3."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "maxDepth": 3
          },
          "msg": "Maximum tree depth is 3. Complete!"
        }
      ]
    }
  },
  {
    "title": "Number of Islands",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/number-of-islands/",
    "pattern": "Depth First Search — DFS",
    "short": "DFS",
    "intro": "Explore deeply while carrying a precise recursive/stack state and tracking visited nodes where necessary.",
    "thinking": "What is the state of one recursive call, and what must be marked/returned?",
    "steps": [
      "Restate **Number of Islands** as a state/decision problem before writing code.",
      "Use the core Depth First Search — DFS invariant: what is the state of one recursive call, and what must be marked/returned?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start",
      "Visit",
      "Explore deeply",
      "Return/backtrack",
      "Answer"
    ],
    "description": "<p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>&#39;1&#39;</code>s (land) and <code>&#39;0&#39;</code>s (water), return <em>the number of islands</em>.</p>\n\n<p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [\n  [&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;0&quot;],\n  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;],\n  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],\n  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]\n]\n<strong>Output:</strong> 1\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [\n  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],\n  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],\n  [&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],\n  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;]\n]\n<strong>Output:</strong> 3\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == grid.length</code></li>\n\t<li><code>n == grid[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 300</code></li>\n\t<li><code>grid[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>\n</ul>\n",
    "pythonCode": "def numIslands(grid: list[list[str]]) -> int:\n    if not grid: return 0\n    R, C, ans = len(grid), len(grid[0]), 0\n    def dfs(r, c):\n        grid[r][c] = '0'\n        for dr, dc in ((-1,0),(1,0),(0,-1),(0,1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == '1':\n                dfs(nr, nc)\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == '1':\n                dfs(r, c); ans += 1\n    return ans",
    "codeLines": 14,
    "timeComplexity": "O(R * C)",
    "spaceComplexity": "O(R * C) worst case",
    "whyBetterThanBruteForce": "Checking all paths or maintaining a separate visited set incurs overhead. Sinking visited land cells in-place (setting grid[r][c] = '0') ensures each cell is traversed at most once, counting connected components in O(R * C) time with zero auxiliary memory allocation beyond the call stack.",
    "edgeCasesAndBreakPoints": [
      "All water grid (all '0's): returns 0.",
      "All land grid (all '1's): single DFS sinks entire grid; returns 1.",
      "Diagonal land cells: not connected (only 4 cardinal directions); counted as separate islands.",
      "1x1 grid: returns 1 for ['1'] and 0 for ['0']."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "grid = [['1','1','0','0'],['1','1','0','0'],['0','0','1','0'],['0','0','0','1']]",
      "array": [
        "[1, 1, 0, 0]",
        "[1, 1, 0, 0]",
        "[0, 0, 1, 0]",
        "[0, 0, 0, 1]"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "island 1": "sinks (0,0),(0,1),(1,0),(1,1)",
            "count": 1
          },
          "msg": "DFS sinks top-left 2x2 island. Island count = 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "island 2": "sinks (2,2)",
            "count": 2
          },
          "msg": "DFS sinks isolated cell at (2,2). Island count = 2."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "island 3": "sinks (3,3)",
            "count": 3
          },
          "msg": "DFS sinks isolated cell at (3,3). Island count = 3."
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "totalIslands": 3
          },
          "msg": "All cells scanned. Total islands = 3. Complete!"
        }
      ]
    }
  },
  {
    "title": "Clone Graph",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/clone-graph/",
    "pattern": "Depth First Search — DFS",
    "short": "DFS",
    "intro": "Explore deeply while carrying a precise recursive/stack state and tracking visited nodes where necessary.",
    "thinking": "What is the state of one recursive call, and what must be marked/returned?",
    "steps": [
      "Restate **Clone Graph** as a state/decision problem before writing code.",
      "Use the core Depth First Search — DFS invariant: what is the state of one recursive call, and what must be marked/returned?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start",
      "Visit",
      "Explore deeply",
      "Return/backtrack",
      "Answer"
    ],
    "description": "<p>Given a reference of a node in a <strong><a href=\"https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph\" target=\"_blank\">connected</a></strong> undirected graph.</p>\n\n<p>Return a <a href=\"https://en.wikipedia.org/wiki/Object_copying#Deep_copy\" target=\"_blank\"><strong>deep copy</strong></a> (clone) of the graph.</p>\n\n<p>Each node in the graph contains a value (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.</p>\n\n<pre>\nclass Node {\n    public int val;\n    public List&lt;Node&gt; neighbors;\n}\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>Test case format:</strong></p>\n\n<p>For simplicity, each node&#39;s value is the same as the node&#39;s index (1-indexed). For example, the first node with <code>val == 1</code>, the second node with <code>val == 2</code>, and so on. The graph is represented in the test case using an adjacency list.</p>\n\n<p><b>An adjacency list</b> is a collection of unordered <b>lists</b> used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.</p>\n\n<p>The given node will always be the first node with <code>val = 1</code>. You must return the <strong>copy of the given node</strong> as a reference to the cloned graph.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png\" style=\"width: 454px; height: 500px;\" />\n<pre>\n<strong>Input:</strong> adjList = [[2,4],[1,3],[2,4],[1,3]]\n<strong>Output:</strong> [[2,4],[1,3],[2,4],[1,3]]\n<strong>Explanation:</strong> There are 4 nodes in the graph.\n1st node (val = 1)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n2nd node (val = 2)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n3rd node (val = 3)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n4th node (val = 4)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/01/07/graph.png\" style=\"width: 163px; height: 148px;\" />\n<pre>\n<strong>Input:</strong> adjList = [[]]\n<strong>Output:</strong> [[]]\n<strong>Explanation:</strong> Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> adjList = []\n<strong>Output:</strong> []\n<strong>Explanation:</strong> This an empty graph, it does not have any nodes.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the graph is in the range <code>[0, 100]</code>.</li>\n\t<li><code>1 &lt;= Node.val &lt;= 100</code></li>\n\t<li><code>Node.val</code> is unique for each node.</li>\n\t<li>There are no repeated edges and no self-loops in the graph.</li>\n\t<li>The Graph is connected and all nodes can be visited starting from the given node.</li>\n</ul>\n",
    "pythonCode": "def cloneGraph(node):\n    if not node: return None\n    clones = {}\n    def dfs(n):\n        if n in clones: return clones[n]\n        copy = Node(n.val)\n        clones[n] = copy\n        for neighbor in n.neighbors:\n            copy.neighbors.append(dfs(neighbor))\n        return copy\n    return dfs(node)",
    "codeLines": 11,
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V)",
    "whyBetterThanBruteForce": "Recreating graphs without visited tracking enters infinite loops due to cycles. Using a hashmap mapping original node -> cloned node memoizes graph vertices in O(1), traversing each vertex and edge once in O(V + E) time while correctly duplicating cyclic structures.",
    "edgeCasesAndBreakPoints": [
      "Empty graph (node is None): returns None immediately.",
      "Single node with no neighbors: clones single vertex and returns.",
      "Graph with self-loops: clones[n] handles self-referential neighbors without recursion depth errors.",
      "Disconnected components: clones only the component reachable from the given entry vertex."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "adjList = [[2,4],[1,3],[2,4],[1,3]] (4-node cycle)",
      "array": [
        "Node 1",
        "Node 2",
        "Node 3",
        "Node 4"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "clone": "Node 1'",
            "hashmap": "{1: 1'}"
          },
          "msg": "Clone Node 1. Store in hashmap."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "clone": "Node 2'",
            "hashmap": "{1: 1', 2: 2'}"
          },
          "msg": "Clone Node 2. Link 1' -> 2'."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "clone": "Node 3'",
            "hashmap": "{... 3: 3'}"
          },
          "msg": "Clone Node 3. Link 2' -> 3'."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "clone": "Node 4'",
            "closeCycle": "4' -> 1'"
          },
          "msg": "Clone Node 4. Neighbor 1 is in hashmap -> link 4' -> 1'! Exact deep copy formed. Complete!"
        }
      ]
    }
  },
  {
    "title": "Word Search II",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/word-search-ii/",
    "pattern": "Depth First Search — DFS",
    "short": "DFS",
    "intro": "Explore deeply while carrying a precise recursive/stack state and tracking visited nodes where necessary.",
    "thinking": "What is the state of one recursive call, and what must be marked/returned?",
    "steps": [
      "Restate **Word Search II** as a state/decision problem before writing code.",
      "Use the core Depth First Search — DFS invariant: what is the state of one recursive call, and what must be marked/returned?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start",
      "Visit",
      "Explore deeply",
      "Return/backtrack",
      "Answer"
    ],
    "description": "<p>Given an <code>m x n</code> <code>board</code>&nbsp;of characters and a list of strings <code>words</code>, return <em>all words on the board</em>.</p>\n\n<p>Each word must be constructed from letters of sequentially adjacent cells, where <strong>adjacent cells</strong> are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/07/search1.jpg\" style=\"width: 322px; height: 322px;\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;o&quot;,&quot;a&quot;,&quot;a&quot;,&quot;n&quot;],[&quot;e&quot;,&quot;t&quot;,&quot;a&quot;,&quot;e&quot;],[&quot;i&quot;,&quot;h&quot;,&quot;k&quot;,&quot;r&quot;],[&quot;i&quot;,&quot;f&quot;,&quot;l&quot;,&quot;v&quot;]], words = [&quot;oath&quot;,&quot;pea&quot;,&quot;eat&quot;,&quot;rain&quot;]\n<strong>Output:</strong> [&quot;eat&quot;,&quot;oath&quot;]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/07/search2.jpg\" style=\"width: 162px; height: 162px;\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;a&quot;,&quot;b&quot;],[&quot;c&quot;,&quot;d&quot;]], words = [&quot;abcb&quot;]\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == board.length</code></li>\n\t<li><code>n == board[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 12</code></li>\n\t<li><code>board[i][j]</code> is a lowercase English letter.</li>\n\t<li><code>1 &lt;= words.length &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= words[i].length &lt;= 10</code></li>\n\t<li><code>words[i]</code> consists of lowercase English letters.</li>\n\t<li>All the strings of <code>words</code> are unique.</li>\n</ul>\n",
    "pythonCode": "def findWords(board: list[list[str]], words: list[str]) -> list[str]:\n    trie = {}\n    for w in words:\n        node = trie\n        for c in w: node = node.setdefault(c, {})\n        node['$'] = w\n    R, C, ans = len(board), len(board[0]), []\n    def dfs(r, c, parent):\n        char = board[r][c]\n        cur = parent[char]\n        if '$' in cur:\n            ans.append(cur.pop('$'))\n        board[r][c] = '#'\n        for dr, dc in ((-1,0),(1,0),(0,-1),(0,1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and board[nr][nc] in cur:\n                dfs(nr, nc, cur)\n        board[r][c] = char\n        if not cur: parent.pop(char)\n    for r in range(R):\n        for c in range(C):\n            if board[r][c] in trie: dfs(r, c, trie)\n    return ans",
    "codeLines": 23,
    "timeComplexity": "O(R * C * 4^L)",
    "spaceComplexity": "O(sum(len(w)))",
    "whyBetterThanBruteForce": "Searching each word independently with Word Search I takes O(W * R * C * 4^L) time. By compiling all target words into a Trie (Prefix Tree), a single DFS from each cell simultaneously searches for all words sharing prefixes. Found words are pruned from the Trie (cur.pop('$')) and empty branch nodes are deleted, preventing redundant searches and achieving dramatic speedups.",
    "edgeCasesAndBreakPoints": [
      "Words sharing common prefixes (e.g. 'oa', 'oath'): trie branches correctly emit both words without duplicate DFS.",
      "Words that cannot be formed: trie lookup terminates DFS in 1 step.",
      "No words found: returns [] cleanly.",
      "Duplicate words in words list: popping '$' ensures each word is added to ans at most once."
    ],
    "simConfig": {
      "type": "trie",
      "inputDisplay": "board = [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], words = ['oath','pea','eat','rain']",
      "array": [
        "[o, a, a, n]",
        "[e, t, a, e]",
        "[i, h, k, r]",
        "[i, f, l, v]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "trie": "Root -> {o, p, e, r}"
          },
          "msg": "Insert words into Trie. DFS begins at board cells matching root letters."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "step": "board(0,0)='o'",
            "path": "'o'"
          },
          "msg": "Start at (0,0) 'o'. Matches Trie root -> 'o'."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "step": "o -> a -> t -> h",
            "found": "'oath'"
          },
          "msg": "Path: (0,0)'o' -> (0,1)'a' -> (1,1)'t' -> (2,1)'h'. Reaches leaf '$'='oath'! Add to results."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "step": "board(1,0)='e'",
            "found": "'eat'"
          },
          "msg": "Path: (1,0)'e' -> (1,2)'a' -> (1,1)'t'. Found 'eat'!"
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "results": "['oath', 'eat']"
          },
          "msg": "Search complete. Output: ['oath', 'eat']."
        }
      ]
    }
  },
  {
    "title": "Minimum Depth of Binary Tree",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    "pattern": "Breadth First Search — BFS",
    "short": "BFS",
    "intro": "Explore level by level; in unweighted graphs, the first reached level is the shortest distance.",
    "thinking": "What does one level represent, and when should a node become visited?",
    "steps": [
      "Restate **Minimum Depth of Binary Tree** as a state/decision problem before writing code.",
      "Use the core Breadth First Search — BFS invariant: what does one level represent, and when should a node become visited?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start level",
      "Queue",
      "Process level",
      "Next level",
      "Answer"
    ],
    "description": "<p>Given a binary tree, find its minimum depth.</p>\n\n<p>The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.</p>\n\n<p><strong>Note:</strong>&nbsp;A leaf is a node with no children.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg\" style=\"width: 432px; height: 302px;\" />\n<pre>\n<strong>Input:</strong> root = [3,9,20,null,null,15,7]\n<strong>Output:</strong> 2\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = [2,null,3,null,4,null,5,null,6]\n<strong>Output:</strong> 5\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 10<sup>5</sup>]</code>.</li>\n\t<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef minDepth(root) -> int:\n    if not root: return 0\n    q = deque([(root, 1)])\n    while q:\n        node, depth = q.popleft()\n        if not node.left and not node.right: return depth\n        if node.left: q.append((node.left, depth + 1))\n        if node.right: q.append((node.right, depth + 1))",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "DFS traverses entire subtrees before discovering if a shallow leaf exists on another branch. BFS explores level-by-level: the very first leaf node popped from the queue is guaranteed to be at the minimum depth, allowing early termination without visiting the rest of the tree.",
    "edgeCasesAndBreakPoints": [
      "Root has only one child: the missing child is NOT a leaf; minimum depth must reach an actual leaf node.",
      "Single node tree: returns 1 immediately.",
      "Empty tree: returns 0.",
      "Unbalanced tree: BFS stops at earliest leaf without descending deep branches."
    ],
    "simConfig": {
      "type": "tree",
      "inputDisplay": "root = [3, 9, 20, null, null, 15, 7]",
      "array": [
        "Root 3",
        "Leaf 9 (depth 2)",
        "Node 20 (depth 2) -> 15, 7"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "depth": 1,
            "queue": "[3]"
          },
          "msg": "Start BFS at root 3 (depth 1)."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "node": 9,
            "isLeaf": true,
            "depth": 2
          },
          "msg": "Pop node 9: both left and right are None (leaf!). Depth = 2."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "minDepth": 2
          },
          "msg": "First leaf found at depth 2. Early return 2 without visiting node 20's children! Complete!"
        }
      ]
    }
  },
  {
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "pattern": "Breadth First Search — BFS",
    "short": "BFS",
    "intro": "Explore level by level; in unweighted graphs, the first reached level is the shortest distance.",
    "thinking": "What does one level represent, and when should a node become visited?",
    "steps": [
      "Restate **Binary Tree Level Order Traversal** as a state/decision problem before writing code.",
      "Use the core Breadth First Search — BFS invariant: what does one level represent, and when should a node become visited?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start level",
      "Queue",
      "Process level",
      "Next level",
      "Answer"
    ],
    "description": "<p>Given the <code>root</code> of a binary tree, return <em>the level order traversal of its nodes&#39; values</em>. (i.e., from left to right, level by level).</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg\" style=\"width: 277px; height: 302px;\" />\n<pre>\n<strong>Input:</strong> root = [3,9,20,null,null,15,7]\n<strong>Output:</strong> [[3],[9,20],[15,7]]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = [1]\n<strong>Output:</strong> [[1]]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = []\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li>\n\t<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef levelOrder(root) -> list[list[int]]:\n    if not root: return []\n    q, ans = deque([root]), []\n    while q:\n        level = []\n        for _ in range(len(q)):\n            n = q.popleft()\n            level.append(n.val)\n            if n.left: q.append(n.left)\n            if n.right: q.append(n.right)\n        ans.append(level)\n    return ans",
    "codeLines": 14,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "DFS requires passing a depth index and appending to nested lists. BFS processes nodes naturally layer-by-layer in O(N) time with O(W) queue space.",
    "edgeCasesAndBreakPoints": [
      "Empty tree: returns [].",
      "Single node: returns [[root.val]].",
      "All nodes on left branch: each level contains 1 element.",
      "Complete binary tree: maximum queue width is N / 2."
    ],
    "simConfig": {
      "type": "bfs",
      "inputDisplay": "root = [1, 2, 3, 4, 5]",
      "array": [
        "Level 0: [1]",
        "Level 1: [2, 3]",
        "Level 2: [4, 5]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "level 0": "[1]"
          },
          "msg": "Level 0: [1]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "level 1": "[2, 3]"
          },
          "msg": "Level 1: [2, 3]."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "level 2": "[4, 5]"
          },
          "msg": "Level 2: [4, 5]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Rotting Oranges",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/rotting-oranges/",
    "pattern": "Breadth First Search — BFS",
    "short": "BFS",
    "intro": "Explore level by level; in unweighted graphs, the first reached level is the shortest distance.",
    "thinking": "What does one level represent, and when should a node become visited?",
    "steps": [
      "Restate **Rotting Oranges** as a state/decision problem before writing code.",
      "Use the core Breadth First Search — BFS invariant: what does one level represent, and when should a node become visited?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start level",
      "Queue",
      "Process level",
      "Next level",
      "Answer"
    ],
    "description": "<p>You are given an <code>m x n</code> <code>grid</code> where each cell can have one of three values:</p>\n\n<ul>\n\t<li><code>0</code> representing an empty cell,</li>\n\t<li><code>1</code> representing a fresh orange, or</li>\n\t<li><code>2</code> representing a rotten orange.</li>\n</ul>\n\n<p>Every minute, any fresh orange that is <strong>4-directionally adjacent</strong> to a rotten orange becomes rotten.</p>\n\n<p>Return <em>the minimum number of minutes that must elapse until no cell has a fresh orange</em>. If <em>this is impossible, return</em> <code>-1</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2019/02/16/oranges.png\" style=\"width: 650px; height: 137px;\" />\n<pre>\n<strong>Input:</strong> grid = [[2,1,1],[1,1,0],[0,1,1]]\n<strong>Output:</strong> 4\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [[2,1,1],[0,1,1],[1,0,1]]\n<strong>Output:</strong> -1\n<strong>Explanation:</strong> The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [[0,2]]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> Since there are already no fresh oranges at minute 0, the answer is just 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == grid.length</code></li>\n\t<li><code>n == grid[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 10</code></li>\n\t<li><code>grid[i][j]</code> is <code>0</code>, <code>1</code>, or <code>2</code>.</li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef orangesRotting(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    q, fresh = deque(), 0\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 2: q.append((r, c))\n            elif grid[r][c] == 1: fresh += 1\n    mins = 0\n    while q and fresh:\n        mins += 1\n        for _ in range(len(q)):\n            r, c = q.popleft()\n            for dr, dc in ((-1,0),(1,0),(0,-1),(0,1)):\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2; fresh -= 1\n                    q.append((nr, nc))\n    return mins if fresh == 0 else -1",
    "codeLines": 20,
    "timeComplexity": "O(R * C)",
    "spaceComplexity": "O(R * C)",
    "whyBetterThanBruteForce": "Multi-source BFS starts decay simultaneously across all initial sources, simulating infection spreading in linear time O(R * C) without rescanning unaffected cells.",
    "edgeCasesAndBreakPoints": [
      "No fresh oranges: returns 0.",
      "Fresh oranges unreachable: returns -1.",
      "Multiple separated rotten clusters: decay expands in parallel.",
      "1x1 grid with 0: returns 0."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "grid = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]",
      "array": [
        "[2, 1, 1]",
        "[0, 1, 1]",
        "[1, 0, 1]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "min": 0,
            "fresh": 6
          },
          "msg": "Start with 1 rotten orange at (0,0)."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "min": 1,
            "fresh": 5
          },
          "msg": "Minute 1: spreads to (0,1)."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "min": 4,
            "fresh": 1,
            "blocked": true
          },
          "msg": "Rot spreads but orange at (2,0) is blocked by 0s. fresh > 0 -> returns -1!"
        }
      ]
    }
  },
  {
    "title": "Word Ladder",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/word-ladder/",
    "pattern": "Breadth First Search — BFS",
    "short": "BFS",
    "intro": "Explore level by level; in unweighted graphs, the first reached level is the shortest distance.",
    "thinking": "What does one level represent, and when should a node become visited?",
    "steps": [
      "Restate **Word Ladder** as a state/decision problem before writing code.",
      "Use the core Breadth First Search — BFS invariant: what does one level represent, and when should a node become visited?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Start level",
      "Queue",
      "Process level",
      "Next level",
      "Answer"
    ],
    "description": "<p>A <strong>transformation sequence</strong> from word <code>beginWord</code> to word <code>endWord</code> using a dictionary <code>wordList</code> is a sequence of words <code>beginWord -&gt; s<sub>1</sub> -&gt; s<sub>2</sub> -&gt; ... -&gt; s<sub>k</sub></code> such that:</p>\n\n<ul>\n\t<li>Every adjacent pair of words differs by a single letter.</li>\n\t<li>Every <code>s<sub>i</sub></code> for <code>1 &lt;= i &lt;= k</code> is in <code>wordList</code>. Note that <code>beginWord</code> does not need to be in <code>wordList</code>.</li>\n\t<li><code>s<sub>k</sub> == endWord</code></li>\n</ul>\n\n<p>Given two words, <code>beginWord</code> and <code>endWord</code>, and a dictionary <code>wordList</code>, return <em>the <strong>number of words</strong> in the <strong>shortest transformation sequence</strong> from</em> <code>beginWord</code> <em>to</em> <code>endWord</code><em>, or </em><code>0</code><em> if no such sequence exists.</em></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]\n<strong>Output:</strong> 5\n<strong>Explanation:</strong> One shortest transformation sequence is &quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;dot&quot; -&gt; &quot;dog&quot; -&gt; cog&quot;, which is 5 words long.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> The endWord &quot;cog&quot; is not in wordList, therefore there is no valid transformation sequence.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= beginWord.length &lt;= 10</code></li>\n\t<li><code>endWord.length == beginWord.length</code></li>\n\t<li><code>1 &lt;= wordList.length &lt;= 5000</code></li>\n\t<li><code>wordList[i].length == beginWord.length</code></li>\n\t<li><code>beginWord</code>, <code>endWord</code>, and <code>wordList[i]</code> consist of lowercase English letters.</li>\n\t<li><code>beginWord != endWord</code></li>\n\t<li>All the words in <code>wordList</code> are <strong>unique</strong>.</li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    words = set(wordList)\n    if endWord not in words: return 0\n    q = deque([(beginWord, 1)])\n    while q:\n        word, dist = q.popleft()\n        if word == endWord: return dist\n        for i in range(len(word)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                nxt = word[:i] + c + word[i + 1:]\n                if nxt in words:\n                    words.remove(nxt)\n                    q.append((nxt, dist + 1))\n    return 0",
    "codeLines": 16,
    "timeComplexity": "O(N * L^2)",
    "spaceComplexity": "O(N * L)",
    "whyBetterThanBruteForce": "Comparing every word against every other word to build an adjacency list takes O(N^2 * L) time, which is slow for N up to 5000. Generating 26 * L single-character mutations for each word takes O(26 * L^2) per word. With a hash set for O(1) membership checks, BFS finds the shortest transformation sequence in O(N * L^2) time while removing visited words to prevent cycles.",
    "edgeCasesAndBreakPoints": [
      "endWord not in wordList: transformation impossible, returns 0 immediately.",
      "beginWord and endWord differ by 1 letter: returns 2 on first iteration.",
      "No path connecting beginWord to endWord: queue exhausts, returns 0.",
      "Word length up to 10: 26 * 10 = 260 mutations per word, runs in < 0.1s."
    ],
    "simConfig": {
      "type": "bfs",
      "inputDisplay": "begin = 'hit', end = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
      "array": [
        "hit",
        "hot",
        "dot",
        "lot",
        "dog",
        "log",
        "cog"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "current": "'hit'",
            "dist": 1,
            "queue": "['hit']"
          },
          "msg": "Start BFS at 'hit' with distance 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "current": "'hot'",
            "dist": 2,
            "from": "'hit'"
          },
          "msg": "Mutate 'hit' -> 'hot'. Distance = 2."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "children": "['dot', 'lot']",
            "dist": 3
          },
          "msg": "Mutate 'hot' -> 'dot' and 'lot'. Distance = 3."
        },
        {
          "active": [
            4,
            5
          ],
          "vars": {
            "children": "['dog', 'log']",
            "dist": 4
          },
          "msg": "Mutate 'dot' -> 'dog', 'lot' -> 'log'. Distance = 4."
        },
        {
          "active": [
            6
          ],
          "vars": {
            "current": "'cog'",
            "dist": 5,
            "reached": true
          },
          "msg": "Mutate 'dog' -> 'cog' (endWord reached!). Shortest transformation length = 5. Complete!"
        }
      ]
    }
  },
  {
    "title": "Find Center of Star Graph",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/find-center-of-star-graph/",
    "pattern": "Graphs",
    "short": "Graphs",
    "intro": "Model relationships with nodes and edges, then choose traversal or specialized graph logic from the edge semantics.",
    "thinking": "Is the graph directed/undirected, weighted/unweighted, connected/disconnected?",
    "steps": [
      "Restate **Find Center of Star Graph** as a state/decision problem before writing code.",
      "Use the core Graphs invariant: is the graph directed/undirected, weighted/unweighted, connected/disconnected?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Nodes + edges",
      "Adjacency",
      "Choose algorithm",
      "Visited/state",
      "Answer"
    ],
    "description": "<p>There is an undirected <strong>star</strong> graph consisting of <code>n</code> nodes labeled from <code>1</code> to <code>n</code>. A star graph is a graph where there is one <strong>center</strong> node and <strong>exactly</strong> <code>n - 1</code> edges that connect the center node with every other node.</p>\n\n<p>You are given a 2D integer array <code>edges</code> where each <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>]</code> indicates that there is an edge between the nodes <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code>. Return the center of the given star graph.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/24/star_graph.png\" style=\"width: 331px; height: 321px;\" />\n<pre>\n<strong>Input:</strong> edges = [[1,2],[2,3],[4,2]]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> As shown in the figure above, node 2 is connected to every other node, so 2 is the center.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> edges = [[1,2],[5,1],[1,3],[1,4]]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>3 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>edges.length == n - 1</code></li>\n\t<li><code>edges[i].length == 2</code></li>\n\t<li><code>1 &lt;= u<sub>i,</sub> v<sub>i</sub> &lt;= n</code></li>\n\t<li><code>u<sub>i</sub> != v<sub>i</sub></code></li>\n\t<li>The given <code>edges</code> represent a valid star graph.</li>\n</ul>\n",
    "pythonCode": "def findCenter(edges: list[list[int]]) -> int:\n    return edges[0][0] if edges[0][0] in edges[1] else edges[0][1]",
    "codeLines": 2,
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Counting node degrees across all N edges takes O(N) time and O(N) space. Because a star graph has a single center node connected to every other node, the center MUST appear in both of the first two edges. Comparing edges[0] against edges[1] resolves the center in strict O(1) time and O(1) space.",
    "edgeCasesAndBreakPoints": [
      "Center is first node in edge 0 vs second node: if edges[0][0] in edges[1] branches correctly.",
      "Minimum star graph (3 nodes, 2 edges): verified in 1 check.",
      "Arbitrary 10^5 node star graph: runs in < 1 microsecond.",
      "No full graph traversal required."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "edges = [[1, 2], [2, 3], [4, 2]]",
      "array": [
        "Edge 0: [1, 2]",
        "Edge 1: [2, 3]"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "edge0": "[1, 2]",
            "edge1": "[2, 3]",
            "common": 2
          },
          "msg": "Compare edge 0 [1, 2] and edge 1 [2, 3]: node 2 appears in both!"
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "center": 2
          },
          "msg": "Node 2 is the center of the star graph. Strict O(1) resolution. Complete!"
        }
      ]
    }
  },
  {
    "title": "Clone Graph",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/clone-graph/",
    "pattern": "Graphs",
    "short": "Graphs",
    "intro": "Model relationships with nodes and edges, then choose traversal or specialized graph logic from the edge semantics.",
    "thinking": "Is the graph directed/undirected, weighted/unweighted, connected/disconnected?",
    "steps": [
      "Restate **Clone Graph** as a state/decision problem before writing code.",
      "Use the core Graphs invariant: is the graph directed/undirected, weighted/unweighted, connected/disconnected?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Nodes + edges",
      "Adjacency",
      "Choose algorithm",
      "Visited/state",
      "Answer"
    ],
    "description": "<p>Given a reference of a node in a <strong><a href=\"https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph\" target=\"_blank\">connected</a></strong> undirected graph.</p>\n\n<p>Return a <a href=\"https://en.wikipedia.org/wiki/Object_copying#Deep_copy\" target=\"_blank\"><strong>deep copy</strong></a> (clone) of the graph.</p>\n\n<p>Each node in the graph contains a value (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.</p>\n\n<pre>\nclass Node {\n    public int val;\n    public List&lt;Node&gt; neighbors;\n}\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>Test case format:</strong></p>\n\n<p>For simplicity, each node&#39;s value is the same as the node&#39;s index (1-indexed). For example, the first node with <code>val == 1</code>, the second node with <code>val == 2</code>, and so on. The graph is represented in the test case using an adjacency list.</p>\n\n<p><b>An adjacency list</b> is a collection of unordered <b>lists</b> used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.</p>\n\n<p>The given node will always be the first node with <code>val = 1</code>. You must return the <strong>copy of the given node</strong> as a reference to the cloned graph.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png\" style=\"width: 454px; height: 500px;\" />\n<pre>\n<strong>Input:</strong> adjList = [[2,4],[1,3],[2,4],[1,3]]\n<strong>Output:</strong> [[2,4],[1,3],[2,4],[1,3]]\n<strong>Explanation:</strong> There are 4 nodes in the graph.\n1st node (val = 1)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n2nd node (val = 2)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n3rd node (val = 3)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n4th node (val = 4)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/01/07/graph.png\" style=\"width: 163px; height: 148px;\" />\n<pre>\n<strong>Input:</strong> adjList = [[]]\n<strong>Output:</strong> [[]]\n<strong>Explanation:</strong> Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> adjList = []\n<strong>Output:</strong> []\n<strong>Explanation:</strong> This an empty graph, it does not have any nodes.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the graph is in the range <code>[0, 100]</code>.</li>\n\t<li><code>1 &lt;= Node.val &lt;= 100</code></li>\n\t<li><code>Node.val</code> is unique for each node.</li>\n\t<li>There are no repeated edges and no self-loops in the graph.</li>\n\t<li>The Graph is connected and all nodes can be visited starting from the given node.</li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef cloneGraph(node):\n    if not node: return None\n    clones = {node: Node(node.val)}\n    q = deque([node])\n    while q:\n        cur = q.popleft()\n        for neighbor in cur.neighbors:\n            if neighbor not in clones:\n                clones[neighbor] = Node(neighbor.val)\n                q.append(neighbor)\n            clones[cur].neighbors.append(clones[neighbor])\n    return clones[node]",
    "codeLines": 14,
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V)",
    "whyBetterThanBruteForce": "Iterative BFS using a hashmap creates and links clones level-by-level without recursion depth limits, traversing each vertex and edge once in O(V + E) time.",
    "edgeCasesAndBreakPoints": [
      "Empty graph: returns None.",
      "Graph with cycles: visited check in clones hashmap avoids re-enqueueing.",
      "Disconnected graphs: clones the connected component.",
      "Self-loops: clones[cur].neighbors.append(clones[cur]) handled cleanly."
    ],
    "simConfig": {
      "type": "bfs",
      "inputDisplay": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
      "array": [
        "1",
        "2",
        "3",
        "4"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "q": "[1]",
            "cloned": "{1: 1'}"
          },
          "msg": "Clone root node 1. Enqueue 1."
        },
        {
          "active": [
            1,
            3
          ],
          "vars": {
            "q": "[2, 4]",
            "cloned": "{1: 1', 2: 2', 4: 4'}"
          },
          "msg": "Clone neighbors 2 and 4. Link 1' -> 2', 1' -> 4'."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "q": "[3]",
            "cloned": "{... 3: 3'}"
          },
          "msg": "Clone node 3. Link all remaining edges."
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "complete": true
          },
          "msg": "Full graph deep copied iteratively. Complete!"
        }
      ]
    }
  },
  {
    "title": "Number of Provinces",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/number-of-provinces/",
    "pattern": "Graphs",
    "short": "Graphs",
    "intro": "Model relationships with nodes and edges, then choose traversal or specialized graph logic from the edge semantics.",
    "thinking": "Is the graph directed/undirected, weighted/unweighted, connected/disconnected?",
    "steps": [
      "Restate **Number of Provinces** as a state/decision problem before writing code.",
      "Use the core Graphs invariant: is the graph directed/undirected, weighted/unweighted, connected/disconnected?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Nodes + edges",
      "Adjacency",
      "Choose algorithm",
      "Visited/state",
      "Answer"
    ],
    "description": "<p>There are <code>n</code> cities. Some of them are connected, while some are not. If city <code>a</code> is connected directly with city <code>b</code>, and city <code>b</code> is connected directly with city <code>c</code>, then city <code>a</code> is connected indirectly with city <code>c</code>.</p>\n\n<p>A <strong>province</strong> is a group of directly or indirectly connected cities and no other cities outside of the group.</p>\n\n<p>You are given an <code>n x n</code> matrix <code>isConnected</code> where <code>isConnected[i][j] = 1</code> if the <code>i<sup>th</sup></code> city and the <code>j<sup>th</sup></code> city are directly connected, and <code>isConnected[i][j] = 0</code> otherwise.</p>\n\n<p>Return <em>the total number of <strong>provinces</strong></em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg\" style=\"width: 222px; height: 142px;\" />\n<pre>\n<strong>Input:</strong> isConnected = [[1,1,0],[1,1,0],[0,0,1]]\n<strong>Output:</strong> 2\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg\" style=\"width: 222px; height: 142px;\" />\n<pre>\n<strong>Input:</strong> isConnected = [[1,0,0],[0,1,0],[0,0,1]]\n<strong>Output:</strong> 3\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 200</code></li>\n\t<li><code>n == isConnected.length</code></li>\n\t<li><code>n == isConnected[i].length</code></li>\n\t<li><code>isConnected[i][j]</code> is <code>1</code> or <code>0</code>.</li>\n\t<li><code>isConnected[i][i] == 1</code></li>\n\t<li><code>isConnected[i][j] == isConnected[j][i]</code></li>\n</ul>\n",
    "pythonCode": "def findCircleNum(isConnected: list[list[int]]) -> int:\n    n, ans = len(isConnected), 0\n    visited = set()\n    def dfs(i):\n        for j in range(n):\n            if isConnected[i][j] and j not in visited:\n                visited.add(j); dfs(j)\n    for i in range(n):\n        if i not in visited:\n            visited.add(i); dfs(i); ans += 1\n    return ans",
    "codeLines": 11,
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Checking all paths takes exponential time. Finding connected components with DFS visits each city once: each connected cluster of friends is marked visited, incrementing province count in O(N^2) time with O(N) memory.",
    "edgeCasesAndBreakPoints": [
      "All cities connected into one giant network: returns 1.",
      "All cities isolated (identity matrix): returns N.",
      "Disconnected pairs: counted accurately.",
      "N = 1: returns 1."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
      "array": [
        "[1, 1, 0]",
        "[1, 1, 0]",
        "[0, 0, 1]"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "province 1": "Cities {0, 1}"
          },
          "msg": "City 0 is connected to City 1. Mark both visited. Province 1 found."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "province 2": "City {2}"
          },
          "msg": "City 2 is isolated. Mark visited. Province 2 found."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "totalProvinces": 2
          },
          "msg": "Total provinces = 2. Complete!"
        }
      ]
    }
  },
  {
    "title": "Critical Connections in a Network",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/critical-connections-in-a-network/",
    "pattern": "Graphs",
    "short": "Graphs",
    "intro": "Model relationships with nodes and edges, then choose traversal or specialized graph logic from the edge semantics.",
    "thinking": "Is the graph directed/undirected, weighted/unweighted, connected/disconnected?",
    "steps": [
      "Restate **Critical Connections in a Network** as a state/decision problem before writing code.",
      "Use the core Graphs invariant: is the graph directed/undirected, weighted/unweighted, connected/disconnected?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Nodes + edges",
      "Adjacency",
      "Choose algorithm",
      "Visited/state",
      "Answer"
    ],
    "description": "<p>There are <code>n</code> servers numbered from <code>0</code> to <code>n - 1</code> connected by undirected server-to-server <code>connections</code> forming a network where <code>connections[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> represents a connection between servers <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code>. Any server can reach other servers directly or indirectly through the network.</p>\n\n<p>A <em>critical connection</em> is a connection that, if removed, will make some servers unable to reach some other server.</p>\n\n<p>Return all critical connections in the network in any order.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2019/09/03/1537_ex1_2.png\" style=\"width: 198px; height: 248px;\" />\n<pre>\n<strong>Input:</strong> n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]\n<strong>Output:</strong> [[1,3]]\n<strong>Explanation:</strong> [[3,1]] is also accepted.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 2, connections = [[0,1]]\n<strong>Output:</strong> [[0,1]]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>n - 1 &lt;= connections.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt;= n - 1</code></li>\n\t<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>\n\t<li>There are no repeated connections.</li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict\n\ndef criticalConnections(n: int, connections: list[list[int]]) -> list[list[int]]:\n    graph = defaultdict(list)\n    for u, v in connections:\n        graph[u].append(v); graph[v].append(u)\n    ranks, ans = [-2] * n, []\n    def dfs(node, depth, parent):\n        ranks[node] = depth\n        min_depth = depth\n        for neighbor in graph[node]:\n            if neighbor == parent: continue\n            if ranks[neighbor] != -2:\n                min_depth = min(min_depth, ranks[neighbor])\n            else:\n                child_min = dfs(neighbor, depth + 1, node)\n                if child_min > depth:\n                    ans.append([node, neighbor])\n                min_depth = min(min_depth, child_min)\n        return min_depth\n    dfs(0, 0, -1)\n    return ans",
    "codeLines": 22,
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "whyBetterThanBruteForce": "Removing each of the E edges and running BFS/DFS to check graph connectivity takes O(E * (V + E)) time, which exceeds 10^10 operations for N, E = 10^5. Tarjan's Bridge-Finding Algorithm computes discovery ranks and low-link values in a single DFS pass: edge (u, v) is critical if and only if low[v] > rank[u] (no back-edge to an ancestor), reducing time to O(V + E).",
    "edgeCasesAndBreakPoints": [
      "Network is a simple cycle: no bridges exist, returns [].",
      "Network is a tree: every single edge is a bridge; returns all connections.",
      "Multiple back-edges: low-link value correctly updates to the minimum ancestor rank.",
      "Large connected graph (10^5 nodes): recursion traverses each edge exactly once."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
      "array": [
        "0-1",
        "1-2",
        "2-0",
        "1-3"
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "cycle": "0 - 1 - 2 - 0",
            "low": "0"
          },
          "msg": "DFS traverses cycle 0 -> 1 -> 2 -> 0. Back-edge (2,0) sets low[2]=0, low[1]=0. None of these are bridges."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "treeEdge": "1 - 3",
            "low[3]": 3,
            "rank[1]": 1
          },
          "msg": "DFS visits leaf 3 from 1: low[3] = 3 > rank[1] = 1. No back-edge from 3 to ancestors!"
        },
        {
          "active": [
            3
          ],
          "vars": {
            "bridge": "[1, 3]"
          },
          "msg": "Edge [1, 3] is a critical connection (bridge). Output: [[1, 3]]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Assign Cookies",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/assign-cookies/",
    "pattern": "Greedy",
    "short": "Greedy",
    "intro": "Make a locally optimal choice only when an invariant or exchange argument makes that choice safe.",
    "thinking": "Why is the locally best choice safe for the global answer?",
    "steps": [
      "Restate **Assign Cookies** as a state/decision problem before writing code.",
      "Use the core Greedy invariant: why is the locally best choice safe for the global answer?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidates",
      "Local choice",
      "Proof/invariant",
      "Commit",
      "Continue"
    ],
    "description": "<p>Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.</p>\n\n<p>Each child <code>i</code> has a greed factor <code>g[i]</code>, which is the minimum size of a cookie that the child will be content with; and each cookie <code>j</code> has a size <code>s[j]</code>. If <code>s[j] &gt;= g[i]</code>, we can assign the cookie <code>j</code> to the child <code>i</code>, and the child <code>i</code> will be content. Your goal is to maximize the number of your content children and output the maximum number.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> g = [1,2,3], s = [1,1]\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. \nAnd even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.\nYou need to output 1.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> g = [1,2], s = [1,2,3]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. \nYou have 3 cookies and their sizes are big enough to gratify all of the children, \nYou need to output 2.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= g.length &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= g[i], s[j] &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Note:</strong> This question is the same as <a href=\"https://leetcode.com/problems/maximum-matching-of-players-with-trainers/description/\" target=\"_blank\"> 2410: Maximum Matching of Players With Trainers.</a></p>\n",
    "pythonCode": "def findContentChildren(g: list[int], s: list[int]) -> int:\n    g.sort(); s.sort()\n    i = j = 0\n    while i < len(g) and j < len(s):\n        if s[j] >= g[i]: i += 1\n        j += 1\n    return i",
    "codeLines": 7,
    "timeComplexity": "O(N log N + M log M)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Trying all assignments of cookies to children takes exponential time. Greedily sorting both children by greed factor and cookies by size ensures we satisfy each child with the smallest possible cookie that meets their need, maximizing total content children in O(N log N + M log M) time and O(1) space.",
    "edgeCasesAndBreakPoints": [
      "No cookies available (s is empty): returns 0.",
      "No children: returns 0.",
      "Cookies smaller than all children's greed: loop advances j without advancing i, returns 0.",
      "More cookies than children: terminates when all children satisfied."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "g = [1, 2, 3], s = [1, 1]",
      "array": [
        "Children: [1, 2, 3]",
        "Cookies: [1, 1]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "child": "g[0]=1",
            "cookie": "s[0]=1",
            "match": true
          },
          "msg": "Cookie s[0]=1 satisfies child g[0]=1! i=1, j=1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "child": "g[1]=2",
            "cookie": "s[1]=1",
            "match": false
          },
          "msg": "Cookie s[1]=1 < g[1]=2. Child cannot be satisfied. j=2."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "contentChildren": 1
          },
          "msg": "Cookies exhausted. Total content children = 1. Complete!"
        }
      ]
    }
  },
  {
    "title": "Jump Game",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/jump-game/",
    "pattern": "Greedy",
    "short": "Greedy",
    "intro": "Make a locally optimal choice only when an invariant or exchange argument makes that choice safe.",
    "thinking": "Why is the locally best choice safe for the global answer?",
    "steps": [
      "Restate **Jump Game** as a state/decision problem before writing code.",
      "Use the core Greedy invariant: why is the locally best choice safe for the global answer?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidates",
      "Local choice",
      "Proof/invariant",
      "Commit",
      "Continue"
    ],
    "description": "<p>You are given an integer array <code>nums</code>. You are initially positioned at the array&#39;s <strong>first index</strong>, and each element in the array represents your maximum jump length at that position.</p>\n\n<p>Return <code>true</code><em> if you can reach the last index, or </em><code>false</code><em> otherwise</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,3,1,1,4]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> Jump 1 step from index 0 to 1, then 3 steps to the last index.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,1,0,4]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>\n</ul>\n",
    "pythonCode": "def canJump(nums: list[int]) -> bool:\n    reach = 0\n    for i, x in enumerate(nums):\n        if i > reach: return False\n        reach = max(reach, i + x)\n    return True",
    "codeLines": 6,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Backtracking all jump paths takes exponential O(2^N) time. Greedily tracking the farthest reachable index reach = max(reach, i + nums[i]) allows testing whether index i is reachable in O(1): if i > reach, we can never cross the gap, returning False in O(N) time and O(1) space.",
    "edgeCasesAndBreakPoints": [
      "Single element array [0]: index 0 is start and end; returns True immediately.",
      "Array with zeros: if zeros create an impassable wall (i > reach), returns False.",
      "Large jump values: reach extends past len(nums) - 1, returns True.",
      "Can reach last index exactly: returns True."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [2, 3, 1, 1, 4]",
      "array": [
        2,
        3,
        1,
        1,
        4
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "val": 2,
            "reach": "0 + 2 = 2"
          },
          "msg": "i=0 (jump 2): reach becomes 2."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "val": 3,
            "reach": "max(2, 1 + 3) = 4"
          },
          "msg": "i=1 (jump 3): reach becomes 4 (can reach end!)."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "reach": 4,
            "target": 4,
            "canReach": true
          },
          "msg": "Target reached! Return True."
        }
      ]
    }
  },
  {
    "title": "Gas Station",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/gas-station/",
    "pattern": "Greedy",
    "short": "Greedy",
    "intro": "Make a locally optimal choice only when an invariant or exchange argument makes that choice safe.",
    "thinking": "Why is the locally best choice safe for the global answer?",
    "steps": [
      "Restate **Gas Station** as a state/decision problem before writing code.",
      "Use the core Greedy invariant: why is the locally best choice safe for the global answer?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidates",
      "Local choice",
      "Proof/invariant",
      "Commit",
      "Continue"
    ],
    "description": "<p>There are <code>n</code> gas stations along a circular route, where the amount of gas at the <code>i<sup>th</sup></code> station is <code>gas[i]</code>.</p>\n\n<p>You have a car with an unlimited gas tank and it costs <code>cost[i]</code> of gas to travel from the <code>i<sup>th</sup></code> station to its next <code>(i + 1)<sup>th</sup></code> station. You begin the journey with an empty tank at one of the gas stations.</p>\n\n<p>Given two integer arrays <code>gas</code> and <code>cost</code>, return <em>the starting gas station&#39;s index if you can travel around the circuit once in the clockwise direction, otherwise return</em> <code>-1</code>. If there exists a solution, it is <strong>guaranteed</strong> to be <strong>unique</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> gas = [1,2,3,4,5], cost = [3,4,5,1,2]\n<strong>Output:</strong> 3\n<strong>Explanation:</strong>\nStart at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 4. Your tank = 4 - 1 + 5 = 8\nTravel to station 0. Your tank = 8 - 2 + 1 = 7\nTravel to station 1. Your tank = 7 - 3 + 2 = 6\nTravel to station 2. Your tank = 6 - 4 + 3 = 5\nTravel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.\nTherefore, return 3 as the starting index.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> gas = [2,3,4], cost = [3,4,3]\n<strong>Output:</strong> -1\n<strong>Explanation:</strong>\nYou can&#39;t start at station 0 or 1, as there is not enough gas to travel to the next station.\nLet&#39;s start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 0. Your tank = 4 - 3 + 2 = 3\nTravel to station 1. Your tank = 3 - 3 + 3 = 3\nYou cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.\nTherefore, you can&#39;t travel around the circuit once no matter where you start.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == gas.length == cost.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= gas[i], cost[i] &lt;= 10<sup>4</sup></code></li>\n\t<li>The input is generated such that the answer is unique.</li>\n</ul>\n",
    "pythonCode": "def canCompleteCircuit(gas: list[int], cost: list[int]) -> int:\n    if sum(gas) < sum(cost): return -1\n    total, start = 0, 0\n    for i in range(len(gas)):\n        total += gas[i] - cost[i]\n        if total < 0:\n            start = i + 1; total = 0\n    return start",
    "codeLines": 8,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Simulating the circular journey from each starting station takes O(N^2) time. If total gas < total cost, completion is impossible. Otherwise, if starting from station A runs out of fuel at station B, no station between A and B can reach B either. Thus, the next possible start station must be B + 1, finding the unique valid start station in a single O(N) pass.",
    "edgeCasesAndBreakPoints": [
      "sum(gas) < sum(cost): returns -1 immediately.",
      "Single station with gas >= cost: returns 0.",
      "Valid start station is the very last station: start updates to n - 1.",
      "All stations have gas == cost: returns 0."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]",
      "array": [
        "1-3=-2",
        "2-4=-2",
        "3-5=-2",
        "4-1=+3",
        "5-2=+3"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "net": -2,
            "tank": -2,
            "start": 1
          },
          "msg": "Start at 0: tank < 0. Station 0 cannot be start. Next start candidate = 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "net": -2,
            "tank": -2,
            "start": 2
          },
          "msg": "Start at 1: tank < 0. Next candidate = 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "i": 2,
            "net": -2,
            "tank": -2,
            "start": 3
          },
          "msg": "Start at 2: tank < 0. Next candidate = 3."
        },
        {
          "active": [
            3,
            4
          ],
          "vars": {
            "start": 3,
            "tank": "+3 + 3 = +6"
          },
          "msg": "Start at 3: net fuel stays positive throughout. Valid start index is 3. Complete!"
        }
      ]
    }
  },
  {
    "title": "Candy",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/candy/",
    "pattern": "Greedy",
    "short": "Greedy",
    "intro": "Make a locally optimal choice only when an invariant or exchange argument makes that choice safe.",
    "thinking": "Why is the locally best choice safe for the global answer?",
    "steps": [
      "Restate **Candy** as a state/decision problem before writing code.",
      "Use the core Greedy invariant: why is the locally best choice safe for the global answer?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Candidates",
      "Local choice",
      "Proof/invariant",
      "Commit",
      "Continue"
    ],
    "description": "<p>There are <code>n</code> children standing in a line.</p>\n\n<p>Each child is assigned a rating value given in the integer array <code>ratings</code>.</p>\n\n<p>You are giving candies to these children subjected to the following requirements:</p>\n\n<ul>\n\t<li>Each child must have <strong>at least</strong> one candy.</li>\n\t<li>Children with a <strong>higher</strong> rating get more candies than their neighbors.</li>\n</ul>\n\n<p>Return the <strong>minimum</strong> number of candies you need to have to distribute the candies to the children.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> ratings = [1,0,2]\n<strong>Output:</strong> 5\n<strong>Explanation:</strong> You can allocate to the first, second and third child with 2, 1, 2 candies respectively.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> ratings = [1,2,2]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> You can allocate to the first, second and third child with 1, 2, 1 candies respectively.\nThe third child gets 1 candy because it satisfies the above two conditions.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n == ratings.length &lt;= 5 * 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= ratings[i] &lt;= 5 * 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "def candy(ratings: list[int]) -> int:\n    n = len(ratings)\n    candies = [1] * n\n    for i in range(1, n):\n        if ratings[i] > ratings[i - 1]:\n            candies[i] = candies[i - 1] + 1\n    for i in range(n - 2, -1, -1):\n        if ratings[i] > ratings[i + 1]:\n            candies[i] = max(candies[i], candies[i + 1] + 1)\n    return sum(candies)",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Simulating candy distribution iteratively until all neighbor constraints are satisfied can take O(N^2) propagation rounds. By decomposing the condition into two independent monotonic sweeps: a left-to-right pass ensures ratings[i] > ratings[i-1] receives more candies, and a right-to-left pass ensures ratings[i] > ratings[i+1] receives more. Taking the elementwise max satisfies all conditions in exactly two O(N) passes.",
    "edgeCasesAndBreakPoints": [
      "Single child: returns 1 candy.",
      "Strictly increasing ratings: candies are [1, 2, 3, ...].",
      "Strictly decreasing ratings: right-to-left pass sets candies to [N, N-1, ..., 1].",
      "Equal adjacent ratings: children with equal ratings do not need equal candies (can receive 1)."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "ratings = [1, 0, 2]",
      "array": [
        1,
        0,
        2
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "candies": "[1, 1, 1]"
          },
          "msg": "Initialize each child with 1 candy."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "pass": "Left-to-right",
            "candies": "[1, 1, 2]"
          },
          "msg": "L-to-R: ratings[2]=2 > ratings[1]=0 -> candies[2] = 2."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "pass": "Right-to-left",
            "candies": "[2, 1, 2]"
          },
          "msg": "R-to-L: ratings[0]=1 > ratings[1]=0 -> candies[0] = max(1, 1+1) = 2."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "total": "2 + 1 + 2 = 5"
          },
          "msg": "Both passes complete. Total candies = 5."
        }
      ]
    }
  },
  {
    "title": "Longest Common Prefix",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/longest-common-prefix/",
    "pattern": "Trie",
    "short": "Trie",
    "intro": "Store characters along shared paths so prefix and word operations reuse work.",
    "thinking": "What prefix sharing can eliminate repeated character comparisons?",
    "steps": [
      "Restate **Longest Common Prefix** as a state/decision problem before writing code.",
      "Use the core Trie invariant: what prefix sharing can eliminate repeated character comparisons?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Word",
      "Root",
      "Character edge",
      "Terminal/prefix state",
      "Search"
    ],
    "description": "<p>Write a function to find the longest common prefix string amongst an array of strings.</p>\n\n<p>If there is no common prefix, return an empty string <code>&quot;&quot;</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]\n<strong>Output:</strong> &quot;fl&quot;\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]\n<strong>Output:</strong> &quot;&quot;\n<strong>Explanation:</strong> There is no common prefix among the input strings.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= strs.length &lt;= 200</code></li>\n\t<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>\n\t<li><code>strs[i]</code> consists of only lowercase English letters if it is non-empty.</li>\n</ul>\n",
    "pythonCode": "def longestCommonPrefix(strs: list[str]) -> str:\n    if not strs: return \"\"\n    first, last = min(strs), max(strs)\n    for i, c in enumerate(first):\n        if c != last[i]: return first[:i]\n    return first",
    "codeLines": 6,
    "timeComplexity": "O(S)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Comparing character by character across all N strings takes O(N * L). Sorting or finding the lexicographical min and max strings in O(N * L) means the common prefix of all strings must be the common prefix between the lexicographically smallest and largest strings, reducing the character comparison to just 1 string comparison.",
    "edgeCasesAndBreakPoints": [
      "Empty list strs = []: returns '' immediately.",
      "Single string strs = ['a']: returns 'a'.",
      "No common prefix (e.g. ['dog', 'racecar']): returns ''.",
      "One string is a prefix of another (e.g. ['flow', 'flower']): first[:i] handles string length divergence."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "strs = ['flower', 'flow', 'flight']",
      "array": [
        "'flight' (min)",
        "'flow'",
        "'flower' (max)"
      ],
      "steps": [
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "minStr": "'flight'",
            "maxStr": "'flower'"
          },
          "msg": "Lexicographical min is 'flight', max is 'flower'."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "compare": "'f' == 'f', 'l' == 'l'",
            "mismatch": "'i' != 'o'"
          },
          "msg": "Compare characters: 'f' matches, 'l' matches, 'i' != 'o' mismatches at index 2."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "prefix": "'fl'"
          },
          "msg": "Longest common prefix is 'fl'. Complete!"
        }
      ]
    }
  },
  {
    "title": "Implement Trie (Prefix Tree)",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "pattern": "Trie",
    "short": "Trie",
    "intro": "Store characters along shared paths so prefix and word operations reuse work.",
    "thinking": "What prefix sharing can eliminate repeated character comparisons?",
    "steps": [
      "Restate **Implement Trie (Prefix Tree)** as a state/decision problem before writing code.",
      "Use the core Trie invariant: what prefix sharing can eliminate repeated character comparisons?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Word",
      "Root",
      "Character edge",
      "Terminal/prefix state",
      "Search"
    ],
    "description": "<p>A <a href=\"https://en.wikipedia.org/wiki/Trie\" target=\"_blank\"><strong>trie</strong></a> (pronounced as &quot;try&quot;) or <strong>prefix tree</strong> is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.</p>\n\n<p>Implement the Trie class:</p>\n\n<ul>\n\t<li><code>Trie()</code> Initializes the trie object.</li>\n\t<li><code>void insert(String word)</code> Inserts the string <code>word</code> into the trie.</li>\n\t<li><code>boolean search(String word)</code> Returns <code>true</code> if the string <code>word</code> is in the trie (i.e., was inserted before), and <code>false</code> otherwise.</li>\n\t<li><code>boolean startsWith(String prefix)</code> Returns <code>true</code> if there is a previously inserted string <code>word</code> that has the prefix <code>prefix</code>, and <code>false</code> otherwise.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;Trie&quot;, &quot;insert&quot;, &quot;search&quot;, &quot;search&quot;, &quot;startsWith&quot;, &quot;insert&quot;, &quot;search&quot;]\n[[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;]]\n<strong>Output</strong>\n[null, null, true, false, true, null, true]\n\n<strong>Explanation</strong>\nTrie trie = new Trie();\ntrie.insert(&quot;apple&quot;);\ntrie.search(&quot;apple&quot;);   // return True\ntrie.search(&quot;app&quot;);     // return False\ntrie.startsWith(&quot;app&quot;); // return True\ntrie.insert(&quot;app&quot;);\ntrie.search(&quot;app&quot;);     // return True\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= word.length, prefix.length &lt;= 2000</code></li>\n\t<li><code>word</code> and <code>prefix</code> consist only of lowercase English letters.</li>\n\t<li>At most <code>3 * 10<sup>4</sup></code> calls <strong>in total</strong> will be made to <code>insert</code>, <code>search</code>, and <code>startsWith</code>.</li>\n</ul>\n",
    "pythonCode": "class Trie:\n    def __init__(self):\n        self.root = {}\n    def insert(self, word: str) -> None:\n        cur = self.root\n        for c in word: cur = cur.setdefault(c, {})\n        cur['$'] = True\n    def search(self, word: str) -> bool:\n        cur = self.root\n        for c in word:\n            if c not in cur: return False\n            cur = cur[c]\n        return '$' in cur\n    def startsWith(self, prefix: str) -> bool:\n        cur = self.root\n        for c in prefix:\n            if c not in cur: return False\n            cur = cur[c]\n        return True",
    "codeLines": 19,
    "timeComplexity": "O(L) for all operations",
    "spaceComplexity": "O(sum(L))",
    "whyBetterThanBruteForce": "Scanning a list of words for a prefix takes O(N * L) per search. A Trie (Prefix Tree) organizes words hierarchically so common prefixes share nodes, searching and inserting in O(L) time where L is the word length.",
    "edgeCasesAndBreakPoints": [
      "Word is a prefix of another word: '$' end-marker distinguishes complete words from prefixes.",
      "Searching for non-existent prefix: terminates early on missing key.",
      "Empty string: root contains '$'.",
      "Case sensitivity: standard lowercase letters."
    ],
    "simConfig": {
      "type": "trie",
      "inputDisplay": "insert('apple'), search('apple')->True, search('app')->False, startsWith('app')->True",
      "array": [
        "Root -> 'a' -> 'p' -> 'p' -> 'l' -> 'e' ($)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "op": "insert('apple')"
          },
          "msg": "insert('apple'): creates chain a -> p -> p -> l -> e ($)."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "op": "search('apple')",
            "result": true
          },
          "msg": "search('apple'): reaches end and finds '$'. Returns True."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "op": "search('app')",
            "result": false
          },
          "msg": "search('app'): reaches 'p' but no '$' marker. Returns False."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "op": "startsWith('app')",
            "result": true
          },
          "msg": "startsWith('app'): prefix path exists. Returns True. Complete!"
        }
      ]
    }
  },
  {
    "title": "Design Add and Search Words Data Structure",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    "pattern": "Trie",
    "short": "Trie",
    "intro": "Store characters along shared paths so prefix and word operations reuse work.",
    "thinking": "What prefix sharing can eliminate repeated character comparisons?",
    "steps": [
      "Restate **Design Add and Search Words Data Structure** as a state/decision problem before writing code.",
      "Use the core Trie invariant: what prefix sharing can eliminate repeated character comparisons?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Word",
      "Root",
      "Character edge",
      "Terminal/prefix state",
      "Search"
    ],
    "description": "<p>Design a data structure that supports adding new words and finding if a string matches any previously added string.</p>\n\n<p>Implement the <code>WordDictionary</code> class:</p>\n\n<ul>\n\t<li><code>WordDictionary()</code>&nbsp;Initializes the object.</li>\n\t<li><code>void addWord(word)</code> Adds <code>word</code> to the data structure, it can be matched later.</li>\n\t<li><code>bool search(word)</code>&nbsp;Returns <code>true</code> if there is any string in the data structure that matches <code>word</code>&nbsp;or <code>false</code> otherwise. <code>word</code> may contain dots <code>&#39;.&#39;</code> where dots can be matched with any letter.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;WordDictionary&quot;,&quot;addWord&quot;,&quot;addWord&quot;,&quot;addWord&quot;,&quot;search&quot;,&quot;search&quot;,&quot;search&quot;,&quot;search&quot;]\n[[],[&quot;bad&quot;],[&quot;dad&quot;],[&quot;mad&quot;],[&quot;pad&quot;],[&quot;bad&quot;],[&quot;.ad&quot;],[&quot;b..&quot;]]\n<strong>Output</strong>\n[null,null,null,null,false,true,true,true]\n\n<strong>Explanation</strong>\nWordDictionary wordDictionary = new WordDictionary();\nwordDictionary.addWord(&quot;bad&quot;);\nwordDictionary.addWord(&quot;dad&quot;);\nwordDictionary.addWord(&quot;mad&quot;);\nwordDictionary.search(&quot;pad&quot;); // return False\nwordDictionary.search(&quot;bad&quot;); // return True\nwordDictionary.search(&quot;.ad&quot;); // return True\nwordDictionary.search(&quot;b..&quot;); // return True\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= word.length &lt;= 25</code></li>\n\t<li><code>word</code> in <code>addWord</code> consists of lowercase English letters.</li>\n\t<li><code>word</code> in <code>search</code> consist of <code>&#39;.&#39;</code> or lowercase English letters.</li>\n\t<li>There will be at most <code>2</code> dots in <code>word</code> for <code>search</code> queries.</li>\n\t<li>At most <code>10<sup>4</sup></code> calls will be made to <code>addWord</code> and <code>search</code>.</li>\n</ul>\n",
    "pythonCode": "class WordDictionary:\n    def __init__(self):\n        self.root = {}\n    def addWord(self, word: str) -> None:\n        cur = self.root\n        for c in word: cur = cur.setdefault(c, {})\n        cur['$'] = True\n    def search(self, word: str) -> bool:\n        def dfs(node, i):\n            if i == len(word): return '$' in node\n            if word[i] == '.':\n                return any(k != '$' and dfs(node[k], i + 1) for k in node)\n            return word[i] in node and dfs(node[word[i]], i + 1)\n        return dfs(self.root, 0)",
    "codeLines": 14,
    "timeComplexity": "add: O(L), search: O(26^D * L)",
    "spaceComplexity": "O(sum(L))",
    "whyBetterThanBruteForce": "Regex search on a large word list takes O(N * L) per query. A Trie structure allows exact letter lookups in O(L), and when the wildcard '.' is encountered, DFS explores only the active children branches of the Trie node, providing fast matching.",
    "edgeCasesAndBreakPoints": [
      "Word with multiple consecutive '.' wildcards (e.g. '...'): DFS branches across non-terminal keys.",
      "Searching for exact word without dots: runs in O(L).",
      "Word not in dictionary: returns False.",
      "Wildcard matching terminal node '$': excluded by k != '$' check."
    ],
    "simConfig": {
      "type": "trie",
      "inputDisplay": "add('bad'), add('dad'), add('mad'), search('pad')->False, search('.ad')->True",
      "array": [
        "Root -> {b, d, m} -> 'a' -> 'd' ($)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "inserted": "['bad', 'dad', 'mad']"
          },
          "msg": "Insert words: Trie branches at root into 'b', 'd', 'm'."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "search": "'pad'",
            "result": false
          },
          "msg": "search('pad'): 'p' not in root. Returns False."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "search": "'.ad'",
            "wildcard": "matches 'b','d','m'",
            "result": true
          },
          "msg": "search('.ad'): '.' matches 'b', 'a' matches, 'd' matches. Returns True. Complete!"
        }
      ]
    }
  },
  {
    "title": "Word Search II",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/word-search-ii/",
    "pattern": "Trie",
    "short": "Trie",
    "intro": "Store characters along shared paths so prefix and word operations reuse work.",
    "thinking": "What prefix sharing can eliminate repeated character comparisons?",
    "steps": [
      "Restate **Word Search II** as a state/decision problem before writing code.",
      "Use the core Trie invariant: what prefix sharing can eliminate repeated character comparisons?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Word",
      "Root",
      "Character edge",
      "Terminal/prefix state",
      "Search"
    ],
    "description": "<p>Given an <code>m x n</code> <code>board</code>&nbsp;of characters and a list of strings <code>words</code>, return <em>all words on the board</em>.</p>\n\n<p>Each word must be constructed from letters of sequentially adjacent cells, where <strong>adjacent cells</strong> are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/07/search1.jpg\" style=\"width: 322px; height: 322px;\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;o&quot;,&quot;a&quot;,&quot;a&quot;,&quot;n&quot;],[&quot;e&quot;,&quot;t&quot;,&quot;a&quot;,&quot;e&quot;],[&quot;i&quot;,&quot;h&quot;,&quot;k&quot;,&quot;r&quot;],[&quot;i&quot;,&quot;f&quot;,&quot;l&quot;,&quot;v&quot;]], words = [&quot;oath&quot;,&quot;pea&quot;,&quot;eat&quot;,&quot;rain&quot;]\n<strong>Output:</strong> [&quot;eat&quot;,&quot;oath&quot;]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/07/search2.jpg\" style=\"width: 162px; height: 162px;\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;a&quot;,&quot;b&quot;],[&quot;c&quot;,&quot;d&quot;]], words = [&quot;abcb&quot;]\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == board.length</code></li>\n\t<li><code>n == board[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 12</code></li>\n\t<li><code>board[i][j]</code> is a lowercase English letter.</li>\n\t<li><code>1 &lt;= words.length &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= words[i].length &lt;= 10</code></li>\n\t<li><code>words[i]</code> consists of lowercase English letters.</li>\n\t<li>All the strings of <code>words</code> are unique.</li>\n</ul>\n",
    "pythonCode": "def findWords(board: list[list[str]], words: list[str]) -> list[str]:\n    trie = {}\n    for w in words:\n        node = trie\n        for c in w: node = node.setdefault(c, {})\n        node['$'] = w\n    R, C, ans = len(board), len(board[0]), []\n    def dfs(r, c, parent):\n        char = board[r][c]\n        cur = parent[char]\n        if '$' in cur:\n            ans.append(cur.pop('$'))\n        board[r][c] = '#'\n        for dr, dc in ((-1,0),(1,0),(0,-1),(0,1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and board[nr][nc] in cur:\n                dfs(nr, nc, cur)\n        board[r][c] = char\n        if not cur: parent.pop(char)\n    for r in range(R):\n        for c in range(C):\n            if board[r][c] in trie: dfs(r, c, trie)\n    return ans",
    "codeLines": 23,
    "timeComplexity": "O(R * C * 4^L)",
    "spaceComplexity": "O(sum(len(w)))",
    "whyBetterThanBruteForce": "Searching each word independently with Word Search I takes O(W * R * C * 4^L) time. By compiling all target words into a Trie (Prefix Tree), a single DFS from each cell simultaneously searches for all words sharing prefixes. Found words are pruned from the Trie (cur.pop('$')) and empty branch nodes are deleted, preventing redundant searches and achieving dramatic speedups.",
    "edgeCasesAndBreakPoints": [
      "Words sharing common prefixes (e.g. 'oa', 'oath'): trie branches correctly emit both words without duplicate DFS.",
      "Words that cannot be formed: trie lookup terminates DFS in 1 step.",
      "No words found: returns [] cleanly.",
      "Duplicate words in words list: popping '$' ensures each word is added to ans at most once."
    ],
    "simConfig": {
      "type": "trie",
      "inputDisplay": "board = [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], words = ['oath','pea','eat','rain']",
      "array": [
        "[o, a, a, n]",
        "[e, t, a, e]",
        "[i, h, k, r]",
        "[i, f, l, v]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "trie": "Root -> {o, p, e, r}"
          },
          "msg": "Insert words into Trie. DFS begins at board cells matching root letters."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "step": "board(0,0)='o'",
            "path": "'o'"
          },
          "msg": "Start at (0,0) 'o'. Matches Trie root -> 'o'."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "step": "o -> a -> t -> h",
            "found": "'oath'"
          },
          "msg": "Path: (0,0)'o' -> (0,1)'a' -> (1,1)'t' -> (2,1)'h'. Reaches leaf '$'='oath'! Add to results."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "step": "board(1,0)='e'",
            "found": "'eat'"
          },
          "msg": "Path: (1,0)'e' -> (1,2)'a' -> (1,1)'t'. Found 'eat'!"
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "results": "['oath', 'eat']"
          },
          "msg": "Search complete. Output: ['oath', 'eat']."
        }
      ]
    }
  },
  {
    "title": "Course Schedule",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/course-schedule/",
    "pattern": "Topological Sort",
    "short": "Topological Sort",
    "intro": "Order dependency nodes so prerequisites come before dependents; indegrees and a queue provide Kahn's algorithm.",
    "thinking": "What nodes currently have no unmet prerequisites, and how do I detect a cycle?",
    "steps": [
      "Restate **Course Schedule** as a state/decision problem before writing code.",
      "Use the core Topological Sort invariant: what nodes currently have no unmet prerequisites, and how do i detect a cycle?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Dependencies",
      "Indegree",
      "Zero-indegree queue",
      "Remove node",
      "Decrease neighbors"
    ],
    "description": "<p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you <strong>must</strong> take course <code>b<sub>i</sub></code> first if you want to take course <code>a<sub>i</sub></code>.</p>\n\n<ul>\n\t<li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li>\n</ul>\n\n<p>Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0]]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0. So it is possible.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0],[0,1]]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= numCourses &lt;= 2000</code></li>\n\t<li><code>0 &lt;= prerequisites.length &lt;= 5000</code></li>\n\t<li><code>prerequisites[i].length == 2</code></li>\n\t<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; numCourses</code></li>\n\t<li>All the pairs prerequisites[i] are <strong>unique</strong>.</li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict, deque\n\ndef canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    graph, indeg = defaultdict(list), [0] * numCourses\n    for u, v in prerequisites:\n        graph[v].append(u); indeg[u] += 1\n    q = deque(i for i in range(numCourses) if indeg[i] == 0)\n    taken = 0\n    while q:\n        u = q.popleft(); taken += 1\n        for v in graph[u]:\n            indeg[v] -= 1\n            if indeg[v] == 0: q.append(v)\n    return taken == numCourses",
    "codeLines": 14,
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "whyBetterThanBruteForce": "Searching all paths takes exponential time and loops indefinitely on cycles. Topological sort with Kahn's algorithm processes courses with 0 prerequisites in a queue. If any directed cycle exists, courses involved will never reach indegree 0, detecting deadlock in linear O(V + E) time.",
    "edgeCasesAndBreakPoints": [
      "Direct 2-node cycle [0, 1] and [1, 0]: taken stays 0, returns False.",
      "No prerequisites: all courses have indegree 0, returns True immediately.",
      "Self-loop [0, 0]: indegree never hits 0, returns False.",
      "Disconnected DAG: processes all components smoothly."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "numCourses = 2, prerequisites = [[1, 0]]",
      "array": [
        "Course 0 (indeg 0)",
        "Course 1 (indeg 1)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "queue": "[0]",
            "taken": 1
          },
          "msg": "Course 0 has 0 prerequisites. Take course 0. Decrement Course 1 indegree."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "queue": "[1]",
            "taken": 2
          },
          "msg": "Course 1 indegree becomes 0. Take course 1."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "taken": 2,
            "total": 2,
            "canFinish": true
          },
          "msg": "All courses completed! Return True."
        }
      ]
    }
  },
  {
    "title": "Course Schedule II",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/course-schedule-ii/",
    "pattern": "Topological Sort",
    "short": "Topological Sort",
    "intro": "Order dependency nodes so prerequisites come before dependents; indegrees and a queue provide Kahn's algorithm.",
    "thinking": "What nodes currently have no unmet prerequisites, and how do I detect a cycle?",
    "steps": [
      "Restate **Course Schedule II** as a state/decision problem before writing code.",
      "Use the core Topological Sort invariant: what nodes currently have no unmet prerequisites, and how do i detect a cycle?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Dependencies",
      "Indegree",
      "Zero-indegree queue",
      "Remove node",
      "Decrease neighbors"
    ],
    "description": "<p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you <strong>must</strong> take course <code>b<sub>i</sub></code> first if you want to take course <code>a<sub>i</sub></code>.</p>\n\n<ul>\n\t<li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li>\n</ul>\n\n<p>Return <em>the ordering of courses you should take to finish all courses</em>. If there are many valid answers, return <strong>any</strong> of them. If it is impossible to finish all courses, return <strong>an empty array</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0]]\n<strong>Output:</strong> [0,1]\n<strong>Explanation:</strong> There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\n<strong>Output:</strong> [0,2,1,3]\n<strong>Explanation:</strong> There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.\nSo one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> numCourses = 1, prerequisites = []\n<strong>Output:</strong> [0]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= numCourses &lt;= 2000</code></li>\n\t<li><code>0 &lt;= prerequisites.length &lt;= numCourses * (numCourses - 1)</code></li>\n\t<li><code>prerequisites[i].length == 2</code></li>\n\t<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; numCourses</code></li>\n\t<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>\n\t<li>All the pairs <code>[a<sub>i</sub>, b<sub>i</sub>]</code> are <strong>distinct</strong>.</li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict, deque\n\ndef findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    graph, indeg = defaultdict(list), [0] * numCourses\n    for u, v in prerequisites:\n        graph[v].append(u); indeg[u] += 1\n    q = deque(i for i in range(numCourses) if indeg[i] == 0)\n    order = []\n    while q:\n        u = q.popleft(); order.append(u)\n        for v in graph[u]:\n            indeg[v] -= 1\n            if indeg[v] == 0: q.append(v)\n    return order if len(order) == numCourses else []",
    "codeLines": 14,
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "whyBetterThanBruteForce": "Generating orderings with permutation search is O(V!). Kahn's topological sort builds a valid topological sequence by appending each finished course to order, detecting impossible schedules (cycles) in O(V + E) time.",
    "edgeCasesAndBreakPoints": [
      "Cycle in prerequisites: len(order) != numCourses, returns [] cleanly.",
      "Multiple valid course orderings: any valid topological order is accepted.",
      "No prerequisites: returns [0, 1, 2, ..., numCourses - 1].",
      "Single course: returns [0]."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
      "array": [
        "0 (indeg 0)",
        "1 (indeg 1)",
        "2 (indeg 1)",
        "3 (indeg 2)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "take": 0,
            "order": "[0]"
          },
          "msg": "Take Course 0. Decrement indegrees of 1 and 2."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "take": "1 and 2",
            "order": "[0, 1, 2]"
          },
          "msg": "Take Courses 1 and 2. Decrement indegree of 3 to 0."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "take": 3,
            "order": "[0, 1, 2, 3]"
          },
          "msg": "Take Course 3. Valid order: [0, 1, 2, 3]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Parallel Courses III",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/parallel-courses-iii/",
    "pattern": "Topological Sort",
    "short": "Topological Sort",
    "intro": "Order dependency nodes so prerequisites come before dependents; indegrees and a queue provide Kahn's algorithm.",
    "thinking": "What nodes currently have no unmet prerequisites, and how do I detect a cycle?",
    "steps": [
      "Restate **Parallel Courses III** as a state/decision problem before writing code.",
      "Use the core Topological Sort invariant: what nodes currently have no unmet prerequisites, and how do i detect a cycle?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Dependencies",
      "Indegree",
      "Zero-indegree queue",
      "Remove node",
      "Decrease neighbors"
    ],
    "description": "<p>You are given an integer <code>n</code>, which indicates that there are <code>n</code> courses labeled from <code>1</code> to <code>n</code>. You are also given a 2D integer array <code>relations</code> where <code>relations[j] = [prevCourse<sub>j</sub>, nextCourse<sub>j</sub>]</code> denotes that course <code>prevCourse<sub>j</sub></code> has to be completed <strong>before</strong> course <code>nextCourse<sub>j</sub></code> (prerequisite relationship). Furthermore, you are given a <strong>0-indexed</strong> integer array <code>time</code> where <code>time[i]</code> denotes how many <strong>months</strong> it takes to complete the <code>(i+1)<sup>th</sup></code> course.</p>\n\n<p>You must find the <strong>minimum</strong> number of months needed to complete all the courses following these rules:</p>\n\n<ul>\n\t<li>You may start taking a course at <strong>any time</strong> if the prerequisites are met.</li>\n\t<li><strong>Any number of courses</strong> can be taken at the <strong>same time</strong>.</li>\n</ul>\n\n<p>Return <em>the <strong>minimum</strong> number of months needed to complete all the courses</em>.</p>\n\n<p><strong>Note:</strong> The test cases are generated such that it is possible to complete every course (i.e., the graph is a directed acyclic graph).</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<strong><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/10/07/ex1.png\" style=\"width: 392px; height: 232px;\" /></strong>\n\n<pre>\n<strong>Input:</strong> n = 3, relations = [[1,3],[2,3]], time = [3,2,5]\n<strong>Output:</strong> 8\n<strong>Explanation:</strong> The figure above represents the given graph and the time required to complete each course. \nWe start course 1 and course 2 simultaneously at month 0.\nCourse 1 takes 3 months and course 2 takes 2 months to complete respectively.\nThus, the earliest time we can start course 3 is at month 3, and the total time required is 3 + 5 = 8 months.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<strong><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/10/07/ex2.png\" style=\"width: 500px; height: 365px;\" /></strong>\n\n<pre>\n<strong>Input:</strong> n = 5, relations = [[1,5],[2,5],[3,5],[3,4],[4,5]], time = [1,2,3,4,5]\n<strong>Output:</strong> 12\n<strong>Explanation:</strong> The figure above represents the given graph and the time required to complete each course.\nYou can start courses 1, 2, and 3 at month 0.\nYou can complete them after 1, 2, and 3 months respectively.\nCourse 4 can be taken only after course 3 is completed, i.e., after 3 months. It is completed after 3 + 4 = 7 months.\nCourse 5 can be taken only after courses 1, 2, 3, and 4 have been completed, i.e., after max(1,2,3,7) = 7 months.\nThus, the minimum time needed to complete all the courses is 7 + 5 = 12 months.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= relations.length &lt;= min(n * (n - 1) / 2, 5 * 10<sup>4</sup>)</code></li>\n\t<li><code>relations[j].length == 2</code></li>\n\t<li><code>1 &lt;= prevCourse<sub>j</sub>, nextCourse<sub>j</sub> &lt;= n</code></li>\n\t<li><code>prevCourse<sub>j</sub> != nextCourse<sub>j</sub></code></li>\n\t<li>All the pairs <code>[prevCourse<sub>j</sub>, nextCourse<sub>j</sub>]</code> are <strong>unique</strong>.</li>\n\t<li><code>time.length == n</code></li>\n\t<li><code>1 &lt;= time[i] &lt;= 10<sup>4</sup></code></li>\n\t<li>The given graph is a directed acyclic graph.</li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict, deque\n\ndef minimumTime(n: int, relations: list[list[int]], time: list[int]) -> int:\n    graph, indeg = defaultdict(list), [0] * (n + 1)\n    for u, v in relations:\n        graph[u].append(v); indeg[v] += 1\n    dist = [0] + time[:]\n    q = deque(i for i in range(1, n + 1) if indeg[i] == 0)\n    while q:\n        u = q.popleft()\n        for v in graph[u]:\n            dist[v] = max(dist[v], dist[u] + time[v - 1])\n            indeg[v] -= 1\n            if indeg[v] == 0: q.append(v)\n    return max(dist)",
    "codeLines": 15,
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "whyBetterThanBruteForce": "Finding all paths from roots to sinks to determine the critical path takes exponential time in dense graphs. Because the graph is guaranteed to be a DAG, the longest path to each course dist[v] = max(dist[u] + time[v]) can be propagated in topological order using Kahn's algorithm. Each node and edge is relaxed in O(1) time, solving the critical path method (CPM) in O(V + E).",
    "edgeCasesAndBreakPoints": [
      "No prerequisite edges: all courses take place concurrently in parallel; returns max(time).",
      "Linear chain of prerequisites: takes sum(time) sequentially.",
      "1-indexed courses: 0-padded arrays handle indexing without off-by-one errors.",
      "Multiple bottleneck paths entering a single course: max(dist[v], dist[u] + time[v]) correctly picks the latest finishing prerequisite."
    ],
    "simConfig": {
      "type": "bfs",
      "inputDisplay": "n = 3, relations = [[1,3],[2,3]], time = [3, 2, 5]",
      "array": [
        "C1: time 3",
        "C2: time 2",
        "C3: time 5 (prereqs: 1, 2)"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "indeg0": "[C1, C2]",
            "dist[1]": 3,
            "dist[2]": 2
          },
          "msg": "Courses 1 and 2 have no prerequisites. Start simultaneously at month 0. Finished at 3 and 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "dist[3]": "max(3+5, 2+5) = 8",
            "indeg[3]": 0
          },
          "msg": "Course 3 requires both 1 and 2. Can only start after max(3, 2) = month 3. Finish time = 3 + 5 = 8."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "minTime": 8
          },
          "msg": "All courses complete in minimum 8 months. Complete!"
        }
      ]
    }
  },
  {
    "title": "Network Delay Time",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/network-delay-time/",
    "pattern": "Dijkstra's Algorithm",
    "short": "Dijkstra's Algorithm",
    "intro": "With non-negative weights, repeatedly finalize the closest node and relax its outgoing edges.",
    "thinking": "What does the heap distance mean, and when is a state stale?",
    "steps": [
      "Restate **Network Delay Time** as a state/decision problem before writing code.",
      "Use the core Dijkstra's Algorithm invariant: what does the heap distance mean, and when is a state stale?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Distances",
      "Min heap",
      "Closest node",
      "Relax edges",
      "Finalize"
    ],
    "description": "<p>You are given a network of <code>n</code> nodes, labeled from <code>1</code> to <code>n</code>. You are also given <code>times</code>, a list of travel times as directed edges <code>times[i] = (u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>)</code>, where <code>u<sub>i</sub></code> is the source node, <code>v<sub>i</sub></code> is the target node, and <code>w<sub>i</sub></code> is the time it takes for a signal to travel from source to target.</p>\n\n<p>We will send a signal from a given node <code>k</code>. Return <em>the <strong>minimum</strong> time it takes for all the</em> <code>n</code> <em>nodes to receive the signal</em>. If it is impossible for all the <code>n</code> nodes to receive the signal, return <code>-1</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2019/05/23/931_example_1.png\" style=\"width: 217px; height: 239px;\" />\n<pre>\n<strong>Input:</strong> times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2\n<strong>Output:</strong> 2\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> times = [[1,2,1]], n = 2, k = 1\n<strong>Output:</strong> 1\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> times = [[1,2,1]], n = 2, k = 2\n<strong>Output:</strong> -1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= k &lt;= n &lt;= 100</code></li>\n\t<li><code>1 &lt;= times.length &lt;= 6000</code></li>\n\t<li><code>times[i].length == 3</code></li>\n\t<li><code>1 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n</code></li>\n\t<li><code>u<sub>i</sub> != v<sub>i</sub></code></li>\n\t<li><code>0 &lt;= w<sub>i</sub> &lt;= 100</code></li>\n\t<li>All the pairs <code>(u<sub>i</sub>, v<sub>i</sub>)</code> are <strong>unique</strong>. (i.e., no multiple edges.)</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\nfrom collections import defaultdict\n\ndef networkDelayTime(times: list[list[int]], n: int, k: int) -> int:\n    graph = defaultdict(list)\n    for u, v, w in times: graph[u].append((v, w))\n    hp, dist = [(0, k)], {}\n    while hp:\n        d, u = heappop(hp)\n        if u in dist: continue\n        dist[u] = d\n        for v, w in graph[u]:\n            if v not in dist: heappush(hp, (d + w, v))\n    return max(dist.values()) if len(dist) == n else -1",
    "codeLines": 14,
    "timeComplexity": "O(E log V)",
    "spaceComplexity": "O(V + E)",
    "whyBetterThanBruteForce": "Bellman-Ford takes O(V * E). Dijkstra's algorithm with a min-heap always expands the closest unfinalized node next. Because edge weights are non-negative, the distance to each popped node is guaranteed optimal, finding all single-source shortest paths in O(E log V) time.",
    "edgeCasesAndBreakPoints": [
      "Some nodes unreachable: len(dist) < n detects disconnected vertices; returns -1.",
      "Single node (n=1): returns 0.",
      "Multiple paths to same node: min-heap prioritizes smaller distance, if u in dist skips outdated entries.",
      "1-indexed vertices: handled cleanly by dictionary keys."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
      "array": [
        "Node 1",
        "Node 2 (Start)",
        "Node 3",
        "Node 4"
      ],
      "steps": [
        {
          "active": [
            1
          ],
          "vars": {
            "start": "Node 2",
            "time": 0
          },
          "msg": "Start signal at Node 2. dist[2] = 0."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "time": 1,
            "reached": "Nodes 1 and 3"
          },
          "msg": "Signal reaches Node 1 (time 1) and Node 3 (time 1)."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "time": 2,
            "reached": "Node 4"
          },
          "msg": "Signal propagates from Node 3 to Node 4 (time 1 + 1 = 2)."
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "maxTime": 2
          },
          "msg": "All 4 nodes received signal. Total network delay time = 2. Complete!"
        }
      ]
    }
  },
  {
    "title": "Path With Minimum Effort",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/path-with-minimum-effort/",
    "pattern": "Dijkstra's Algorithm",
    "short": "Dijkstra's Algorithm",
    "intro": "With non-negative weights, repeatedly finalize the closest node and relax its outgoing edges.",
    "thinking": "What does the heap distance mean, and when is a state stale?",
    "steps": [
      "Restate **Path With Minimum Effort** as a state/decision problem before writing code.",
      "Use the core Dijkstra's Algorithm invariant: what does the heap distance mean, and when is a state stale?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Distances",
      "Min heap",
      "Closest node",
      "Relax edges",
      "Finalize"
    ],
    "description": "<p>You are a hiker preparing for an upcoming hike. You are given <code>heights</code>, a 2D array of size <code>rows x columns</code>, where <code>heights[row][col]</code> represents the height of cell <code>(row, col)</code>. You are situated in the top-left cell, <code>(0, 0)</code>, and you hope to travel to the bottom-right cell, <code>(rows-1, columns-1)</code> (i.e.,&nbsp;<strong>0-indexed</strong>). You can move <strong>up</strong>, <strong>down</strong>, <strong>left</strong>, or <strong>right</strong>, and you wish to find a route that requires the minimum <strong>effort</strong>.</p>\n\n<p>A route&#39;s <strong>effort</strong> is the <strong>maximum absolute difference</strong><strong> </strong>in heights between two consecutive cells of the route.</p>\n\n<p>Return <em>the minimum <strong>effort</strong> required to travel from the top-left cell to the bottom-right cell.</em></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/04/ex1.png\" style=\"width: 300px; height: 300px;\" /></p>\n\n<pre>\n<strong>Input:</strong> heights = [[1,2,2],[3,8,2],[5,3,5]]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.\nThis is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/04/ex2.png\" style=\"width: 300px; height: 300px;\" /></p>\n\n<pre>\n<strong>Input:</strong> heights = [[1,2,3],[3,8,4],[5,3,5]]\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/04/ex3.png\" style=\"width: 300px; height: 300px;\" />\n<pre>\n<strong>Input:</strong> heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> This route does not require any effort.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>rows == heights.length</code></li>\n\t<li><code>columns == heights[i].length</code></li>\n\t<li><code>1 &lt;= rows, columns &lt;= 100</code></li>\n\t<li><code>1 &lt;= heights[i][j] &lt;= 10<sup>6</sup></code></li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef minimumEffortPath(heights: list[list[int]]) -> int:\n    R, C = len(heights), len(heights[0])\n    hp, dist = [(0, 0, 0)], {(0, 0): 0}\n    while hp:\n        effort, r, c = heappop(hp)\n        if r == R - 1 and c == C - 1: return effort\n        if effort > dist.get((r, c), float(\"inf\")): continue\n        for dr, dc in ((-1,0),(1,0),(0,-1),(0,1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C:\n                nxt_eff = max(effort, abs(heights[nr][nc] - heights[r][c]))\n                if nxt_eff < dist.get((nr, nc), float(\"inf\")):\n                    dist[(nr, nc)] = nxt_eff\n                    heappush(hp, (nxt_eff, nr, nc))",
    "codeLines": 16,
    "timeComplexity": "O(R * C log(R * C))",
    "spaceComplexity": "O(R * C)",
    "whyBetterThanBruteForce": "DFS path exploration takes exponential time. Dijkstra's algorithm tracks path effort defined as max(effort, abs(diff)). The min-heap always pops the minimum effort path frontier next, guaranteeing optimal minimax path discovery in O(R * C log(R * C)).",
    "edgeCasesAndBreakPoints": [
      "1x1 grid: start is destination, returns 0.",
      "All heights identical: effort stays 0, returns 0.",
      "High mountain in center: path routes around mountain through minimal height differences.",
      "Steep single-path terrain: effort equals the single largest step."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "heights = [[1,2,2],[3,8,2],[5,3,5]]",
      "array": [
        "[1, 2, 2]",
        "[3, 8, 2]",
        "[5, 3, 5]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "pos": "(0,0)",
            "effort": 0
          },
          "msg": "Start at (0,0) with effort 0."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "step": "(0,1) diff=1",
            "effort": 1
          },
          "msg": "Move (0,0)[1] -> (0,1)[2]: diff = 1. Path effort = 1."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "step": "(0,2)[2] -> (1,2)[2]",
            "effort": 1
          },
          "msg": "Move across top and right: height diff = 0. Path effort remains 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "destination": "(2,2)[5]",
            "stepDiff": "5-2=3",
            "effort": 2
          },
          "msg": "Route via (1,2)[2] -> (2,2)[5] has effort 2 (via (2,1)[3]). Minimal effort = 2. Complete!"
        }
      ]
    }
  },
  {
    "title": "Cheapest Flights Within K Stops",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    "pattern": "Dijkstra's Algorithm",
    "short": "Dijkstra's Algorithm",
    "intro": "With non-negative weights, repeatedly finalize the closest node and relax its outgoing edges.",
    "thinking": "What does the heap distance mean, and when is a state stale?",
    "steps": [
      "Restate **Cheapest Flights Within K Stops** as a state/decision problem before writing code.",
      "Use the core Dijkstra's Algorithm invariant: what does the heap distance mean, and when is a state stale?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Distances",
      "Min heap",
      "Closest node",
      "Relax edges",
      "Finalize"
    ],
    "description": "<p>There are <code>n</code> cities connected by some number of flights. You are given an array <code>flights</code> where <code>flights[i] = [from<sub>i</sub>, to<sub>i</sub>, price<sub>i</sub>]</code> indicates that there is a flight from city <code>from<sub>i</sub></code> to city <code>to<sub>i</sub></code> with cost <code>price<sub>i</sub></code>.</p>\n\n<p>You are also given three integers <code>src</code>, <code>dst</code>, and <code>k</code>, return <em><strong>the cheapest price</strong> from </em><code>src</code><em> to </em><code>dst</code><em> with at most </em><code>k</code><em> stops. </em>If there is no such route, return<em> </em><code>-1</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-3drawio.png\" style=\"width: 332px; height: 392px;\" />\n<pre>\n<strong>Input:</strong> n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1\n<strong>Output:</strong> 700\n<strong>Explanation:</strong>\nThe graph is shown above.\nThe optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.\nNote that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-1drawio.png\" style=\"width: 332px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1\n<strong>Output:</strong> 200\n<strong>Explanation:</strong>\nThe graph is shown above.\nThe optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-2drawio.png\" style=\"width: 332px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0\n<strong>Output:</strong> 500\n<strong>Explanation:</strong>\nThe graph is shown above.\nThe optimal path with no stops from city 0 to 2 is marked in red and has cost 500.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= n &lt;= 100</code></li>\n\t<li><code>0 &lt;= flights.length &lt;= (n * (n - 1) / 2)</code></li>\n\t<li><code>flights[i].length == 3</code></li>\n\t<li><code>0 &lt;= from<sub>i</sub>, to<sub>i</sub> &lt; n</code></li>\n\t<li><code>from<sub>i</sub> != to<sub>i</sub></code></li>\n\t<li><code>1 &lt;= price<sub>i</sub> &lt;= 10<sup>4</sup></code></li>\n\t<li>There will not be any multiple flights between two cities.</li>\n\t<li><code>0 &lt;= src, dst, k &lt; n</code></li>\n\t<li><code>src != dst</code></li>\n</ul>\n",
    "pythonCode": "def findCheapestPrice(n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:\n    dist = [float(\"inf\")] * n\n    dist[src] = 0\n    for _ in range(k + 1):\n        temp = dist[:]\n        for u, v, w in flights:\n            if dist[u] != float(\"inf\"):\n                temp[v] = min(temp[v], dist[u] + w)\n        dist = temp\n    return dist[dst] if dist[dst] != float(\"inf\") else -1",
    "codeLines": 10,
    "timeComplexity": "O(K * E)",
    "spaceComplexity": "O(V)",
    "whyBetterThanBruteForce": "Dijkstra can exceed k stops because it minimizes total price without bounding edge count. Bellman-Ford relaxed exactly k + 1 rounds uses a copy temp[:] of the previous distance array, strictly limiting paths to at most k stops in O(K * E) time with O(V) space.",
    "edgeCasesAndBreakPoints": [
      "Destination unreachable within k stops: returns -1.",
      "k = 0: only direct flights from src to dst considered.",
      "Cheapest route requires > k stops: algorithm correctly picks slightly more expensive route with <= k stops.",
      "Cycles in flight network: temp[:] prevents relaxation propagation beyond 1 edge per round."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
      "array": [
        "0->1 ($100)",
        "1->2 ($100)",
        "0->2 ($500)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "round 0": "dist[0] = 0",
            "stops": 0
          },
          "msg": "Round 1 (0 stops): 0->1 costs 100, 0->2 costs 500."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "round 1": "1->2 costs 100+100=200",
            "stops": 1
          },
          "msg": "Round 2 (1 stop): via node 1, 0->1->2 costs 100 + 100 = 200."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "cheapestPrice": 200
          },
          "msg": "Destination reached in 1 stop for $200 (cheaper than direct $500). Complete!"
        }
      ]
    }
  },
  {
    "title": "Swim in Rising Water",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/swim-in-rising-water/",
    "pattern": "Dijkstra's Algorithm",
    "short": "Dijkstra's Algorithm",
    "intro": "With non-negative weights, repeatedly finalize the closest node and relax its outgoing edges.",
    "thinking": "What does the heap distance mean, and when is a state stale?",
    "steps": [
      "Restate **Swim in Rising Water** as a state/decision problem before writing code.",
      "Use the core Dijkstra's Algorithm invariant: what does the heap distance mean, and when is a state stale?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Distances",
      "Min heap",
      "Closest node",
      "Relax edges",
      "Finalize"
    ],
    "description": "<p>You are given an <code>n x n</code> integer matrix <code>grid</code> where each value <code>grid[i][j]</code> represents the elevation at that point <code>(i, j)</code>.</p>\n\n<p>It starts raining, and water gradually rises over time. At time <code>t</code>, the water level is <code>t</code>, meaning <strong>any</strong> cell with elevation less than equal to <code>t</code> is submerged or reachable.</p>\n\n<p>You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most <code>t</code>. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.</p>\n\n<p>Return <em>the minimum time until you can reach the bottom right square </em><code>(n - 1, n - 1)</code><em> if you start at the top left square </em><code>(0, 0)</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/06/29/swim1-grid.jpg\" style=\"width: 164px; height: 165px;\" />\n<pre>\n<strong>Input:</strong> grid = [[0,2],[1,3]]\n<strong>Output:</strong> 3\nExplanation:\nAt time 0, you are in grid location (0, 0).\nYou cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.\nYou cannot reach point (1, 1) until time 3.\nWhen the depth of water is 3, we can swim anywhere inside the grid.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/06/29/swim2-grid-1.jpg\" style=\"width: 404px; height: 405px;\" />\n<pre>\n<strong>Input:</strong> grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]\n<strong>Output:</strong> 16\n<strong>Explanation:</strong> The final route is shown.\nWe need to wait until time 16 so that (0, 0) and (4, 4) are connected.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == grid.length</code></li>\n\t<li><code>n == grid[i].length</code></li>\n\t<li><code>1 &lt;= n &lt;= 50</code></li>\n\t<li><code>0 &lt;= grid[i][j] &lt;&nbsp;n<sup>2</sup></code></li>\n\t<li>Each value <code>grid[i][j]</code> is <strong>unique</strong>.</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef swimInWater(grid: list[list[int]]) -> int:\n    n = len(grid)\n    hp, visited = [(grid[0][0], 0, 0)], {(0, 0)}\n    ans = 0\n    while hp:\n        t, r, c = heappop(hp)\n        ans = max(ans, t)\n        if r == c == n - 1: return ans\n        for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited:\n                visited.add((nr, nc))\n                heappush(hp, (grid[nr][nc], nr, nc))\n    return ans",
    "codeLines": 16,
    "timeComplexity": "O(N^2 log N)",
    "spaceComplexity": "O(N^2)",
    "whyBetterThanBruteForce": "DFS pathfinding requires backtracking and re-exploring paths, taking exponential time. By modeling the problem as finding a path from (0, 0) to (N-1, N-1) that minimizes the maximum elevation along the path (minimax path), Dijkstra's algorithm with a min-heap always expands the lowest available water elevation next, guaranteeing that the first time (N-1, N-1) is popped, the answer is optimal.",
    "edgeCasesAndBreakPoints": [
      "Grid with 1 cell: returns grid[0][0] immediately.",
      "Elevation at start (0,0) or end (N-1, N-1) is higher than interior: ans = max(ans, t) captures it.",
      "All elevations distinct and in range [0, N^2 - 1]: min-heap contains at most 4N elements at any time.",
      "N up to 50: 2500 cells, executes in < 0.05s."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "grid = [[0, 2], [1, 3]]",
      "array": [
        "[0, 2]",
        "[1, 3]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "pos": "(0, 0)",
            "water": 0,
            "heap": "[(0,0,0)]"
          },
          "msg": "Start at (0,0): elevation 0. ans = 0."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "pop": "(0,0)",
            "neighbors": "(0,1)[2], (1,0)[1]"
          },
          "msg": "Pop (0,0). Push neighbor (1,0) [elevation 1] and (0,1) [elevation 2]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "pop": "(1,0) h=1",
            "ans": 1,
            "neighbors": "(1,1)[3]"
          },
          "msg": "Pop lowest elevation: (1,0) at height 1. Push target (1,1) [height 3]."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "pop": "(0,1) h=2",
            "ans": 2
          },
          "msg": "Pop next lowest: (0,1) at height 2."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "pop": "(1,1) h=3",
            "destination": true,
            "minTime": 3
          },
          "msg": "Pop target (1,1) at height 3. Reached! Minimum time to swim = 3. Complete!"
        }
      ]
    }
  },
  {
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/climbing-stairs/",
    "pattern": "Dynamic Programming — 1D",
    "short": "1D DP",
    "intro": "Define a one-dimensional state, base cases, and transitions that reuse overlapping subproblems.",
    "thinking": "What exactly does dp[i] mean in plain English?",
    "steps": [
      "Restate **Climbing Stairs** as a state/decision problem before writing code.",
      "Use the core Dynamic Programming — 1D invariant: what exactly does dp[i] mean in plain english?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "State i",
      "Base cases",
      "Transition",
      "Store",
      "Answer"
    ],
    "description": "<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>\n\n<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 2\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 3\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 45</code></li>\n</ul>\n",
    "pythonCode": "def climbStairs(n: int) -> int:\n    a, b = 1, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a",
    "codeLines": 5,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Naive recursion fib(n) takes exponential O(2^N) time due to duplicate subproblems. Because each step can only be reached from step i - 1 or step i - 2, fibonacci DP computes ways in linear O(N) time with strict O(1) space.",
    "edgeCasesAndBreakPoints": [
      "n = 1: returns 1.",
      "n = 2: returns 2 (1+1 or 2).",
      "n = 3: returns 3.",
      "n up to 45: runs in < 1 microsecond without overflow."
    ],
    "simConfig": {
      "type": "dp",
      "inputDisplay": "n = 4",
      "array": [
        "Step 0: 1",
        "Step 1: 1",
        "Step 2: 2",
        "Step 3: 3",
        "Step 4: 5"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "ways[1]": 1
          },
          "msg": "1 step: 1 way."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "ways[2]": "1 + 1 = 2"
          },
          "msg": "2 steps: 2 ways (1+1, 2)."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "ways[3]": "1 + 2 = 3"
          },
          "msg": "3 steps: 3 ways."
        },
        {
          "active": [
            3,
            4
          ],
          "vars": {
            "ways[4]": "2 + 3 = 5"
          },
          "msg": "4 steps: 5 ways. Complete!"
        }
      ]
    }
  },
  {
    "title": "House Robber",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/house-robber/",
    "pattern": "Dynamic Programming — 1D",
    "short": "1D DP",
    "intro": "Define a one-dimensional state, base cases, and transitions that reuse overlapping subproblems.",
    "thinking": "What exactly does dp[i] mean in plain English?",
    "steps": [
      "Restate **House Robber** as a state/decision problem before writing code.",
      "Use the core Dynamic Programming — 1D invariant: what exactly does dp[i] mean in plain english?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "State i",
      "Base cases",
      "Transition",
      "Store",
      "Answer"
    ],
    "description": "<p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <b>it will automatically contact the police if two adjacent houses were broken into on the same night</b>.</p>\n\n<p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <b>without alerting the police</b></em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,3,1]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,7,9,3,1]\n<strong>Output:</strong> 12\n<strong>Explanation:</strong> Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).\nTotal amount you can rob = 2 + 9 + 1 = 12.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 100</code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 400</code></li>\n</ul>\n",
    "pythonCode": "def rob(nums: list[int]) -> int:\n    rob1 = rob2 = 0\n    for x in nums:\n        rob1, rob2 = rob2, max(rob1 + x, rob2)\n    return rob2",
    "codeLines": 5,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Evaluating all non-adjacent subsets takes O(2^N) time. DP recurrence dp[i] = max(dp[i-1], dp[i-2] + nums[i]) depends only on the previous two values. Using two variables rob1 and rob2 tracks the optimal loot in O(N) time and O(1) space.",
    "edgeCasesAndBreakPoints": [
      "Single house: returns nums[0].",
      "Two houses: returns max(nums[0], nums[1]).",
      "All houses have 0 value: returns 0.",
      "All identical values: robs alternating houses."
    ],
    "simConfig": {
      "type": "dp",
      "inputDisplay": "nums = [1, 2, 3, 1]",
      "array": [
        1,
        2,
        3,
        1
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "rob": 1,
            "maxLoot": 1
          },
          "msg": "House 0 (1): rob1=0, rob2=1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "rob": 2,
            "maxLoot": 2
          },
          "msg": "House 1 (2): max(1, 0+2) = 2. rob2=2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "rob": 3,
            "maxLoot": "max(2, 1+3) = 4"
          },
          "msg": "House 2 (3): max(2, 1+3) = 4. rob2=4."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "rob": 1,
            "maxLoot": "max(4, 2+1) = 4"
          },
          "msg": "House 3 (1): max(4, 3) = 4. Max loot = 4. Complete!"
        }
      ]
    }
  },
  {
    "title": "Longest Increasing Subsequence",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/longest-increasing-subsequence/",
    "pattern": "Dynamic Programming — 1D",
    "short": "1D DP",
    "intro": "Define a one-dimensional state, base cases, and transitions that reuse overlapping subproblems.",
    "thinking": "What exactly does dp[i] mean in plain English?",
    "steps": [
      "Restate **Longest Increasing Subsequence** as a state/decision problem before writing code.",
      "Use the core Dynamic Programming — 1D invariant: what exactly does dp[i] mean in plain english?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "State i",
      "Base cases",
      "Transition",
      "Store",
      "Answer"
    ],
    "description": "<p>Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing </strong></em><span data-keyword=\"subsequence-array\"><em><strong>subsequence</strong></em></span>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [10,9,2,5,3,7,101,18]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> The longest increasing subsequence is [2,3,7,101], therefore the length is 4.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1,0,3,2,3]\n<strong>Output:</strong> 4\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [7,7,7,7,7,7,7]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 2500</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><b>Follow up:</b>&nbsp;Can you come up with an algorithm that runs in&nbsp;<code>O(n log(n))</code> time complexity?</p>\n",
    "pythonCode": "from bisect import bisect_left\n\ndef lengthOfLIS(nums: list[int]) -> int:\n    tails = []\n    for x in nums:\n        idx = bisect_left(tails, x)\n        if idx == len(tails): tails.append(x)\n        else: tails[idx] = x\n    return len(tails)",
    "codeLines": 9,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Classic O(N^2) DP checks all previous elements. Maintaining the tails array where tails[i] is the smallest tail of an increasing subsequence of length i + 1 allows binary searching with bisect_left in O(log N), achieving O(N log N) patience sorting time.",
    "edgeCasesAndBreakPoints": [
      "Strictly decreasing array (e.g. [5, 4, 3, 2, 1]): tails keeps overwriting tails[0], returns 1.",
      "Strictly increasing array: tails grows to length N, returns N.",
      "Duplicates: bisect_left ensures strictly increasing subsequence.",
      "Single element array: returns 1."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [10, 9, 2, 5, 3, 7, 101, 18]",
      "array": [
        10,
        9,
        2,
        5,
        3,
        7,
        101,
        18
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "tails": "[2]"
          },
          "msg": "10, then 9, then 2 overwrite tails[0] -> [2]."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "tails": "[2, 5]"
          },
          "msg": "5 > 2: append 5 -> [2, 5]."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "tails": "[2, 3]"
          },
          "msg": "3 replaces 5 (better tail) -> [2, 3]."
        },
        {
          "active": [
            5,
            6,
            7
          ],
          "vars": {
            "tails": "[2, 3, 7, 18]",
            "lis": 4
          },
          "msg": "7 appended -> [2, 3, 7]. 101 appended, replaced by 18 -> [2, 3, 7, 18]. LIS length = 4. Complete!"
        }
      ]
    }
  },
  {
    "title": "Best Time to Buy and Sell Stock IV",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
    "pattern": "Dynamic Programming — 1D",
    "short": "1D DP",
    "intro": "Define a one-dimensional state, base cases, and transitions that reuse overlapping subproblems.",
    "thinking": "What exactly does dp[i] mean in plain English?",
    "steps": [
      "Restate **Best Time to Buy and Sell Stock IV** as a state/decision problem before writing code.",
      "Use the core Dynamic Programming — 1D invariant: what exactly does dp[i] mean in plain english?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "State i",
      "Base cases",
      "Transition",
      "Store",
      "Answer"
    ],
    "description": "<p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day, and an integer <code>k</code>.</p>\n\n<p>Find the maximum profit you can achieve. You may complete at most <code>k</code> transactions: i.e. you may buy at most <code>k</code> times and sell at most <code>k</code> times.</p>\n\n<p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> k = 2, prices = [2,4,1]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> k = 2, prices = [3,2,6,5,0,3]\n<strong>Output:</strong> 7\n<strong>Explanation:</strong> Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= k &lt;= 100</code></li>\n\t<li><code>1 &lt;= prices.length &lt;= 1000</code></li>\n\t<li><code>0 &lt;= prices[i] &lt;= 1000</code></li>\n</ul>\n",
    "pythonCode": "def maxProfit(k: int, prices: list[int]) -> int:\n    if not prices or k == 0: return 0\n    if k >= len(prices) // 2:\n        return sum(max(0, prices[i] - prices[i - 1]) for i in range(1, len(prices)))\n    buy = [float(\"inf\")] * (k + 1)\n    profit = [0] * (k + 1)\n    for p in prices:\n        for i in range(1, k + 1):\n            buy[i] = min(buy[i], p - profit[i - 1])\n            profit[i] = max(profit[i], p - buy[i])\n    return profit[k]",
    "codeLines": 11,
    "timeComplexity": "O(N * K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Checking all combination buy/sell dates takes O(2^N). When k >= N / 2, any upward slope can be captured in O(N). Otherwise, 1D DP tracking minimum effective buy cost buy[i] and max profit profit[i] updates each transaction state in O(1), achieving O(N * K) time with O(K) memory.",
    "edgeCasesAndBreakPoints": [
      "k >= len(prices) // 2: falls back to greedy Stock II in O(N).",
      "k = 0 or empty prices: returns 0 immediately.",
      "Prices strictly decreasing: profit remains 0.",
      "Single transaction optimal."
    ],
    "simConfig": {
      "type": "dp",
      "inputDisplay": "k = 2, prices = [2, 4, 1]",
      "array": [
        2,
        4,
        1
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "day 0": "p=2",
            "buy1": 2,
            "profit1": 0
          },
          "msg": "Day 0 (price 2): buy cost = 2."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "day 1": "p=4",
            "profit1": "4 - 2 = 2"
          },
          "msg": "Day 1 (price 4): profit1 = 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "day 2": "p=1",
            "maxProfit": 2
          },
          "msg": "Day 2 (price 1): max profit remains 2. Complete!"
        }
      ]
    }
  },
  {
    "title": "Unique Paths",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/unique-paths/",
    "pattern": "Dynamic Programming — 2D / Grid",
    "short": "2D DP",
    "intro": "Define exactly what dp[i][j] means, initialize boundaries, and derive each cell from prior states.",
    "thinking": "What exactly does dp[i][j] mean, and which states can transition into it?",
    "steps": [
      "Restate **Unique Paths** as a state/decision problem before writing code.",
      "Use the core Dynamic Programming — 2D / Grid invariant: what exactly does dp[i][j] mean, and which states can transition into it?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "State i,j",
      "Boundaries",
      "Transition",
      "Fill table",
      "Answer"
    ],
    "description": "<p>There is a robot on an <code>m x n</code> grid. The robot is initially located at the <strong>top-left corner</strong> (i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code>grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.</p>\n\n<p>Given the two integers <code>m</code> and <code>n</code>, return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.</p>\n\n<p>The test cases are generated so that the answer will be less than or equal to <code>2 * 10<sup>9</sup></code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img src=\"https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png\" style=\"width: 400px; height: 183px;\" />\n<pre>\n<strong>Input:</strong> m = 3, n = 7\n<strong>Output:</strong> 28\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> m = 3, n = 2\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:\n1. Right -&gt; Down -&gt; Down\n2. Down -&gt; Down -&gt; Right\n3. Down -&gt; Right -&gt; Down\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= m, n &lt;= 100</code></li>\n</ul>\n",
    "pythonCode": "from math import comb\n\ndef uniquePaths(m: int, n: int) -> int:\n    return comb(m + n - 2, m - 1)",
    "codeLines": 4,
    "timeComplexity": "O(min(M, N))",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "DFS path recursion takes O(2^(M+N)) time. 2D DP takes O(M * N). Because any valid path to (m-1, n-1) must take exactly m - 1 down moves and n - 1 right moves in total (m + n - 2 moves), the answer is the combination C(m+n-2, m-1), calculated in O(min(M, N)) time and O(1) space.",
    "edgeCasesAndBreakPoints": [
      "m = 1 or n = 1: only 1 straight line path; comb(n-1, 0) = 1.",
      "m = n = 1: start is destination, returns 1.",
      "Large grids (up to 100x100): comb handles large integers without precision loss.",
      "Symmetric grid: C(m+n-2, m-1) == C(m+n-2, n-1)."
    ],
    "simConfig": {
      "type": "dp",
      "inputDisplay": "m = 3, n = 7",
      "array": [
        "m=3 rows",
        "n=7 cols",
        "Total moves: 3-1 + 7-1 = 8"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "totalMoves": 8,
            "downMoves": 2
          },
          "msg": "Must make 2 down moves and 6 right moves (total 8 moves)."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "formula": "comb(8, 2) = (8 * 7) / 2 = 28"
          },
          "msg": "Choose 2 down moves out of 8: C(8, 2) = 28 unique paths! Complete!"
        }
      ]
    }
  },
  {
    "title": "Minimum Path Sum",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/minimum-path-sum/",
    "pattern": "Dynamic Programming — 2D / Grid",
    "short": "2D DP",
    "intro": "Define exactly what dp[i][j] means, initialize boundaries, and derive each cell from prior states.",
    "thinking": "What exactly does dp[i][j] mean, and which states can transition into it?",
    "steps": [
      "Restate **Minimum Path Sum** as a state/decision problem before writing code.",
      "Use the core Dynamic Programming — 2D / Grid invariant: what exactly does dp[i][j] mean, and which states can transition into it?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "State i,j",
      "Boundaries",
      "Transition",
      "Fill table",
      "Answer"
    ],
    "description": "<p>Given a <code>m x n</code> <code>grid</code> filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.</p>\n\n<p><strong>Note:</strong> You can only move either down or right at any point in time.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg\" style=\"width: 242px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> grid = [[1,3,1],[1,5,1],[4,2,1]]\n<strong>Output:</strong> 7\n<strong>Explanation:</strong> Because the path 1 &rarr; 3 &rarr; 1 &rarr; 1 &rarr; 1 minimizes the sum.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [[1,2,3],[4,5,6]]\n<strong>Output:</strong> 12\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == grid.length</code></li>\n\t<li><code>n == grid[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 200</code></li>\n\t<li><code>0 &lt;= grid[i][j] &lt;= 200</code></li>\n</ul>\n",
    "pythonCode": "def minPathSum(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    dp = [float(\"inf\")] * (C + 1)\n    dp[1] = 0\n    for row in grid:\n        for c in range(C):\n            dp[c + 1] = row[c] + min(dp[c + 1], dp[c])\n    return dp[C]",
    "codeLines": 8,
    "timeComplexity": "O(R * C)",
    "spaceComplexity": "O(C)",
    "whyBetterThanBruteForce": "Evaluating all paths takes exponential O(2^(R+C)) time. In-place 1D DP table dp[c+1] = cell + min(dp[c+1], dp[c]) reduces memory from O(R * C) to a single row of size C while computing optimal path cost in O(R * C) time.",
    "edgeCasesAndBreakPoints": [
      "1x1 grid: returns grid[0][0].",
      "Single row or single column: straight line sum.",
      "Zero values in grid: handled seamlessly.",
      "Large cell numbers: integer additions accumulate cleanly."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
      "array": [
        "[1, 3, 1]",
        "[1, 5, 1]",
        "[4, 2, 1]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "row 0": "[1, 4, 5]"
          },
          "msg": "Row 0 sums: [1, 1+3=4, 4+1=5]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "row 1": "[2, 7, 6]"
          },
          "msg": "Row 1: min top/left + cell -> [2, 7, 6]."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "row 2": "[6, 8, 7]"
          },
          "msg": "Row 2: min top/left + cell -> [6, 8, 7]. Bottom-right min path sum = 7. Complete!"
        }
      ]
    }
  },
  {
    "title": "Longest Common Subsequence",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/longest-common-subsequence/",
    "pattern": "Dynamic Programming — 2D / Grid",
    "short": "2D DP",
    "intro": "Define exactly what dp[i][j] means, initialize boundaries, and derive each cell from prior states.",
    "thinking": "What exactly does dp[i][j] mean, and which states can transition into it?",
    "steps": [
      "Restate **Longest Common Subsequence** as a state/decision problem before writing code.",
      "Use the core Dynamic Programming — 2D / Grid invariant: what exactly does dp[i][j] mean, and which states can transition into it?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "State i,j",
      "Boundaries",
      "Transition",
      "Fill table",
      "Answer"
    ],
    "description": "<p>Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong>. </em>If there is no <strong>common subsequence</strong>, return <code>0</code>.</p>\n\n<p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p>\n\n<ul>\n\t<li>For example, <code>&quot;ace&quot;</code> is a subsequence of <code>&quot;abcde&quot;</code>.</li>\n</ul>\n\n<p>A <strong>common subsequence</strong> of two strings is a subsequence that is common to both strings.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> text1 = &quot;abcde&quot;, text2 = &quot;ace&quot; \n<strong>Output:</strong> 3  \n<strong>Explanation:</strong> The longest common subsequence is &quot;ace&quot; and its length is 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> text1 = &quot;abc&quot;, text2 = &quot;abc&quot;\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The longest common subsequence is &quot;abc&quot; and its length is 3.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> text1 = &quot;abc&quot;, text2 = &quot;def&quot;\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> There is no such common subsequence, so the result is 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= text1.length, text2.length &lt;= 1000</code></li>\n\t<li><code>text1</code> and <code>text2</code> consist of only lowercase English characters.</li>\n</ul>\n",
    "pythonCode": "def longestCommonSubsequence(text1: str, text2: str) -> int:\n    if len(text1) < len(text2): text1, text2 = text2, text1\n    dp = [0] * (len(text2) + 1)\n    for c1 in text1:\n        prev = 0\n        for j, c2 in enumerate(text2):\n            cur = dp[j + 1]\n            dp[j + 1] = prev + 1 if c1 == c2 else max(dp[j + 1], dp[j])\n            prev = cur\n    return dp[-1]",
    "codeLines": 10,
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(min(M, N))",
    "whyBetterThanBruteForce": "Checking all 2^N subsequences takes exponential time. Tabular 2D DP takes O(M * N) space. By compressing the DP table into a single rolling 1D array of size min(M, N) with a prev temporary variable tracking the top-left diagonal value, space is minimized to O(min(M, N)) while preserving O(M * N) time.",
    "edgeCasesAndBreakPoints": [
      "No characters in common: returns 0.",
      "Strings identical: returns len(text1).",
      "One string is a subsequence of the other: returns min(len1, len2).",
      "Single character strings: handles 1x1 match directly."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "text1 = 'abcde', text2 = 'ace'",
      "array": [
        "'abcde'",
        "'ace'"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "char": "'a' == 'a'",
            "lcs": 1
          },
          "msg": "'a' matches 'a': LCS = 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "char": "'c' == 'c'",
            "lcs": 2
          },
          "msg": "'c' matches 'c': LCS = 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "char": "'e' == 'e'",
            "lcs": 3
          },
          "msg": "'e' matches 'e': LCS = 3. Longest common subsequence = 'ace' (len 3). Complete!"
        }
      ]
    }
  },
  {
    "title": "Edit Distance",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/edit-distance/",
    "pattern": "Dynamic Programming — 2D / Grid",
    "short": "2D DP",
    "intro": "Define exactly what dp[i][j] means, initialize boundaries, and derive each cell from prior states.",
    "thinking": "What exactly does dp[i][j] mean, and which states can transition into it?",
    "steps": [
      "Restate **Edit Distance** as a state/decision problem before writing code.",
      "Use the core Dynamic Programming — 2D / Grid invariant: what exactly does dp[i][j] mean, and which states can transition into it?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "State i,j",
      "Boundaries",
      "Transition",
      "Fill table",
      "Answer"
    ],
    "description": "<p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of operations required to convert <code>word1</code> to <code>word2</code></em>.</p>\n\n<p>You have the following three operations permitted on a word:</p>\n\n<ul>\n\t<li>Insert a character</li>\n\t<li>Delete a character</li>\n\t<li>Replace a character</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> word1 = &quot;horse&quot;, word2 = &quot;ros&quot;\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> \nhorse -&gt; rorse (replace &#39;h&#39; with &#39;r&#39;)\nrorse -&gt; rose (remove &#39;r&#39;)\nrose -&gt; ros (remove &#39;e&#39;)\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> word1 = &quot;intention&quot;, word2 = &quot;execution&quot;\n<strong>Output:</strong> 5\n<strong>Explanation:</strong> \nintention -&gt; inention (remove &#39;t&#39;)\ninention -&gt; enention (replace &#39;i&#39; with &#39;e&#39;)\nenention -&gt; exention (replace &#39;n&#39; with &#39;x&#39;)\nexention -&gt; exection (replace &#39;n&#39; with &#39;c&#39;)\nexection -&gt; execution (insert &#39;u&#39;)\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= word1.length, word2.length &lt;= 500</code></li>\n\t<li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li>\n</ul>\n",
    "pythonCode": "def minDistance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = list(range(n + 1))\n    for i, c1 in enumerate(word1, 1):\n        prev = dp[0]; dp[0] = i\n        for j, c2 in enumerate(word2, 1):\n            cur = dp[j]\n            if c1 == c2: dp[j] = prev\n            else: dp[j] = 1 + min(prev, dp[j], dp[j - 1])\n            prev = cur\n    return dp[n]",
    "codeLines": 11,
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(min(M, N))",
    "whyBetterThanBruteForce": "Recursive search exploring insert, delete, replace operations takes O(3^(M+N)) exponential time. 1D rolling array DP computes Wagner-Fischer edit distance: if characters match, cost is prev; otherwise 1 + min(replace, delete, insert), running in O(M * N) time and O(N) space.",
    "edgeCasesAndBreakPoints": [
      "One string empty: returns length of the other string.",
      "Both strings empty: returns 0.",
      "Identical strings: returns 0 operations.",
      "Completely disjoint strings: returns max(M, N) operations."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "word1 = 'horse', word2 = 'ros'",
      "array": [
        "'horse'",
        "'ros'"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "step 1": "Replace 'h' with 'r'",
            "word": "'rorse'"
          },
          "msg": "Operation 1: Replace 'h' with 'r' -> 'rorse'."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "step 2": "Remove 'r'",
            "word": "'rose'"
          },
          "msg": "Operation 2: Remove middle 'r' -> 'rose'."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "step 3": "Remove 'e'",
            "word": "'ros'"
          },
          "msg": "Operation 3: Remove 'e' -> 'ros'. Total edit distance = 3. Complete!"
        }
      ]
    }
  },
  {
    "title": "Letter Case Permutation",
    "difficulty": "Easy",
    "url": "https://leetcode.com/problems/letter-case-permutation/",
    "pattern": "Backtracking",
    "short": "Backtracking",
    "intro": "Systematically choose, explore, and undo, pruning partial states that cannot lead to a solution.",
    "thinking": "What choices exist now, what makes a branch invalid, and what must be undone?",
    "steps": [
      "Restate **Letter Case Permutation** as a state/decision problem before writing code.",
      "Use the core Backtracking invariant: what choices exist now, what makes a branch invalid, and what must be undone?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Partial state",
      "Choose",
      "Explore",
      "Undo",
      "Next choice"
    ],
    "description": "<p>Given a string <code>s</code>, you&nbsp;can transform every letter individually to be lowercase or uppercase to create another string.</p>\n\n<p>Return <em>a list of all possible strings we could create</em>. Return the output in <strong>any order</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;a1b2&quot;\n<strong>Output:</strong> [&quot;a1b2&quot;,&quot;a1B2&quot;,&quot;A1b2&quot;,&quot;A1B2&quot;]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;3z4&quot;\n<strong>Output:</strong> [&quot;3z4&quot;,&quot;3Z4&quot;]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 12</code></li>\n\t<li><code>s</code> consists of lowercase English letters, uppercase English letters, and digits.</li>\n</ul>\n",
    "pythonCode": "def letterCasePermutation(s: str) -> list[str]:\n    ans = [\"\"]\n    for c in s:\n        if c.isalpha():\n            ans = [sub + ch for sub in ans for ch in (c.lower(), c.upper())]\n        else:\n            ans = [sub + c for sub in ans]\n    return ans",
    "codeLines": 8,
    "timeComplexity": "O(N * 2^K)",
    "spaceComplexity": "O(N * 2^K)",
    "whyBetterThanBruteForce": "Recursive backtracking requires call stack management and explicit undo steps. Iterative list comprehension branches each partial string with c.lower() and c.upper() in-place when encountering a letter, generating all permutations in optimal O(N * 2^K) time with minimal code.",
    "edgeCasesAndBreakPoints": [
      "String with no letters (e.g. '12345'): returns ['12345'].",
      "All letters: generates 2^len(s) permutations.",
      "Single character string: returns ['a', 'A'] or ['1'].",
      "Already mixed case string: correctly explores both case variations."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "s = 'a1b2'",
      "array": [
        "'a'",
        "'1'",
        "'b'",
        "'2'"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "c": "'a'",
            "ans": "['a', 'A']"
          },
          "msg": "'a' is letter: branch into 'a' and 'A'."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "c": "'1'",
            "ans": "['a1', 'A1']"
          },
          "msg": "'1' is digit: append to all."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "c": "'b'",
            "ans": "['a1b', 'a1B', 'A1b', 'A1B']"
          },
          "msg": "'b' is letter: branch each into lower and upper."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "c": "'2'",
            "result": "['a1b2', 'a1B2', 'A1b2', 'A1B2']"
          },
          "msg": "'2' is digit: append. 4 permutations generated. Complete!"
        }
      ]
    }
  },
  {
    "title": "Subsets",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/subsets/",
    "pattern": "Backtracking",
    "short": "Backtracking",
    "intro": "Systematically choose, explore, and undo, pruning partial states that cannot lead to a solution.",
    "thinking": "What choices exist now, what makes a branch invalid, and what must be undone?",
    "steps": [
      "Restate **Subsets** as a state/decision problem before writing code.",
      "Use the core Backtracking invariant: what choices exist now, what makes a branch invalid, and what must be undone?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Partial state",
      "Choose",
      "Explore",
      "Undo",
      "Next choice"
    ],
    "description": "<p>Given an integer array <code>nums</code> of <strong>unique</strong> elements, return <em>all possible</em> <span data-keyword=\"subset\"><em>subsets</em></span> <em>(the power set)</em>.</p>\n\n<p>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,3]\n<strong>Output:</strong> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0]\n<strong>Output:</strong> [[],[0]]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10</code></li>\n\t<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>\n\t<li>All the numbers of&nbsp;<code>nums</code> are <strong>unique</strong>.</li>\n</ul>\n",
    "pythonCode": "def subsets(nums: list[int]) -> list[list[int]]:\n    ans = [[]]\n    for x in nums:\n        ans += [sub + [x] for sub in ans]\n    return ans",
    "codeLines": 5,
    "timeComplexity": "O(N * 2^N)",
    "spaceComplexity": "O(N * 2^N)",
    "whyBetterThanBruteForce": "Recursive backtracking creates recursion overhead. Iterative subset expansion doubles the subset list with each new element: ans += [sub + [x] for sub in ans], constructing all 2^N subsets in optimal O(N * 2^N) time and 4 lines of code.",
    "edgeCasesAndBreakPoints": [
      "Empty array: returns [[]].",
      "Single element array: returns [[], [x]].",
      "Negative numbers: handled naturally without comparison constraints.",
      "Elements up to 10: 2^10 = 1024 subsets, generated in < 1ms."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "nums = [1, 2, 3]",
      "array": [
        1,
        2,
        3
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "init": "[[]]"
          },
          "msg": "Start with empty subset [[]]."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "add 1": "[[], [1]]"
          },
          "msg": "Include 1: duplicate and append 1 -> [[], [1]]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "add 2": "[[], [1], [2], [1, 2]]"
          },
          "msg": "Include 2: duplicate and append 2 -> 4 subsets."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "add 3": "8 subsets"
          },
          "msg": "Include 3: duplicate and append 3 -> 8 subsets generated. Complete!"
        }
      ]
    }
  },
  {
    "title": "Combination Sum",
    "difficulty": "Medium",
    "url": "https://leetcode.com/problems/combination-sum/",
    "pattern": "Backtracking",
    "short": "Backtracking",
    "intro": "Systematically choose, explore, and undo, pruning partial states that cannot lead to a solution.",
    "thinking": "What choices exist now, what makes a branch invalid, and what must be undone?",
    "steps": [
      "Restate **Combination Sum** as a state/decision problem before writing code.",
      "Use the core Backtracking invariant: what choices exist now, what makes a branch invalid, and what must be undone?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Partial state",
      "Choose",
      "Explore",
      "Undo",
      "Next choice"
    ],
    "description": "<p>Given an array of <strong>distinct</strong> integers <code>candidates</code> and a target integer <code>target</code>, return <em>a list of all <strong>unique combinations</strong> of </em><code>candidates</code><em> where the chosen numbers sum to </em><code>target</code><em>.</em> You may return the combinations in <strong>any order</strong>.</p>\n\n<p>The <strong>same</strong> number may be chosen from <code>candidates</code> an <strong>unlimited number of times</strong>. Two combinations are unique if the <span data-keyword=\"frequency-array\">frequency</span> of at least one of the chosen numbers is different.</p>\n\n<p>The test cases are generated such that the number of unique combinations that sum up to <code>target</code> is less than <code>150</code> combinations for the given input.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> candidates = [2,3,6,7], target = 7\n<strong>Output:</strong> [[2,2,3],[7]]\n<strong>Explanation:</strong>\n2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.\n7 is a candidate, and 7 = 7.\nThese are the only two combinations.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> candidates = [2,3,5], target = 8\n<strong>Output:</strong> [[2,2,2,2],[2,3,3],[3,5]]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> candidates = [2], target = 1\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= candidates.length &lt;= 30</code></li>\n\t<li><code>2 &lt;= candidates[i] &lt;= 40</code></li>\n\t<li>All elements of <code>candidates</code> are <strong>distinct</strong>.</li>\n\t<li><code>1 &lt;= target &lt;= 40</code></li>\n</ul>\n",
    "pythonCode": "def combinationSum(candidates: list[int], target: int) -> list[list[int]]:\n    ans = []\n    def dfs(start, target, path):\n        if target == 0:\n            ans.append(path); return\n        for i in range(start, len(candidates)):\n            x = candidates[i]\n            if x <= target:\n                dfs(i, target - x, path + [x])\n    candidates.sort()\n    dfs(0, target, [])\n    return ans",
    "codeLines": 12,
    "timeComplexity": "O(2^T)",
    "spaceComplexity": "O(T / min(C))",
    "whyBetterThanBruteForce": "Generating all permutations allows duplicate combinations in different orders. By sorting candidates and only allowing choices from index i onward (start=i), combinations are generated in canonical sorted order, eliminating duplicate set checks and pruning when x > target.",
    "edgeCasesAndBreakPoints": [
      "Target smaller than all candidates: returns [] immediately.",
      "Candidate divides target evenly: path reuses the same candidate repeatedly (dfs(i, ...)).",
      "Candidates in random order: candidates.sort() ensures sorted branch pruning.",
      "Large target with small candidates: path + [x] manages state without shared mutable list bugs."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "candidates = [2, 3, 6, 7], target = 7",
      "array": [
        2,
        3,
        6,
        7
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "path": "[2, 2, 3]",
            "sum": 7
          },
          "msg": "Branch 2 -> 2 -> 3: target remaining = 0! Found [2, 2, 3]."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "path": "[7]",
            "sum": 7
          },
          "msg": "Branch 7: target remaining = 0! Found [7]."
        },
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "results": "[[2, 2, 3], [7]]"
          },
          "msg": "All valid combinations found: [[2, 2, 3], [7]]. Complete!"
        }
      ]
    }
  },
  {
    "title": "N-Queens",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/n-queens/",
    "pattern": "Backtracking",
    "short": "Backtracking",
    "intro": "Systematically choose, explore, and undo, pruning partial states that cannot lead to a solution.",
    "thinking": "What choices exist now, what makes a branch invalid, and what must be undone?",
    "steps": [
      "Restate **N-Queens** as a state/decision problem before writing code.",
      "Use the core Backtracking invariant: what choices exist now, what makes a branch invalid, and what must be undone?",
      "Walk through a small example by hand and update the state after every operation.",
      "Test empty/minimum input, duplicates, boundaries, no-answer cases, and the largest structural edge case.",
      "Only after the reasoning is stable, implement and verify complexity against the problem constraints."
    ],
    "flow": [
      "Partial state",
      "Choose",
      "Explore",
      "Undo",
      "Next choice"
    ],
    "description": "<p>The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.</p>\n\n<p>Given an integer <code>n</code>, return <em>all distinct solutions to the <strong>n-queens puzzle</strong></em>. You may return the answer in <strong>any order</strong>.</p>\n\n<p>Each solution contains a distinct board configuration of the n-queens&#39; placement, where <code>&#39;Q&#39;</code> and <code>&#39;.&#39;</code> both indicate a queen and an empty space, respectively.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/13/queens.jpg\" style=\"width: 600px; height: 268px;\" />\n<pre>\n<strong>Input:</strong> n = 4\n<strong>Output:</strong> [[&quot;.Q..&quot;,&quot;...Q&quot;,&quot;Q...&quot;,&quot;..Q.&quot;],[&quot;..Q.&quot;,&quot;Q...&quot;,&quot;...Q&quot;,&quot;.Q..&quot;]]\n<strong>Explanation:</strong> There exist two distinct solutions to the 4-queens puzzle as shown above\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 1\n<strong>Output:</strong> [[&quot;Q&quot;]]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 9</code></li>\n</ul>\n",
    "pythonCode": "def solveNQueens(n: int) -> list[list[str]]:\n    ans = []\n    def dfs(r, cols, diag1, diag2, board):\n        if r == n:\n            ans.append([\"\".join(row) for row in board]); return\n        for c in range(n):\n            if not (cols & (1 << c) or diag1 & (1 << (r - c + n)) or diag2 & (1 << (r + c))):\n                board[r][c] = 'Q'\n                dfs(r + 1, cols | (1 << c), diag1 | (1 << (r - c + n)), diag2 | (1 << (r + c)), board)\n                board[r][c] = '.'\n    dfs(0, 0, 0, 0, [['.'] * n for _ in range(n)])\n    return ans",
    "codeLines": 12,
    "timeComplexity": "O(N!)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Testing all C(N^2, N) queen placements takes O(N^(2N)) combinations. By placing exactly one queen per row, checking conflicts along columns and diagonals using bitmasks takes O(1) time per candidate cell. Backtracking prunes invalid branches immediately, exploring only the valid permutations in O(N!) time with O(N) space.",
    "edgeCasesAndBreakPoints": [
      "n = 1: returns [['Q']].",
      "n = 2 or n = 3: no valid placement exists, returns [].",
      "Bitmask representations: r - c + n ensures diagonal indices remain positive.",
      "Board backtracking: resetting board[r][c] = '.' reuses memory cleanly."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "n = 4 (4-Queens Puzzle)",
      "array": [
        ". Q . .",
        ". . . Q",
        "Q . . .",
        ". . Q ."
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "row": 0,
            "queenPlaced": "(0, 1)"
          },
          "msg": "Row 0: Place queen at column 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "row": 1,
            "queenPlaced": "(1, 3)"
          },
          "msg": "Row 1: Columns 0, 1, 2 conflicted. Place queen at column 3."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "row": 2,
            "queenPlaced": "(2, 0)"
          },
          "msg": "Row 2: Place queen at column 0."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "row": 3,
            "queenPlaced": "(3, 2)",
            "solved": true
          },
          "msg": "Row 3: Place queen at column 2. All 4 queens placed safely! Solution 1 found."
        }
      ]
    }
  }
];
