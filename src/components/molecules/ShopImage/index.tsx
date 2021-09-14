import Image from "next/image"
import { ReactElement } from 'react';

import { Container } from './styles'

interface ShopImage {
  btnIcon: ReactElement;
  icon: ReactElement;
  image?: string;
}

const imageConfig = {
  width: "500",
  height: "500",
}

export const ShopImage = ({icon, image, btnIcon}: ShopImage) => {
  return (
    <Container>
      <div className="imageContainer">
        {!image && (
          <>
            {icon}
          </>
      )}
      {image && (
        <Image 
        className="image"
        src={image} 
        objectFit="fill"
        width={imageConfig.width} 
        height={imageConfig.height} />
      )}
      </div>
      <button type="button" className="imageBtn">{btnIcon}</button>
    </Container>
  )
}