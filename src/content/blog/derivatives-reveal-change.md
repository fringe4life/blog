---
title: "How x² + 2x + 5 Becomes 2x + 2"
slug: "derivatives-reveal-change"
description: "Differentiate x squared plus 2x plus 5 to 2x plus 2, and see how the derivative measures change."
image: ./images/derivatives-reveal-change.jpg
pubDate: 2026-08-01
isDraft: false
author: "Kurtis Weissnat"
tags: ["Math"]
---

## A curve, not a snapshot

Consider the function

```math
f(x) = x² + 2x + 5
```

For each input `x`, you get a height on a smooth curve. The value alone says where you are. The **derivative** says how that height is changing as `x` moves.

## Differentiate term by term

Power rule: `d/dx (xⁿ) = n · xⁿ⁻¹`. Constants vanish under differentiation.

```math
d/dx (x²) = 2x
d/dx (2x) = 2
d/dx (5)  = 0
```

Add them:

```math
f'(x) = 2x + 2
```

So the messy-looking quadratic collapses into a simple line that tracks slope.

## What `2x + 2` reveals

At a point `x = a`, the number `f'(a) = 2a + 2` is the instantaneous rate of change of `f`.

- If `f'(a) > 0`, the curve is rising through `x = a`.
- If `f'(a) < 0`, it is falling.
- If `f'(a) = 0`, the tangent is flat—a candidate peak or valley.

Here `f'(x) = 2(x + 1) = 0` when `x = -1`. Near that point the quadratic bottoms out; elsewhere the sign of `2x + 2` tells you whether `f` grows or shrinks as `x` increases.

## Change, made precise

The derivative is a limit of average rates:

```math
f'(x) = lim (h → 0)  [f(x + h) - f(x)] / h
```

For our `f`, that limit evaluates to `2x + 2`. Average rise-over-run becomes an exact slope—change without needing a finite step size.

## Takeaway

Differentiating `x² + 2x + 5` to `2x + 2` is not a magic rewrite. It extracts the curve's local rate of change and hands it back as a new function you can read, graph, and reason with.
