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

export const ProfessionalInfoContainer = styled.div`
display: grid;
grid-template-columns: 4fr 6fr;
column-gap: 2em;
text-align: start;

h2 {
  margin: .5em 0 .75em;
}

button {
  font-size: 17px;
  width: 100%;
}
`;

export const LeftSideContainer = styled.div`
div {
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  padding-top: 2em;
}
`;

export const RightSideContainer = styled.div`
display: grid;
grid-template-rows: repeat(3, max-content);
row-gap: 2em;

textarea {
  width: calc(100% - 1em);
  height: calc(max-content - 1em);
  resize: vertical;
  font-size: ${InputFontSize};
  border: 1px solid gray;
  border-radius: 5px;
  padding: .5em;
}
`;

export const SaveButton = styled.button`
  grid-column: 1 / span 2;
`;
