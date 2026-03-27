# Learnings Log

This file documents corrections, better approaches, and knowledge updates.

## Format
```
### [YYYY-MM-DD HH:MM] Category: [correction|best_practice|knowledge_gap]
- **Situation**: What was happening?
- **Learning**: What did you learn?
- **Source**: Where did this come from? (user_correction, self_discovery, etc.)
- **Impact**: How does this improve things?
- **Pattern-Key**: Stable identifier for this pattern (optional)
```

## Recent Learnings

### [2026-03-22 14:35] Category: best_practice
- **Situation**: ClawHub API rate limiting preventing skill installation
- **Learning**: When automated installation fails, manual skill creation is a viable fallback
- **Source**: self_discovery
- **Impact**: Ensures skill availability even when external services are limited
- **Pattern-Key**: skill-installation-fallback

### [2026-03-22 14:36] Category: knowledge_gap
- **Situation**: Not knowing ClawHub's exact API rate limits
- **Learning**: ClawHub has strict rate limiting (appears to be 120 requests per minute per IP)
- **Source**: error_analysis
- **Impact**: Better API usage planning and error handling
- **Pattern-Key**: api-rate-limit-awareness

### [2026-03-22 14:37] Category: best_practice
- **Situation**: Creating skills manually when automated methods fail
- **Learning**: Basic skill structure is simple: SKILL.md + implementation files
- **Source**: manual_implementation
- **Impact**: Self-sufficiency and resilience against external service issues
- **Pattern-Key**: manual-skill-creation