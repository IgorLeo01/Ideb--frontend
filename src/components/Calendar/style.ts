import styled from "styled-components";
import React from "react";

// Tag hierarchy:
// <CustomCalendarContainer>
//   <DaysContainer>
//     <NavArrow/>
//     <DayItem/>
//     ...
//   </DaysContainer>
//   <DayTimeSeparator />
//   <TimesContainer>
//     <Spacer/>
//     <TimeList>
//       <TimeItem/>
//       ...
//     </TimesList>
//   </TimesContainer>
// </CustomCalendarContainer>

const mobile = `@media (max-width: 667px)`;

const HeaderHeight = "2em";

// Items Base Size
const ItemWidth = "5em";
const ItemHeight = "5em";

const MobileItemWidth = "3.5em";
const MobileItemHeigth = "5em";

// Font Base Size
const FontSize = "17px";

// root
export const CustomCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  overflow-x: hidden;
  max-width: 100%;
  min-height: 100%;

  ${mobile} {
    overflow-x: clip;
    overflow-y: clip;
  }
`;

export const HeaderContainer = styled.div`
  display: none;
  height: auto;
  width: 100%;
  margin: auto;
  white-space: nowrap;
  justify-content: space-between;
  background-color: gray;

  span {
    font-size: ${FontSize};
    font-weight: 600;
    line-height: ${HeaderHeight};
  }

  button {
    height: ${HeaderHeight};
    line-height: ${HeaderHeight};
  }

  ${mobile} {
    display: flex;
  }
`

// (TimesContainer heir them)
export const DaysContainer = styled.form`
  display: flex;
  width: auto;
  margin: auto;
  white-space: nowrap;
  justify-content: space-between;

  button {
    ${mobile} {
      display: none;
    }
  }

  ${mobile} {
    width: auto;
  }
`;

export const NavArrow = styled.button`
  border: 1px solid #f4f4f4;
  border-radius: 15px;
  background-color: rgba(0,0,0,0);
  font-size: ${FontSize};
  line-height: ${ItemHeight};
  height: ${ItemHeight};
  margin: .3em;
  min-width: 2em;
  cursor: pointer;

  ${mobile} {
    border: unset;
    background-color: unset;
    font-weight: 800;
    line-height: unset;
    width: .8em;
    margin: unset;
  }

  &:disabled {
    cursor: default;
  }

  &:not(:disabled):hover{
    background-color: #ddd;
  }

  &:not(:disabled):active{
    background-color: #ffc12e;
  }
`;

// Simple Section Separator Style
export const DayTimeSeparator = styled.div`
  border: 1.5px solid #ddd;
  border-radius: 5px;
  width: 100%;
  margin: .2em 0;
`;

// Times Styles (extends Days)
export const TimesContainer = styled(DaysContainer)` 
  display: flex;
  text-align: center;
  flex-direction: row;
  height: minmax(12em, auto);
  overflow-y: auto;
  // box-shadow: inset 0 0 10px #f8a100;
  // margin-left: auto;

  &::-webkit-scrollbar{
    width: .5em;
    // margin-left: 25em;
    border: 1px solid #ffc12e;
    border-radius: 10px;
  };

  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #33576b;
  }
`;

export const TimeList = styled.div`
  display: flex;
  flex-direction: column; 
  max-height: 15em; 
  gap: .2em;


  // div {
  //   border: 1px solid #ddd;
  //   padding: 8px;
  //   margin: 3px;
  //   cursor: pointer;
  //   min-width: 40px; 
  // }
`;

export const TimeItem = styled.label`
  display: flex;
  font-size: ${FontSize};
  width: ${ItemWidth};
  // min-width: 5em;
  height: auto;
  margin: .15em;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // Hiding default checkbox
  input {
    // position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  span {
    background-color: rgba(0,0,0,0);
    font-size: inherit;
    width: ${ItemWidth};
    line-height: 2em;
    height: 2em;

    margin-left: -.4em;

    border: 1px solid #ddd;
    border-radius: 10px;
    ${mobile} {
      width: ${MobileItemWidth};
    }
  }

  ${mobile} {
    width: ${MobileItemWidth};
  }

  &:hover input ~ span{
    background-color: #ddd
  }  

  input:checked ~ span{
    background-color: #6c99ab;
    border: 1px solid #6c99ab;
    font-weight: 600;
  }
`;

// Extends from TimeItem
export const DayItem = styled(TimeItem)`
  cursor: default;
  text-align: center;
  span {
    display: flex;
    flex-direction: column;
    // gap: .15em;
    // align-items: center;
    padding: auto;

    line-height: unset;
    height: ${ItemHeight};

    ${mobile} {
      height: ${MobileItemHeigth};
    }

    h1 {
      font-size: 15px;
      font-weight: 400;
      margin: unset;
      color: gray;
    }

    // font-size: 25px;
    font-weight: 600;
    
    h2 {
      font-size: 25px;
      font-weight: 600;
      margin: unset;
    }

    h3 {
      font-size: 16px;
      font-weight: 400;
      margin: unset;
    }

  }

  &:hover input ~ span{
    background-color: rgba(0,0,0,0);
  }  
`;

// Should remove later; Width = TimeList.scrollbar-width
export const Spacer = styled.div`
  width: .5em;
  height: 100%;
  background-color: #0f0;

  ${mobile} {
    display: none;
  }
`;

export const ConfirmContainer = styled.div`
  display: flex;
  height: 4.5em;
  padding: .75em 0 0;

  // ${mobile} {
  //   overflow-x: clip;
  // }
`;

export const ConfirmDescription = styled.div`
  display: flex;
  width: 75%;
  font-size: inherit;
  text-align: left;
  flex-direction: column;
  gap: .5em;

  ${mobile} {
    gap: unset;
  }

  h1 {
    margin: unset;
    font-size: 20px;
    color: #5c899b;
  }

  h2 {
    margin: unset;
    font-size: inherit;
    font-weight: 400;
  }
`;

export const ConfirmButton = styled.input`
  width: 10em;
  margin-right: 3em;
  height: 2.5em;
  align-self: center;
  text-align: center;
  border-radius: 15px;
  background-color: #33576b;
  color: #fff;

  ${mobile} {
    margin-right: unset;
  }

  &:hover {
    background-color: #53778b;
  }
`;