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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

if (typeof window !== "undefined") {
  window.SUPER_HARD_DATA = SUPER_HARD_DATA;
}
