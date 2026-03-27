#!/usr/bin/env pwsh
# Log an error to ERRORS.md

param(
    [Parameter(Mandatory=$true)]
    [string]$ErrorType,
    
    [Parameter(Mandatory=$true)]
    [string]$Context,
    
    [Parameter(Mandatory=$true)]
    [string]$Error,
    
    [string]$RootCause = "Unknown",
    
    [string]$Fix = "Not yet resolved",
    
    [string]$Prevention = "Needs investigation"
)

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
$learningDir = Join-Path $PSScriptRoot ".learnings"
$errorFile = Join-Path $learningDir "ERRORS.md"

# Ensure directory exists
if (-not (Test-Path $learningDir)) {
    New-Item -ItemType Directory -Path $learningDir -Force | Out-Null
}

# Create error entry
$entry = @"

### [$timestamp] $ErrorType
- **Context**: $Context
- **Error**: $Error
- **Root Cause**: $RootCause
- **Fix/Workaround**: $Fix
- **Prevention**: $Prevention

"@

# Append to file
Add-Content -Path $errorFile -Value $entry
Write-Host "Error logged to $errorFile"