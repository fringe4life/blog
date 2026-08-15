---
title: "Triangles: Angles, Sides, and Balance"
slug: "triangles-geometry"
description: "A gentle tour of triangle types, angle sums, and why three sides form the simplest rigid shape."
image: ./images/triangles-geometry.jpg
pubDate: 2026-06-12
isDraft: false
author: "Kurtis Weissnat"
tags: ["Math"]
---

## Why triangles matter

A triangle is the simplest closed polygon: three sides, three angles, one region. That simplicity makes it the skeleton of roofs, bridges, and meshes—once three lengths lock, the shape cannot flex without stretching a side.

## Angle sum

In Euclidean geometry, the interior angles of any triangle add to a straight angle:

```math
α + β + γ = 180° = π radians
```

If you know two angles, the third is fixed. That single constraint ties local corner measures to the global shape.

## Side relationships

Label the sides opposite angles `A`, `B`, and `C` as `a`, `b`, and `c`. Familiar special cases:

- **Equilateral** — all sides equal, all angles `60°`
- **Isosceles** — two sides equal, base angles equal
- **Right** — one angle is `90°`, and Pythagoras holds:

```math
a² + b² = c²
```

## Area without height drama

When height is awkward to measure, Heron's formula still works from the three sides alone. With semi-perimeter `s = (a + b + c) / 2`:

```math
Area = √[s(s - a)(s - b)(s - c)]
```

## Takeaway

Triangles package constraint: angles sum to `π`, sides decide area and rigidity. Start here, and every later shape is triangles glued together.
