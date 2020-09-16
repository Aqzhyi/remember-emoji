export const routes = new Map([
  ['/', '/search'],
  ['/search', '/search'],
  ['/test', '/test'],
] as const)

export type RouterKey = Parameters<typeof routes.get>[0]
