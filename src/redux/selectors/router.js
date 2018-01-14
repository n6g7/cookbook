import { createSelector } from 'reselect'

export const pathnameSelector = state => state.router.location.pathname

const createRouterSelector = pathRegex => createSelector(
  pathnameSelector,
  pathname => {
    const match = pathRegex.exec(pathname)
    if (match) return match[1]
    else return null
  }
)

export const basketIdSelector = createRouterSelector(/^\/baskets\/([a-zA-Z0-9_-]+)(\/|$)/)

export const recipeIdSelector = createRouterSelector(/^\/recipes\/([a-zA-Z0-9_-]+)(\/|$)/)
