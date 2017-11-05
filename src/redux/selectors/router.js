import { createSelector } from 'reselect'

export const pathnameSelector = state => state.router.location.pathname

export const recipeIdSelector = createSelector(
  pathnameSelector,
  pathname => {
    const match = /^\/recipes\/([a-zA-Z0-9_-]+)(\/|$)/.exec(pathname)
    if (match) return match[1]
    else return null
  }
)
