import { useState } from "react";
import debounce from "../helper/Debounce";

interface useDraggableHookProp {
  draggable: boolean;
}

export default function useDraggable({ draggable }: useDraggableHookProp) {
  const [isDraggable, setIsDraggable] = useState(draggable);

  function handleHandlerMouseDown() {
    setIsDraggable(true);
  }
  function handleMouseUp() {
    setIsDraggable(false);
  }

  const handleHandlerMouseUp = debounce(handleMouseUp, 300);
  handleHandlerMouseUp();

  return [isDraggable, handleHandlerMouseDown, handleHandlerMouseUp] as const;
}
