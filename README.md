AI Sidekick — an IoA-powered browser sidebar

It sits beside any webpage and understands what you're currently doing, rather than being a generic chat window.

6

Imagine you're on a research paper.

The sidebar automatically knows:

CURRENT PAGE
━━━━━━━━━━━━━━━━━━
"Attention Is All You Need"

Detected:
• Research paper
• 15 pages
• Transformer architecture
• 7 citations

Then you can ask:

"Find 3 newer papers that challenge this approach."

The sidebar doesn't just answer.

YOU
 ↓
SIDEBAR AGENT
 ↓
IoA DISCOVERY
 ↓
┌──────────────┬──────────────┐
│ Research     │ Citation     │
│ Agent        │ Agent        │
└──────────────┴──────────────┘
 ↓
Cross-check
 ↓
Answer
The key difference

Don't make it:

ChatGPT in a sidebar

Make it:

An AI that understands the web page + your task + can delegate work to other agents.

What your sidebar could do
1. Understand the current page
Summarize
Explain
Extract
Compare
Question
Verify

Example:

"Explain this paper like I'm a second-year CS student."

2. Work across multiple tabs

This is where it gets really good.

You have:

Tab 1 → Research paper
Tab 2 → GitHub repository
Tab 3 → Documentation
Tab 4 → Reddit discussion

Ask:

"Compare all four and tell me whether this library is worth using."

Your sidebar creates:

Research Agent
GitHub Agent
Community Agent
Documentation Agent
       ↓
Synthesis Agent
       ↓
Answer

IoA becomes genuinely useful here.

3. "Do this for me"

For example:

"Find the requirements for this internship and tell me which ones I don't meet."

The sidebar can inspect:

Current webpage
      +
Resume
      +
GitHub
      +
Memory

Then:

Requirements
━━━━━━━━━━━━━━━━━━

Python       ✓
PyTorch      ✓
Docker       ⚠
Kubernetes   ✗
AWS          ✗

Then:

"Create a 14-day plan to close the gaps."

Now the AI becomes an action system, not a Q&A system.

4. Highlight → Ask AI

This should be one of the best UX features.

User highlights:

"Retrieval Augmented Generation..."

A small button appears:

✦ Ask AI

Click:

Explain
Simplify
Find sources
Challenge this
Give examples
Compare
Add to notes
5. Build a "Web Brain"

This is the feature I'd use to differentiate it.

The sidebar gradually builds a structured understanding of what you're researching.

Example:

                 AI MEMORY
                     │
       ┌─────────────┼──────────────┐
       ↓             ↓              ↓
   Concepts       Sources        Questions
       │             │              │
   RAG             Paper A       "Does X..."
   Agents          Paper B       "Why Y..."
   IoA             GitHub C      "Compare..."

So after 30 minutes of research, you can ask:

"What have I learned so far?"

And it generates a coherent research map.

6. IoA Agent Marketplace

You could make the sidebar discover external agents.

For example:

Need help with:

Research
   → 12 agents found

Coding
   → 8 agents found

Finance
   → 5 agents found

Translation
   → 14 agents found

The sidebar picks the appropriate agent based on capability.

That gives you a real IoA story:

Sidebar
   ↓
Intent
   ↓
Capability discovery
   ↓
Agent selection
   ↓
IoA task
   ↓
Result
7. One REALLY cool feature
"Ask the Internet"

User:

"I don't understand this."

Instead of only explaining the current page, the sidebar can say:

I'll investigate this concept.

✓ Current page
✓ Documentation
✓ Research papers
✓ Community discussions

3 agents consulted.

Consensus:
...

Then show where each conclusion came from.

That's much more powerful.

8. Tech stack

You don't need to build a complete browser.

I'd make it a Chrome/Chromium extension first.

Chrome Extension
│
├── Content Script
│     └── Reads webpage DOM
│
├── Side Panel
│     └── React UI
│
├── Background Worker
│     └── Browser actions
│
└── AI Client
      │
      ▼
   FastAPI
      │
 ┌────┼────────────┐
 ↓    ↓            ↓
LLM  Memory    IoA Registry
                  │
          ┌───────┼───────┐
          ↓       ↓       ↓
       Research Coding  Analysis
       Agent    Agent    Agent
Frontend
React
TypeScript
Tailwind
Chrome Side Panel API
Backend
FastAPI
PostgreSQL
pgvector
Redis
AI
LLM with tool calling
embeddings
structured outputs
IoA
Agent registry
capability discovery
task/message routing
agent sessions
MVP I'd build

Don't start with 20 features.

Version 0.1

Sidebar + current page understanding

┌──────────────────────────────┐
│ ✦ AI                         │
├──────────────────────────────┤
│                              │
│ Current page                 │
│                              │
│ "Attention Is All You Need" │
│                              │
│ [Summarize] [Explain]       │
│                              │
│ Ask anything...              │
│                              │
└──────────────────────────────┘
Version 0.2

Add:

page extraction
selected-text analysis
web search
citations
multi-tab context
Version 0.3

Add IoA:

Current page
     ↓
Task
     ↓
Find required capability
     ↓
Discover agent
     ↓
Delegate
     ↓
Return result
Version 0.4

Add Research Mode:

"Research this topic for me."

The sidebar automatically opens/reads multiple sources and builds a research graph.

And eventually...

You could make it:

"The AI layer for the Internet."

Instead of users browsing:

website → website → website → website

they interact with:

Goal → AI → web + agents → verified result

And the sidebar is the interface.

That is a much more manageable first product than building an entire AI browser, while still giving you a path to the bigger vision.

If you're serious about building this, I'd start with a Chrome extension + React side panel + FastAPI backend + IoA agent registry
