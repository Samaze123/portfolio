import { createContext } from "react";
import { ContextProps } from "../interfaces";

const DataContext = createContext<ContextProps>({});

export default DataContext;
