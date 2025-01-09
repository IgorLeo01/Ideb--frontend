import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

const DataCRadius = "30px";
const DataCBG = "#fff";
const InputFontSize = "15px";
const InputBorderRadius = "5px";
export const Main = styled.form`
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
  border-radius: ${InputBorderRadius};
  height: 2.25em;
  padding-left: ${InputBorderRadius};
  padding-right: -${InputBorderRadius};
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