import { Container, Modal } from "./styles";
import React, { useState, ChangeEvent } from "react";

import { RiPencilFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

import { AiFillCamera } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { Button } from "../../atoms/Button";

interface DescriptionCard extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  quantStar?: number;
  description?: string;
  imgSrc?: string;
  coverSrc?: string;
  isLoading?: boolean;
  button?: any;
  vazio?: boolean;
  voidText?: string;
}

const DescriptionCard = ({
  title,
  quantStar,
  description,
  imgSrc,
  coverSrc,
  isLoading,
  button,
  vazio,
  voidText,
  ...rest
}: DescriptionCard) => {
  let stars = []; //Criando um vetor de estrelas

  quantStar > 5 ? (quantStar = 5) : null; //Tratativas para manter o máximo de estrelas como 5

  for (let i = 0; i < quantStar; i++) {
    stars.push(<AiFillStar size={18} color="#ffe249" />);
  }
  for (let i = quantStar; i < 5; i++) {
    stars.push(<AiOutlineStar size={18} color="#ffe249" />);
  }
  //adicionando estrelas preenchidas e vazias ao vetor

  const [modal, setModal] = useState(false);

  const [valueTitle, setValueTitle] = useState(title);
  const [valueDescription, setValueDescription] = useState(description);

  const [image, setImage] = useState<File[]>([]);
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  previewImage.push(imgSrc);

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImage = Array.from(event.target.files);

    setImage(selectedImage);

    const selectedImagePreview = selectedImage.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImage(selectedImagePreview);
  }

  const generateIcon = (query) =>
    `https://source.unsplash.com/random/160x160/?${query}`;

  const generateBanner = (query) =>
    `https://source.unsplash.com/random/?${query}`;

  return (
    <Container>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PulseLoader size={5} color="#2dd1ac" />
        </div>
      ) : (
        <>
          <div className="top">
            <div></div>

            <div className="icon-container">
              <div className="blur">
                <div className="cover"></div>
                <img
                  className="banner"
                  src={coverSrc || generateBanner("shop")}
                  alt="banner da loja"
                />
              </div>
              <div className="icon">
                <img src={imgSrc || generateIcon("shop")} alt="icone da loja" />
                <h1>{title}</h1>
                <div>{stars}</div>
              </div>
            </div>
            <button onClick={button}>
              Editar
              <RiPencilFill size={15} />
            </button>
          </div>
          {!vazio ? (
            <>
              <div className="bottom">
                <h1>Descrição</h1>
                <p>{description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="bottom">
                <h1>Descrição</h1>
                <div className="voidText">
                  <p>{voidText}</p>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {/* {modal ? (
        <Modal>
          <div className="corpo-modal">
            <div className="topo">
              <h1>Descrição</h1>
              <div id="close" onClick={() => setModal(false)}>
                <IoCloseSharp size={20} />
              </div>

              <div className="icon">
                <img
                  key={previewImage[0]}
                  src={previewImage[0]}
                  alt="icone da loja"
                />
                <label htmlFor="image[]">
                  <AiFillCamera size={15} color="white" />
                </label>

                <input
                  type="file"
                  onChange={(event) => handleSelectImage(event)}
                  id="image[]"
                />
              </div>
            </div>

            <div className="corpo">
              <div className="inputs">
                <h2>Nome do negócio</h2>
                <div className="nome">
                  <FaBuilding size={12} />
                  <input
                    type="text"
                    value={valueTitle}
                    onChange={(e) => setValueTitle(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="inputs">
                <h2>Descrição do negócio</h2>
                <textarea
                  maxLength={600}
                  value={valueDescription}
                  onChange={(e) => setValueDescription(e.target.value)}
                ></textarea>
              </div>

              <button> Confirmar </button>
            </div>
          </div>

          <div id="background-black" onClick={() => setModal(false)}></div>
        </Modal>
      ) : null} */}
    </Container>
  );
};

export default DescriptionCard;