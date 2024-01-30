import { createContext } from "react";
import { DragHandlerContextType } from "../types/DragHandlerContextTypes";

export const DragHandlerContext = createContext<DragHandlerContextType>({
  handleHandlerMouseUp: () => {},
  handleHandlerMouseDown: () => {},
});
