import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: space-between;
  margin: 0.1rem 0;

  width: 100%;
  color: #fff;
  .divTec {
    height: 5rem;
    width: 100%;
    display: flex;
    font-size: 5rem;

    justify-content: space-around;
    align-items: center;
  }
  .link {
    cursor: pointer;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #000000;
    height: 5rem;
    h1 {
      transition: font-size 3s;
      :hover {
        font-size: 5rem;
      }
    }
  }
`;

export default StyledMain;
