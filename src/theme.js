import { css } from 'styled-components'

const shadow = 'rgba(51,51,51,0.16)'
const unit = 4
const mult = n => n * unit

export default {
  colours: {
    black: '#1e2125',
    green: '#badc58',
    red: '#ff7979',
    shadow,
    teal: '#95afc0',
    yellow: '#f9ca24',
    white: '#ffffff'
  },
  shadow: css`
    box-shadow: 0 ${mult(0.5)}px ${mult(2)}px ${shadow};
  `,
  shadowActive: css`
    box-shadow: 0 0 ${mult(2)}px ${shadow};
  `,
  spacing: {
    unit,
    mult
  }
}
