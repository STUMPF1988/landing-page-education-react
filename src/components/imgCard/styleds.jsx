import styled from 'styled-components';

const StyledImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28.5rem;
  width: 50%;
  background-color: #000000;
  color: #fff;

  img {
    height: 80%;
    width: 90%;
    border-radius: 20px;
    transition: transform 5s;
    :hover {
      transform: rotateY(180deg);
    }
  }
`;

export default StyledImgCard;
