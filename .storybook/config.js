import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/atoms.js')
  require('../stories/molecules.js')
}

configure(loadStories, module)
