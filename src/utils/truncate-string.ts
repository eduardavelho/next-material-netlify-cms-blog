export function truncateString(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength).trim().concat("...");
  }

  return text;
}
