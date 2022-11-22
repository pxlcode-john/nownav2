export const isActiveRoute = (current: string, route: string): boolean =>
  current.substring(0, route.length) === route