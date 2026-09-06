// DSA 25 Patterns Interactive Lab Controller
const BLOG = "https://blog.sibansal.dev/the-only-25-patterns-you-need-to-master-dsa";
let current = 0, S = {}, codeRevealed = {};
const $ = id => document.getElementById(id);

function esc(x) {
  return String(x).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function formatMd(x) {
  return esc(x).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function flow(a) {
  return `<div class="flow">${a.map((x, i) => `<span class="node">${esc(x)}</span>${i < a.length - 1 ? '<span class="arrow">→</span>' : ''}`).join("")}</div>`;
}

function cells(a, active = []) {
  return `<div class="array">${a.map((x, i) => `<div class="cell ${active.includes(i) ? 'active' : ''}">${esc(x)}</div>`).join("")}</div>`;
}

function getDataset() {
  if (typeof DATA !== "undefined" && Array.isArray(DATA)) return DATA;
  if (typeof window !== "undefined" && Array.isArray(window.DATA)) return window.DATA;
  return [];
}

function copyProblemText() {
  const el = $("problem-content");
  if (!el) return;
  const text = (el.innerText || el.textContent || "").trim();
  navigator.clipboard.writeText(text).then(() => {
    const btn = $("copy-btn");
    if (btn) {
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Copied!</span>`;
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> <span>Copy Problem</span>`;
        btn.classList.remove("copied");
      }, 2000);
    }
  }).catch(() => {});
}

function copyPythonCode() {
  const dataset = getDataset();
  if (!dataset.length || !dataset[current] || !dataset[current].pythonCode) return;
  const code = dataset[current].pythonCode;
  navigator.clipboard.writeText(code).then(() => {
    const btn = $("copy-code-btn");
    if (btn) {
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Copied!</span>`;
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> <span>Copy Code</span>`;
        btn.classList.remove("copied");
      }, 2000);
    }
  }).catch(() => {});
}

function toggleRevealCode() {
  codeRevealed[current] = !codeRevealed[current];
  const container = $("code-container");
  const btn = $("reveal-btn");
  const label = $("reveal-label");
  if (container) {
    if (codeRevealed[current]) {
      container.classList.add("revealed");
      if (label) label.textContent = "Hide Code";
      if (btn) btn.classList.add("active");
    } else {
      container.classList.remove("revealed");
      if (label) label.textContent = "Reveal Code";
      if (btn) btn.classList.remove("active");
    }
  }
}

