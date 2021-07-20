export const dimensionsPixelToRem = (height, width) => {
  return `
    height: ${height / 16}rem;
    width: ${width / 16}rem;
  `
}

export const convertPixelToRem = (num) => {
  return `${num / 16}rem`
}

export const containerDefaultFormat = () => {
  return `
    align-items: center;
    display: flex;
    flex-direction: column;

    >div h3{
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    >article{
      margin-bottom: 1.5rem;
    }

    >article span{
      font-size: 1rem;
      font-weight: 400;
    }
  `
}
