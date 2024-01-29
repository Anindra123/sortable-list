import { createContext } from "react";
import { DragContextType } from "../types/DragContextTypes";

export const DragContext = createContext<DragContextType>({
  isTop: false,
  isBottom: false,
  dragItemIndex: undefined,
  dragOverItemIndex: undefined,
  handleDragEnd: () => {},
  handleDragEnter: () => {},
  handleDragOver: () => {},
  handleDragStart: () => {},
  handleDrop: () => {},
  handleDragLeave: () => {},
});
