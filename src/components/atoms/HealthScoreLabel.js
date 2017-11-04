import React from 'react'
import styled from 'styled-components'

const Label = styled.span`
  border-radius: ${p => p.theme.spacing / 4}px;
  color: white;
  font-size: 12px;
  padding: ${p => p.theme.spacing / 2}px ${p => p.theme.spacing}px;
`

const HealthyLabel = Label.extend`
  background: rgba(117, 197, 29, 80);
`
const BalancedLabel = Label.extend`
  background: rgba(213, 129, 25, 80);
`
const UnhealthyLabel = Label.extend`
  background: rgba(213, 25, 70, 80);
`

const HealthScoreLabel = ({ healthScore }) => {
  switch (healthScore) {
    case 1:
      return <HealthyLabel>Healthy</HealthyLabel>
    case 2:
      return <BalancedLabel>Balanced</BalancedLabel>
    case 3:
      return <UnhealthyLabel>Unhealthy</UnhealthyLabel>
  }
}

export default HealthScoreLabel
