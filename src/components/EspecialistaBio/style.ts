import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  font-size: 17px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const BioHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  height: auto;

  img {
    width: 4.5em;
    height: 4.5em;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const highlightSize = "18px";
const subtitleSize = "14px";
export const HeaderText = styled.div`
  text-align: start;

  h1 {
    margin: 0;
    font-size: ${highlightSize};
    font-weight: 600;
    color: #333;
  }

  h2,
  h3,
  h4 {
    margin: 0;
    font-size: ${subtitleSize};
    font-weight: 400;
    color: #666;
  }

  h4 {
    font-weight: 500;
  }
`;

export const BioTags = styled.div`
  display: grid;
  grid-auto-columns: minmax(max-content, 100px);

  span {
    font-size: ${subtitleSize};
    white-space: nowrap;
    padding: 0.3em 0.4em;
    margin: 0 0 0.5em;
    background-color: #f0f0f0;
    border-radius: 10px;
  }
`;

export const BioText = styled.p`
  text-align: justify;
  color: #666;
  margin: 20px 0;
`;

export const BioPointsContainer = styled.div`
  span {
  }
`;

export const FooterSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;

  ${mobile} {
    margin: 10px 0;
  }
`;

export const BioFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #666;
    font-size: 16px;
    font-weight: 400;
    margin: 0;

    ${mobile} {
      font-size: 14px;
    }
  }

  h2 {
    color: #46a934;
    font-size: ${highlightSize};
    font-weight: 600;
    background-color: rgba(94, 182, 98, 0.2);
    padding: 0.3em 0.5em;
    border-radius: 5px;
  }
`;
