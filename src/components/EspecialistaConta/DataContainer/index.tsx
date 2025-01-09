import React, {ReactNode} from "react";

import { Main } from "./style";

interface DataContainerProps<T extends string | number> {
    children: ReactNode;
    name: T;
}

function DataContainer <T extends string>({children, name}: DataContainerProps<T>) {
    return (
        <Main name={name.toString()}>
            {children}
        </Main>
    )
};

export default DataContainer;
