// DSA 25 Patterns Interactive Lab Controller
const BLOG = "https://blog.sibansal.dev/the-only-25-patterns-you-need-to-master-dsa";
let current = 0, S = {};
const $ = id => document.getElementById(id);
function esc(x){return String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function flow(a){return `<div class="flow">${a.map((x,i)=>`<span class="node">${esc(x)}</span>${i<a.length-1?'<span class="arrow">→</span>':''}`).join("")}</div>`}
function cells(a,active=[]){return `<div class="array">${a.map((x,i)=>`<div class="cell ${active.includes(i)?'active':''}">${esc(x)}</div>`).join("")}</div>`}
function render(){
 let p=DATA[current];
 $("app").innerHTML=`<section class="card"><span class="badge">${esc(p.pattern)}</span><span class="badge">${esc(p.difficulty)}</span><span class="counter">Problem ${current+1}/99</span>
 <h2 class="problem-title">${esc(p.title)}</h2><p><a target="_blank" href="${esc(p.url)}">LeetCode</a> · <a target="_blank" href="${BLOG}">Blog</a></p></section>
 <section class="card"><h3>Pattern introduction</h3><p>${esc(p.intro)}</p></section>
 <section class="card"><h3>Flow chart</h3>${flow(p.flow)}</section>
 <section class="card"><h3>Thinking</h3><ol><li>${p.thinking}</li><li>What invariant/state must remain true after every step?</li><li>Which edge case would break a naive implementation?</li><li>Can you explain why the optimization does not lose a valid answer?</li></ol></section>
 <section class="card"><h3>Solution steps</h3><ol>${p.steps.map(x=>`<li>${x}</li>`).join("")}</ol></section>
 <section class="card"><h3>Interactive simulation</h3><p class="small">Step through the core mechanics before looking at the implementation. The visualization is tied to the problem's pattern family.</p><div id="sim"></div><div class="controls"><button onclick="step()">Step</button><button onclick="reset()">Reset</button></div><div id="status" class="status">Press Step to begin.</div></section>`;
 S={}; draw(); window.scrollTo({top:0,behavior:"smooth"});
}
function draw(){
 let s=$("sim"),t=DATA[current].short;if(!s)return;
 if(t==="Two Pointers"){let a=[1,2,4,7,11],l=S.l??0,r=S.r??4;s.innerHTML=cells(a,[l,r])+`<p>left=${l}, right=${r}</p>`}
 else if(t==="Fast & Slow Pointers"){let a=["1","2","3","4","5","3*"],l=S.l??0,r=S.r??0;s.innerHTML=cells(a,[l,r])+`<p>slow=${l}, fast=${r}</p>`}
 else if(t==="Sliding Window"){let a=[..."abcabcbb"],l=S.l??0,r=S.r??-1;s.innerHTML=cells(a,[...Array(Math.max(0,r-l+1))].map((_,i)=>l+i))+`<p>window=[${l},${r}] · state=${[...(S.set||new Set())].join(", ")}</p>`}
 else if(t==="Prefix Sum"){s.innerHTML=cells([2,4,3,5])+`<p>prefix: ${(S.p??[0]).join(" → ")}</p>`}
 else if(t==="HashMap"){s.innerHTML=cells([2,7,11,15],[S.i??0])+`<pre>${JSON.stringify(S.map??{},null,2)}</pre>`}
 else if(t==="Stack"){let a=[2,1,2,4,3];s.innerHTML=cells(a,[S.i??0])+`<p>stack: ${(S.st??[]).map(i=>a[i]).join(" → ")||"empty"}</p>`}
 else if(t==="Queue"||t==="BFS"){s.innerHTML=`<p>processed: ${(S.done??[]).join(" → ")||"—"}</p><p>queue: [${(S.q??["A"]).join(", ")}]</p>`}
 else if(t==="Sorting"){s.innerHTML=cells(S.a??[5,2,4,1,3],[S.i??1])}
 else if(t==="Binary Search"){s.innerHTML=cells([3,7,11,15,19,23,27,31],S.m==null||S.m<0?[]:[S.m])+`<p>low=${S.l??0} · mid=${S.m??"—"} · high=${S.r??7}</p>`}
 else if(t==="Merge Intervals"){s.innerHTML=`<p>next: ${JSON.stringify([[1,3],[2,6],[8,10],[9,12]][S.i??0]??"done")}</p><p>merged: ${JSON.stringify(S.res??[])}</p>`}
 else if(t==="Bitwise Operations"){let a=[4,1,2,1,2];s.innerHTML=cells(a,[S.i??0])+`<p>XOR accumulator: ${S.x??0}</p>`}
 else if(t==="Heap / Priority Queue"){let h=[...(S.h??[7,2,5,1,9,3])].sort((a,b)=>a-b);s.innerHTML=`<p>heap (visualized ordered): [${h.join(", ")}]</p><p>output: ${(S.out??[]).join(" → ")||"—"}</p>`}
 else if(t==="Top K Elements"){s.innerHTML=cells([7,1,9,2,8,3,6],[S.i??0])+`<p>retained K=3: ${[...(S.k??[])].sort((a,b)=>b-a).join(", ")}</p>`}
 else if(t==="K-Way Merge"){let L=[[1,4,7],[2,5,8],[3,6,9]],h=S.heads??[0,0,0];s.innerHTML=L.map((a,j)=>`<div>${a.map((v,k)=>`<span class="cell ${h[j]===k?'active':''}" style="display:inline-flex">${v}</span>`).join(" ")}</div>`).join("")+`<p>output: ${(S.out??[]).join(" → ")}</p>`}
 else if(t==="Trees & Tree Traversals"){s.innerHTML=`<div style="text-align:center;font-size:25px">4<br>↙　↘<br><span style="font-size:20px">2　　 6</span></div><p>visited: ${(S.out??[]).join(" → ")}</p>`}
 else if(t==="DFS"||t==="Graphs"){s.innerHTML=`<p>stack: [${(S.st??["A"]).join(", ")}]</p><p>visited: ${(S.vis??[]).join(" → ")||"—"}</p>`}
 else if(t==="Greedy"){let a=[[1,2],[2,3],[3,4],[0,6],[5,7]];s.innerHTML=a.map((x,j)=>`<span class="cell ${((S.sel??[]).includes(j))?'good':''}" style="display:inline-flex">[${x}]</span>`).join(" ")+`<p>considering: ${JSON.stringify(a[S.i??0]??"done")}</p>`}
 else if(t==="Trie"){s.innerHTML=`<div class="box">root → c → a → {t,r,n}</div><p>path: ${(S.path??[]).join(" → ")||"root"}</p>`}
 else if(t==="Topological Sort"){s.innerHTML=`<p>indegree: ${JSON.stringify(S.indeg??{A:0,B:1,C:1,D:2})}</p><p>queue: [${(S.q??["A"]).join(", ")}]</p><p>order: ${(S.out??[]).join(" → ")}</p>`}
 else if(t==="Dijkstra's Algorithm"){s.innerHTML=`<p>distances: ${Object.entries(S.d??{A:0,B:Infinity,C:Infinity}).map(([k,v])=>`${k}=${v===Infinity?"∞":v}`).join(" · ")}</p><p>finalized: ${(S.done??[]).join(" → ")}</p>`}
 else if(t==="1D DP"){s.innerHTML=cells([2,7,9,3,1],[S.i??2])+`<p>dp: ${(S.dp??[0,2]).join(", ")}</p>`}
 else if(t==="2D DP"){let d=S.d??[[1,null,null],[null,null,null],[null,null,null]];s.innerHTML=d.map(r=>`<div class="array">${r.map(v=>`<div class="cell ${v!=null?'good':''}">${v??"?"}</div>`).join("")}</div>`).join("")}
 else if(t==="Backtracking"){s.innerHTML=`<p>current path: [${(S.path??[]).join(", ")}]</p><p>solutions: ${(S.outs??[]).map(x=>"["+x.join(",")+"]").join(" ")||"—"}</p>`}
}
function reset(){S={};draw();$("status").textContent="Reset."}
function msg(x){$("status").textContent=x}
function step(){
 let t=DATA[current].short;
 if(t==="Two Pointers"){S.l??=0;S.r??=4;let a=[1,2,4,7,11];if(S.l>=S.r)return msg("Search exhausted.");let sum=a[S.l]+a[S.r];if(sum<9){S.l++;msg(`${sum}<9 → move left rightward.`)}else if(sum>9){S.r--;msg(`${sum}>9 → move right leftward.`)}else{msg("Found target pair.");S.l=S.r}draw();return}
 if(t==="Fast & Slow Pointers"){S.l??=0;S.r??=0;S.l++;S.r=(S.r+2)%6;draw();msg(`slow=${S.l}, fast=${S.r}; relative speed reveals repeated state.`);return}
 if(t==="Sliding Window"){let a=[..."abcabcbb"];S.l??=0;S.r??=-1;S.set??=new Set();if(S.r>=a.length-1)return msg("Done.");S.r++;let c=a[S.r];while(S.set.has(c))S.set.delete(a[S.l++]);S.set.add(c);draw();msg(`Add '${c}'; shrink left until the window is valid.`);return}
 if(t==="Prefix Sum"){let a=[2,4,3,5];S.i??=0;S.p??=[0];if(S.i>=a.length)return msg("Prefix complete.");S.p.push(S.p.at(-1)+a[S.i++]);draw();msg("Cumulative state updated.");return}
 if(t==="HashMap"){let a=[2,7,11,15],target=9;S.i??=0;S.map??={};if(S.i>=a.length)return msg("Done.");let x=a[S.i],need=target-x;if(S.map[need]!=null){msg(`Found ${need} for ${x}.`);S.i=a.length}else{S.map[x]=S.i++;msg(`Store ${x}; future need is ${need}.`)}draw();return}
 if(t==="Stack"){let a=[2,1,2,4,3];S.i??=0;S.st??=[];if(S.i>=a.length)return msg("Done.");let x=a[S.i],r=[];while(S.st.length&&a[S.st.at(-1)]<x){let j=S.st.pop();r.push(`${a[j]}→${x}`)}S.st.push(S.i++);draw();msg(r.length?`Resolved ${r.join(", ")}.`:`Push ${x}; unresolved.`);return}
 if(t==="Queue"||t==="BFS"){let e={A:["B","C"],B:["D"],C:["E"],D:[],E:[]};S.q??=["A"];S.done??=[];S.seen??=new Set(["A"]);if(!S.q.length)return msg("Queue empty.");let x=S.q.shift();S.done.push(x);for(let y of e[x])if(!S.seen.has(y)){S.seen.add(y);S.q.push(y)}draw();msg(`Process ${x}; enqueue unseen neighbors.`);return}
 if(t==="Sorting"){S.a??=[5,2,4,1,3];S.i??=1;if(S.i>=S.a.length)return msg("Sorted.");let a=S.a,i=S.i,x=a[i],j=i-1;while(j>=0&&a[j]>x){a[j+1]=a[j];j--}a[j+1]=x;S.i++;draw();msg(`Inserted ${x} into the sorted prefix.`);return}
 if(t==="Binary Search"){let a=[3,7,11,15,19,23,27,31];S.l??=0;S.r??=7;if(S.l>S.r)return msg("Not found.");S.m=Math.floor((S.l+S.r)/2);let x=a[S.m];if(x===23){draw();return msg("Found target 23.")}if(x<23){S.l=S.m+1;msg(`${x}<23 → discard left half.`)}else{S.r=S.m-1;msg(`${x}>23 → discard right half.`)}draw();return}
 if(t==="Merge Intervals"){let a=[[1,3],[2,6],[8,10],[9,12]];S.i??=0;S.res??=[];if(S.i>=a.length)return msg("Merged.");let x=a[S.i++],last=S.res.at(-1);if(!last||x[0]>last[1])S.res.push([...x]);else last[1]=Math.max(last[1],x[1]);draw();msg(`Processed ${JSON.stringify(x)}.`);return}
 if(t==="Bitwise Operations"){let a=[4,1,2,1,2];S.i??=0;S.x??=0;if(S.i>=a.length)return msg(`Answer=${S.x}`);S.x^=a[S.i++];draw();msg("XOR cancels equal pairs.");return}
 if(t==="Heap / Priority Queue"){S.h??=[7,2,5,1,9,3];S.out??=[];if(!S.h.length)return msg("Done.");S.h.sort((a,b)=>a-b);S.out.push(S.h.shift());draw();msg(`Pop current best=${S.out.at(-1)}.`);return}
 if(t==="Top K Elements"){let a=[7,1,9,2,8,3,6];S.i??=0;S.k??=[];if(S.i>=a.length)return msg("Done.");S.k.push(a[S.i++]);S.k.sort((a,b)=>a-b);if(S.k.length>3)S.k.shift();draw();msg("Retain only the strongest K.");return}
 if(t==="K-Way Merge"){let L=[[1,4,7],[2,5,8],[3,6,9]];S.heads??=[0,0,0];S.out??=[];let best=Infinity,bi=-1;for(let j=0;j<3;j++){let k=S.heads[j];if(k<3&&L[j][k]<best){best=L[j][k];bi=j}}if(bi<0)return msg("Merged.");S.out.push(best);S.heads[bi]++;draw();msg(`Pop ${best}; advance source ${bi+1}.`);return}
 if(t==="Trees & Tree Traversals"){let o=[2,4,6];S.i??=0;S.out??=[];if(S.i>=o.length)return msg("Traversal complete.");S.out.push(o[S.i++]);draw();msg("Visit according to traversal order.");return}
 if(t==="DFS"||t==="Graphs"){let e={A:["B","C"],B:["D"],C:[],D:[]};S.st??=["A"];S.vis??=[];if(!S.st.length)return msg("Traversal complete.");let x=S.st.pop();if(S.vis.includes(x))return step();S.vis.push(x);for(let y of [...e[x]].reverse())if(!S.vis.includes(y))S.st.push(y);draw();msg(`Visit ${x}; go deeper before backtracking.`);return}
 if(t==="Greedy"){let a=[[1,2],[2,3],[3,4],[0,6],[5,7]];S.i??=0;S.sel??=[];if(S.i>=a.length)return msg("Done.");let x=a[S.i],last=S.sel.length?a[S.sel.at(-1)][1]:-Infinity,j=S.i++;if(x[0]>=last){S.sel.push(j);msg(`Choose ${JSON.stringify(x)}; it finishes early and remains compatible.`)}else msg(`Skip ${JSON.stringify(x)}; overlaps current choice.`);draw();return}
 if(t==="Trie"){let a=["c","a","t"],i=S.path?.length??0;if(i>=a.length)return msg("Path complete.");S.path??=[];S.path.push(a[i]);draw();msg(`Follow/create '${a[i]}'; shared prefixes reuse nodes.`);return}
 if(t==="Topological Sort"){let e={A:["B","C"],B:["D"],C:["D"],D:[]};S.indeg??={A:0,B:1,C:1,D:2};S.q??=["A"];S.out??=[];if(!S.q.length)return msg("Complete or cycle detected.");let x=S.q.shift();S.out.push(x);for(let y of e[x]){S.indeg[y]--;if(S.indeg[y]===0)S.q.push(y)}draw();msg(`Remove ${x}; decrease dependent indegrees.`);return}
 if(t==="Dijkstra's Algorithm"){S.d??={A:0,B:Infinity,C:Infinity};S.done??=[];if(!S.done.includes("A")){S.d.B=2;S.d.C=5;S.done.push("A")}else if(!S.done.includes("B")){S.d.C=3;S.done.push("B")}else if(!S.done.includes("C"))S.done.push("C");else return msg("Distances finalized.");draw();msg("Relax edges from the closest finalized node.");return}
 if(t==="1D DP"){let a=[2,7,9,3,1];S.dp??=[0,2];S.i??=2;if(S.i>=a.length)return msg("DP complete.");S.dp[S.i]=Math.max(S.dp[S.i-1],S.dp[S.i-2]+a[S.i]);S.i++;draw();msg("Compute the next state from previous states.");return}
 if(t==="2D DP"){let g=[[1,3,1],[1,5,1],[4,2,1]];S.d??=[[1,null,null],[null,null,null],[null,null,null]];S.i??=0;S.j??=1;if(S.i>=3)return msg("DP complete.");let i=S.i,j=S.j;S.d[i][j]=g[i][j]+Math.min(S.d[i-1]?.[j]??Infinity,S.d[i]?.[j-1]??Infinity);if(j===2){S.i++;S.j=0}else S.j++;draw();msg("Fill from already-computed top/left states.");return}
 if(t==="Backtracking"){let c=[1,2];S.path??=[];S.outs??=[];if(S.path.length===2){S.outs.push([...S.path]);S.path.pop();draw();msg("Record solution, undo, explore another branch.");return}S.path.push(c[S.path.length]);draw();msg("Choose → explore deeper → undo later.");return}
}
const nav=document.querySelector("#nav");let last="";DATA.forEach((p,i)=>{if(p.pattern!==last){let g=document.createElement("div");g.className="group";g.textContent=p.pattern;nav.appendChild(g);last=p.pattern}let b=document.createElement("button");b.textContent=`${i+1}. ${p.title} (${p.difficulty})`;b.onclick=()=>{current=i;document.querySelectorAll("aside button").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()};nav.appendChild(b)});
let q=document.createElement("input");q.className="search";q.placeholder="Search all 99 problems…";q.oninput=()=>document.querySelectorAll("aside button").forEach(b=>b.style.display=b.textContent.toLowerCase().includes(q.value.toLowerCase())?"block":"none");nav.prepend(q);
document.querySelectorAll("aside button")[0].classList.add("active");render();
