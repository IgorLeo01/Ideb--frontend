import React, {ReactNode} from "react";

import { Main } from "./style";

interface MainContainerProps {
    children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({children}) => {
    return (
        <Main>
            {children}
        </Main>
    )
};

export default MainContainer;
