import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/atoms.js')
}

configure(loadStories, module)
