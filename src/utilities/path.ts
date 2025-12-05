export function normalize(path: string): string {
  return path
    .replace(/\\/g, "/")
    .replace(/\/+/g, "/")
    .replace(/\.\.\//g, "");
}

export function join(...paths: string[]): string {
  return paths
    .filter(Boolean)
    .join("/")
    .replace(/\/+/g, "/");
}
