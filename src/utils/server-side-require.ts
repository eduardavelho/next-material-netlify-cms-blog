export function serverSideRequire<ModuleType>(module: string) {
  return eval(`require("${module}")`) as ModuleType;
}
