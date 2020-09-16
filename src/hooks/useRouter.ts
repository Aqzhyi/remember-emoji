import { routes, RouterKey } from '~/configs/routers'

export const useRouter = (pathname: string) => {
  const go = (nav: RouterKey) => {
    globalThis.location.pathname = routes.get(nav) as string
  }

  return {
    go,
    navSelected: routes.has(pathname as any)
      ? routes.get(pathname as RouterKey)
      : routes.get('/'),
  }
}
