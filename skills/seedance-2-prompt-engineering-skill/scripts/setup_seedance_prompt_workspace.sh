#!/bin/bash
# Quick setup helper for Seedance 2.0 prompt engineering workspace

echo "Setting up Seedance 2.0 prompt engineering workspace..."

# Create workspace directory
WORKSPACE_DIR="${1:-./seedance-workspace}"
mkdir -p "$WORKSPACE_DIR"

# Create subdirectories
mkdir -p "$WORKSPACE_DIR/references"
mkdir -p "$WORKSPACE_DIR/prompts"
mkdir -p "$WORKSPACE_DIR/outputs"

# Create template files
cat > "$WORKSPACE_DIR/prompts/template_basic.md" << 'EOF'
# Seedance 2.0 Prompt Template

## Mode
[All-Reference | First Frame | Text-only]

## Assets Mapping
- @image1: [purpose]
- @video1: [purpose]
- @audio1: [purpose]

## Final Prompt
[Aspect Ratio], [Duration], [Style].
0-3s: [action + camera].
3-7s: [action + transition].
7-10s: [reveal/climax + end frame].

## Negative Constraints
no watermark, no logo, no subtitles, no on-screen text.

## Generation Settings
Duration: [10s]
Aspect Ratio: [9:16]
EOF

cat > "$WORKSPACE_DIR/prompts/template_dialogue.md" << 'EOF'
# Dialogue Scene Template

## Mode
All-Reference

## Assets Mapping
- @image1: character identity / first frame
- @video1: camera movement reference
- @audio1: dialogue/soundtrack

## Final Prompt
[9:16], [12s], cinematic short drama.

0-4s: [CharacterA] enters scene, establishing shot.
Dialogue (CharacterA, calm): "Hello there."

4-8s: [CharacterB] reacts, medium close-up.
Dialogue (CharacterB, surprised): "I wasn't expecting you."

8-12s: Both characters in frame, emotional resolution.
Sound: subtle background music, ambient sounds.

## Negative Constraints
no watermark, no logos, no text overlays.

## Generation Settings
Duration: 12s
Aspect Ratio: 9:16
EOF

cat > "$WORKSPACE_DIR/README.md" << 'EOF'
# Seedance 2.0 Prompt Engineering Workspace

This workspace is organized for creating and managing Seedance 2.0 video generation prompts.

## Directory Structure
- `references/` - Store reference images, videos, and audio files
- `prompts/` - Store prompt templates and generated prompts
- `outputs/` - Store generated videos and results

## Quick Start
1. Place reference files in `references/` directory
2. Use templates in `prompts/` to create your prompts
3. Follow the Seedance 2.0 skill guidelines for best results

## Naming Convention
- Reference files: `ref_[type]_[purpose].[ext]` (e.g., `ref_image_character.jpg`)
- Prompt files: `prompt_[scenario]_[date].md` (e.g., `prompt_dialogue_20240325.md`)
EOF

echo "Workspace created at: $WORKSPACE_DIR"
echo "Template files created:"
echo "  - prompts/template_basic.md"
echo "  - prompts/template_dialogue.md"
echo "  - README.md"
echo ""
echo "Next steps:"
echo "1. Add reference files to references/ directory"
echo "2. Customize prompt templates for your project"
echo "3. Use the Seedance 2.0 skill to generate production-ready prompts"