import { useState } from "react";

interface useDraggableHookProp {
  draggable: boolean;
}

export default function useDraggable({ draggable }: useDraggableHookProp) {
  const [isDraggable, setIsDraggable] = useState(draggable);

  function handleHandlerMouseDown() {
    setIsDraggable(true);
  }
  function handleHandlerMouseUp() {
    setIsDraggable(false);
  }

  return [isDraggable, handleHandlerMouseDown, handleHandlerMouseUp] as const;
}
