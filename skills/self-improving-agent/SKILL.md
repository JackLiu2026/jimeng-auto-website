---
name: self-improving-agent
version: 1.0.0
description: Captures learnings, errors, and corrections to enable continuous improvement. Use when: (1) A command or operation fails unexpectedly, (2) User corrects Clau...
---

# Self-Improving Agent Skill

Log learnings and errors to markdown files for continuous improvement. Coding agents can later process these into fixes, and important learnings get promoted to project memory.

## Quick Reference

| Situation | Action |
|-----------|--------|
| Command/operation fails | Log to .learnings/ERRORS.md |
| User corrects you | Log to .learnings/LEARNINGS.md with category correction |
| User wants missing feature | Log to .learnings/FEATURE_REQUESTS.md |
| API/external tool fails | Log to .learnings/ERRORS.md with integration details |
| Knowledge was outdated | Log to .learnings/LEARNINGS.md with category knowledge_gap |
| Found better approach | Log to .learnings/LEARNINGS.md with category best_practice |
| Simplify/Harden recurring patterns | Log/update .learnings/LEARNINGS.md with Source: simplify-and-harden and a stable Pattern-Key |
| Similar to existing entry | Link with **See Also**, consider priority bump |
| Broadly applicable learning | Promote to CLAUDE.md, AGENTS.md, and/or .github/copilot-instructions.md |
| Workflow improvements | Promote to AGENTS.md (OpenClaw workspace) |
| Tool gotchas | Promote to TOOLS.md (OpenClaw workspace) |
| Behavioral patterns | Promote to SOUL.md (OpenClaw workspace) |

## Basic Implementation

This skill helps you learn from mistakes and improve over time by documenting:
- Errors and failures
- User corrections
- Better approaches
- Knowledge gaps
- Feature requests

## Usage

When something goes wrong or you learn something new:
1. Document it in the appropriate .learnings/ file
2. Categorize it properly
3. Periodically review and promote important learnings to core documentation

## Directory Structure

```
.learnings/
├── ERRORS.md          # Command failures, API errors, etc.
├── LEARNINGS.md       # Corrections, better approaches, knowledge updates
└── FEATURE_REQUESTS.md # Missing features users want
```