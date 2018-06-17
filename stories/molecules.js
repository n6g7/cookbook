import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

import basket from '@assets/basket.svg'
import bell from '@assets/bell.svg'
import cutlery from '@assets/cutlery.svg'
import cutleryYellow from '@assets/cutlery-yellow.svg'
import { Button } from '@atoms'
import { BasketCard, BlankHeader, ImageHeader, Navbar, RecipeCard, RecipeTile } from '@molecules'
import withTheme from './theme'

storiesOf('Molecules', module)
  .addDecorator(withTheme())
  .addDecorator(withKnobs)
  .add('BasketCard', () => (
    <BasketCard
      icons={[
        'https://images.unsplash.com/photo-1508397426994-fcb4d80a41d0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=550bef85bf7b92a8547fb35d8c523456&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1485932465394-d20cc595f08b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2fdc92239d55d550a0a2a6303051f40&auto=format&fit=crop&w=1275&q=80',
        'https://images.unsplash.com/photo-1480444423787-9ea7b1509c54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b5d4b1832194f5e9847aaeb247622f5&auto=format&fit=crop&w=1850&q=80'
      ]}
      title={text('title', '7 April 2018')}
      subtitle={text('subtitle', '3 recipes')}
    />
  ))
  .add('BlankHeader', () => (
    <BlankHeader
      icon={cutleryYellow}
      title={text('title', 'Recipes')}
      subtitle={text('subtitle', '5 recipes')}
    />
  ))
  .add('ImageHeader', () => (
    <ImageHeader
      image={text('image', 'https://images.unsplash.com/photo-1506789658653-e5729a1ee31d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df9993cd64418ab6085234de77617931&auto=format&fit=crop&w=2691&q=80')}
      subtitle={text('subtitle', 'Hello')}
      subsubtitle={text('subsubtitle', '220 kcal • 13 mins • Healthy')}
      title={text('title', 'Tartines en salade')}
    >
      <Button onClick={action('onClickAdd')} primary>Add to grocery list</Button>
      <Button onClick={action('onClickEdit')} secondary>Edit</Button>
    </ImageHeader>
  ))
  .add('Navbar', () => (
    <Navbar>
      <Navbar.Item
        icon={basket}
        title={text('Groceries title', 'Back to groceries')}
        active={boolean('Groceries active', false)}
        open={boolean('Groceries open', false)}
      />
      <Navbar.Item
        icon={cutlery}
        title={text('Recipes title', 'Back to recipes')}
        active={boolean('Recipes active', true)}
        open={boolean('Recipes open', false)}
      />
      <Navbar.Item
        icon={bell}
        title={text('Servings title', 'Back to servings')}
        active={boolean('Servings active', false)}
        open={boolean('Servings open', false)}
      />
    </Navbar>
  ))
  .add('RecipeCard', () => (
    <RecipeCard
      adjective={text('adjective', 'Healthy')}
      calories={number('calories', 200)}
      image={text('image', 'https://images.unsplash.com/photo-1504557708456-9521e9e347e3?ixlib=rb-0.3.5&s=1bc7823990a245af59264a23b1ef2874&auto=format&fit=crop&w=1650&q=80')}
      minutes={number('minutes', 12)}
      name={text('Recipe name', 'Recipe name')}
    />
  ))
  .add('RecipeTile', () => (
    <RecipeTile
      image={text('image', 'https://images.unsplash.com/photo-1528748637825-2b750860bc99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2bf0edb542931b71bdf73dcd4ca5509c&auto=format&fit=crop&w=3343&q=80')}
      title={text('Recipe name', 'Recipe name')}
    />
  ))
