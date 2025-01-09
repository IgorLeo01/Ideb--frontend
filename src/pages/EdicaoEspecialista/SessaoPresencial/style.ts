import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

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

export const SessionDataInfoContainer = styled.div`
display: grid;
grid-template-rows: repeat(6, max-content);
row-gap: .5em;
text-align: start;
`;

export const TextContainer = styled(SessionDataInfoContainer)`
grid-template-rows: repeat(2, max-content);

h1 {
  font-size: 19px;
}

h2 {
  font-size: 17px;
  font-weight: 400;
}

h3 {
  font-size: 15px;
  font-weight: 400;
  color: gray;
}
`;

export const ClinicInfoContainer = styled.div`
display: grid;
grid-template-rows: repeat(2, 1fr) max-content;
`;

export const LocationInfoContainer = styled.div`
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(2, 1fr);
column-gap: 1em;
`;

export const PrivateSessionContainer = styled(SessionDataInfoContainer)`
grid-template-rows: repeat(2, max-content);
border: 1px solid gray;
border-radius: 10px;
padding: 10px;

h1 {
  font-size: 17px;
  fotnt-weight: 500;
}
`;

export const PrivateValueContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, max-content);
align-content: center;

input {
  background-color: lightgray;
}

button {
  border: unset;
  background-color: transparent;
  width: calc(max-content + .5em);
  color: dodgerblue;
  font-weight: 500;
}
`;

export const PrivateValueModal = styled.dialog`
&::backdrop {
  background-color: #8fae92;
}
`;

export const CorporativeSessionContainer = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid gray;
border-radius: 10px;
padding: 10px;

* {
  align-self: center;
}

h3 {
  font-size: 15px;
  font-weight: 400;
  color: gray;
}
`;

export const CheckboxContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, max-content);
column-gap: .5em;

label {
  position: static;
  font-weight: 600;
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
