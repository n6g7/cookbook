import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'

import { Button, Checkbox, ImageCard, ImageIcon, Input } from '@atoms'
import withTheme from './theme'

storiesOf('Atoms', module)
  .addDecorator(withTheme())
  .addDecorator(withKnobs)
  .add('Button', () => (
    <Button
      large={boolean('Large', false)}
      primary={boolean('Primary', true)}
      secondary={boolean('Secondary', false)}
      danger={boolean('Danger', false)}
      valid={boolean('Valid', false)}
      onClick={action('clicked')}
    >
      {text('Label', 'Basic button')}
    </Button>
  ))
  .add('Checkbox', () => (
    <Checkbox checked={boolean('checked', false)} onChange={action('onChange')} />
  ))
  .add('ImageCard', () => (
    <ImageCard
      image={text('image', 'https://images.unsplash.com/photo-1504557708456-9521e9e347e3?ixlib=rb-0.3.5&s=1bc7823990a245af59264a23b1ef2874&auto=format&fit=crop&w=1650&q=80')}
    />
  ))
  .add('ImageIcon', () => (
    <ImageIcon
      image={text('image', 'https://images.unsplash.com/photo-1506184719731-01e394588102?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6295b9fe1c5af6125d746c763368adbd&auto=format&fit=crop&w=3444&q=80')}
    />
  ))
  .add('Input', () => (
    <Input
      large={boolean('Large', false)}
      value={text('Value', 'Text')}
      onChange={action('changed')}
    />
  ))
