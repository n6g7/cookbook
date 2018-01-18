import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Home = props => <div>
  <Button.Group widths='3' size='massive'>
    <Button as={Link} to='/ingredients' color='orange'>Ingredients</Button>
    <Button as={Link} to='/categories' color='olive'>Categories</Button>
    <Button as={Link} to='/units' color='purple'>Units</Button>
  </Button.Group>
</div>

export default Home
