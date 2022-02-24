import styled from 'styled-components';
import myImage from '../../pages/home/components/images/global.png';

const StyledCardtext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 28.5rem;
  width: 50%;
  background: #000000 url(${myImage}) no-repeat;
  background-size: contain;
  background-position: center;
  color: #ffffff;

  h3,
  p {
    text-align: center;
    padding: 0 1.5rem 1.5rem 1.5rem;

    font-weight: bold;
  }
  h3 {
    color: #23a6d5;
    font-size: 1.6rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

export default StyledCardtext;
