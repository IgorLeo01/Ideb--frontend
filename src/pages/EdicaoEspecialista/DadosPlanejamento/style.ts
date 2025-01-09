import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

export const MainContainer = styled.div`
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

export const SideBarContainer = styled.div`
display: grid;
grid-template-rows: repeat(6, max-content);
row-gap: 1em;
width: 100%;
height: 75%;
border: 2px solid #000;
// position: sticky;
// top: 90px;

h1 {
  font-size: 20px;
}

div {
  display: grid;
  grid-template-rows: repeat(6, 2em);
  row-gap: 1em;
}

button {
  border: unset;
  border-radius: 10px;
  width: 100%;
  background-color: transparent;

  h2 {
    font-size: 15px;
    font-weight: 400;
    padding: .5em 0;
  }

  &:hover {
    background-color: #aaa;
  }
}

span {
  background-color: rgba(0,0,0,0);
  font-size: inherit;
  width: 100%;
  line-height: 2em;
  height: 2em;

  margin-left: -.4em;

  // border: 1px solid #ddd;
  // border-radius: 10px;
}

${mobile} {
  order: 1;
  // position: absolute;
  // right: max-content;
}
`;

const DataCRadius = "30px";
const DataCBG = "#fff";
const InputFontSize = "15px";
export const DataContainer = styled.form`
display: flex;
flex-direction: column;
width: calc(100% - (2* ${DataCRadius}));
background-color: ${DataCBG};
border: 1px solid #0f0f0f;
border-radius: ${DataCRadius};
padding: ${DataCRadius};
padding-top: unset;

h1 {
  font-size: 17px;
  font-weight: 400;
}
h2 {
  font-size: 15px;
  font-weight: 300;
}

label {
  font-size: ${InputFontSize};
  font-weight: 300;
  background-color: ${DataCBG};
  width: max-content;
  height: max-content;
  padding: 0 3px;
  position: relative;
  bottom: 3em;
  left: .6em;
}

input, select {
  padding: unset;
  font-size: ${InputFontSize};
  text-wrap: wrap;
  border: 1px solid gray;
  border-radius: 5px;
  height: 2.25em;
}

button {
  font-size: 18px;
  font-weight: 500;
  width: max-content;
  // background-color: purple;
  border: 1px solid #000;
  border-radius: .5em;
  padding: .5em;
  margin: auto;
}

${mobile} {
  order: 2;
}
`;

export const DataHeader = styled.div`
display: flex;
flex-direction: column;
text-align: start;
gap: .5em;
padding: 1em 0;
border-bottom: 1px solid #000;
margin-bottom: ${DataCRadius};

h1 {
  font-size: 25px;
  font-weight: 400;
}
`;

export const VerticalSeparator = styled.div`
  height: 100%;
  width: 1px;
  background-color: #000;
  margin: auto;
`;

export const BankInfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(3, max-content);
column-gap: 2em;
row-gap: 1em;
text-align: start;

h1 {
  grid-column: 1 / span 2;
}
h2 {
  margin: .5em 0 .75em;
}
`;

export const PlanningInfoContainer = styled.div`
display: grid;
grid-template-rows: repeat(4, max-content);
row-gap: 1em;
text-align: start;
`;

export const CheckboxContainer = styled.div`
display: flex;
flex-direction: column;
gap: .3em;

h1 {
  font-weight: 600;
}

div {
  display: grid;
  grid-template-columns: max-content 1fr;
}

label {
  position: static;
  align-self: center;
}
`;

export const SelectorClusterContainer = styled.div`
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(2, 1fr);
column-gap: 2em;
`;

export const DataSelectorContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1em;

div {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
`;

export const LeftSideContainer = styled.div`
display: grid;
grid-template-rows: 1fr 2fr 2fr;
max-width: auto;

div {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}
`;

export const AccountContainer = styled.div`
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(2, 1fr);
column-gap: 1em;
`;

export const RightSideContainer = styled.div`
display: grid;
grid-template-rows: repeat(2, max-content);
grid-template-columns: repeat(2, 1fr);
column-gap: 1em;

background-color: #0ef4a2;

div {
  grid-column: 1 / span 2;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-template-columns: 1fr;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
}

div > div {
  border: unset;
  border-radius: unset;
}
`;

export const PIXInputContainer = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
`;

export const PIXSelectorContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const PJSelector = styled.div`
display: grid;
grid-template-rows: 1fr, 1fr;
row-gap: 1em;
border: 2px solid #bebe09;
border-radius: 10px;
padding: 10px;
background-color: orange;
grid-column: 1 / span 2;

h3 {
  font-size: ${InputFontSize};
  font-weight: 300;
}

div { 
  display: grid;
  grid-template-columns: 1fr 9fr;
}
`;

export const SaveButton = styled.button`
font-size: 18px;
font-weight: 500;
width: max-content;
border: 1px solid #000;
border-radius: .5em;
padding: .5em;
margin: auto;
justify-self: end;
`;

export const CancelButton = styled.button`
`;
