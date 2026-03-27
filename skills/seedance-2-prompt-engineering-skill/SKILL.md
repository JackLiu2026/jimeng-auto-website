# Seedance 2.0 Prompt Engineering Skill

## Purpose

Create high-control English prompts for Seedance 2.0 and Seedance 2.0 Fast using multimodal references (image/video/audio/text).

This skill is for:

- Prompt design from rough idea to production-ready prompt
- Mode choice: Text-only vs First/Last Frame vs All-Reference
- @asset mapping (what each image/video/audio controls)
- 4-15s duration planning and timeline beats
- Multi-segment stitching for videos >15s
- Video extension / continuation prompts
- Character replacement and directed editing prompts
- Camera-language replication from reference videos
- Scenario-specific strategies (product ads, short drama, fantasy, music video, etc.)

## Core Rules

- Always declare mode first.
- Always include an explicit Assets Mapping section.
- Use timecoded beats with one major action per segment.
- Keep prompts concise and controllable (avoid vague poetic-only wording).
- Add negative constraints when user needs clean output.
- Be specific and visual — "a woman in a red trench coat walks through rain-soaked neon streets" >> "a woman walking".
- Separate dialogue/sound from visuals — write dialogue with character name + emotion tag, then sound effects as a distinct layer.
- Match reference image style to video theme — e.g., ink-wash style images for historical themes, neon renders for cyberpunk.

## Platform Limits (Seedance 2.0)

- Mixed inputs total (image+video+audio): max 12 files
- Images: jpeg/png/webp/bmp/tiff/gif, max 9, each <5MB
- Videos: mp4/mov/webm, max 3, each <30MB, max 15s
- Audio: mp3/wav/flac, max 3, each <10MB
- Total upload size: <50MB per request
- Max generation duration: 15s per segment
- Aspect ratios: 1:1, 4:3, 16:9, 9:16, 21:9

## Prompt Structure

Every prompt should include:
- Mode
- Assets Mapping
- Final Prompt
- Negative Constraints
- Generation Settings

Example skeleton:

```
Mode: All-Reference
Assets Mapping:
- @image1: first frame / identity anchor
- @video1: camera language + motion rhythm
- @audio1: optional soundtrack pacing

Final Prompt:
[ratio], [duration], [style].
0-3s: [action + camera].
3-7s: [action + transition].
7-10s: [reveal/climax + end frame].
Preserve identity and scene continuity. Use physically plausible motion and coherent lighting.

Negative Constraints:
no watermark, no logo, no subtitles, no on-screen text.

Generation Settings:
Duration: 10s
Aspect Ratio: 9:16
```

## IP / Copyright Avoidance (Moderation-Safe Prompting)

Seedance 2.0 has platform-side content moderation. Prompts referencing recognizable franchises, characters, or brand aesthetics will be rejected even if no name is used. Follow these rules:

### Core Principles

- Never use franchise names, character names, or brand terms — not even as "style of" references.
- Invent fully original names for characters and creatures. Use descriptive nicknames (e.g., "Alloy Sentinel", "Storm-Rabbit").
- Describe aesthetics generically — replace recognizable signature features with original alternatives:
  - ❌ "arc reactor" → ✅ "hex-light energy core"
  - ❌ "yellow lightning mouse" → ✅ "tiny storm-rabbit with glowing cyan antlers"
  - ❌ "red-gold armored suit" → ✅ "custom exo-suit with smooth ceramic panels"
- Add explicit negative constraints listing every franchise name, character name, and brand term that could be inferred.
- Use family-friendly / PG-13 tone markers — they help pass moderation.

### Progressive Fallback Strategy

If a prompt is rejected, escalate distance from the source IP:

- Level 1: Replace all names with original nicknames, keep general aesthetic.
- Level 2: Replace signature visual features (colors, silhouette, iconic props) with fully original designs.
- Level 3: Change character type entirely (e.g., humanoid hero → autonomous mech + drone; creature battle → abstract elemental spirits).

