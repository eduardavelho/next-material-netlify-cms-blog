export function envEntry<T>(
  type_: "string" | "boolean" | "number",
  name: string,
  value: string | undefined,
  default_?: T
): T {
  const isClient = typeof window !== "undefined";
  const isPublicEntry =
    name.startsWith("NEXT_PUBLIC_") ||
    name.startsWith("REACT_APP_") ||
    name === "NODE_ENV";

  if (isClient && isPublicEntry === false) {
    return (undefined as any) as T;
  }

  const value_: any = value
    ? value.replace(/(\r\n|\n|\r)/gm, "")
    : default_ ?? undefined;

  if (!value && !default_ && typeof window === "undefined") {
    throw new Error(`Entry value for "${name}" was not found in env.`);
  }

  switch (type_) {
    case "boolean":
      const isTrue = value_ === "true";
      const isFalse = value_ === "false";

      if (!isTrue && !isFalse) {
        throw new Error(`Entry value for "${name}" must be a boolean.`);
      }

      return isTrue as any;
    case "number":
      const number = Number(value_);
      const isNumber = !isNaN(number);

      if (!isNumber) {
        throw new Error(`Entry value for "${name}" must be a number.`);
      }

      return number as any;
    case "string":
      return (value_ ?? "").toString().replace(/\\n/g, "\n") as any;
    default:
      return value_;
  }
}
