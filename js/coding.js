var code_samples = [
	{name: "py_code", cnt: `<div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%">  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #999999; font-style: italic"># /usr/bin/python</span>
<span style="color: #999999; font-style: italic"># -*- coding: utf-8 -*-</span>

<span style="color: #ed9d13">&#39;&#39;&#39;Breadth First Search(BFS) of a binary tree</span>
<span style="color: #ed9d13">&#39;&#39;&#39;</span>


<span style="color: #24909d">print</span><span style="color: #d0d0d0">(__doc__)</span>


<span style="color: #6ab825; font-weight: bold">class</span> <span style="color: #447fcf; text-decoration: underline">Node</span><span style="color: #d0d0d0">:</span>
	<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">	Represents the node of a tree</span>
<span style="color: #ed9d13">	&quot;&quot;&quot;</span>
	<span style="color: #6ab825; font-weight: bold">def</span> <span style="color: #447fcf">__init__</span><span style="color: #d0d0d0">(</span><span style="color: #24909d">self</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">node,</span> <span style="color: #d0d0d0">left=</span><span style="color: #6ab825; font-weight: bold">None</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">right=</span><span style="color: #6ab825; font-weight: bold">None</span><span style="color: #d0d0d0">):</span>
		<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">		:param node: The value of the node</span>
<span style="color: #ed9d13">		:type node: Union[int, str, float]</span>
<span style="color: #ed9d13">		:param left: The left treenode</span>
<span style="color: #ed9d13">		:type left: Union[None, TreeNode]</span>
<span style="color: #ed9d13">		:param right: The right treenode</span>
<span style="color: #ed9d13">		:type left: Union[None, TreeNode]</span>
<span style="color: #ed9d13">		&quot;&quot;&quot;</span>
		<span style="color: #24909d">self</span><span style="color: #d0d0d0">.node</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">node</span>
		<span style="color: #24909d">self</span><span style="color: #d0d0d0">.left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">left</span>
		<span style="color: #24909d">self</span><span style="color: #d0d0d0">.right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">right</span>

	<span style="color: #6ab825; font-weight: bold">def</span> <span style="color: #447fcf">get_node</span><span style="color: #d0d0d0">(</span><span style="color: #24909d">self</span><span style="color: #d0d0d0">):</span>
		<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">		Function to fecth the node value</span>
<span style="color: #ed9d13">		&quot;&quot;&quot;</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #24909d">self</span><span style="color: #d0d0d0">.node</span>

	<span style="color: #6ab825; font-weight: bold">def</span> <span style="color: #447fcf">get_children</span><span style="color: #d0d0d0">(</span><span style="color: #24909d">self</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">values=</span><span style="color: #6ab825; font-weight: bold">False</span><span style="color: #d0d0d0">):</span>
		<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">		Function to get either the children values or node object</span>
<span style="color: #ed9d13">		:param values: to choose between the values or node object</span>
<span style="color: #ed9d13">		:type values: boolean</span>
<span style="color: #ed9d13">		:rType: Union[List[int], List[float], List[str]]</span>
<span style="color: #ed9d13">		&quot;&quot;&quot;</span>
		<span style="color: #d0d0d0">children</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[]</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #24909d">self</span><span style="color: #d0d0d0">.left</span> <span style="color: #6ab825; font-weight: bold">is</span> <span style="color: #6ab825; font-weight: bold">not</span> <span style="color: #6ab825; font-weight: bold">None</span><span style="color: #d0d0d0">:</span>
			<span style="color: #d0d0d0">children.append(</span><span style="color: #24909d">self</span><span style="color: #d0d0d0">.left)</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #24909d">self</span><span style="color: #d0d0d0">.right</span> <span style="color: #6ab825; font-weight: bold">is</span> <span style="color: #6ab825; font-weight: bold">not</span> <span style="color: #6ab825; font-weight: bold">None</span><span style="color: #d0d0d0">:</span>
			<span style="color: #d0d0d0">children.append(</span><span style="color: #24909d">self</span><span style="color: #d0d0d0">.right)</span>

		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #6ab825; font-weight: bold">not</span> <span style="color: #d0d0d0">values:</span>
			<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">children</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">[cur.node</span> <span style="color: #6ab825; font-weight: bold">for</span> <span style="color: #d0d0d0">cur</span> <span style="color: #6ab825; font-weight: bold">in</span> <span style="color: #d0d0d0">children]</span>

	<span style="color: #6ab825; font-weight: bold">def</span> <span style="color: #447fcf">__str__</span><span style="color: #d0d0d0">(</span><span style="color: #24909d">self</span><span style="color: #d0d0d0">):</span>
		<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">		returns the string representation</span>
<span style="color: #ed9d13">		&quot;&quot;&quot;</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #ed9d13">&#39;TreeNode: ({0},({1},{2}))&#39;</span><span style="color: #d0d0d0">.format(</span><span style="color: #24909d">self</span><span style="color: #d0d0d0">.node,</span> <span style="color: #24909d">self</span><span style="color: #d0d0d0">.left,</span> <span style="color: #24909d">self</span><span style="color: #d0d0d0">.right)</span>

	<span style="color: #6ab825; font-weight: bold">def</span> <span style="color: #447fcf">__repr__</span><span style="color: #d0d0d0">(</span><span style="color: #24909d">self</span><span style="color: #d0d0d0">):</span>
		<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">		returns the official string representation</span>
<span style="color: #ed9d13">		&quot;&quot;&quot;</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #ed9d13">&#39;({0},({1},{2}))&#39;</span><span style="color: #d0d0d0">.format(</span><span style="color: #24909d">self</span><span style="color: #d0d0d0">.node,</span> <span style="color: #24909d">self</span><span style="color: #d0d0d0">.left,</span> <span style="color: #24909d">self</span><span style="color: #d0d0d0">.right)</span>


<span style="color: #6ab825; font-weight: bold">def</span> <span style="color: #447fcf">make_tree</span><span style="color: #d0d0d0">(index=</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">):</span>
	<span style="color: #ed9d13">&quot;&quot;&quot;Function to create the trees</span>
<span style="color: #ed9d13">		1. Full binary tree (7 nodes)</span>
<span style="color: #ed9d13">		2. Complete binary tree (10 nodes)</span>
<span style="color: #ed9d13">	 	3. Perfect binary tree (15 nodes)</span>
<span style="color: #ed9d13">	</span>
<span style="color: #ed9d13">	Args: </span>
<span style="color: #ed9d13">		index (int): The index to choose the tree, perfect binary tree(index=0) is set as default</span>
<span style="color: #ed9d13">	</span>
<span style="color: #ed9d13">	Returns</span>
<span style="color: #ed9d13">		Node: Root node of the binary tree. Returns Perfect binary tree by default</span>
<span style="color: #ed9d13">	&quot;&quot;&quot;</span>

	<span style="color: #999999; font-style: italic"># full binary tree: (7-nodes)</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">index</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">:</span>
		<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">		         1 </span>
<span style="color: #ed9d13">	  	       ╱  ╲</span>
<span style="color: #ed9d13">		      2     3</span>
<span style="color: #ed9d13">		    ╱  ╲</span>
<span style="color: #ed9d13">		   4     5</span>
<span style="color: #ed9d13">		 ╱  ╲</span>
<span style="color: #ed9d13">		6    7	</span>
<span style="color: #ed9d13">		&quot;&quot;&quot;</span>
		<span style="color: #24909d">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Rendering full binary tree with 7 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">),</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">))</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t</span>

	<span style="color: #999999; font-style: italic"># complete binary tree: (10-nodes)</span>
	<span style="color: #6ab825; font-weight: bold">elif</span> <span style="color: #d0d0d0">index</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">:</span>
		<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">			    1</span>
<span style="color: #ed9d13">			 ╱    ╲</span>
<span style="color: #ed9d13">		       2        3</span>
<span style="color: #ed9d13">		     ╱  ╲    ╱  ╲</span>
<span style="color: #ed9d13">		   4      5   6	   7</span>
<span style="color: #ed9d13">		 ╱  ╲	 ╱</span>
<span style="color: #ed9d13">		8    9  0	</span>
<span style="color: #ed9d13">		&quot;&quot;&quot;</span>
		<span style="color: #24909d">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Rendering complete binary tree with 10 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">),</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">)))</span>
		<span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">),</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #d0d0d0">t3)</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t</span>

	<span style="color: #999999; font-style: italic"># perfect binary tree: (15-nodes)</span>
	<span style="color: #6ab825; font-weight: bold">else</span><span style="color: #d0d0d0">:</span>
		<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">			     1</span>
<span style="color: #ed9d13">		          ╱    ╲</span>
<span style="color: #ed9d13">			╱        ╲</span>
<span style="color: #ed9d13">		       2            3</span>
<span style="color: #ed9d13">		    ╱   ╲        ╱  ╲</span>
<span style="color: #ed9d13">		  4      5       6      7</span>
<span style="color: #ed9d13">	        ╱ ╲	╱ ╲   ╱ ╲   ╱ ╲</span>
<span style="color: #ed9d13">		8   9  0    1  2   3  4    5</span>
<span style="color: #ed9d13">		&quot;&quot;&quot;</span>
		<span style="color: #24909d">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Rendering perfect binary tree with 15 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">),</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">),</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">),</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t4</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">),</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t5</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">t2)</span>
		<span style="color: #d0d0d0">t6</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t3,</span> <span style="color: #d0d0d0">t4)</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t5,</span> <span style="color: #d0d0d0">t6)</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t</span>

<span style="color: #6ab825; font-weight: bold">def</span> <span style="color: #447fcf">in_order</span><span style="color: #d0d0d0">(tree,</span> <span style="color: #d0d0d0">inorder_path=</span><span style="color: #6ab825; font-weight: bold">None</span><span style="color: #d0d0d0">):</span>
	<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">	Function to return the inorder traversal of a binary tree</span>
<span style="color: #ed9d13">	:param tree: The node of a binary tree</span>
<span style="color: #ed9d13">	:param inorder_path: The path of the inorder traversal</span>
<span style="color: #ed9d13">	</span>
<span style="color: #ed9d13">	:type tree: Node</span>
<span style="color: #ed9d13">	:type inorder_path: List</span>

<span style="color: #ed9d13">	:rType: List</span>
<span style="color: #ed9d13">	&quot;&quot;&quot;</span>

	<span style="color: #999999; font-style: italic"># Create the path if one doesn&#39;t exist</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">inorder_path</span> <span style="color: #6ab825; font-weight: bold">is</span> <span style="color: #6ab825; font-weight: bold">None</span><span style="color: #d0d0d0">:</span>
		<span style="color: #d0d0d0">inorder_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[]</span>

	<span style="color: #999999; font-style: italic"># Recurse if the tree value is not None</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">tree</span> <span style="color: #6ab825; font-weight: bold">is</span> <span style="color: #6ab825; font-weight: bold">not</span> <span style="color: #6ab825; font-weight: bold">None</span><span style="color: #d0d0d0">:</span>
		<span style="color: #d0d0d0">in_order(tree.left,</span> <span style="color: #d0d0d0">inorder_path)</span>
		<span style="color: #d0d0d0">inorder_path.append(tree.node)</span>
		<span style="color: #d0d0d0">in_order(tree.right,</span> <span style="color: #d0d0d0">inorder_path)</span>

	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">inorder_path</span>


<span style="color: #6ab825; font-weight: bold">def</span> <span style="color: #447fcf">breadth_first_search</span><span style="color: #d0d0d0">(root,</span> <span style="color: #d0d0d0">bfs_path=</span><span style="color: #6ab825; font-weight: bold">None</span><span style="color: #d0d0d0">):</span>
	<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">	Function to return the breadth first search of a binary tree</span>
<span style="color: #ed9d13">	:param root: The root node of the binary tree</span>
<span style="color: #ed9d13">	:param bfs_path: The path of the bfs</span>

<span style="color: #ed9d13">	:type root: Node</span>
<span style="color: #ed9d13">	:type bfs_path: List</span>

<span style="color: #ed9d13">	:rType: List</span>
<span style="color: #ed9d13">	&quot;&quot;&quot;</span>

	<span style="color: #999999; font-style: italic"># Create the path if it doesn&#39;t exist</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">bfs_path</span> <span style="color: #6ab825; font-weight: bold">is</span> <span style="color: #6ab825; font-weight: bold">None</span><span style="color: #d0d0d0">:</span> 
		<span style="color: #d0d0d0">bfs_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[]</span>

	<span style="color: #999999; font-style: italic"># Queue to store the current node&#39;s children</span>
	<span style="color: #d0d0d0">queue</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[root]</span>
	<span style="color: #6ab825; font-weight: bold">while</span> <span style="color: #d0d0d0">queue</span> <span style="color: #d0d0d0">!=</span> <span style="color: #d0d0d0">[]:</span>
		<span style="color: #d0d0d0">current</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">queue.pop(</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">bfs_path.append(current.node)</span>
		<span style="color: #d0d0d0">queue.extend(current.get_children())</span>

	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">bfs_path</span>


<span style="color: #6ab825; font-weight: bold">def</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">():</span>
	<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">	Main function</span>

<span style="color: #ed9d13">	:rType: None</span>
<span style="color: #ed9d13">	&quot;&quot;&quot;</span>
	<span style="color: #d0d0d0">tree</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">make_tree(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">)</span>
	<span style="color: #999999; font-style: italic"># print(tree)</span>
	<span style="color: #24909d">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&#39;Inorder traversal: &#39;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">in_order(tree))</span>
	<span style="color: #24909d">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&#39;Breadth First Search: &#39;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">breadth_first_search(tree))</span>


<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">__name__</span> <span style="color: #d0d0d0">==</span> <span style="color: #ed9d13">&#39;__main__&#39;</span><span style="color: #d0d0d0">:</span>
	<span style="color: #d0d0d0">main()</span>
</pre></td></tr></table></div>`},
	{name: "jl_code", cnt: `<div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%">  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #999999; font-style: italic"># Breadth First Search(BFS) of a binary tree</span>

<span style="color: #999999; font-style: italic"># Tree structure</span>
<span style="color: #d0d0d0">struct</span> <span style="color: #d0d0d0">TreeNode</span>
	<span style="color: #d0d0d0">node</span>
	<span style="color: #d0d0d0">left</span>
	<span style="color: #d0d0d0">right</span>
<span style="color: #6ab825; font-weight: bold">end</span>

<span style="color: #999999; font-style: italic"># function to build a tree</span>
<span style="color: #6ab825; font-weight: bold">function</span><span style="color: #447fcf"> build_tree</span><span style="color: #d0d0d0">(index=</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span>
	<span style="color: #999999; font-style: italic"># full binary tree: (7-nodes)</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">index</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span>
		<span style="color: #999999; font-style: italic">#=</span>
			 <span style="color: #3677a9">1</span>
		       <span style="color: #a61717; background-color: #e3d2d2">╱</span>  <span style="color: #a61717; background-color: #e3d2d2">╲</span>
		      <span style="color: #3677a9">2</span>     <span style="color: #3677a9">3</span>
		    <span style="color: #a61717; background-color: #e3d2d2">╱</span>  <span style="color: #a61717; background-color: #e3d2d2">╲</span>
		   <span style="color: #3677a9">4</span>     <span style="color: #3677a9">5</span>
		 <span style="color: #a61717; background-color: #e3d2d2">╱</span>  <span style="color: #a61717; background-color: #e3d2d2">╲</span>
		<span style="color: #3677a9">6</span>    <span style="color: #3677a9">7</span>
		<span style="color: #d0d0d0">=</span><span style="color: #999999; font-style: italic">#</span>
		
		<span style="color: #d0d0d0">println(</span><span style="color: #ed9d13">&quot;Rendering full binary tree with 7 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing),</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing))</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing))</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing))</span>
	
	<span style="color: #999999; font-style: italic"># complete binary tree: (10-nodes)</span>
	<span style="color: #6ab825; font-weight: bold">elseif</span> <span style="color: #d0d0d0">index</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">2</span>
		<span style="color: #999999; font-style: italic">#=</span>
			   <span style="color: #3677a9">1</span>
			<span style="color: #a61717; background-color: #e3d2d2">╱</span>    <span style="color: #a61717; background-color: #e3d2d2">╲</span>
		       <span style="color: #3677a9">2</span>        <span style="color: #3677a9">3</span>
		     <span style="color: #a61717; background-color: #e3d2d2">╱</span>  <span style="color: #a61717; background-color: #e3d2d2">╲</span>    <span style="color: #a61717; background-color: #e3d2d2">╱</span> <span style="color: #a61717; background-color: #e3d2d2">╲</span>
		   <span style="color: #3677a9">4</span>      <span style="color: #3677a9">5</span>   <span style="color: #3677a9">6</span>	   <span style="color: #3677a9">7</span>
		 <span style="color: #a61717; background-color: #e3d2d2">╱</span>  <span style="color: #a61717; background-color: #e3d2d2">╲</span>	 <span style="color: #a61717; background-color: #e3d2d2">╱</span>
		<span style="color: #3677a9">8</span>    <span style="color: #3677a9">9</span>  <span style="color: #3677a9">0</span>
		<span style="color: #d0d0d0">=</span><span style="color: #999999; font-style: italic">#</span>
		
		<span style="color: #d0d0d0">println(</span><span style="color: #ed9d13">&quot;Rendering complete binary tree with 10 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing),</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing))</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing),</span> <span style="color: #d0d0d0">nothing))</span>
		<span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing),</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing))</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #d0d0d0">t3)</span>

	<span style="color: #999999; font-style: italic"># perfect binary tree: (15-nodes)</span>
	<span style="color: #6ab825; font-weight: bold">else</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">index</span> <span style="color: #d0d0d0">!=</span> <span style="color: #3677a9">0</span>
			<span style="color: #d0d0d0">println(</span><span style="color: #ed9d13">&quot;Invalid Index. Used 0 by default...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #6ab825; font-weight: bold">end</span>
		<span style="color: #999999; font-style: italic">#= </span>
			    <span style="color: #3677a9">1</span>
			  <span style="color: #a61717; background-color: #e3d2d2">╱</span>   <span style="color: #a61717; background-color: #e3d2d2">╲</span>
		        <span style="color: #a61717; background-color: #e3d2d2">╱</span>       <span style="color: #a61717; background-color: #e3d2d2">╲</span>
		      <span style="color: #3677a9">2</span>             <span style="color: #3677a9">3</span>
		    <span style="color: #a61717; background-color: #e3d2d2">╱</span> <span style="color: #a61717; background-color: #e3d2d2">╲</span>         <span style="color: #a61717; background-color: #e3d2d2">╱</span>   <span style="color: #a61717; background-color: #e3d2d2">╲</span>
		  <span style="color: #3677a9">4</span>      <span style="color: #3677a9">5</span>      <span style="color: #3677a9">6</span>      <span style="color: #3677a9">7</span>
		 <span style="color: #a61717; background-color: #e3d2d2">╱╲</span>	<span style="color: #a61717; background-color: #e3d2d2">╱╲</span>   <span style="color: #a61717; background-color: #e3d2d2">╱</span> <span style="color: #a61717; background-color: #e3d2d2">╲</span>   <span style="color: #a61717; background-color: #e3d2d2">╱</span> <span style="color: #a61717; background-color: #e3d2d2">╲</span>
		<span style="color: #3677a9">8</span>   <span style="color: #3677a9">9</span>  <span style="color: #3677a9">0</span>   <span style="color: #3677a9">1</span>  <span style="color: #3677a9">2</span>   <span style="color: #3677a9">3</span>  <span style="color: #3677a9">4</span>    <span style="color: #3677a9">5</span>
		<span style="color: #d0d0d0">=</span><span style="color: #999999; font-style: italic">#</span>
		<span style="color: #d0d0d0">println(</span><span style="color: #ed9d13">&quot;Rendering perfect binary tree with 15 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing),</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing))</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing),</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing))</span>
		<span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing),</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing))</span>
		<span style="color: #d0d0d0">t4</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing),</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">nothing,</span> <span style="color: #d0d0d0">nothing))</span>
		<span style="color: #d0d0d0">t5</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">t2)</span>
		<span style="color: #d0d0d0">t6</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t3,</span> <span style="color: #d0d0d0">t4)</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t5,</span> <span style="color: #d0d0d0">t6)</span>
	<span style="color: #6ab825; font-weight: bold">end</span>
	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t</span>
<span style="color: #6ab825; font-weight: bold">end</span>


<span style="color: #999999; font-style: italic"># Implementation of inorder traversal of binary tree</span>
<span style="color: #6ab825; font-weight: bold">function</span><span style="color: #447fcf"> inorder_traversal</span><span style="color: #d0d0d0">(tree,</span> <span style="color: #d0d0d0">_path=nothing)</span>
	<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">	 	function for the inorder traversal</span>
<span style="color: #ed9d13">	&quot;&quot;&quot;</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">_path</span> <span style="color: #d0d0d0">==</span> <span style="color: #d0d0d0">nothing</span>
		<span style="color: #d0d0d0">_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[]</span>
	<span style="color: #6ab825; font-weight: bold">end</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">tree</span> <span style="color: #d0d0d0">!=</span> <span style="color: #d0d0d0">nothing</span>
		<span style="color: #d0d0d0">inorder_traversal(tree.left,</span> <span style="color: #d0d0d0">_path)</span>
		<span style="color: #d0d0d0">push!(_path,</span> <span style="color: #d0d0d0">tree.node)</span>
		<span style="color: #d0d0d0">inorder_traversal(tree.right,</span> <span style="color: #d0d0d0">_path)</span>
	<span style="color: #6ab825; font-weight: bold">end</span>
	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">_path</span>
<span style="color: #6ab825; font-weight: bold">end</span>


<span style="color: #999999; font-style: italic"># Breath first search implementation</span>
<span style="color: #6ab825; font-weight: bold">function</span><span style="color: #447fcf"> breath_first_search</span><span style="color: #d0d0d0">(root)</span>
	<span style="color: #ed9d13">&quot;&quot;&quot;</span>
<span style="color: #ed9d13">		function for the breath first search</span>
<span style="color: #ed9d13">	&quot;&quot;&quot;</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">root</span> <span style="color: #d0d0d0">==</span> <span style="color: #d0d0d0">nothing</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">[]</span>
	<span style="color: #6ab825; font-weight: bold">end</span>

	<span style="color: #d0d0d0">queue</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[root]</span>
	<span style="color: #d0d0d0">bfs_result</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[]</span>
	<span style="color: #6ab825; font-weight: bold">while</span> <span style="color: #d0d0d0">isempty(queue)</span> <span style="color: #d0d0d0">!=</span> <span style="color: #d0d0d0">true</span>
		<span style="color: #d0d0d0">current</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">queue[</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">]</span>
		<span style="color: #d0d0d0">deleteat!(queue,</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">push!(bfs_result,</span> <span style="color: #d0d0d0">current.node)</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">current.left</span> <span style="color: #d0d0d0">!=</span> <span style="color: #d0d0d0">nothing</span>
			<span style="color: #d0d0d0">push!(queue,</span> <span style="color: #d0d0d0">current.left)</span>
		<span style="color: #6ab825; font-weight: bold">end</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">current.right</span> <span style="color: #d0d0d0">!=</span> <span style="color: #d0d0d0">nothing</span>
			<span style="color: #d0d0d0">push!(queue,</span> <span style="color: #d0d0d0">current.right)</span>
		<span style="color: #6ab825; font-weight: bold">end</span>
	<span style="color: #6ab825; font-weight: bold">end</span>
	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">bfs_result;</span>
<span style="color: #6ab825; font-weight: bold">end</span>

<span style="color: #999999; font-style: italic"># main function</span>
<span style="color: #6ab825; font-weight: bold">function</span><span style="color: #447fcf"> main</span><span style="color: #d0d0d0">()</span>
	<span style="color: #d0d0d0">tree</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">build_tree(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">);</span>
	<span style="color: #d0d0d0">inorder_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">inorder_traversal(tree);</span>
	<span style="color: #d0d0d0">bfs_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">breath_first_search(tree);</span>
	<span style="color: #d0d0d0">println(</span><span style="color: #ed9d13">&quot;Inorder Traversal &gt; &quot;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">inorder_path);</span>
	<span style="color: #d0d0d0">println(</span><span style="color: #ed9d13">&quot;Breadth First Search &gt; &quot;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">bfs_path);</span>
<span style="color: #6ab825; font-weight: bold">end</span>

<span style="color: #d0d0d0">main()</span>
</pre></td></tr></table></div>`},
	{name: "go_code", cnt: `<div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%">  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">package</span> <span style="color: #d0d0d0">main;</span>

<span style="color: #6ab825; font-weight: bold">import</span> <span style="color: #d0d0d0">(</span>
	<span style="color: #ed9d13">&quot;fmt&quot;</span>
	<span style="color: #999999; font-style: italic">// &quot;reflect&quot;</span>
	<span style="color: #999999; font-style: italic">// &quot;container/list&quot;</span>
<span style="color: #d0d0d0">)</span>

<span style="color: #999999; font-style: italic">// Tree data structure</span>
<span style="color: #6ab825; font-weight: bold">type</span> <span style="color: #d0d0d0">Node</span> <span style="color: #6ab825; font-weight: bold">struct</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #d0d0d0">node</span> <span style="color: #6ab825; font-weight: bold">int</span>
	<span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">*Node</span>
	<span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">*Node</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #6ab825; font-weight: bold">func</span> <span style="color: #d0d0d0">(n</span> <span style="color: #d0d0d0">Node)</span> <span style="color: #d0d0d0">getNode()</span> <span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">n.node</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #6ab825; font-weight: bold">func</span> <span style="color: #d0d0d0">(n</span> <span style="color: #d0d0d0">Node)</span> <span style="color: #d0d0d0">getChildren()</span> <span style="color: #d0d0d0">[]*Node</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #d0d0d0">_children</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">[]*Node</span> <span style="color: #d0d0d0">{}</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">n.left</span> <span style="color: #d0d0d0">!=</span> <span style="color: #6ab825; font-weight: bold">nil</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">_children</span> <span style="color: #d0d0d0">=</span> <span style="color: #24909d">append</span><span style="color: #d0d0d0">(_children,</span> <span style="color: #d0d0d0">n.left)</span>
	<span style="color: #d0d0d0">}</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">n.right</span> <span style="color: #d0d0d0">!=</span> <span style="color: #6ab825; font-weight: bold">nil</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">_children</span> <span style="color: #d0d0d0">=</span> <span style="color: #24909d">append</span><span style="color: #d0d0d0">(_children,</span> <span style="color: #d0d0d0">n.right)</span>
	<span style="color: #d0d0d0">}</span>
	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">_children;</span>
<span style="color: #d0d0d0">}</span>


<span style="color: #6ab825; font-weight: bold">func</span> <span style="color: #d0d0d0">build_tree(args</span> <span style="color: #d0d0d0">...</span><span style="color: #6ab825; font-weight: bold">int</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #24909d">len</span><span style="color: #d0d0d0">(args)</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span> <span style="color: #d0d0d0">&amp;&amp;</span> <span style="color: #d0d0d0">args[</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">]</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #999999; font-style: italic">/*</span>
<span style="color: #999999; font-style: italic">		Full binary tree (#7 nodes)</span>

<span style="color: #999999; font-style: italic">		         1</span>
<span style="color: #999999; font-style: italic">	    	       ╱  ╲</span>
<span style="color: #999999; font-style: italic">		      2     3</span>
<span style="color: #999999; font-style: italic">		    ╱  ╲</span>
<span style="color: #999999; font-style: italic">		   4     5</span>
<span style="color: #999999; font-style: italic">		 ╱ ╲</span>
<span style="color: #999999; font-style: italic">		6    7</span>
<span style="color: #999999; font-style: italic">		*/</span>
		
		<span style="color: #d0d0d0">fmt.Println(</span><span style="color: #ed9d13">&quot;Rendering full binary tree with 7 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">},</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">Node{</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t</span>
	<span style="color: #d0d0d0">}</span> <span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #24909d">len</span><span style="color: #d0d0d0">(args)</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span> <span style="color: #d0d0d0">&amp;&amp;</span> <span style="color: #d0d0d0">args[</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">]</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">{</span>
		<span style="color: #999999; font-style: italic">/*</span>
<span style="color: #999999; font-style: italic">		Complete binary tree (#10 nodes)</span>
<span style="color: #999999; font-style: italic">			  1</span>
<span style="color: #999999; font-style: italic">		       ╱   ╲</span>
<span style="color: #999999; font-style: italic">		      2       3</span>
<span style="color: #999999; font-style: italic">		    ╱  ╲   ╱ ╲</span>
<span style="color: #999999; font-style: italic">		   4     5  6   7</span>
<span style="color: #999999; font-style: italic">		 ╱  ╲	╱</span>
<span style="color: #999999; font-style: italic">		8    9 0</span>
<span style="color: #999999; font-style: italic">		*/</span>
		
		<span style="color: #d0d0d0">fmt.Println(</span><span style="color: #ed9d13">&quot;Rendering complete binary tree with 10 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">},</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">},</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">},</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">Node{</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #d0d0d0">t3}</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t</span>
	<span style="color: #d0d0d0">}</span> <span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #24909d">len</span><span style="color: #d0d0d0">(args)</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span> <span style="color: #d0d0d0">&amp;&amp;</span> <span style="color: #d0d0d0">args[</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">]</span> <span style="color: #d0d0d0">!=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">{</span>
			<span style="color: #24909d">println</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Invalid Index. Used 0 by default...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">}</span>
		<span style="color: #999999; font-style: italic">/*</span>
<span style="color: #999999; font-style: italic">		Perfect binary tree (#15 nodes)</span>
<span style="color: #999999; font-style: italic">			     1</span>
<span style="color: #999999; font-style: italic">			  ╱   ╲</span>
<span style="color: #999999; font-style: italic">			╱       ╲</span>
<span style="color: #999999; font-style: italic">		       2            3</span>
<span style="color: #999999; font-style: italic">		    ╱   ╲        ╱  ╲</span>
<span style="color: #999999; font-style: italic">		  4       5      6	7</span>
<span style="color: #999999; font-style: italic">		╱ ╲	╱ ╲   ╱ ╲   ╱ ╲</span>
<span style="color: #999999; font-style: italic">		8   9  0    1  2   3  4    5</span>
<span style="color: #999999; font-style: italic">		*/</span>
		
		<span style="color: #d0d0d0">fmt.Println(</span><span style="color: #ed9d13">&quot;Rendering complete binary tree with 15 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">},</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">},</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">},</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #d0d0d0">t4</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">},</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">}}</span>
		<span style="color: #d0d0d0">t5</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">t2}</span>
		<span style="color: #d0d0d0">t6</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">&amp;Node{</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t3,</span> <span style="color: #d0d0d0">t4}</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">Node{</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t5,</span> <span style="color: #d0d0d0">t6}</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t</span>
	<span style="color: #d0d0d0">}</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #6ab825; font-weight: bold">func</span> <span style="color: #d0d0d0">inorder_traversal(t</span> <span style="color: #d0d0d0">*Node,</span> <span style="color: #d0d0d0">_path</span> <span style="color: #d0d0d0">*[]</span><span style="color: #6ab825; font-weight: bold">int</span><span style="color: #d0d0d0">){</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(t</span> <span style="color: #d0d0d0">!=</span> <span style="color: #6ab825; font-weight: bold">nil</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">inorder_traversal(t.left,</span> <span style="color: #d0d0d0">_path)</span>
		<span style="color: #d0d0d0">*_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #24909d">append</span><span style="color: #d0d0d0">(*_path,</span> <span style="color: #d0d0d0">t.node)</span>
		<span style="color: #d0d0d0">inorder_traversal(t.right,</span> <span style="color: #d0d0d0">_path)</span>
	<span style="color: #d0d0d0">}</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #6ab825; font-weight: bold">func</span> <span style="color: #d0d0d0">breadth_first_search(root</span> <span style="color: #d0d0d0">*Node)</span> <span style="color: #d0d0d0">[]</span><span style="color: #6ab825; font-weight: bold">int</span><span style="color: #d0d0d0">{</span>
	<span style="color: #d0d0d0">queue</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">[]*Node</span> <span style="color: #d0d0d0">{root}</span>
	<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">_path</span> <span style="color: #d0d0d0">[]</span><span style="color: #6ab825; font-weight: bold">int</span>

	<span style="color: #6ab825; font-weight: bold">for</span> <span style="color: #24909d">len</span><span style="color: #d0d0d0">(queue)</span> <span style="color: #d0d0d0">!=</span> <span style="color: #3677a9">0</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">current</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">queue[</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">]</span>
		<span style="color: #d0d0d0">queue</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">queue[</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">:]</span>
		<span style="color: #d0d0d0">_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #24909d">append</span><span style="color: #d0d0d0">(_path,</span> <span style="color: #d0d0d0">current.node)</span>
		<span style="color: #6ab825; font-weight: bold">for</span> <span style="color: #d0d0d0">_,</span> <span style="color: #d0d0d0">child</span> <span style="color: #d0d0d0">:=</span> <span style="color: #6ab825; font-weight: bold">range</span> <span style="color: #d0d0d0">current.getChildren()</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">queue</span> <span style="color: #d0d0d0">=</span> <span style="color: #24909d">append</span><span style="color: #d0d0d0">(queue,</span> <span style="color: #d0d0d0">child)</span>
		<span style="color: #d0d0d0">}</span>
	<span style="color: #d0d0d0">}</span>
	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">_path</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #6ab825; font-weight: bold">func</span> <span style="color: #d0d0d0">main()</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #d0d0d0">tree</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">build_tree(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">)</span>
	<span style="color: #d0d0d0">fmt.Println(</span><span style="color: #ed9d13">&quot;Tree &gt;&quot;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">tree)</span>
	<span style="color: #d0d0d0">fmt.Println(</span><span style="color: #ed9d13">&quot;Tree children &gt;&gt; &quot;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">tree.getChildren())</span>

	<span style="color: #d0d0d0">inorder_path</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">[]</span><span style="color: #6ab825; font-weight: bold">int</span><span style="color: #d0d0d0">{}</span>
	<span style="color: #d0d0d0">inorder_traversal(&amp;tree,</span> <span style="color: #d0d0d0">&amp;inorder_path)</span>
	<span style="color: #d0d0d0">fmt.Println(</span><span style="color: #ed9d13">&quot;Inorder traversal &gt; &quot;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">inorder_path)</span>

	<span style="color: #d0d0d0">bfs_path</span> <span style="color: #d0d0d0">:=</span> <span style="color: #d0d0d0">breadth_first_search(&amp;tree)</span>
	<span style="color: #d0d0d0">fmt.Println(</span><span style="color: #ed9d13">&quot;Breadth First Search &gt; &quot;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">bfs_path)</span>
<span style="color: #d0d0d0">}</span>
</pre></td></tr></table></div>
`},
	{name: "r_code", cnt: `<div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%">  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #d0d0d0">rm(list=ls())</span>
<span style="color: #999999; font-style: italic"># Breadth first search of a binary tree</span>

<span style="color: #999999; font-style: italic"># Function to build binary tree</span>
<span style="color: #d0d0d0">make_tree</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">function(</span><span style="color: #24909d">index</span><span style="color: #d0d0d0">=</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
  <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(</span><span style="color: #24909d">index</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
    <span style="color: #ed9d13">&quot;</span>
<span style="color: #ed9d13">    Binary tree - Full binary tree with 7 nodes</span>
<span style="color: #ed9d13">           1</span>
<span style="color: #ed9d13">         /   &#92;</span>
<span style="color: #ed9d13">        2     3</span>
<span style="color: #ed9d13">       /  &#92;</span>
<span style="color: #ed9d13">      4    5</span>
<span style="color: #ed9d13">     /  &#92;</span>
<span style="color: #ed9d13">    6   7</span>
<span style="color: #ed9d13">    &quot;</span>
    <span style="color: #6ab825; font-weight: bold">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Rendering full binary tree with 7 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
    <span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t2)</span>
    <span style="color: #d0d0d0">t4</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t5</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t3,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t4)</span>
    <span style="color: #d0d0d0">t6</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t5,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t6)</span>
    <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(t)</span>
  <span style="color: #d0d0d0">}</span> 
  <span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(</span><span style="color: #24909d">index</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
    <span style="color: #ed9d13">&quot;</span>
<span style="color: #ed9d13">    Binary tree - Complete binary tree with 10 nodes</span>
<span style="color: #ed9d13">            1</span>
<span style="color: #ed9d13">          /    &#92;</span>
<span style="color: #ed9d13">         2       3</span>
<span style="color: #ed9d13">       /  &#92;     / &#92;</span>
<span style="color: #ed9d13">      4    5    6  7</span>
<span style="color: #ed9d13">     / &#92;   /</span>
<span style="color: #ed9d13">    8   9 0</span>
<span style="color: #ed9d13">    &quot;</span>
    <span style="color: #6ab825; font-weight: bold">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Rendering complete binary tree with 10 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
    <span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">8</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">9</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t4</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t2)</span>
    <span style="color: #d0d0d0">t5</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t3,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t6</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t7</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t8</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t4,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t5)</span>
    <span style="color: #d0d0d0">t9</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t6,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t7)</span>
    <span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t8,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">t9)</span>
    <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(t)</span>
  <span style="color: #d0d0d0">}</span> 
  <span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #d0d0d0">{</span>
    <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(</span><span style="color: #24909d">index</span> <span style="color: #d0d0d0">!=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
      <span style="color: #6ab825; font-weight: bold">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Index not available. Used 0 by default...&quot;</span><span style="color: #d0d0d0">)</span>
    <span style="color: #d0d0d0">}</span>
    <span style="color: #ed9d13">&quot;</span>
<span style="color: #ed9d13">    Binary tree - Perfect binary tree with 15 nodes</span>
<span style="color: #ed9d13">             1</span>
<span style="color: #ed9d13">          /     &#92;</span>
<span style="color: #ed9d13">         2        3</span>
<span style="color: #ed9d13">       /  &#92;       /  &#92;</span>
<span style="color: #ed9d13">      4    5     6     7</span>
<span style="color: #ed9d13">     /&#92;    /&#92;    /&#92;    /&#92;</span>
<span style="color: #ed9d13">    8  9  0  1  2  3  4  5</span>
<span style="color: #ed9d13">    &quot;</span>
    <span style="color: #6ab825; font-weight: bold">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Rendering perfect binary tree with 15 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
    <span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">8</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">9</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t4</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t5</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t6</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t7</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    <span style="color: #d0d0d0">t8</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL,</span> <span style="color: #d0d0d0">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">NULL)</span>
    
    <span style="color: #d0d0d0">t9</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node=</span> <span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left=</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">right=</span> <span style="color: #d0d0d0">t2)</span>
    <span style="color: #d0d0d0">t10</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node=</span> <span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left=</span> <span style="color: #d0d0d0">t3,</span> <span style="color: #d0d0d0">right=</span> <span style="color: #d0d0d0">t4)</span>
    <span style="color: #d0d0d0">t11</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node=</span> <span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left=</span> <span style="color: #d0d0d0">t5,</span> <span style="color: #d0d0d0">right=</span> <span style="color: #d0d0d0">t6)</span>
    <span style="color: #d0d0d0">t12</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node=</span> <span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left=</span> <span style="color: #d0d0d0">t7,</span> <span style="color: #d0d0d0">right=</span> <span style="color: #d0d0d0">t8)</span>
    <span style="color: #d0d0d0">t13</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node=</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left=</span> <span style="color: #d0d0d0">t9,</span> <span style="color: #d0d0d0">right=</span> <span style="color: #d0d0d0">t10)</span>
    <span style="color: #d0d0d0">t14</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node=</span> <span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left=</span> <span style="color: #d0d0d0">t11,</span> <span style="color: #d0d0d0">right=</span> <span style="color: #d0d0d0">t12)</span>
    <span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">list(node=</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">left=</span> <span style="color: #d0d0d0">t13,</span> <span style="color: #d0d0d0">right=</span> <span style="color: #d0d0d0">t14)</span>
    <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(t)</span>
  <span style="color: #d0d0d0">}</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #999999; font-style: italic"># Queue implementation</span>
<span style="color: #999999; font-style: italic"># &gt;&gt;&gt; Basic functions:(push, pop(:= poll), size, isEmpty)</span>
<span style="color: #d0d0d0">Queue</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">setRefClass(Class</span> <span style="color: #d0d0d0">=</span> <span style="color: #ed9d13">&quot;Queue&quot;</span><span style="color: #d0d0d0">,</span>
                     <span style="color: #d0d0d0">fields</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">list(</span>
                       <span style="color: #d0d0d0">data</span> <span style="color: #d0d0d0">=</span> <span style="color: #ed9d13">&quot;list&quot;</span><span style="color: #d0d0d0">),</span>
                     <span style="color: #d0d0d0">methods</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">list(</span>
                       <span style="color: #d0d0d0">size</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">function()</span> <span style="color: #d0d0d0">{</span>
                         <span style="color: #6ab825; font-weight: bold">return</span><span style="color: #d0d0d0">(</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(data))</span>
                       <span style="color: #d0d0d0">},</span>
                       <span style="color: #24909d">push</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">function(x)</span> <span style="color: #d0d0d0">{</span>
                         <span style="color: #d0d0d0">data[[</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(data)</span> <span style="color: #d0d0d0">+</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">]]</span> <span style="color: #d0d0d0">&lt;&lt;-</span> <span style="color: #d0d0d0">x</span>
                       <span style="color: #d0d0d0">},</span>
                       <span style="color: #24909d">pop</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">function()</span> <span style="color: #d0d0d0">{</span>
                         <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(size()</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span> <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(NULL)</span>
                         <span style="color: #d0d0d0">x</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">data[[</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">]]</span>
                         <span style="color: #d0d0d0">data[[</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">]]</span> <span style="color: #d0d0d0">&lt;&lt;-</span> <span style="color: #d0d0d0">NULL</span>
                         <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(x)</span>
                       <span style="color: #d0d0d0">},</span>
                       <span style="color: #d0d0d0">isEmpty</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">function()</span> <span style="color: #d0d0d0">{</span>
                         <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(data)</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span>
                       <span style="color: #d0d0d0">}</span>
                     <span style="color: #d0d0d0">))</span>

<span style="color: #999999; font-style: italic"># Linked list implementation</span>
<span style="color: #d0d0d0">LinkedList</span> <span style="color: #d0d0d0">&lt;-setRefClass(Class</span> <span style="color: #d0d0d0">=</span> <span style="color: #ed9d13">&quot;LinkedList&quot;</span><span style="color: #d0d0d0">,</span>
                         <span style="color: #d0d0d0">fields</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">list(</span>
                           <span style="color: #d0d0d0">data</span> <span style="color: #d0d0d0">=</span> <span style="color: #ed9d13">&quot;list&quot;</span><span style="color: #d0d0d0">),</span>
                         <span style="color: #d0d0d0">methods</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">list(</span>
                           <span style="color: #d0d0d0">size</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">function()</span> <span style="color: #d0d0d0">{</span>
                             <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(size))</span>
                           <span style="color: #d0d0d0">},</span>
                           <span style="color: #d0d0d0">append</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">function(x)</span> <span style="color: #d0d0d0">{</span>
                             <span style="color: #d0d0d0">data[[</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(data)+</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">]]</span> <span style="color: #d0d0d0">&lt;&lt;-</span> <span style="color: #d0d0d0">x</span>
                           <span style="color: #d0d0d0">},</span>
                           <span style="color: #24909d">pop</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">function()</span> <span style="color: #d0d0d0">{</span>
                             <span style="color: #6ab825; font-weight: bold">if</span><span style="color: #d0d0d0">(</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(data)</span> <span style="color: #d0d0d0">!=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
                               <span style="color: #d0d0d0">val</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">data[[</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(data)]]</span>
                               <span style="color: #d0d0d0">data[</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(data)]</span> <span style="color: #d0d0d0">&lt;&lt;-</span> <span style="color: #d0d0d0">NULL</span>
                               <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(val)</span>
                             <span style="color: #d0d0d0">}</span>
                           <span style="color: #d0d0d0">},</span>
                           <span style="color: #d0d0d0">isEmpty</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">function</span> <span style="color: #d0d0d0">()</span> <span style="color: #d0d0d0">{</span>
                             <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(data)</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span>
                           <span style="color: #d0d0d0">},</span>
                           <span style="color: #d0d0d0">getList</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">function()</span> <span style="color: #d0d0d0">{</span>
                             <span style="color: #d0d0d0">res</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">c()</span>
                             <span style="color: #6ab825; font-weight: bold">for</span> <span style="color: #d0d0d0">(x</span> <span style="color: #d0d0d0">in</span> <span style="color: #d0d0d0">data)</span> <span style="color: #d0d0d0">{</span>
                               <span style="color: #d0d0d0">res[</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(res)</span> <span style="color: #d0d0d0">+</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">]</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">x</span>
                             <span style="color: #d0d0d0">}</span>
                             <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(res)</span>
                           <span style="color: #d0d0d0">}</span>
                         <span style="color: #d0d0d0">))</span>

<span style="color: #999999; font-style: italic"># Breadth First Search</span>
<span style="color: #d0d0d0">bfs</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">function(tree)</span> <span style="color: #d0d0d0">{</span>
  <span style="color: #d0d0d0">bfs_path</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">c()</span>
  <span style="color: #d0d0d0">queue</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">Queue</span><span style="color: #40ffff">$new</span><span style="color: #d0d0d0">()</span>
  <span style="color: #d0d0d0">queue</span><span style="color: #40ffff">$push</span><span style="color: #d0d0d0">(tree)</span>
  
  <span style="color: #6ab825; font-weight: bold">while</span> <span style="color: #d0d0d0">(!</span> <span style="color: #d0d0d0">queue</span><span style="color: #40ffff">$isEmpty</span><span style="color: #d0d0d0">())</span> <span style="color: #d0d0d0">{</span>
    <span style="color: #d0d0d0">current</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">queue</span><span style="color: #40ffff">$pop</span><span style="color: #d0d0d0">()</span>
    <span style="color: #d0d0d0">bfs_path[</span><span style="color: #24909d">length</span><span style="color: #d0d0d0">(bfs_path)</span> <span style="color: #d0d0d0">+</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">]</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">current</span><span style="color: #40ffff">$node</span>

    <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(!</span> <span style="color: #d0d0d0">is.null(current</span><span style="color: #40ffff">$left</span><span style="color: #d0d0d0">))</span> <span style="color: #d0d0d0">{</span>
      <span style="color: #d0d0d0">queue</span><span style="color: #40ffff">$push</span><span style="color: #d0d0d0">(current</span><span style="color: #40ffff">$left</span><span style="color: #d0d0d0">)</span>
    <span style="color: #d0d0d0">}</span>
    <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(!</span> <span style="color: #d0d0d0">is.null(current</span><span style="color: #40ffff">$right</span><span style="color: #d0d0d0">))</span> <span style="color: #d0d0d0">{</span>
      <span style="color: #d0d0d0">queue</span><span style="color: #40ffff">$push</span><span style="color: #d0d0d0">(current</span><span style="color: #40ffff">$right</span><span style="color: #d0d0d0">)</span>
    <span style="color: #d0d0d0">}</span>
  <span style="color: #d0d0d0">}</span>
  <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(bfs_path)</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #999999; font-style: italic"># Inorder Traversal helper function</span>
<span style="color: #d0d0d0">inorder_traversal_util</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">function(tree,</span> <span style="color: #d0d0d0">inorder_result)</span> <span style="color: #d0d0d0">{</span>
  <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(!</span> <span style="color: #d0d0d0">is.null(tree))</span> <span style="color: #d0d0d0">{</span>
    <span style="color: #d0d0d0">inorder_traversal_util(tree</span><span style="color: #40ffff">$left</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">inorder_result)</span>
    <span style="color: #d0d0d0">inorder_result</span><span style="color: #40ffff">$append</span><span style="color: #d0d0d0">(tree</span><span style="color: #40ffff">$node</span><span style="color: #d0d0d0">)</span>
    <span style="color: #d0d0d0">inorder_traversal_util(tree</span><span style="color: #40ffff">$right</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">inorder_result)</span>
  <span style="color: #d0d0d0">}</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #999999; font-style: italic"># Inorder Traversal</span>
<span style="color: #d0d0d0">inorder_traversal</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">function(tree)</span> <span style="color: #d0d0d0">{</span>
  <span style="color: #d0d0d0">inorder_result</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">LinkedList</span><span style="color: #40ffff">$new</span><span style="color: #d0d0d0">()</span>
  <span style="color: #d0d0d0">inorder_traversal_util(tree,</span> <span style="color: #d0d0d0">inorder_result)</span>
  
  <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">(inorder_result</span><span style="color: #40ffff">$getList</span><span style="color: #d0d0d0">())</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #d0d0d0">tree</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">make_tree(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">)</span>
<span style="color: #d0d0d0">inorder_path</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">inorder_traversal(tree)</span>
<span style="color: #d0d0d0">bfs_path</span> <span style="color: #d0d0d0">&lt;-</span> <span style="color: #d0d0d0">bfs(tree)</span>
<span style="color: #d0d0d0">cat(</span><span style="color: #ed9d13">&quot;Inorder traversal &gt; &quot;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">inorder_path)</span>
<span style="color: #d0d0d0">cat(</span><span style="color: #ed9d13">&quot;Breadth First Search &gt; &quot;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">bfs_path)</span>
</pre></td></tr></table></div>`},
	{name: "js_code", cnt: `<div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%">  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #999999; font-style: italic">// Tree data structure</span>
<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">TreeNode</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">function</span><span style="color: #d0d0d0">(node,</span> <span style="color: #d0d0d0">left=</span><span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">right=</span><span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.node</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">node;</span>
	<span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">left;</span>
	<span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">right;</span>
<span style="color: #d0d0d0">};</span>


<span style="color: #999999; font-style: italic">// function to get children objects of a node</span>
<span style="color: #d0d0d0">TreeNode.prototype.getChildren</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">function</span><span style="color: #d0d0d0">()</span> <span style="color: #d0d0d0">{</span>
    <span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">children</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[];</span>
    <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.left</span> <span style="color: #d0d0d0">!==</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
        <span style="color: #d0d0d0">children.push(</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.left);</span>
    <span style="color: #d0d0d0">}</span>
    <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.right</span> <span style="color: #d0d0d0">!==</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
        <span style="color: #d0d0d0">children.push(</span><span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.right);</span>
    <span style="color: #d0d0d0">}</span>
    <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">children;</span>
<span style="color: #d0d0d0">};</span>


<span style="color: #999999; font-style: italic">// function to build a tree</span>
<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">make_tree</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">function</span><span style="color: #d0d0d0">(index=</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #999999; font-style: italic">// Full binary tree (#7-nodes)</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(index</span> <span style="color: #d0d0d0">===</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">console.log(</span><span style="color: #ed9d13">&quot;Rendering full binary tree with 7 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">));</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">));</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">));</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t;</span>
	<span style="color: #d0d0d0">}</span> 
	
	<span style="color: #999999; font-style: italic">// Complete binary tree (#10-nodes)</span>
	<span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(index</span> <span style="color: #d0d0d0">===</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">console.log(</span><span style="color: #ed9d13">&quot;Rendering complete binary tree with 10 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">));</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">)));</span> 
		<span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">));</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #d0d0d0">t3);</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t;</span>
	<span style="color: #d0d0d0">}</span> 
	<span style="color: #999999; font-style: italic">// Perfect binary tree (#15-nodes)</span>
	<span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #d0d0d0">{</span>	
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(index</span> <span style="color: #d0d0d0">!=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">console.log(</span><span style="color: #ed9d13">&quot;Index not defined. Used 0 by default...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">}</span>
		<span style="color: #d0d0d0">console.log(</span><span style="color: #ed9d13">&quot;Rendering perfect binary tree with 15 nodes...&quot;</span><span style="color: #d0d0d0">)</span>
		<span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t4</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">))</span>
		<span style="color: #d0d0d0">t5</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">t2)</span>
		<span style="color: #d0d0d0">t6</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t3,</span> <span style="color: #d0d0d0">t4)</span>
		<span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">TreeNode(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t5,</span> <span style="color: #d0d0d0">t6)</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t</span>
	<span style="color: #d0d0d0">}</span>
<span style="color: #d0d0d0">};</span>


<span style="color: #999999; font-style: italic">// function for the Inorder Traversal of binary tree</span>
<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">inorder_traversal</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">function</span><span style="color: #d0d0d0">(tree,</span> <span style="color: #d0d0d0">inorder_path)</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(tree</span> <span style="color: #d0d0d0">!=</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">inorder_traversal(tree.left,</span> <span style="color: #d0d0d0">inorder_path);</span>
		<span style="color: #d0d0d0">inorder_path.push(tree.node);</span>
		<span style="color: #d0d0d0">inorder_traversal(tree.right,</span> <span style="color: #d0d0d0">inorder_path);</span>
	<span style="color: #d0d0d0">}</span>
	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">inorder_path;</span>
<span style="color: #d0d0d0">};</span>


<span style="color: #999999; font-style: italic">// function for the binary search tree</span>
<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">breadth_first_search</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">function</span><span style="color: #d0d0d0">(root)</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">queue</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[root];</span>
	<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">bfs_result</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[];</span>
	
	<span style="color: #6ab825; font-weight: bold">while</span> <span style="color: #d0d0d0">(queue.length</span> <span style="color: #d0d0d0">!=</span> <span style="color: #3677a9">0</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">current</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">queue.shift();</span>
		<span style="color: #d0d0d0">bfs_result.push(current.node);</span>
		
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(current.left</span> <span style="color: #d0d0d0">!=</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">queue.push(current.left)</span>
		<span style="color: #d0d0d0">}</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(current.right</span> <span style="color: #d0d0d0">!=</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">queue.push(current.right)</span>
		<span style="color: #d0d0d0">}</span>
	<span style="color: #d0d0d0">}</span>
	<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">bfs_result;</span>
<span style="color: #d0d0d0">};</span>


<span style="color: #999999; font-style: italic">// main function</span>
<span style="color: #6ab825; font-weight: bold">function</span> <span style="color: #d0d0d0">main()</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">tree</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">make_tree(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">);</span>
	<span style="color: #999999; font-style: italic">// console.log(tree.getChildren());</span>
	<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">inorder_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">[];</span>
	<span style="color: #d0d0d0">inorder_traversal(tree,</span> <span style="color: #d0d0d0">inorder_path);</span>
	<span style="color: #d0d0d0">console.log(</span><span style="color: #ed9d13">&quot;Inorder Traversal &gt; &quot;</span> <span style="color: #d0d0d0">+</span> <span style="color: #d0d0d0">inorder_path);</span>
	
	<span style="color: #6ab825; font-weight: bold">var</span> <span style="color: #d0d0d0">bfs_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">breadth_first_search(tree);</span>
	<span style="color: #d0d0d0">console.log(</span><span style="color: #ed9d13">&quot;Breadth First Search &gt; &quot;</span> <span style="color: #d0d0d0">+</span> <span style="color: #d0d0d0">bfs_path);</span>
<span style="color: #d0d0d0">}</span>


<span style="color: #d0d0d0">main()</span>
</pre></td></tr></table></div>
`},
	{name: "java_code", cnt: `<div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%">  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110</pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #999999; font-style: italic">// Breadth First Search implementation in binary tree</span>
<span style="color: #6ab825; font-weight: bold">import</span> <span style="color: #447fcf; text-decoration: underline">java.util.*</span><span style="color: #d0d0d0">;</span>


<span style="color: #6ab825; font-weight: bold">class</span> <span style="color: #447fcf; text-decoration: underline">Node</span> <span style="color: #d0d0d0">{</span>
	<span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">node;</span>
	<span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">left,</span> <span style="color: #d0d0d0">right;</span>

	<span style="color: #6ab825; font-weight: bold">public</span> <span style="color: #447fcf">Node</span><span style="color: #d0d0d0">(</span><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">x)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">node</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">x;</span>
		<span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">;</span>
	<span style="color: #d0d0d0">}</span>
	<span style="color: #6ab825; font-weight: bold">public</span> <span style="color: #447fcf">Node</span><span style="color: #d0d0d0">(</span><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">x,</span> <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">l,</span> <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">r)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">node</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">x;</span>
		<span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">left</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">l;</span>
		<span style="color: #6ab825; font-weight: bold">this</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">right</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">r;</span>
	<span style="color: #d0d0d0">}</span>
<span style="color: #d0d0d0">}</span>

<span style="color: #6ab825; font-weight: bold">public</span> <span style="color: #6ab825; font-weight: bold">class</span> <span style="color: #447fcf; text-decoration: underline">BreathFirstSearch</span><span style="color: #d0d0d0">{</span>

	<span style="color: #999999; font-style: italic">// Default : perfect binary tree (#15 nodes)</span>
	<span style="color: #6ab825; font-weight: bold">public</span> <span style="color: #d0d0d0">Node</span> <span style="color: #447fcf">make_tree</span><span style="color: #d0d0d0">()</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">System.</span><span style="color: #bbbbbb">out</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">println</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Rendering perfect binary tree with 15 nodes...&quot;</span><span style="color: #d0d0d0">);</span>
		<span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">));</span>
		<span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">));</span>
		<span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">));</span>
                <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t4</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">));</span>
                <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t5</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #d0d0d0">t2);</span>
                <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t6</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t3,</span> <span style="color: #d0d0d0">t4);</span>
                <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t5,</span> <span style="color: #d0d0d0">t6);</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t;</span>
	<span style="color: #d0d0d0">}</span>

	<span style="color: #6ab825; font-weight: bold">public</span> <span style="color: #d0d0d0">Node</span> <span style="color: #447fcf">make_tree</span><span style="color: #d0d0d0">(</span><span style="color: #6ab825; font-weight: bold">int</span> <span style="color: #d0d0d0">x)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #999999; font-style: italic">// full binary tree(#7 nodes)</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(x</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">1</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">System.</span><span style="color: #bbbbbb">out</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">println</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Rendering full binary tree with 7 nodes...&quot;</span><span style="color: #d0d0d0">);</span>
			<span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">));</span>
        	        <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">));</span>
        	        <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">));</span>
        	        <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t;</span>
		<span style="color: #d0d0d0">}</span>
		<span style="color: #999999; font-style: italic">// complete binary tree(#10 nodes)</span>
		<span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #447fcf">if</span> <span style="color: #d0d0d0">(x</span> <span style="color: #d0d0d0">==</span> <span style="color: #3677a9">2</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">System.</span><span style="color: #bbbbbb">out</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">println</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Rendering complete binary tree with 10 nodes...&quot;</span><span style="color: #d0d0d0">);</span>
			<span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t1</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">4</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">8</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">9</span><span style="color: #d0d0d0">));</span>
        	        <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t2</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">2</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t1,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">5</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">0</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">));</span>
        	        <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t3</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">3</span><span style="color: #d0d0d0">,</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">6</span><span style="color: #d0d0d0">),</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">7</span><span style="color: #d0d0d0">));</span>
        	        <span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">t</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Node(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">t2,</span> <span style="color: #d0d0d0">t3);</span>
        	        <span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">t;</span>
		<span style="color: #d0d0d0">}</span> <span style="color: #6ab825; font-weight: bold">else</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #447fcf">make_tree</span><span style="color: #d0d0d0">();</span>
		<span style="color: #d0d0d0">}</span>
	<span style="color: #d0d0d0">}</span>

	<span style="color: #6ab825; font-weight: bold">public</span> <span style="color: #d0d0d0">LinkedList&lt;Integer&gt;</span> <span style="color: #447fcf">inorder_traversal</span><span style="color: #d0d0d0">(Node</span> <span style="color: #d0d0d0">tree,</span> <span style="color: #d0d0d0">LinkedList&lt;Integer&gt;</span> <span style="color: #d0d0d0">_path)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(tree</span> <span style="color: #d0d0d0">!=</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">inorder_traversal(tree.</span><span style="color: #bbbbbb">left</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">_path);</span>
			<span style="color: #d0d0d0">_path.</span><span style="color: #bbbbbb">add</span><span style="color: #d0d0d0">(tree.</span><span style="color: #bbbbbb">node</span><span style="color: #d0d0d0">);</span>
			<span style="color: #d0d0d0">inorder_traversal(tree.</span><span style="color: #bbbbbb">right</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">_path);</span>
		<span style="color: #d0d0d0">}</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">_path;</span>
	<span style="color: #d0d0d0">}</span>


	<span style="color: #6ab825; font-weight: bold">public</span> <span style="color: #d0d0d0">LinkedList&lt;Integer&gt;</span> <span style="color: #447fcf">breath_first_search</span><span style="color: #d0d0d0">(Node</span> <span style="color: #d0d0d0">root)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">Queue&lt;Node&gt;</span> <span style="color: #d0d0d0">queue</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">LinkedList&lt;Node&gt;();</span>
		<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(root</span> <span style="color: #d0d0d0">==</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">;</span>
		<span style="color: #d0d0d0">}</span>

		<span style="color: #d0d0d0">LinkedList&lt;Integer&gt;</span> <span style="color: #d0d0d0">bfs_result</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">LinkedList&lt;Integer&gt;();</span>

		<span style="color: #d0d0d0">queue.</span><span style="color: #bbbbbb">add</span><span style="color: #d0d0d0">(root);</span>
		<span style="color: #6ab825; font-weight: bold">while</span> <span style="color: #d0d0d0">(!</span> <span style="color: #d0d0d0">queue.</span><span style="color: #bbbbbb">isEmpty</span><span style="color: #d0d0d0">())</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">current</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">(Node)</span> <span style="color: #d0d0d0">queue.</span><span style="color: #bbbbbb">remove</span><span style="color: #d0d0d0">();</span>
			<span style="color: #d0d0d0">bfs_result.</span><span style="color: #bbbbbb">add</span><span style="color: #d0d0d0">(current.</span><span style="color: #bbbbbb">node</span><span style="color: #d0d0d0">);</span>
			<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(current.</span><span style="color: #bbbbbb">left</span> <span style="color: #d0d0d0">!=</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">){</span>
				<span style="color: #d0d0d0">queue.</span><span style="color: #bbbbbb">add</span><span style="color: #d0d0d0">(current.</span><span style="color: #bbbbbb">left</span><span style="color: #d0d0d0">);</span>
			<span style="color: #d0d0d0">}</span>
			<span style="color: #6ab825; font-weight: bold">if</span> <span style="color: #d0d0d0">(current.</span><span style="color: #bbbbbb">right</span> <span style="color: #d0d0d0">!=</span> <span style="color: #6ab825; font-weight: bold">null</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">{</span>
				<span style="color: #d0d0d0">queue.</span><span style="color: #bbbbbb">add</span><span style="color: #d0d0d0">(current.</span><span style="color: #bbbbbb">right</span><span style="color: #d0d0d0">);</span>
			<span style="color: #d0d0d0">}</span>
		<span style="color: #d0d0d0">}</span>
		<span style="color: #6ab825; font-weight: bold">return</span> <span style="color: #d0d0d0">bfs_result;</span>
	<span style="color: #d0d0d0">}</span>

	<span style="color: #6ab825; font-weight: bold">public</span> <span style="color: #6ab825; font-weight: bold">static</span> <span style="color: #6ab825; font-weight: bold">void</span> <span style="color: #447fcf">main</span><span style="color: #d0d0d0">(String[]</span> <span style="color: #d0d0d0">args)</span> <span style="color: #d0d0d0">{</span>
		<span style="color: #d0d0d0">BreathFirstSearch</span> <span style="color: #d0d0d0">bfs</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">BreathFirstSearch();</span>
		<span style="color: #d0d0d0">Node</span> <span style="color: #d0d0d0">tree</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">bfs.</span><span style="color: #bbbbbb">make_tree</span><span style="color: #d0d0d0">(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">);</span>

		<span style="color: #d0d0d0">LinkedList&lt;Integer&gt;</span> <span style="color: #d0d0d0">inorder_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">LinkedList&lt;Integer&gt;();</span>
		<span style="color: #d0d0d0">inorder_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">bfs.</span><span style="color: #bbbbbb">inorder_traversal</span><span style="color: #d0d0d0">(tree,</span> <span style="color: #d0d0d0">inorder_path);</span>
		<span style="color: #d0d0d0">System.</span><span style="color: #bbbbbb">out</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Inorder traversal &gt; &quot;</span><span style="color: #d0d0d0">);</span>
		<span style="color: #6ab825; font-weight: bold">for</span> <span style="color: #d0d0d0">(Integer</span> <span style="color: #d0d0d0">x:</span> <span style="color: #d0d0d0">inorder_path)</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">System.</span><span style="color: #bbbbbb">out</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot; &quot;</span> <span style="color: #d0d0d0">+</span> <span style="color: #d0d0d0">x);</span>
		<span style="color: #d0d0d0">}</span>
		<span style="color: #d0d0d0">System.</span><span style="color: #bbbbbb">out</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">println</span><span style="color: #d0d0d0">();</span>

		<span style="color: #d0d0d0">LinkedList&lt;Integer&gt;</span> <span style="color: #d0d0d0">bfs_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">LinkedList&lt;Integer&gt;();</span>
		<span style="color: #d0d0d0">bfs_path</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">bfs.</span><span style="color: #bbbbbb">breath_first_search</span><span style="color: #d0d0d0">(tree);</span>
		<span style="color: #d0d0d0">System.</span><span style="color: #bbbbbb">out</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">print</span><span style="color: #d0d0d0">(</span><span style="color: #ed9d13">&quot;Breath First Search traversal &gt; &quot;</span><span style="color: #d0d0d0">);</span>
		<span style="color: #6ab825; font-weight: bold">for</span> <span style="color: #d0d0d0">(Integer</span> <span style="color: #d0d0d0">x:</span> <span style="color: #d0d0d0">bfs_path)</span> <span style="color: #d0d0d0">{</span>
			<span style="color: #d0d0d0">System.</span><span style="color: #bbbbbb">out</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">print</span><span style="color: #d0d0d0">(x</span> <span style="color: #d0d0d0">+</span> <span style="color: #ed9d13">&quot; &quot;</span><span style="color: #d0d0d0">);</span>
		<span style="color: #d0d0d0">}</span>
		<span style="color: #d0d0d0">System.</span><span style="color: #bbbbbb">out</span><span style="color: #d0d0d0">.</span><span style="color: #bbbbbb">println</span><span style="color: #d0d0d0">();</span>

	<span style="color: #d0d0d0">}</span>	
<span style="color: #d0d0d0">}</span>
</pre></td></tr></table></div>`}
];

var img_path = "./imgs/tech-icons/";
var lang_indicator = "./assets/right-icon.png";

var langicon_path = { 
	"py_code" : "python-icon.png",
	"jl_code" : "julia-icon.png",
	"go_code" : "go-icon.png",
	"r_code" : "r-icon.png",
	"js_code" : "javascript-icon.png",
	"java_code" : "java-icon.png"
};

var current_id = 'py_code';
var code_content = '#codesample-content';
var current_content = '';

$('.code-lang').on('click', function() {
	current_id = $(this).attr("id");
	var langs = document.querySelectorAll('.code-lang');
	
	$.each(langs, function(_, v) {
		$(v).removeClass('is_active');
		$("#" + $(v).attr("id") + ' .lang-icon').children("img").attr("src", img_path+ langicon_path[$(v).attr("id")]);
	});
	
	$(this).addClass('is_active');
	$("#" + $(this).attr("id") + ' .lang-icon').children("img").attr("src", lang_indicator);
	
	$.each(code_samples, function(i, v) {
		if(v.name === current_id) {
			current_content = v.cnt;
		}
	});
	$(code_content).html(current_content);
});