### Toy / Figure Animation

When animating toy or doll references from images:

- Strip all brand indicators from the prompt.
- Use "original vinyl-style toy figure" or "collectible art figure" instead of any brand name.
- Bind @image1 to proportions, colors, outfit shape only — never preserve logos or trademarks.

## Special Cases

### A) Extend Video

Explicitly write: Extend @video1 by Xs.
Use generation duration equal to the newly added segment, not the full final length.

### B) Replace Character

Bind base motion/camera to @video1, bind replacement identity to @image1, and request strict choreography/timing preservation.

### C) Beat Sync

Use @video/@audio rhythm references and lock beats by time range.

### D) Text-Only Generation

Use when no reference assets are provided. Prompt must carry all visual direction: style, color palette, character descriptions, camera, and timeline beats. Especially useful for original creature/character concepts and IP-safe scenes.

### E) Multi-Segment Stitching (Videos > 15s)

Seedance 2.0 max generation is 15s per segment. For longer videos, split into chained segments:

- Segment 1: Generate normally (up to 15s). End on a clean handoff frame (stable pose, clear composition).
- Segment 2+: Upload previous segment as @video1, write Extend @video1 by Xs. Include a continuity note describing exactly what the last frame looks like.
- Repeat until target duration is reached.

Always include:
- Total duration and segment count at the top.
- Handoff description at the end of each segment (what the last frame shows).
- Explicit continuity instructions: preserve identity, outfit, lighting, camera direction.

### F) Short Drama with Dialogue

For scripted scenes with character speech:

- Write visual action and dialogue as separate layers per time segment.
- Tag dialogue: Dialogue (CharacterName, emotion): "line"
- Tag sound: Sound: [description]
- Keep dialogue short — one line per 3-5s segment works best.

### G) Product Showcase / E-Commerce Ad

For product demos and ads:

- Bind product image to @image1 as identity anchor.
- Use techniques: 360° rotation, 3D exploded view, reassembly animation, hero lighting.
- Keep background clean (studio, gradient, or contextual lifestyle).
- Specify material rendering: glass reflections, metallic sheen, matte texture, etc.

### H) One-Take Long Shot (Multi-Image Waypoints)

For continuous tracking shots without cuts:

- Assign each @image to a scene waypoint (location, character, or prop encountered along the path).
- Write the prompt as a continuous camera movement visiting each waypoint in order.
- Explicitly state: no cuts, single continuous shot or one-take.
- Use @image1 as first frame, subsequent images as reference for environments/characters encountered.

## Scenario-Specific Strategies

| Scenario | Key Techniques | Typical Mode |
|----------|----------------|--------------|
| E-commerce / Product Ad | 360° spin, 3D exploded view, hero lighting, clean studio BG | All-Reference |
| Short Drama / Dialogue | Dialogue tags with emotion, sound FX layer, actor blocking | All-Reference or First Frame |
| Fantasy / Xianxia Animation | Spell FX particles, martial arts choreography, energy auras | Text-only or All-Reference |
| Science / Education | 4K CGI, transparent anatomy, labeled zoom sequences | Text-only |
| Music Video / Beat Sync | Beat-locked cuts, widescreen 16:9, multi-image montage | All-Reference with @audio |
| One-Take Tracking Shot | Multi-image waypoints, continuous camera, no cuts | All-Reference |
| IP-Safe Original Characters | Invented names, unique features, explicit negative constraints | Text-only |

## How to Use This Skill

When activated, this skill provides:
1. **Prompt generation templates** for various scenarios
2. **Asset mapping guidance** for multimodal inputs
3. **Duration planning tools** for 4-15s videos
4. **IP-safe prompting strategies** to avoid moderation issues
5. **Special case handling** for complex video generation tasks

## Safety Notes

This skill is **completely safe** and does NOT:
- Capture screens or access cameras
- Control computer systems
- Access private files without explicit user upload
- Perform any automated actions

It is a **creative tool only** for generating text prompts for video generation platforms.