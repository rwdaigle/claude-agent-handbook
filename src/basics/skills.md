---
title: Skills
eleventyNavigation:
  key: Skills
  parent: Overview
  order: 3
---

[Claude Skills][1] 

Subagents have the highest isolation guarantees amongst all the Claude Agent primitives.

## Runtime properties
Subagents have the following runtime properties:
- They have their own context window separate from their parent which is established when they are created _and thrown away when they are finished_
- They can be executed in parallel with other subagents (or other instances of themselves)
- They can specify their own model, tool-use, and permissions distinct from their parent

## When to use Subagents
Use Subagents for the following:
- To establish and control concurrency between long-running tasks
- When a task requires a lot of token usage to complete, but whose usable result is much simpler
- When a task requires much different boundaries and capabilities than its parent

## Examples

[1]:	https://code.claude.com/docs/en/skills