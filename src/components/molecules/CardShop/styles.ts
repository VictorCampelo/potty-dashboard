import styled from 'styled-components'

// export const Container = styled.div`
//   padding: 20px 20px;
//   width: 100%;
//   height: 100vh;
//   background: #fffdf9;

//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;

//   .list-container {
//     width: 100%;
//     height: 100%;

//     display: flex;
//     flex-direction: column;

//     margin-left: 320px;

//     background: #ffffff;

//     box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
//     border-radius: 30px;
//     overflow-y: hidden;

//     .header {
//       width: 100%;
//       height: 110px;

//       display: flex;
//       flex-direction: row;
//       justify-content: flex-end;
//       align-items: center;

//       border-radius: 30px 30px 0 0;
//       padding: 20px;

//       .addBtn {
//         width: 123px;
//         height: 2.5rem;

//         display: flex;
//         align-items: center;
//         justify-content: space-between;

//         margin-top: 0.5rem;
//         margin-right: 40px;

//         background: var(--blue-primary);
//         border-radius: 8px;
//         border: none;

//         padding: 0 11px 0 11px;

//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 600;
//         font-size: 15px;
//         line-height: 22px;
//         color: var(--white);
//       }

//       .addBtn:hover {
//         background: var(--blue-dark);
//       }

//       .input-container {
//         width: 313px;

//         margin-right: 28px;
//       }
//     }
//   }

//   main {
//     height: 100%;
//     overflow-y: auto;
//   }

//   .products-container {
//     padding: 20px 70px;

//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     overflow-y: auto;

//     height: 100%;
//   }

//   .categories-container {
//     padding: 20px 85px;

//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;

//     height: 100%;
//   }
// `

// export const AddProductModalContainer = styled.div`
//   width: auto;
//   max-width: 850px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   .buttonContainer {
//     display: flex;
//     margin-top: 24px;
//   }

//   .exit-container {
//     width: 100%;
//     height: 40px;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 2rem;
//     h1 {
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 600;
//       font-size: 24px;
//       line-height: 36px;

//       color: #01ac8a;
//     }

//     svg {
//       cursor: pointer;
//     }
//   }

//   h1 {
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: normal;
//     font-size: 30px;
//     line-height: 45px;
//     text-align: center;

//     color: #363f4e;

//     margin-bottom: 70px;
//   }

//   h1.titulo-cadastro {
//     width: 100%;
//     text-align: left;
//   }

//   .input-infos {
//     display: flex;
//     .left-area {
//       margin-top: -30px;
//       display: flex;
//       flex-direction: column;

//       textarea {
//         resize: none;
//       }

//       .desconto {
//         display: flex;
//         align-items: flex-end;

//         .arrows {
//           display: flex;
//           flex-direction: column;

//           .left-arrow {
//             margin-top: -5px;
//           }
//         }
//       }
//     }

//     .right-area {
//       margin-left: 30px;
//       margin-top: -30px;

//       .input-container {
//         margin-bottom: 1rem;
//       }
//     }

//     h3 {
//       font-family: Poppins;
//       font-style: normal;
//       font-weight: normal;
//       font-size: 12px;
//       line-height: 18px;

//       color: #363f4e;
//     }

//     h2 {
//       margin-top: 80px;
//       font-family: Poppins;
//       font-style: normal;
//       font-weight: normal;
//       font-size: 15px;
//       line-height: 22px;

//       color: #363f4e;
//     }

//     .foto {
//       display: flex;

//       .title-foto {
//         z-index: 3;
//         background: #ffffff;

//         display: flex;
//         justify-content: center;
//         align-items: center;

//         padding: 6px 30px;

//         border: 1px solid #363f4e;
//         box-sizing: border-box;
//         border-radius: 8px;

//         font-family: Poppins;
//         font-style: normal;
//         font-weight: normal;
//         font-size: 12px;
//         line-height: 18px;

//         color: #363f4e;
//       }

//       button {
//         margin-left: -10px;
//         display: flex;
//         justify-content: center;
//         align-items: center;

//         padding: 0px 10px 0px 15px;

//         background: #2dd1ac;
//         border: 1px solid #2dd1ac;

//         box-shadow: inset 0px 0px 4px rgba(54, 63, 78, 0.2);
//         border-radius: 0px 8px 8px 0px;

//         font-family: Poppins;
//         font-style: normal;
//         font-weight: 500;
//         font-size: 12px;
//         line-height: 18px;

//         color: #ffffff;
//       }
//     }

