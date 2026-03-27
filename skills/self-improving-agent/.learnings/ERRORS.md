# Errors Log

This file documents errors, failures, and unexpected behaviors for continuous improvement.

## Format
```
### [YYYY-MM-DD HH:MM] Error Type
- **Context**: What were you trying to do?
- **Error**: What went wrong?
- **Root Cause**: Why did it happen?
- **Fix/Workaround**: How was it resolved?
- **Prevention**: How to avoid in future?
```

## Recent Errors

### [2026-03-22 14:30] ClawHub API Rate Limit
- **Context**: Trying to install skills via clawhub CLI
- **Error**: "Rate limit exceeded (retry in 1s, remaining: 0/120, reset in 1s)"
- **Root Cause**: ClawHub API has strict rate limiting per IP address
- **Fix/Workaround**: Wait longer between requests, consider logging in for higher limits
- **Prevention**: Implement exponential backoff for API calls, cache responses

### [2026-03-22 14:25] Skill Installation Stuck
- **Context**: Installing skills via `clawhub install`
- **Error**: Process stuck at "Resolving [skill-name]" stage
- **Root Cause**: Network/API issues with ClawHub service
- **Fix/Workaround**: Manual skill creation as fallback
- **Prevention**: Have backup installation methods, verify network connectivity first