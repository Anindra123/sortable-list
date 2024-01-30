import { MouseEventHandler } from "react";

export interface DragHandlerContextType {
  handleHandlerMouseUp: MouseEventHandler<HTMLAnchorElement>;
  handleHandlerMouseDown: MouseEventHandler<HTMLAnchorElement>;
}
