import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

import basket from '@assets/basket-yellow.svg'
import { Button } from '@atoms'
import { DetailPage, FormPage, TitlePage, WithNavbar } from '@templates'
import withTheme from './theme'

storiesOf('Templates', module)
  .addDecorator(withTheme())
  .addDecorator(withKnobs)
  .add('DetailPage', () => (
    <DetailPage
      buttons={[
        <Button key={1} primary>Shop with Ocado</Button>,
        <Button key={2} secondary>Edit</Button>
      ]}
      image='https://images.unsplash.com/photo-1489914099268-1dad649f76bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10b626468a3fb4c9bc865efacd503a22&auto=format&fit=crop&w=2250&q=80'
      title={text('title', '13 May 2018')}
      subsubtitle={text('subsubtitle', '3 recipes')}
    >
      Dummy content
    </DetailPage>
  ))
  .add('FormPage', () => (
    <FormPage
      buttons={[
        <Button key={1} danger>Cancel</Button>,
        <Button key={2} danger>Remove</Button>
      ]}
      image='https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-0.3.5&s=41252d3b52f07b667a179af6a9ea6852&auto=format&fit=crop&w=2250&q=80'
      title={text('title', 'Edit servings')}
      subtitle={text('subtitle', 'Tartines en salade')}
      subsubtitle={text('subsubtitle', '220 kcal • 13 mins • Healthy')}
    >
      Dummy content
    </FormPage>
  ))
  .add('TitlePage', () => (
    <TitlePage
      icon={basket}
      title={text('title', 'Groceries')}
      subtitle={text('subtitle', '2 lists')}
    >
      Dummy content
    </TitlePage>
  ))
  .add('WithNavbar', () => (
    <WithNavbar>
      Hey
    </WithNavbar>
  ))
