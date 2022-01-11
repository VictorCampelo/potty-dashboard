import { ReactElement } from 'react'

import { Container } from './styles'

interface ShopImage extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string
  btnIcon: ReactElement
  btn: ReactElement
}

const imageConfig = {
  width: '500',
  height: '500'
}

export const ShopImage = ({ imageSrc, btnIcon, btn, ...rest }: ShopImage) => {
  return (
    <Container {...rest}>
      <div className="imageContainer">
        {!imageSrc ? (
          <img
            className="image"
            src="/images/icon.png"
            width={imageConfig.width}
            height={imageConfig.height}
          />
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