//     .array-fotos {
//       margin-top: 10px;
//       display: flex;
//       justify-content: center;
//       align-items: center;

//       .card-image {
//         cursor: pointer;
//         display: flex;
//         justify-content: center;
//         align-items: center;

//         padding: 30px;

//         background: #fefdf9;
//         box-shadow: -2px 4px 5px rgba(0, 0, 0, 0.15);
//         border-radius: 4px;

//         margin-left: 8px;
//         margin-right: 8px;
//       }
//     }
//   }
// `

// export const ExcludeModalContainer = styled.div`
//   width: auto;
//   max-width: 650px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   .exit-container {
//     width: 100%;
//     height: 40px;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 2rem;
//     h1 {
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 600;
//       font-size: 24px;
//       line-height: 36px;

//       color: #01ac8a;
//     }

//     svg {
//       cursor: pointer;
//     }
//   }

//   h1 {
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: normal;
//     font-size: 30px;
//     line-height: 45px;
//     text-align: center;

//     color: #363f4e;

//     margin-bottom: 70px;
//   }

//   .btn-container {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;

//     width: 410px;
//     height: 55px;

//     button {
//       width: 196px;
//       height: 54px;

//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 600;
//       font-size: 18px;
//       line-height: 27px;
//       text-align: center;

//       color: #ffffff;

//       border-radius: 30px;
//       border: none;
//       outline: none;
//     }

//     .exclude-btn {
//       background: #ff4d4b;
//     }

//     .cancel-btn {
//       background: #2dd1ac;
//     }
//   }

//   .icon {
//     width: 198px;
//     height: 198px;

//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     border-radius: 100%;

//     border: 10px solid #ff4d4b;
//   }

//   .desc {
//     margin-top: 105px;

//     width: auto;
//     max-width: 317px;

//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: normal;
//     font-size: 30px;
//     line-height: 45px;
//     text-align: center;

//     color: #363f4e;
//   }

//   .btn {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;

//     height: 55px;

//     button {
//       width: 196px;
//       height: 54px;

//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 600;
//       font-size: 18px;
//       line-height: 27px;
//       text-align: center;

//       color: #ffffff;

//       border-radius: 30px;
//       border: none;
//       outline: none;
//     }

//     .continue-btn {
//       background: #2dd1ac;
//     }
//   }
// `

// export const AddCategoryModalContainer = styled.div`
//   width: auto;
//   max-width: 450px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   .exit-container {
//     width: 100%;
//     height: 40px;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 2rem;

//     h1 {
//       font-weight: 600;
//       font-size: 24px;
//       line-height: 36px;
//     }

//     svg {
//       cursor: pointer;
//     }
//   }

//   .inputContainer {
//     width: 450px;
//     margin-bottom: 30px;
//   }

//   .buttonContainer {
//     display: flex;
//     margin-top: 24px;
//   }
// `

// export const EditCategoryModalContainer = styled.div`
//   width: auto;
//   max-width: 650px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   .exit-container {
//     width: 100%;
//     height: 40px;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 2rem;
//     h1 {
//       font-weight: 600;
//       font-size: 24px;
//       line-height: 36px;

//       color: #01ac8a;
//     }

//     svg {
//       cursor: pointer;
//     }
//   }

//   h1 {
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: normal;
//     font-size: 30px;
//     line-height: 45px;
//     text-align: center;

//     color: #363f4e;

//     margin-bottom: 70px;
//   }

//   .category-container {
//     width: 500px;
//     height: 130px;

//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//   }

//   .category-btn-container {
//     button {
//       margin-top: 20px;
//       width: 132px;
//       height: 54px;
//       background: transparent;

//       border: 2px solid #2dd1ac;
//       box-sizing: border-box;
//       border-radius: 30px;

//       font-style: normal;
//       font-weight: normal;
//       font-size: 1rem;

//       color: #2dd1ac;

//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//   }
// `

export const Container = styled.section`
  min-height: 200px;
  max-height: 500px;

  margin-right: 20px;
  margin-bottom: 20px;

  max-width: 700px;
  width: auto;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
  border-radius: 30px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 36px;
    text-align: center;
    color: #363f4e;
  }

  select {
    width: 6.2rem;
    border: 1px solid #d8d9dd;
    box-sizing: border-box;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 0.85rem;
    color: #363f4e;
    outline: none;
  }

  .product {
    width: 100%;
    margin-top: 24px;
    padding: 0 20px;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;

    scrollbar-width: thin;
    scrollbar-color: #c4c4c4 transparent;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c4c4c4;
      border-radius: 20px;
    }
  }
`
