import{_ as s,c as n,o as a,a as p}from"./app.33e0ade7.js";const i=JSON.parse('{"title":"\u5728ts\u4E2D\u7684\u5173\u952E\u5B57","description":"","frontmatter":{},"headers":[{"level":2,"title":"keyof","slug":"keyof"},{"level":2,"title":"typeof","slug":"typeof"},{"level":2,"title":"never","slug":"never"},{"level":2,"title":"extends","slug":"extends"},{"level":2,"title":"infer","slug":"infer"}],"relativePath":"pages/learn/ts/keyword.md","lastUpdated":1662454045000}'),l={name:"pages/learn/ts/keyword.md"},e=p(`<h1 id="\u5728ts\u4E2D\u7684\u5173\u952E\u5B57" tabindex="-1">\u5728ts\u4E2D\u7684\u5173\u952E\u5B57 <a class="header-anchor" href="#\u5728ts\u4E2D\u7684\u5173\u952E\u5B57" aria-hidden="true">#</a></h1><h2 id="keyof" tabindex="-1">keyof <a class="header-anchor" href="#keyof" aria-hidden="true">#</a></h2><p><a href="https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html" target="_blank" rel="noreferrer">keyof\u5B98\u65B9\u6587\u6863\u89E3\u91CA</a></p><p>\u603B\u7684\u6765\u8BF4\uFF0C\u5C31\u662F\u53EF\u4EE5\u62BD\u53D6\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u7684key\uFF0C\u6765\u5F62\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57\u7684\u96C6\u5408</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">gender</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Keys</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u7B49\u4EF7\u4E8E</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Keys</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gender</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="typeof" tabindex="-1">typeof <a class="header-anchor" href="#typeof" aria-hidden="true">#</a></h2><p><code>typeof</code>\u5173\u952E\u5B57\u53EF\u4EE5\u5728\u4E00\u4E2A\u5DF2\u58F0\u660E\u7684\u53D8\u91CF\u4E2D\u63D0\u53D6\u51FA\u7C7B\u578B</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F20\u4E09</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// ts\u7684\u81EA\u52A8\u8BC6\u522B\u7C7B\u578B\u529F\u80FD\uFF0C\u53EF\u4EE5\u8BC6\u522Bname:string</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> name </span><span style="color:#676E95;">// \u7B49\u4EF7\u4E8E TName = string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="never" tabindex="-1">never <a class="header-anchor" href="#never" aria-hidden="true">#</a></h2><p><code>never</code>\u6C38\u8FDC\u4E0D\u4F1A\u6709\u8FD4\u56DE\u7ED3\u679C\uFF0C\u6216\u8005\u53EA\u4F1A\u629B\u51FA\u9519\u8BEF</p><p>\u5177\u4F53\u7684\u4F5C\u7528\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u7AE0<a href="https://jkchao.github.io/typescript-book-chinese/typings/neverType.html#%E7%94%A8%E4%BE%8B%EF%BC%9A%E8%AF%A6%E7%BB%86%E7%9A%84%E6%A3%80%E6%9F%A5" target="_blank" rel="noreferrer">ts-never</a></p><h2 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-hidden="true">#</a></h2><p><code>extends</code> \u5173\u952E\u5B57\u5728js\u4E2D\u4E5F\u6709\u7528\u5230\uFF0C\u7528\u4E8E\u7EE7\u627F\u4E00\u4E2A\u7C7B\uFF0C\u800C\u5728ts\u7684\u7C7B\u578B\u58F0\u660E\u4E2D\uFF0C\u4E5F\u80FD\u7528\u5230<code>extends</code> ,\u7528\u6CD5\u5728\u4E8E\u7EE7\u627F\u4E00\u4E2A\u7C7B\u578B\uFF0C\u800C\u9664\u6B64\u4E4B\u5916\uFF0Cextends\u8FD8\u6709\u66F4\u5F3A\u5927\u7684\u4F5C\u7528\uFF0C\u53EF\u4EE5\u7528\u4E8E\u505A\u4E00\u4E9B\u5224\u65AD\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReverseStringNumber</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">s</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReverseStringNumber</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">s</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// number</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="infer" tabindex="-1">infer <a class="header-anchor" href="#infer" aria-hidden="true">#</a></h2><p><code>infer</code> \u8868\u793A\u5728 <code>extends</code> \u6761\u4EF6\u8BED\u53E5\u4E2D\u5F85\u63A8\u65AD\u7684\u7C7B\u578B\u53D8\u91CF</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ParamType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">infer</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">P</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Param</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ParamType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Func</span><span style="color:#89DDFF;">&gt;;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Param = User</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AA</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ParamType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><a href="https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D" target="_blank" rel="noreferrer">ts -infer</a></p>`,18),o=[e];function r(t,c,y,C,D,F){return a(),n("div",null,o)}const d=s(l,[["render",r]]);export{i as __pageData,d as default};