function renderHighlightedCode(code) {
  if (!code) return "";
  const lines = code.split("\n");
  return lines.map((line, idx) => {
    let escLine = esc(line);
    // highlight keywords
    escLine = escLine.replace(/\b(def|class|return|if|elif|else|while|for|in|and|or|not|is|break|continue|yield|lambda|try|except|finally|raise|import|from|as|nonlocal|global|pass|with)\b/g, '<span class="tok-kw">$1</span>');
    // highlight builtins / types
    escLine = escLine.replace(/\b(int|float|str|bool|list|dict|set|tuple|len|range|enumerate|zip|min|max|sum|abs|reversed|sorted|any|all|map|filter|print|True|False|None|self)\b/g, '<span class="tok-type">$1</span>');
    // highlight library data structures & functions
    escLine = escLine.replace(/\b(deque|Counter|defaultdict|heapq|heappush|heappop|heapify|bisect_left|bisect_right|ListNode|TreeNode|Node|Codec|Skiplist|AllOne|MedianFinder)\b/g, '<span class="tok-fn">$1</span>');
    // highlight numbers
    escLine = escLine.replace(/\b(\d+)\b/g, '<span class="tok-num">$1</span>');
    // highlight comments
    escLine = escLine.replace(/(#.*)$/g, '<span class="tok-comment">$1</span>');
    
    return `<div class="code-line"><span class="line-num">${idx + 1}</span><span class="line-code">${escLine}</span></div>`;
  }).join("");
}

function render() {
  const dataset = getDataset();
  if (!dataset.length || !dataset[current]) return;
  let p = dataset[current];
  const diffClass = (p.difficulty || "medium").toLowerCase();
  const isRevealed = !!codeRevealed[current];

  $("app").innerHTML = `
  <section class="card">
    <div class="card-meta-row">
      <div>
        <span class="badge">${esc(p.pattern)}</span><span class="badge ${diffClass}">${esc(p.difficulty)}</span>
      </div>
      <span class="counter">Problem ${current + 1}/${dataset.length}</span>
    </div>
    <h2 class="problem-title">${esc(p.title)}</h2>
    <p class="problem-links"><a target="_blank" rel="noopener noreferrer" href="${esc(p.url)}">LeetCode ↗</a> · <a target="_blank" rel="noopener noreferrer" href="${BLOG}">Blog ↗</a></p>
  </section>

  <section class="card problem-statement-card">
    <div class="card-title-row">
      <h3>Problem Statement</h3>
      <button class="btn-copy" id="copy-btn" onclick="copyProblemText()" title="Copy problem statement to clipboard">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        <span>Copy Problem</span>
      </button>
    </div>
    <div class="problem-statement" id="problem-content">${p.description || '<p>Problem statement description is currently unavailable.</p>'}</div>
  </section>

  <section class="card">
    <h3>Pattern introduction</h3>
    <p>${formatMd(p.intro)}</p>
  </section>

  <section class="card">
    <h3>Flow chart</h3>
    ${flow(p.flow)}
  </section>

  <section class="card">
    <h3>Thinking</h3>
    <ol>
      <li>${formatMd(p.thinking)}</li>
      <li>What invariant/state must remain true after every step?</li>
      <li>Which edge case would break a naive implementation?</li>
      <li>Can you explain why the optimization does not lose a valid answer?</li>
    </ol>
  </section>

  <section class="card">
    <h3>Solution steps</h3>
    <ol>${p.steps.map(x => `<li>${formatMd(x)}</li>`).join("")}</ol>
  </section>

  <section class="card">
    <div class="card-title-row">
      <h3>Interactive simulation</h3>
      <span class="badge badge-lines">Algorithm State Machine</span>
    </div>
    <p class="small">Step through the concrete mechanics of the optimal Python solution using a real LeetCode test input.</p>
    <div id="sim"></div>
  </section>

  <section class="card brute-force-card">
    <div class="card-title-row">
      <h3>Why This Beats Brute Force</h3>
      <span class="badge complexity-compare">${esc(p.timeComplexity || "O(N)")} vs Brute Force</span>
    </div>
    <p class="brute-force-explanation">${formatMd(p.whyBetterThanBruteForce || "The optimal pattern prunes redundant search branches by establishing a monotonic invariant, avoiding re-evaluations and lowering complexity from polynomial to optimal bounds.")}</p>
  </section>

  <section class="card edge-cases-card">
    <h3>Edge Cases & Break Points</h3>
    <ul class="edge-cases-list">
      ${(p.edgeCasesAndBreakPoints || [
        "Empty collection or single element.",
        "Monotonic slopes or duplicated values.",
        "Boundary index overflow / underflow.",
        "Extreme constraint magnitudes."
      ]).map(ec => `<li>${formatMd(ec)}</li>`).join("")}
    </ul>
  </section>

  <section class="card reveal-code-card" id="code-card">
    <div class="card-title-row">
      <div class="code-title-group">
        <h3>Python Solution</h3>
        <div class="code-meta-badges">
          <span class="badge badge-lines">${p.codeLines || (p.pythonCode ? p.pythonCode.split('\n').length : 0)} lines</span>
          <span class="badge badge-time">Time: ${esc(p.timeComplexity || "O(N)")}</span>
          <span class="badge badge-space">Space: ${esc(p.spaceComplexity || "O(1)")}</span>
        </div>
      </div>
      <div class="code-actions">
        <button class="btn-reveal ${isRevealed ? 'active' : ''}" id="reveal-btn" onclick="toggleRevealCode()" title="Toggle solution visibility">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span id="reveal-label">${isRevealed ? "Hide Code" : "Reveal Code"}</span>
        </button>
        <button class="btn-copy" id="copy-code-btn" onclick="copyPythonCode()" title="Copy Python code to clipboard">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Copy Code</span>
        </button>
      </div>
    </div>
    <div class="code-container ${isRevealed ? 'revealed' : ''}" id="code-container">
      <pre class="code-block"><code class="language-python">${renderHighlightedCode(p.pythonCode || '# Python solution coming soon')}</code></pre>
    </div>
  </section>
  `;

  S = { stepIdx: 0 };
  draw();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function draw() {
  let s = $("sim"), ds = getDataset();
  if (!s || !ds[current]) return;
  let p = ds[current];

  // Custom problem-specific simulation
  if (p.simConfig && Array.isArray(p.simConfig.steps) && p.simConfig.steps.length) {
    const steps = p.simConfig.steps;
    const idx = Math.max(0, Math.min(steps.length - 1, S.stepIdx ?? 0));
    const stepData = steps[idx];
    const arr = p.simConfig.array || [];
    const active = stepData.active || [];

    let arrayHtml = "";
    if (arr.length) {
      arrayHtml = `<div class="array">${arr.map((val, i) => {
        const isActive = active.includes(i);
        return `<div class="cell ${isActive ? 'active' : ''}">${esc(val)}</div>`;
      }).join("")}</div>`;
    }

    let varsHtml = "";
    if (stepData.vars && Object.keys(stepData.vars).length) {
      varsHtml = `<div class="sim-vars-row">${Object.entries(stepData.vars).map(([k, v]) => `
        <div class="sim-var-card">
          <span class="sim-var-name">${esc(k)}:</span>
          <span class="sim-var-val">${esc(v)}</span>
        </div>
      `).join("")}</div>`;
    }

    s.innerHTML = `
      <div class="sim-input-box">
        <span class="sim-input-label">Sample Input:</span>
        <code class="sim-input-code">${esc(p.simConfig.inputDisplay || "Standard Example")}</code>
      </div>
      ${arrayHtml}
      ${varsHtml}
      <div class="sim-controls-row">
        <div class="sim-step-badge">Step ${idx + 1} of ${steps.length}</div>
        <div class="controls">
          <button class="btn-sim" onclick="prevStep()" ${idx === 0 ? 'disabled' : ''}>← Prev</button>
          <button class="btn-sim btn-sim-primary" onclick="step()" ${idx >= steps.length - 1 ? 'disabled' : ''}>Step →</button>
          <button class="btn-sim" onclick="reset()">Reset</button>
        </div>
      </div>
      <div id="status" class="status">${esc(stepData.msg || "Executing step...")}</div>
    `;
    return;
  }

  // Fallback simulation for generic categories
  let t = p.short;
  if (t === "Two Pointers") { let a = [1, 2, 4, 7, 11], l = S.l ?? 0, r = S.r ?? 4; s.innerHTML = cells(a, [l, r]) + `<p>left=${l}, right=${r}</p>` }
  else if (t === "Fast & Slow Pointers") { let a = ["1", "2", "3", "4", "5", "3*"], l = S.l ?? 0, r = S.r ?? 0; s.innerHTML = cells(a, [l, r]) + `<p>slow=${l}, fast=${r}</p>` }
  else if (t === "Sliding Window") { let a = [..."abcabcbb"], l = S.l ?? 0, r = S.r ?? -1; s.innerHTML = cells(a, [...Array(Math.max(0, r - l + 1))].map((_, i) => l + i)) + `<p>window=[${l},${r}] · state=${[...(S.set || new Set())].join(", ")}</p>` }
  else if (t === "Prefix Sum") { s.innerHTML = cells([2, 4, 3, 5]) + `<p>prefix: ${(S.p ?? [0]).join(" → ")}</p>` }
  else if (t === "HashMap") { s.innerHTML = cells([2, 7, 11, 15], [S.i ?? 0]) + `<pre>${JSON.stringify(S.map ?? {}, null, 2)}</pre>` }
  else if (t === "Stack") { let a = [2, 1, 2, 4, 3]; s.innerHTML = cells(a, [S.i ?? 0]) + `<p>stack: ${(S.st ?? []).map(i => a[i]).join(" → ") || "empty"}</p>` }
  else if (t === "Queue" || t === "BFS") { s.innerHTML = `<p>processed: ${(S.done ?? []).join(" → ") || "—"}</p><p>queue: [${(S.q ?? ["A"]).join(", ")}]</p>` }
  else if (t === "Sorting") { s.innerHTML = cells(S.a ?? [5, 2, 4, 1, 3], [S.i ?? 1]) }
  else if (t === "Binary Search") { s.innerHTML = cells([3, 7, 11, 15, 19, 23, 27, 31], S.m == null || S.m < 0 ? [] : [S.m]) + `<p>low=${S.l ?? 0} · mid=${S.m ?? "—"} · high=${S.r ?? 7}</p>` }
  else if (t === "Merge Intervals") { s.innerHTML = `<p>next: ${JSON.stringify([[1, 3], [2, 6], [8, 10], [9, 12]][S.i ?? 0] ?? "done")}</p><p>merged: ${JSON.stringify(S.res ?? [])}</p>` }
  else if (t === "Bitwise Operations") { let a = [4, 1, 2, 1, 2]; s.innerHTML = cells(a, [S.i ?? 0]) + `<p>XOR accumulator: ${S.x ?? 0}</p>` }
  else if (t === "Heap / Priority Queue") { let h = [...(S.h ?? [7, 2, 5, 1, 9, 3])].sort((a, b) => a - b); s.innerHTML = `<p>heap: [${h.join(", ")}]</p><p>output: ${(S.out ?? []).join(" → ") || "—"}</p>` }
  else if (t === "Top K Elements") { s.innerHTML = cells([7, 1, 9, 2, 8, 3, 6], [S.i ?? 0]) + `<p>retained K=3: ${[...(S.k ?? [])].sort((a, b) => b - a).join(", ")}</p>` }
  else if (t === "K-Way Merge") { let L = [[1, 4, 7], [2, 5, 8], [3, 6, 9]], h = S.heads ?? [0, 0, 0]; s.innerHTML = L.map((a, j) => `<div>${a.map((v, k) => `<span class="cell ${h[j] === k ? 'active' : ''}" style="display:inline-flex">${v}</span>`).join(" ")}</div>`).join("") + `<p>output: ${(S.out ?? []).join(" → ")}</p>` }
  else if (t === "Trees & Tree Traversals") { s.innerHTML = `<div style="text-align:center;font-size:25px">4<br>↙　↘<br><span style="font-size:20px">2　　 6</span></div><p>visited: ${(S.out ?? []).join(" → ")}</p>` }
  else if (t === "DFS" || t === "Graphs") { s.innerHTML = `<p>stack: [${(S.st ?? ["A"]).join(", ")}]</p><p>visited: ${(S.vis ?? []).join(" → ") || "—"}</p>` }
  else if (t === "Greedy") { let a = [[1, 2], [2, 3], [3, 4], [0, 6], [5, 7]]; s.innerHTML = a.map((x, j) => `<span class="cell ${((S.sel ?? []).includes(j)) ? 'good' : ''}" style="display:inline-flex">[${x}]</span>`).join(" ") + `<p>considering: ${JSON.stringify(a[S.i ?? 0] ?? "done")}</p>` }
  else if (t === "Trie") { s.innerHTML = `<div class="box">root → c → a → {t,r,n}</div><p>path: ${(S.path ?? []).join(" → ") || "root"}</p>` }
  else if (t === "Topological Sort") { s.innerHTML = `<p>indegree: ${JSON.stringify(S.indeg ?? { A: 0, B: 1, C: 1, D: 2 })}</p><p>queue: [${(S.q ?? ["A"]).join(", ")}]</p><p>order: ${(S.out ?? []).join(" → ")}</p>` }
  else if (t === "Dijkstra's Algorithm") { s.innerHTML = `<p>distances: ${Object.entries(S.d ?? { A: 0, B: Infinity, C: Infinity }).map(([k, v]) => `${k}=${v === Infinity ? "∞" : v}`).join(" · ")}</p><p>finalized: ${(S.done ?? []).join(" → ")}</p>` }
  else if (t === "1D DP") { s.innerHTML = cells([2, 7, 9, 3, 1], [S.i ?? 2]) + `<p>dp: ${(S.dp ?? [0, 2]).join(", ")}</p>` }
  else if (t === "2D DP") { let d = S.d ?? [[1, null, null], [null, null, null], [null, null, null]]; s.innerHTML = d.map(r => `<div class="array">${r.map(v => `<div class="cell ${v != null ? 'good' : ''}">${v ?? "?"}</div>`).join("")}</div>`).join("") }
  else if (t === "Backtracking") { s.innerHTML = `<p>current path: [${(S.path ?? []).join(", ")}]</p><p>solutions: ${(S.outs ?? []).map(x => "[" + x.join(",") + "]").join(" ") || "—"}</p>` }

  s.innerHTML += `
    <div class="controls">
      <button onclick="step()">Step</button>
      <button onclick="reset()">Reset</button>
    </div>
    <div id="status" class="status">Press Step to advance generic simulation.</div>
  `;
}

function reset() {
  let ds = getDataset();
  if (ds[current] && ds[current].simConfig) {
    S.stepIdx = 0;
    draw();
  } else {
    S = {};
    draw();
    if ($("status")) $("status").textContent = "Reset.";
  }
}

function prevStep() {
  let ds = getDataset();
  if (ds[current] && ds[current].simConfig && ds[current].simConfig.steps) {
    S.stepIdx = Math.max(0, (S.stepIdx ?? 0) - 1);
    draw();
  }
}

function step() {
  let ds = getDataset();
  if (!ds[current]) return;
  let p = ds[current];

  // Custom problem step
  if (p.simConfig && Array.isArray(p.simConfig.steps) && p.simConfig.steps.length) {
    const total = p.simConfig.steps.length;
    if ((S.stepIdx ?? 0) < total - 1) {
      S.stepIdx = (S.stepIdx ?? 0) + 1;
      draw();
    }
    return;
  }

  // Fallback stepping
  let t = p.short;
  if (t === "Two Pointers") {
    S.l ??= 0; S.r ??= 4; let a = [1, 2, 4, 7, 11];
    if (S.l >= S.r) return msg("Search exhausted.");
    let sum = a[S.l] + a[S.r];
    if (sum < 9) { S.l++; msg(`${sum}<9 → move left rightward.`); }
    else if (sum > 9) { S.r--; msg(`${sum}>9 → move right leftward.`); }
    else { msg("Found target pair."); S.l = S.r; }
    draw(); return;
  }
  if (t === "Fast & Slow Pointers") {
    S.l ??= 0; S.r ??= 0; S.l++; S.r = (S.r + 2) % 6;
    draw(); msg(`slow=${S.l}, fast=${S.r}; relative speed reveals repeated state.`); return;
  }
  if (t === "Sliding Window") {
    let a = [..."abcabcbb"]; S.l ??= 0; S.r ??= -1; S.set ??= new Set();
    if (S.r >= a.length - 1) return msg("Done.");
    S.r++; let c = a[S.r];
    while (S.set.has(c)) S.set.delete(a[S.l++]);
    S.set.add(c); draw(); msg(`Add '${c}'; shrink left until the window is valid.`); return;
  }
  if (t === "Prefix Sum") {
    let a = [2, 4, 3, 5]; S.i ??= 0; S.p ??= [0];
    if (S.i >= a.length) return msg("Prefix complete.");
    S.p.push(S.p.at(-1) + a[S.i++]); draw(); msg("Cumulative state updated."); return;
  }
  if (t === "HashMap") {
    let a = [2, 7, 11, 15], target = 9; S.i ??= 0; S.map ??= {};
    if (S.i >= a.length) return msg("Done.");
    let x = a[S.i], need = target - x;
    if (S.map[need] != null) { msg(`Found ${need} for ${x}.`); S.i = a.length; }
    else { S.map[x] = S.i++; msg(`Store ${x}; future need is ${need}.`); }
    draw(); return;
  }
  if (t === "Stack") {
    let a = [2, 1, 2, 4, 3]; S.i ??= 0; S.st ??= [];
    if (S.i >= a.length) return msg("Done.");
    let x = a[S.i], r = [];
    while (S.st.length && a[S.st.at(-1)] < x) {
      let j = S.st.pop(); r.push(`${a[j]}→${x}`);
    }
    S.st.push(S.i++); draw(); msg(r.length ? `Resolved ${r.join(", ")}.` : `Push ${x}; unresolved.`); return;
  }
  if (t === "Queue" || t === "BFS") {
    let e = { A: ["B", "C"], B: ["D"], C: ["E"], D: [], E: [] };
    S.q ??= ["A"]; S.done ??= []; S.seen ??= new Set(["A"]);
    if (!S.q.length) return msg("Queue empty.");
    let x = S.q.shift(); S.done.push(x);
    for (let y of e[x]) if (!S.seen.has(y)) { S.seen.add(y); S.q.push(y); }
    draw(); msg(`Process ${x}; enqueue unseen neighbors.`); return;
  }
  if (t === "Sorting") {
    S.a ??= [5, 2, 4, 1, 3]; S.i ??= 1;
    if (S.i >= S.a.length) return msg("Sorted.");
    let a = S.a, i = S.i, x = a[i], j = i - 1;
    while (j >= 0 && a[j] > x) { a[j + 1] = a[j]; j--; }
    a[j + 1] = x; S.i++; draw(); msg(`Inserted ${x} into the sorted prefix.`); return;
  }
  if (t === "Binary Search") {
    let a = [3, 7, 11, 15, 19, 23, 27, 31]; S.l ??= 0; S.r ??= 7;
    if (S.l > S.r) return msg("Not found.");
    S.m = Math.floor((S.l + S.r) / 2); let x = a[S.m];
    if (x === 23) { draw(); return msg("Found target 23."); }
    if (x < 23) { S.l = S.m + 1; msg(`${x}<23 → discard left half.`); }
    else { S.r = S.m - 1; msg(`${x}>23 → discard right half.`); }
    draw(); return;
  }
  if (t === "Merge Intervals") {
    let a = [[1, 3], [2, 6], [8, 10], [9, 12]]; S.i ??= 0; S.res ??= [];
    if (S.i >= a.length) return msg("Merged.");
    let x = a[S.i++], last = S.res.at(-1);
    if (!last || x[0] > last[1]) S.res.push([...x]);
    else last[1] = Math.max(last[1], x[1]);
    draw(); msg(`Processed ${JSON.stringify(x)}.`); return;
  }
  if (t === "Bitwise Operations") {
    let a = [4, 1, 2, 1, 2]; S.i ??= 0; S.x ??= 0;
    if (S.i >= a.length) return msg(`Answer=${S.x}`);
    S.x ^= a[S.i++]; draw(); msg("XOR cancels equal pairs."); return;
  }
  if (t === "Heap / Priority Queue") {
    S.h ??= [7, 2, 5, 1, 9, 3]; S.out ??= [];
    if (!S.h.length) return msg("Done.");
    S.h.sort((a, b) => a - b); S.out.push(S.h.shift());
    draw(); msg(`Pop current best=${S.out.at(-1)}.`); return;
  }
  if (t === "Top K Elements") {
    let a = [7, 1, 9, 2, 8, 3, 6]; S.i ??= 0; S.k ??= [];
    if (S.i >= a.length) return msg("Done.");
    S.k.push(a[S.i++]); S.k.sort((a, b) => a - b);
    if (S.k.length > 3) S.k.shift();
    draw(); msg("Retain only the strongest K."); return;
  }
  if (t === "K-Way Merge") {
    let L = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]; S.heads ??= [0, 0, 0]; S.out ??= [];
    let best = Infinity, bi = -1;
    for (let j = 0; j < 3; j++) {
      let k = S.heads[j];
      if (k < 3 && L[j][k] < best) { best = L[j][k]; bi = j; }
    }
    if (bi < 0) return msg("Merged.");
    S.out.push(best); S.heads[bi]++; draw(); msg(`Pop ${best}; advance source ${bi + 1}.`); return;
  }
  if (t === "Trees & Tree Traversals") {
    let o = [2, 4, 6]; S.i ??= 0; S.out ??= [];
    if (S.i >= o.length) return msg("Traversal complete.");
    S.out.push(o[S.i++]); draw(); msg("Visit according to traversal order."); return;
  }
  if (t === "DFS" || t === "Graphs") {
    let e = { A: ["B", "C"], B: ["D"], C: [], D: [] };
    S.st ??= ["A"]; S.vis ??= [];
    if (!S.st.length) return msg("Traversal complete.");
    let x = S.st.pop();
    if (S.vis.includes(x)) return step();
    S.vis.push(x);
    for (let y of [...e[x]].reverse()) if (!S.vis.includes(y)) S.st.push(y);
    draw(); msg(`Visit ${x}; go deeper before backtracking.`); return;
  }
  if (t === "Greedy") {
    let a = [[1, 2], [2, 3], [3, 4], [0, 6], [5, 7]];
    S.i ??= 0; S.sel ??= [];
    if (S.i >= a.length) return msg("Done.");
    let x = a[S.i], last = S.sel.length ? a[S.sel.at(-1)][1] : -Infinity, j = S.i++;
    if (x[0] >= last) { S.sel.push(j); msg(`Choose ${JSON.stringify(x)}; it finishes early and remains compatible.`); }
    else msg(`Skip ${JSON.stringify(x)}; overlaps current choice.`);
    draw(); return;
  }
  if (t === "Trie") {
    let a = ["c", "a", "t"], i = S.path?.length ?? 0;
    if (i >= a.length) return msg("Path complete.");
    S.path ??= []; S.path.push(a[i]); draw(); msg(`Follow/create '${a[i]}'; shared prefixes reuse nodes.`); return;
  }
  if (t === "Topological Sort") {
    let e = { A: ["B", "C"], B: ["D"], C: ["D"], D: [] };
    S.indeg ??= { A: 0, B: 1, C: 1, D: 2 }; S.q ??= ["A"]; S.out ??= [];
    if (!S.q.length) return msg("Complete or cycle detected.");
    let x = S.q.shift(); S.out.push(x);
    for (let y of e[x]) { S.indeg[y]--; if (S.indeg[y] === 0) S.q.push(y); }
    draw(); msg(`Remove ${x}; decrease dependent indegrees.`); return;
  }
  if (t === "Dijkstra's Algorithm") {
    S.d ??= { A: 0, B: Infinity, C: Infinity }; S.done ??= [];
    if (!S.done.includes("A")) { S.d.B = 2; S.d.C = 5; S.done.push("A"); }
    else if (!S.done.includes("B")) { S.d.C = 3; S.done.push("B"); }
    else if (!S.done.includes("C")) S.done.push("C");
    else return msg("Distances finalized.");
    draw(); msg("Relax edges from the closest finalized node."); return;
  }
  if (t === "1D DP") {
    let a = [2, 7, 9, 3, 1]; S.dp ??= [0, 2]; S.i ??= 2;
    if (S.i >= a.length) return msg("DP complete.");
    S.dp[S.i] = Math.max(S.dp[S.i - 1], S.dp[S.i - 2] + a[S.i]);
    S.i++; draw(); msg("Compute the next state from previous states."); return;
  }
  if (t === "2D DP") {
    let g = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
    S.d ??= [[1, null, null], [null, null, null], [null, null, null]];
    S.i ??= 0; S.j ??= 1;
    if (S.i >= 3) return msg("DP complete.");
    let i = S.i, j = S.j;
    S.d[i][j] = g[i][j] + Math.min(S.d[i - 1]?.[j] ?? Infinity, S.d[i]?.[j - 1] ?? Infinity);
    if (j === 2) { S.i++; S.j = 0; } else S.j++;
    draw(); msg("Fill from already-computed top/left states."); return;
  }
  if (t === "Backtracking") {
    let c = [1, 2]; S.path ??= []; S.outs ??= [];
    if (S.path.length === 2) { S.outs.push([...S.path]); S.path.pop(); draw(); msg("Record solution, undo, explore another branch."); return; }
    S.path.push(c[S.path.length]); draw(); msg("Choose → explore deeper → undo later."); return;
  }
}

function msg(x) {
  const statusEl = $("status");
  if (statusEl) statusEl.textContent = x;
}

function setupSidebar() {
  const toggleBtn = $("sidebar-toggle");
  const fabBtn = $("mobile-fab-toggle");
  const closeBtn = $("aside-close");
  const backdrop = $("sidebar-backdrop");
  const nav = $("nav");

  function isMobile() {
    return window.innerWidth <= 900;
  }

  function toggle() {
    if (isMobile()) {
      if (nav && nav.classList.contains("open")) {
        closeMobile();
      } else {
        openMobile();
      }
    } else {
      document.body.classList.toggle("sidebar-collapsed");
      const isCollapsed = document.body.classList.contains("sidebar-collapsed");
      try {
        localStorage.setItem("dsa_sidebar_collapsed", isCollapsed ? "1" : "0");
      } catch (e) {}
      updateToggleUI();
    }
  }

  function openMobile() {
    if (nav) nav.classList.add("open");
    if (backdrop) backdrop.classList.add("active");
    document.documentElement.classList.add("drawer-open");
    document.body.classList.add("drawer-open");
    updateToggleUI();
  }

  function closeMobile() {
    if (nav) nav.classList.remove("open");
    if (backdrop) backdrop.classList.remove("active");
    document.documentElement.classList.remove("drawer-open");
    document.body.classList.remove("drawer-open");
    updateToggleUI();
  }

  function updateToggleUI() {
    if (!toggleBtn) return;
    const label = toggleBtn.querySelector(".toggle-btn-label");
    if (isMobile()) {
      const isOpen = nav && nav.classList.contains("open");
      if (label) label.textContent = isOpen ? "Close" : "Problems";
      toggleBtn.classList.toggle("active", isOpen);
    } else {
      const isCollapsed = document.body.classList.contains("sidebar-collapsed");
      if (label) label.textContent = isCollapsed ? "Show Problems" : "Hide Problems";
      toggleBtn.classList.toggle("active", !isCollapsed);
    }
  }

  if (!isMobile()) {
    try {
      if (localStorage.getItem("dsa_sidebar_collapsed") === "1") {
        document.body.classList.add("sidebar-collapsed");
      }
    } catch (e) {}
  }
  updateToggleUI();

  if (toggleBtn) toggleBtn.onclick = toggle;
  if (fabBtn) fabBtn.onclick = toggle;
  if (closeBtn) closeBtn.onclick = () => {
    if (isMobile()) {
      closeMobile();
    } else {
      document.body.classList.add("sidebar-collapsed");
      try { localStorage.setItem("dsa_sidebar_collapsed", "1"); } catch(e){}
      updateToggleUI();
    }
  };
  if (backdrop) backdrop.onclick = closeMobile;

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      if (backdrop) backdrop.classList.remove("active");
      document.body.classList.remove("drawer-open");
      if (nav) nav.classList.remove("open");
    }
    updateToggleUI();
  });

  window.closeSidebarIfMobile = () => {
    if (isMobile()) {
      closeMobile();
    }
  };
}

