import { readFile } from "fs";
import image from "next/image";
import Image from "next/image";
import { ReactElement, useContext, useState } from "react";
import { ShopkeeperContext } from "../../../contexts/ShopkeeperContext";

import { Container } from "./styles";

interface ShopImage {
  imageSrc?: string;
  btnIcon: ReactElement;
  icon: ReactElement;
  btn: ReactElement;
}

const imageConfig = {
  width: "500",
  height: "500",
};

export const ShopImage = ({ imageSrc, icon, btnIcon, btn }: ShopImage) => {
    return (
      <Container>
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
          <label htmlFor="image[]">{btnIcon}</label>
        </button>
        {btn}
      </Container>
    );
  }
