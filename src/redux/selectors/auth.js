import { selectors } from 'rsf-auth'

export const {
  loadingSelector,
  loggedInSelector,
  userSelector
} = selectors(state => state.auth)
