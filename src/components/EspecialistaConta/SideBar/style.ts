import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

const MobileWidth = "50%";

export const SideBarContainer = styled.div<{ isMobileVisible: boolean }>`
display: grid;
grid-template-rows: repeat(6, max-content);
row-gap: 1em;
width: 100%;
height: max-content;
position: sticky;
top: 90px;

h1 {
  font-size: 20px;
}

div {
  display: grid;
  grid-template-rows: repeat(6, 2em);
  row-gap: 1em;
}

button {
  border: 1px solid lightgray;
  border-radius: 0 10px 10px 0;
  width: 100%;
  background-color: transparent;

  h2 {
    font-size: 15px;
    font-weight: 400;
    padding: .5em 0;
  }

  &:disabled {
    pointer: none;
    border: 1px solid gray;
    background-color: lightgray;
    color: #555;
  }

  &:not(:disabled):hover {
    background-color: #aaa;
  }
}

${mobile} {
  width: ${MobileWidth};
  display: block;
  position: fixed;
  top: 90px;
  right: ${({ isMobileVisible }) => (isMobileVisible ? MobileWidth : "100%")};
  transition: right 0.5s ease;
  background-color: #fcfcfc;
  z-index: 10;
}
`;

export const MobileSlider = styled.button<{ isMobileVisible: boolean }>`
display: none;
width: 2em;
height: 2em;
border: 1px solid lightgray;
border-radius: 0 .5em .5em 0;

${mobile} {
  display: block;
  position: sticky;
  top: 90px;
  left: ${({ isMobileVisible }) => (isMobileVisible ? MobileWidth : "0")};
  transition: left 0.5s ease;
}
`;
