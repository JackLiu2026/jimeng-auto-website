# Seedance 2.0 Prompt Recipes

Ready-to-use prompt templates for common scenarios.

## 1. Product Showcase (E-commerce)

**Use case**: Showcasing products with professional animation

```
Mode: All-Reference
Assets Mapping:
- @image1: product photo (identity anchor)
- @video1: optional camera movement reference

Final Prompt:
9:16, 8s, studio product showcase.
0-2s: Product appears with subtle glow, slow 360° rotation begins.
2-5s: Smooth rotation continues, highlight details with dynamic lighting.
5-8s: Product settles to front view, final hero shot with brand logo reveal (if permitted).

Negative Constraints:
no human hands, no messy background, no text unless brand-approved.

Generation Settings:
Duration: 8s
Aspect Ratio: 9:16
Style: Photorealistic CGI
```

## 2. Short Drama Scene

**Use case**: Character-driven narrative scenes

```
Mode: All-Reference
Assets Mapping:
- @image1: character reference (first frame)
- @video1: camera movement reference
- @audio1: dialogue/soundtrack

Final Prompt:
16:9, 12s, cinematic short drama.
0-4s: Character enters rainy street, establishing wide shot.
Dialogue (Character, determined): "I have to find them."
Sound: rain, distant thunder.

4-8s: Close-up on character's face, emotional intensity.
Sound: tense music builds.

8-12s: Character turns, reveals destination in background.
Sound: music resolves, rain continues.

Negative Constraints:
no watermark, no logos, no unrealistic physics.

Generation Settings:
Duration: 12s
Aspect Ratio: 16:9
Style: Cinematic, moody lighting
```

## 3. Fantasy Animation

**Use case**: Magical/fantasy scenes with special effects

```
Mode: Text-only or All-Reference
Assets Mapping:
- @image1: character/creature design

Final Prompt:
9:16, 10s, fantasy animation.
0-3s: Mage raises hands, energy particles begin to swirl.
3-7s: Spell forms intricate patterns, glowing runes appear in air.
7-10s: Energy releases in controlled burst, mage lowers hands.

Negative Constraints:
no violent imagery, no dark fantasy elements, family-friendly.

Generation Settings:
Duration: 10s
Aspect Ratio: 9:16
Style: Anime-inspired, vibrant colors
```

## 4. Educational Explainer

**Use case**: Science/educational content

```
Mode: Text-only
Assets Mapping:
(none - text-only generation)

Final Prompt:
16:9, 15s, educational 3D animation.
0-5s: Earth rotates in space, labels appear for continents.
5-10s: Zoom to specific region, show geological features forming.
10-15s: Cross-section reveals internal structure with labels.

Negative Constraints:
no artistic interpretation, factual accuracy required.

Generation Settings:
Duration: 15s
Aspect Ratio: 16:9
Style: Scientific 3D visualization
```

## 5. Music Visualizer

**Use case**: Music video/beat sync animations

```
Mode: All-Reference with @audio
Assets Mapping:
- @audio1: music track (beat reference)
- @image1: visual style reference

Final Prompt:
16:9, 30s (multi-segment), music visualizer.
Segment 1 (0-15s): Abstract shapes pulse to beat, color shifts with melody.
Segment 2 (15-30s): Extend @video1 by 15s, introduce geometric patterns.

Negative Constraints:
no recognizable characters, abstract only.

Generation Settings:
Duration: 15s per segment
Aspect Ratio: 16:9
Style: Abstract, vibrant, rhythmic
```

## 6. One-Take Tracking Shot

**Use case**: Continuous camera movement through environments

```
Mode: All-Reference
Assets Mapping:
- @image1: starting location
- @image2: midpoint location
- @image3: destination

Final Prompt:
21:9, 20s (multi-segment), one-take tracking shot.
Segment 1 (0-10s): Camera moves through @image1 environment, smooth dolly forward.
Segment 2 (10-20s): Extend @video1 by 10s, continue through @image2 to @image3.

Negative Constraints:
no cuts, continuous motion only.

Generation Settings:
Duration: 10s per segment
Aspect Ratio: 21:9
Style: Cinematic, seamless
```

## Quick Adaptation Guide

To adapt these recipes:

1. **Replace placeholders** with your specific content
2. **Adjust timing** based on your video duration
3. **Modify constraints** based on your requirements
4. **Test with short segments** first before full generation
5. **Iterate based on results** - adjust prompt specificity as needed

## Pro Tips

- **Start simple**: Use Text-only mode for concept testing
- **Reference quality**: Higher quality references yield better results
- **Prompt specificity**: More detailed prompts = more controlled output
- **Segment planning**: For videos >15s, plan clean handoff points
- **IP safety**: Always use original names and descriptions