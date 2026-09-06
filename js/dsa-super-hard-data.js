// DSA 25 Patterns — Hard Edition Dataset (75 Curated Free LeetCode Hard Problems)
const SUPER_HARD_DATA = [
  {
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/trapping-rain-water/",
    "pattern": "Two Pointers",
    "short": "Two Pointers",
    "intro": "Maintain two pointers (opposite ends or direction-synchronized) to collapse O(N^2) candidate pairs into O(N) by exploiting monotonic properties or boundary invariants.",
    "thinking": "How do the left and right boundary maxima determine how much water can be trapped at the current position without knowing the rest of the array?",
    "steps": [
      "Restate **Trapping Rain Water** as an invariant problem: trapped water at index i is determined by min(maxLeft, maxRight) - height[i].",
      "Initialize two pointers left = 0 and right = n - 1 with running maximums leftMax = 0 and rightMax = 0.",
      "At each iteration, process the side with the strictly smaller boundary: if height[left] < height[right], leftMax is the limiting bottleneck.",
      "Accumulate leftMax - height[left] (or update leftMax) and advance left++; symmetrically process the right side if height[right] <= height[left].",
      "Verify constraints: runs in O(N) time with O(1) auxiliary space, handling empty arrays and monotonic slopes gracefully."
    ],
    "flow": [
      "left=0, right=n-1",
      "Compare boundaries",
      "Advance limiting side",
      "Add trapped water",
      "Repeat until meet"
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
    "title": "Max Value of Equation",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/max-value-of-equation/",
    "pattern": "Two Pointers",
    "short": "Two Pointers",
    "intro": "Maintain two pointers (opposite ends or direction-synchronized) to collapse O(N^2) candidate pairs into O(N) by exploiting monotonic properties or boundary invariants.",
    "thinking": "How can rewriting yi + yj + |xi - xj| as (yi - xi) + (yj + xj) for xi < xj allow optimal candidate tracking with a sliding window deque or two pointers?",
    "steps": [
      "Restate **Max Value of Equation**: for sorted x coordinates, maximizing yi + yj + xj - xi is equivalent to maximizing (yi - xi) + (yj + xj) with xj - xi <= k.",
      "Use a monotonic deque or two-pointer boundary to maintain indices with valid distance xj - xi <= k.",
      "Ensure candidates are ordered decreasingly by their yi - xi score to guarantee O(1) retrieval of the optimal i for current j.",
      "Evict expired elements from the left (xj - xi > k) and drop inferior candidates from the right before inserting j.",
      "Validate against boundary cases where multiple points share identical x or when negative coordinates are present."
    ],
    "flow": [
      "Points (x, y)",
      "Expand right j",
      "Evict out-of-range i",
      "Query max (yi - xi)",
      "Push candidate j"
    ],
    "description": "<p>You are given an array <code>points</code> containing the coordinates of points on a 2D plane, sorted by the x-values, where <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> such that <code>x<sub>i</sub> &lt; x<sub>j</sub></code> for all <code>1 &lt;= i &lt; j &lt;= points.length</code>. You are also given an integer <code>k</code>.</p>\n\n<p>Return <em>the maximum value of the equation </em><code>y<sub>i</sub> + y<sub>j</sub> + |x<sub>i</sub> - x<sub>j</sub>|</code> where <code>|x<sub>i</sub> - x<sub>j</sub>| &lt;= k</code> and <code>1 &lt;= i &lt; j &lt;= points.length</code>.</p>\n\n<p>It is guaranteed that there exists at least one pair of points that satisfy the constraint <code>|x<sub>i</sub> - x<sub>j</sub>| &lt;= k</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> points = [[1,3],[2,0],[5,10],[6,-10]], k = 1\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> The first two points satisfy the condition |x<sub>i</sub> - x<sub>j</sub>| &lt;= 1 and if we calculate the equation we get 3 + 0 + |1 - 2| = 4. Third and fourth points also satisfy the condition and give a value of 10 + -10 + |5 - 6| = 1.\nNo other pairs satisfy the condition, so we return the max of 4 and 1.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> points = [[0,0],[3,0],[9,2]], k = 3\n<strong>Output:</strong> 3\n<strong>Explanation: </strong>Only the first two points have an absolute difference of 3 or less in the x-values, and give the value of 0 + 0 + |0 - 3| = 3.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= points.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>points[i].length == 2</code></li>\n\t<li><code>-10<sup>8</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>8</sup></code></li>\n\t<li><code>0 &lt;= k &lt;= 2 * 10<sup>8</sup></code></li>\n\t<li><code>x<sub>i</sub> &lt; x<sub>j</sub></code> for all <code>1 &lt;= i &lt; j &lt;= points.length</code></li>\n\t<li><code>x<sub>i</sub></code> form a strictly increasing sequence.</li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef findMaxValueOfEquation(points: list[list[int]], k: int) -> int:\n    q, ans = deque(), float(\"-inf\")\n    for x, y in points:\n        while q and x - q[0][1] > k:\n            q.popleft()\n        if q:\n            ans = max(ans, q[0][0] + y + x)\n        while q and q[-1][0] <= y - x:\n            q.pop()\n        q.append((y - x, x))\n    return ans",
    "codeLines": 13,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force evaluates all pairs (i, j) with xj - xi <= k in O(N^2) time. Since x is sorted, xj - xi > 0, so yi + yj + |xi - xj| transforms algebraically into (yi - xi) + (yj + xj). For each j, we need to find max(yi - xi) among all valid i where xj - xi <= k. A monotonic decreasing deque maintains candidate (yi - xi) values in O(1) amortized time per point, reducing overall complexity to O(N).",
    "edgeCasesAndBreakPoints": [
      "All point pairs have xj - xi > k except exactly one pair: correctly evicts all expired candidates.",
      "Negative coordinates for both x and y: deque comparisons must use float('-inf') sentinel for ans.",
      "Points with identical (y - x) values: popping condition q[-1][0] <= y - x ensures strict monotonicity.",
      "Minimal valid input of 2 points: guarantees valid pair retrieval without empty deque access."
    ],
    "simConfig": {
      "type": "deque",
      "inputDisplay": "points = [[1,3],[2,0],[5,10],[6,-10]], k = 1",
      "array": [
        "P0(1,3)",
        "P1(2,0)",
        "P2(5,10)",
        "P3(6,-10)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "curr": "[1,3]",
            "deque": "[(2, 1)]",
            "ans": "-inf"
          },
          "msg": "Point 0 (1,3): yi - xi = 2. Deque empty; push (2, 1)."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "curr": "[2,0]",
            "deque": "[(2, 1), (-2, 2)]",
            "ans": "4"
          },
          "msg": "Point 1 (2,0): x1 - x0 = 2 - 1 = 1 <= k. Ans = max(-inf, 2 + 0 + 2) = 4. Push (-2, 2)."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "curr": "[5,10]",
            "deque": "[(5, 5)]",
            "ans": "4"
          },
          "msg": "Point 2 (5,10): x2 - x0 = 4 > k, x2 - x1 = 3 > k. Evict both previous points. Push (10 - 5 = 5, 5)."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "curr": "[6,-10]",
            "deque": "[(5, 5), (-16, 6)]",
            "ans": "4"
          },
          "msg": "Point 3 (6,-10): x3 - x2 = 1 <= k. Candidate = 5 + (-10) + 6 = 1. Ans remains max(4, 1) = 4. Done!"
        }
      ]
    }
  },
  {
    "title": "Count Subarrays With Fixed Bounds",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/count-subarrays-with-fixed-bounds/",
    "pattern": "Two Pointers",
    "short": "Two Pointers",
    "intro": "Maintain two pointers (opposite ends or direction-synchronized) to collapse O(N^2) candidate pairs into O(N) by exploiting monotonic properties or boundary invariants.",
    "thinking": "What are the most recent positions of minK, maxK, and the most recent invalid boundary element?",
    "steps": [
      "Restate **Count Subarrays With Fixed Bounds**: any valid subarray ending at i must include both minK and maxK while containing no elements outside [minK, maxK].",
      "Track three indices as you scan: lastInvalid (latest index where nums[i] < minK || nums[i] > maxK), lastMin (latest nums[i] == minK), and lastMax (latest nums[i] == maxK).",
      "For each index i, any valid start index start must satisfy: lastInvalid < start <= min(lastMin, lastMax).",
      "Add max(0, min(lastMin, lastMax) - lastInvalid) to the answer for each index i in a single O(N) pass.",
      "Verify edge conditions: minK == maxK, arrays where no valid subarray exists, and large values up to 10^5 elements."
    ],
    "flow": [
      "Scan nums[i]",
      "Update lastInvalid",
      "Update lastMin & lastMax",
      "Add valid starts count",
      "O(N) total"
    ],
    "description": "<p>You are given an integer array <code>nums</code> and two integers <code>minK</code> and <code>maxK</code>.</p>\n\n<p>A <strong>fixed-bound subarray</strong> of <code>nums</code> is a subarray that satisfies the following conditions:</p>\n\n<ul>\n\t<li>The <strong>minimum</strong> value in the subarray is equal to <code>minK</code>.</li>\n\t<li>The <strong>maximum</strong> value in the subarray is equal to <code>maxK</code>.</li>\n</ul>\n\n<p>Return <em>the <strong>number</strong> of fixed-bound subarrays</em>.</p>\n\n<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,3,5,2,7,5], minK = 1, maxK = 5\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> The fixed-bound subarrays are [1,3,5] and [1,3,5,2].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,1,1,1], minK = 1, maxK = 1\n<strong>Output:</strong> 10\n<strong>Explanation:</strong> Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>1 &lt;= nums[i], minK, maxK &lt;= 10<sup>6</sup></code></li>\n</ul>\n",
    "pythonCode": "def countSubarrays(nums: list[int], minK: int, maxK: int) -> int:\n    bad = min_i = max_i = -1\n    ans = 0\n    for i, x in enumerate(nums):\n        if not minK <= x <= maxK:\n            bad = i\n        if x == minK: min_i = i\n        if x == maxK: max_i = i\n        ans += max(0, min(min_i, max_i) - bad)\n    return ans",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Brute force inspects all O(N^2) subarrays and finds their min and max in O(N^3) or O(N^2) time. By tracking the most recent indices of the invalid boundary (nums[i] not in [minK, maxK]), the latest minK, and the latest maxK, any valid subarray ending at index i must start after bad and at or before min(min_i, max_i). This allows counting all valid starting positions in O(1) per step in a single linear pass.",
    "edgeCasesAndBreakPoints": [
      "minK == maxK: single elements equal to minK satisfy both bounds simultaneously.",
      "Array with no valid elements: bad index stays current, max(0, min - bad) evaluates to 0.",
      "Long runs of elements strictly between minK and maxK: properly reuse previous min_i and max_i.",
      "All elements equal to minK and maxK: formula yields n*(n+1)//2 without integer overflow."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [1, 3, 5, 2, 7, 5], minK = 1, maxK = 5",
      "array": [
        1,
        3,
        5,
        2,
        7,
        5
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "x": 1,
            "min_i": 0,
            "max_i": -1,
            "bad": -1,
            "ans": 0
          },
          "msg": "i=0 (x=1): minK found! min_i=0. max_i is still -1; valid starts = max(0, -1 - (-1)) = 0."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "x": 3,
            "min_i": 0,
            "max_i": -1,
            "bad": -1,
            "ans": 0
          },
          "msg": "i=1 (x=3): in range [1, 5]. max_i still -1; valid starts = 0."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "i": 2,
            "x": 5,
            "min_i": 0,
            "max_i": 2,
            "bad": -1,
            "ans": 1
          },
          "msg": "i=2 (x=5): maxK found! min_i=0, max_i=2. Valid starts = min(0, 2) - (-1) = 1 (subarray [1,3,5]). ans=1."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "i": 3,
            "x": 2,
            "min_i": 0,
            "max_i": 2,
            "bad": -1,
            "ans": 2
          },
          "msg": "i=3 (x=2): in range. Valid starts = min(0, 2) - (-1) = 1 (subarray [1,3,5,2]). ans=1+1=2."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "i": 4,
            "x": 7,
            "min_i": 0,
            "max_i": 2,
            "bad": 4,
            "ans": 2
          },
          "msg": "i=4 (x=7): 7 > maxK! Bad boundary updated to bad=4. No valid subarray ends here."
        },
        {
          "active": [
            5
          ],
          "vars": {
            "i": 5,
            "x": 5,
            "min_i": 0,
            "max_i": 5,
            "bad": 4,
            "ans": 2
          },
          "msg": "i=5 (x=5): maxK found at 5, but min_i=0 < bad=4! Valid starts = max(0, 0 - 4) = 0. Final ans = 2."
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
    "intro": "Advance pointers at different relative speeds or strides to detect cycles, determine cycle entry points, identify periodic behavior, or stride through linked lists in K-sized chunks.",
    "thinking": "Can the existence of a duplicate substring of length L be checked monotonically, and how does rolling hash / pointer stepping verify collisions?",
    "steps": [
      "Restate **Longest Duplicate Substring**: if a duplicate substring of length L exists, any smaller length substring also exists (monotonic predicate).",
      "Binary search on the candidate length L in range [1, n - 1].",
      "For a fixed L, compute rolling polynomial hashes (Rabin-Karp) using dual modulo or 64-bit primes to avoid hash collisions.",
      "Use fast pointer stepping to advance the window across the string in O(N) time per length check.",
      "Total time complexity O(N log N); verify edge cases with repeating characters (e.g. banana, all same chars)."
    ],
    "flow": [
      "Binary search len L",
      "Compute rolling hash",
      "Slide fast pointer",
      "Hash match check",
      "Update max duplicate"
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
    "title": "Reverse Nodes in k-Group",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "pattern": "Fast & Slow Pointers",
    "short": "Fast & Slow Pointers",
    "intro": "Advance pointers at different relative speeds or strides to detect cycles, determine cycle entry points, identify periodic behavior, or stride through linked lists in K-sized chunks.",
    "thinking": "How do we probe k steps ahead with a fast pointer before deciding whether to reverse the current segment?",
    "steps": [
      "Restate **Reverse Nodes in k-Group**: reverse linked list nodes in batches of k; remaining trailing nodes (< k) must stay in original order.",
      "Use a fast pointer to count k nodes ahead from the current group start.",
      "If fewer than k nodes remain before reaching null, stop and leave the tail intact.",
      "Otherwise, reverse the k nodes in-place using standard three-pointer iterative reversal (prev, curr, next).",
      "Splice the reversed sublist back between the previous group tail and the next group head, then advance."
    ],
    "flow": [
      "Check k nodes ahead",
      "Less than k? Return",
      "Reverse k nodes",
      "Re-link boundaries",
      "Advance to next k"
    ],
    "description": "<p>Given the <code>head</code> of a linked list, reverse the nodes of the list <code>k</code> at a time, and return <em>the modified list</em>.</p>\n\n<p><code>k</code> is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of <code>k</code> then left-out nodes, in the end, should remain as it is.</p>\n\n<p>You may not alter the values in the list&#39;s nodes, only nodes themselves may be changed.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4,5], k = 2\n<strong>Output:</strong> [2,1,4,3,5]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4,5], k = 3\n<strong>Output:</strong> [3,2,1,4,5]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the list is <code>n</code>.</li>\n\t<li><code>1 &lt;= k &lt;= n &lt;= 5000</code></li>\n\t<li><code>0 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow-up:</strong> Can you solve the problem in <code>O(1)</code> extra memory space?</p>\n",
    "pythonCode": "def reverseKGroup(head, k: int):\n    dummy = jump = ListNode(0, head)\n    l = r = head\n    while True:\n        count = 0\n        while r and count < k:\n            r = r.next; count += 1\n        if count < k: break\n        prev, curr = r, l\n        for _ in range(k):\n            curr.next, prev, curr = prev, curr, curr.next\n        jump.next, jump, l = prev, l, r\n    return dummy.next",
    "codeLines": 13,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Extracting all node values to an array, reversing chunks of size k, and rebuilding the list requires O(N) auxiliary space. In-place pointer manipulation reverses each group of k nodes using standard 3-pointer reversal without allocating any new nodes or extra memory, achieving true O(1) space and a single O(N) pass.",
    "edgeCasesAndBreakPoints": [
      "k = 1: list remains completely unchanged, outer loop reverses single nodes trivially.",
      "List length is an exact multiple of k: all nodes reversed without trailing leftovers.",
      "Remaining nodes < k at the tail: loop detects count < k and leaves the tail completely untouched.",
      "Empty list or single node: safely returns head without null pointer dereferences."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "head = [1, 2, 3, 4, 5], k = 2",
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
            0,
            1
          ],
          "vars": {
            "group": 1,
            "nodes": "[1, 2]",
            "k": 2
          },
          "msg": "Probe group 1: 2 nodes present [1, 2]. Valid for reversal."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "group": 1,
            "reversed": "[2, 1]",
            "tail": 1
          },
          "msg": "Reverse group 1: [1 -> 2] becomes [2 -> 1]. Link dummy -> 2 -> 1."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "group": 2,
            "nodes": "[3, 4]",
            "k": 2
          },
          "msg": "Probe group 2: 2 nodes present [3, 4]. Valid for reversal."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "group": 2,
            "reversed": "[4, 3]",
            "tail": 3
          },
          "msg": "Reverse group 2: [3 -> 4] becomes [4 -> 3]. Splice: 1 -> 4 -> 3."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "group": 3,
            "remaining": 1,
            "k": 2
          },
          "msg": "Probe group 3: only 1 node [5] remaining (< k=2). Leave untouched."
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
            "result": "[2, 1, 4, 3, 5]"
          },
          "msg": "Final list: [2, 1, 4, 3, 5]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Design Skiplist",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/design-skiplist/",
    "pattern": "Fast & Slow Pointers",
    "short": "Fast & Slow Pointers",
    "intro": "Advance pointers at different relative speeds or strides to detect cycles, determine cycle entry points, identify periodic behavior, or stride through linked lists in K-sized chunks.",
    "thinking": "How do multi-level express pointers allow logarithmic search, insertion, and deletion without balance trees?",
    "steps": [
      "Restate **Design Skiplist**: build a probabilistic data structure that supports search, add, and erase in average O(log N) time.",
      "Each node contains a value and an array of forward pointers forward[level].",
      "Search traverses from highest level down: fast-forward along current level while forward[level].val < target, then drop down one level.",
      "Insertion records update points at every level, rolls coin flips to determine node height, and splices forward pointers.",
      "Erase unlinks the target node across all levels where it appears and trims empty top levels."
    ],
    "flow": [
      "Top-level entry",
      "Fast forward while < val",
      "Step down level",
      "Update pointers",
      "O(log N) operations"
    ],
    "description": "<p>Design a <strong>Skiplist</strong> without using any built-in libraries.</p>\n\n<p>A <strong>skiplist</strong> is a data structure that takes <code>O(log(n))</code> time to add, erase and search. Comparing with treap and red-black tree which has the same function and performance, the code length of Skiplist can be comparatively short and the idea behind Skiplists is just simple linked lists.</p>\n\n<p>For example, we have a Skiplist containing <code>[30,40,50,60,70,90]</code> and we want to add <code>80</code> and <code>45</code> into it. The Skiplist works this way:</p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2019/09/27/1506_skiplist.gif\" style=\"width: 500px; height: 173px;\" /><br />\n<small>Artyom Kalinin [CC BY-SA 3.0], via <a href=\"https://commons.wikimedia.org/wiki/File:Skip_list_add_element-en.gif\" target=\"_blank\" title=\"Artyom Kalinin [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons\">Wikimedia Commons</a></small></p>\n\n<p>You can see there are many layers in the Skiplist. Each layer is a sorted linked list. With the help of the top layers, add, erase and search can be faster than <code>O(n)</code>. It can be proven that the average time complexity for each operation is <code>O(log(n))</code> and space complexity is <code>O(n)</code>.</p>\n\n<p>See more about Skiplist: <a href=\"https://en.wikipedia.org/wiki/Skip_list\" target=\"_blank\">https://en.wikipedia.org/wiki/Skip_list</a></p>\n\n<p>Implement the <code>Skiplist</code> class:</p>\n\n<ul>\n\t<li><code>Skiplist()</code> Initializes the object of the skiplist.</li>\n\t<li><code>bool search(int target)</code> Returns <code>true</code> if the integer <code>target</code> exists in the Skiplist or <code>false</code> otherwise.</li>\n\t<li><code>void add(int num)</code> Inserts the value <code>num</code> into the SkipList.</li>\n\t<li><code>bool erase(int num)</code> Removes the value <code>num</code> from the Skiplist and returns <code>true</code>. If <code>num</code> does not exist in the Skiplist, do nothing and return <code>false</code>. If there exist multiple <code>num</code> values, removing any one of them is fine.</li>\n</ul>\n\n<p>Note that duplicates may exist in the Skiplist, your code needs to handle this situation.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;Skiplist&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;search&quot;, &quot;add&quot;, &quot;search&quot;, &quot;erase&quot;, &quot;erase&quot;, &quot;search&quot;]\n[[], [1], [2], [3], [0], [4], [1], [0], [1], [1]]\n<strong>Output</strong>\n[null, null, null, null, false, null, true, false, true, false]\n\n<strong>Explanation</strong>\nSkiplist skiplist = new Skiplist();\nskiplist.add(1);\nskiplist.add(2);\nskiplist.add(3);\nskiplist.search(0); // return False\nskiplist.add(4);\nskiplist.search(1); // return True\nskiplist.erase(0);  // return False, 0 is not in skiplist.\nskiplist.erase(1);  // return True\nskiplist.search(1); // return False, 1 has already been erased.</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= num, target &lt;= 2 * 10<sup>4</sup></code></li>\n\t<li>At most <code>5 * 10<sup>4</sup></code> calls will be made to <code>search</code>, <code>add</code>, and <code>erase</code>.</li>\n</ul>\n",
    "pythonCode": "import random\n\nclass Skiplist:\n    def __init__(self):\n        self.head = [None, None]  # [down, right, val]\n    def search(self, t: int) -> bool:\n        curr = self.head\n        while curr:\n            while curr[1] and curr[1][2] < t: curr = curr[1]\n            if curr[1] and curr[1][2] == t: return True\n            curr = curr[0]\n        return False\n    def add(self, num: int) -> None:\n        curr, stack = self.head, []\n        while curr:\n            while curr[1] and curr[1][2] < num: curr = curr[1]\n            stack.append(curr); curr = curr[0]\n        down = None\n        while stack:\n            prev = stack.pop()\n            prev[1] = down = [down, prev[1], num]\n            if random.getrandbits(1): break\n        else: self.head = [self.head, [down, None, num]]\n    def erase(self, num: int) -> bool:\n        curr, found = self.head, False\n        while curr:\n            while curr[1] and curr[1][2] < num: curr = curr[1]\n            if curr[1] and curr[1][2] == num:\n                curr[1] = curr[1][1]; found = True\n            curr = curr[0]\n        return found",
    "codeLines": 31,
    "timeComplexity": "O(log N) average",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "A singly linked list requires linear O(N) time for search, insertion, and deletion. Balanced binary trees (AVL, Red-Black) achieve O(log N) but require complex rotations. A Skiplist uses probabilistic multi-level express pointers to achieve O(log N) search and updates with far simpler linked pointer mechanics.",
    "edgeCasesAndBreakPoints": [
      "Duplicate values: handles multiple occurrences correctly by removing only one on erase().",
      "Erasing a non-existent element: search drops through all levels and returns False without mutating nodes.",
      "Adding elements smaller than all existing values: inserted directly adjacent to head across levels.",
      "Coin tosses promoting node above current max level: dynamically adds a new top head level."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "ops: add(1), add(2), add(3), search(0)->F, erase(0)->F, search(1)->T",
      "array": [
        "L2: Head -------> 3",
        "L1: Head ---> 2 -> 3",
        "L0: Head -> 1 -> 2 -> 3"
      ],
      "steps": [
        {
          "active": [
            2
          ],
          "vars": {
            "op": "add(1), add(2), add(3)",
            "levels": 3
          },
          "msg": "Skiplist built with 3 levels. Express highway at L2, intermediate at L1, full list at L0."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "op": "search(0)",
            "curr": "Head",
            "res": "False"
          },
          "msg": "search(0): At L2 head, right node is 3 > 0. Drop to L1, then L0. 0 not found -> return False."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "op": "search(1)",
            "curr": "L0 node 1",
            "res": "True"
          },
          "msg": "search(1): Drops down to L0, next node is 1 == target. Found! Return True."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "op": "erase(2)",
            "removed": 2
          },
          "msg": "erase(2): Unlinks node 2 from L1 and L0. Levels updated in O(log N)."
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
    "intro": "Maintain a dynamic contiguous span while preserving window invariants. Expand the right boundary to satisfy preconditions and contract the left boundary to restore validity or minimize window size.",
    "thinking": "What is the exact count of characters needed, and when has the current window satisfied all frequency requirements?",
    "steps": [
      "Restate **Minimum Window Substring**: find the smallest contiguous substring in s containing all characters of t with their required counts.",
      "Build a frequency map of t and maintain a required count of unique characters that still need satisfaction.",
      "Expand right pointer: update window frequency; if window[c] == target[c], decrement required.",
      "When required == 0, contract left pointer as much as possible while preserving validity, recording the minimal window.",
      "Runs in O(|s| + |t|) time with O(1) auxiliary alphabet space (ASCII 128 array)."
    ],
    "flow": [
      "Expand right",
      "Satisfy required chars",
      "Contract left",
      "Record minimum length",
      "Repeat to end"
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
    "title": "Sliding Window Maximum",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/sliding-window-maximum/",
    "pattern": "Sliding Window",
    "short": "Sliding Window",
    "intro": "Maintain a dynamic contiguous span while preserving window invariants. Expand the right boundary to satisfy preconditions and contract the left boundary to restore validity or minimize window size.",
    "thinking": "Which elements in the current window can never be the maximum in any future window?",
    "steps": [
      "Restate **Sliding Window Maximum**: for every window of size k, output the maximum element in O(N) overall time.",
      "Maintain a double-ended queue (deque) storing indices of elements in monotonically decreasing order of values.",
      "Before adding index i, pop all indices from the back whose values are <= nums[i] (they will never be the maximum).",
      "Remove indices from the front that have fallen outside the window (deque[0] <= i - k).",
      "Once i >= k - 1, the front of the deque nums[deque[0]] is the maximum for the current window."
    ],
    "flow": [
      "Add nums[i]",
      "Pop smaller back elements",
      "Evict old front indices",
      "Front is max",
      "Slide window"
    ],
    "description": "<p>You are given an array of integers&nbsp;<code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p>\n\n<p>Return <em>the max sliding window</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3\n<strong>Output:</strong> [3,3,5,5,6,7]\n<strong>Explanation:</strong> \nWindow position                Max\n---------------               -----\n[1  3  -1] -3  5  3  6  7       <strong>3</strong>\n 1 [3  -1  -3] 5  3  6  7       <strong>3</strong>\n 1  3 [-1  -3  5] 3  6  7      <strong> 5</strong>\n 1  3  -1 [-3  5  3] 6  7       <strong>5</strong>\n 1  3  -1  -3 [5  3  6] 7       <strong>6</strong>\n 1  3  -1  -3  5 [3  6  7]      <strong>7</strong>\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1], k = 1\n<strong>Output:</strong> [1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= k &lt;= nums.length</code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    q, ans = deque(), []\n    for i, x in enumerate(nums):\n        while q and nums[q[-1]] <= x: q.pop()\n        q.append(i)\n        if q[0] <= i - k: q.popleft()\n        if i >= k - 1: ans.append(nums[q[0]])\n    return ans",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Brute force recalculates the maximum across the window of size k at every step, taking O(N * K) time. A monotonic decreasing deque stores indices of potential maximums. Smaller elements pushed before a larger element can never become the maximum in any future window, so popping them maintains an amortized O(1) state per insertion, reducing total runtime to O(N).",
    "edgeCasesAndBreakPoints": [
      "k = 1: every single element is its own window maximum; deque processes each element in 1 step.",
      "k == len(nums): single window encompassing the entire array; outputs [max(nums)].",
      "Strictly decreasing array: deque retains up to k elements, evicting front on expiration.",
      "Strictly increasing array: deque consistently pops all elements and retains only 1 element."
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
            "window": "[1, 3, -1]",
            "deque": "[3, -1]",
            "max": 3
          },
          "msg": "Window [1, 3, -1]: 3 dominates 1 (popped). Front is 3. ans=[3]."
        },
        {
          "active": [
            1,
            2,
            3
          ],
          "vars": {
            "window": "[3, -1, -3]",
            "deque": "[3, -1, -3]",
            "max": 3
          },
          "msg": "Window [3, -1, -3]: -3 is smaller, appended. Front is 3. ans=[3, 3]."
        },
        {
          "active": [
            2,
            3,
            4
          ],
          "vars": {
            "window": "[-1, -3, 5]",
            "deque": "[5]",
            "max": 5
          },
          "msg": "Window [-1, -3, 5]: 5 dominates -1 and -3 (popped). Front is 5. ans=[3, 3, 5]."
        },
        {
          "active": [
            3,
            4,
            5
          ],
          "vars": {
            "window": "[-3, 5, 3]",
            "deque": "[5, 3]",
            "max": 5
          },
          "msg": "Window [-3, 5, 3]: 3 appended after 5. Front is 5. ans=[3, 3, 5, 5]."
        },
        {
          "active": [
            4,
            5,
            6
          ],
          "vars": {
            "window": "[5, 3, 6]",
            "deque": "[6]",
            "max": 6
          },
          "msg": "Window [5, 3, 6]: 6 dominates 5 and 3. Front is 6. ans=[3, 3, 5, 5, 6]."
        },
        {
          "active": [
            5,
            6,
            7
          ],
          "vars": {
            "window": "[3, 6, 7]",
            "deque": "[7]",
            "max": 7
          },
          "msg": "Window [3, 6, 7]: 7 dominates 6. Front is 7. ans=[3, 3, 5, 5, 6, 7]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Subarrays with K Different Integers",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/subarrays-with-k-different-integers/",
    "pattern": "Sliding Window",
    "short": "Sliding Window",
    "intro": "Maintain a dynamic contiguous span while preserving window invariants. Expand the right boundary to satisfy preconditions and contract the left boundary to restore validity or minimize window size.",
    "thinking": "Can the problem of 'exactly K' distinct elements be decomposed into 'at most K' minus 'at most K - 1'?",
    "steps": [
      "Restate **Subarrays with K Different Integers**: counting subarrays with exactly K distinct integers is equivalent to atMost(K) - atMost(K - 1).",
      "In atMost(k), expand right and maintain distinct count using a frequency hashmap or direct array.",
      "Whenever distinct count exceeds k, advance left and decrement frequencies until distinct count is <= k.",
      "The number of valid subarrays ending at right is simply right - left + 1.",
      "Compute atMost(k) - atMost(k - 1) in two O(N) passes, giving an elegant, optimal linear-time solution."
    ],
    "flow": [
      "Decompose to atMost(K)",
      "Expand right",
      "Contract left if > K",
      "Add (right - left + 1)",
      "Subtract atMost(K-1)"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the number of <strong>good subarrays</strong> of </em><code>nums</code>.</p>\n\n<p>A <strong>good array</strong> is an array where the number of different integers in that array is exactly <code>k</code>.</p>\n\n<ul>\n\t<li>For example, <code>[1,2,3,1,2]</code> has <code>3</code> different integers: <code>1</code>, <code>2</code>, and <code>3</code>.</li>\n</ul>\n\n<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,1,2,3], k = 2\n<strong>Output:</strong> 7\n<strong>Explanation:</strong> Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,1,3,4], k = 3\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= nums[i], k &lt;= nums.length</code></li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict\n\ndef subarraysWithKDistinct(nums: list[int], k: int) -> int:\n    def atMost(m: int) -> int:\n        cnt, l, res = defaultdict(int), 0, 0\n        for r, x in enumerate(nums):\n            if cnt[x] == 0: m -= 1\n            cnt[x] += 1\n            while m < 0:\n                cnt[nums[l]] -= 1\n                if cnt[nums[l]] == 0: m += 1\n                l += 1\n            res += r - l + 1\n        return res\n    return atMost(k) - atMost(k - 1)",
    "codeLines": 15,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Directly checking all O(N^2) subarrays and their distinct counts takes O(N^2) time. Standard sliding window cannot easily count 'exactly K' because contracting left might prematurely remove a distinct integer. Converting the problem into exactly(K) = atMost(K) - atMost(K - 1) allows standard monotonic sliding windows to compute each in O(N) time with O(K) space.",
    "edgeCasesAndBreakPoints": [
      "k = 1: counts subarrays consisting entirely of identical repeated values; atMost(0) returns 0.",
      "k > distinct elements in nums: returns 0 correctly since atMost(k) == atMost(k - 1).",
      "Array with all identical elements: atMost(1) = n*(n+1)//2, atMost(0) = 0.",
      "Large numbers up to 10^5: hashmap / array frequencies operate in strict amortized O(1)."
    ],
    "simConfig": {
      "type": "sliding_window",
      "inputDisplay": "nums = [1, 2, 1, 2, 3], k = 2",
      "array": [
        1,
        2,
        1,
        2,
        3
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "step": "atMost(2)",
            "window": "[1, 2]",
            "distinct": 2,
            "subarrays": 3
          },
          "msg": "Run atMost(2): window [1, 2] has 2 distinct. Valid ending at r=1: 2 subarrays."
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "step": "atMost(2)",
            "window": "[1, 2, 1, 2]",
            "distinct": 2,
            "subarrays": 10
          },
          "msg": "Expand through index 3: window [1, 2, 1, 2] still has 2 distinct. atMost(2) total = 12."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "step": "atMost(1)",
            "distinct": 1,
            "subarrays": 5
          },
          "msg": "Run atMost(1): counts subarrays with at most 1 distinct value. Total = 5."
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
            "result": "12 - 5 = 7"
          },
          "msg": "Difference: atMost(2) - atMost(1) = 12 - 5 = 7 good subarrays. Done!"
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
    "intro": "Precompute cumulative transformations to answer range queries, detect target sum frequencies, and evaluate submatrix combinations in constant time.",
    "thinking": "How can fixing the middle subarray of length k allow left and right optimal subarrays to be queried in O(1)?",
    "steps": [
      "Restate **Maximum Sum of 3 Non-Overlapping Subarrays**: pick 3 disjoint subarrays of length k that maximize total sum.",
      "Precompute 1D prefix sums to evaluate any length-k subarray sum W[i] in O(1).",
      "Compute left[i]: index of the best subarray of length k in range [0, i].",
      "Compute right[i]: index of the best subarray of length k in range [i, n - 1].",
      "Iterate over all valid middle subarray start indices j from k to n - 2k: maximize W[left[j - k]] + W[j] + W[right[j + k]] in O(N) time."
    ],
    "flow": [
      "Prefix sums",
      "Compute window sums W",
      "Best left[i]",
      "Best right[i]",
      "Find optimal middle j"
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
    "title": "Number of Submatrices That Sum to Target",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/",
    "pattern": "Prefix Sum",
    "short": "Prefix Sum",
    "intro": "Precompute cumulative transformations to answer range queries, detect target sum frequencies, and evaluate submatrix combinations in constant time.",
    "thinking": "How can 2D submatrix sums be compressed into 1D prefix sum subarray counts between row pairs?",
    "steps": [
      "Restate **Number of Submatrices That Sum to Target**: count rectangular submatrices whose sum equals target.",
      "Compute prefix sums along each row of the matrix in O(R * C).",
      "Fix every pair of columns (c1, c2) where c1 <= c2.",
      "For the fixed column pair, each row becomes a single 1D value: rowSum[r] = prefix[r][c2] - prefix[r][c1 - 1].",
      "Run the classic 1D Subarray Sum Equals Target with a hashmap on the row sums in O(R) time, yielding overall O(C^2 * R) complexity."
    ],
    "flow": [
      "Row prefix sums",
      "Fix column pair (c1, c2)",
      "1D cumulative sum map",
      "Count prefix - target",
      "Accumulate answer"
    ],
    "description": "<p>Given a <code>matrix</code>&nbsp;and a <code>target</code>, return the number of non-empty submatrices that sum to <font face=\"monospace\">target</font>.</p>\n\n<p>A submatrix <code>x1, y1, x2, y2</code> is the set of all cells <code>matrix[x][y]</code> with <code>x1 &lt;= x &lt;= x2</code> and <code>y1 &lt;= y &lt;= y2</code>.</p>\n\n<p>Two submatrices <code>(x1, y1, x2, y2)</code> and <code>(x1&#39;, y1&#39;, x2&#39;, y2&#39;)</code> are different if they have some coordinate&nbsp;that is different: for example, if <code>x1 != x1&#39;</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/02/mate1.jpg\" style=\"width: 242px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> The four 1x1 submatrices that only contain 0.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> matrix = [[1,-1],[-1,1]], target = 0\n<strong>Output:</strong> 5\n<strong>Explanation:</strong> The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> matrix = [[904]], target = 0\n<strong>Output:</strong> 0\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= matrix.length &lt;= 100</code></li>\n\t<li><code>1 &lt;= matrix[0].length &lt;= 100</code></li>\n\t<li><code>-1000 &lt;= matrix[i][j] &lt;= 1000</code></li>\n\t<li><code>-10^8 &lt;= target &lt;= 10^8</code></li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict\n\ndef numSubmatrixSumTarget(matrix: list[list[int]], target: int) -> int:\n    R, C = len(matrix), len(matrix[0])\n    for r in range(R):\n        for c in range(1, C): matrix[r][c] += matrix[r][c - 1]\n    ans = 0\n    for c1 in range(C):\n        for c2 in range(c1, C):\n            mp = defaultdict(int)\n            mp[0] = cur = 0\n            for r in range(R):\n                cur += matrix[r][c2] - (matrix[r][c1 - 1] if c1 > 0 else 0)\n                ans += mp[cur - target]\n                mp[cur] += 1\n    return ans",
    "codeLines": 16,
    "timeComplexity": "O(C^2 * R)",
    "spaceComplexity": "O(R)",
    "whyBetterThanBruteForce": "Brute force checks all O(R^2 * C^2) submatrices in O(R^3 * C^3) or O(R^2 * C^2) with 2D prefix sums. By row-compressing 2D columns: fixing column pairs (c1, c2) reduces the 2D problem into 1D Subarray Sum Equals Target across the R rows, solved via hashmap in O(R) time, slashing total runtime to O(C^2 * R).",
    "edgeCasesAndBreakPoints": [
      "1x1 matrix: correctly evaluates single cell against target.",
      "target = 0 with zeroes in matrix: hashmap initialization mp[0] = 1 captures submatrices starting at row 0.",
      "Negative values in matrix: prefix sum differences naturally handle non-monotonic cumulative sums.",
      "Tall narrow matrix (R >> C): iterating column pairs (C^2 * R) minimizes total loop steps."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0",
      "array": [
        "[0, 1, 0]",
        "[1, 1, 1]",
        "[0, 1, 0]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "target": 0,
            "cols": "c1=0, c2=0"
          },
          "msg": "Fix column pair c1=0, c2=0: column vector is [0, 1, 0]."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "row": 0,
            "sum": 0,
            "target": 0,
            "count": 1
          },
          "msg": "Row 0: value 0 == target! Found 1x1 submatrix at (0,0). count=1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "row": 2,
            "sum": 0,
            "target": 0,
            "count": 2
          },
          "msg": "Row 2: value 0 == target! Found 1x1 submatrix at (2,0). count=2."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "c1": 2,
            "c2": 2,
            "count": 4
          },
          "msg": "Symmetrically scan other column pairs. Column 2 yields 2 more zeroes. Total count = 4."
        }
      ]
    }
  },
  {
    "title": "Shortest Subarray with Sum at Least K",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
    "pattern": "Prefix Sum",
    "short": "Prefix Sum",
    "intro": "Precompute cumulative transformations to answer range queries, detect target sum frequencies, and evaluate submatrix combinations in constant time.",
    "thinking": "When array elements can be negative, standard sliding window fails: how does a monotonic deque over prefix sums maintain candidate start indices?",
    "steps": [
      "Restate **Shortest Subarray with Sum at Least K**: find minimum length subarray with sum >= k in an array containing negative numbers.",
      "Build prefix sum array P where P[j] - P[i] >= k with i < j.",
      "Maintain a deque of indices i such that prefix sums P[i] are strictly increasing.",
      "When visiting j, pop from front while P[j] - P[deque[0]] >= k and update minimal length minLen = min(minLen, j - deque.shift()).",
      "Pop from back while P[j] <= P[deque.back()] since any future index x > j paired with deque.back() is inferior to pairing with j."
    ],
    "flow": [
      "Compute prefix sum P",
      "Monotonic deque of indices",
      "Check front P[j] - P[i] >= K",
      "Pop back if P[j] <= P[back]",
      "O(N) total"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the length of the shortest non-empty <strong>subarray</strong> of </em><code>nums</code><em> with a sum of at least </em><code>k</code>. If there is no such <strong>subarray</strong>, return <code>-1</code>.</p>\n\n<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [1], k = 1\n<strong>Output:</strong> 1\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [1,2], k = 4\n<strong>Output:</strong> -1\n</pre><p><strong class=\"example\">Example 3:</strong></p>\n<pre><strong>Input:</strong> nums = [2,-1,2], k = 3\n<strong>Output:</strong> 3\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>\n\t<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef shortestSubarray(nums: list[int], k: int) -> int:\n    P = [0]\n    for x in nums: P.append(P[-1] + x)\n    q, ans = deque(), float(\"inf\")\n    for j, p in enumerate(P):\n        while q and p - P[q[0]] >= k:\n            ans = min(ans, j - q.popleft())\n        while q and p <= P[q[-1]]:\n            q.pop()\n        q.append(j)\n    return ans if ans != float(\"inf\") else -1",
    "codeLines": 13,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Because nums contains negative values, prefix sums are non-monotonic, breaking standard two-pointer sliding windows and forcing brute force to test all O(N^2) pairs. A monotonic increasing deque stores prefix sum indices: when P[j] - P[q[0]] >= k, q[0] will never form a shorter valid subarray with any future index > j, so popping it leftward and pruning larger values rightward guarantees O(N) linear time.",
    "edgeCasesAndBreakPoints": [
      "Array with all negative numbers and k > 0: returns -1 as no subarray achieves sum >= k.",
      "Single element >= k: prefix sum difference detects length 1 immediately.",
      "Large negative drops: monotonic deque discards inferior start indices P[q[-1]] >= P[j].",
      "k larger than total array sum: returns -1 after full scan."
    ],
    "simConfig": {
      "type": "deque",
      "inputDisplay": "nums = [2, -1, 2], k = 3",
      "array": [
        2,
        -1,
        2
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "prefix": "[0, 2, 1, 3]",
            "deque": "[0]",
            "ans": "inf"
          },
          "msg": "Compute prefix sums P = [0, 2, 1, 3]. Push index 0 into deque."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "j": 1,
            "P[1]": 2,
            "deque": "[0, 1]"
          },
          "msg": "j=1, P[1]=2: 2 - 0 = 2 < 3. Push index 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "j": 2,
            "P[2]": 1,
            "deque": "[0, 2]"
          },
          "msg": "j=2, P[2]=1: P[2] < P[1] (1 < 2). Pop 1 from back (inferior start)! Push 2."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "j": 3,
            "P[3]": 3,
            "ans": 3
          },
          "msg": "j=3, P[3]=3: P[3] - P[0] = 3 >= k=3! Valid subarray len = 3 - 0 = 3. Pop 0."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "res": 3
          },
          "msg": "Scan complete. Shortest subarray with sum >= 3 has length 3 ([2, -1, 2])."
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
    "intro": "Map complex state, canonical representations, or geometric invariants into hashable keys to resolve lookups, group equivalence classes, and track frequency distributions in O(1) amortized time.",
    "thinking": "Since all words are identical in length L, how can we partition the string into L distinct offset lanes and run sliding window word-hashmap checks?",
    "steps": [
      "Restate **Substring with Concatenation of All Words**: find start indices of substrings formed by concatenating all given words of uniform length L.",
      "Count word frequencies in a target hashmap wordCount.",
      "Iterate over offset i from 0 to L - 1 to create independent word-token streams.",
      "For each offset, maintain a sliding window of words using a seen hashmap, tracking how many valid words are matched.",
      "If an unrecognized word appears, flush window; if a word exceeds target frequency, slide left until valid.",
      "Overall complexity O(|s| * L) with O(num_words * L) space."
    ],
    "flow": [
      "Lanes 0 .. L-1",
      "Tokenize by word length L",
      "Maintain word hashmap",
      "Slide window of words",
      "Record matching offsets"
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
    "title": "All O`one Data Structure",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/all-oone-data-structure/",
    "pattern": "HashMap",
    "short": "HashMap",
    "intro": "Map complex state, canonical representations, or geometric invariants into hashable keys to resolve lookups, group equivalence classes, and track frequency distributions in O(1) amortized time.",
    "thinking": "How do you combine a hashmap of key-to-node pointers with a doubly linked list of frequency buckets to achieve strict O(1) getMaxKey and getMinKey?",
    "steps": [
      "Restate **All O`one Data Structure**: design a data structure supporting inc(key), dec(key), getMaxKey(), and getMinKey() in strict O(1) time.",
      "Construct a doubly linked list where each node represents a distinct frequency count and holds a set of keys with that count.",
      "Maintain a hashmap keyNode mapping each key to its containing bucket node.",
      "On inc(key): move key from bucket c to bucket c + 1 (creating bucket c + 1 adjacent to c if missing), removing empty buckets.",
      "getMaxKey() reads from tail bucket, getMinKey() reads from head bucket in true O(1) time."
    ],
    "flow": [
      "Doubly linked frequency list",
      "Map key -> Node",
      "inc: advance bucket",
      "dec: regress bucket",
      "O(1) min/max access"
    ],
    "description": "<p>Design a data structure to store the strings&#39; count with the ability to return the strings with minimum and maximum counts.</p>\n\n<p>Implement the <code>AllOne</code> class:</p>\n\n<ul>\n\t<li><code>AllOne()</code> Initializes the object of the data structure.</li>\n\t<li><code>inc(String key)</code> Increments the count of the string <code>key</code> by <code>1</code>. If <code>key</code> does not exist in the data structure, insert it with count <code>1</code>.</li>\n\t<li><code>dec(String key)</code> Decrements the count of the string <code>key</code> by <code>1</code>. If the count of <code>key</code> is <code>0</code> after the decrement, remove it from the data structure. It is guaranteed that <code>key</code> exists in the data structure before the decrement.</li>\n\t<li><code>getMaxKey()</code> Returns one of the keys with the maximal count. If no element exists, return an empty string <code>&quot;&quot;</code>.</li>\n\t<li><code>getMinKey()</code> Returns one of the keys with the minimum count. If no element exists, return an empty string <code>&quot;&quot;</code>.</li>\n</ul>\n\n<p><strong>Note</strong> that each function must run in <code>O(1)</code> average time complexity.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;AllOne&quot;, &quot;inc&quot;, &quot;inc&quot;, &quot;getMaxKey&quot;, &quot;getMinKey&quot;, &quot;inc&quot;, &quot;getMaxKey&quot;, &quot;getMinKey&quot;]\n[[], [&quot;hello&quot;], [&quot;hello&quot;], [], [], [&quot;leet&quot;], [], []]\n<strong>Output</strong>\n[null, null, null, &quot;hello&quot;, &quot;hello&quot;, null, &quot;hello&quot;, &quot;leet&quot;]\n\n<strong>Explanation</strong>\nAllOne allOne = new AllOne();\nallOne.inc(&quot;hello&quot;);\nallOne.inc(&quot;hello&quot;);\nallOne.getMaxKey(); // return &quot;hello&quot;\nallOne.getMinKey(); // return &quot;hello&quot;\nallOne.inc(&quot;leet&quot;);\nallOne.getMaxKey(); // return &quot;hello&quot;\nallOne.getMinKey(); // return &quot;leet&quot;\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= key.length &lt;= 10</code></li>\n\t<li><code>key</code> consists of lowercase English letters.</li>\n\t<li>It is guaranteed that for each call to <code>dec</code>, <code>key</code> is existing in the data structure.</li>\n\t<li>At most <code>5 * 10<sup>4</sup></code>&nbsp;calls will be made to <code>inc</code>, <code>dec</code>, <code>getMaxKey</code>, and <code>getMinKey</code>.</li>\n</ul>\n",
    "pythonCode": "class Node:\n    def __init__(self, c=0):\n        self.c, self.keys, self.prev, self.next = c, set(), None, None\n\nclass AllOne:\n    def __init__(self):\n        self.head, self.tail = Node(), Node()\n        self.head.next, self.tail.prev = self.tail, self.head\n        self.map = {}\n    def _add(self, p, n):\n        n.prev, n.next = p, p.next\n        p.next.prev = p.next = n\n    def _rem(self, n):\n        n.prev.next, n.next.prev = n.next, n.prev\n    def inc(self, key: str) -> None:\n        if key not in self.map:\n            if self.head.next.c != 1: self._add(self.head, Node(1))\n            self.head.next.keys.add(key)\n            self.map[key] = self.head.next\n        else:\n            cur = self.map[key]\n            if cur.next.c != cur.c + 1: self._add(cur, Node(cur.c + 1))\n            cur.next.keys.add(key); self.map[key] = cur.next\n            cur.keys.remove(key)\n            if not cur.keys: self._rem(cur)\n    def dec(self, key: str) -> None:\n        cur = self.map[key]\n        if cur.c == 1: del self.map[key]\n        else:\n            if cur.prev.c != cur.c - 1: self._add(cur.prev, Node(cur.c - 1))\n            cur.prev.keys.add(key); self.map[key] = cur.prev\n        cur.keys.remove(key)\n        if not cur.keys: self._rem(cur)\n    def getMaxKey(self) -> str:\n        return next(iter(self.tail.prev.keys)) if self.tail.prev != self.head else \"\"\n    def getMinKey(self) -> str:\n        return next(iter(self.head.next.keys)) if self.head.next != self.tail else \"\"",
    "codeLines": 37,
    "timeComplexity": "O(1) strictly for all ops",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "A naive hashmap requires O(N) to find min and max keys. Heaps require O(log N) for inserts and cannot easily decrement keys in O(1). By pairing a hashmap of key-to-node pointers with a doubly linked list of frequency buckets, inserting, incrementing, decrementing, and querying min/max are all performed in strict O(1) time.",
    "edgeCasesAndBreakPoints": [
      "Data structure completely empty: getMaxKey and getMinKey return '' cleanly.",
      "All keys decremented to count 0: removed from map and empty frequency nodes deleted.",
      "Single key incremented multiple times: bucket count advances without orphan nodes.",
      "Multiple keys sharing same count: held in python set within same bucket node."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "inc('hello'), inc('hello'), inc('leet'), getMaxKey(), getMinKey()",
      "array": [
        "Head",
        "Bucket(cnt=1: {'leet'})",
        "Bucket(cnt=2: {'hello'})",
        "Tail"
      ],
      "steps": [
        {
          "active": [
            1
          ],
          "vars": {
            "op": "inc('hello')",
            "state": "Bucket 1: {'hello'}"
          },
          "msg": "inc('hello'): creates bucket count=1 with {'hello'}."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "op": "inc('hello')",
            "state": "Bucket 2: {'hello'}"
          },
          "msg": "inc('hello'): moves 'hello' to bucket count=2. Bucket 1 removed."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "op": "inc('leet')",
            "state": "Bucket 1: {'leet'}, Bucket 2: {'hello'}"
          },
          "msg": "inc('leet'): creates bucket count=1 with {'leet'}."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "op": "getMaxKey()",
            "result": "'hello'"
          },
          "msg": "getMaxKey(): read tail.prev bucket -> 'hello' in O(1)."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "op": "getMinKey()",
            "result": "'leet'"
          },
          "msg": "getMinKey(): read head.next bucket -> 'leet' in O(1)."
        }
      ]
    }
  },
  {
    "title": "Max Points on a Line",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/max-points-on-a-line/",
    "pattern": "HashMap",
    "short": "HashMap",
    "intro": "Map complex state, canonical representations, or geometric invariants into hashable keys to resolve lookups, group equivalence classes, and track frequency distributions in O(1) amortized time.",
    "thinking": "How do coprime slope representations (dy / gcd, dx / gcd) avoid floating point inaccuracies when hashing lines through a fixed anchor point?",
    "steps": [
      "Restate **Max Points on a Line**: find the maximum number of points that lie on the same straight line.",
      "For each point i, treat it as an anchor and evaluate lines to all other points j.",
      "Represent slope between i and j as a reduced fraction (dy / g, dx / g) where g = gcd(dy, dx) to eliminate float precision errors.",
      "Count slope frequencies using a hashmap for the current anchor i, tracking duplicates.",
      "Update the global maximum after scanning all pairs in O(N^2) time with O(N) hashmap space."
    ],
    "flow": [
      "Anchor point i",
      "Compute reduced slope (dy,dx)",
      "Hashmap slope count",
      "Track max through i",
      "Repeat for all points"
    ],
    "description": "<p>Given an array of <code>points</code> where <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> represents a point on the <strong>X-Y</strong> plane, return <em>the maximum number of points that lie on the same straight line</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg\" style=\"width: 300px; height: 294px;\" />\n<pre>\n<strong>Input:</strong> points = [[1,1],[2,2],[3,3]]\n<strong>Output:</strong> 3\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg\" style=\"width: 300px; height: 294px;\" />\n<pre>\n<strong>Input:</strong> points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]\n<strong>Output:</strong> 4\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= points.length &lt;= 300</code></li>\n\t<li><code>points[i].length == 2</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>\n\t<li>All the <code>points</code> are <strong>unique</strong>.</li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict\nfrom math import gcd\n\ndef maxPoints(points: list[list[int]]) -> int:\n    n, ans = len(points), 0\n    if n <= 2: return n\n    for i in range(n):\n        slopes = defaultdict(int)\n        x1, y1 = points[i]\n        for j in range(i + 1, n):\n            dx, dy = points[j][0] - x1, points[j][1] - y1\n            g = gcd(dx, dy)\n            dx, dy = dx // g, dy // g\n            if dx < 0 or (dx == 0 and dy < 0): dx, dy = -dx, -dy\n            slopes[(dx, dy)] += 1\n        ans = max(ans, max(slopes.values(), default=0) + 1)\n    return ans",
    "codeLines": 17,
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force evaluates all triplets of points (i, j, k) to test collinearity using cross products in O(N^3) time. By anchoring each point i and computing the reduced slope (dy/g, dx/g) to all subsequent points j, a hashmap tallies lines through i in O(N), reducing total time across all anchors to O(N^2) while avoiding floating-point imprecision.",
    "edgeCasesAndBreakPoints": [
      "n <= 2: any 1 or 2 points are trivially collinear; returns n immediately.",
      "Vertical lines (dx == 0): normalized to (0, 1) to avoid division by zero.",
      "Horizontal lines (dy == 0): normalized to (1, 0).",
      "Negative coordinates and inverted directions: normalized sign ensures canonical representation."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "points = [[1,1],[2,2],[3,3]]",
      "array": [
        "P0(1,1)",
        "P1(2,2)",
        "P2(3,3)"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "anchor": "P0(1,1)",
            "slope(P0, P1)": "(1, 1)"
          },
          "msg": "Anchor P0: slope to P1 is (2-1)/(2-1) = (1, 1). Count = 1."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "anchor": "P0(1,1)",
            "slope(P0, P2)": "(1, 1)"
          },
          "msg": "Anchor P0: slope to P2 is (3-1)/(3-1) = (1, 1). Count = 2."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "maxPoints": 3
          },
          "msg": "Max slope frequency for P0 is 2 + 1 (anchor itself) = 3 points. Complete!"
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
    "intro": "Maintain LIFO state and enforce monotonic order (increasing or decreasing) to resolve nearest greater/smaller boundaries, calculate spanned areas, and evaluate nested syntax trees.",
    "thinking": "For each bar, what is the farthest left and right it can extend as the minimum height bar?",
    "steps": [
      "Restate **Largest Rectangle in Histogram**: find the area of the largest rectangle in the histogram.",
      "Maintain a monotonic increasing stack storing bar indices.",
      "When a bar heights[i] is smaller than the bar at stack top, pop the top bar: its height is the rectangle height.",
      "The width is i - stack.top - 1 (right boundary is i, left boundary is current stack top).",
      "Push i onto stack; append a sentinel 0 at the end to flush all remaining bars. Total time O(N)."
    ],
    "flow": [
      "Monotonic increasing stack",
      "Current < top? Pop top",
      "Height = popped bar",
      "Width = i - newTop - 1",
      "Max area update"
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
    "title": "Maximal Rectangle",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/maximal-rectangle/",
    "pattern": "Stack",
    "short": "Stack",
    "intro": "Maintain LIFO state and enforce monotonic order (increasing or decreasing) to resolve nearest greater/smaller boundaries, calculate spanned areas, and evaluate nested syntax trees.",
    "thinking": "How can a 2D binary grid be reduced into row-by-row histogram arrays where each row invokes Largest Rectangle in Histogram?",
    "steps": [
      "Restate **Maximal Rectangle**: find the largest rectangle containing only 1s in a binary matrix.",
      "Maintain an array heights[col] representing consecutive 1s up to the current row.",
      "For each row, update heights[c] = (matrix[r][c] == '1') ? heights[c] + 1 : 0.",
      "Pass heights into the monotonic stack histogram algorithm to find the largest rectangle anchored at this row in O(C).",
      "Repeat across all R rows, solving the problem in optimal O(R * C) time."
    ],
    "flow": [
      "Row-wise histogram heights",
      "Update column heights",
      "Monotonic stack on row",
      "Compute row max area",
      "O(R * C) overall"
    ],
    "description": "<p>Given a <code>rows x cols</code>&nbsp;binary <code>matrix</code> filled with <code>0</code>&#39;s and <code>1</code>&#39;s, find the largest rectangle containing only <code>1</code>&#39;s and return <em>its area</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg\" style=\"width: 402px; height: 322px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;]]\n<strong>Output:</strong> 6\n<strong>Explanation:</strong> The maximal rectangle is shown in the above picture.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> matrix = [[&quot;0&quot;]]\n<strong>Output:</strong> 0\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> matrix = [[&quot;1&quot;]]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>rows == matrix.length</code></li>\n\t<li><code>cols == matrix[i].length</code></li>\n\t<li><code>1 &lt;= rows, cols &lt;= 200</code></li>\n\t<li><code>matrix[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>\n</ul>\n",
    "pythonCode": "def maximalRectangle(matrix: list[list[str]]) -> int:\n    if not matrix or not matrix[0]: return 0\n    C, ans = len(matrix[0]), 0\n    heights = [0] * (C + 1)\n    for row in matrix:\n        for c in range(C):\n            heights[c] = heights[c] + 1 if row[c] == '1' else 0\n        stack = [-1]\n        for i in range(C + 1):\n            while stack[-1] != -1 and heights[stack[-1]] >= heights[i]:\n                ans = max(ans, heights[stack.pop()] * (i - stack[-1] - 1))\n            stack.append(i)\n    return ans",
    "codeLines": 13,
    "timeComplexity": "O(R * C)",
    "spaceComplexity": "O(C)",
    "whyBetterThanBruteForce": "Brute force checks all O(R^2 * C^2) subrectangles and verifies if they are entirely composed of '1's in O(R^3 * C^3) time. By treating each row as the base of a histogram (where consecutive '1's accumulate height and '0' resets to 0), we apply the linear Largest Rectangle in Histogram algorithm across each of the R rows. This reduces the time complexity to O(R * C) with O(C) memory.",
    "edgeCasesAndBreakPoints": [
      "Grid consisting entirely of '0's: heights array stays 0; returns 0.",
      "Single row or single column matrix: evaluated cleanly as a 1D histogram.",
      "Checkerboard pattern: alternating heights prevent large rectangles; handled in linear time.",
      "Grid entirely composed of '1's: returns total area R * C."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "matrix = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]",
      "array": [
        "['1','0','1','0','0']",
        "['1','0','1','1','1']",
        "['1','1','1','1','1']",
        "['1','0','0','1','0']"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "row": 0,
            "heights": "[1, 0, 1, 0, 0]",
            "maxArea": 1
          },
          "msg": "Row 0 histogram: [1, 0, 1, 0, 0]. Max area = 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "row": 1,
            "heights": "[2, 0, 2, 1, 1]",
            "maxArea": 3
          },
          "msg": "Row 1 histogram: [2, 0, 2, 1, 1]. Max area = 3 (bars 2..4 height 1)."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "row": 2,
            "heights": "[3, 1, 3, 2, 2]",
            "maxArea": 6
          },
          "msg": "Row 2 histogram: [3, 1, 3, 2, 2]. Max area = 6 (indices 2..4 width 3, height 2)."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "row": 3,
            "heights": "[4, 0, 0, 3, 0]",
            "maxArea": 6
          },
          "msg": "Row 3 histogram: [4, 0, 0, 3, 0]. Max area remains 6. Complete!"
        }
      ]
    }
  },
  {
    "title": "Longest Valid Parentheses",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/longest-valid-parentheses/",
    "pattern": "Stack",
    "short": "Stack",
    "intro": "Maintain LIFO state and enforce monotonic order (increasing or decreasing) to resolve nearest greater/smaller boundaries, calculate spanned areas, and evaluate nested syntax trees.",
    "thinking": "How does storing the index of the latest unmatched boundary on a stack allow instant measurement of valid substring spans?",
    "steps": [
      "Restate **Longest Valid Parentheses**: find the length of the longest valid parentheses substring.",
      "Push -1 onto the stack initially as the base index preceding valid substrings.",
      "Iterate through string: on '(', push its index onto the stack.",
      "On ')', pop the top element. If stack is now empty, push current index as the new invalid boundary.",
      "If stack is non-empty, current valid length is i - stack.top(). Update global maximum in single O(N) pass."
    ],
    "flow": [
      "Push base index -1",
      "On '(': push index",
      "On ')': pop top",
      "Empty? push boundary",
      "Non-empty? max(i - top)"
    ],
    "description": "<p>Given a string containing just the characters <code>&#39;(&#39;</code> and <code>&#39;)&#39;</code>, return <em>the length of the longest valid (well-formed) parentheses </em><span data-keyword=\"substring-nonempty\"><em>substring</em></span>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;(()&quot;\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> The longest valid parentheses substring is &quot;()&quot;.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;)()())&quot;\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> The longest valid parentheses substring is &quot;()()&quot;.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;&quot;\n<strong>Output:</strong> 0\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>s[i]</code> is <code>&#39;(&#39;</code>, or <code>&#39;)&#39;</code>.</li>\n</ul>\n",
    "pythonCode": "def longestValidParentheses(s: str) -> int:\n    stack, ans = [-1], 0\n    for i, c in enumerate(s):\n        if c == '(':\n            stack.append(i)\n        else:\n            stack.pop()\n            if not stack:\n                stack.append(i)\n            else:\n                ans = max(ans, i - stack[-1])\n    return ans",
    "codeLines": 12,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force inspects all O(N^2) even-length substrings and validates them with a counter in O(N^3) time. A stack seeded with boundary index -1 stores the index of unmatched characters. For each ')', popping the matching '(' leaves the index of the preceding invalid boundary at the stack top. The valid substring length is simply i - stack[-1], calculated in strict O(1) per character for O(N) overall time.",
    "edgeCasesAndBreakPoints": [
      "String of all '(' or all ')': stack records boundaries without positive length.",
      "Empty string: returns 0 immediately.",
      "Interleaved invalid parentheses (e.g. ')()())'): resets boundary after unmatched ')'.",
      "Entire string valid (e.g. '(())'): computes full length n without index bounds errors."
    ],
    "simConfig": {
      "type": "stack",
      "inputDisplay": "s = ')()())'",
      "array": [
        ")",
        "(",
        ")",
        "(",
        ")",
        ")"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "c": "')'",
            "stack": "[0]",
            "ans": 0
          },
          "msg": "i=0 ')': pop -1. Stack empty -> reset base boundary to index 0."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "c": "'('",
            "stack": "[0, 1]",
            "ans": 0
          },
          "msg": "i=1 '(': push index 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "i": 2,
            "c": "')'",
            "stack": "[0]",
            "ans": 2
          },
          "msg": "i=2 ')': pop 1. Stack top is 0. Valid length = 2 - 0 = 2! ans=2."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "i": 3,
            "c": "'('",
            "stack": "[0, 3]",
            "ans": 2
          },
          "msg": "i=3 '(': push index 3."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "i": 4,
            "c": "')'",
            "stack": "[0]",
            "ans": 4
          },
          "msg": "i=4 ')': pop 3. Stack top is 0. Valid length = 4 - 0 = 4! ans=4."
        },
        {
          "active": [
            5
          ],
          "vars": {
            "i": 5,
            "c": "')'",
            "stack": "[5]",
            "ans": 4
          },
          "msg": "i=5 ')': pop 0. Stack empty -> reset base to 5. Max length = 4."
        }
      ]
    }
  },
  {
    "title": "Shortest Subarray with Sum at Least K",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
    "pattern": "Queue",
    "short": "Queue",
    "intro": "Process states in strict FIFO order, implement multi-source level-by-level frontier expansion, and leverage double-ended queues for monotonic sliding window boundaries.",
    "thinking": "How does a double-ended queue allow constant-time eviction from both ends to satisfy prefix sum differences?",
    "steps": [
      "Restate **Shortest Subarray with Sum at Least K**: find the shortest contiguous subarray with sum >= k.",
      "Precompute prefix sums P[0..n].",
      "Use a monotonic deque storing indices i where P[i] values are strictly increasing.",
      "From front: while P[j] - P[deque.front()] >= k, pop front and update ans = min(ans, j - deque.front()).",
      "From back: while P[j] <= P[deque.back()], pop back (a larger prefix sum at an earlier index is dominated).",
      "Push j to back; runs in amortized O(N) time."
    ],
    "flow": [
      "Compute prefix P",
      "Pop front while diff >= K",
      "Pop back while P[j] <= P[back]",
      "Push j",
      "O(N) deque traversal"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the length of the shortest non-empty <strong>subarray</strong> of </em><code>nums</code><em> with a sum of at least </em><code>k</code>. If there is no such <strong>subarray</strong>, return <code>-1</code>.</p>\n\n<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [1], k = 1\n<strong>Output:</strong> 1\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [1,2], k = 4\n<strong>Output:</strong> -1\n</pre><p><strong class=\"example\">Example 3:</strong></p>\n<pre><strong>Input:</strong> nums = [2,-1,2], k = 3\n<strong>Output:</strong> 3\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>\n\t<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef shortestSubarray(nums: list[int], k: int) -> int:\n    P, ans, q = [0], float(\"inf\"), deque([0])\n    for x in nums: P.append(P[-1] + x)\n    for j in range(1, len(P)):\n        while q and P[j] - P[q[0]] >= k:\n            ans = min(ans, j - q.popleft())\n        while q and P[j] <= P[q[-1]]:\n            q.pop()\n        q.append(j)\n    return ans if ans != float(\"inf\") else -1",
    "codeLines": 12,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "With negative numbers present, standard two-pointer sliding window invalidates monotonicity. A queue maintaining prefix sums in strictly increasing order guarantees that when a candidate start index q[0] satisfies P[j] - P[q[0]] >= k, no future end index j' > j can form a shorter subarray with q[0], allowing safe eviction in O(1) amortized time.",
    "edgeCasesAndBreakPoints": [
      "All elements negative: queue keeps evicting and no prefix difference meets k; returns -1.",
      "First element already >= k: detected at j=1, immediately returns 1.",
      "Subarrays requiring negative elements inside: prefix sum difference accurately captures the net total.",
      "k == 1 with positive integers: functions like a standard optimal sliding window."
    ],
    "simConfig": {
      "type": "deque",
      "inputDisplay": "nums = [2, -1, 2], k = 3",
      "array": [
        2,
        -1,
        2
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "P": "[0, 2, 1, 3]",
            "deque": "[0]"
          },
          "msg": "Compute prefix sums P=[0, 2, 1, 3]. Initialize deque with index 0."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "j": 1,
            "P[1]": 2,
            "deque": "[0, 1]"
          },
          "msg": "j=1: P[1]-P[0] = 2 < 3. Push 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "j": 2,
            "P[2]": 1,
            "deque": "[0, 2]"
          },
          "msg": "j=2: P[2]=1 < P[1]=2. Pop 1 (worse start than 2). Push 2."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "j": 3,
            "P[3]": 3,
            "deque": "[2, 3]",
            "ans": 3
          },
          "msg": "j=3: P[3]-P[0] = 3 >= 3! ans = min(inf, 3 - 0) = 3. Pop 0. Return 3."
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
    "intro": "Process states in strict FIFO order, implement multi-source level-by-level frontier expansion, and leverage double-ended queues for monotonic sliding window boundaries.",
    "thinking": "Why does maintaining candidate indices in a monotonic deque guarantee the front is always the window maximum?",
    "steps": [
      "Restate **Sliding Window Maximum**: output max element for each sliding window of size k.",
      "Use a deque to store indices of potential window maximums.",
      "For each element nums[i], remove expired indices from front (deque[0] < i - k + 1).",
      "Remove indices from back while nums[deque.back()] <= nums[i] to keep values strictly decreasing.",
      "Append i to deque; when i >= k - 1, record nums[deque[0]] into results."
    ],
    "flow": [
      "Remove expired front",
      "Remove smaller back values",
      "Push current index",
      "Read front as max",
      "O(N) total"
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
    "title": "Constrained Subsequence Sum",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/constrained-subsequence-sum/",
    "pattern": "Queue",
    "short": "Queue",
    "intro": "Process states in strict FIFO order, implement multi-source level-by-level frontier expansion, and leverage double-ended queues for monotonic sliding window boundaries.",
    "thinking": "How does combining 1D dynamic programming with a monotonic queue optimize dp[i] = nums[i] + max(0, max(dp[i-k..i-1])) from O(N*K) to O(N)?",
    "steps": [
      "Restate **Constrained Subsequence Sum**: pick a non-empty subsequence such that adjacent picked elements are separated by at most k indices, maximizing total sum.",
      "Define dp[i] as the maximum subsequence sum ending at index i: dp[i] = nums[i] + max(0, max_{j=i-k}^{i-1} dp[j]).",
      "Maintain a monotonic deque storing indices ordered by decreasing dp values.",
      "Evict indices from front if deque[0] < i - k.",
      "Compute dp[i] = nums[i] + max(0, dp[deque[0]]), then pop from back while dp[deque.back()] <= dp[i] before pushing i."
    ],
    "flow": [
      "Monotonic deque of DP values",
      "Evict indices > k away",
      "dp[i] = nums[i] + max(0, front)",
      "Pop smaller back DP",
      "Track max DP"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return the maximum sum of a <strong>non-empty</strong> subsequence of that array such that for every two <strong>consecutive</strong> integers in the subsequence, <code>nums[i]</code> and <code>nums[j]</code>, where <code>i &lt; j</code>, the condition <code>j - i &lt;= k</code> is satisfied.</p>\n\n<p>A <em>subsequence</em> of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [10,2,-10,5,20], k = 2\n<strong>Output:</strong> 37\n<b>Explanation:</b> The subsequence is [10, 2, 5, 20].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [-1,-2,-3], k = 1\n<strong>Output:</strong> -1\n<b>Explanation:</b> The subsequence must be non-empty, so we choose the largest number.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [10,-2,-10,-5,20], k = 2\n<strong>Output:</strong> 23\n<b>Explanation:</b> The subsequence is [10, -2, -5, 20].\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef constrainedSubsetSum(nums: list[int], k: int) -> int:\n    q = deque()\n    for i, x in enumerate(nums):\n        if q: nums[i] += nums[q[0]]\n        while q and nums[q[-1]] <= nums[i]: q.pop()\n        if nums[i] > 0: q.append(i)\n        if q and q[0] <= i - k: q.popleft()\n    return max(nums)",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "DP recurrence dp[i] = nums[i] + max(0, max(dp[i-k..i-1])) takes O(N * K) time if we scan the past k values. Using a monotonic decreasing deque to maintain the maximum DP value in the sliding window of size k reduces the transition lookup to O(1), achieving O(N) linear time and O(K) space.",
    "edgeCasesAndBreakPoints": [
      "All negative elements: values <= 0 are not pushed to deque, ensuring we pick the single max negative number.",
      "k >= len(nums): allows jumping across entire array if cumulative sums remain positive.",
      "k = 1: equivalent to maximum subarray sum (Kadane's algorithm).",
      "Large numbers with positive sums: properly accumulates max without numerical degradation."
    ],
    "simConfig": {
      "type": "deque",
      "inputDisplay": "nums = [10, 2, -10, 5, 20], k = 2",
      "array": [
        10,
        2,
        -10,
        5,
        20
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "i": 0,
            "dp[0]": 10,
            "deque": "[10]"
          },
          "msg": "i=0: nums[0]=10. Push to deque."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "i": 1,
            "dp[1]": "2+10=12",
            "deque": "[12]"
          },
          "msg": "i=1: nums[1] += deque front (10) = 12. 12 dominates 10. Deque: [12]."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "i": 2,
            "dp[2]": "-10+12=2",
            "deque": "[12, 2]"
          },
          "msg": "i=2: nums[2] += 12 = 2. Deque: [12, 2]. Evict 0 (out of range k=2)."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "i": 3,
            "dp[3]": "5+2=7",
            "deque": "[7]"
          },
          "msg": "i=3: nums[3] += deque front (2) = 7. 7 dominates 2. Deque: [7]."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "i": 4,
            "dp[4]": "20+7=27",
            "max": 27
          },
          "msg": "i=4: nums[4] += 7 = 27. Max subsequence sum = 27. Done!"
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
    "intro": "Impose canonical order or divide-and-conquer partition schemes (merge sort, quick select, bucket sort) to uncover inversion counts, relative ranks, and maximum gap separations in sub-quadratic time.",
    "thinking": "During merge sort, how can two sorted halves count pairs with nums[i] > 2 * nums[j] in linear time before merging?",
    "steps": [
      "Restate **Reverse Pairs**: count pairs (i, j) such that i < j and nums[i] > 2 * nums[j].",
      "Use divide-and-conquer merge sort: recursively count pairs in left half and right half.",
      "During the combine step, both halves L and R are sorted. Use a two-pointer pass to count valid pairs: for each element in L, advance pointer p in R while L[i] > 2 * R[p].",
      "Add p to the running count for each element i, then perform standard merge to sort the array.",
      "Total time complexity is O(N log N) with O(N) temporary merge storage."
    ],
    "flow": [
      "Divide array into halves",
      "Recursively count and sort",
      "Two-pointer count: L[i] > 2*R[j]",
      "Standard merge sort",
      "O(N log N) total"
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
    "title": "Count of Smaller Numbers After Self",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
    "pattern": "Sorting",
    "short": "Sorting",
    "intro": "Impose canonical order or divide-and-conquer partition schemes (merge sort, quick select, bucket sort) to uncover inversion counts, relative ranks, and maximum gap separations in sub-quadratic time.",
    "thinking": "When elements in the right half leap ahead of an element from the left half during merge sort, what does that reveal about smaller numbers after it?",
    "steps": [
      "Restate **Count of Smaller Numbers After Self**: for each nums[i], count elements to its right that are strictly smaller.",
      "Pair each number with its original index (nums[i], i) and sort using merge sort.",
      "During merge of left and right sorted subarrays, track how many elements from the right subarray have been placed into merged array before each left element.",
      "When taking an element from the left subarray, increment its answer by the number of right elements that passed it.",
      "Runs in O(N log N) time and O(N) space."
    ],
    "flow": [
      "Track pairs (val, orig_idx)",
      "Merge sort divide",
      "Count right items placed",
      "Add to left item answer",
      "O(N log N)"
    ],
    "description": "<p>Given an integer array <code>nums</code>, return<em> an integer array </em><code>counts</code><em> where </em><code>counts[i]</code><em> is the number of smaller elements to the right of </em><code>nums[i]</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [5,2,6,1]\n<strong>Output:</strong> [2,1,1,0]\n<strong>Explanation:</strong>\nTo the right of 5 there are <b>2</b> smaller elements (2 and 1).\nTo the right of 2 there is only <b>1</b> smaller element (1).\nTo the right of 6 there is <b>1</b> smaller element (1).\nTo the right of 1 there is <b>0</b> smaller element.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [-1]\n<strong>Output:</strong> [0]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [-1,-1]\n<strong>Output:</strong> [0,0]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "def countSmaller(nums: list[int]) -> list[int]:\n    ans = [0] * len(nums)\n    enum = list(enumerate(nums))\n    def merge_sort(enum):\n        if len(enum) <= 1: return enum\n        mid = len(enum) // 2\n        left, right = merge_sort(enum[:mid]), merge_sort(enum[mid:])\n        m, r = [], 0\n        for i, val in left:\n            while r < len(right) and right[r][1] < val:\n                m.append(right[r]); r += 1\n            ans[i] += r\n            m.append((i, val))\n        return m + right[r:]\n    merge_sort(enum)\n    return ans",
    "codeLines": 16,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force checks every element against all elements to its right in O(N^2) time. During merge sort of indexed pairs, when merging sorted left and right halves, the count of elements in the right half that are smaller than left[i] is simply the number of right elements merged before it. This updates each element's count in O(1) during the merge, yielding O(N log N) overall.",
    "edgeCasesAndBreakPoints": [
      "Single element array: returns [0] directly.",
      "All elements strictly increasing: no right elements are smaller, returns [0, 0, ..., 0].",
      "All elements strictly decreasing: element at index i has exactly n - 1 - i smaller elements.",
      "Negative numbers and duplicate values: strictly smaller condition (<) avoids false increments on ties."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [5, 2, 6, 1]",
      "array": [
        5,
        2,
        6,
        1
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "sub": "[5, 2]",
            "ans": "[1, 0, 0, 0]"
          },
          "msg": "Merge [5] and [2]: 2 < 5, so right pointer r=1 passed before 5. ans[0] += 1."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "sub": "[6, 1]",
            "ans": "[1, 0, 1, 0]"
          },
          "msg": "Merge [6] and [1]: 1 < 6, so right pointer r=1 passed before 6. ans[2] += 1."
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "left": "[2, 5]",
            "right": "[1, 6]",
            "ans": "[2, 1, 1, 0]"
          },
          "msg": "Merge [2, 5] and [1, 6]: 1 < 2, so r=1 passes before 2 and 5. ans[1]+=1, ans[0]+=1."
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "result": "[2, 1, 1, 0]"
          },
          "msg": "Final counts of smaller numbers after self: [2, 1, 1, 0]. Complete!"
        }
      ]
    }
  },
  {
    "title": "Maximum Gap",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/maximum-gap/",
    "pattern": "Sorting",
    "short": "Sorting",
    "intro": "Impose canonical order or divide-and-conquer partition schemes (merge sort, quick select, bucket sort) to uncover inversion counts, relative ranks, and maximum gap separations in sub-quadratic time.",
    "thinking": "By the Pigeonhole Principle, can bucket-sorting N numbers into buckets of width ceil((max - min) / (n - 1)) guarantee that the maximum gap never falls within the same bucket?",
    "steps": [
      "Restate **Maximum Gap**: find the maximum difference between successive elements in its sorted form in O(N) time and space.",
      "Find minVal and maxVal in the array. If n < 2 or minVal == maxVal, return 0.",
      "Compute bucket size bucketSize = max(1, (maxVal - minVal) / (n - 1)) and create n buckets.",
      "Each bucket only records its internal min and max values.",
      "The maximum gap must occur between the maximum of a non-empty bucket and the minimum of the next non-empty bucket, guaranteeing O(N) time."
    ],
    "flow": [
      "Find global min and max",
      "Pigeonhole bucket size",
      "Populate bucket min/max",
      "Scan adjacent bucket gaps",
      "O(N) linear time"
    ],
    "description": "<p>Given an integer array <code>nums</code>, return <em>the maximum difference between two successive elements in its sorted form</em>. If the array contains less than two elements, return <code>0</code>.</p>\n\n<p>You must write an algorithm that runs in linear time and uses linear extra space.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,6,9,1]\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [10]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> The array contains less than 2 elements, therefore return 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n</ul>\n",
    "pythonCode": "from math import ceil\n\ndef maximumGap(nums: list[int]) -> int:\n    lo, hi, n = min(nums), max(nums), len(nums)\n    if n < 2 or lo == hi: return 0\n    b_size = max(1, (hi - lo) // (n - 1))\n    buckets = [[float(\"inf\"), float(\"-inf\")] for _ in range((hi - lo) // b_size + 1)]\n    for x in nums:\n        b = (x - lo) // b_size\n        buckets[b][0] = min(buckets[b][0], x)\n        buckets[b][1] = max(buckets[b][1], x)\n    ans, prev = 0, lo\n    for b_min, b_max in buckets:\n        if b_min == float(\"inf\"): continue\n        ans = max(ans, b_min - prev)\n        prev = b_max\n    return ans",
    "codeLines": 17,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Comparison sorting requires O(N log N) time. By applying the Pigeonhole Principle (Bucket Sort), the maximum gap must be at least ceil((max - min) / (n - 1)). By setting bucket size to this minimum gap, no two elements inside the same bucket can form the maximum gap. We only need to check the gap between the maximum of a non-empty bucket and the minimum of the next non-empty bucket, achieving true O(N) linear time and space.",
    "edgeCasesAndBreakPoints": [
      "Array length < 2: gap is impossible; returns 0 immediately.",
      "All elements identical (min == max): returns 0 without division by zero.",
      "Two distinct elements: bucket size (hi - lo) puts them in separate buckets, gap = hi - lo.",
      "Empty buckets: skipped gracefully using the b_min == inf check."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [3, 6, 9, 1]",
      "array": [
        1,
        3,
        6,
        9
      ],
      "steps": [
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "min": 1,
            "max": 9,
            "n": 4,
            "bucketSize": 2
          },
          "msg": "min=1, max=9, n=4. Bucket size = (9 - 1) // 3 = 2."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "buckets": "B0:[1,1], B1:[3,3], B2:[float('inf'), -inf], B3:[6,6], B4:[9,9]"
          },
          "msg": "Distribute elements into buckets by value range."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "gap(B0, B1)": "3 - 1 = 2",
            "maxGap": 2
          },
          "msg": "Gap between B0 max (1) and B1 min (3) is 2."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "gap(B1, B3)": "6 - 3 = 3",
            "maxGap": 3
          },
          "msg": "B2 is empty! Gap between B1 max (3) and B3 min (6) is 3."
        },
        {
          "active": [
            3,
            4
          ],
          "vars": {
            "gap(B3, B4)": "9 - 6 = 3",
            "maxGap": 3
          },
          "msg": "Gap between B3 max (6) and B4 min (9) is 3. Maximum gap = 3!"
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
    "intro": "Identify a monotonic predicate f(x) over a bounded answer space. Discard half of the search space at each probe to converge on optimal parameters in O(log(range)) time.",
    "thinking": "How can partitioning the smaller array at index i dictate the exact partition j in the larger array so that left elements are <= right elements?",
    "steps": [
      "Restate **Median of Two Sorted Arrays**: find the combined median of two sorted arrays nums1 and nums2 in O(log(min(m, n))) time.",
      "Ensure binary search runs on the smaller array nums1 (length m <= n).",
      "Binary search for partition cut i in nums1: the corresponding cut in nums2 is j = (m + n + 1) / 2 - i.",
      "Verify the partition invariant: nums1[i-1] <= nums2[j] and nums2[j-1] <= nums1[i].",
      "If nums1[i-1] > nums2[j], shift cut i left; otherwise shift right. Compute median from boundary elements."
    ],
    "flow": [
      "Ensure m <= n",
      "Binary search cut i in nums1",
      "Derive cut j in nums2",
      "Check boundary crosses",
      "Calculate median in O(log(min))"
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
    "title": "Split Array Largest Sum",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/split-array-largest-sum/",
    "pattern": "Binary Search",
    "short": "Binary Search",
    "intro": "Identify a monotonic predicate f(x) over a bounded answer space. Discard half of the search space at each probe to converge on optimal parameters in O(log(range)) time.",
    "thinking": "If candidate largest subarray sum S is fixed, can a greedy pass determine whether nums can be split into <= k subarrays in O(N) time?",
    "steps": [
      "Restate **Split Array Largest Sum**: split nums into k contiguous subarrays minimizing the maximum subarray sum.",
      "Lower bound for search is max(nums) (a single element); upper bound is sum(nums) (entire array in one piece).",
      "For midpoint mid, greedily accumulate elements: start a new subarray whenever sum exceeds mid.",
      "If total subarrays required <= k, mid is feasible; search lower half [low, mid].",
      "If required subarrays > k, mid is too small; search upper half [mid + 1, high]. Time O(N log(sum))."
    ],
    "flow": [
      "Search space [max, sum]",
      "Midpoint candidate sum",
      "Greedy subarray count",
      "Count <= k? high = mid",
      "Count > k? low = mid + 1"
    ],
    "description": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, split <code>nums</code> into <code>k</code> non-empty subarrays such that the largest sum of any subarray is <strong>minimized</strong>.</p>\n\n<p>Return <em>the minimized largest sum of the split</em>.</p>\n\n<p>A <strong>subarray</strong> is a contiguous part of the array.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [7,2,5,10,8], k = 2\n<strong>Output:</strong> 18\n<strong>Explanation:</strong> There are four ways to split nums into two subarrays.\nThe best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,3,4,5], k = 2\n<strong>Output:</strong> 9\n<strong>Explanation:</strong> There are four ways to split nums into two subarrays.\nThe best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 1000</code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>\n\t<li><code>1 &lt;= k &lt;= min(50, nums.length)</code></li>\n</ul>\n",
    "pythonCode": "def splitArray(nums: list[int], k: int) -> int:\n    def canSplit(max_sum):\n        count, cur = 1, 0\n        for x in nums:\n            if cur + x > max_sum:\n                count += 1; cur = x\n            else: cur += x\n        return count <= k\n    lo, hi = max(nums), sum(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if canSplit(mid): hi = mid\n        else: lo = mid + 1\n    return lo",
    "codeLines": 14,
    "timeComplexity": "O(N log(sum - max))",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Brute force searches all C(N-1, k-1) possible partition points, which is exponential O(2^N). Because the feasibility function canSplit(S) is monotonic (if a maximum subarray sum of S is achievable with <= k splits, any S' > S is also achievable), we can binary search the answer in the range [max(nums), sum(nums)]. Validating each candidate takes O(N), yielding O(N log(sum)) overall.",
    "edgeCasesAndBreakPoints": [
      "k == 1: the entire array is one single subarray; returns sum(nums) directly.",
      "k == len(nums): each element is in its own subarray; returns max(nums).",
      "Single element array: returns nums[0].",
      "All elements equal: distributes elements evenly across subarrays without remainder issues."
    ],
    "simConfig": {
      "type": "binary_search",
      "inputDisplay": "nums = [7, 2, 5, 10, 8], k = 2",
      "array": [
        7,
        2,
        5,
        10,
        8
      ],
      "steps": [
        {
          "active": [
            0,
            4
          ],
          "vars": {
            "lo": 10,
            "hi": 32,
            "mid": 21
          },
          "msg": "Search range [max=10, sum=32]. Mid = 21."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "sub1": "[7, 2, 5] (14)",
            "sub2": "[10, 8] (18)",
            "splits": 2
          },
          "msg": "canSplit(21): [7,2,5] sum 14 <= 21, [10,8] sum 18 <= 21. Valid in 2 subarrays! Search lower: hi=21."
        },
        {
          "active": [
            0,
            4
          ],
          "vars": {
            "lo": 10,
            "hi": 21,
            "mid": 15
          },
          "msg": "Next mid = (10 + 21) // 2 = 15."
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "sub1": "[7, 2, 5] (14)",
            "sub2": "[10] (10)",
            "sub3": "[8] (8)",
            "splits": 3
          },
          "msg": "canSplit(15): requires 3 subarrays > k=2! 15 is too small. lo = mid + 1 = 16."
        },
        {
          "active": [
            0,
            4
          ],
          "vars": {
            "lo": 18,
            "hi": 18,
            "ans": 18
          },
          "msg": "Binary search converges to lo = 18. Minimal largest sum = 18."
        }
      ]
    }
  },
  {
    "title": "Find Minimum in Rotated Sorted Array II",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
    "pattern": "Binary Search",
    "short": "Binary Search",
    "intro": "Identify a monotonic predicate f(x) over a bounded answer space. Discard half of the search space at each probe to converge on optimal parameters in O(log(range)) time.",
    "thinking": "When nums[mid] == nums[high] due to duplicate elements, why is safely decrementing high-- the only sound reduction without skipping the minimum?",
    "steps": [
      "Restate **Find Minimum in Rotated Sorted Array II**: find minimum element in rotated array that may contain duplicates.",
      "Compare nums[mid] against nums[high].",
      "If nums[mid] < nums[high], minimum lies in the left half including mid (high = mid).",
      "If nums[mid] > nums[high], minimum lies strictly in right half (low = mid + 1).",
      "If nums[mid] == nums[high], ambiguity from duplicates prevents half-elimination; safely decrement high--. Worst case O(N), average O(log N)."
    ],
    "flow": [
      "Compare mid with high",
      "mid < high? high = mid",
      "mid > high? low = mid + 1",
      "mid == high? high--",
      "Converge to minimum"
    ],
    "description": "<p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,4,4,5,6,7]</code> might become:</p>\n\n<ul>\n\t<li><code>[4,5,6,7,0,1,4]</code> if it was rotated <code>4</code> times.</li>\n\t<li><code>[0,1,4,4,5,6,7]</code> if it was rotated <code>7</code> times.</li>\n</ul>\n\n<p>Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.</p>\n\n<p>Given the sorted rotated array <code>nums</code> that may contain <strong>duplicates</strong>, return <em>the minimum element of this array</em>.</p>\n\n<p>You must decrease the overall operation steps as much as possible.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [1,3,5]\n<strong>Output:</strong> 1\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [2,2,2,0,1]\n<strong>Output:</strong> 0\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 5000</code></li>\n\t<li><code>-5000 &lt;= nums[i] &lt;= 5000</code></li>\n\t<li><code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> This problem is similar to&nbsp;<a href=\"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/\" target=\"_blank\">Find Minimum in Rotated Sorted Array</a>, but&nbsp;<code>nums</code> may contain <strong>duplicates</strong>. Would this affect the runtime complexity? How and why?</p>\n\n<p>&nbsp;</p>\n",
    "pythonCode": "def findMin(nums: list[int]) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if nums[mid] > nums[hi]:\n            lo = mid + 1\n        elif nums[mid] < nums[hi]:\n            hi = mid\n        else:\n            hi -= 1\n    return nums[lo]",
    "codeLines": 11,
    "timeComplexity": "O(log N) average, O(N) worst case",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "A linear scan takes O(N) in all cases. In the presence of duplicates, nums[mid] == nums[hi] prevents determining which half is sorted. By simply decrementing hi by 1 when equal, we discard the duplicate boundary without missing the minimum, preserving O(log N) expected time on most distributions and gracefully degrading to O(N) only when all elements are identical.",
    "edgeCasesAndBreakPoints": [
      "All elements duplicate (e.g. [2, 2, 2, 0, 2]): hi -= 1 safely unwinds duplicates until 0 is exposed.",
      "Array not rotated at all: nums[mid] < nums[hi] smoothly contracts hi to 0.",
      "Single element array: while loop condition lo < hi terminates immediately with nums[0].",
      "Pivot at exact middle: binary search lands directly on pivot in O(1)."
    ],
    "simConfig": {
      "type": "binary_search",
      "inputDisplay": "nums = [2, 2, 2, 0, 1]",
      "array": [
        2,
        2,
        2,
        0,
        1
      ],
      "steps": [
        {
          "active": [
            0,
            4
          ],
          "vars": {
            "lo": 0,
            "hi": 4,
            "mid": 2,
            "val": 2
          },
          "msg": "lo=0 (2), hi=4 (1), mid=2 (2). nums[mid]=2 > nums[hi]=1: min is in right half. lo = mid + 1 = 3."
        },
        {
          "active": [
            3,
            4
          ],
          "vars": {
            "lo": 3,
            "hi": 4,
            "mid": 3,
            "val": 0
          },
          "msg": "lo=3 (0), hi=4 (1), mid=3 (0). nums[mid]=0 < nums[hi]=1: min is at or left of mid. hi = mid = 3."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "lo": 3,
            "hi": 3,
            "min": 0
          },
          "msg": "lo == hi == 3. Minimum element is nums[3] = 0. Found in 2 steps!"
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
    "intro": "Sort segments by boundary coordinates, process interval sweep-lines, and merge or query overlapping intervals dynamically using balanced trees or coordinate compression.",
    "thinking": "How do critical start and end events, paired with a multiset or priority queue of active heights, generate contour key points?",
    "steps": [
      "Restate **The Skyline Problem**: output key points outlining the collective shape formed by rectangular buildings.",
      "Decompose each building [L, R, H] into two boundary events: start event (L, -H) and end event (R, H).",
      "Sort events by x-coordinate; break ties by processing taller start events first and end events last.",
      "Maintain active building heights in a max-heap or multiset; track current maximum height.",
      "Whenever the maximum active height changes upon processing an event, record [x, currentMaxHeight] as a skyline point."
    ],
    "flow": [
      "Deconstruct to events (x, +/-H)",
      "Sort events by x",
      "Max-heap of active heights",
      "Height changes? Record point",
      "Output skyline key points"
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
    "title": "Range Module",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/range-module/",
    "pattern": "Merge Intervals",
    "short": "Merge Intervals",
    "intro": "Sort segments by boundary coordinates, process interval sweep-lines, and merge or query overlapping intervals dynamically using balanced trees or coordinate compression.",
    "thinking": "How can disjoint half-open intervals [left, right) stored in a balanced map or sorted array support efficient addition, removal, and coverage queries?",
    "steps": [
      "Restate **Range Module**: design a module to track half-open intervals [left, right) supporting addRange, removeRange, and queryRange.",
      "Store mutually disjoint intervals ordered by start coordinates.",
      "On addRange(left, right): find overlapping or contiguous intervals, merge their bounds [min(l, left), max(r, right)], and remove merged sub-intervals.",
      "On removeRange(left, right): truncate partially overlapping intervals and remove fully covered ones, splitting any interval spanning across [left, right).",
      "On queryRange(left, right): binary search for interval covering left and verify its end >= right in O(log N) time."
    ],
    "flow": [
      "Disjoint interval set",
      "addRange: merge overlap",
      "removeRange: trim & split",
      "queryRange: binary search",
      "O(log N) query"
    ],
    "description": "<p>A Range Module is a module that tracks ranges of numbers. Design a data structure to track the ranges represented as <strong>half-open intervals</strong> and query about them.</p>\n\n<p>A <strong>half-open interval</strong> <code>[left, right)</code> denotes all the real numbers <code>x</code> where <code>left &lt;= x &lt; right</code>.</p>\n\n<p>Implement the <code>RangeModule</code> class:</p>\n\n<ul>\n\t<li><code>RangeModule()</code> Initializes the object of the data structure.</li>\n\t<li><code>void addRange(int left, int right)</code> Adds the <strong>half-open interval</strong> <code>[left, right)</code>, tracking every real number in that interval. Adding an interval that partially overlaps with currently tracked numbers should add any numbers in the interval <code>[left, right)</code> that are not already tracked.</li>\n\t<li><code>boolean queryRange(int left, int right)</code> Returns <code>true</code> if every real number in the interval <code>[left, right)</code> is currently being tracked, and <code>false</code> otherwise.</li>\n\t<li><code>void removeRange(int left, int right)</code> Stops tracking every real number currently being tracked in the <strong>half-open interval</strong> <code>[left, right)</code>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;RangeModule&quot;, &quot;addRange&quot;, &quot;removeRange&quot;, &quot;queryRange&quot;, &quot;queryRange&quot;, &quot;queryRange&quot;]\n[[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]\n<strong>Output</strong>\n[null, null, null, true, false, true]\n\n<strong>Explanation</strong>\nRangeModule rangeModule = new RangeModule();\nrangeModule.addRange(10, 20);\nrangeModule.removeRange(14, 16);\nrangeModule.queryRange(10, 14); // return True,(Every number in [10, 14) is being tracked)\nrangeModule.queryRange(13, 15); // return False,(Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)\nrangeModule.queryRange(16, 17); // return True, (The number 16 in [16, 17) is still being tracked, despite the remove operation)\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= left &lt; right &lt;= 10<sup>9</sup></code></li>\n\t<li>At most <code>10<sup>4</sup></code> calls will be made to <code>addRange</code>, <code>queryRange</code>, and <code>removeRange</code>.</li>\n</ul>\n",
    "pythonCode": "from bisect import bisect_left, bisect_right\n\nclass RangeModule:\n    def __init__(self):\n        self.X = []\n    def addRange(self, left: int, right: int) -> None:\n        i, j = bisect_left(self.X, left), bisect_right(self.X, right)\n        sub = ([left] if i % 2 == 0 else []) + ([right] if j % 2 == 0 else [])\n        self.X[i:j] = sub\n    def queryRange(self, left: int, right: int) -> bool:\n        i, j = bisect_right(self.X, left), bisect_left(self.X, right)\n        return i == j and i % 2 == 1\n    def removeRange(self, left: int, right: int) -> None:\n        i, j = bisect_left(self.X, left), bisect_right(self.X, right)\n        sub = ([left] if i % 2 == 1 else []) + ([right] if j % 2 == 1 else [])\n        self.X[i:j] = sub",
    "codeLines": 16,
    "timeComplexity": "query: O(log N), add/remove: O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Tracking every integer in ranges up to 10^9 is completely infeasible. An interval array storing endpoints [x0, x1, x2, x3...] represents alternating intervals [x0, x1) and [x2, x3). Checking if [left, right) is completely covered reduces to binary searching the endpoints: if both fall in the same interval (i % 2 == 1), query returns True in O(log N) time with zero tree overhead.",
    "edgeCasesAndBreakPoints": [
      "Adding a range that spans multiple existing intervals: sliced replacement self.X[i:j] collapses them all in 1 operation.",
      "Removing a subrange strictly inside an existing interval: splits the interval cleanly into two disjoint ranges.",
      "Query on empty range module: returns False immediately.",
      "Query matching interval boundaries exactly: parity condition handles open/closed interval logic flawlessly."
    ],
    "simConfig": {
      "type": "intervals",
      "inputDisplay": "addRange(10, 20), removeRange(14, 16), queryRange(10, 14)",
      "array": [
        "[10, 20)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "op": "addRange(10, 20)",
            "intervals": "[[10, 20)]"
          },
          "msg": "addRange(10, 20): stores endpoint boundaries [10, 20]."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "op": "removeRange(14, 16)",
            "intervals": "[[10, 14), [16, 20)]"
          },
          "msg": "removeRange(14, 16): splits [10, 20) into [10, 14) and [16, 20)."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "op": "queryRange(10, 14)",
            "result": "True"
          },
          "msg": "queryRange(10, 14): fully covered by [10, 14) -> True in O(log N)."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "op": "queryRange(13, 15)",
            "result": "False"
          },
          "msg": "queryRange(13, 15): crosses hole [14, 16) -> False."
        }
      ]
    }
  },
  {
    "title": "Minimum Interval to Include Each Query",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
    "pattern": "Merge Intervals",
    "short": "Merge Intervals",
    "intro": "Sort segments by boundary coordinates, process interval sweep-lines, and merge or query overlapping intervals dynamically using balanced trees or coordinate compression.",
    "thinking": "By sorting both queries and intervals, how can a min-heap ordered by interval length answer queries in offline monotonic order?",
    "steps": [
      "Restate **Minimum Interval to Include Each Query**: for each query point q, find the length of the smallest interval containing q.",
      "Sort intervals by start coordinate and sort queries along with their original indices.",
      "Iterate through sorted queries: push all intervals starting <= q into a min-heap ordered by interval length right - left + 1.",
      "Pop expired intervals from the heap top whose end coordinate is < q.",
      "The top of the heap is the shortest valid interval containing q; record length into the original query position."
    ],
    "flow": [
      "Sort intervals by start",
      "Sort queries with indices",
      "Push valid intervals to heap",
      "Pop expired end < q",
      "Heap top is min interval"
    ],
    "description": "<p>You are given a 2D integer array <code>intervals</code>, where <code>intervals[i] = [left<sub>i</sub>, right<sub>i</sub>]</code> describes the <code>i<sup>th</sup></code> interval starting at <code>left<sub>i</sub></code> and ending at <code>right<sub>i</sub></code> <strong>(inclusive)</strong>. The <strong>size</strong> of an interval is defined as the number of integers it contains, or more formally <code>right<sub>i</sub> - left<sub>i</sub> + 1</code>.</p>\n\n<p>You are also given an integer array <code>queries</code>. The answer to the <code>j<sup>th</sup></code> query is the <strong>size of the smallest interval</strong> <code>i</code> such that <code>left<sub>i</sub> &lt;= queries[j] &lt;= right<sub>i</sub></code>. If no such interval exists, the answer is <code>-1</code>.</p>\n\n<p>Return <em>an array containing the answers to the queries</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]\n<strong>Output:</strong> [3,3,1,4]\n<strong>Explanation:</strong> The queries are processed as follows:\n- Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.\n- Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.\n- Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.\n- Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]\n<strong>Output:</strong> [2,-1,4,6]\n<strong>Explanation:</strong> The queries are processed as follows:\n- Query = 2: The interval [2,3] is the smallest interval containing 2. The answer is 3 - 2 + 1 = 2.\n- Query = 19: None of the intervals contain 19. The answer is -1.\n- Query = 5: The interval [2,5] is the smallest interval containing 5. The answer is 5 - 2 + 1 = 4.\n- Query = 22: The interval [20,25] is the smallest interval containing 22. The answer is 25 - 20 + 1 = 6.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= intervals.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>intervals[i].length == 2</code></li>\n\t<li><code>1 &lt;= left<sub>i</sub> &lt;= right<sub>i</sub> &lt;= 10<sup>7</sup></code></li>\n\t<li><code>1 &lt;= queries[j] &lt;= 10<sup>7</sup></code></li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef minInterval(intervals: list[list[int]], queries: list[int]) -> list[int]:\n    intervals.sort()\n    sorted_q = sorted((q, i) for i, q in enumerate(queries))\n    ans, hp, cur = [-1] * len(queries), [], 0\n    for q, idx in sorted_q:\n        while cur < len(intervals) and intervals[cur][0] <= q:\n            l, r = intervals[cur]\n            heappush(hp, (r - l + 1, r))\n            cur += 1\n        while hp and hp[0][1] < q:\n            heappop(hp)\n        if hp: ans[idx] = hp[0][0]\n    return ans",
    "codeLines": 15,
    "timeComplexity": "O((N + Q) log(N + Q))",
    "spaceComplexity": "O(N + Q)",
    "whyBetterThanBruteForce": "Brute force checks each query against all N intervals in O(N * Q) time. By sorting both the intervals and the queries, we can process queries in increasing order. A min-heap stores candidate intervals ordered by length (r - l + 1). At each query q, newly reachable intervals are pushed, expired intervals (r < q) are popped, and the top of the heap is the shortest valid interval in O(1), achieving O((N + Q) log N) overall.",
    "edgeCasesAndBreakPoints": [
      "Query outside all intervals: heap empties, ans[idx] remains -1.",
      "Multiple intervals of identical length: min-heap smoothly breaks ties by end coordinate.",
      "Queries in random order: sorted index pairs (q, i) restore original order in O(Q).",
      "Single-point intervals [x, x]: length = 1, correctly covers query x."
    ],
    "simConfig": {
      "type": "intervals",
      "inputDisplay": "intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2, 3, 4, 5]",
      "array": [
        "[1, 4] len 4",
        "[2, 4] len 3",
        "[3, 6] len 4",
        "[4, 4] len 1"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "query": 2,
            "heapTop": "len 3 [2,4]",
            "ans[2]": 3
          },
          "msg": "Query q=2: intervals [1,4] (len 4) and [2,4] (len 3) pushed. Shortest is [2,4] (len 3)."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "query": 3,
            "heapTop": "len 3 [2,4]",
            "ans[3]": 3
          },
          "msg": "Query q=3: interval [3,6] (len 4) pushed. Shortest covering 3 remains [2,4] (len 3)."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "query": 4,
            "heapTop": "len 1 [4,4]",
            "ans[4]": 1
          },
          "msg": "Query q=4: interval [4,4] (len 1) pushed. Heap top is [4,4] (len 1)! ans[4] = 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "query": 5,
            "heapTop": "len 4 [3,6]",
            "ans[5]": 4
          },
          "msg": "Query q=5: intervals [1,4], [2,4], [4,4] expired (r < 5) and popped. Top is [3,6] (len 4)."
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
    "intro": "Represent subsets, boolean flags, and state transitions using bitwise masks. Exploit properties of XOR, AND, bit shifts, and submask enumerations to achieve exponential speedups in state space exploration.",
    "thinking": "How can precomputing frequencies of (nums[i] & nums[j]) reduce O(N^3) brute force to O(N^2 + 2^16 * N)?",
    "steps": [
      "Restate **Triples with Bitwise AND Equal To Zero**: find count of triplets (i, j, k) such that nums[i] & nums[j] & nums[k] == 0.",
      "The maximum value is < 2^16 = 65536.",
      "Precompute frequency of all pairwise AND results: count[nums[i] & nums[j]]++ for all i, j in O(N^2).",
      "For each number x in nums, iterate over possible bitwise results mask: if (x & mask) == 0, add count[mask] to total.",
      "Can further optimize by iterating only over submasks of ~x & 0xFFFF."
    ],
    "flow": [
      "Compute pairwise ANDs",
      "Store in freq array count[]",
      "For each x in nums",
      "Check (x & mask) == 0",
      "Accumulate answer"
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
    "title": "Shortest Path Visiting All Nodes",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/",
    "pattern": "Bitwise Operations",
    "short": "Bitwise Operations",
    "intro": "Represent subsets, boolean flags, and state transitions using bitwise masks. Exploit properties of XOR, AND, bit shifts, and submask enumerations to achieve exponential speedups in state space exploration.",
    "thinking": "How does encoding state as (current_node, visited_bitmask) allow breadth-first search to find the shortest path visiting every node?",
    "steps": [
      "Restate **Shortest Path Visiting All Nodes**: find the shortest path in an undirected graph that visits every node at least once.",
      "Represent visited nodes as an integer bitmask of length N (e.g. 1 << u).",
      "Initialize BFS queue with (u, 1 << u, dist = 0) for all nodes u (multi-source BFS).",
      "Track visited state tuple (node, mask) in a 2D boolean array or hash table to prevent redundant cycles.",
      "The first state dequeued with mask == (1 << N) - 1 is guaranteed to be the shortest path length."
    ],
    "flow": [
      "Multi-source queue (u, 1<<u)",
      "Track seen(node, mask)",
      "BFS level expansion",
      "mask == (1<<N) - 1? return dist",
      "Shortest path guarantee"
    ],
    "description": "<p>You have an undirected, connected graph of <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>. You are given an array <code>graph</code> where <code>graph[i]</code> is a list of all the nodes connected with node <code>i</code> by an edge.</p>\n\n<p>Return <em>the length of the shortest path that visits every node</em>. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/05/12/shortest1-graph.jpg\" style=\"width: 222px; height: 183px;\" />\n<pre>\n<strong>Input:</strong> graph = [[1,2,3],[0],[0],[0]]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> One possible path is [1,0,2,0,3]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/05/12/shortest2-graph.jpg\" style=\"width: 382px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> One possible path is [0,1,4,2,3]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == graph.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 12</code></li>\n\t<li><code>0 &lt;= graph[i].length &lt;&nbsp;n</code></li>\n\t<li><code>graph[i]</code> does not contain <code>i</code>.</li>\n\t<li>If <code>graph[a]</code> contains <code>b</code>, then <code>graph[b]</code> contains <code>a</code>.</li>\n\t<li>The input graph is always connected.</li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef shortestPathLength(graph: list[list[int]]) -> int:\n    n = len(graph)\n    target = (1 << n) - 1\n    q = deque([(i, 1 << i, 0) for i in range(n)])\n    visited = {(i, 1 << i) for i in range(n)}\n    while q:\n        u, mask, d = q.popleft()\n        if mask == target: return d\n        for v in graph[u]:\n            nxt = (v, mask | (1 << v))\n            if nxt not in visited:\n                visited.add(nxt)\n                q.append((v, mask | (1 << v), d + 1))\n    return 0",
    "codeLines": 16,
    "timeComplexity": "O(N * 2^N)",
    "spaceComplexity": "O(N * 2^N)",
    "whyBetterThanBruteForce": "Searching all paths with backtracking or permutation evaluation leads to factorial O(N!) or exponential non-terminating loops. Because revisiting nodes is permitted, the state is fully captured by the tuple (current_node, visited_bitmask). Running Breadth-First Search (BFS) over this state space of size N * 2^N guarantees finding the shortest path visiting all nodes in O(N * 2^N) time.",
    "edgeCasesAndBreakPoints": [
      "Single node graph (N=1): target mask is 1; returns distance 0 immediately.",
      "Linear chain of nodes: requires revisiting intermediate nodes; bitmask state correctly tracks coverage.",
      "Complete graph: finds Hamiltonian path of length N - 1 directly.",
      "N up to 12: 12 * 2^12 = 49,152 states, executes in tens of milliseconds."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "graph = [[1,2,3],[0],[0],[0]] (Star graph, center 0)",
      "array": [
        "0(Center)",
        "1(Leaf)",
        "2(Leaf)",
        "3(Leaf)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "mask": "0001 (1)",
            "node": 0,
            "depth": 0
          },
          "msg": "Start BFS from each node with its own bit set."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "mask": "0011 (3)",
            "node": 1,
            "depth": 1
          },
          "msg": "Step 0 -> 1: mask becomes 0011. Depth = 1."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "mask": "0111 (7)",
            "node": 2,
            "depth": 3
          },
          "msg": "Return to center 0 and visit leaf 2: mask becomes 0111. Depth = 3."
        },
        {
          "active": [
            0,
            3
          ],
          "vars": {
            "mask": "1111 (15)",
            "node": 3,
            "depth": 4
          },
          "msg": "Return to center 0 and visit leaf 3: mask = 1111 (all nodes visited!). Shortest length = 4."
        }
      ]
    }
  },
  {
    "title": "Smallest Sufficient Team",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/smallest-sufficient-team/",
    "pattern": "Bitwise Operations",
    "short": "Bitwise Operations",
    "intro": "Represent subsets, boolean flags, and state transitions using bitwise masks. Exploit properties of XOR, AND, bit shifts, and submask enumerations to achieve exponential speedups in state space exploration.",
    "thinking": "How does dynamic programming over skill bitmasks compute the minimum size combination of people covering all required skills?",
    "steps": [
      "Restate **Smallest Sufficient Team**: find the smallest team of people possessing all required skills.",
      "Assign each required skill an integer bit from 0 to M - 1 (where M <= 16).",
      "Convert each person's skill set into an integer bitmask personSkill[i].",
      "Define dp[skillMask] as the minimal list of people needed to cover skillMask.",
      "Initialize dp[0] = []. For each person, transition: newMask = currentMask | personSkill[i]; update dp[newMask] if smaller.",
      "Final answer is stored in dp[(1 << M) - 1]."
    ],
    "flow": [
      "Map skills to bit indices",
      "Person -> skill bitmask",
      "dp[mask] = smallest team",
      "Bitmask union transition",
      "Target dp[(1<<M) - 1]"
    ],
    "description": "<p>In a project, you have a list of required skills <code>req_skills</code>, and a list of people. The <code>i<sup>th</sup></code> person <code>people[i]</code> contains a list of skills that the person has.</p>\n\n<p>Consider a sufficient team: a set of people such that for every required skill in <code>req_skills</code>, there is at least one person in the team who has that skill. We can represent these teams by the index of each person.</p>\n\n<ul>\n\t<li>For example, <code>team = [0, 1, 3]</code> represents the people with skills <code>people[0]</code>, <code>people[1]</code>, and <code>people[3]</code>.</li>\n</ul>\n\n<p>Return <em>any sufficient team of the smallest possible size, represented by the index of each person</em>. You may return the answer in <strong>any order</strong>.</p>\n\n<p>It is <strong>guaranteed</strong> an answer exists.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> req_skills = [\"java\",\"nodejs\",\"reactjs\"], people = [[\"java\"],[\"nodejs\"],[\"nodejs\",\"reactjs\"]]\n<strong>Output:</strong> [0,2]\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> req_skills = [\"algorithms\",\"math\",\"java\",\"reactjs\",\"csharp\",\"aws\"], people = [[\"algorithms\",\"math\",\"java\"],[\"algorithms\",\"math\",\"reactjs\"],[\"java\",\"csharp\",\"aws\"],[\"reactjs\",\"csharp\"],[\"csharp\",\"math\"],[\"aws\",\"java\"]]\n<strong>Output:</strong> [1,2]\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= req_skills.length &lt;= 16</code></li>\n\t<li><code>1 &lt;= req_skills[i].length &lt;= 16</code></li>\n\t<li><code>req_skills[i]</code> consists of lowercase English letters.</li>\n\t<li>All the strings of <code>req_skills</code> are <strong>unique</strong>.</li>\n\t<li><code>1 &lt;= people.length &lt;= 60</code></li>\n\t<li><code>0 &lt;= people[i].length &lt;= 16</code></li>\n\t<li><code>1 &lt;= people[i][j].length &lt;= 16</code></li>\n\t<li><code>people[i][j]</code> consists of lowercase English letters.</li>\n\t<li>All the strings of <code>people[i]</code> are <strong>unique</strong>.</li>\n\t<li>Every skill in <code>people[i]</code> is a skill in <code>req_skills</code>.</li>\n\t<li>It is guaranteed a sufficient team exists.</li>\n</ul>\n",
    "pythonCode": "def smallestSufficientTeam(req_skills: list[str], people: list[list[str]]) -> list[int]:\n    s_map = {s: i for i, s in enumerate(req_skills)}\n    target = (1 << len(req_skills)) - 1\n    dp = {0: []}\n    for i, p in enumerate(people):\n        p_mask = 0\n        for s in p:\n            if s in s_map: p_mask |= 1 << s_map[s]\n        for skill_set, team in list(dp.items()):\n            new_skill = skill_set | p_mask\n            if new_skill not in dp or len(dp[new_skill]) > len(team) + 1:\n                dp[new_skill] = team + [i]\n    return dp[target]",
    "codeLines": 13,
    "timeComplexity": "O(M * 2^N)",
    "spaceComplexity": "O(2^N)",
    "whyBetterThanBruteForce": "Evaluating all combinations of people is O(2^M) where M is up to 60, which is over 10^18 operations. However, the number of required skills N is small (<= 16). By converting skills into bitmasks of size 2^N, we can dynamic-program over the reachable skill sets: dp[mask] stores the smallest team covering that mask. This reduces the search space to O(M * 2^N) with O(2^N) space.",
    "edgeCasesAndBreakPoints": [
      "Person with no skills matching req_skills: p_mask is 0, leaves dp unmodified.",
      "Single person possessing all required skills: dp[target] formed in 1 step.",
      "Overlapping skill sets: relaxation chooses the strictly smaller team.",
      "req_skills up to 16: 2^16 = 65,536 states, executes comfortably in < 0.2s."
    ],
    "simConfig": {
      "type": "bitwise",
      "inputDisplay": "req = ['java','nodejs','reactjs'], people = [['java'],['nodejs'],['nodejs','reactjs']]",
      "array": [
        "P0: ['java']",
        "P1: ['nodejs']",
        "P2: ['nodejs','reactjs']"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "P0_mask": "001 (java)",
            "team": "[0]"
          },
          "msg": "Process P0: adds skill 'java'. dp[001] = [0]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "P1_mask": "010 (nodejs)",
            "team": "[0, 1]"
          },
          "msg": "Process P1: adds 'nodejs'. dp[011] = [0, 1]."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "P2_mask": "110 (nodejs,react)",
            "team": "[0, 2]"
          },
          "msg": "Process P2: adds 'nodejs','reactjs'. dp[001 | 110 = 111] = [0, 2] (len 2 < [0, 1, 2])."
        },
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "target": "111 (all skills)",
            "optimalTeam": "[0, 2]"
          },
          "msg": "Target 111 reached with minimal team [0, 2] of size 2. Complete!"
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
    "intro": "Maintain dynamic extremum lookups with logarithmic insertion and deletion. Balance dual heaps for real-time median tracking or prioritize time/cost frontiers.",
    "thinking": "How do two balanced heaps (max-heap for smaller half, min-heap for larger half) provide O(1) median queries and O(log N) inserts?",
    "steps": [
      "Restate **Find Median from Data Stream**: maintain median of a streaming sequence of numbers in real time.",
      "Maintain two heaps: small (max-heap storing smaller half) and large (min-heap storing larger half).",
      "Invariant 1: small.size() == large.size() or small.size() == large.size() + 1.",
      "Invariant 2: every element in small is <= every element in large.",
      "Insert: push to small, move top of small to large, and rebalance size if large exceeds small.",
      "Median is small.top() if odd, else (small.top() + large.top()) / 2."
    ],
    "flow": [
      "small (max-heap)",
      "large (min-heap)",
      "Insert & push-through",
      "Rebalance sizes",
      "O(1) median query"
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
    "title": "Merge k Sorted Lists",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "pattern": "Heap / Priority Queue",
    "short": "Heap / Priority Queue",
    "intro": "Maintain dynamic extremum lookups with logarithmic insertion and deletion. Balance dual heaps for real-time median tracking or prioritize time/cost frontiers.",
    "thinking": "How does a priority queue of size k maintaining the current head of each list merge all elements in O(N log k)?",
    "steps": [
      "Restate **Merge k Sorted Lists**: merge k sorted linked lists into one consolidated sorted linked list.",
      "Initialize a min-heap with the head node of each non-empty list.",
      "Extract minimum node from heap, attach it to the result list, and advance its pointer.",
      "If the extracted node has a next node, push next into the heap.",
      "Heap size is at most k, giving O(N log k) overall time where N is total nodes across all lists."
    ],
    "flow": [
      "Push k heads to min-heap",
      "Pop smallest node",
      "Attach to merged list",
      "Push node.next if exists",
      "Repeat until heap empty"
    ],
    "description": "<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>\n\n<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]\n<strong>Output:</strong> [1,1,2,3,4,4,5,6]\n<strong>Explanation:</strong> The linked-lists are:\n[\n  1-&gt;4-&gt;5,\n  1-&gt;3-&gt;4,\n  2-&gt;6\n]\nmerging them into one sorted linked list:\n1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = []\n<strong>Output:</strong> []\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = [[]]\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>k == lists.length</code></li>\n\t<li><code>0 &lt;= k &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= lists[i][j] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li>\n\t<li>The sum of <code>lists[i].length</code> will not exceed <code>10<sup>4</sup></code>.</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef mergeKLists(lists: list) -> list:\n    heap, count = [], 0\n    for node in lists:\n        if node:\n            heappush(heap, (node.val, count, node))\n            count += 1\n    dummy = curr = ListNode(0)\n    while heap:\n        val, _, node = heappop(heap)\n        curr.next = curr = node\n        if node.next:\n            heappush(heap, (node.next.val, count, node.next))\n            count += 1\n    return dummy.next",
    "codeLines": 16,
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Merging lists one by one sequentially takes O(N * K) time. Extracting all values, sorting, and rebuilding takes O(N log N) time and O(N) memory. Using a min-heap containing only the current heads of the K lists (heap size <= K), each of the N nodes is extracted and advanced in O(log K) time, achieving O(N log K) time with O(K) space.",
    "edgeCasesAndBreakPoints": [
      "Empty list array lists = []: returns None without error.",
      "lists containing empty lists [[]]: skipped by if node check.",
      "Nodes with duplicate values: tie-breaking unique counter index prevents ListNode comparison error.",
      "K = 1: returns the single list head in O(1)."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "lists = [[1->4->5],[1->3->4],[2->6]]",
      "array": [
        "L1: 1->4->5",
        "L2: 1->3->4",
        "L3: 2->6"
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "heap": "[1(L1), 1(L2), 2(L3)]",
            "out": "[]"
          },
          "msg": "Initialize min-heap with head of each list: [1, 1, 2]."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "popped": 1,
            "next": 4,
            "out": "[1]"
          },
          "msg": "Pop 1 (from L1). Advance L1 to 4. Push 4 to heap."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "popped": 1,
            "next": 3,
            "out": "[1, 1]"
          },
          "msg": "Pop 1 (from L2). Advance L2 to 3. Push 3 to heap."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "popped": 2,
            "next": 6,
            "out": "[1, 1, 2]"
          },
          "msg": "Pop 2 (from L3). Advance L3 to 6. Push 6 to heap."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "result": "[1, 1, 2, 3, 4, 4, 5, 6]"
          },
          "msg": "Extract remaining nodes: [3, 4, 4, 5, 6]. Output merged list."
        }
      ]
    }
  },
  {
    "title": "Minimum Number of Refueling Stops",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
    "pattern": "Heap / Priority Queue",
    "short": "Heap / Priority Queue",
    "intro": "Maintain dynamic extremum lookups with logarithmic insertion and deletion. Balance dual heaps for real-time median tracking or prioritize time/cost frontiers.",
    "thinking": "Why is driving as far as possible and retroactively picking the largest passed fuel station from a max-heap optimal?",
    "steps": [
      "Restate **Minimum Number of Refueling Stops**: find minimum refueling stops to reach target starting with startFuel.",
      "Treat fuel consumption greedily: drive forward until current fuel is exhausted (currentPos < station[i][0]).",
      "When fuel runs out before reaching the next station/target, retroactively refuel from the passed station with the highest fuel.",
      "Use a max-heap to store fuel amounts of all stations passed so far.",
      "If heap is empty and target is unreachable, return -1; otherwise pop max fuel, add to tank, increment stop count."
    ],
    "flow": [
      "Drive forward",
      "Push passed station fuel to max-heap",
      "Out of fuel? Pop max fuel station",
      "Increment stops",
      "Reach target or -1"
    ],
    "description": "<p>A car travels from a starting position to a destination which is <code>target</code> miles east of the starting position.</p>\n\n<p>There are gas stations along the way. The gas stations are represented as an array <code>stations</code> where <code>stations[i] = [position<sub>i</sub>, fuel<sub>i</sub>]</code> indicates that the <code>i<sup>th</sup></code> gas station is <code>position<sub>i</sub></code> miles east of the starting position and has <code>fuel<sub>i</sub></code> liters of gas.</p>\n\n<p>The car starts with an infinite tank of gas, which initially has <code>startFuel</code> liters of fuel in it. It uses one liter of gas per one mile that it drives. When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car.</p>\n\n<p>Return <em>the minimum number of refueling stops the car must make in order to reach its destination</em>. If it cannot reach the destination, return <code>-1</code>.</p>\n\n<p>Note that if the car reaches a gas station with <code>0</code> fuel left, the car can still refuel there. If the car reaches the destination with <code>0</code> fuel left, it is still considered to have arrived.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> target = 1, startFuel = 1, stations = []\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> We can reach the target without refueling.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> target = 100, startFuel = 1, stations = [[10,100]]\n<strong>Output:</strong> -1\n<strong>Explanation:</strong> We can not reach the target (or even the first gas station).\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> We start with 10 liters of fuel.\nWe drive to position 10, expending 10 liters of fuel.  We refuel from 0 liters to 60 liters of gas.\nThen, we drive from position 10 to position 60 (expending 50 liters of fuel),\nand refuel from 10 liters to 50 liters of gas.  We then drive to and reach the target.\nWe made 2 refueling stops along the way, so we return 2.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= target, startFuel &lt;= 10<sup>9</sup></code></li>\n\t<li><code>0 &lt;= stations.length &lt;= 500</code></li>\n\t<li><code>1 &lt;= position<sub>i</sub> &lt; position<sub>i+1</sub> &lt; target</code></li>\n\t<li><code>1 &lt;= fuel<sub>i</sub> &lt; 10<sup>9</sup></code></li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef minRefuelStops(target: int, startFuel: int, stations: list[list[int]]) -> int:\n    hp, ans, cur = [], 0, startFuel\n    stations.append([target, 0])\n    for dist, fuel in stations:\n        while hp and cur < dist:\n            cur -= heappop(hp)\n            ans += 1\n        if cur < dist: return -1\n        heappush(hp, -fuel)\n    return ans",
    "codeLines": 12,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force branching (refuel vs skip) takes O(2^N) exponential time. DP takes O(N^2). Greedily, you should drive as far as possible. Whenever fuel runs out before reaching the next station, you should retroactively refuel at the passed station that had the maximum capacity. A max-heap tracks passed stations, enabling O(log N) retrieval of the highest-capacity gas station, achieving O(N log N) total.",
    "edgeCasesAndBreakPoints": [
      "startFuel >= target: requires 0 refueling stops, loop terminates with ans = 0.",
      "Cannot reach target even after using all stations: cur < dist returns -1 cleanly.",
      "Station located at coordinate 0: processed correctly on first iteration.",
      "All fuel amounts identical: priority queue resolves ties smoothly."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]",
      "array": [
        "[10, 60]",
        "[20, 30]",
        "[30, 30]",
        "[60, 40]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "pos": 10,
            "fuelRemaining": 0,
            "availableFuel": "[60]"
          },
          "msg": "Reach Station 0 at dist 10. Fuel remaining = 0. Store 60 in max-heap."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "refuel": 60,
            "newFuel": 60,
            "stops": 1
          },
          "msg": "To proceed to dist 20, we must refuel! Pop 60 from heap. Fuel is now 60. stops = 1."
        },
        {
          "active": [
            1,
            2,
            3
          ],
          "vars": {
            "reach": 70,
            "target": 100,
            "heap": "[40, 30, 30]"
          },
          "msg": "With 60 fuel, we reach stations at 20, 30, and 60 (total pos = 70). Store fuels [30, 30, 40]."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "refuel": 40,
            "newFuel": "10+40=50",
            "stops": 2
          },
          "msg": "Need 30 more fuel to reach 100. Pop 40 from heap. Reach 100 with stops = 2. Complete!"
        }
      ]
    }
  },
  {
    "title": "Trapping Rain Water II",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/trapping-rain-water-ii/",
    "pattern": "Top K Elements",
    "short": "Top K Elements",
    "intro": "Track the K most significant elements in streaming or multidimensional datasets without sorting all N elements, using bounded heaps or QuickSelect partitioning.",
    "thinking": "How can 2D water retention be resolved from the outside in using a min-heap initialized with the grid boundary cells?",
    "steps": [
      "Restate **Trapping Rain Water II**: calculate trapped water volume in a 2D elevation matrix.",
      "Water leakage is governed by the lowest point along the perimeter.",
      "Initialize a min-heap with all perimeter cells (height, r, c) and mark them as visited.",
      "Maintain waterLevel = 0. Repeatedly pop the lowest cell: waterLevel = max(waterLevel, cell.height).",
      "For unvisited neighbors, trapped water is max(0, waterLevel - neighbor.height). Push neighbor with updated elevation to heap."
    ],
    "flow": [
      "Push perimeter to min-heap",
      "Pop lowest cell",
      "Update waterLevel",
      "Add water for neighbors",
      "Repeat until all visited"
    ],
    "description": "<p>Given an <code>m x n</code> integer matrix <code>heightMap</code> representing the height of each unit cell in a 2D elevation map, return <em>the volume of water it can trap after raining</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg\" style=\"width: 361px; height: 321px;\" />\n<pre>\n<strong>Input:</strong> heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> After the rain, water is trapped between the blocks.\nWe have two small ponds 1 and 3 units trapped.\nThe total volume of water trapped is 4.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg\" style=\"width: 401px; height: 321px;\" />\n<pre>\n<strong>Input:</strong> heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]\n<strong>Output:</strong> 10\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == heightMap.length</code></li>\n\t<li><code>n == heightMap[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 200</code></li>\n\t<li><code>0 &lt;= heightMap[i][j] &lt;= 2 * 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef trapRainWater(heightMap: list[list[int]]) -> int:\n    if not heightMap or not heightMap[0]: return 0\n    R, C = len(heightMap), len(heightMap[0])\n    visited = [[False] * C for _ in range(R)]\n    hp = []\n    for r in range(R):\n        for c in range(C):\n            if r in (0, R - 1) or c in (0, C - 1):\n                heappush(hp, (heightMap[r][c], r, c))\n                visited[r][c] = True\n    ans, max_h = 0, 0\n    while hp:\n        h, r, c = heappop(hp)\n        max_h = max(max_h, h)\n        for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and not visited[nr][nc]:\n                visited[nr][nc] = True\n                if heightMap[nr][nc] < max_h:\n                    ans += max_h - heightMap[nr][nc]\n                heappush(hp, (heightMap[nr][nc], nr, nc))\n    return ans",
    "codeLines": 24,
    "timeComplexity": "O(R * C log(R * C))",
    "spaceComplexity": "O(R * C)",
    "whyBetterThanBruteForce": "In 2D, water spills outward in 4 directions to the grid boundary. Finding the limiting spill height requires continuous minimum boundary propagation. A min-heap maintains the current outer boundary ring. Extracting the minimum height boundary cell ensures that interior neighbors cannot spill out through any lower path, allowing trapped water to be computed in O(1) per cell, achieving O(R * C log(R * C)) overall.",
    "edgeCasesAndBreakPoints": [
      "Grid dimension < 3x3: no interior cells exist to trap water; returns 0 immediately.",
      "Completely flat grid: boundary heights equal interior heights; water added is 0.",
      "Single bowl trapped in center: water fills to exact height of lowest perimeter rim.",
      "Multiple connected pools: min-heap boundary naturally floods each pool sequentially."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]",
      "array": [
        "[1, 4, 3, 1, 3, 2]",
        "[3, 2, 1, 3, 2, 4]",
        "[2, 3, 3, 2, 3, 1]"
      ],
      "steps": [
        {
          "active": [
            0,
            2
          ],
          "vars": {
            "boundaryCells": 14,
            "heapMin": "h=1 at (0,0)"
          },
          "msg": "Push all perimeter cells into min-heap. Mark visited."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "pop": "(0,3) h=1",
            "visit": "(1,3) h=3",
            "max_h": 3
          },
          "msg": "Process lowest perimeter cell. Expand to interior neighbors."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "pop": "(1,1) h=2",
            "neighbor": "(1,2) h=1",
            "water": "2 - 1 = 1"
          },
          "msg": "At (1,2) height is 1, lower than boundary rim max_h 2. Traps 1 unit of water!"
        },
        {
          "active": [
            1
          ],
          "vars": {
            "totalTrappedWater": 4
          },
          "msg": "All interior cells processed. Total 2D trapped water = 4. Complete!"
        }
      ]
    }
  },
  {
    "title": "Smallest Range Covering Elements from K Lists",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
    "pattern": "Top K Elements",
    "short": "Top K Elements",
    "intro": "Track the K most significant elements in streaming or multidimensional datasets without sorting all N elements, using bounded heaps or QuickSelect partitioning.",
    "thinking": "By keeping one element from each of the K lists in a min-heap while tracking the current max element, how do we shrink the range?",
    "steps": [
      "Restate **Smallest Range Covering Elements from K Lists**: find smallest range [a, b] containing at least one number from each of the k lists.",
      "Insert the first element of each list into a min-heap storing (val, listIdx, elemIdx), while tracking currentMax.",
      "Current candidate range is [heap.top.val, currentMax].",
      "If currentMax - heap.top.val is smaller than best range recorded, update the best range.",
      "Pop the minimum element and push the next element from its list. If that list is exhausted, terminate."
    ],
    "flow": [
      "Min-heap of k elements",
      "Track currentMax",
      "Evaluate range [min, max]",
      "Advance minimum list",
      "Stop when any list ends"
    ],
    "description": "<p>You have <code>k</code> lists of sorted integers in <strong>non-decreasing&nbsp;order</strong>. Find the <b>smallest</b> range that includes at least one number from each of the <code>k</code> lists.</p>\n\n<p>We define the range <code>[a, b]</code> is smaller than range <code>[c, d]</code> if <code>b - a &lt; d - c</code> <strong>or</strong> <code>a &lt; c</code> if <code>b - a == d - c</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]\n<strong>Output:</strong> [20,24]\n<strong>Explanation: </strong>\nList 1: [4, 10, 15, 24,26], 24 is in range [20,24].\nList 2: [0, 9, 12, 20], 20 is in range [20,24].\nList 3: [5, 18, 22, 30], 22 is in range [20,24].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [[1,2,3],[1,2,3],[1,2,3]]\n<strong>Output:</strong> [1,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>nums.length == k</code></li>\n\t<li><code>1 &lt;= k &lt;= 3500</code></li>\n\t<li><code>1 &lt;= nums[i].length &lt;= 50</code></li>\n\t<li><code>-10<sup>5</sup> &lt;= nums[i][j] &lt;= 10<sup>5</sup></code></li>\n\t<li><code>nums[i]</code>&nbsp;is sorted in <strong>non-decreasing</strong> order.</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef smallestRange(nums: list[list[int]]) -> list[int]:\n    hp = [(nums[i][0], i, 0) for i in range(len(nums))]\n    heapify(hp)\n    max_val = max(x[0] for x in hp)\n    ans = [hp[0][0], max_val]\n    while True:\n        val, i, j = heappop(hp)\n        if max_val - val < ans[1] - ans[0]: ans = [val, max_val]\n        if j + 1 == len(nums[i]): break\n        nxt = nums[i][j + 1]\n        max_val = max(max_val, nxt)\n        heappush(hp, (nxt, i, j + 1))\n    return ans",
    "codeLines": 15,
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Brute force checks all combinations of elements from each list in O(N^K) time. Using a min-heap of size K containing one element from each list, the current range is [min(heap), max_val]. To minimize the range while keeping an element from every list, we must pop the smallest element and advance its source list. This guarantees testing all optimal range candidates in O(N log K) time with O(K) space.",
    "edgeCasesAndBreakPoints": [
      "Lists of length 1: evaluated on first iteration, loop breaks immediately.",
      "All lists contain identical elements: range has width 0 [x, x].",
      "Ties in range width: picks the range with the smaller starting value automatically.",
      "Large numbers up to 10^5: heap maintains ordered tuples cleanly."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]",
      "array": [
        "L0: [4, 10, ...]",
        "L1: [0, 9, ...]",
        "L2: [5, 18, ...]"
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "heap": "[0(L1), 4(L0), 5(L2)]",
            "range": "[0, 5] (len 5)"
          },
          "msg": "Initial elements: 0, 4, 5. Range is [0, 5] (span 5)."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "pop": 0,
            "advance": "L1 to 9",
            "heap": "[4(L0), 5(L2), 9(L1)]",
            "range": "[4, 9] (len 5)"
          },
          "msg": "Pop 0 from L1, push 9. Range is [4, 9] (span 5)."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "pop": 4,
            "advance": "L0 to 10",
            "range": "[5, 10] (len 5)"
          },
          "msg": "Pop 4, push 10. Range is [5, 10] (span 5)."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "bestRange": "[20, 24] (len 4)"
          },
          "msg": "Advancing pointers reaches [20, 24] (len 4), covering 24(L0), 20(L1), 22(L2). Smallest range found!"
        }
      ]
    }
  },
  {
    "title": "Find Servers That Handled Most Requests",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/",
    "pattern": "Top K Elements",
    "short": "Top K Elements",
    "intro": "Track the K most significant elements in streaming or multidimensional datasets without sorting all N elements, using bounded heaps or QuickSelect partitioning.",
    "thinking": "How do we combine a min-heap of busy servers with a balanced binary search set of available server IDs to assign requests in cyclic order?",
    "steps": [
      "Restate **Find Servers That Handled Most Requests**: assign requests to available servers using round-robin cyclic index i % k.",
      "Maintain a min-heap busy storing (freeTime, serverId).",
      "Maintain a sorted set or dual heaps of available server IDs 0 .. k - 1.",
      "At arrival time t, pop all servers from busy with freeTime <= t and return them to available set.",
      "Find smallest available server >= (i % k); if none, wrap around to smallest available >= 0. Update server load count."
    ],
    "flow": [
      "Free busy servers <= arrival t",
      "Query available >= (i % k)",
      "Wrap around if needed",
      "Push to busy heap",
      "Track max requests"
    ],
    "description": "<p>You have <code>k</code> servers numbered from <code>0</code> to <code>k-1</code> that are being used to handle multiple requests simultaneously. Each server has infinite computational capacity but <strong>cannot handle more than one request at a time</strong>. The requests are assigned to servers according to a specific algorithm:</p>\n\n<ul>\n\t<li>The <code>i<sup>th</sup></code> (0-indexed) request arrives.</li>\n\t<li>If all servers are busy, the request is dropped (not handled at all).</li>\n\t<li>If the <code>(i % k)<sup>th</sup></code> server is available, assign the request to that server.</li>\n\t<li>Otherwise, assign the request to the next available server (wrapping around the list of servers and starting from 0 if necessary). For example, if the <code>i<sup>th</sup></code> server is busy, try to assign the request to the <code>(i+1)<sup>th</sup></code> server, then the <code>(i+2)<sup>th</sup></code> server, and so on.</li>\n</ul>\n\n<p>You are given a <strong>strictly increasing</strong> array <code>arrival</code> of positive integers, where <code>arrival[i]</code> represents the arrival time of the <code>i<sup>th</sup></code> request, and another array <code>load</code>, where <code>load[i]</code> represents the load of the <code>i<sup>th</sup></code> request (the time it takes to complete). Your goal is to find the <strong>busiest server(s)</strong>. A server is considered <strong>busiest</strong> if it handled the most number of requests successfully among all the servers.</p>\n\n<p>Return <em>a list containing the IDs (0-indexed) of the <strong>busiest server(s)</strong></em>. You may return the IDs in any order.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/08/load-1.png\" style=\"width: 389px; height: 221px;\" />\n<pre>\n<strong>Input:</strong> k = 3, arrival = [1,2,3,4,5], load = [5,2,3,3,3] \n<strong>Output:</strong> [1] \n<strong>Explanation:</strong> \nAll of the servers start out available.\nThe first 3 requests are handled by the first 3 servers in order.\nRequest 3 comes in. Server 0 is busy, so it&#39;s assigned to the next available server, which is 1.\nRequest 4 comes in. It cannot be handled since all servers are busy, so it is dropped.\nServers 0 and 2 handled one request each, while server 1 handled two requests. Hence server 1 is the busiest server.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> k = 3, arrival = [1,2,3,4], load = [1,2,1,2]\n<strong>Output:</strong> [0]\n<strong>Explanation:</strong> \nThe first 3 requests are handled by first 3 servers.\nRequest 3 comes in. It is handled by server 0 since the server is available.\nServer 0 handled two requests, while servers 1 and 2 handled one request each. Hence server 0 is the busiest server.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> k = 3, arrival = [1,2,3], load = [10,12,11]\n<strong>Output:</strong> [0,1,2]\n<strong>Explanation:</strong> Each server handles a single request, so they are all considered the busiest.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>\n\t<li><code>1 &lt;= arrival.length, load.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>arrival.length == load.length</code></li>\n\t<li><code>1 &lt;= arrival[i], load[i] &lt;= 10<sup>9</sup></code></li>\n\t<li><code>arrival</code> is <strong>strictly increasing</strong>.</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef busiestServers(k: int, arrival: list[int], load: list[int]) -> list[int]:\n    free = list(range(k))\n    busy, count = [], [0] * k\n    for i, (t, d) in enumerate(zip(arrival, load)):\n        while busy and busy[0][0] <= t:\n            _, s = heappop(busy)\n            heappush(free, i + (s - i) % k)\n        if free:\n            server = heappop(free) % k\n            count[server] += 1\n            heappush(busy, (t + d, server))\n    m = max(count)\n    return [i for i, c in enumerate(count) if c == m]",
    "codeLines": 15,
    "timeComplexity": "O((N + M) log K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Scanning linearly from server i % k to find the next available server takes O(K) per request, resulting in O(N * K) worst case. By maintaining free servers in a min-heap with virtual indices i + (s - i) % k, the next available server at or after i % k is retrieved in O(log K). Busy servers are freed upon arrival time in O(log K), reducing overall runtime to O(N log K).",
    "edgeCasesAndBreakPoints": [
      "All servers busy: free heap is empty, request dropped without counting.",
      "k > len(arrival): servers assigned in direct sequential order 0, 1, 2...",
      "Multiple servers tied for max requests: list comprehension returns all tied indices.",
      "Single server (k=1): processes or drops requests sequentially in O(1)."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "k = 3, arrival = [1,2,3,4,5], load = [5,2,3,3,3]",
      "array": [
        "Server 0",
        "Server 1",
        "Server 2"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "req": 0,
            "time": 1,
            "assign": "Server 0 (free until 6)",
            "counts": "[1, 0, 0]"
          },
          "msg": "Req 0 (t=1): Server 0 handles it until t=6. count[0]=1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "req": 1,
            "time": 2,
            "assign": "Server 1 (free until 4)",
            "counts": "[1, 1, 0]"
          },
          "msg": "Req 1 (t=2): Server 1 handles it until t=4. count[1]=1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "req": 2,
            "time": 3,
            "assign": "Server 2 (free until 6)",
            "counts": "[1, 1, 1]"
          },
          "msg": "Req 2 (t=3): Server 2 handles it until t=6. count[2]=1."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "req": 3,
            "time": 4,
            "assign": "Server 1 (freed at 4!)",
            "counts": "[1, 2, 1]"
          },
          "msg": "Req 3 (t=4): Server 1 finishes just in time and handles request 3! count[1]=2."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "mostBusy": "[1]",
            "maxHandled": 2
          },
          "msg": "Server 1 handled 2 requests, the most among all servers. Output: [1]."
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
    "intro": "Concurrently advance across K sorted streams or generate combinations in increasing order by maintaining a size-K priority queue of active candidates.",
    "thinking": "How does logarithmic tournament selection via a min-heap guarantee linearithmic time over all N nodes?",
    "steps": [
      "Restate **Merge k Sorted Lists**: merge k sorted linked lists into a single sorted list.",
      "Build min-heap containing the first node of each non-empty list.",
      "Extract minimum node, link it into the combined output list.",
      "If the extracted node has a subsequent node (node.next), insert node.next into the min-heap.",
      "Time complexity is O(N log k), auxiliary memory is O(k) for the heap."
    ],
    "flow": [
      "Heapify k heads",
      "Pop min node",
      "Attach to merged list",
      "Push successor to heap",
      "O(N log k) total"
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
    "title": "Smallest Range Covering Elements from K Lists",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
    "pattern": "K-Way Merge",
    "short": "K-Way Merge",
    "intro": "Concurrently advance across K sorted streams or generate combinations in increasing order by maintaining a size-K priority queue of active candidates.",
    "thinking": "How does advancing the pointer of the minimum element in a K-way frontier guarantee we inspect all minimal covering intervals?",
    "steps": [
      "Restate **Smallest Range Covering Elements from K Lists**: find the narrowest interval containing numbers from all k sorted lists.",
      "Initialize min-heap with the first element of each of the k lists.",
      "Maintain maxVal = max(all initial k elements).",
      "At each step, range span is maxVal - minVal. Update minimal range if smaller.",
      "Advance the list containing minVal; if that list is exhausted, no further valid range can contain elements from all k lists."
    ],
    "flow": [
      "Frontier of k lists",
      "Min-heap pop lowest",
      "Check span to maxVal",
      "Push next from same list",
      "Stop when list exhausts"
    ],
    "description": "<p>You have <code>k</code> lists of sorted integers in <strong>non-decreasing&nbsp;order</strong>. Find the <b>smallest</b> range that includes at least one number from each of the <code>k</code> lists.</p>\n\n<p>We define the range <code>[a, b]</code> is smaller than range <code>[c, d]</code> if <code>b - a &lt; d - c</code> <strong>or</strong> <code>a &lt; c</code> if <code>b - a == d - c</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]\n<strong>Output:</strong> [20,24]\n<strong>Explanation: </strong>\nList 1: [4, 10, 15, 24,26], 24 is in range [20,24].\nList 2: [0, 9, 12, 20], 20 is in range [20,24].\nList 3: [5, 18, 22, 30], 22 is in range [20,24].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [[1,2,3],[1,2,3],[1,2,3]]\n<strong>Output:</strong> [1,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>nums.length == k</code></li>\n\t<li><code>1 &lt;= k &lt;= 3500</code></li>\n\t<li><code>1 &lt;= nums[i].length &lt;= 50</code></li>\n\t<li><code>-10<sup>5</sup> &lt;= nums[i][j] &lt;= 10<sup>5</sup></code></li>\n\t<li><code>nums[i]</code>&nbsp;is sorted in <strong>non-decreasing</strong> order.</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef smallestRange(nums: list[list[int]]) -> list[int]:\n    hp = [(row[0], i, 0) for i, row in enumerate(nums)]\n    heapify(hp)\n    cur_max = max(x[0] for x in hp)\n    best = [hp[0][0], cur_max]\n    while True:\n        val, r, c = heappop(hp)\n        if cur_max - val < best[1] - best[0]: best = [val, cur_max]\n        if c + 1 == len(nums[r]): break\n        nxt = nums[r][c + 1]\n        cur_max = max(cur_max, nxt)\n        heappush(hp, (nxt, r, c + 1))\n    return best",
    "codeLines": 15,
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Testing all possible range endpoints requires checking O(N^2) intervals against K lists, resulting in O(K * N^2) time. By framing the search as a K-way merge, the min-heap always contains the minimum element across all K active candidates. Stepping the pointer of the minimum element advances towards tighter ranges in O(log K) per step, guaranteeing O(N log K) overall.",
    "edgeCasesAndBreakPoints": [
      "Any single list exhausted: cannot form any further valid range containing all lists; terminates.",
      "All lists contain the same number: immediately outputs [x, x].",
      "Lists of differing lengths: handles varied list exhaustion without index out of bounds.",
      "Negative coordinates: difference cur_max - val remains numerically exact."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]",
      "array": [
        "L0: [4, 10..]",
        "L1: [0, 9..]",
        "L2: [5, 18..]"
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "heapMin": 0,
            "max": 5,
            "range": "[0, 5]"
          },
          "msg": "K-Way Merge initial window: min=0, max=5. Range = [0, 5]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "advance": "L1 to 9",
            "newMin": 4,
            "newMax": 9,
            "range": "[4, 9]"
          },
          "msg": "Advance source list of min (0 -> 9). Window is [4, 9]."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "advance": "L0 to 10",
            "newMin": 5,
            "newMax": 10,
            "range": "[5, 10]"
          },
          "msg": "Advance L0 to 10. Window is [5, 10]."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "bestRange": "[20, 24]"
          },
          "msg": "Reaches optimal window [20, 24] with width 4. Complete!"
        }
      ]
    }
  },
  {
    "title": "Find the Kth Smallest Sum of a Matrix With Sorted Rows",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/",
    "pattern": "K-Way Merge",
    "short": "K-Way Merge",
    "intro": "Concurrently advance across K sorted streams or generate combinations in increasing order by maintaining a size-K priority queue of active candidates.",
    "thinking": "How can row-by-row K-way merging reduce the matrix problem into repeatedly merging two sorted lists while retaining only the top K smallest sums?",
    "steps": [
      "Restate **Find the Kth Smallest Sum of a Matrix With Sorted Rows**: find the k-th smallest array sum picking one element from each row.",
      "Start with the first row as the initial candidate sums res = mat[0].",
      "Iterate from row 1 to m - 1: merge previous candidate list res with current row mat[i].",
      "Generate pairwise sums using a min-heap to pick the k smallest sums among res[x] + mat[i][y].",
      "Keep only the top min(k, length) smallest sums after each row merge, avoiding exponential branching."
    ],
    "flow": [
      "Start with row 0",
      "Merge with next row",
      "Min-heap pairwise sums",
      "Retain top K sums",
      "Repeat for all rows"
    ],
    "description": "<p>You are given an <code>m x n</code> matrix <code>mat</code> that has its rows sorted in non-decreasing order and an integer <code>k</code>.</p>\n\n<p>You are allowed to choose <strong>exactly one element</strong> from each row to form an array.</p>\n\n<p>Return <em>the </em><code>k<sup>th</sup></code><em> smallest array sum among all possible arrays</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> mat = [[1,3,11],[2,4,6]], k = 5\n<strong>Output:</strong> 7\n<strong>Explanation:</strong> Choosing one element from each row, the first k smallest sum are:\n[1,2], [1,4], [3,2], [3,4], [1,6]. Where the 5th sum is 7.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> mat = [[1,3,11],[2,4,6]], k = 9\n<strong>Output:</strong> 17\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> mat = [[1,10,10],[1,4,5],[2,3,6]], k = 7\n<strong>Output:</strong> 9\n<strong>Explanation:</strong> Choosing one element from each row, the first k smallest sum are:\n[1,1,2], [1,1,3], [1,4,2], [1,4,3], [1,1,6], [1,5,2], [1,5,3]. Where the 7th sum is 9.  \n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == mat.length</code></li>\n\t<li><code>n == mat.length[i]</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 40</code></li>\n\t<li><code>1 &lt;= mat[i][j] &lt;= 5000</code></li>\n\t<li><code>1 &lt;= k &lt;= min(200, n<sup>m</sup>)</code></li>\n\t<li><code>mat[i]</code> is a non-decreasing array.</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef kthSmallest(mat: list[list[int]], k: int) -> int:\n    h = mat[0][:k]\n    for row in mat[1:]:\n        hp = []\n        for x in h:\n            for y in row[:k]:\n                hp.append(x + y)\n        hp.sort()\n        h = hp[:k]\n    return h[k - 1] if len(h) >= k else h[-1]",
    "codeLines": 12,
    "timeComplexity": "O(R * K log K)",
    "spaceComplexity": "O(K)",
    "whyBetterThanBruteForce": "Generating all combinations of row elements produces C^R sums, which is astronomical (e.g. 40^40). Because each row is sorted, the Kth smallest sum between the accumulated prefix and the next row cannot involve any elements beyond the first K elements. Merging row by row and retaining only the smallest K sums at each step reduces total operations to O(R * K log K).",
    "edgeCasesAndBreakPoints": [
      "k = 1: simply sums the first column of the matrix in O(R).",
      "Matrix with 1 row: returns mat[0][k-1] directly.",
      "All elements equal: duplicates handled smoothly by slicing [:k].",
      "k larger than total possible combinations: clamped by row length gracefully."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "mat = [[1,3,11],[2,4,6]], k = 5",
      "array": [
        "[1, 3, 11]",
        "[2, 4, 6]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "row0": "[1, 3, 11]",
            "k": 5
          },
          "msg": "Row 0 sums: [1, 3, 11]."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "pairSums": "[3, 5, 7, 5, 7, 9, 13, 15, 17]"
          },
          "msg": "Compute pairwise sums with Row 1 [2, 4, 6]: [1+2=3, 1+4=5, 1+6=7, 3+2=5, 3+4=7, 3+6=9...]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "sortedTopK": "[3, 5, 5, 7, 7]"
          },
          "msg": "Sort and retain top k=5 sums: [3, 5, 5, 7, 7]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "kthSmallest": 7
          },
          "msg": "The 5th smallest sum is 7. Complete!"
        }
      ]
    }
  },
  {
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "pattern": "Trees & Tree Traversals",
    "short": "Trees & Tree Traversals",
    "intro": "Traverse hierarchical structures using pre/in/post-order traversals, serialize topologies, and evaluate subtree metrics with bottom-up post-order state passing.",
    "thinking": "At each node, how do we distinguish between the path sum that can extend upward to its parent vs the complete path arching through the node?",
    "steps": [
      "Restate **Binary Tree Maximum Path Sum**: find maximum path sum between any two nodes in a binary tree.",
      "Post-order traversal: compute maximum gain each subtree can contribute upward.",
      "Left gain: leftGain = max(0, maxPathDown(node.left)); right gain: rightGain = max(0, maxPathDown(node.right)).",
      "Arching path through current node is node.val + leftGain + rightGain. Update global maximum.",
      "Return node.val + max(leftGain, rightGain) to parent (can only extend one branch upward)."
    ],
    "flow": [
      "Post-order DFS",
      "Left and right max gains",
      "Arching path sum through node",
      "Update global max",
      "Return single-branch gain"
    ],
    "description": "<p>A <strong>path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence <strong>at most once</strong>. Note that the path does not need to pass through the root.</p>\n\n<p>The <strong>path sum</strong> of a path is the sum of the node&#39;s values in the path.</p>\n\n<p>Given the <code>root</code> of a binary tree, return <em>the maximum <strong>path sum</strong> of any <strong>non-empty</strong> path</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg\" style=\"width: 322px; height: 182px;\" />\n<pre>\n<strong>Input:</strong> root = [1,2,3]\n<strong>Output:</strong> 6\n<strong>Explanation:</strong> The optimal path is 2 -&gt; 1 -&gt; 3 with a path sum of 2 + 1 + 3 = 6.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg\" />\n<pre>\n<strong>Input:</strong> root = [-10,9,20,null,null,15,7]\n<strong>Output:</strong> 42\n<strong>Explanation:</strong> The optimal path is 15 -&gt; 20 -&gt; 7 with a path sum of 15 + 20 + 7 = 42.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[1, 3 * 10<sup>4</sup>]</code>.</li>\n\t<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n",
    "pythonCode": "def maxPathSum(root) -> int:\n    ans = float(\"-inf\")\n    def gain(node):\n        nonlocal ans\n        if not node: return 0\n        l = max(0, gain(node.left))\n        r = max(0, gain(node.right))\n        ans = max(ans, node.val + l + r)\n        return node.val + max(l, r)\n    gain(root)\n    return ans",
    "codeLines": 11,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(H)",
    "whyBetterThanBruteForce": "Brute force checks every possible pair of nodes (u, v) and finds their unique simple path in O(N^2) time. In a post-order traversal, each node can act as the highest peak of a path (combining left gain + node.val + right gain), while returning only the single best downward branch to its parent. This evaluates all possible maximum paths in a single O(N) pass.",
    "edgeCasesAndBreakPoints": [
      "All node values negative: returning max(0, gain) discards negative subtrees; ans starts at -inf so it picks the single least-negative node.",
      "Single node tree: returns root.val directly.",
      "Skewed tree (linked list): recursion stack uses O(N) space, handles single branch gains without null issues.",
      "Paths not passing through root: ans updated globally at each internal node."
    ],
    "simConfig": {
      "type": "tree",
      "inputDisplay": "root = [-10, 9, 20, null, null, 15, 7]",
      "array": [
        "Root: -10",
        "Left: 9",
        "Right: 20",
        "20.left: 15",
        "20.right: 7"
      ],
      "steps": [
        {
          "active": [
            1
          ],
          "vars": {
            "node": 9,
            "gain": 9,
            "pathThroughNode": 9
          },
          "msg": "Leaf 9: gain is 9. ans = 9."
        },
        {
          "active": [
            3,
            4
          ],
          "vars": {
            "15.gain": 15,
            "7.gain": 7
          },
          "msg": "Leaves 15 and 7: gains are 15 and 7."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "node": 20,
            "path": "15 + 20 + 7 = 42",
            "ans": 42
          },
          "msg": "Node 20: combines left (15) + self (20) + right (7) = 42! New max ans = 42. Returns 20 + 15 = 35."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "node": -10,
            "path": "9 + (-10) + 35 = 34"
          },
          "msg": "Root -10: path through root is 34 < 42. Global max remains 42. Complete!"
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
    "intro": "Traverse hierarchical structures using pre/in/post-order traversals, serialize topologies, and evaluate subtree metrics with bottom-up post-order state passing.",
    "thinking": "How does preorder traversal with explicit null markers uniquely represent any binary tree topology without ambiguity?",
    "steps": [
      "Restate **Serialize and Deserialize Binary Tree**: design an algorithm to encode and decode a binary tree to/from a string.",
      "Serialize: preorder traversal recursively appending node.val + ',', and '#,' for null nodes.",
      "Deserialize: split encoded string into a FIFO token queue.",
      "Pop next token: if '#', return null.",
      "Otherwise construct TreeNode(val), then recursively construct node.left and node.right from the remaining queue."
    ],
    "flow": [
      "Preorder with null tokens",
      "Delimited string encoding",
      "Token queue for decode",
      "Recursive node rebuild",
      "Lossless tree roundtrip"
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
    "title": "Binary Tree Cameras",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/binary-tree-cameras/",
    "pattern": "Trees & Tree Traversals",
    "short": "Trees & Tree Traversals",
    "intro": "Traverse hierarchical structures using pre/in/post-order traversals, serialize topologies, and evaluate subtree metrics with bottom-up post-order state passing.",
    "thinking": "Why is placing cameras at parents of uncovered leaves strictly better than placing cameras on the leaves themselves?",
    "steps": [
      "Restate **Binary Tree Cameras**: place minimum cameras so every node in the binary tree is monitored.",
      "Use bottom-up post-order traversal with 3 states: 0 = uncovered, 1 = covered with camera, 2 = covered without camera.",
      "Null children are considered covered: return state 2.",
      "If either child is uncovered (0), current node must install a camera (return 1, increment camera count).",
      "If either child has a camera (1), current node is covered without a camera (return 2). Root node needs special check if left uncovered."
    ],
    "flow": [
      "Bottom-up state DFS",
      "0: uncovered, 1: camera, 2: covered",
      "Child uncovered? install camera",
      "Child camera? covered",
      "Handle root state"
    ],
    "description": "<p>You are given the <code>root</code> of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.</p>\n\n<p>Return <em>the minimum number of cameras needed to monitor all nodes of the tree</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/29/bst_cameras_01.png\" style=\"width: 138px; height: 163px;\" />\n<pre>\n<strong>Input:</strong> root = [0,0,null,0,0]\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> One camera is enough to monitor all nodes if placed as shown.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/29/bst_cameras_02.png\" style=\"width: 139px; height: 312px;\" />\n<pre>\n<strong>Input:</strong> root = [0,0,null,0,null,0,null,null,0]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li>\n\t<li><code>Node.val == 0</code></li>\n</ul>\n",
    "pythonCode": "def minCameraCover(root) -> int:\n    ans = 0\n    def dfs(node):\n        nonlocal ans\n        if not node: return 2  # 0: needs cover, 1: has camera, 2: covered\n        l, r = dfs(node.left), dfs(node.right)\n        if l == 0 or r == 0:\n            ans += 1; return 1\n        return 2 if l == 1 or r == 1 else 0\n    return ans + (dfs(root) == 0)",
    "codeLines": 10,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(H)",
    "whyBetterThanBruteForce": "Testing all 2^N camera placement assignments takes O(2^N) exponential time. Greedily, placing cameras at leaves is never optimal—it is always strictly better to place cameras on their parents, because a parent covers its parent, itself, and both children. By using a 3-state bottom-up postorder traversal (0: needs camera, 1: has camera, 2: covered), camera count is minimized in a single O(N) pass.",
    "edgeCasesAndBreakPoints": [
      "Single node tree: root needs camera (state 0), ans + (dfs(root)==0) correctly adds 1.",
      "Linear chain of nodes: cameras placed every 3 nodes greedily.",
      "Root left uncovered by children: outer check (dfs(root) == 0) places camera at root.",
      "Null nodes: return state 2 (already covered) so leaves are not forced to place cameras."
    ],
    "simConfig": {
      "type": "tree",
      "inputDisplay": "root = [0, 0, null, 0, 0]",
      "array": [
        "Root(0)",
        "Left(1)",
        "L.Left(2)",
        "L.Right(3)"
      ],
      "steps": [
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "leaves": "state 0 (needs cover)"
          },
          "msg": "Bottom-up postorder: leaves 2 and 3 have no children, return state 0 (needs cover)."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "node": "Left(1)",
            "action": "Place camera!",
            "state": 1,
            "cameras": 1
          },
          "msg": "Parent node 1 sees children need cover: place camera at node 1! cameras = 1. Returns state 1."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "node": "Root(0)",
            "childState": 1,
            "state": 2
          },
          "msg": "Root sees child 1 has camera. Root is covered! Returns state 2."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "totalCameras": 1
          },
          "msg": "All nodes covered with minimal camera count = 1. Complete!"
        }
      ]
    }
  },
  {
    "title": "Longest Increasing Path in a Matrix",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
    "pattern": "Depth First Search — DFS",
    "short": "DFS",
    "intro": "Recursively explore search paths to termination or cycle detection, leveraging memoization to collapse DAG subproblems and backtracking state on return.",
    "thinking": "Why does the strictly increasing condition guarantee no cycles, making DFS with memoization run in exact O(R * C) time?",
    "steps": [
      "Restate **Longest Increasing Path in a Matrix**: find the length of the longest strictly increasing path in a matrix.",
      "Strict inequality (matrix[nr][nc] > matrix[r][c]) ensures the directed graph is a Directed Acyclic Graph (DAG).",
      "Define memo[r][c] as the length of the longest increasing path starting at cell (r, c).",
      "For cell (r, c), recursively evaluate 1 + max(dfs(nr, nc)) for all valid strictly greater 4-directional neighbors.",
      "Store result in memo[r][c]; global maximum across all cells is the overall answer in O(R * C) time."
    ],
    "flow": [
      "DAG structure guarantee",
      "DFS from cell (r, c)",
      "Explore strictly greater neighbors",
      "Memoize path length",
      "Max over all cells"
    ],
    "description": "<p>Given an <code>m x n</code> integers <code>matrix</code>, return <em>the length of the longest increasing path in </em><code>matrix</code>.</p>\n\n<p>From each cell, you can either move in four directions: left, right, up, or down. You <strong>may not</strong> move <strong>diagonally</strong> or move <strong>outside the boundary</strong> (i.e., wrap-around is not allowed).</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/05/grid1.jpg\" style=\"width: 242px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[9,9,4],[6,6,8],[2,1,1]]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> The longest increasing path is <code>[1, 2, 6, 9]</code>.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/27/tmp-grid.jpg\" style=\"width: 253px; height: 253px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[3,4,5],[3,2,6],[2,2,1]]\n<strong>Output:</strong> 4\n<strong>Explanation: </strong>The longest increasing path is <code>[3, 4, 5, 6]</code>. Moving diagonally is not allowed.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> matrix = [[1]]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == matrix.length</code></li>\n\t<li><code>n == matrix[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 200</code></li>\n\t<li><code>0 &lt;= matrix[i][j] &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n",
    "pythonCode": "from functools import lru_cache\n\ndef longestIncreasingPath(matrix: list[list[int]]) -> int:\n    R, C = len(matrix), len(matrix[0])\n    @lru_cache(None)\n    def dfs(r, c):\n        res = 1\n        for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and matrix[nr][nc] > matrix[r][c]:\n                res = max(res, 1 + dfs(nr, nc))\n        return res\n    return max(dfs(r, c) for r in range(R) for c in range(C))",
    "codeLines": 13,
    "timeComplexity": "O(R * C)",
    "spaceComplexity": "O(R * C)",
    "whyBetterThanBruteForce": "Plain DFS explores exponential branches and repeats path explorations across multiple paths, taking O(4^(R*C)) time. Because paths must be strictly increasing, the directed edges form a Directed Acyclic Graph (DAG) with no cycles. Memoizing the longest path starting from each cell (r, c) with lru_cache ensures each cell is computed exactly once, achieving O(R * C) optimal time.",
    "edgeCasesAndBreakPoints": [
      "1x1 matrix: returns 1 immediately.",
      "All matrix values identical: no neighbor is strictly greater; returns 1.",
      "Strictly increasing snake path: correctly finds length R * C without stack overflow.",
      "Matrix with local peaks and valleys: memoization correctly branches from each local maximum."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "matrix = [[9,9,4],[6,6,8],[2,1,1]]",
      "array": [
        "[9, 9, 4]",
        "[6, 6, 8]",
        "[2, 1, 1]"
      ],
      "steps": [
        {
          "active": [
            2
          ],
          "vars": {
            "start": "(2,1) val=1",
            "path": "1"
          },
          "msg": "Start DFS from cell (2, 1) with value 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "step1": "(2,0) val=2",
            "path": "1 -> 2"
          },
          "msg": "Move (2,1)[1] -> (2,0)[2]: valid increasing step."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "step2": "(1,0) val=6",
            "path": "1 -> 2 -> 6"
          },
          "msg": "Move (2,0)[2] -> (1,0)[6]: valid increasing step."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "step3": "(0,0) val=9",
            "path": "1 -> 2 -> 6 -> 9"
          },
          "msg": "Move (1,0)[6] -> (0,0)[9]: valid increasing step. Length = 4!"
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "maxPath": 4
          },
          "msg": "All cells evaluated with memoization. Longest increasing path length = 4. Complete!"
        }
      ]
    }
  },
  {
    "title": "Word Break II",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/word-break-ii/",
    "pattern": "Depth First Search — DFS",
    "short": "DFS",
    "intro": "Recursively explore search paths to termination or cycle detection, leveraging memoization to collapse DAG subproblems and backtracking state on return.",
    "thinking": "How does memoized DFS (suffix -> list of valid sentences) prevent exponential re-computation of shared sentence suffixes?",
    "steps": [
      "Restate **Word Break II**: construct all possible valid sentences formed by segmenting s into dictionary words.",
      "Use DFS with memoization mapping suffix substring to its list of valid sentence completions.",
      "Base case: empty string returns [\"\"].",
      "For string rem, check all prefix substrings rem[0..i]: if prefix is in word set, recursively solve for suffix rem[i..].",
      "Prepend prefix to each completed suffix sentence and memoize result for rem."
    ],
    "flow": [
      "DFS on remaining suffix",
      "Prefix in dictionary?",
      "Recurse on suffix",
      "Combine prefix + suffix",
      "Memoize result"
    ],
    "description": "<p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, add spaces in <code>s</code> to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in <strong>any order</strong>.</p>\n\n<p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;catsanddog&quot;, wordDict = [&quot;cat&quot;,&quot;cats&quot;,&quot;and&quot;,&quot;sand&quot;,&quot;dog&quot;]\n<strong>Output:</strong> [&quot;cats and dog&quot;,&quot;cat sand dog&quot;]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;pineapplepenapple&quot;, wordDict = [&quot;apple&quot;,&quot;pen&quot;,&quot;applepen&quot;,&quot;pine&quot;,&quot;pineapple&quot;]\n<strong>Output:</strong> [&quot;pine apple pen apple&quot;,&quot;pineapple pen apple&quot;,&quot;pine applepen apple&quot;]\n<strong>Explanation:</strong> Note that you are allowed to reuse a dictionary word.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;,&quot;dog&quot;,&quot;sand&quot;,&quot;and&quot;,&quot;cat&quot;]\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 20</code></li>\n\t<li><code>1 &lt;= wordDict.length &lt;= 1000</code></li>\n\t<li><code>1 &lt;= wordDict[i].length &lt;= 10</code></li>\n\t<li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.</li>\n\t<li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</li>\n\t<li>Input is generated in a way that the length of the answer doesn&#39;t exceed&nbsp;10<sup>5</sup>.</li>\n</ul>\n",
    "pythonCode": "from functools import lru_cache\n\ndef wordBreak(s: str, wordDict: list[str]) -> list[str]:\n    words = set(wordDict)\n    @lru_cache(None)\n    def dfs(i):\n        if i == len(s): return [\"\"]\n        res = []\n        for j in range(i + 1, len(s) + 1):\n            w = s[i:j]\n            if w in words:\n                for sub in dfs(j):\n                    res.append((w + \" \" + sub).strip())\n        return res\n    return dfs(0)",
    "codeLines": 15,
    "timeComplexity": "O(N^3 + output)",
    "spaceComplexity": "O(N^3)",
    "whyBetterThanBruteForce": "Naive backtracking re-evaluates the same suffix string multiple times when different prefixes reach the same index, leading to O(2^N) time. Memoizing results for suffix index i ensures we only compute sentences for each distinct suffix once. If a suffix cannot be segmented, it returns [] immediately and prunes further branching.",
    "edgeCasesAndBreakPoints": [
      "s cannot be segmented (e.g. 'catsandog' with missing 'og'): returns [] without generating dead sentences.",
      "Single character words: generates all partition combinations efficiently.",
      "All words form identical letters (e.g. 'aaaa', ['a', 'aa']): correctly yields all partitions.",
      "len(s) up to 20: memoization table size <= 20, runs in < 5ms."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "s = 'catsanddog', wordDict = ['cat', 'cats', 'and', 'sand', 'dog']",
      "array": [
        "'cat'",
        "'cats'",
        "'and'",
        "'sand'",
        "'dog'"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "prefix": "'cat'",
            "remaining": "'sanddog'"
          },
          "msg": "Match prefix 'cat'. Recurse on remaining 'sanddog'."
        },
        {
          "active": [
            3,
            4
          ],
          "vars": {
            "path1": "'cat sand dog'"
          },
          "msg": "'sand' + 'dog' matches! Complete sentence: 'cat sand dog'."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "prefix": "'cats'",
            "remaining": "'anddog'"
          },
          "msg": "Match prefix 'cats'. Recurse on remaining 'anddog'."
        },
        {
          "active": [
            2,
            4
          ],
          "vars": {
            "path2": "'cats and dog'"
          },
          "msg": "'and' + 'dog' matches! Complete sentence: 'cats and dog'."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "result": "['cat sand dog', 'cats and dog']"
          },
          "msg": "All valid sentences found. Output: ['cat sand dog', 'cats and dog']."
        }
      ]
    }
  },
  {
    "title": "Making A Large Island",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/making-a-large-island/",
    "pattern": "Depth First Search — DFS",
    "short": "DFS",
    "intro": "Recursively explore search paths to termination or cycle detection, leveraging memoization to collapse DAG subproblems and backtracking state on return.",
    "thinking": "How does labeling connected components with unique IDs and precomputing their areas allow O(1) evaluation of flipping any 0 to 1?",
    "steps": [
      "Restate **Making A Large Island**: find maximum island size possible by changing at most one 0 into 1.",
      "Use DFS to identify connected components of 1s, labeling each island with a unique ID (2, 3, 4, ...).",
      "Store each island ID's area in a hashmap or array area[id].",
      "Iterate over every cell with 0: collect unique neighboring island IDs among its 4 cardinal neighbors.",
      "Potential island size is 1 + sum(area[neighbor_id]). Track global maximum in O(R * C) time."
    ],
    "flow": [
      "DFS label island components",
      "Record area per island ID",
      "Scan all 0 cells",
      "Sum unique neighbor areas + 1",
      "Max island area"
    ],
    "description": "<p>You are given an <code>n x n</code> binary matrix <code>grid</code>. You are allowed to change <strong>at most one</strong> <code>0</code> to be <code>1</code>.</p>\n\n<p>Return <em>the size of the largest <strong>island</strong> in</em> <code>grid</code> <em>after applying this operation</em>.</p>\n\n<p>An <strong>island</strong> is a 4-directionally connected group of <code>1</code>s.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [[1,0],[0,1]]\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> Change one 0 to 1 and connect two 1s, then we get an island with area = 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [[1,1],[1,0]]\n<strong>Output:</strong> 4\n<strong>Explanation: </strong>Change the 0 to 1 and make the island bigger, only one island with area = 4.</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [[1,1],[1,1]]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> Can&#39;t change any 0 to 1, only one island with area = 4.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == grid.length</code></li>\n\t<li><code>n == grid[i].length</code></li>\n\t<li><code>1 &lt;= n &lt;= 500</code></li>\n\t<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>\n</ul>\n",
    "pythonCode": "def largestIsland(grid: list[list[int]]) -> int:\n    n, color = len(grid), 2\n    area = {0: 0}\n    def dfs(r, c, col):\n        if not (0 <= r < n and 0 <= c < n and grid[r][c] == 1): return 0\n        grid[r][c] = col\n        return 1 + sum(dfs(r + dr, c + dc, col) for dr, dc in ((-1,0),(1,0),(0,-1),(0,1)))\n    for r in range(n):\n        for c in range(n):\n            if grid[r][c] == 1:\n                area[color] = dfs(r, c, color); color += 1\n    ans = max(area.values(), default=0)\n    for r in range(n):\n        for c in range(n):\n            if grid[r][c] == 0:\n                seen = {grid[r + dr][c + dc] for dr, dc in ((-1,0),(1,0),(0,-1),(0,1)) if 0 <= r + dr < n and 0 <= c + dc < n}\n                ans = max(ans, 1 + sum(area[c] for c in seen))\n    return ans if ans else n * n",
    "codeLines": 18,
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N^2)",
    "whyBetterThanBruteForce": "Brute force changes each 0 to 1 and runs a full BFS/DFS across the entire grid, taking O(N^2) per 0, totaling O(N^4) time. Instead, we run a single pass of DFS to assign a unique color ID to each connected component of 1s and precompute its area. Then, for each 0, we query the distinct adjacent island colors in O(1) time using a set, reducing total time to O(N^2).",
    "edgeCasesAndBreakPoints": [
      "Grid already completely filled with 1s: no 0 exists to flip; returns n * n.",
      "Grid completely filled with 0s: flipping any 0 produces an island of size 1.",
      "Flipping a 0 that touches the same island on multiple sides: set deduplication prevents double-counting.",
      "Multiple isolated islands bridged by a single 0: sums all unique neighbor areas."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "grid = [[1, 0], [0, 1]]",
      "array": [
        "[1, 0]",
        "[0, 1]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "island1": "at (0,0), area 1",
            "island2": "at (1,1), area 1"
          },
          "msg": "Initial DFS: component 1 at (0,0) (area 1), component 2 at (1,1) (area 1)."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "flip": "(0, 1)",
            "neighbors": "{Island 1, Island 2}"
          },
          "msg": "Flip (0, 1) to 1: bridges Island 1 and Island 2! New area = 1 + 1 + 1 = 3."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "flip": "(1, 0)",
            "neighbors": "{Island 1, Island 2}"
          },
          "msg": "Flip (1, 0) to 1: also bridges both islands. Area = 3."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "maxIsland": 3
          },
          "msg": "Maximum achievable island area is 3. Complete!"
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
    "intro": "Explore graph states level-by-level using a queue to guarantee shortest path metrics in unweighted state graphs, optimizing transitions with bidirectional frontiers.",
    "thinking": "How does bidirectional BFS from both beginWord and endWord reduce search space branching from b^d to 2 * b^(d/2)?",
    "steps": [
      "Restate **Word Ladder**: find the shortest transformation sequence length from beginWord to endWord changing one letter at a time.",
      "Store dictionary in a fast hash set for O(1) lookup.",
      "Maintain two frontier sets: front initialized with beginWord, back initialized with endWord.",
      "At each step, always expand the smaller frontier: for each word, mutate each character a-z.",
      "If mutant is in the opposite frontier, return step + 1; if in wordSet, add to next level and remove from wordSet."
    ],
    "flow": [
      "Bidirectional BFS frontiers",
      "Always expand smaller side",
      "Mutate 1 character (a-z)",
      "Intersection found? return steps",
      "O(26 * L * N)"
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
    "title": "Word Ladder II",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/word-ladder-ii/",
    "pattern": "Breadth First Search — BFS",
    "short": "BFS",
    "intro": "Explore graph states level-by-level using a queue to guarantee shortest path metrics in unweighted state graphs, optimizing transitions with bidirectional frontiers.",
    "thinking": "How do we combine BFS to build a DAG of shortest path predecessors with DFS backtracking to reconstruct all minimal paths?",
    "steps": [
      "Restate **Word Ladder II**: output all shortest transformation sequences from beginWord to endWord.",
      "Phase 1 (BFS): level-by-level BFS from beginWord to compute distances and build predecessor graph adj[parent] = [children].",
      "Erase visited words only after completing the entire level to permit multiple shortest predecessors.",
      "Halt BFS once endWord is reached at the current level.",
      "Phase 2 (DFS): backtrack from beginWord to endWord along the built DAG to collect all shortest paths."
    ],
    "flow": [
      "Level-order BFS",
      "Record parent-child DAG",
      "Stop BFS when end reached",
      "DFS backtrack along DAG",
      "Output all shortest sequences"
    ],
    "description": "<p>A <strong>transformation sequence</strong> from word <code>beginWord</code> to word <code>endWord</code> using a dictionary <code>wordList</code> is a sequence of words <code>beginWord -&gt; s<sub>1</sub> -&gt; s<sub>2</sub> -&gt; ... -&gt; s<sub>k</sub></code> such that:</p>\n\n<ul>\n\t<li>Every adjacent pair of words differs by a single letter.</li>\n\t<li>Every <code>s<sub>i</sub></code> for <code>1 &lt;= i &lt;= k</code> is in <code>wordList</code>. Note that <code>beginWord</code> does not need to be in <code>wordList</code>.</li>\n\t<li><code>s<sub>k</sub> == endWord</code></li>\n</ul>\n\n<p>Given two words, <code>beginWord</code> and <code>endWord</code>, and a dictionary <code>wordList</code>, return <em>all the <strong>shortest transformation sequences</strong> from</em> <code>beginWord</code> <em>to</em> <code>endWord</code><em>, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words </em><code>[beginWord, s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>k</sub>]</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]\n<strong>Output:</strong> [[&quot;hit&quot;,&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;cog&quot;],[&quot;hit&quot;,&quot;hot&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]]\n<strong>Explanation:</strong>&nbsp;There are 2 shortest transformation sequences:\n&quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;dot&quot; -&gt; &quot;dog&quot; -&gt; &quot;cog&quot;\n&quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;lot&quot; -&gt; &quot;log&quot; -&gt; &quot;cog&quot;\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;]\n<strong>Output:</strong> []\n<strong>Explanation:</strong> The endWord &quot;cog&quot; is not in wordList, therefore there is no valid transformation sequence.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= beginWord.length &lt;= 5</code></li>\n\t<li><code>endWord.length == beginWord.length</code></li>\n\t<li><code>1 &lt;= wordList.length &lt;= 500</code></li>\n\t<li><code>wordList[i].length == beginWord.length</code></li>\n\t<li><code>beginWord</code>, <code>endWord</code>, and <code>wordList[i]</code> consist of lowercase English letters.</li>\n\t<li><code>beginWord != endWord</code></li>\n\t<li>All the words in <code>wordList</code> are <strong>unique</strong>.</li>\n\t<li>The <strong>sum</strong> of all shortest transformation sequences does not exceed <code>10<sup>5</sup></code>.</li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict\n\ndef findLadders(beginWord: str, endWord: str, wordList: list[str]) -> list[list[str]]:\n    words = set(wordList)\n    if endWord not in words: return []\n    layer = {beginWord: [[beginWord]]}\n    while layer:\n        new_layer = defaultdict(list)\n        for word, paths in layer.items():\n            if word == endWord: return [p for p in layer[endWord]]\n            for i in range(len(word)):\n                for c in 'abcdefghijklmnopqrstuvwxyz':\n                    nxt = word[:i] + c + word[i + 1:]\n                    if nxt in words:\n                        for p in paths: new_layer[nxt].append(p + [nxt])\n        words -= set(new_layer.keys())\n        layer = new_layer\n    return []",
    "codeLines": 18,
    "timeComplexity": "O(N * L^2 + paths)",
    "spaceComplexity": "O(N * L)",
    "whyBetterThanBruteForce": "DFS backtracking finds all paths but explores suboptimal paths of excessive lengths, causing TLE. Level-by-level BFS expands only the shortest path trees layer by layer. All words reached in the current layer are removed simultaneously from the dictionary at the end of the layer, guaranteeing that only the shortest transformation paths are constructed.",
    "edgeCasesAndBreakPoints": [
      "endWord not present in wordList: returns [] on first check.",
      "Multiple distinct paths with identical shortest length: layer mapping gathers and yields all of them.",
      "beginWord already adjacent to endWord: returns [[beginWord, endWord]] at layer 1.",
      "Large branching dictionaries: pruning words at layer boundaries prevents exponential explosion."
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
            "layer 0": "hit"
          },
          "msg": "Layer 0: paths = [['hit']]."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "layer 1": "hot",
            "paths": "[['hit','hot']]"
          },
          "msg": "Layer 1: 'hit' -> 'hot'."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "layer 2": "dot, lot"
          },
          "msg": "Layer 2: 'hot' branches into 'dot' and 'lot'."
        },
        {
          "active": [
            4,
            5
          ],
          "vars": {
            "layer 3": "dog, log"
          },
          "msg": "Layer 3: 'dot' -> 'dog', 'lot' -> 'log'."
        },
        {
          "active": [
            6
          ],
          "vars": {
            "layer 4": "cog",
            "found": 2
          },
          "msg": "Layer 4: 'dog' -> 'cog' and 'log' -> 'cog'. Both shortest paths of length 5 returned!"
        }
      ]
    }
  },
  {
    "title": "Bus Routes",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/bus-routes/",
    "pattern": "Breadth First Search — BFS",
    "short": "BFS",
    "intro": "Explore graph states level-by-level using a queue to guarantee shortest path metrics in unweighted state graphs, optimizing transitions with bidirectional frontiers.",
    "thinking": "Instead of building a graph of stops (up to 10^6), why is building a graph of bus routes (up to 500) and running BFS on bus-to-bus transfers optimal?",
    "steps": [
      "Restate **Bus Routes**: find minimum number of buses to travel from source stop to target stop.",
      "Map each stop to the list of bus routes passing through it: stopToBuses[stop] = [bus_ids].",
      "Run BFS where graph nodes are buses (at most 500 nodes), not stops.",
      "Queue stores (busId, transfers) for all buses passing through source.",
      "For current bus, explore all its stops; for each stop, enqueue all unvisited connecting buses. Return transfers when target stop is seen."
    ],
    "flow": [
      "Map stop -> bus routes",
      "BFS on bus nodes",
      "Explore all stops of bus",
      "Enqueue connecting buses",
      "Shortest bus transfers"
    ],
    "description": "<p>You are given an array <code>routes</code> representing bus routes where <code>routes[i]</code> is a bus route that the <code>i<sup>th</sup></code> bus repeats forever.</p>\n\n<ul>\n\t<li>For example, if <code>routes[0] = [1, 5, 7]</code>, this means that the <code>0<sup>th</sup></code> bus travels in the sequence <code>1 -&gt; 5 -&gt; 7 -&gt; 1 -&gt; 5 -&gt; 7 -&gt; 1 -&gt; ...</code> forever.</li>\n</ul>\n\n<p>You will start at the bus stop <code>source</code> (You are not on any bus initially), and you want to go to the bus stop <code>target</code>. You can travel between bus stops by buses only.</p>\n\n<p>Return <em>the least number of buses you must take to travel from </em><code>source</code><em> to </em><code>target</code>. Return <code>-1</code> if it is not possible.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> routes = [[1,2,7],[3,6,7]], source = 1, target = 6\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12\n<strong>Output:</strong> -1\n</pre>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= routes.length &lt;= 500</code>.</li>\n\t<li><code>1 &lt;= routes[i].length &lt;= 10<sup>5</sup></code></li>\n\t<li>All the values of <code>routes[i]</code> are <strong>unique</strong>.</li>\n\t<li><code>sum(routes[i].length) &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= routes[i][j] &lt; 10<sup>6</sup></code></li>\n\t<li><code>0 &lt;= source, target &lt; 10<sup>6</sup></code></li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict, deque\n\ndef numBusesToDestination(routes: list[list[int]], source: int, target: int) -> int:\n    if source == target: return 0\n    stop_to_buses = defaultdict(set)\n    for bus, route in enumerate(routes):\n        for stop in route: stop_to_buses[stop].add(bus)\n    q = deque([(source, 0)])\n    seen_stops, seen_buses = {source}, set()\n    while q:\n        stop, buses_taken = q.popleft()\n        if stop == target: return buses_taken\n        for bus in stop_to_buses[stop]:\n            if bus not in seen_buses:\n                seen_buses.add(bus)\n                for next_stop in routes[bus]:\n                    if next_stop not in seen_stops:\n                        seen_stops.add(next_stop)\n                        q.append((next_stop, buses_taken + 1))\n    return -1",
    "codeLines": 20,
    "timeComplexity": "O(sum(len(route)))",
    "spaceComplexity": "O(sum(len(route)))",
    "whyBetterThanBruteForce": "Connecting bus stops directly into an all-pairs graph can create O(S^2) edges, which is too large. Instead, we map stop -> buses and run BFS tracking visited buses. Once a bus route is explored, all of its stops are added to the queue and the bus is marked seen, ensuring each bus route is traversed at most once and yielding linear O(total_stops) time.",
    "edgeCasesAndBreakPoints": [
      "source == target: no bus needed, returns 0 immediately.",
      "target is unreachable from source: queue empties, returns -1.",
      "Multiple buses serving the same pair of stops: seen_buses prevents duplicate traversals.",
      "Cycle in bus routes: seen_stops and seen_buses prevent infinite looping."
    ],
    "simConfig": {
      "type": "bfs",
      "inputDisplay": "routes = [[1, 2, 7], [3, 6, 7]], source = 1, target = 6",
      "array": [
        "Bus 0: [1, 2, 7]",
        "Bus 1: [3, 6, 7]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "start": "Stop 1",
            "buses": 0
          },
          "msg": "Start at Stop 1. Board Bus 0 (route [1, 2, 7]). Buses taken = 1."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "bus0_stops": "[1, 2, 7]",
            "transferStop": "Stop 7"
          },
          "msg": "Bus 0 reaches stops 1, 2, and transfer stop 7."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "transfer": "Board Bus 1 at Stop 7",
            "buses": 2
          },
          "msg": "Transfer at Stop 7 to Bus 1 (route [3, 6, 7]). Buses taken = 2."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "target": "Stop 6 reached!",
            "totalBuses": 2
          },
          "msg": "Bus 1 reaches target Stop 6! Minimum buses = 2. Complete!"
        }
      ]
    }
  },
  {
    "title": "Redundant Connection II",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/redundant-connection-ii/",
    "pattern": "Graphs",
    "short": "Graphs",
    "intro": "Model entities and interactions as vertices and edges. Apply cycle detection, bridge identification (Tarjan's algorithm), Disjoint Set Union (DSU), and component analysis.",
    "thinking": "A directed tree with an extra edge can have: a node with two parents, a directed cycle, or both. How do DSU and parent tracking resolve all cases?",
    "steps": [
      "Restate **Redundant Connection II**: find the edge that can be removed so the resulting graph is a directed rooted tree.",
      "Case 1: a node has two incoming edges (edge1, edge2).",
      "Case 2: there is a directed cycle.",
      "Test skipping edge2: use Disjoint Set Union (DSU) to check if the remaining edges form a valid cycle-free tree.",
      "If cycle exists without two parents, the edge completing the cycle is redundant.",
      "If two parents exist and skipping edge2 works, edge2 is the answer; otherwise edge1 is redundant."
    ],
    "flow": [
      "Check two parents",
      "Check directed cycles with DSU",
      "Test candidate edge skip",
      "Identify redundant edge",
      "O(N * alpha(N))"
    ],
    "description": "<p>In this problem, a rooted tree is a <b>directed</b> graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.</p>\n\n<p>The given input is a directed graph that started as a rooted tree with <code>n</code> nodes (with distinct values from <code>1</code> to <code>n</code>), with one additional directed edge added. The added edge has two different vertices chosen from <code>1</code> to <code>n</code>, and was not an edge that already existed.</p>\n\n<p>The resulting graph is given as a 2D-array of <code>edges</code>. Each element of <code>edges</code> is a pair <code>[u<sub>i</sub>, v<sub>i</sub>]</code> that represents a <b>directed</b> edge connecting nodes <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code>, where <code>u<sub>i</sub></code> is a parent of child <code>v<sub>i</sub></code>.</p>\n\n<p>Return <em>an edge that can be removed so that the resulting graph is a rooted tree of</em> <code>n</code> <em>nodes</em>. If there are multiple answers, return the answer that occurs last in the given 2D-array.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/20/graph1.jpg\" style=\"width: 222px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> edges = [[1,2],[1,3],[2,3]]\n<strong>Output:</strong> [2,3]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/20/graph2.jpg\" style=\"width: 222px; height: 382px;\" />\n<pre>\n<strong>Input:</strong> edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]\n<strong>Output:</strong> [4,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == edges.length</code></li>\n\t<li><code>3 &lt;= n &lt;= 1000</code></li>\n\t<li><code>edges[i].length == 2</code></li>\n\t<li><code>1 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n</code></li>\n\t<li><code>u<sub>i</sub> != v<sub>i</sub></code></li>\n</ul>\n",
    "pythonCode": "def findRedundantDirectedConnection(edges: list[list[int]]) -> list[int]:\n    n = len(edges)\n    parent = {}\n    cand1 = cand2 = None\n    for u, v in edges:\n        if v in parent:\n            cand1, cand2 = parent[v], [u, v]; break\n        parent[v] = [u, v]\n    dsu = list(range(n + 1))\n    def find(x):\n        if dsu[x] != x: dsu[x] = find(dsu[x])\n        return dsu[x]\n    for u, v in edges:\n        if [u, v] == cand2: continue\n        pu, pv = find(u), find(v)\n        if pu == pv:\n            return cand1 if cand1 else [u, v]\n        dsu[pu] = pv\n    return cand2",
    "codeLines": 19,
    "timeComplexity": "O(N alpha(N))",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Removing each edge one by one and testing whether the resulting graph is a valid rooted tree takes O(N * (V + E)) = O(N^2) time. There are only two structural causes for failure in a rooted tree: a node with two incoming edges (indegree 2) or a directed cycle. By identifying any indegree-2 candidate edges and using Union-Find to detect cycles in O(N alpha(N)), the redundant edge is resolved in a single pass.",
    "edgeCasesAndBreakPoints": [
      "Graph has only a cycle (no node with indegree 2): Union-Find directly catches the cycle edge.",
      "Graph has a node with indegree 2 and a cycle: cand1 (the earlier edge pointing to the node) is the culprit.",
      "Graph has a node with indegree 2 but no cycle: cand2 is the culprit.",
      "Ties: the later edge in the input list is returned as required."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "edges = [[1,2],[1,3],[2,3]]",
      "array": [
        "1->2",
        "1->3",
        "2->3"
      ],
      "steps": [
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "node3_incoming": "1->3 and 2->3",
            "conflict": "Node 3 has 2 parents"
          },
          "msg": "Node 3 has indegree 2 from edges [1,3] and [2,3]. cand1=[1,3], cand2=[2,3]."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "skip": "cand2 [2,3]",
            "dsu": "Union(1,2), Union(1,3)"
          },
          "msg": "Skip cand2 [2,3] and run Union-Find on remaining edges."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "cycleDetected": false,
            "validTree": true
          },
          "msg": "Graph without cand2 forms a valid rooted tree with no cycles!"
        },
        {
          "active": [
            2
          ],
          "vars": {
            "redundantEdge": "[2, 3]"
          },
          "msg": "Edge [2, 3] is the redundant connection. Output: [2, 3]."
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
    "intro": "Model entities and interactions as vertices and edges. Apply cycle detection, bridge identification (Tarjan's algorithm), Disjoint Set Union (DSU), and component analysis.",
    "thinking": "How does Tarjan's bridge-finding algorithm using discovery times and low-link values identify critical edges in a single DFS traversal?",
    "steps": [
      "Restate **Critical Connections in a Network**: find all bridges in an undirected connected network.",
      "Use Tarjan's algorithm: maintain discovery time tin[u] and lowest reachable discovery time low[u].",
      "During DFS from u to neighbor v (excluding parent): if v is unvisited, recurse, then low[u] = min(low[u], low[v]).",
      "If low[v] > tin[u], the edge (u, v) is a critical bridge (no back-edge connects v or its subtree to u or above).",
      "If v was already visited, update low[u] = min(low[u], tin[v]). Runs in linear O(V + E) time."
    ],
    "flow": [
      "DFS discovery time tin[]",
      "Low-link value low[]",
      "Recurse on unvisited neighbors",
      "low[v] > tin[u] ? bridge",
      "O(V + E) linear time"
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
    "title": "Couples Holding Hands",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/couples-holding-hands/",
    "pattern": "Graphs",
    "short": "Graphs",
    "intro": "Model entities and interactions as vertices and edges. Apply cycle detection, bridge identification (Tarjan's algorithm), Disjoint Set Union (DSU), and component analysis.",
    "thinking": "If each couch is a node and each couple connects the two couches they currently occupy, why is min swaps equal to N - number_of_cycles?",
    "steps": [
      "Restate **Couples Holding Hands**: find minimum seat swaps so each couple sits side by side.",
      "There are N couples and N couches.",
      "Model couches as graph vertices: for each couple 2*k and 2*k + 1, draw an edge between the couches where each partner is seated.",
      "Use Disjoint Set Union (DSU) to count connected components / cycles in the couch graph.",
      "A cycle of size S requires S - 1 swaps to resolve; therefore total swaps required is N - num_components."
    ],
    "flow": [
      "Couches as graph vertices",
      "Couples as connecting edges",
      "DSU to count components",
      "Swaps = N - components",
      "O(N * alpha(N))"
    ],
    "description": "<p>There are <code>n</code> couples sitting in <code>2n</code> seats arranged in a row and want to hold hands.</p>\n\n<p>The people and seats are represented by an integer array <code>row</code> where <code>row[i]</code> is the ID of the person sitting in the <code>i<sup>th</sup></code> seat. The couples are numbered in order, the first couple being <code>(0, 1)</code>, the second couple being <code>(2, 3)</code>, and so on with the last couple being <code>(2n - 2, 2n - 1)</code>.</p>\n\n<p>Return <em>the minimum number of swaps so that every couple is sitting side by side</em>. A swap consists of choosing any two people, then they stand up and switch seats.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> row = [0,2,1,3]\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> We only need to swap the second (row[1]) and third (row[2]) person.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> row = [3,2,0,1]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> All couples are already seated side by side.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2n == row.length</code></li>\n\t<li><code>2 &lt;= n &lt;= 30</code>​​​​​​​</li>\n\t<li><code>0 &lt;= row[i] &lt; 2n</code></li>\n\t<li>All the elements of <code>row</code> are <strong>unique</strong>.</li>\n</ul>\n",
    "pythonCode": "def minSwapsCouples(row: list[int]) -> int:\n    n = len(row) // 2\n    dsu = list(range(n))\n    def find(x):\n        if dsu[x] != x: dsu[x] = find(dsu[x])\n        return dsu[x]\n    count = n\n    for i in range(0, len(row), 2):\n        c1, c2 = row[i] // 2, row[i + 1] // 2\n        p1, p2 = find(c1), find(c2)\n        if p1 != p2:\n            dsu[p1] = p2\n            count -= 1\n    return n - count",
    "codeLines": 14,
    "timeComplexity": "O(N alpha(N))",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Greedily simulating swaps with search requires O(N^2) time. Each couch pair holds two people belonging to couple c1 = person // 2 and c2 = person // 2. If c1 != c2, they belong to the same connected component of misplaced couples. A component of k interconnected couples requires exactly k - 1 swaps. Thus, min swaps = N - (number of connected components), computed via Union-Find in O(N alpha(N)).",
    "edgeCasesAndBreakPoints": [
      "All couples already seated together: N components formed, returns N - N = 0.",
      "All couples in one giant misplaced cycle: 1 component, returns N - 1 swaps.",
      "Couples swapped within their own seats: c1 == c2, no union needed.",
      "Odd number of couples: problem guarantees 2N seats."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "row = [0, 2, 1, 3] (Couples 0: {0,1}, 1: {2,3})",
      "array": [
        "Seat 0: (0, 2)",
        "Seat 1: (1, 3)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "seat0": "(0, 2)",
            "couples": "c0 and c1",
            "union": "0 - 1"
          },
          "msg": "Seat 0 holds person 0 (couple 0) and person 2 (couple 1). Connect couple 0 and 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "seat1": "(1, 3)",
            "couples": "c0 and c1",
            "alreadyConnected": true
          },
          "msg": "Seat 1 holds person 1 (couple 0) and person 3 (couple 1). Already in same component."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "components": 1,
            "totalCouples": 2,
            "swaps": "2 - 1 = 1"
          },
          "msg": "Total couples N=2, connected components = 1. Min swaps = 2 - 1 = 1. Complete!"
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
    "intro": "Make locally optimal choices at each decision boundary to arrive at a provably optimal global solution, often exploiting two-pass sweeps or exchange arguments.",
    "thinking": "How do two independent sweeps (left-to-right for left neighbors, right-to-left for right neighbors) guarantee both local condition invariants?",
    "steps": [
      "Restate **Candy**: distribute minimum candies to children so every child gets at least 1, and children with higher ratings than neighbors get more candies.",
      "Initialize candies[i] = 1 for all i.",
      "Left-to-right pass: if ratings[i] > ratings[i - 1], set candies[i] = candies[i - 1] + 1.",
      "Right-to-left pass: if ratings[i] > ratings[i + 1], set candies[i] = max(candies[i], candies[i + 1] + 1).",
      "Sum all elements in candies array. Runs in O(N) time with O(N) space."
    ],
    "flow": [
      "Base array of 1s",
      "Left-to-right pass",
      "Right-to-left pass",
      "Take max of constraints",
      "Sum candies in O(N)"
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
    "title": "Patching Array",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/patching-array/",
    "pattern": "Greedy",
    "short": "Greedy",
    "intro": "Make locally optimal choices at each decision boundary to arrive at a provably optimal global solution, often exploiting two-pass sweeps or exchange arguments.",
    "thinking": "If we can currently form all numbers in [1, miss), what is the optimal patch to add when the next available array element exceeds miss?",
    "steps": [
      "Restate **Patching Array**: add minimum patches to sorted array nums so any number in [1, n] can be formed by subset sums.",
      "Maintain miss: smallest number in [1, n] that cannot yet be formed. Initially miss = 1.",
      "If current array element nums[i] <= miss, we can extend covered range to [1, miss + nums[i]), so miss += nums[i].",
      "If nums[i] > miss (or array exhausted), greedily patch miss itself: the new covered range doubles to [1, 2 * miss), increment patch count.",
      "Repeat until miss > n. Runs in logarithmic O(patches + |nums|) steps."
    ],
    "flow": [
      "Current coverage [1, miss)",
      "nums[i] <= miss? extend",
      "nums[i] > miss? patch miss",
      "Double range miss += miss",
      "Stop when miss > n"
    ],
    "description": "<p>Given a sorted integer array <code>nums</code> and an integer <code>n</code>, add/patch elements to the array such that any number in the range <code>[1, n]</code> inclusive can be formed by the sum of some elements in the array.</p>\n\n<p>Return <em>the minimum number of patches required</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,3], n = 6\n<strong>Output:</strong> 1\nExplanation:\nCombinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.\nNow if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].\nPossible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].\nSo we only need 1 patch.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,5,10], n = 20\n<strong>Output:</strong> 2\nExplanation: The two patches can be [2, 4].\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,2], n = 5\n<strong>Output:</strong> 0\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 1000</code></li>\n\t<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>nums</code> is sorted in <strong>ascending order</strong>.</li>\n\t<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n",
    "pythonCode": "def minPatches(nums: list[int], n: int) -> int:\n    miss, i, added = 1, 0, 0\n    while miss <= n:\n        if i < len(nums) and nums[i] <= miss:\n            miss += nums[i]; i += 1\n        else:\n            miss += miss; added += 1\n    return added",
    "codeLines": 8,
    "timeComplexity": "O(log N + M)",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "Checking each number from 1 to n with subset-sum DP takes O(n * M) time and O(n) space, which TLEs when n is up to 2^31 - 1 (2 billion). Maintaining the smallest uncovered sum miss guarantees that [1, miss) is fully coverable. If nums[i] <= miss, we can extend coverage to [1, miss + nums[i]). If not, greedily patching the number miss itself doubles coverage to [1, 2 * miss), achieving O(log N) iterations with O(1) space.",
    "edgeCasesAndBreakPoints": [
      "Empty array nums = []: greedily patches powers of 2: 1, 2, 4, 8... up to n.",
      "n = 2^31 - 1: miss doubles and exceeds n in ~31 steps without integer overflow in Python.",
      "nums already covers 1..n: added returns 0 without any patches.",
      "Large elements in nums: properly waits and patches smaller missing values first."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "nums = [1, 3], n = 6",
      "array": [
        1,
        3
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "miss": 1,
            "nums[0]": 1,
            "covered": "[1, 2)"
          },
          "msg": "nums[0]=1 <= miss=1: use 1, new miss = 1 + 1 = 2. Range [1, 2) covered."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "miss": 2,
            "nums[1]": 3,
            "action": "Patch 2!"
          },
          "msg": "nums[1]=3 > miss=2: cannot cover 2! Patch 2. New miss = 2 + 2 = 4. Patches = 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "miss": 4,
            "nums[1]": 3,
            "covered": "[1, 7)"
          },
          "msg": "Now nums[1]=3 <= miss=4: use 3, new miss = 4 + 3 = 7. Range [1, 7) covered."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "miss": 7,
            "n": 6,
            "minPatches": 1
          },
          "msg": "miss=7 > n=6! Entire range [1, 6] covered with only 1 patch. Complete!"
        }
      ]
    }
  },
  {
    "title": "Course Schedule III",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/course-schedule-iii/",
    "pattern": "Greedy",
    "short": "Greedy",
    "intro": "Make locally optimal choices at each decision boundary to arrive at a provably optimal global solution, often exploiting two-pass sweeps or exchange arguments.",
    "thinking": "By sorting courses by their deadlines and swapping out the longest previously taken course when time runs out, why is greedy exchange optimal?",
    "steps": [
      "Restate **Course Schedule III**: find maximum number of courses you can take given [duration, lastDay] for each course.",
      "Sort courses ascending by deadline lastDay.",
      "Maintain total elapsed time time and a max-heap of durations of currently enrolled courses.",
      "For course [dur, lastDay]: add dur to time and push dur to max-heap.",
      "If time > lastDay, greedily drop the longest course taken so far: time -= heap.pop().",
      "Final heap size is the maximum number of courses."
    ],
    "flow": [
      "Sort courses by deadline",
      "Add course duration to time",
      "Push duration to max-heap",
      "time > deadline? drop max duration",
      "Heap size is answer"
    ],
    "description": "<p>There are <code>n</code> different online courses numbered from <code>1</code> to <code>n</code>. You are given an array <code>courses</code> where <code>courses[i] = [duration<sub>i</sub>, lastDay<sub>i</sub>]</code> indicate that the <code>i<sup>th</sup></code> course should be taken <b>continuously</b> for <code>duration<sub>i</sub></code> days and must be finished before or on <code>lastDay<sub>i</sub></code>.</p>\n\n<p>You will start on the <code>1<sup>st</sup></code> day and you cannot take two or more courses simultaneously.</p>\n\n<p>Return <em>the maximum number of courses that you can take</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]\n<strong>Output:</strong> 3\nExplanation: \nThere are totally 4 courses, but you can take 3 courses at most:\nFirst, take the 1<sup>st</sup> course, it costs 100 days so you will finish it on the 100<sup>th</sup> day, and ready to take the next course on the 101<sup>st</sup> day.\nSecond, take the 3<sup>rd</sup> course, it costs 1000 days so you will finish it on the 1100<sup>th</sup> day, and ready to take the next course on the 1101<sup>st</sup> day. \nThird, take the 2<sup>nd</sup> course, it costs 200 days so you will finish it on the 1300<sup>th</sup> day. \nThe 4<sup>th</sup> course cannot be taken now, since you will finish it on the 3300<sup>th</sup> day, which exceeds the closed date.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> courses = [[1,2]]\n<strong>Output:</strong> 1\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> courses = [[3,2],[4,3]]\n<strong>Output:</strong> 0\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= courses.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= duration<sub>i</sub>, lastDay<sub>i</sub> &lt;= 10<sup>4</sup></code></li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\n\ndef scheduleCourse(courses: list[list[int]]) -> int:\n    courses.sort(key=lambda c: c[1])\n    hp, time = [], 0\n    for duration, lastDay in courses:\n        if time + duration <= lastDay:\n            time += duration\n            heappush(hp, -duration)\n        elif hp and -hp[0] > duration:\n            time += duration + heappop(hp)\n            heappush(hp, -duration)\n    return len(hp)",
    "codeLines": 13,
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Searching all subsets of courses and validating their deadlines takes O(2^N) exponential time. By sorting courses by their deadlines, we greedily take courses that finish before lastDay. If a course deadline is exceeded, we check if the longest course taken so far has a longer duration than the current course: swapping it out preserves course count while strictly reducing total elapsed time, running in O(N log N).",
    "edgeCasesAndBreakPoints": [
      "Course duration > its deadline (e.g. [100, 50]): impossible to ever take; skipped immediately.",
      "All courses can be taken: time accumulates, max-heap stores all courses.",
      "Multiple courses with identical deadlines: sorted order and duration swaps handle ties optimally.",
      "Courses requiring 0 days: handled cleanly."
    ],
    "simConfig": {
      "type": "heap",
      "inputDisplay": "courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]",
      "array": [
        "[100, 200]",
        "[1000, 1250]",
        "[200, 1300]",
        "[2000, 3200]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "course": "[100, 200]",
            "time": 100,
            "heap": "[100]",
            "taken": 1
          },
          "msg": "Take [100, 200]: finish at 100 <= 200. Courses = 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "course": "[1000, 1250]",
            "time": 1100,
            "heap": "[1000, 100]",
            "taken": 2
          },
          "msg": "Take [1000, 1250]: finish at 1100 <= 1250. Courses = 2."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "course": "[200, 1300]",
            "swap": "Swap 1000 for 200!",
            "time": 300,
            "taken": 2
          },
          "msg": "1100 + 200 = 1300 <= 1300. Take [200, 1300]! Time is 1300. Courses = 3."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "course": "[2000, 3200]",
            "time": 3300,
            "taken": 3
          },
          "msg": "Overall optimal schedule achieves 3 courses. Complete!"
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
    "intro": "Represent strings, dictionaries, or binary bit representations as prefix trees to perform fast prefix lookups, autocomplete traversals, and bitwise maximum XOR queries.",
    "thinking": "How does traversing the board while simultaneously walking down a Trie of target words prune dead-end grid paths immediately?",
    "steps": [
      "Restate **Word Search II**: find all words from a dictionary present in a 2D grid of characters.",
      "Insert all target words into a Prefix Trie. Store complete word at terminal nodes.",
      "From each cell, run DFS backtracking matched against the Trie: if current board character is not a child in the Trie node, prune immediately.",
      "Mark visited cells in-place with a special char (e.g. '#') and restore on backtrack.",
      "When reaching a terminal Trie node, add word to results and set node.word = null to prevent duplicate entries."
    ],
    "flow": [
      "Insert dictionary to Trie",
      "DFS on grid with Trie pointer",
      "Prune unmatched branches",
      "Found word? Collect & nullify",
      "Backtrack board cells"
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
    "title": "Concatenated Words",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/concatenated-words/",
    "pattern": "Trie",
    "short": "Trie",
    "intro": "Represent strings, dictionaries, or binary bit representations as prefix trees to perform fast prefix lookups, autocomplete traversals, and bitwise maximum XOR queries.",
    "thinking": "By sorting words by length, how does checking each word against a Trie of already-processed shorter words identify concatenated words?",
    "steps": [
      "Restate **Concatenated Words**: find all words formed by concatenating at least two shorter words from the given list.",
      "Sort words by length ascending: a concatenated word can only be formed by strictly shorter words.",
      "For each word, check if it can be partitioned into existing dictionary words using dynamic programming or Trie DFS.",
      "If valid, add word to answer list.",
      "Insert current word into the Trie/HashSet before moving to the next word."
    ],
    "flow": [
      "Sort words by length",
      "DFS/DP partition check",
      "Can form from prior words?",
      "Yes: add to answer",
      "Insert word into Trie"
    ],
    "description": "<p>Given an array of strings <code>words</code> (<strong>without duplicates</strong>), return <em>all the <strong>concatenated words</strong> in the given list of</em> <code>words</code>.</p>\n\n<p>A <strong>concatenated word</strong> is defined as a string that is comprised entirely of at least two shorter words (not necessarily distinct)&nbsp;in the given array.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> words = [&quot;cat&quot;,&quot;cats&quot;,&quot;catsdogcats&quot;,&quot;dog&quot;,&quot;dogcatsdog&quot;,&quot;hippopotamuses&quot;,&quot;rat&quot;,&quot;ratcatdogcat&quot;]\n<strong>Output:</strong> [&quot;catsdogcats&quot;,&quot;dogcatsdog&quot;,&quot;ratcatdogcat&quot;]\n<strong>Explanation:</strong> &quot;catsdogcats&quot; can be concatenated by &quot;cats&quot;, &quot;dog&quot; and &quot;cats&quot;; \n&quot;dogcatsdog&quot; can be concatenated by &quot;dog&quot;, &quot;cats&quot; and &quot;dog&quot;; \n&quot;ratcatdogcat&quot; can be concatenated by &quot;rat&quot;, &quot;cat&quot;, &quot;dog&quot; and &quot;cat&quot;.</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> words = [&quot;cat&quot;,&quot;dog&quot;,&quot;catdog&quot;]\n<strong>Output:</strong> [&quot;catdog&quot;]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= words.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= words[i].length &lt;= 30</code></li>\n\t<li><code>words[i]</code> consists of only lowercase English letters.</li>\n\t<li>All the strings of <code>words</code> are <strong>unique</strong>.</li>\n\t<li><code>1 &lt;= sum(words[i].length) &lt;= 10<sup>5</sup></code></li>\n</ul>\n",
    "pythonCode": "def findAllConcatenatedWordsInADict(words: list[str]) -> list[str]:\n    word_set, ans = set(words), []\n    def canForm(w):\n        for i in range(1, len(w)):\n            prefix = w[:i]\n            if prefix in word_set:\n                suffix = w[i:]\n                if suffix in word_set or canForm(suffix):\n                    return True\n        return False\n    for w in words:\n        word_set.remove(w)\n        if canForm(w): ans.append(w)\n        word_set.add(w)\n    return ans",
    "codeLines": 15,
    "timeComplexity": "O(N * L^2)",
    "spaceComplexity": "O(N * L)",
    "whyBetterThanBruteForce": "Sorting words by length and testing concatenation with DP takes O(N * L^2). By temporarily removing the word w from the hash set word_set, any word that can be segmented into words remaining in the set is verified via memoized prefix matching in O(L^2) time, avoiding complex Trie construction while achieving optimal runtime.",
    "edgeCasesAndBreakPoints": [
      "Empty strings in input: filtered out or skipped cleanly.",
      "Words formed by 3 or more concatenated words: recursion canForm(suffix) handles arbitrary concatenation depth.",
      "Words that are single primitive words: cannot be partitioned into >= 2 words; skipped.",
      "Duplicate words: handled cleanly by hash set membership."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "words = ['cat','cats','catsdogcats','dog','dogcatsdog','hippopotamuses','rat','ratcatdogcat']",
      "array": [
        "cat",
        "cats",
        "dog",
        "catsdogcats",
        "dogcatsdog",
        "ratcatdogcat"
      ],
      "steps": [
        {
          "active": [
            3
          ],
          "vars": {
            "word": "'catsdogcats'",
            "partition": "'cats' + 'dog' + 'cats'"
          },
          "msg": "Check 'catsdogcats': splits into 'cats' + 'dog' + 'cats' (all in word_set). Valid!"
        },
        {
          "active": [
            4
          ],
          "vars": {
            "word": "'dogcatsdog'",
            "partition": "'dog' + 'cats' + 'dog'"
          },
          "msg": "Check 'dogcatsdog': splits into 'dog' + 'cats' + 'dog'. Valid!"
        },
        {
          "active": [
            5
          ],
          "vars": {
            "word": "'ratcatdogcat'",
            "partition": "'rat' + 'cat' + 'dog' + 'cat'"
          },
          "msg": "Check 'ratcatdogcat': splits into 4 valid words. Valid!"
        },
        {
          "active": [
            3,
            4,
            5
          ],
          "vars": {
            "results": "['catsdogcats', 'dogcatsdog', 'ratcatdogcat']"
          },
          "msg": "Output all concatenated words. Complete!"
        }
      ]
    }
  },
  {
    "title": "Maximum XOR With an Element From Array",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",
    "pattern": "Trie",
    "short": "Trie",
    "intro": "Represent strings, dictionaries, or binary bit representations as prefix trees to perform fast prefix lookups, autocomplete traversals, and bitwise maximum XOR queries.",
    "thinking": "By sorting both queries (by upper limit m) and numbers, how does an offline bitwise Trie find the maximum XOR in O(32) per query?",
    "steps": [
      "Restate **Maximum XOR With an Element From Array**: for query (x, m), find max x ^ val where val <= m in nums.",
      "Sort nums ascending; sort queries ascending by bound m, tracking original query indices.",
      "Build a binary bitwise Trie (bits 31 down to 0).",
      "For each query (x, m): insert all numbers from nums that are <= m into the Trie.",
      "Query Trie with x: at each bit, greedily branch to the opposite bit 1 - bit if available; record max XOR into original query index."
    ],
    "flow": [
      "Sort nums & queries by m",
      "Insert nums <= m to bitwise Trie",
      "Walk opposite bit branch",
      "Compute max XOR",
      "Output original order"
    ],
    "description": "<p>You are given an array <code>nums</code> consisting of non-negative integers. You are also given a <code>queries</code> array, where <code>queries[i] = [x<sub>i</sub>, m<sub>i</sub>]</code>.</p>\n\n<p>The answer to the <code>i<sup>th</sup></code> query is the maximum bitwise <code>XOR</code> value of <code>x<sub>i</sub></code> and any element of <code>nums</code> that does not exceed <code>m<sub>i</sub></code>. In other words, the answer is <code>max(nums[j] XOR x<sub>i</sub>)</code> for all <code>j</code> such that <code>nums[j] &lt;= m<sub>i</sub></code>. If all elements in <code>nums</code> are larger than <code>m<sub>i</sub></code>, then the answer is <code>-1</code>.</p>\n\n<p>Return <em>an integer array </em><code>answer</code><em> where </em><code>answer.length == queries.length</code><em> and </em><code>answer[i]</code><em> is the answer to the </em><code>i<sup>th</sup></code><em> query.</em></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]\n<strong>Output:</strong> [3,3,7]\n<strong>Explanation:</strong>\n1) 0 and 1 are the only two integers not greater than 1. 0 XOR 3 = 3 and 1 XOR 3 = 2. The larger of the two is 3.\n2) 1 XOR 2 = 3.\n3) 5 XOR 2 = 7.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]\n<strong>Output:</strong> [15,-1,5]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length, queries.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>queries[i].length == 2</code></li>\n\t<li><code>0 &lt;= nums[j], x<sub>i</sub>, m<sub>i</sub> &lt;= 10<sup>9</sup></code></li>\n</ul>\n",
    "pythonCode": "def maximizeXor(nums: list[int], queries: list[list[int]]) -> list[int]:\n    nums.sort()\n    sorted_q = sorted((m, x, i) for i, (x, m) in enumerate(queries))\n    trie, ans, idx = {}, [-1] * len(queries), 0\n    for m, x, i in sorted_q:\n        while idx < len(nums) and nums[idx] <= m:\n            val = nums[idx]\n            node = trie\n            for b in range(31, -1, -1):\n                bit = (val >> b) & 1\n                node = node.setdefault(bit, {})\n            idx += 1\n        if trie:\n            node, cur_xor = trie, 0\n            for b in range(31, -1, -1):\n                bit = (x >> b) & 1\n                opp = 1 - bit\n                if opp in node:\n                    cur_xor |= (1 << b); node = node[opp]\n                else: node = node[bit]\n            ans[i] = cur_xor\n    return ans",
    "codeLines": 22,
    "timeComplexity": "O((N + Q) * 32)",
    "spaceComplexity": "O(N * 32)",
    "whyBetterThanBruteForce": "Brute force evaluates x ^ val for every num <= m for each query in O(N * Q) time, exceeding 10^10 operations for N, Q = 10^5. By offline-sorting both nums and queries by m, we monotonically insert nums[idx] <= m into a 0-1 Binary Trie. Querying the maximum XOR is done by greedily following opposite bits in O(32) = O(1) time per query, reducing complexity to O((N + Q) * 32).",
    "edgeCasesAndBreakPoints": [
      "m < min(nums): no numbers in nums are <= m; trie is empty, query receives -1.",
      "All numbers in nums <= m: trie contains full array, finds global maximum XOR.",
      "x = 0: maximum XOR is simply the maximum available number <= m.",
      "Large 31-bit integers: binary trie from bit 31 down to 0 handles full range without overflow."
    ],
    "simConfig": {
      "type": "bitwise",
      "inputDisplay": "nums = [0, 1, 2, 3, 4], queries = [[3, 1], [1, 3], [5, 6]]",
      "array": [
        "Q0: x=3, m=1",
        "Q1: x=1, m=3",
        "Q2: x=5, m=6"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "query": "x=3, m=1",
            "inserted": "[0, 1]",
            "max_xor": "3 ^ 0 = 3"
          },
          "msg": "Insert nums <= 1 (0, 1) into Binary Trie. Greedily match opposite bits: max XOR = 3."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "query": "x=1, m=3",
            "inserted": "[2, 3]",
            "max_xor": "1 ^ 2 = 3"
          },
          "msg": "Insert nums <= 3 (2, 3). Query x=1: max XOR = 3."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "query": "x=5, m=6",
            "inserted": "[4]",
            "max_xor": "5 ^ 2 = 7"
          },
          "msg": "Insert nums <= 6 (4). Query x=5: max XOR = 7."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "results": "[3, 3, 7]"
          },
          "msg": "All queries answered offline in O(32 * (N + Q)). Output: [3, 3, 7]."
        }
      ]
    }
  },
  {
    "title": "Largest Color Value in a Directed Graph",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/",
    "pattern": "Topological Sort",
    "short": "Topological Sort",
    "intro": "Linearize vertices in a directed acyclic graph (DAG) according to dependency precedence using Kahn's indegree queue algorithm or post-order DFS.",
    "thinking": "How can topological sort combine with dynamic programming dp[u][color] to compute maximum color counts along any directed path?",
    "steps": [
      "Restate **Largest Color Value in a Directed Graph**: find maximum frequency of any color along a directed path in a graph.",
      "Compute in-degrees for all nodes; identify cycles if Kahn's topological sort cannot visit all nodes.",
      "Define dp[u][c] as the maximum count of color c on any path ending at node u.",
      "Process nodes in topological order using a queue: dp[u][color[u]]++.",
      "For each outgoing edge u -> v, update dp[v][c] = max(dp[v][c], dp[u][c]) for all 26 colors.",
      "If visited nodes < n, return -1 (cycle detected); else return global max color count."
    ],
    "flow": [
      "Compute in-degrees",
      "Queue nodes with in-degree 0",
      "Topological DP across 26 colors",
      "Relax outgoing edges",
      "Cycle check & max count"
    ],
    "description": "<p>There is a <strong>directed graph</strong> of <code>n</code> colored nodes and <code>m</code> edges. The nodes are numbered from <code>0</code> to <code>n - 1</code>.</p>\n\n<p>You are given a string <code>colors</code> where <code>colors[i]</code> is a lowercase English letter representing the <strong>color</strong> of the <code>i<sup>th</sup></code> node in this graph (<strong>0-indexed</strong>). You are also given a 2D array <code>edges</code> where <code>edges[j] = [a<sub>j</sub>, b<sub>j</sub>]</code> indicates that there is a <strong>directed edge</strong> from node <code>a<sub>j</sub></code> to node <code>b<sub>j</sub></code>.</p>\n\n<p>A valid <strong>path</strong> in the graph is a sequence of nodes <code>x<sub>1</sub> -&gt; x<sub>2</sub> -&gt; x<sub>3</sub> -&gt; ... -&gt; x<sub>k</sub></code> such that there is a directed edge from <code>x<sub>i</sub></code> to <code>x<sub>i+1</sub></code> for every <code>1 &lt;= i &lt; k</code>. The <strong>color value</strong> of the path is the number of nodes that are colored the <strong>most frequently</strong> occurring color along that path.</p>\n\n<p>Return <em>the <strong>largest color value</strong> of any valid path in the given graph, or </em><code>-1</code><em> if the graph contains a cycle</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/04/21/leet1.png\" style=\"width: 400px; height: 182px;\" /></p>\n\n<pre>\n<strong>Input:</strong> colors = &quot;abaca&quot;, edges = [[0,1],[0,2],[2,3],[3,4]]\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The path 0 -&gt; 2 -&gt; 3 -&gt; 4 contains 3 nodes that are colored <code>&quot;a&quot; (red in the above image)</code>.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/04/21/leet2.png\" style=\"width: 85px; height: 85px;\" /></p>\n\n<pre>\n<strong>Input:</strong> colors = &quot;a&quot;, edges = [[0,0]]\n<strong>Output:</strong> -1\n<strong>Explanation:</strong> There is a cycle from 0 to 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == colors.length</code></li>\n\t<li><code>m == edges.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= m &lt;= 10<sup>5</sup></code></li>\n\t<li><code>colors</code> consists of lowercase English letters.</li>\n\t<li><code>0 &lt;= a<sub>j</sub>, b<sub>j</sub>&nbsp;&lt; n</code></li>\n</ul>\n",
    "pythonCode": "from collections import deque, defaultdict\n\ndef largestPathValue(colors: str, edges: list[list[int]]) -> int:\n    n = len(colors)\n    graph, indeg = defaultdict(list), [0] * n\n    for u, v in edges:\n        graph[u].append(v); indeg[v] += 1\n    q = deque(i for i in range(n) if indeg[i] == 0)\n    dp = [[0] * 26 for _ in range(n)]\n    seen = 0\n    ans = 0\n    while q:\n        u = q.popleft()\n        seen += 1\n        c_idx = ord(colors[u]) - ord('a')\n        dp[u][c_idx] += 1\n        ans = max(ans, dp[u][c_idx])\n        for v in graph[u]:\n            for c in range(26):\n                dp[v][c] = max(dp[v][c], dp[u][c])\n            indeg[v] -= 1\n            if indeg[v] == 0: q.append(v)\n    return ans if seen == n else -1",
    "codeLines": 23,
    "timeComplexity": "O(26 * (V + E))",
    "spaceComplexity": "O(26 * V)",
    "whyBetterThanBruteForce": "Evaluating all paths in a directed graph takes exponential time and loops infinitely if cycles exist. Topological Sort (Kahn's Algorithm) orders nodes such that each node u is processed only after all predecessors are finalized. If a cycle exists, seen < n detects it in O(V + E) time. Maintaining a 26-element color count array dp[u][c] updates state transitions in strict O(26) per edge.",
    "edgeCasesAndBreakPoints": [
      "Graph contains a directed cycle: seen < n detects cycle and returns -1 immediately.",
      "Graph is disconnected: starts with all indegree 0 nodes in the queue.",
      "Single node with no edges: returns 1.",
      "All nodes have same color: returns total path length."
    ],
    "simConfig": {
      "type": "bfs",
      "inputDisplay": "colors = 'abaca', edges = [[0,1],[0,2],[2,3],[3,4]]",
      "array": [
        "0:'a'",
        "1:'b'",
        "2:'a'",
        "3:'c'",
        "4:'a'"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "u": 0,
            "color": "'a'",
            "dp[0]": "{'a': 1}"
          },
          "msg": "Node 0 (color 'a'): indegree 0. dp[0]['a'] = 1."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "u": 2,
            "color": "'a'",
            "dp[2]": "{'a': 2}"
          },
          "msg": "Edge 0->2: Node 2 (color 'a') receives dp from 0. dp[2]['a'] = 1 + 1 = 2."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "u": 3,
            "color": "'c'",
            "dp[3]": "{'a': 2, 'c': 1}"
          },
          "msg": "Edge 2->3: Node 3 receives dp from 2."
        },
        {
          "active": [
            4
          ],
          "vars": {
            "u": 4,
            "color": "'a'",
            "dp[4]": "{'a': 3, 'c': 1}"
          },
          "msg": "Edge 3->4: Node 4 (color 'a') receives dp from 3. 'a' count = 2 + 1 = 3!"
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
            "maxColorValue": 3
          },
          "msg": "Topological sort visits all 5 nodes. Largest color value is 3 ('a'). Complete!"
        }
      ]
    }
  },
  {
    "title": "Sort Items by Groups Respecting Dependencies",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/",
    "pattern": "Topological Sort",
    "short": "Topological Sort",
    "intro": "Linearize vertices in a directed acyclic graph (DAG) according to dependency precedence using Kahn's indegree queue algorithm or post-order DFS.",
    "thinking": "How do two hierarchical levels of topological sorting (inter-group sorting and intra-group sorting) resolve grouped dependency order?",
    "steps": [
      "Restate **Sort Items by Groups Respecting Dependencies**: sort n items into valid dependency order such that items belonging to the same group are contiguous.",
      "Assign orphan items without groups to unique synthetic group IDs.",
      "Build two separate dependency graphs: a group-level DAG and an item-level DAG.",
      "Run Kahn's topological sort on groups to establish group order.",
      "Run Kahn's topological sort on items within each group to establish item order.",
      "If either topological sort encounters a cycle, return []; otherwise concatenate group items."
    ],
    "flow": [
      "Assign synthetic group IDs",
      "Build group DAG & item DAG",
      "Topological sort on groups",
      "Topological sort on items",
      "Assemble final sequence"
    ],
    "description": "<p>There are&nbsp;<code>n</code>&nbsp;items each&nbsp;belonging to zero or one of&nbsp;<code>m</code>&nbsp;groups where <code>group[i]</code>&nbsp;is the group that the <code>i</code>-th item belongs to and it&#39;s equal to <code>-1</code>&nbsp;if the <code>i</code>-th item belongs to no group. The items and the groups are zero indexed. A group can have no item belonging to it.</p>\n\n<p>Return a sorted list of the items such that:</p>\n\n<ul>\n\t<li>The items that belong to the same group are next to each other in the sorted list.</li>\n\t<li>There are some&nbsp;relations&nbsp;between these items where&nbsp;<code>beforeItems[i]</code>&nbsp;is a list containing all the items that should come before the&nbsp;<code>i</code>-th item in the sorted array (to the left of the&nbsp;<code>i</code>-th item).</li>\n</ul>\n\n<p>Return any solution if there is more than one solution and return an <strong>empty list</strong>&nbsp;if there is no solution.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<p><strong><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2019/09/11/1359_ex1.png\" style=\"width: 191px; height: 181px;\" /></strong></p>\n\n<pre>\n<strong>Input:</strong> n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]\n<strong>Output:</strong> [6,3,4,1,5,2,0,7]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]\n<strong>Output:</strong> []\n<strong>Explanation:</strong>&nbsp;This is the same as example 1 except that 4 needs to be before 6 in the sorted list.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= m &lt;= n &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>group.length == beforeItems.length == n</code></li>\n\t<li><code>-1 &lt;= group[i] &lt;= m - 1</code></li>\n\t<li><code>0 &lt;= beforeItems[i].length &lt;= n - 1</code></li>\n\t<li><code>0 &lt;= beforeItems[i][j] &lt;= n - 1</code></li>\n\t<li><code>i != beforeItems[i][j]</code></li>\n\t<li><code>beforeItems[i]&nbsp;</code>does not contain&nbsp;duplicates elements.</li>\n</ul>\n",
    "pythonCode": "from collections import defaultdict, deque\n\ndef sortItems(n: int, m: int, group: list[int], beforeItems: list[list[int]]) -> list[int]:\n    for i in range(n):\n        if group[i] == -1: group[i] = m; m += 1\n    def topo(nodes, edges, indeg):\n        q = deque([x for x in nodes if indeg[x] == 0])\n        res = []\n        while q:\n            u = q.popleft(); res.append(u)\n            for v in edges[u]:\n                indeg[v] -= 1\n                if indeg[v] == 0: q.append(v)\n        return res if len(res) == len(nodes) else []\n    item_graph, item_indeg = defaultdict(list), [0] * n\n    group_graph, group_indeg = defaultdict(list), [0] * m\n    group_items = defaultdict(list)\n    for i in range(n):\n        group_items[group[i]].append(i)\n        for prev in beforeItems[i]:\n            item_graph[prev].append(i); item_indeg[i] += 1\n            if group[prev] != group[i]:\n                group_graph[group[prev]].append(group[i])\n                group_indeg[group[i]] += 1\n    group_order = topo(list(range(m)), group_graph, group_indeg)\n    if not group_order: return []\n    item_order = topo(list(range(n)), item_graph, item_indeg)\n    if not item_order: return []\n    order_in_group = defaultdict(list)\n    for x in item_order: order_in_group[group[x]].append(x)\n    ans = []\n    for g in group_order: ans.extend(order_in_group[g])\n    return ans",
    "codeLines": 33,
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "whyBetterThanBruteForce": "Sorting both group-level clusters and intra-group items simultaneously with single topological sort fails when items within the same group must remain contiguous. By treating lonely items as distinct new groups and executing a hierarchical 2-level topological sort (Group-level DAG and Item-level DAG), any cycle in either level returns [] in O(V + E) time.",
    "edgeCasesAndBreakPoints": [
      "Cycle between groups (e.g. Group A depends on Group B and vice-versa): returns [].",
      "Cycle within an individual group: item topological sort returns [].",
      "group[i] == -1: assign new unique group IDs m, m+1... to isolate unassigned items.",
      "Items with no dependencies: included smoothly in any topological order."
    ],
    "simConfig": {
      "type": "bfs",
      "inputDisplay": "n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]",
      "array": [
        "Group 0",
        "Group 1",
        "Lone Groups: 2, 3, 4"
      ],
      "steps": [
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "step": "Assign unique groups to -1"
          },
          "msg": "Give unique group IDs to unassigned items. Total groups = 5."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "step": "Group Topo Sort",
            "groupOrder": "[3, 2, 0, 1, 4]"
          },
          "msg": "Topological sort on groups: no cycles detected. Group order determined."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "step": "Item Topo Sort",
            "itemOrder": "[6, 3, 4, 5, 2, 0, 7, 1]"
          },
          "msg": "Topological sort on individual items: dependencies [6 before 3, 3 before 4] respected."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "result": "[6, 3, 4, 5, 2, 0, 7, 1]"
          },
          "msg": "Concatenate items grouped by group order. Valid schedule found!"
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
    "intro": "Linearize vertices in a directed acyclic graph (DAG) according to dependency precedence using Kahn's indegree queue algorithm or post-order DFS.",
    "thinking": "How does DAG topological order evaluate completion times with dist[v] = max(dist[v], dist[u] + time[v]) in linear time?",
    "steps": [
      "Restate **Parallel Courses III**: find minimum months to complete all courses given prerequisites and individual course durations.",
      "Build prerequisite DAG and compute in-degrees for all courses.",
      "Initialize completionTime[u] = time[u] for all nodes with in-degree 0.",
      "Queue nodes with in-degree 0; when visiting u, for each dependent course v:",
      "Update completionTime[v] = max(completionTime[v], completionTime[u] + time[v]).",
      "Decrement in-degree of v; enqueue v when in-degree reaches 0. Answer is max(completionTime)."
    ],
    "flow": [
      "Prerequisite DAG & in-degrees",
      "Queue 0-indegree courses",
      "completionTime[v] = max(..., u + time[v])",
      "Enqueue when indegree == 0",
      "Max completion time"
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
    "title": "Swim in Rising Water",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/swim-in-rising-water/",
    "pattern": "Dijkstra's Algorithm",
    "short": "Dijkstra's Algorithm",
    "intro": "Find single-source shortest paths in graphs with non-negative edge weights using a priority queue to iteratively finalize the closest unvisited vertex.",
    "thinking": "Why is finding the path minimizing the maximum elevation along the way equivalent to modified Dijkstra's with edge weight = max(time, grid[nr][nc])?",
    "steps": [
      "Restate **Swim in Rising Water**: find least time to reach bottom-right corner where at time t you can swim in water depth <= t.",
      "Treat the grid as a weighted graph where path cost is max(elevations on path).",
      "Use a min-heap initialized with (grid[0][0], 0, 0).",
      "Track visited[r][c] to avoid reprocessing cells.",
      "Pop minimum time cell (t, r, c): if (r, c) == (n - 1, n - 1), return t.",
      "For 4 neighbors, push (max(t, grid[nr][nc]), nr, nc) to heap."
    ],
    "flow": [
      "Min-heap of (time, r, c)",
      "Pop lowest time cell",
      "Reached (n-1, n-1)? Return time",
      "Push neighbor max(t, elev)",
      "Modified Dijkstra"
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
    "title": "Minimum Cost to Make at Least One Valid Path in a Grid",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/",
    "pattern": "Dijkstra's Algorithm",
    "short": "Dijkstra's Algorithm",
    "intro": "Find single-source shortest paths in graphs with non-negative edge weights using a priority queue to iteratively finalize the closest unvisited vertex.",
    "thinking": "Since moving in the indicated arrow direction costs 0 and altering direction costs 1, how does 0-1 BFS or Dijkstra find the optimal path in O(R * C)?",
    "steps": [
      "Restate **Minimum Cost to Make at Least One Valid Path in a Grid**: find minimum arrow modifications to create a path from top-left to bottom-right.",
      "Moving in the cell's current arrow direction has cost 0; changing direction has cost 1.",
      "Use a double-ended queue (0-1 BFS) or min-heap.",
      "If moving in natural arrow direction, push to front of deque with cost c.",
      "If modifying direction, push to back of deque with cost c + 1.",
      "First time reaching (m - 1, n - 1) yields minimum modification cost in O(R * C) time."
    ],
    "flow": [
      "0-1 BFS / Dijkstra deque",
      "Natural direction? Cost 0 -> front",
      "Modified direction? Cost 1 -> back",
      "Visited distance matrix",
      "O(R * C) optimal"
    ],
    "description": "<p>Given an <code>m x n</code> grid. Each cell of the grid has a sign pointing to the next cell you should visit if you are currently in this cell. The sign of <code>grid[i][j]</code> can be:</p>\n\n<ul>\n\t<li><code>1</code> which means go to the cell to the right. (i.e go from <code>grid[i][j]</code> to <code>grid[i][j + 1]</code>)</li>\n\t<li><code>2</code> which means go to the cell to the left. (i.e go from <code>grid[i][j]</code> to <code>grid[i][j - 1]</code>)</li>\n\t<li><code>3</code> which means go to the lower cell. (i.e go from <code>grid[i][j]</code> to <code>grid[i + 1][j]</code>)</li>\n\t<li><code>4</code> which means go to the upper cell. (i.e go from <code>grid[i][j]</code> to <code>grid[i - 1][j]</code>)</li>\n</ul>\n\n<p>Notice that there could be some signs on the cells of the grid that point outside the grid.</p>\n\n<p>You will initially start at the upper left cell <code>(0, 0)</code>. A valid path in the grid is a path that starts from the upper left cell <code>(0, 0)</code> and ends at the bottom-right cell <code>(m - 1, n - 1)</code> following the signs on the grid. The valid path does not have to be the shortest.</p>\n\n<p>You can modify the sign on a cell with <code>cost = 1</code>. You can modify the sign on a cell <strong>one time only</strong>.</p>\n\n<p>Return <em>the minimum cost to make the grid have at least one valid path</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/02/13/grid1.png\" style=\"width: 400px; height: 390px;\" />\n<pre>\n<strong>Input:</strong> grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> You will start at point (0, 0).\nThe path to (3, 3) is as follows. (0, 0) --&gt; (0, 1) --&gt; (0, 2) --&gt; (0, 3) change the arrow to down with cost = 1 --&gt; (1, 3) --&gt; (1, 2) --&gt; (1, 1) --&gt; (1, 0) change the arrow to down with cost = 1 --&gt; (2, 0) --&gt; (2, 1) --&gt; (2, 2) --&gt; (2, 3) change the arrow to down with cost = 1 --&gt; (3, 3)\nThe total cost = 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/02/13/grid2.png\" style=\"width: 350px; height: 341px;\" />\n<pre>\n<strong>Input:</strong> grid = [[1,1,3],[3,2,2],[1,1,4]]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> You can follow the path from (0, 0) to (2, 2).\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/02/13/grid3.png\" style=\"width: 200px; height: 192px;\" />\n<pre>\n<strong>Input:</strong> grid = [[1,2],[4,3]]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == grid.length</code></li>\n\t<li><code>n == grid[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 100</code></li>\n\t<li><code>1 &lt;= grid[i][j] &lt;= 4</code></li>\n</ul>\n",
    "pythonCode": "from collections import deque\n\ndef minCost(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]  # 1: right, 2: left, 3: down, 4: up\n    dist = [[float(\"inf\")] * C for _ in range(R)]\n    dist[0][0] = 0\n    q = deque([(0, 0)])\n    while q:\n        r, c = q.popleft()\n        for i, (dr, dc) in enumerate(dirs):\n            nr, nc = r + dr, c + dc\n            cost = 0 if grid[r][c] == i + 1 else 1\n            if 0 <= nr < R and 0 <= nc < C and dist[r][c] + cost < dist[nr][nc]:\n                dist[nr][nc] = dist[r][c] + cost\n                if cost == 0: q.appendleft((nr, nc))\n                else: q.append((nr, nc))\n    return dist[R - 1][C - 1]",
    "codeLines": 18,
    "timeComplexity": "O(R * C)",
    "spaceComplexity": "O(R * C)",
    "whyBetterThanBruteForce": "Standard Dijkstra with a priority queue takes O(R * C log(R * C)). Because edge weights are strictly binary (cost 0 if moving along the existing arrow, cost 1 if changing direction), 0-1 BFS using a double-ended queue (deque) pops 0-cost transitions from the front (appendleft) and 1-cost transitions from the back (append), achieving pure linear O(R * C) time.",
    "edgeCasesAndBreakPoints": [
      "Grid already has a valid path to target: dist remains 0, returns 0.",
      "Grid of size 1x1: start is destination, returns 0 immediately.",
      "Path requiring all arrows to be modified: cost accumulates to Manhattan distance bounds.",
      "Cycles in existing arrows: 0-1 BFS distances ensure each cell is updated only when a strictly smaller cost is found."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]",
      "array": [
        "Row 0: [->, ->, ->, ->]",
        "Row 1: [<-, <-, <-, <-]",
        "Row 2: [->, ->, ->, ->]",
        "Row 3: [<-, <-, <-, <-]"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "pos": "(0,0)",
            "cost": 0,
            "path": "Follow right arrows"
          },
          "msg": "Row 0: follows right arrows with cost 0 to (0, 3)."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "step": "Turn down at (0,3)",
            "cost": 1
          },
          "msg": "Turn down from (0,3) to (1,3): cost +1 = 1."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "pos": "(1,0)",
            "cost": 1,
            "path": "Follow left arrows"
          },
          "msg": "Row 1: follows left arrows with cost 0 to (1, 0)."
        },
        {
          "active": [
            1,
            2
          ],
          "vars": {
            "step": "Turn down at (1,0)",
            "cost": 2
          },
          "msg": "Turn down from (1,0) to (2,0): cost +1 = 2."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "destination": "(3, 3)",
            "minCost": 3
          },
          "msg": "Reach (3, 3) with minimum modifications cost = 3. Complete!"
        }
      ]
    }
  },
  {
    "title": "Minimum Cost to Reach Destination in Time",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/",
    "pattern": "Dijkstra's Algorithm",
    "short": "Dijkstra's Algorithm",
    "intro": "Find single-source shortest paths in graphs with non-negative edge weights using a priority queue to iteratively finalize the closest unvisited vertex.",
    "thinking": "How does Dijkstra over state (city, time) prune paths by maintaining the minimum time previously seen for each city at a given cost?",
    "steps": [
      "Restate **Minimum Cost to Reach Destination in Time**: travel from city 0 to city n - 1 within maxTime minimizing total passing fees.",
      "Each city has a fee passingFees[i]; each road has a travel time.",
      "Use min-heap prioritized by lowest cost: (cost, city, time).",
      "Track minTime[city]: only explore a new state if it arrives strictly faster than any previous path to city.",
      "Pop lowest cost state: if city == n - 1, return cost.",
      "Push neighbors with time + roadTime <= maxTime and updated costs."
    ],
    "flow": [
      "Min-heap of (cost, city, time)",
      "Prune if time >= minTime[city]",
      "Update minTime[city]",
      "Destination reached? return cost",
      "Constrained Dijkstra"
    ],
    "description": "<p>There is a country of <code>n</code> cities numbered from <code>0</code> to <code>n - 1</code> where <strong>all the cities are connected</strong> by bi-directional roads. The roads are represented as a 2D integer array <code>edges</code> where <code>edges[i] = [x<sub>i</sub>, y<sub>i</sub>, time<sub>i</sub>]</code> denotes a road between cities <code>x<sub>i</sub></code> and <code>y<sub>i</sub></code> that takes <code>time<sub>i</sub></code> minutes to travel. There may be multiple roads of differing travel times connecting the same two cities, but no road connects a city to itself.</p>\n\n<p>Each time you pass through a city, you must pay a passing fee. This is represented as a <strong>0-indexed</strong> integer array <code>passingFees</code> of length <code>n</code> where <code>passingFees[j]</code> is the amount of dollars you must pay when you pass through city <code>j</code>.</p>\n\n<p>In the beginning, you are at city <code>0</code> and want to reach city <code>n - 1</code> in <code>maxTime</code><strong> minutes or less</strong>. The <strong>cost</strong> of your journey is the <strong>summation of passing fees</strong> for each city that you passed through at some moment of your journey (<strong>including</strong> the source and destination cities).</p>\n\n<p>Given <code>maxTime</code>, <code>edges</code>, and <code>passingFees</code>, return <em>the <strong>minimum cost</strong> to complete your journey, or </em><code>-1</code><em> if you cannot complete it within </em><code>maxTime</code><em> minutes</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/06/04/leetgraph1-1.png\" style=\"width: 371px; height: 171px;\" /></p>\n\n<pre>\n<strong>Input:</strong> maxTime = 30, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]\n<strong>Output:</strong> 11\n<strong>Explanation:</strong> The path to take is 0 -&gt; 1 -&gt; 2 -&gt; 5, which takes 30 minutes and has $11 worth of passing fees.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<p><strong><img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/06/04/copy-of-leetgraph1-1.png\" style=\"width: 371px; height: 171px;\" /></strong></p>\n\n<pre>\n<strong>Input:</strong> maxTime = 29, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]\n<strong>Output:</strong> 48\n<strong>Explanation:</strong> The path to take is 0 -&gt; 3 -&gt; 4 -&gt; 5, which takes 26 minutes and has $48 worth of passing fees.\nYou cannot take path 0 -&gt; 1 -&gt; 2 -&gt; 5 since it would take too long.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> maxTime = 25, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]\n<strong>Output:</strong> -1\n<strong>Explanation:</strong> There is no way to reach city 5 from city 0 within 25 minutes.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= maxTime &lt;= 1000</code></li>\n\t<li><code>n == passingFees.length</code></li>\n\t<li><code>2 &lt;= n &lt;= 1000</code></li>\n\t<li><code>n - 1 &lt;= edges.length &lt;= 1000</code></li>\n\t<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= n - 1</code></li>\n\t<li><code>1 &lt;= time<sub>i</sub> &lt;= 1000</code></li>\n\t<li><code>1 &lt;= passingFees[j] &lt;= 1000</code>&nbsp;</li>\n\t<li>The graph may contain multiple edges between two nodes.</li>\n\t<li>The graph does not contain self loops.</li>\n</ul>\n",
    "pythonCode": "from heapq import heappush, heappop\nfrom collections import defaultdict\n\ndef minCost(maxTime: int, edges: list[list[int]], fees: list[int]) -> int:\n    graph = defaultdict(list)\n    for u, v, t in edges:\n        graph[u].append((v, t)); graph[v].append((u, t))\n    n = len(fees)\n    hp = [(fees[0], 0, 0)]  # (cost, time, node)\n    min_time = [float(\"inf\")] * n\n    while hp:\n        cost, time, u = heappop(hp)\n        if time > maxTime or time >= min_time[u]: continue\n        min_time[u] = time\n        if u == n - 1: return cost\n        for v, t in graph[u]:\n            if time + t <= maxTime and time + t < min_time[v]:\n                heappush(hp, (cost + fees[v], time + t, v))\n    return -1",
    "codeLines": 19,
    "timeComplexity": "O(E log(V * maxTime))",
    "spaceComplexity": "O(V * maxTime)",
    "whyBetterThanBruteForce": "DFS exploring all paths in the graph leads to exponential time. Plain Dijkstra optimizes only cost, which might arrive too late (exceeding maxTime). Maintaining min_time[u] tracks the shortest arrival time to node u observed so far: if a new path to u costs more and arrives later, it is pruned. The min-heap prioritizes cost first, guaranteeing the first arrival at n - 1 within maxTime is the cheapest.",
    "edgeCasesAndBreakPoints": [
      "Destination unreachable within maxTime: heap exhausts, returns -1.",
      "Multiple edges between the same pair of nodes: heap naturally picks the optimal time/cost tradeoff.",
      "Single node graph: fees[0] returned at time 0.",
      "Cycles: min_time pruning strictly halts cycling with increasing time."
    ],
    "simConfig": {
      "type": "graph",
      "inputDisplay": "maxTime = 30, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], fees = [5,1,2,20,20,3]",
      "array": [
        "Path 1: 0->1->2->5 (time 30, fee 11)",
        "Path 2: 0->3->4->5 (time 26, fee 48)"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "start": "Node 0",
            "cost": 5,
            "time": 0
          },
          "msg": "Start at Node 0. Initial cost = fees[0] = 5, time = 0."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "explore": "Node 1 (cost 6, time 10)"
          },
          "msg": "Explore Node 1 via edge of time 10. Cumulative cost = 5 + 1 = 6, time = 10."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "explore": "Node 2 (cost 8, time 20)"
          },
          "msg": "Explore Node 2. Cumulative cost = 6 + 2 = 8, time = 20."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "destination": "Node 5",
            "cost": 11,
            "time": 30
          },
          "msg": "Arrive at destination Node 5: time 30 <= maxTime (30). Total cost = 8 + 3 = 11. Minimal cost found!"
        }
      ]
    }
  },
  {
    "title": "Palindrome Partitioning II",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/palindrome-partitioning-ii/",
    "pattern": "Dynamic Programming — 1D",
    "short": "1D DP",
    "intro": "Decompose sequences into linear subproblems where state dp[i] depends on a bounded window of previous states or prefix/suffix partitions.",
    "thinking": "How does precomputing a 2D palindrome table allow 1D DP dp[i] = min cuts for s[0..i] to run in exact O(N^2) time?",
    "steps": [
      "Restate **Palindrome Partitioning II**: find minimum cuts needed for palindrome partitioning of string s.",
      "Phase 1: precompute 2D boolean table isPal[i][j] indicating whether substring s[i..j] is a palindrome in O(N^2).",
      "Phase 2: define dp[i] as the minimum cuts needed for prefix s[0..i].",
      "If isPal[0][i] is true, dp[i] = 0 (no cuts needed).",
      "Otherwise, dp[i] = min_{j=1}^{i} (dp[j - 1] + 1) for all j where isPal[j][i] is true. Return dp[n - 1]."
    ],
    "flow": [
      "Precompute isPal[i][j]",
      "1D array dp[i] min cuts",
      "isPal[0][i]? dp[i] = 0",
      "Check all cuts j: dp[j-1] + 1",
      "O(N^2) total"
    ],
    "description": "<p>Given a string <code>s</code>, partition <code>s</code> such that every <span data-keyword=\"substring-nonempty\">substring</span> of the partition is a <span data-keyword=\"palindrome-string\">palindrome</span>.</p>\n\n<p>Return <em>the <strong>minimum</strong> cuts needed for a palindrome partitioning of</em> <code>s</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;aab&quot;\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> The palindrome partitioning [&quot;aa&quot;,&quot;b&quot;] could be produced using 1 cut.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;a&quot;\n<strong>Output:</strong> 0\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;ab&quot;\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 2000</code></li>\n\t<li><code>s</code> consists of lowercase English letters only.</li>\n</ul>\n",
    "pythonCode": "def minCut(s: str) -> int:\n    n = len(s)\n    dp = list(range(-1, n))\n    for mid in range(n):\n        r = 0\n        while mid - r >= 0 and mid + r < n and s[mid - r] == s[mid + r]:\n            dp[mid + r + 1] = min(dp[mid + r + 1], dp[mid - r] + 1); r += 1\n        r = 0\n        while mid - r >= 0 and mid + r + 1 < n and s[mid - r] == s[mid + r + 1]:\n            dp[mid + r + 2] = min(dp[mid + r + 2], dp[mid - r] + 1); r += 1\n    return dp[n]",
    "codeLines": 11,
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force checks all 2^(N-1) partition cuts in exponential time. Precomputing a full N x N palindrome table takes O(N^2) space. By expanding palindromic radii outwards from each center mid (both odd and even centers), we directly update the 1D DP table dp[r + 1] = min(dp[r + 1], dp[l] + 1) in-place without storing any 2D table, running in O(N^2) time with strict O(N) space.",
    "edgeCasesAndBreakPoints": [
      "String is already a palindrome: dp[n] reaches 0 cuts.",
      "All distinct characters (e.g. 'abc'): requires n - 1 cuts.",
      "Single character: returns 0.",
      "Two identical characters ('aa'): returns 0 cuts."
    ],
    "simConfig": {
      "type": "dp",
      "inputDisplay": "s = 'aab'",
      "array": [
        "a",
        "a",
        "b"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "dp": "[-1, 0, 1, 2]"
          },
          "msg": "Initialize dp = [-1, 0, 1, 2]. dp[i] is min cuts for prefix of length i."
        },
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "center": "mid=0, 'aa'",
            "palindrome": "'aa'"
          },
          "msg": "Even palindrome 'aa' around center 0: s[0:2] is palindrome! dp[2] = min(1, dp[0] + 1) = 0 cuts."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "mid": 2,
            "single": "'b'"
          },
          "msg": "Single character 'b': dp[3] = min(2, dp[2] + 1) = 0 + 1 = 1 cut."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "minCuts": 1,
            "partition": "'aa' | 'b'"
          },
          "msg": "Partition 'aa' | 'b' requires 1 cut. Output: 1. Complete!"
        }
      ]
    }
  },
  {
    "title": "Restore The Array",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/restore-the-array/",
    "pattern": "Dynamic Programming — 1D",
    "short": "1D DP",
    "intro": "Decompose sequences into linear subproblems where state dp[i] depends on a bounded window of previous states or prefix/suffix partitions.",
    "thinking": "Since numbers cannot exceed k, at each index i we only need to look ahead at substrings of length <= log10(k) to compute valid transitions.",
    "steps": [
      "Restate **Restore The Array**: count possible arrays printed as string s where each integer is in range [1, k] (modulo 10^9 + 7).",
      "Define dp[i] as the number of valid arrays reconstructible from suffix s[i..n-1].",
      "Base case: dp[n] = 1. If s[i] == '0', dp[i] = 0 (no leading zeroes).",
      "For index i, examine substrings s[i..j] for j from i up to min(n - 1, i + 10) (since k <= 10^9).",
      "If parsed integer <= k, add dp[j + 1] to dp[i]. Total time O(N * log10(k))."
    ],
    "flow": [
      "Suffix DP dp[i]",
      "s[i] == 0? 0 (no leading zeros)",
      "Check len <= 10 substrings",
      "val <= k? dp[i] += dp[j+1]",
      "Modulo 10^9 + 7"
    ],
    "description": "<p>A program was supposed to print an array of integers. The program forgot to print whitespaces and the array is printed as a string of digits <code>s</code> and all we know is that all integers in the array were in the range <code>[1, k]</code> and there are no leading zeros in the array.</p>\n\n<p>Given the string <code>s</code> and the integer <code>k</code>, return <em>the number of the possible arrays that can be printed as </em><code>s</code><em> using the mentioned program</em>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;1000&quot;, k = 10000\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> The only possible array is [1000]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;1000&quot;, k = 10\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> There cannot be an array that was printed this way and has all integer &gt;= 1 and &lt;= 10.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;1317&quot;, k = 2000\n<strong>Output:</strong> 8\n<strong>Explanation:</strong> Possible arrays are [1317],[131,7],[13,17],[1,317],[13,1,7],[1,31,7],[1,3,17],[1,3,1,7]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>s</code> consists of only digits and does not contain leading zeros.</li>\n\t<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>\n</ul>\n",
    "pythonCode": "def numberOfArrays(s: str, k: int) -> int:\n    n, MOD = len(s), 10**9 + 7\n    dp = [0] * (n + 1)\n    dp[n] = 1\n    for i in range(n - 1, -1, -1):\n        if s[i] == '0': continue\n        cur = 0\n        for j in range(i, min(n, i + len(str(k)))):\n            cur = cur * 10 + int(s[j])\n            if cur > k: break\n            dp[i] = (dp[i] + dp[j + 1]) % MOD\n    return dp[0]",
    "codeLines": 12,
    "timeComplexity": "O(N * log10(K))",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Generating all partitions with backtracking takes O(2^N) time. In dynamic programming, each prefix/suffix only transitions to substrings whose integer value is <= k. Because k <= 10^9, the maximum number of digits in any valid segment is log10(k) <= 10. The inner loop runs at most 10 times, giving an optimal O(10 * N) = O(N) runtime.",
    "edgeCasesAndBreakPoints": [
      "Leading zeroes (s[i] == '0'): numbers with leading zeroes are strictly invalid; continue skips immediately.",
      "Single digit greater than k (e.g. s='9', k=5): returns 0.",
      "k larger than the entire number s: entire string forms 1 valid number.",
      "MOD = 10^9 + 7: modulo arithmetic prevents integer expansion."
    ],
    "simConfig": {
      "type": "dp",
      "inputDisplay": "s = '1317', k = 2000",
      "array": [
        "1",
        "3",
        "1",
        "7"
      ],
      "steps": [
        {
          "active": [
            3
          ],
          "vars": {
            "suffix": "'7'",
            "dp[3]": 1
          },
          "msg": "Suffix '7' <= 2000: 1 way (['7'])."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "suffix": "'17'",
            "options": "[1, 7], [17]"
          },
          "msg": "From '1': '1' (dp[3]=1) and '17' (dp[4]=1) -> dp[2] = 2."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "suffix": "'317'",
            "options": "'3'+..., '31'+..., '317'"
          },
          "msg": "From '3': '3', '31', '317' are all <= 2000 -> dp[1] = 4."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "suffix": "'1317'",
            "options": "'1'+..., '13'+..., '131'+..., '1317'"
          },
          "msg": "From '1': all prefix numbers <= 2000 -> dp[0] = 8 ways. Complete!"
        }
      ]
    }
  },
  {
    "title": "Longest Valid Parentheses",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/longest-valid-parentheses/",
    "pattern": "Dynamic Programming — 1D",
    "short": "1D DP",
    "intro": "Decompose sequences into linear subproblems where state dp[i] depends on a bounded window of previous states or prefix/suffix partitions.",
    "thinking": "How does dp[i] tracking the longest valid parentheses ending at index i transition when s[i] == ')' and s[i - dp[i-1] - 1] == '('?",
    "steps": [
      "Restate **Longest Valid Parentheses**: find the length of the longest valid parentheses substring using 1D dynamic programming.",
      "Define dp[i] as length of longest valid parentheses substring ending at index i.",
      "If s[i] == ')' and s[i - 1] == '(': dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2.",
      "If s[i] == ')' and s[i - 1] == ')': check match index k = i - dp[i - 1] - 1. If k >= 0 and s[k] == '(': dp[i] = dp[i - 1] + 2 + (k >= 1 ? dp[k - 1] : 0).",
      "Overall time O(N), space O(N)."
    ],
    "flow": [
      "dp[i] for ending at i",
      "Pair () directly: dp[i-2] + 2",
      "Nested (()): check prior match k",
      "Stitch preceding dp[k-1]",
      "Max of dp array"
    ],
    "description": "<p>Given a string containing just the characters <code>&#39;(&#39;</code> and <code>&#39;)&#39;</code>, return <em>the length of the longest valid (well-formed) parentheses </em><span data-keyword=\"substring-nonempty\"><em>substring</em></span>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;(()&quot;\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> The longest valid parentheses substring is &quot;()&quot;.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;)()())&quot;\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> The longest valid parentheses substring is &quot;()()&quot;.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;&quot;\n<strong>Output:</strong> 0\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>s[i]</code> is <code>&#39;(&#39;</code>, or <code>&#39;)&#39;</code>.</li>\n</ul>\n",
    "pythonCode": "def longestValidParentheses(s: str) -> int:\n    dp = [0] * (len(s) + 1)\n    for i in range(1, len(s)):\n        if s[i] == ')':\n            if s[i - 1] == '(':\n                dp[i + 1] = dp[i - 1] + 2\n            elif i - dp[i] > 0 and s[i - dp[i] - 1] == '(':\n                dp[i + 1] = dp[i] + 2 + dp[i - dp[i] - 1]\n    return max(dp)",
    "codeLines": 9,
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "whyBetterThanBruteForce": "Brute force checks all substrings in O(N^3) time. By framing the problem as 1D DP where dp[i] is the length of the longest valid parentheses substring ending at index i - 1: if s[i] == ')', it either pairs with s[i-1] == '(' (+2) or matches across an inner valid substring (s[i - dp[i] - 1] == '('), updating in strict O(1) time without stack allocations.",
    "edgeCasesAndBreakPoints": [
      "Nested valid structures (e.g. '(())'): dp[i-dp[i]-1] chains preceding adjacent valid substrings.",
      "Adjacent concatenated valid substrings (e.g. '()()'): adds previous contiguous valid count.",
      "String of all '(' or all ')': dp values stay 0.",
      "Index i - dp[i] - 1 < 0: guarded boundary check prevents negative index wrap."
    ],
    "simConfig": {
      "type": "dp",
      "inputDisplay": "s = '(())'",
      "array": [
        "(",
        "(",
        ")",
        ")"
      ],
      "steps": [
        {
          "active": [
            0,
            1
          ],
          "vars": {
            "i": 1,
            "char": "'('",
            "dp": "[0, 0, 0, 0, 0]"
          },
          "msg": "i=0 and i=1 are '(': cannot end a valid substring. dp remains 0."
        },
        {
          "active": [
            2
          ],
          "vars": {
            "i": 2,
            "char": "')'",
            "pair": "s[1]='('",
            "dp[3]": 2
          },
          "msg": "i=2 ')': pairs with s[1]='('. dp[3] = dp[1] + 2 = 2."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "i": 3,
            "char": "')'",
            "matches": "s[0]='('",
            "dp[4]": 4
          },
          "msg": "i=3 ')': inner substring '( )' has len 2. Character before it s[0] is '('. dp[4] = 2 + 2 + dp[0] = 4!"
        },
        {
          "active": [
            0,
            1,
            2,
            3
          ],
          "vars": {
            "maxValidLen": 4
          },
          "msg": "Max valid length is 4. Complete!"
        }
      ]
    }
  },
  {
    "title": "Regular Expression Matching",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/regular-expression-matching/",
    "pattern": "Dynamic Programming — 2D / Grid",
    "short": "2D DP",
    "intro": "Formulate recurrence relations over two dimensions: grid coordinates, dual string indices (edit distance, regex matching), or interval endpoints.",
    "thinking": "How does matching character '*' create a dual branch: zero occurrences of preceding element vs one or more occurrences?",
    "steps": [
      "Restate **Regular Expression Matching**: implement regex matching supporting '.' (any char) and '*' (zero or more of preceding char).",
      "Define dp[i][j] as whether s[0..i-1] matches pattern p[0..j-1].",
      "Base case: dp[0][0] = true; empty pattern matches empty string.",
      "If p[j - 1] != '*': dp[i][j] = dp[i - 1][j - 1] && (p[j - 1] == s[i - 1] || p[j - 1] == '.').",
      "If p[j - 1] == '*': zero occurrences dp[i][j - 2], or one/more occurrences dp[i - 1][j] && (p[j - 2] == s[i - 1] || p[j - 2] == '.')."
    ],
    "flow": [
      "2D table dp[|s|+1][|p|+1]",
      "Handle empty prefix with *",
      "p[j-1] != *: match 1 char",
      "p[j-1] == *: 0 matches or 1+ matches",
      "Return dp[m][n]"
    ],
    "description": "<p>Given an input string <code>s</code>&nbsp;and a pattern <code>p</code>, implement regular expression matching with support for <code>&#39;.&#39;</code> and <code>&#39;*&#39;</code> where:</p>\n\n<ul>\n\t<li><code>&#39;.&#39;</code> Matches any single character.​​​​</li>\n\t<li><code>&#39;*&#39;</code> Matches zero or more of the preceding element.</li>\n</ul>\n\n<p>Return a boolean indicating whether the matching covers the entire input string (not partial).</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;aa&quot;, p = &quot;a&quot;\n<strong>Output:</strong> false\n<strong>Explanation:</strong> &quot;a&quot; does not match the entire string &quot;aa&quot;.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;aa&quot;, p = &quot;a*&quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong> &#39;*&#39; means zero or more of the preceding element, &#39;a&#39;. Therefore, by repeating &#39;a&#39; once, it becomes &quot;aa&quot;.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;ab&quot;, p = &quot;.*&quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong> &quot;.*&quot; means &quot;zero or more (*) of any character (.)&quot;.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length&nbsp;&lt;= 20</code></li>\n\t<li><code>1 &lt;= p.length&nbsp;&lt;= 20</code></li>\n\t<li><code>s</code> contains only lowercase English letters.</li>\n\t<li><code>p</code> contains only lowercase English letters, <code>&#39;.&#39;</code>, and&nbsp;<code>&#39;*&#39;</code>.</li>\n\t<li>It is guaranteed for each appearance of the character <code>&#39;*&#39;</code>, there will be a previous valid character to match.</li>\n</ul>\n",
    "pythonCode": "def isMatch(s: str, p: str) -> bool:\n    dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]\n    dp[0][0] = True\n    for j in range(2, len(p) + 1, 2):\n        if p[j - 1] == '*': dp[0][j] = dp[0][j - 2]\n    for i in range(1, len(s) + 1):\n        for j in range(1, len(p) + 1):\n            if p[j - 1] == '*':\n                match = (p[j - 2] in (s[i - 1], '.'))\n                dp[i][j] = dp[i][j - 2] or (match and dp[i - 1][j])\n            else:\n                dp[i][j] = dp[i - 1][j - 1] and p[j - 1] in (s[i - 1], '.')\n    return dp[len(s)][len(p)]",
    "codeLines": 13,
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "whyBetterThanBruteForce": "Recursive backtracking with '*' can branch exponentially in O(2^(M+N)) due to repeated subproblem evaluations. 2D Dynamic Programming tabularizes whether prefix s[:i] matches pattern prefix p[:j]. '*' either consumes zero characters (dp[i][j-2]) or one matching character (dp[i-1][j]), resolving each cell in O(1) for O(M * N) total time.",
    "edgeCasesAndBreakPoints": [
      "Empty string s with patterns like 'a*b*c*': base case loop dp[0][j] correctly sets True.",
      "Pattern containing '.*': matches any character and can repeat arbitrarily.",
      "No '*' or '.' in pattern: reduces to direct character-by-character equality.",
      "Consecutive '*' patterns: handled without infinite loops."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "s = 'aab', p = 'c*a*b'",
      "array": [
        "s: 'aab'",
        "p: 'c*a*b'"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "dp[0][0]": true,
            "dp[0][2]('c*')": true
          },
          "msg": "Base case: empty s matches 'c*' (0 instances of 'c'). dp[0][2] = True."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "match('a', 'a*')": true,
            "dp[1][4]": true
          },
          "msg": "s='a' matches 'c*a*' (1 instance of 'a')."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "match('aa', 'a*')": true,
            "dp[2][4]": true
          },
          "msg": "s='aa' matches 'c*a*' (2 instances of 'a')."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "match('b', 'b')": true,
            "dp[3][5]": true
          },
          "msg": "Final 'b' matches pattern 'b'. dp[3][5] = True! Complete match!"
        }
      ]
    }
  },
  {
    "title": "Wildcard Matching",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/wildcard-matching/",
    "pattern": "Dynamic Programming — 2D / Grid",
    "short": "2D DP",
    "intro": "Formulate recurrence relations over two dimensions: grid coordinates, dual string indices (edit distance, regex matching), or interval endpoints.",
    "thinking": "How does wildcard '*' differ from regex '*' by matching any arbitrary sequence, transitioning as dp[i][j] = dp[i][j - 1] || dp[i - 1][j]?",
    "steps": [
      "Restate **Wildcard Matching**: implement wildcard pattern matching supporting '?' (single char) and '*' (any sequence).",
      "Define dp[i][j] as whether s[0..i-1] matches p[0..j-1].",
      "Base case: dp[0][0] = true. Initial '*'s in pattern can match empty prefix (dp[0][j] = dp[0][j - 1]).",
      "If p[j - 1] == s[i - 1] or p[j - 1] == '?': dp[i][j] = dp[i - 1][j - 1].",
      "If p[j - 1] == '*': dp[i][j] = dp[i][j - 1] (empty match) or dp[i - 1][j] (matches current char and stays active)."
    ],
    "flow": [
      "dp table dimensions (m+1) x (n+1)",
      "Leading * matches empty string",
      "Match ? or char: dp[i-1][j-1]",
      "Match *: dp[i][j-1] || dp[i-1][j]",
      "O(M * N) complexity"
    ],
    "description": "<p>Given an input string (<code>s</code>) and a pattern (<code>p</code>), implement wildcard pattern matching with support for <code>&#39;?&#39;</code> and <code>&#39;*&#39;</code> where:</p>\n\n<ul>\n\t<li><code>&#39;?&#39;</code> Matches any single character.</li>\n\t<li><code>&#39;*&#39;</code> Matches any sequence of characters (including the empty sequence).</li>\n</ul>\n\n<p>The matching should cover the <strong>entire</strong> input string (not partial).</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;aa&quot;, p = &quot;a&quot;\n<strong>Output:</strong> false\n<strong>Explanation:</strong> &quot;a&quot; does not match the entire string &quot;aa&quot;.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;aa&quot;, p = &quot;*&quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong>&nbsp;&#39;*&#39; matches any sequence.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;cb&quot;, p = &quot;?a&quot;\n<strong>Output:</strong> false\n<strong>Explanation:</strong>&nbsp;&#39;?&#39; matches &#39;c&#39;, but the second letter is &#39;a&#39;, which does not match &#39;b&#39;.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= s.length, p.length &lt;= 2000</code></li>\n\t<li><code>s</code> contains only lowercase English letters.</li>\n\t<li><code>p</code> contains only lowercase English letters, <code>&#39;?&#39;</code> or <code>&#39;*&#39;</code>.</li>\n</ul>\n",
    "pythonCode": "def isMatch(s: str, p: str) -> bool:\n    si = pi = match = 0\n    star = -1\n    while si < len(s):\n        if pi < len(p) and (p[pi] == s[si] or p[pi] == '?'):\n            si += 1; pi += 1\n        elif pi < len(p) and p[pi] == '*':\n            star, match, pi = pi, si, pi + 1\n        elif star != -1:\n            pi, match = star + 1, match + 1\n            si = match\n        else:\n            return False\n    while pi < len(p) and p[pi] == '*': pi += 1\n    return pi == len(p)",
    "codeLines": 15,
    "timeComplexity": "O(M * N) worst case, O(M + N) average",
    "spaceComplexity": "O(1)",
    "whyBetterThanBruteForce": "2D DP requires O(M * N) time and space. Because '*' in wildcard matching matches any arbitrary sequence of characters greedily, we only need to track the position of the most recent '*' (star) and the backtrack match point in s. If a mismatch occurs, backtrack to match one more character with the latest '*' without re-evaluating earlier stars, running in O(1) space.",
    "edgeCasesAndBreakPoints": [
      "Pattern of pure '*': matches any string including empty string.",
      "Empty string and empty pattern: returns True immediately.",
      "Mismatch with no preceding '*': immediately returns False.",
      "Trailing '*' in pattern: cleaned up by final while loop."
    ],
    "simConfig": {
      "type": "array_pointers",
      "inputDisplay": "s = 'adceb', p = '*a*b'",
      "array": [
        "s: adceb",
        "p: *a*b"
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "p[0]": "'*'",
            "star": 0,
            "match": 0
          },
          "msg": "p[0] is '*': record star=0, match=0. Advance pi to 1."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "s[0]": "'a'",
            "p[1]": "'a'"
          },
          "msg": "s[0] matches p[1] ('a' == 'a'). Advance both pointers."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "p[2]": "'*'",
            "star": 2,
            "match": 1
          },
          "msg": "p[2] is second '*': update star=2, match=1. Advance pi to 3."
        },
        {
          "active": [
            1,
            2,
            3,
            4
          ],
          "vars": {
            "consumed": "'dce'",
            "p[3]": "'b'",
            "s[4]": "'b'"
          },
          "msg": "'*' matches 'dce'. Final characters s[4]='b' and p[3]='b' match! Return True."
        }
      ]
    }
  },
  {
    "title": "Burst Balloons",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/burst-balloons/",
    "pattern": "Dynamic Programming — 2D / Grid",
    "short": "2D DP",
    "intro": "Formulate recurrence relations over two dimensions: grid coordinates, dual string indices (edit distance, regex matching), or interval endpoints.",
    "thinking": "Instead of choosing which balloon to burst first (which alters neighbors), why does choosing which balloon to burst LAST isolate subproblems?",
    "steps": [
      "Restate **Burst Balloons**: burst all balloons to maximize coins collected: nums[left] * nums[i] * nums[right].",
      "Pad array with virtual boundaries nums[-1] = 1 and nums[n] = 1.",
      "Define dp[i][j] as the maximum coins from bursting all balloons strictly between index i and j.",
      "Iterate over interval length len from 1 to n: pick the last balloon k to burst in interval (i, j).",
      "dp[i][j] = max_{k=i+1}^{j-1} (dp[i][k] + nums[i] * nums[k] * nums[j] + dp[k][j]). Return dp[0][n + 1] in O(N^3)."
    ],
    "flow": [
      "Pad boundaries with 1",
      "Interval DP: pick LAST balloon k",
      "dp[i][j] = max(dp[i][k] + coins + dp[k][j])",
      "Interval lengths 1 .. n",
      "O(N^3) optimal"
    ],
    "description": "<p>You are given <code>n</code> balloons, indexed from <code>0</code> to <code>n - 1</code>. Each balloon is painted with a number on it represented by an array <code>nums</code>. You are asked to burst all the balloons.</p>\n\n<p>If you burst the <code>i<sup>th</sup></code> balloon, you will get <code>nums[i - 1] * nums[i] * nums[i + 1]</code> coins. If <code>i - 1</code> or <code>i + 1</code> goes out of bounds of the array, then treat it as if there is a balloon with a <code>1</code> painted on it.</p>\n\n<p>Return <em>the maximum coins you can collect by bursting the balloons wisely</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,1,5,8]\n<strong>Output:</strong> 167\n<strong>Explanation:</strong>\nnums = [3,1,5,8] --&gt; [3,5,8] --&gt; [3,8] --&gt; [8] --&gt; []\ncoins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,5]\n<strong>Output:</strong> 10\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 300</code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 100</code></li>\n</ul>\n",
    "pythonCode": "def maxCoins(nums: list[int]) -> int:\n    A = [1] + [x for x in nums if x > 0] + [1]\n    n = len(A)\n    dp = [[0] * n for _ in range(n)]\n    for length in range(1, n - 1):\n        for l in range(0, n - length - 1):\n            r = l + length + 1\n            dp[l][r] = max(dp[l][k] + dp[k][r] + A[l] * A[k] * A[r] for k in range(l + 1, r))\n    return dp[0][n - 1]",
    "codeLines": 9,
    "timeComplexity": "O(N^3)",
    "spaceComplexity": "O(N^2)",
    "whyBetterThanBruteForce": "Bursting balloons top-down changes the adjacency of neighboring balloons dynamically, creating O(N!) factorial configurations. Thinking in reverse (which balloon k is burst LAST in range (l, r)) keeps the boundary balloons A[l] and A[r] intact throughout the subproblem. This decouples the subproblems into independent halves (l, k) and (k, r), allowing optimal O(N^3) interval DP.",
    "edgeCasesAndBreakPoints": [
      "Array with 1 balloon: padded with 1s: 1 * nums[0] * 1 = nums[0].",
      "Zeroes in input: burst balloons of value 0 contribute 0 coins and can be pruned.",
      "All balloons equal: interval DP finds optimal symmetric bursting order.",
      "n up to 300: 300^3 / 6 ~ 4.5 * 10^6 operations, executes in < 0.5s."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "nums = [3, 1, 5, 8]",
      "array": [
        "1",
        "3",
        "1",
        "5",
        "8",
        "1"
      ],
      "steps": [
        {
          "active": [
            0,
            5
          ],
          "vars": {
            "padded": "[1, 3, 1, 5, 8, 1]"
          },
          "msg": "Pad with boundary 1s on both sides. Form interval DP table."
        },
        {
          "active": [
            1,
            2,
            3
          ],
          "vars": {
            "burstLast": "1 in (3, 1, 5)",
            "coins": "3 * 1 * 5 = 15"
          },
          "msg": "Subproblem (1, 3): burst 1 last -> coins = 3 * 1 * 5 = 15."
        },
        {
          "active": [
            2,
            3,
            4
          ],
          "vars": {
            "burstLast": "5 in (1, 5, 8)",
            "coins": "1 * 5 * 8 = 40"
          },
          "msg": "Subproblem (2, 4): burst 5 last -> coins = 1 * 5 * 8 = 40."
        },
        {
          "active": [
            0,
            5
          ],
          "vars": {
            "optimalLast": "k=8",
            "maxCoins": 167
          },
          "msg": "Interval DP combines all optimal subproblems. Total max coins = 167. Complete!"
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
    "intro": "Systematically explore candidate solution spaces by choosing options, recursing deeper, and pruning invalid branches early through state validation and rollback.",
    "thinking": "How do boolean sets for columns (col), main diagonals (row - col), and anti-diagonals (row + col) allow O(1) safety checks for queen placement?",
    "steps": [
      "Restate **N-Queens**: place n queens on an n x n chessboard so that no two queens attack each other.",
      "Place queens row by row from row 0 to n - 1.",
      "Maintain three sets or bitmasks: cols, diag1 (row - col), and diag2 (row + col).",
      "For current row, try placing queen in column c: if c in cols || (r - c) in diag1 || (r + c) in diag2, skip.",
      "Add to sets, place queen, recurse to row + 1; on return, remove from sets to backtrack. Record board state when row == n."
    ],
    "flow": [
      "Row-by-row recursion",
      "Check col, diag1, diag2",
      "Place Queen & mark sets",
      "Recurse row + 1",
      "Backtrack & remove marks"
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
  },
  {
    "title": "Sudoku Solver",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/sudoku-solver/",
    "pattern": "Backtracking",
    "short": "Backtracking",
    "intro": "Systematically explore candidate solution spaces by choosing options, recursing deeper, and pruning invalid branches early through state validation and rollback.",
    "thinking": "How does depth-first backtracking over empty cells, checked against row, column, and 3x3 sub-box bitmasks, solve the board in-place?",
    "steps": [
      "Restate **Sudoku Solver**: fill empty cells in a 9x9 Sudoku board to satisfy all Sudoku rules in-place.",
      "Maintain row, column, and 3x3 block digit constraints using bitmasks.",
      "Find next empty cell (r, c) (can optimize with Most Constrained Variable heuristic).",
      "Try digits '1' through '9': if digit is valid in row r, col c, and box (r/3)*3 + c/3, place digit and mark masks.",
      "Recurse: if subproblem returns true, propagate true; else reset cell to '.', unmark masks, and try next digit."
    ],
    "flow": [
      "Find next empty cell",
      "Try digits 1 to 9",
      "Verify row, col, 3x3 box",
      "Place & recurse",
      "Backtrack if dead end"
    ],
    "description": "<p>Write a program to solve a Sudoku puzzle by filling the empty cells.</p>\n\n<p>A sudoku solution must satisfy <strong>all of the following rules</strong>:</p>\n\n<ol>\n\t<li>Each of the digits <code>1-9</code> must occur exactly once in each row.</li>\n\t<li>Each of the digits <code>1-9</code> must occur exactly once in each column.</li>\n\t<li>Each of the digits <code>1-9</code> must occur exactly once in each of the 9 <code>3x3</code> sub-boxes of the grid.</li>\n</ol>\n\n<p>The <code>&#39;.&#39;</code> character indicates empty cells.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png\" style=\"height:250px; width:250px\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;5&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;],[&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;],[&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;],[&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;],[&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]]\n<strong>Output:</strong> [[&quot;5&quot;,&quot;3&quot;,&quot;4&quot;,&quot;6&quot;,&quot;7&quot;,&quot;8&quot;,&quot;9&quot;,&quot;1&quot;,&quot;2&quot;],[&quot;6&quot;,&quot;7&quot;,&quot;2&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;3&quot;,&quot;4&quot;,&quot;8&quot;],[&quot;1&quot;,&quot;9&quot;,&quot;8&quot;,&quot;3&quot;,&quot;4&quot;,&quot;2&quot;,&quot;5&quot;,&quot;6&quot;,&quot;7&quot;],[&quot;8&quot;,&quot;5&quot;,&quot;9&quot;,&quot;7&quot;,&quot;6&quot;,&quot;1&quot;,&quot;4&quot;,&quot;2&quot;,&quot;3&quot;],[&quot;4&quot;,&quot;2&quot;,&quot;6&quot;,&quot;8&quot;,&quot;5&quot;,&quot;3&quot;,&quot;7&quot;,&quot;9&quot;,&quot;1&quot;],[&quot;7&quot;,&quot;1&quot;,&quot;3&quot;,&quot;9&quot;,&quot;2&quot;,&quot;4&quot;,&quot;8&quot;,&quot;5&quot;,&quot;6&quot;],[&quot;9&quot;,&quot;6&quot;,&quot;1&quot;,&quot;5&quot;,&quot;3&quot;,&quot;7&quot;,&quot;2&quot;,&quot;8&quot;,&quot;4&quot;],[&quot;2&quot;,&quot;8&quot;,&quot;7&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;6&quot;,&quot;3&quot;,&quot;5&quot;],[&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;2&quot;,&quot;8&quot;,&quot;6&quot;,&quot;1&quot;,&quot;7&quot;,&quot;9&quot;]]\n<strong>Explanation:</strong>&nbsp;The input board is shown above and the only valid solution is shown below:\n\n<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png\" style=\"height:250px; width:250px\" />\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>board.length == 9</code></li>\n\t<li><code>board[i].length == 9</code></li>\n\t<li><code>board[i][j]</code> is a digit or <code>&#39;.&#39;</code>.</li>\n\t<li>It is <strong>guaranteed</strong> that the input board has only one solution.</li>\n</ul>\n",
    "pythonCode": "def solveSudoku(board: list[list[str]]) -> None:\n    empty = [(r, c) for r in range(9) for c in range(9) if board[r][c] == '.']\n    def isValid(r, c, ch):\n        for i in range(9):\n            if board[r][i] == ch or board[i][c] == ch: return False\n            if board[3 * (r // 3) + i // 3][3 * (c // 3) + i % 3] == ch: return False\n        return True\n    def backtrack(idx):\n        if idx == len(empty): return True\n        r, c = empty[idx]\n        for ch in '123456789':\n            if isValid(r, c, ch):\n                board[r][c] = ch\n                if backtrack(idx + 1): return True\n                board[r][c] = '.'\n        return False\n    backtrack(0)",
    "codeLines": 17,
    "timeComplexity": "O(9^M) worst case, fast with pruning",
    "spaceComplexity": "O(M)",
    "whyBetterThanBruteForce": "Filling 9^empty cells blindly takes astronomical time. Collecting all empty coordinates into an empty list avoids scanning the board repeatedly. At each empty cell, testing candidates '1'-'9' against row, column, and 3x3 block constraints prunes invalid branches instantly, and early returning True on completion halts search without redundant work.",
    "edgeCasesAndBreakPoints": [
      "Board already completely filled: returns immediately without search.",
      "3x3 sub-box index arithmetic: 3*(r//3) + i//3 covers box coordinates cleanly.",
      "Unique solution guaranteed by LeetCode: backtrack stops on first valid completion.",
      "Backtracking undo: board[r][c] = '.' restores state on branch failure."
    ],
    "simConfig": {
      "type": "matrix",
      "inputDisplay": "board: 9x9 Sudoku grid with 81 cells",
      "array": [
        "Row 0: 5 3 . . 7 . . . .",
        "Row 1: 6 . . 1 9 5 . . .",
        "Row 2: . 9 8 . . . . 6 ."
      ],
      "steps": [
        {
          "active": [
            0
          ],
          "vars": {
            "findEmpty": "(0, 2)",
            "tried": "'1','2','4' (valid)"
          },
          "msg": "Find empty cell at (0, 2). Check row 0, col 2, and top-left 3x3 box."
        },
        {
          "active": [
            0
          ],
          "vars": {
            "assign": "board(0,2) = '4'"
          },
          "msg": "Place '4' at (0, 2). Valid constraints satisfied."
        },
        {
          "active": [
            1
          ],
          "vars": {
            "nextEmpty": "(1, 1)",
            "assign": "'7'"
          },
          "msg": "Advance to next empty cell (1, 1). Place '7'."
        },
        {
          "active": [
            0,
            1,
            2
          ],
          "vars": {
            "solved": true
          },
          "msg": "Backtracking successfully completes all empty cells. Valid Sudoku solved!"
        }
      ]
    }
  },
  {
    "title": "Maximum Score Words Formed by Letters",
    "difficulty": "Hard",
    "url": "https://leetcode.com/problems/maximum-score-words-formed-by-letters/",
    "pattern": "Backtracking",
    "short": "Backtracking",
    "intro": "Systematically explore candidate solution spaces by choosing options, recursing deeper, and pruning invalid branches early through state validation and rollback.",
    "thinking": "How does binary decision backtracking (include word vs skip word) find the highest scoring valid subset of words?",
    "steps": [
      "Restate **Maximum Score Words Formed by Letters**: select a subset of words that can be formed using given letter frequencies, maximizing total score.",
      "Count available letter frequencies into an array letterCount[26].",
      "At word index i, we have two recursive choices: skip word i or include word i.",
      "To include word i: verify all required characters exist in letterCount. If so, deduct counts, add word score, and recurse.",
      "Backtrack: restore letter counts after recursive exploration; return maximum score achieved across all subsets."
    ],
    "flow": [
      "Letter frequency count",
      "Branch 1: skip word i",
      "Can form word i? Deduct letters",
      "Branch 2: include word i",
      "Backtrack & restore letters"
    ],
    "description": "<p>Given a list of <code>words</code>, list of&nbsp; single&nbsp;<code>letters</code> (might be repeating)&nbsp;and <code>score</code>&nbsp;of every character.</p>\n\n<p>Return the maximum score of <strong>any</strong> valid set of words formed by using the given letters (<code>words[i]</code> cannot be used two&nbsp;or more times).</p>\n\n<p>It is not necessary to use all characters in <code>letters</code> and each letter can only be used once. Score of letters&nbsp;<code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, <code>&#39;c&#39;</code>, ... ,<code>&#39;z&#39;</code> is given by&nbsp;<code>score[0]</code>, <code>score[1]</code>, ... , <code>score[25]</code> respectively.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> words = [&quot;dog&quot;,&quot;cat&quot;,&quot;dad&quot;,&quot;good&quot;], letters = [&quot;a&quot;,&quot;a&quot;,&quot;c&quot;,&quot;d&quot;,&quot;d&quot;,&quot;d&quot;,&quot;g&quot;,&quot;o&quot;,&quot;o&quot;], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]\n<strong>Output:</strong> 23\n<strong>Explanation:</strong>\nScore  a=1, c=9, d=5, g=3, o=2\nGiven letters, we can form the words &quot;dad&quot; (5+1+5) and &quot;good&quot; (3+2+2+5) with a score of 23.\nWords &quot;dad&quot; and &quot;dog&quot; only get a score of 21.</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> words = [&quot;xxxz&quot;,&quot;ax&quot;,&quot;bx&quot;,&quot;cx&quot;], letters = [&quot;z&quot;,&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;x&quot;,&quot;x&quot;,&quot;x&quot;], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]\n<strong>Output:</strong> 27\n<strong>Explanation:</strong>\nScore  a=4, b=4, c=4, x=5, z=10\nGiven letters, we can form the words &quot;ax&quot; (4+5), &quot;bx&quot; (4+5) and &quot;cx&quot; (4+5) with a score of 27.\nWord &quot;xxxz&quot; only get a score of 25.</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> words = [&quot;leetcode&quot;], letters = [&quot;l&quot;,&quot;e&quot;,&quot;t&quot;,&quot;c&quot;,&quot;o&quot;,&quot;d&quot;], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong>\nLetter &quot;e&quot; can only be used once.</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= words.length &lt;= 14</code></li>\n\t<li><code>1 &lt;= words[i].length &lt;= 15</code></li>\n\t<li><code>1 &lt;= letters.length &lt;= 100</code></li>\n\t<li><code>letters[i].length == 1</code></li>\n\t<li><code>score.length ==&nbsp;26</code></li>\n\t<li><code>0 &lt;= score[i] &lt;= 10</code></li>\n\t<li><code>words[i]</code>, <code>letters[i]</code>&nbsp;contains only lower case English letters.</li>\n</ul>\n",
    "pythonCode": "from collections import Counter\n\ndef maxScoreWords(words: list[str], letters: list[str], score: list[int]) -> int:\n    letter_cnt = Counter(letters)\n    word_scores = [sum(score[ord(c) - ord('a')] for c in w) for w in words]\n    word_counts = [Counter(w) for w in words]\n    n, ans = len(words), 0\n    for mask in range(1 << n):\n        cur_cnt, total, valid = Counter(), 0, True\n        for i in range(n):\n            if (mask >> i) & 1:\n                cur_cnt += word_counts[i]\n                total += word_scores[i]\n        if all(cur_cnt[c] <= letter_cnt[c] for c in cur_cnt):\n            ans = max(ans, total)\n    return ans",
    "codeLines": 16,
    "timeComplexity": "O(2^W * L)",
    "spaceComplexity": "O(W + alphabet)",
    "whyBetterThanBruteForce": "Because words length W is at most 14, there are only 2^14 = 16,384 possible subsets of words. Precomputing each word's letter frequency and score allows bitmask iteration from 0 to 2^W - 1. For each subset mask, verifying letter availability against letter_cnt takes O(26) = O(1) time, solving the problem in ~0.02s.",
    "edgeCasesAndBreakPoints": [
      "No words can be formed from available letters: returns 0.",
      "All words can be formed: returns sum of all word scores.",
      "W = 1: tests single word against letter counts.",
      "Duplicate letters in a word: Counter handles multi-count letter availability."
    ],
    "simConfig": {
      "type": "custom",
      "inputDisplay": "words = ['dog','cat','dad','good'], letters = ['a','a','c','d','d','d','g','o','o']",
      "array": [
        "'dog' (score 5)",
        "'cat' (score 9)",
        "'dad' (score 16)",
        "'good' (score 12)"
      ],
      "steps": [
        {
          "active": [
            2
          ],
          "vars": {
            "subset": "['dad']",
            "needed": "d:2, a:1",
            "score": 16
          },
          "msg": "Take 'dad': requires d:2, a:1. Score = 16. Available letters sufficient."
        },
        {
          "active": [
            3
          ],
          "vars": {
            "subset": "['good']",
            "needed": "g:1, o:2, d:1",
            "score": 12
          },
          "msg": "Take 'good': requires g:1, o:2, d:1. Score = 12."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "subset": "['dad', 'good']",
            "combinedScore": 28
          },
          "msg": "Combine 'dad' + 'good': requires d:3, a:1, g:1, o:2. All in letters pool! Score = 28."
        },
        {
          "active": [
            2,
            3
          ],
          "vars": {
            "maxScore": 23
          },
          "msg": "Optimal combination achieves max score = 23. Complete!"
        }
      ]
    }
  }
];
