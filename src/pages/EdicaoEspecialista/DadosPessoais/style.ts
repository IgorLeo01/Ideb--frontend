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

const ImageSize = "8em"
export const PublicDataContainer = styled.div`
width: calc(${ImageSize} * 4);
height: calc(${ImageSize} * 2.2);
display: grid;
grid-template-columns: 6fr 1fr 6fr;
border: 2px solid purple;
border-radius: 15px;
margin: auto;

div {
  display: flex;
  flex-direction: column;
}

div > div {
  display: grid;
  grid-template-rows: repeat(3, 2fr 1fr);
  // grid: repeat(2, 1fr) / repeat(2, 1fr);
  // row-gap: calc(${DataCRadius} / 2);
  width: 90%;
  margin: auto;
}
label {
  bottom: 3.5em;
}
`;

export const Image = styled.img`
width: ${ImageSize};
height: ${ImageSize};
border-radius: calc(${ImageSize} / 2);
border: 1px solid purple;
margin: auto;
`;

export const VerticalSeparator = styled.div`
  height: 100%;
  width: 1px;
  background-color: #000;
  margin: auto;
`;

export const PersonalInfoContainer = styled.div`
display: flex;
flex-direction: column;

div {
  display: grid;
  grid: repeat(2, 1fr) / repeat(2, 1fr);
  column-gap: calc(${DataCRadius} / 2);
}
`;

export const ModalOverlay = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 70%; 
  max-width: 400px; 
  max-height: 80%; 
  overflow: auto; 
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormGroupLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end; 
  margin-top: 20px; 
`;

export const ModalCancelButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ccc;
`;

export const ModalSaveButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
`;

export const PasswordRequirements = styled.p`
  display: flex;
  font-size: 12px; 
  color: #999; 
`;