function init() {
  const nav = document.querySelector("#nav");
  const dataset = getDataset();
  if (!nav || !dataset || !dataset.length) return;
  nav.innerHTML = "";

  // Top header with counter & close button
  let topBar = document.createElement("div");
  topBar.className = "aside-top-bar";
  topBar.innerHTML = `
    <span class="aside-heading">Interactive Problems (${dataset.length})</span>
    <button class="aside-close-btn" id="aside-close" aria-label="Collapse sidebar" title="Collapse sidebar">✕</button>
  `;
  nav.appendChild(topBar);

  let q = document.createElement("input");
  q.className = "search";
  q.placeholder = `Search all ${dataset.length} problems…`;
  q.oninput = () => {
    const val = q.value.toLowerCase();
    document.querySelectorAll("aside button.problem-btn").forEach(b => {
      b.style.display = b.textContent.toLowerCase().includes(val) ? "block" : "none";
    });
  };
  nav.appendChild(q);

  let listContainer = document.createElement("div");
  listContainer.className = "aside-list";
  let last = "";
  dataset.forEach((p, i) => {
    if (p.pattern !== last) {
      let g = document.createElement("div");
      g.className = "group";
      g.textContent = p.pattern;
      listContainer.appendChild(g);
      last = p.pattern;
    }
    let b = document.createElement("button");
    b.className = "problem-btn";
    b.textContent = `${i + 1}. ${p.title} (${p.difficulty})`;
    b.onclick = () => {
      current = i;
      document.querySelectorAll("aside button.problem-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      render();
      if (typeof window.closeSidebarIfMobile === "function") {
        window.closeSidebarIfMobile();
      }
    };
    listContainer.appendChild(b);
  });
  nav.appendChild(listContainer);

  const firstBtn = document.querySelectorAll("aside button.problem-btn")[0];
  if (firstBtn) firstBtn.classList.add("active");
  render();
  setupSidebar();
}

window.step = step;
window.prevStep = prevStep;
window.reset = reset;
window.render = render;
window.copyProblemText = copyProblemText;
window.copyPythonCode = copyPythonCode;
window.toggleRevealCode = toggleRevealCode;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
