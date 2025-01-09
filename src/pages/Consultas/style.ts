import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

export const EspecialistaList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mobile} {
        align-items: left;
    }
`;