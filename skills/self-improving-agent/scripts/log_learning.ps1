#!/usr/bin/env pwsh
# Log a learning to LEARNINGS.md

param(
    [Parameter(Mandatory=$true)]
    [string]$Category,
    
    [Parameter(Mandatory=$true)]
    [string]$Situation,
    
    [Parameter(Mandatory=$true)]
    [string]$Learning,
    
    [string]$Source = "manual",
    
    [string]$Impact = "Improved understanding or process"
)

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
$learningDir = Join-Path $PSScriptRoot ".learnings"
$learningFile = Join-Path $learningDir "LEARNINGS.md"

# Ensure directory exists
if (-not (Test-Path $learningDir)) {
    New-Item -ItemType Directory -Path $learningDir -Force | Out-Null
}

# Create learning entry
$entry = @"

### [$timestamp] Category: $Category
- **Situation**: $Situation
- **Learning**: $Learning
- **Source**: $Source
- **Impact**: $Impact

"@

# Append to file
Add-Content -Path $learningFile -Value $entry
Write-Host "Learning logged to $learningFile"