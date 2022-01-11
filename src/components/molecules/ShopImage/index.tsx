import { ReactElement } from 'react'

import { Container } from './styles'

interface ShopImage extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string
  btnIcon: ReactElement
  icon: ReactElement
  btn: ReactElement
}

const imageConfig = {
  width: '500',
  height: '500'
}

export const ShopImage = ({
  imageSrc,
  icon,
  btnIcon,
  btn,
  ...rest
}: ShopImage) => {
  return (
    <Container {...rest}>
      <div className="imageContainer">
        {!imageSrc ? (
          <>{icon}</>
        ) : (
          <img
            className="image"
            src={imageSrc}
            width={imageConfig.width}
            height={imageConfig.height}
          />
        )}
      </div>
      <button type="button" className="imageBtn">
        <label htmlFor="icon[]">{btnIcon}</label>
      </button>
      {btn}
    </Container>
  )
}
