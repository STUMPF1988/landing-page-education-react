import styled from 'styled-components';

const FooterStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #ffffff;
  background-color: #000000;
  border-top: 0.3rem solid #b3b2b2;
  .icons {
    margin-right: 5rem;
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #23a6d5;
    font-size: 1.8rem;
    .pointer {
      :hover {
        cursor: pointer;
      }
    }
  }
  .divContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 1rem;
    color: #23a6d5;
    span {
      :hover {
        cursor: pointer;
      }
    }
    p {
      font-size: 0.7rem;
      color: #626465;
    }
  }
`;

export default FooterStyle;
