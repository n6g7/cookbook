import ImageCard from './ImageCard'

export default ImageCard.extend`
  height: ${p => p.theme.spacing.mult(10)}px;
  padding: 0;
  width: ${p => p.theme.spacing.mult(10)}px;
`
