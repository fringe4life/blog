import { defineHastPlugin } from "satteri";
import temml from "temml";

function classNames(className: unknown): string[] {
  if (Array.isArray(className)) {
    return className.map(String);
  }
  if (typeof className === "string") {
    return className.split(/\s+/).filter(Boolean);
  }
  return [];
}

/** Turn Sätteri math nodes into MathML at build time. No client Temml script. */
export const temmlMathPlugin = defineHastPlugin({
  name: "temml-math",
  element: {
    filter: ["code"],
    visit(node, ctx) {
      const names = classNames(node.properties.className);
      const isMath =
        names.includes("language-math") ||
        names.includes("math-inline") ||
        names.includes("math-display");
      if (!isMath) return;

      const parent = ctx.parent(node);
      const display =
        names.includes("math-display") ||
        (parent.type === "element" && parent.tagName === "pre");
      const tex = ctx.textContent(node).replace(/\n$/, "").trim();
      if (!tex) return;

      const mathml = temml.renderToString(tex, {
        displayMode: display,
        throwOnError: true,
        annotate: true,
      });
      const raw = { type: "raw" as const, value: mathml };

      if (display && parent.type === "element" && parent.tagName === "pre") {
        ctx.replaceNode(parent, raw);
        return;
      }
      ctx.replaceNode(node, raw);
    },
  },
});
