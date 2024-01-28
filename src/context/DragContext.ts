import { createContext } from "react";
import { DragContextType } from "../types/DragContextTypes";

export const DragContext = createContext<DragContextType>({
  dragItemIndex: undefined,
  dragOverItemIndex: undefined,
  handleDragEnd: () => {},
  handleDragEnter: () => {},
  handleDragOver: () => {},
  handleDragStart: () => {},
  handleDrop: () => {},
});
