import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/atoms.js')
  require('../stories/molecules.js')
  require('../stories/templates.js')
}

configure(loadStories, module)
