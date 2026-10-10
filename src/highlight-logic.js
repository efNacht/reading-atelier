// Preserve annotation location: identical phrases in other paragraphs are different evidence.
export function annotationRanges(text, paragraph, annotations = []) {
  const ranges = [];
  for (const item of annotations) {
    if (typeof item === "string") {
      let at = text.indexOf(item);
      while (item && at >= 0) {
        ranges.push([at, at + item.length]);
        at = text.indexOf(item, at + item.length);
      }
    } else if (
      item &&
      item.paragraph === paragraph &&
      typeof item.text === "string" &&
      Number.isInteger(item.start) &&
      Number.isInteger(item.end) &&
      item.start >= 0 &&
      item.end <= text.length &&
      item.end > item.start &&
      text.slice(item.start, item.end) === item.text
    ) {
      ranges.push([item.start, item.end]);
    }
  }
  return ranges;
}
export function anchorRanges(text, anchors = []) {
  return anchors.flatMap((anchor) => {
    if (typeof anchor !== "string" || !anchor.trim()) return [];
    const escaped = anchor.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(
      `(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`,
      "giu",
    );
    return [...text.matchAll(regex)].map((match) => [
      match.index,
      match.index + match[0].length,
    ]);
  });
}
