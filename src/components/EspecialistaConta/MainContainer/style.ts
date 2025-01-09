import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

export const Main = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
height: 80%;
min-width: 100%;
scroll-behavior: smooth;
padding-top: 60px;
font-size: calc(10px + 1vmin);
background-color: #e9e9e9;

h1, h2, h3, h4 {
  margin: unset;
  padding: unset;
}

${mobile} {
  padding-top: 100px;
}
`;

export const BodyContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
column-gap: 3em;

${mobile} {
  grid-template-columns: unset;
  grid-template-rows: 1fr 5fr;
  column-gap: unset;
  row-gap: 3em;
}
`;