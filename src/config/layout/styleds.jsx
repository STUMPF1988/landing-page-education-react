import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&display=swap');
*{
  margin:0px;
  padding:0px;
}
body {
	 overflow-x: hidden;
  width:100vw;
	background: linear-gradient(-45deg, #ee7752, #61e73c, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
}


`;

const StyledMain = styled.div`
  width: 100vw;
`;

export { GlobalStyle, StyledMain };
