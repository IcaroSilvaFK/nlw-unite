export function mergeCss(base: string, ...rest: unknown[]) {
  for (const n of rest) {
    if (typeof n !== "string") continue
    base += ` ${n}`
  }
  return base
}